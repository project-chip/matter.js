/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { SECURE_CHANNEL_PROTOCOL_ID } from "./session/secure/SecureChannelMessages";
import { ResumptionRecord, SessionManager } from "./session/SessionManager";
import { NetInterface } from "../net/NetInterface";
import { ExchangeManager, MessageChannel } from "./common/ExchangeManager";
import { PaseClient } from "./session/secure/PaseClient";
import { ClusterClient, InteractionClient } from "./interaction/InteractionClient";
import { BasicInformationCluster } from "./cluster/BasicInformationCluster";
import { CommissioningError, GeneralCommissioningCluster, RegulatoryLocationType, CommissioningSuccessFailureResponse } from "./cluster/GeneralCommissioningCluster";
import { CertificateChainType, TlvCertSigningRequest, OperationalCredentialsCluster } from "./cluster/OperationalCredentialsCluster";
import { Crypto } from "../crypto/Crypto";
import { CertificateManager, jsToMatterDate, TlvOperationalCertificate, TlvRootCertificate } from "./certificate/CertificateManager";
import { Scanner } from "./common/Scanner";
import { Fabric, FabricBuilder } from "./fabric/Fabric";
import { CaseClient } from "./session/secure/CaseClient";
import { requireMinNodeVersion } from "../util/Node";
import { ChannelManager } from "./common/ChannelManager";
import { Logger } from "../log/Logger";
import { Time } from "../time/Time";
import { NodeId } from "./common/NodeId";
import { VendorId } from "./common/VendorId";
import { ByteArray } from "@project-chip/matter.js";
import { FabricIndex } from "./common/FabricIndex";
import { isIPv6 } from "../util/Ip";

requireMinNodeVersion(16);

const FABRIC_INDEX = new FabricIndex(1);
const FABRIC_ID = BigInt(1);
const CONTROLLER_NODE_ID = new NodeId(BigInt(1));
const ADMIN_VENDOR_ID = new VendorId(752);
const logger = Logger.get("MatterController");

export class MatterController {
    public static async create(scanner: Scanner, netInterfaceIpv4: NetInterface, netInterfaceIpv6: NetInterface) {
        const certificateManager = new RootCertificateManager();
        const ipkValue = Crypto.getRandomData(16);
        const fabricBuilder = new FabricBuilder(FABRIC_INDEX)
            .setRootCert(certificateManager.getRootCert())
            .setRootNodeId(CONTROLLER_NODE_ID)
            .setIdentityProtectionKey(ipkValue)
            .setRootVendorId(ADMIN_VENDOR_ID);
        fabricBuilder.setOperationalCert(certificateManager.generateNoc(fabricBuilder.getPublicKey(), FABRIC_ID, CONTROLLER_NODE_ID));
        const fabric = await fabricBuilder.build();
        return new MatterController(scanner, netInterfaceIpv4, netInterfaceIpv6, certificateManager, fabric);
    }

    private readonly sessionManager = new SessionManager(this);
    private readonly channelManager = new ChannelManager();
    private readonly exchangeManager = new ExchangeManager<MatterController>(this.sessionManager, this.channelManager);
    private readonly paseClient = new PaseClient();
    private readonly caseClient = new CaseClient();

    constructor(
        private readonly scanner: Scanner,
        private readonly netInterfaceIpv4: NetInterface,
        private readonly netInterfaceIpv6: NetInterface,
        private readonly certificateManager: RootCertificateManager,
        private readonly fabric: Fabric,
    ) {
        this.exchangeManager.addNetInterface(netInterfaceIpv4);
        this.exchangeManager.addNetInterface(netInterfaceIpv6);
    }

