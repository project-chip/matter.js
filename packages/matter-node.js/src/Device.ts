#!/usr/bin/env node

/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { singleton } from "./util/Singleton";
import { Time } from "./time/Time";
import { TimeNode } from "./time/TimeNode";

Time.get = singleton(() => new TimeNode());

import { Network } from "./net/Network";
import { NetworkNode } from "./net/node/NetworkNode";

Network.get = singleton(() => new NetworkNode());

import { MatterDevice } from "./matter/MatterDevice";
import { UdpInterface } from "./net/UdpInterface";
import { SecureChannelProtocol } from "./matter/session/secure/SecureChannelProtocol";
import { PaseServer } from "./matter/session/secure/PaseServer";
import { Crypto } from "./crypto/Crypto";
import { CaseServer } from "./matter/session/secure/CaseServer";
import { ClusterServer, InteractionServer } from "./matter/interaction/InteractionServer";
import { BasicInformationCluster } from "./matter/cluster/BasicInformationCluster";
import { GeneralCommissioningCluster, RegulatoryLocationType } from "./matter/cluster/GeneralCommissioningCluster";
import { OperationalCredentialsCluster } from "./matter/cluster/OperationalCredentialsCluster";
import { DEVICE } from "./matter/common/DeviceTypes";
import { MdnsBroadcaster } from "./matter/mdns/MdnsBroadcaster";
import { commandExecutor } from "./util/CommandLine";
import { OnOffCluster } from "./matter/cluster/OnOffCluster";
import { GeneralCommissioningClusterHandler } from "./matter/cluster/server/GeneralCommissioningServer";
import { OperationalCredentialsClusterHandler } from "./matter/cluster/server/OperationalCredentialsServer";
import { MdnsScanner } from "./matter/mdns/MdnsScanner";
import packageJson from "../package.json";
import { Logger } from "./log/Logger";
import { VendorId } from "./matter/common/VendorId";
import { OnOffClusterHandler } from "./matter/cluster/server/OnOffServer";
import { CommissionningFlowType, DiscoveryCapabilitiesSchema, ManualPairingCodeCodec, QrPairingCodeCodec } from "./codec/PairingCode.js";
import { QrCode } from "./codec/QrCode.js";
import { NetworkCommissioningCluster, NetworkCommissioningStatus } from "./matter/cluster/NetworkCommissioningCluster";
import { AdminCommissioningCluster, CommissioningWindowStatus } from "./matter/cluster/AdminCommissioningCluster";
import { AdminCommissioningHandler } from "./matter/cluster/server/AdminCommissioningServer";
import { NetworkCommissioningHandler } from "./matter/cluster/server/NetworkCommissioningServer";
import { FabricIndex } from "./matter/common/FabricIndex";
import { AttestationCertificateManager } from "./matter/certificate/AttestationCertificateManager";
import { CertificationDeclarationManager } from "./matter/certificate/CertificationDeclarationManager";

const logger = Logger.get("Device");

