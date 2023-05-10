#!/usr/bin/env node

/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Important note: This file is part of the legacy matter-node API and should not be used anymore!
 * Please use the new API classes!
 */

// Include this first to auto-register Crypto, Network and Time Node.js implementations
import { MatterDevice } from "../"; // same as @project-chip/matter-node.js

import { commandExecutor, getIntParameter, getParameter, requireMinNodeVersion } from "../util"; // same as @project-chip/matter-node.js/util
import { UdpInterface } from "../net"; // same as @project-chip/matter-node.js/net
import { Logger } from "../exports/log"; // same as @project-chip/matter-node.js/log
import { StorageManager, StorageBackendDisk } from "../storage"; // same as @project-chip/matter-node.js/storage
import { SecureChannelProtocol } from "../exports/securechannel"; // same as @project-chip/matter-node.js/securechannel
import { PaseServer, CaseServer } from "../exports/session"; // same as @project-chip/matter-node.js/session
import { ClusterServer, InteractionServer } from "../exports/interaction"; // same as @project-chip/matter-node.js/interaction
import {
    BasicInformationCluster, GeneralCommissioningCluster, RegulatoryLocationType, OperationalCredentialsCluster,
    OnOffCluster, EthernetNetworkCommissioningCluster, NetworkCommissioningStatus, AdminCommissioningCluster,
    CommissioningWindowStatus, AccessControlCluster, GeneralCommissioningClusterHandler,
    OperationalCredentialsClusterHandler, OnOffClusterHandler, AdminCommissioningHandler, NetworkCommissioningHandler,
} from "../exports/cluster"; // same as @project-chip/matter-node.js/cluster
import { VendorId, FabricIndex } from "../exports/datatype"; // same as @project-chip/matter-node.js/datatype
import { DeviceTypes } from "../exports/device"; // same as @project-chip/matter-node.js/device
import { MdnsBroadcaster, MdnsScanner } from "../exports/mdns"; // same as @project-chip/matter-node.js/mdns
import {
    CommissionningFlowType, DiscoveryCapabilitiesSchema, ManualPairingCodeCodec, QrPairingCodeCodec, QrCode
} from "../exports/schema";  // same as @project-chip/matter-node.js/schema
import { AttestationCertificateManager, CertificationDeclarationManager } from "../exports/certificate";  // same as @project-chip/matter-node.js/certificate
import { Crypto } from "../crypto";  // same as @project-chip/matter-node.js/crypto
import { Time } from "../time";  // same as @project-chip/matter-node.js/time

const logger = Logger.get("Device");

requireMinNodeVersion(16);

const storage = new StorageBackendDisk(getParameter("store") ?? "device-node");