    async commission(commissionAddress: string, commissionPort: number, discriminator: number, setupPin: number) {
        const paseInterface = isIPv6(commissionAddress) ? this.netInterfaceIpv6 : this.netInterfaceIpv4;
        const paseChannel = await paseInterface.openChannel(commissionAddress, commissionPort);

        // Do PASE paring
        const paseUnsecureMessageChannel = new MessageChannel(paseChannel, this.sessionManager.getUnsecureSession());
        const paseSecureSession = await this.paseClient.pair(this, this.exchangeManager.initiateExchangeWithChannel(paseUnsecureMessageChannel, SECURE_CHANNEL_PROTOCOL_ID), setupPin);

        // Use the created secure session to do the commissioning
        const paseSecureMessageChannel = new MessageChannel(paseChannel, paseSecureSession);
        let interactionClient = new InteractionClient(this.exchangeManager, paseSecureMessageChannel);

        // Get and display the product name (just for debugging)
        const basicClusterClient = ClusterClient(interactionClient, 0, BasicInformationCluster);
        const productName = await basicClusterClient.getProductName();
        logger.info("Paired with device:", productName);

        // Do the commissioning
        let generalCommissioningClusterClient = ClusterClient(interactionClient, 0, GeneralCommissioningCluster);
        this.ensureSuccess(await generalCommissioningClusterClient.armFailSafe({ breadcrumbStep: BigInt(1), expiryLengthSeconds: 60 }));
        this.ensureSuccess(await generalCommissioningClusterClient.setRegulatoryConfig({ breadcrumbStep: BigInt(2), newRegulatoryConfig: RegulatoryLocationType.IndoorOutdoor, countryCode: "US"}));

        const operationalCredentialsClusterClient = ClusterClient(interactionClient, 0, OperationalCredentialsCluster);
        const { certificate: deviceAttestation } = await operationalCredentialsClusterClient.requestCertChain({ type: CertificateChainType.DeviceAttestation });
        // TODO: extract device public key from deviceAttestation
        const { certificate: productAttestation } = await operationalCredentialsClusterClient.requestCertChain({ type: CertificateChainType.ProductAttestationIntermediate });
        // TODO: validate deviceAttestation and productAttestation
        const { elements: attestationElements, signature: attestationSignature } = await operationalCredentialsClusterClient.requestAttestation({ attestationNonce: Crypto.getRandomData(32) });
        // TODO: validate attestationSignature using device public key
        const { elements: csrElements, signature: csrSignature } = await operationalCredentialsClusterClient.requestCertSigning({ certSigningRequestNonce: Crypto.getRandomData(32) });
        if (deviceAttestation.length === 0 || productAttestation.length === 0 || attestationElements.length === 0 || attestationSignature.length === 0 || csrElements.length === 0 || csrSignature.length === 0) {
            // TODO: validate the data really
            throw new Error("Invalid response from device");
        }
        // TOTO: validate csrSignature using device public key
        const { certSigningRequest } = TlvCertSigningRequest.decode(csrElements);
        const operationalPublicKey = CertificateManager.getPublicKeyFromCsr(certSigningRequest);

        await operationalCredentialsClusterClient.addRootCert({ certificate: this.certificateManager.getRootCert() });
        const peerNodeId = new NodeId(BigInt(1));
        const peerOperationalCert = this.certificateManager.generateNoc(operationalPublicKey, FABRIC_ID, peerNodeId);
        await operationalCredentialsClusterClient.addOperationalCert({
            operationalCert: peerOperationalCert,
            intermediateCaCert: new ByteArray(0),
            identityProtectionKey: this.fabric.identityProtectionKey,
            adminVendorId: ADMIN_VENDOR_ID,
            caseAdminNode: CONTROLLER_NODE_ID,
        });

        // Look for the device broadcast over MDNS
        const scanResult = await this.scanner.findDevice(this.fabric, peerNodeId);
        if (scanResult === undefined) throw new Error("The device being commissioned cannot be found on the network");
        const { ip: operationalIp, port: operationalPort } = scanResult;

        // Do CASE pairing
        const operationalInterface = isIPv6(operationalIp) ? this.netInterfaceIpv6 : this.netInterfaceIpv4;
        const operationalChannel = await operationalInterface.openChannel(operationalIp, operationalPort);
        const operationalUnsecureMessageExchange = new MessageChannel(operationalChannel, this.sessionManager.getUnsecureSession());
        const operationalSecureSession = await this.caseClient.pair(this, this.exchangeManager.initiateExchangeWithChannel(operationalUnsecureMessageExchange, SECURE_CHANNEL_PROTOCOL_ID), this.fabric, peerNodeId);
        this.channelManager.setChannel(this.fabric, peerNodeId, new MessageChannel(operationalChannel, operationalSecureSession));
        interactionClient = new InteractionClient(this.exchangeManager, this.channelManager.getChannel(this.fabric, peerNodeId));

        // Complete the commission
        generalCommissioningClusterClient = ClusterClient(interactionClient, 0, GeneralCommissioningCluster);
        this.ensureSuccess(await generalCommissioningClusterClient.commissioningComplete({}));
        return peerNodeId;
    }

