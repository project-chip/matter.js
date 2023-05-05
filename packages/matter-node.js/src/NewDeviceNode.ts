#!/usr/bin/env node
/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { singleton, commandExecutor, getIntParameter, getParameter } from "@project-chip/matter-node.js/util";
import { Time, TimeNode } from "@project-chip/matter-node.js/time";

Time.get = singleton(() => new TimeNode());

import { Network, NetworkNode } from "@project-chip/matter-node.js/net";

Network.get = singleton(() => new NetworkNode());

import { Crypto, CryptoNode } from "@project-chip/matter-node.js/crypto";

Crypto.get = singleton(() => new CryptoNode());

import { CommissionableMatterNode, Matter } from "@project-chip/matter-node.js";
import { OnOffLightDevice, OnOffPluginUnitDevice } from "@project-chip/matter-node.js/device";
import { VendorId } from "@project-chip/matter-node.js/datatype";
import { Logger } from "@project-chip/matter-node.js/log";
import { StorageManager, StorageBackendDisk } from "@project-chip/matter-node.js/storage";

const logger = Logger.get("Device");

const storage = new StorageBackendDisk(getParameter("store") ?? "device-node");

class Device {
    async start() {
        logger.info(`node-matter`);

        const storageManager = new StorageManager(storage);
        await storageManager.initialize();

        const isSocket = getParameter("type") === "socket";

        const deviceName = "Matter test device";
        const vendorName = "matter-node.js";
        const passcode = getIntParameter("passcode") ?? 20202021;
        const discriminator = getIntParameter("discriminator") ?? 3840;
        // product name / id and vendor id should match what is in the device certificate
        const vendorId = new VendorId(getIntParameter("vendorid") ?? 0xFFF1);
        const productName = `node-matter OnOff ${isSocket ? "Socket" : "Light"}`;
        const productId = getIntParameter("productid") ?? 0x8001;

        const netAnnounceInterface = getParameter("announceinterface");
        const port = getIntParameter("port") ?? 5540;

        const onOffDevice = isSocket ? new OnOffPluginUnitDevice() : new OnOffLightDevice();
        onOffDevice.addOnOffListener(on => commandExecutor(on ? "on" : "off")?.());

        const matterServer = new Matter(storageManager, netAnnounceInterface);

        const commissionableNode = new CommissionableMatterNode({
            port,
            deviceName,
            deviceType: onOffDevice.deviceType,
            passcode,
            discriminator,
            basicInformation: {
                vendorName,
                vendorId,
                productName,
                productId,
                serialNumber: `node-matter-${Time.nowMs()}`,
            }
        });

        commissionableNode.addDevice(onOffDevice);

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

new Device().start().then(() => { /* done */ }).catch(err => console.error(err));

process.on("SIGINT", () => {
    storage.close().then(() => process.exit(0)).catch(err => console.error(err));
});
