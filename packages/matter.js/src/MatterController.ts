/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Important note: This file is part of the legacy matter-node (internal) API and should not be used anymore directly!
 * Please use the new API classes!
 * @deprecated
 */

import { SECURE_CHANNEL_PROTOCOL_ID } from "./protocol/securechannel/SecureChannelMessages.js";
import { ResumptionRecord, SessionManager } from "./session/SessionManager.js";
import { PaseClient } from "./session/pase/PaseClient.js";
import { CaseClient } from "./session/case/CaseClient.js";
import { NetInterface } from "./net/NetInterface.js";
import { ClusterClient, InteractionClient } from "./protocol/interaction/InteractionClient.js";
import { FabricIndex } from "./datatype/FabricIndex.js";
import { NodeId } from "./datatype/NodeId.js";
import { VendorId } from "./datatype/VendorId.js";
import { Crypto } from "./crypto/Crypto.js";
import { CertificateManager } from "./certificate/CertificateManager.js";
import { RootCertificateManager } from "./certificate/RootCertificateManager.js";
import { Scanner } from "./common/Scanner.js";
import { Logger } from "./log/Logger.js";
import { Fabric, FabricBuilder, FabricJsonObject } from "./fabric/Fabric.js";
import { ChannelManager, NoChannelError } from "./protocol/ChannelManager.js";
import { StorageContext } from "./storage/StorageContext.js";
import { ExchangeManager, ExchangeProvider, MessageChannel } from "./protocol/ExchangeManager.js";
import { isIPv6 } from "./util/Ip.js";
import { BasicInformationCluster } from "./cluster/BasicInformationCluster.js";
import { CommissioningError, CommissioningSuccessFailureResponse, GeneralCommissioningCluster, RegulatoryLocationType } from "./cluster/GeneralCommissioningCluster.js";
import { CertificateChainType, OperationalCredentialsCluster, TlvCertSigningRequest } from "./cluster/OperationalCredentialsCluster.js";
import { ByteArray } from "./util/ByteArray.js";

export type CommissioningData = {
    regulatoryLocation: RegulatoryLocationType;
    regulatoryCountryCode: string;
}

const FABRIC_INDEX = new FabricIndex(1);
const FABRIC_ID = BigInt(1);
const ADMIN_VENDOR_ID = new VendorId(752);
const logger = Logger.get("MatterController");

export class MatterController {
    public static async create(scanner: Scanner, netInterfaceIpv4: NetInterface | undefined, netInterfaceIpv6: NetInterface, storage: StorageContext, operationalServerAddress?: ServerAddress, commissioningOptions?: CommissioningData): Promise<MatterController> {
        const CONTROLLER_NODE_ID = new NodeId(Crypto.getRandomBigUInt64());
        const certificateManager = new RootCertificateManager(storage);

        const ipkValue = Crypto.getRandomData(16);
        const fabricBuilder = new FabricBuilder(FABRIC_INDEX)
            .setRootCert(certificateManager.getRootCert())
            .setRootNodeId(CONTROLLER_NODE_ID)
            .setIdentityProtectionKey(ipkValue)
            .setRootVendorId(ADMIN_VENDOR_ID);
        fabricBuilder.setOperationalCert(certificateManager.generateNoc(fabricBuilder.getPublicKey(), FABRIC_ID, CONTROLLER_NODE_ID));

        // Check if we have a fabric stored in the storage, if yes initialize this one, else build a new one
        const controllerStorage = storage.createContext("MatterController");
        if (controllerStorage.has("fabric")) {
            const storedFabric = Fabric.createFromStorageObject(controllerStorage.get<FabricJsonObject>("fabric"));
            return new MatterController(scanner, netInterfaceIpv4, netInterfaceIpv6, certificateManager, storedFabric, storage, operationalServerAddress, commissioningOptions);
        } else {
            return new MatterController(scanner, netInterfaceIpv4, netInterfaceIpv6, certificateManager, await fabricBuilder.build(), storage, operationalServerAddress, commissioningOptions);
        }
    }

    private readonly sessionManager;
    private readonly channelManager = new ChannelManager();
    private readonly exchangeManager;
    private readonly paseClient = new PaseClient();
    private readonly caseClient = new CaseClient();
    private readonly controllerStorage: StorageContext;
    private readonly commissioningOptions: CommissioningData;