    connect(nodeId: NodeId) {
        return new InteractionClient(this.exchangeManager, this.channelManager.getChannel(this.fabric, nodeId));
    }

    private ensureSuccess({ errorCode, debugText }: CommissioningSuccessFailureResponse) {
        if (errorCode === CommissioningError.Ok) return;
        throw new Error(`Commission error: ${errorCode}, ${debugText}`);
    }

    getNextAvailableSessionId() {
        return this.sessionManager.getNextAvailableSessionId();
    }

    createSecureSession(sessionId: number, fabric: Fabric | undefined,  peerNodeId: NodeId, peerSessionId: number, sharedSecret: ByteArray, salt: ByteArray, isInitiator: boolean, isResumption: boolean, idleRetransTimeoutMs?: number, activeRetransTimeoutMs?: number) {
        return this.sessionManager.createSecureSession(sessionId, fabric, peerNodeId, peerSessionId, sharedSecret, salt, isInitiator, isResumption, idleRetransTimeoutMs, activeRetransTimeoutMs);
    }

    getResumptionRecord(resumptionId: ByteArray) {
        return this.sessionManager.findResumptionRecordById(resumptionId);
    }

    findResumptionRecordByNodeId(nodeId: NodeId) {
        return this.sessionManager.findResumptionRecordByNodeId(nodeId);
    }

    saveResumptionRecord(resumptionRecord: ResumptionRecord) {
        return this.sessionManager.saveResumptionRecord(resumptionRecord);
    }

    close() {
        this.scanner.close();
        this.exchangeManager.close();
    }
}

class RootCertificateManager {
    private readonly rootCertId = BigInt(0);
    private readonly rootKeyPair = Crypto.createKeyPair();
    private readonly rootKeyIdentifier = Crypto.hash(this.rootKeyPair.publicKey).slice(0, 20);
    private readonly rootCertBytes = this.generateRootCert();
    private nextCertificateId = 1;

    getRootCert() {
        return this.rootCertBytes;
    }

    private generateRootCert() {
        const now = Time.get().now();
        const unsignedCertificate = {
            serialNumber: ByteArray.of(Number(this.rootCertId)),
            signatureAlgorithm: 1 /* EcdsaWithSHA256 */ ,
            publicKeyAlgorithm: 1 /* EC */,
            ellipticCurveIdentifier: 1 /* P256v1 */,
            issuer: { issuerRcacId: this.rootCertId },
            notBefore: jsToMatterDate(now, -1),
            notAfter: jsToMatterDate(now, 10),
            subject: { rcacId: this.rootCertId },
            ellipticCurvePublicKey: this.rootKeyPair.publicKey,
            extensions: {
                basicConstraints: { isCa: true },
                keyUsage: 96,
                subjectKeyIdentifier: this.rootKeyIdentifier,
                authorityKeyIdentifier: this.rootKeyIdentifier,
            },
        };
        const signature = Crypto.signPkcs8(this.rootKeyPair.privateKey, CertificateManager.rootCertToAsn1(unsignedCertificate));
        return TlvRootCertificate.encode({ ...unsignedCertificate, signature });
    }

    generateNoc(publicKey: ByteArray, fabricId: bigint, nodeId: NodeId) {
        const now = Time.get().now();
        const certId = this.nextCertificateId++;
        const unsignedCertificate = {
            serialNumber: ByteArray.of(certId), // TODO: figure out what should happen if certId > 255
            signatureAlgorithm: 1 /* EcdsaWithSHA256 */ ,
            publicKeyAlgorithm: 1 /* EC */,
            ellipticCurveIdentifier: 1 /* P256v1 */,
            issuer: { issuerRcacId: this.rootCertId },
            notBefore: jsToMatterDate(now, -1),
            notAfter: jsToMatterDate(now, 10),
            subject: { fabricId, nodeId },
            ellipticCurvePublicKey: publicKey,
            extensions: {
                basicConstraints: { isCa: false },
                keyUsage: 1,
                extendedKeyUsage: [ 2, 1 ],
                subjectKeyIdentifier: Crypto.hash(publicKey).slice(0, 20),
                authorityKeyIdentifier: this.rootKeyIdentifier,
            },
        };
        const signature = Crypto.signPkcs8(this.rootKeyPair.privateKey, CertificateManager.nocCertToAsn1(unsignedCertificate));
        return TlvOperationalCertificate.encode({ ...unsignedCertificate, signature });
    }
}