class DeviceNode {
    async start() {
        logger.info(`node-matter`);

        const storageManager = new StorageManager(storage);
        await storageManager.initialize();

        const deviceStorage = storageManager.createContext("Device");

        const deviceName = "Matter test device";
        const deviceType = 257 /* Dimmable bulb */;
        const vendorName = "matter-node.js";
        const passcode = getIntParameter("passcode") ?? deviceStorage.get("passcode", 20202021);
        const discriminator = getIntParameter("discriminator") ?? deviceStorage.get("discriminator", 3840);
        if (discriminator > 4095) throw new Error("Discriminator value must be less than 4096");
        // product name / id and vendor id should match what is in the device certificate
        const vendorId = new VendorId(getIntParameter("vendorid") ?? deviceStorage.get("vendorid", 0xFFF1));
        const productName = "matter-node.js Test Product";
        const productId = getIntParameter("productid") ?? deviceStorage.get("productid", 0x8000);

        deviceStorage.set("passcode", passcode);
        deviceStorage.set("discriminator", discriminator);
        deviceStorage.set("vendorid", vendorId.id);
        deviceStorage.set("productid", productId);

        // Barebone implementation of the On/Off cluster
        const onOffClusterServer = ClusterServer(
            OnOffCluster,
            { onOff: false }, // Off by default
            OnOffClusterHandler()
        );

        // We listen to the attribute update to trigger an action. This could also have been done in the method invokations in the server.
        onOffClusterServer.attributes.onOff.addListener(on => commandExecutor(on ? "on" : "off")?.());

        const secureChannelProtocol = new SecureChannelProtocol(
            await PaseServer.fromPin(passcode, { iterations: 1000, salt: Crypto.getRandomData(32) }),
            new CaseServer(),
        );

        const netAnnounceInterface = getParameter("announceinterface");
        const port = getIntParameter("port") ?? 5540;

        const paa = new AttestationCertificateManager(vendorId);
        const { keyPair: dacKeyPair, dac } = paa.getDACert(productId)
        const certificationDeclaration = CertificationDeclarationManager.generate(vendorId, productId);

        const device = new MatterDevice(deviceName, deviceType, vendorId, productId, discriminator, storageManager)
            .addNetInterface(await UdpInterface.create(port, "udp4"))
            .addNetInterface(await UdpInterface.create(port, "udp6"))
            .addScanner(await MdnsScanner.create())
            .addBroadcaster(await MdnsBroadcaster.create(port, netAnnounceInterface))
            .addProtocolHandler(secureChannelProtocol)
            .addProtocolHandler(new InteractionServer(storageManager)
                .addEndpoint(0x00, DeviceTypes.ROOT, [
                    ClusterServer(BasicInformationCluster, {}, {
                        dataModelRevision: 1,
                        vendorName,
                        vendorId,
                        productName,
                        productId,
                        nodeLabel: productName,
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
                        serialNumber: `node-matter-${Time.nowMs()}`,
                    }, {}),
                    ClusterServer(GeneralCommissioningCluster, {}, {
                        breadcrumb: BigInt(0),
                        basicCommissioningInfo: {
                            failSafeExpiryLengthSeconds: 60 /* 1min */,
                            maxCumulativeFailsafeSeconds: 900 /* Recommended according to Specs */,
                        },
                        regulatoryConfig: RegulatoryLocationType.Indoor,
                        locationCapability: RegulatoryLocationType.IndoorOutdoor,
                        supportsConcurrentConnections: true,
                    }, GeneralCommissioningClusterHandler),
                    ClusterServer(OperationalCredentialsCluster, {}, {
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
                    ClusterServer(EthernetNetworkCommissioningCluster,
                        {
                            wifi: false,
                            thread: false,
                            ethernet: true,
                        },
                        {
                            maxNetworks: 1,
                            interfaceEnabled: true,
                            lastConnectErrorValue: 0,
                            lastNetworkId: Buffer.alloc(32),
                            lastNetworkingStatus: NetworkCommissioningStatus.Success,
                            networks: [{ networkId: Buffer.alloc(32), connected: true }],
                        },
                        NetworkCommissioningHandler(),
                    ),
                    ClusterServer(AdminCommissioningCluster,
                        {
                            windowStatus: CommissioningWindowStatus.WindowNotOpen,
                            adminFabricIndex: null,
                            adminVendorId: null,
                        },
                        AdminCommissioningHandler(secureChannelProtocol),
                    ),
                    ClusterServer(AccessControlCluster,
                        {
                            acl: [],
                            extension: [],
                            subjectsPerAccessControlEntry: 4,
                            targetsPerAccessControlEntry: 4,
                            accessControlEntriesPerFabric: 3
                        },
                        {},
                    )
                ])
                .addEndpoint(0x01, DeviceTypes.ON_OFF_LIGHT, [onOffClusterServer])
            );
        await device.start();

        logger.info("Listening");
        if (!device.isCommissioned()) {
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
        } else {
            console.log("DeviceNode is already commissioned. Waiting for controllers to connect ...");
        }
    }
}

new DeviceNode().start().catch(error => logger.error(error));

process.on("SIGINT", () => {
    storage.close().then(() => process.exit(0)).catch(() => process.exit(1));
});
