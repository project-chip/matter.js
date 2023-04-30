#!/usr/bin/env node
/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { singleton } from "@project-chip/matter.js/util";
import { Time } from "@project-chip/matter.js/time";
import { TimeNode } from "./time/TimeNode";

Time.get = singleton(() => new TimeNode());

import { Network } from "@project-chip/matter.js/net";
import { NetworkNode } from "./net/NetworkNode";

Network.get = singleton(() => new NetworkNode());

import { Crypto } from "@project-chip/matter.js/crypto";
import { CryptoNode } from "./crypto/CryptoNode";

Crypto.get = singleton(() => new CryptoNode());

import { CommissionableMatterNode, Matter } from "@project-chip/matter.js";
import { OnOffLightDevice, OnOffPluginUnitDevice, Aggregator } from "@project-chip/matter.js/device";
import { DEVICE } from "@project-chip/matter.js/common";
import { VendorId } from "@project-chip/matter.js/datatype";
import { Logger } from "@project-chip/matter.js/log";
import { StorageManager } from "@project-chip/matter.js/storage";
import { StorageBackendDisk } from "./storage/StorageBackendDisk";
import { commandExecutor, getIntParameter, getParameter } from "./util/CommandLine";
import packageJson from "../package.json";

const logger = Logger.get("Device");

const storage = new StorageBackendDisk(getParameter("store") ?? "device-node");

class BridgedDevice {
    async start() {
        logger.info(`node-matter@${packageJson.version}`);

        const storageManager = new StorageManager(storage);
        await storageManager.initialize();

        const deviceName = "Matter test device";
        const deviceType = DEVICE.AGGREGATOR.code;
        const vendorName = "matter-node.js";
        const passcode = getIntParameter("passcode") ?? 20202021;
        const discriminator = getIntParameter("discriminator") ?? 3840;
        // product name / id and vendor id should match what is in the device certificate
        const vendorId = new VendorId(getIntParameter("vendorid") ?? 0xFFF1);
        const productName = `node-matter OnOff-Bridge`;
        const productId = getIntParameter("productid") ?? 0x8001;

        const netAnnounceInterface = getParameter("announceinterface");
        const port = getIntParameter("port") ?? 5540;

        const numDevices = getIntParameter("num") || 2;

        const matterServer = new Matter(storageManager, netAnnounceInterface);

        const commissionableNode = new CommissionableMatterNode({
            port,
            deviceName,
            deviceType,
            passcode,
            discriminator,
            basicInformation: {
                vendorName,
                vendorId,
                productName,
                productId,
                serialNumber: `node-matter-${packageJson.version}`,
            }
        });

        const aggregator = new Aggregator();

        for (let i = 1; i <= numDevices; i++) {
            const onOffDevice = getParameter(`type${i}`) === "socket" ? new OnOffPluginUnitDevice() : new OnOffLightDevice();
            onOffDevice.addOnOffListener(on => commandExecutor(on ? `on${i}` : `off${i}`)?.());
            aggregator.addBridgedDevice(onOffDevice, {
                nodeLabel: `OnOff ${onOffDevice instanceof OnOffPluginUnitDevice ? 'Socket' : 'Light'} ${i}`,
                serialNumber: `node-matter-${packageJson.version}-${i}`,
                reachable: true
            });
        }

        commissionableNode.addDevice(aggregator);

        matterServer.addCommissionableNode(commissionableNode);
        await matterServer.start();

        logger.info("Listening");
        if (!commissionableNode.isCommissioned()) {
            const pairingData = commissionableNode.getPairingCode();
            const { qrCode, qrPairingCode, manualPairingCode } = pairingData;

            console.log(qrCode);
            console.log(`QR Code URL: https://project-chip.github.io/connectedhomeip/qrcode.html?data=${qrPairingCode}`);
            console.log(`Manual pairing code: ${manualPairingCode}`);
        } else {
            console.log("Device is already commissioned. Waiting for controllers to connect ...");
        }
    }
}

new BridgedDevice().start().then(() => { /* done */ }).catch(err => console.error(err));

process.on("SIGINT", () => {
    storage.close().then(() => process.exit(0)).catch(err => console.error(err));
});