    constructor(
        private readonly scanner: Scanner,
        private readonly netInterfaceIpv4: NetInterface | undefined,
        private readonly netInterfaceIpv6: NetInterface,
        private readonly certificateManager: RootCertificateManager,
        private readonly fabric: Fabric,
        private readonly storage: StorageContext,
        public operationalServerAddress?: ServerAddress,
        commissioningOptions?: CommissioningData
    ) {
        this.controllerStorage = this.storage.createContext("MatterController");

        // If controller has a stored operational server address, use it, irrelevant what was passed in the constructor
        if (this.controllerStorage.has("operationalServerAddress")) {
            this.operationalServerAddress = this.controllerStorage.get<ServerAddress>("operationalServerAddress");
        }

        this.sessionManager = new SessionManager(this, this.storage);
        this.sessionManager.initFromStorage([this.fabric]);

        this.exchangeManager = new ExchangeManager<MatterController>(this.sessionManager, this.channelManager);
        if (netInterfaceIpv4 !== undefined) {
            this.exchangeManager.addNetInterface(netInterfaceIpv4);
        }
        this.exchangeManager.addNetInterface(netInterfaceIpv6);

        this.commissioningOptions = commissioningOptions ?? {
            regulatoryLocation: RegulatoryLocationType.Outdoor, // Set to the most restrictive if relevant
            regulatoryCountryCode: "XX"
        };
    }

    async commission(commissionAddress: string, commissionPort: number, _discriminator: number, setupPin: number) {
        const paseInterface = isIPv6(commissionAddress) ? this.netInterfaceIpv6 : this.netInterfaceIpv4;
        const paseChannel = await paseInterface.openChannel(commissionAddress, commissionPort);

        // Do PASE paring
        const paseUnsecureMessageChannel = new MessageChannel(paseChannel, this.sessionManager.getUnsecureSession());
        const paseExchange = this.exchangeManager.initiateExchangeWithChannel(paseUnsecureMessageChannel, SECURE_CHANNEL_PROTOCOL_ID);
        const paseSecureSession = await this.paseClient.pair(this, paseExchange, setupPin)

        this.operationalServerAddress = address;
        this.controllerStorage.set("operationalServerAddress", address);

        // Use the created secure session to do the commissioning
        const paseSecureMessageChannel = new MessageChannel(paseChannel, paseSecureSession);
        let interactionClient = new InteractionClient(new ExchangeProvider(this.exchangeManager, paseSecureMessageChannel));

        // Get and display the product name (just for debugging)
        const basicClusterClient = ClusterClient(BasicInformationCluster, 0, interactionClient);
        const productName = await basicClusterClient.getProductNameAttribute();
        logger.info("Paired with device:", productName);

        // Do the commissioning
        let generalCommissioningClusterClient = ClusterClient(GeneralCommissioningCluster, 0, interactionClient);
        this.ensureSuccess("armFailSafe", await generalCommissioningClusterClient.armFailSafe({ breadcrumb: BigInt(1), expiryLengthSeconds: 60 }));

        let locationCapability = await generalCommissioningClusterClient.getLocationCapabilityAttribute();
        if (locationCapability === RegulatoryLocationType.IndoorOutdoor) {
            locationCapability = this.commissioningOptions.regulatoryLocation;
        } else {
            logger.debug(`Device does not support a configurable regulatory location type. Location is set to "${locationCapability === RegulatoryLocationType.Indoor ? "Indoor" : "Outdoor"}"`);
        }
        let countryCode = this.commissioningOptions.regulatoryCountryCode;
        const regulatoryResult = await generalCommissioningClusterClient.setRegulatoryConfig({ breadcrumb: BigInt(2), newRegulatoryConfig: locationCapability, countryCode });
        if (regulatoryResult.errorCode === CommissioningError.ValueOutsideRange && countryCode !== "XX") {
            logger.debug(`Device does not support a configurable country code. Use "XX" instead of "${countryCode}"`);
            countryCode = "XX";
            this.ensureSuccess("setRegulatoryConfig", await generalCommissioningClusterClient.setRegulatoryConfig({ breadcrumb: BigInt(2), newRegulatoryConfig: locationCapability, countryCode }));
        } else {
            this.ensureSuccess("setRegulatoryConfig", regulatoryResult);
        }

        const operationalCredentialsClusterClient = ClusterClient(OperationalCredentialsCluster, 0, interactionClient);
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
        // TODO: validate csrSignature using device public key
        const { certSigningRequest } = TlvCertSigningRequest.decode(csrElements);
        const operationalPublicKey = CertificateManager.getPublicKeyFromCsr(certSigningRequest);

        await operationalCredentialsClusterClient.addRootCert({ certificate: this.certificateManager.getRootCert() });
        const peerNodeId = this.fabric.rootNodeId;
        const peerOperationalCert = this.certificateManager.generateNoc(operationalPublicKey, FABRIC_ID, peerNodeId);
        await operationalCredentialsClusterClient.addOperationalCert({
            operationalCert: peerOperationalCert,
            intermediateCaCert: new ByteArray(0),
            identityProtectionKey: this.fabric.identityProtectionKey,
            adminVendorId: ADMIN_VENDOR_ID,
            caseAdminNode: peerNodeId,
        });

        // Look for the device broadcast over MDNS and do CASE pairing
        interactionClient = await this.connect(peerNodeId, 5);

        // Complete the commission
        generalCommissioningClusterClient = ClusterClient(GeneralCommissioningCluster, 0, interactionClient);
        this.ensureSuccess("commissioningComplete", await generalCommissioningClusterClient.commissioningComplete());

        this.controllerStorage.set("fabric", this.fabric.toStorageObject());
        this.controllerStorage.set("fabricCommissioned", true);

        return peerNodeId;
    }

