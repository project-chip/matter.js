#!/usr/bin/env node

/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { singleton } from "@project-chip/matter.js/util";
import { Time } from "@project-chip/matter.js/time";
import { TimeNode } from "./time/TimeNode";

Time.get = singleton(() => new TimeNode());

import { Network, UdpInterface } from "@project-chip/matter.js/net";
import { NetworkNode } from "./net/NetworkNode";

Network.get = singleton(() => new NetworkNode());

import { Crypto } from "@project-chip/matter.js/crypto";
import { CryptoNode } from "./crypto/CryptoNode";

Crypto.get = singleton(() => new CryptoNode());

import { Logger } from "@project-chip/matter.js/log";
import { StorageManager } from "@project-chip/matter.js/storage";
import { MatterDevice } from "@project-chip/matter.js";
import { SecureChannelProtocol } from "@project-chip/matter.js/securechannel";
import { PaseServer, CaseServer } from "@project-chip/matter.js/session";
import { ClusterServer, InteractionServer } from "@project-chip/matter.js/interaction";
import {
    BasicInformationCluster, GeneralCommissioningCluster, RegulatoryLocationType, OperationalCredentialsCluster,
    OnOffCluster, NetworkCommissioningCluster, NetworkCommissioningStatus, AdminCommissioningCluster,
    CommissioningWindowStatus, AccessControlCluster, GeneralCommissioningClusterHandler,
    OperationalCredentialsClusterHandler, OnOffClusterHandler, AdminCommissioningHandler, NetworkCommissioningHandler,

} from "@project-chip/matter.js/cluster";
import { VendorId, FabricIndex } from "@project-chip/matter.js/datatype";
import { DEVICE } from "@project-chip/matter.js/common";
import { MdnsBroadcaster, MdnsScanner } from "@project-chip/matter.js/mdns";
import { CommissionningFlowType, DiscoveryCapabilitiesSchema, ManualPairingCodeCodec, QrPairingCodeCodec, QrCode } from "@project-chip/matter.js/schema";
import { AttestationCertificateManager, CertificationDeclarationManager } from "@project-chip/matter.js/certificate";

import { commandExecutor, getIntParameter, getParameter } from "./util/CommandLine";
import { StorageBackendDisk } from "./storage/StorageBackendDisk";
import { requireMinNodeVersion } from "./util/Node";

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
                .addEndpoint(0x00, DEVICE.ROOT, [
                    new ClusterServer(BasicInformationCluster, {}, {
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
                    new ClusterServer(GeneralCommissioningCluster, {}, {
                        breadcrumb: BigInt(0),
                        basicCommissioningInfo: {
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
                    ),
                    new ClusterServer(AccessControlCluster,
                        {},
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
                .addEndpoint(0x01, DEVICE.ON_OFF_LIGHT, [onOffClusterServer])
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