class Device {
    async start() {
        logger.info(`node-matter@${packageJson.version}`);

        const deviceName = "Matter test device";
        const deviceType = 257 /* Dimmable bulb */;
        const vendorName = "node-matter";
        const passcode = 20202021;
        const discriminator = 3840;
        // product name / id and vendor id should match what is in the device certificate
        const vendorId = new VendorId(0xFFF1);
        const productName = "Matter Test DAC 0007";
        const productId = 0X8000;

        // Barebone implementation of the On/Off cluster
        const onOffClusterServer = new ClusterServer(
            OnOffCluster,
            { lightingLevelControl: false },
            { onOff: false }, // Off by default
            OnOffClusterHandler()
        );

        // We listen to the attribute update to trigger an action. This could also have been done in the method invokations in the server.
        onOffClusterServer.attributes.onOff.addListener(on => commandExecutor(on ? "on" : "off")?.());

        const secureChannelProtocol = new SecureChannelProtocol(
            await PaseServer.fromPin(passcode, { iterations: 1000, salt: Crypto.getRandomData(32) }),
            new CaseServer(),
        );

        const paa = new AttestationCertificateManager(vendorId);
        const { keyPair: dacKeyPair, dac } = paa.getDACert(productId)
        const certificationDeclaration = CertificationDeclarationManager.generate(vendorId, productId);

        (new MatterDevice(deviceName, deviceType, vendorId, productId, discriminator))
            .addNetInterface(await UdpInterface.create(5540, "udp4"))
            .addNetInterface(await UdpInterface.create(5540, "udp6"))
            .addScanner(await MdnsScanner.create())
            .addBroadcaster(await MdnsBroadcaster.create())
            .addProtocolHandler(secureChannelProtocol)
            .addProtocolHandler(new InteractionServer()
               .addEndpoint(0x00, DEVICE.ROOT, [
                   new ClusterServer(BasicInformationCluster, {}, {
                       dataModelRevision: 1,
                       vendorName,
                       vendorId,
                       productName,
                       productId,
                       nodeLabel: "",
                       hardwareVersion: 0,
                       hardwareVersionString: "0",
                       location: "US",
                       localConfigDisabled: false,
                       softwareVersion: 1,
                       softwareVersionString: "v1",
                       capabilityMinima: {
                           caseSessionsPerFabric: 3,
                           subscriptionsPerFabric: 3,
                       },
                       serialNumber: `node-matter-${packageJson.version}`,
                   }, {}),
                   new ClusterServer(GeneralCommissioningCluster, {}, {
                       breadcrumb: BigInt(0),
                       commissioningInfo: {
                           failSafeExpiryLengthSeconds: 60 /* 1min */,
                           maxCumulativeFailsafeSeconds: 900 /* Recommended according to Specs */,
                       },
                       regulatoryConfig: RegulatoryLocationType.Indoor,
                       locationCapability: RegulatoryLocationType.IndoorOutdoor,
                       supportsConcurrentConnections: true,
                   }, GeneralCommissioningClusterHandler),
                   new ClusterServer(OperationalCredentialsCluster, {}, {
                           nocs: [],
                           fabrics: [],
                           supportedFabrics: 254,
                           commissionedFabrics: 0,
                           trustedRootCertificates: [],
                           currentFabricIndex: FabricIndex.NO_FABRIC,
                       },
                       OperationalCredentialsClusterHandler({
                           devicePrivateKey: dacKeyPair.privateKey,
                           deviceCertificate: dac,
                           deviceIntermediateCertificate: paa.getPAICert(),
                           certificationDeclaration,
                       }),
                   ),
                   new ClusterServer(NetworkCommissioningCluster,
                        {
                            wifi: false,
                            thread: false,
                            ethernet: true,
                        },
                        {
                            maxNetworks: 1,
                            connectMaxTimeSeconds: 20,
                            interfaceEnabled: true,
                            lastConnectErrorValue: 0,
                            lastNetworkId: Buffer.alloc(32),
                            lastNetworkingStatus: NetworkCommissioningStatus.Success,
                            networks: [{ networkId: Buffer.alloc(32), connected: true }],
                            scanMaxTimeSeconds: 5,
                        },
                        NetworkCommissioningHandler(),
                    ),
                    new ClusterServer(AdminCommissioningCluster,
                        {
                            basic: true,
                        },
                        {
                            windowStatus: CommissioningWindowStatus.WindowNotOpen,
                            adminFabricIndex: null,
                            adminVendorId: null,
                        },
                        AdminCommissioningHandler(secureChannelProtocol),
                    )
                ])
                .addEndpoint(0x01, DEVICE.ON_OFF_LIGHT, [ onOffClusterServer ])
            )
            .start()

        logger.info("Listening");

        const qrPairingCode = QrPairingCodeCodec.encode({
            version: 0,
            vendorId: vendorId.id,
            productId,
            flowType: CommissionningFlowType.Standard,
            discriminator,
            passcode,
            discoveryCapabilities: DiscoveryCapabilitiesSchema.encode({
                ble: false,
                softAccessPoint: false,
                onIpNetwork: true,
            }),
        });
        console.log(QrCode.encode(qrPairingCode));
        console.log(`QR Code URL: https://project-chip.github.io/connectedhomeip/qrcode.html?data=${qrPairingCode}`);
        console.log(`Manual pairing code: ${ManualPairingCodeCodec.encode({ discriminator, passcode })}`);
    }
}

new Device().start().catch(error => logger.error(error));