    async resume(peerNodeId: NodeId, timeoutSeconds = 60) {
        const scanResult = await this.scanner.findDevice(this.fabric, peerNodeId, timeoutSeconds);
        if (scanResult === undefined) throw new Error("The device being commissioned cannot be found on the network");
        const { ip: operationalIp, port: operationalPort } = scanResult;

        return this.pair(peerNodeId, operationalIp, operationalPort);
    }

    async pair(peerNodeId: NodeId, operationalServerAddress: ServerAddress) {
        const { ip: operationalIp, port: operationalPort } = operationalServerAddress;
        // Do CASE pairing
        const isIpv6Address = isIPv6(operationalIp);
        const operationalInterface = isIpv6Address ? this.netInterfaceIpv6 : this.netInterfaceIpv4;

        if (operationalInterface === undefined) {
            throw new PairRetransmissionLimitReachedError(`IPv${isIpv6Address ? "6" : "4"} interface not initialized for port ${operationalPort}. Can not use this address for pairing.`);
        }

        const operationalChannel = await operationalInterface.openChannel(operationalIp, operationalPort);
        const operationalUnsecureMessageExchange = new MessageChannel(operationalChannel, this.sessionManager.getUnsecureSession());
        const operationalSecureSession = await this.caseClient.pair(this, this.exchangeManager.initiateExchangeWithChannel(operationalUnsecureMessageExchange, SECURE_CHANNEL_PROTOCOL_ID), this.fabric, peerNodeId);
        const channel = new MessageChannel(operationalChannel, operationalSecureSession);
        this.channelManager.setChannel(this.fabric, peerNodeId, channel);

        this.operationalServerAddress = operationalServerAddress;
        this.controllerStorage.set("operationalServerAddress", operationalServerAddress);

        return channel;
    }

    isCommissioned() {
        return this.controllerStorage.get("fabricCommissioned", false);
    }

    getOperationalServerAddress() {
        return this.operationalServerAddress;
    }

    async connect(nodeId: NodeId, timeoutSeconds?: number) {
        let channel: MessageChannel<any>;
        try {
            channel = this.channelManager.getChannel(this.fabric, nodeId);
        } catch (error) {
            if (error instanceof NoChannelError) {
                channel = await this.resume(nodeId, timeoutSeconds);
            } else {
                throw error;
            }
        }
        return new InteractionClient(new ExchangeProvider(this.exchangeManager, channel, async () => {
            this.channelManager.removeChannel(this.fabric, nodeId);
            await this.resume(nodeId);
            return this.channelManager.getChannel(this.fabric, nodeId);
        }));
    }

    private ensureSuccess(context: string, { errorCode, debugText }: CommissioningSuccessFailureResponse) {
        if (errorCode === CommissioningError.Ok) return;
        throw new Error(`Commission error for "${context}": ${errorCode}, ${debugText}`);
    }

    getNextAvailableSessionId() {
        return this.sessionManager.getNextAvailableSessionId();
    }

    getFabric() {
        return this.fabric;
    }

    createSecureSession(sessionId: number, fabric: Fabric | undefined, peerNodeId: NodeId, peerSessionId: number, sharedSecret: ByteArray, salt: ByteArray, isInitiator: boolean, isResumption: boolean, idleRetransTimeoutMs?: number, activeRetransTimeoutMs?: number) {
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

    announce() {
        // nothing TODO
    }

    close() {
        this.scanner.close();
        this.exchangeManager.close();
        this.netInterfaceIpv4?.close();
        this.netInterfaceIpv6.close();
    }
}
