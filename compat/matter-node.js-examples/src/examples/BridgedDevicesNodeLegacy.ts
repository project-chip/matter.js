#!/usr/bin/env node
/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * IMPORTANT: This example uses a Legacy API which will be deprecated in the future.
 * It is just still here to support developers in converting their code to the new API!
 */

/**
 * This example shows how to create a device bridge that exposed multiple devices.
 * It can be used as CLI script and starting point for your own device node implementation.
 */

/**
 * Import needed modules from @project-chip/matter-node.js
 */
// Include this first to auto-register Crypto, Network and Time Node.js implementations
import { StorageBackendDisk, StorageManager } from "@project-chip/matter-node.js/storage";
import {
    commandExecutor,
    getIntParameter,
    getParameter,
    hasParameter,
    requireMinNodeVersion,
    Time,
} from "@project-chip/matter-node.js/util";

import { LogFormat, Logger, LogLevel } from "@project-chip/matter-node.js/log";
import { CommissioningServer, MatterServer } from "@project-chip/matter.js";
import { VendorId } from "@project-chip/matter.js/datatype";
import { Aggregator, DeviceTypes, OnOffLightDevice, OnOffPluginUnitDevice } from "@project-chip/matter.js/device";
import { QrCode } from "@project-chip/matter.js/schema";

const logger = Logger.get("Device");

requireMinNodeVersion(16);

/** Configure logging */
switch (getParameter("loglevel")) {
    case "fatal":
        Logger.defaultLogLevel = LogLevel.FATAL;
        break;
    case "error":
        Logger.defaultLogLevel = LogLevel.ERROR;
        break;
    case "warn":
        Logger.defaultLogLevel = LogLevel.WARN;
        break;
    case "info":
        Logger.defaultLogLevel = LogLevel.INFO;
        break;
}

switch (getParameter("logformat")) {
    case "plain":
        Logger.format = LogFormat.PLAIN;
        break;
    case "html":
        Logger.format = LogFormat.HTML;
        break;
    default:
        if (process.stdin?.isTTY) Logger.format = LogFormat.ANSI;
}

const storageLocation = getParameter("store") ?? ".device-node";
const storage = new StorageBackendDisk(storageLocation, hasParameter("clearstorage"));
logger.info(`Storage location: ${storageLocation} (Directory)`);
logger.info(
    'Use the parameter "-store NAME" to specify a different storage location, use -clearstorage to start with an empty storage.',
);

class BridgedDevice {
    private matterServer: MatterServer | undefined;

    async start() {
        logger.info(`node-matter`);

        /**
         * Initialize the storage system.
         *
         * The storage manager is then also used by the Matter server, so this code block in general is required,
         * but you can choose a different storage backend as long as it implements the required API.
         */

        const storageManager = new StorageManager(storage);
        await storageManager.initialize();

        /**
         * Collect all needed data
         *
         * This block makes sure to collect all needed data from cli or storage. Replace this with where ever your data
         * come from.
         *
         * Note: This example also uses the initialized storage system to store the device parameter data for convenience
         * and easy reuse. When you also do that be careful to not overlap with Matter-Server own contexts
         * (so maybe better not ;-)).
         */

        const deviceStorage = storageManager.createContext("Device");

        const deviceName = "Matter Bridge device";
        const deviceType = DeviceTypes.AGGREGATOR.code;
        const vendorName = "matter-node.js";
        const passcode = getIntParameter("passcode") ?? deviceStorage.get("passcode", 20202021);
        const discriminator = getIntParameter("discriminator") ?? deviceStorage.get("discriminator", 3840);
        // product name / id and vendor id should match what is in the device certificate
        const vendorId = getIntParameter("vendorid") ?? deviceStorage.get("vendorid", 0xfff1);
        const productName = `node-matter OnOff-Bridge`;
        const productId = getIntParameter("productid") ?? deviceStorage.get("productid", 0x8000);

        const netInterface = getParameter("netinterface");
        const port = getIntParameter("port") ?? 5540;

        const uniqueId = getIntParameter("uniqueid") ?? deviceStorage.get("uniqueid", Time.nowMs());

        deviceStorage.set({
            passcode,
            discriminator,
            vendorid: vendorId,
            productid: productId,
            uniqueid: uniqueId,
        });

        /**
         * Create Matter Server and CommissioningServer Node
         *
         * To allow the device to be announced, found, paired and operated we need a MatterServer instance and add a
         * commissioningServer to it and add the just created device instance to it.
         * The CommissioningServer node defines the port where the server listens for the UDP packages of the Matter protocol
         * and initializes deice specific certificates and such.
         *
         * The below logic also adds command handlers for commands of clusters that normally are handled internally
         * like testEventTrigger (General Diagnostic Cluster) that can be implemented with the logic when these commands
         * are called.
         */

        this.matterServer = new MatterServer(storageManager, { mdnsInterface: netInterface });

        const commissioningServer = new CommissioningServer({
            port,
            deviceName,
            deviceType,
            passcode,
            discriminator,
            basicInformation: {
                vendorName,
                vendorId: VendorId(vendorId),
                nodeLabel: productName,
                productName,
                productLabel: productName,
                productId,
                serialNumber: `node-matter-${uniqueId}`,
            },
        });

        /**
         * Create Device instance and add needed Listener
         *
         * Create an instance of the matter device class you want to use.
         * This example uses the OnOffLightDevice or OnOffPluginUnitDevice depending on the value of the type  parameter.
         * To execute the on/off scripts defined as parameters a listener for the onOff attribute is registered via the
         * device specific API.
         *
         * The below logic also adds command handlers for commands of clusters that normally are handled device internally
         * like identify that can be implemented with the logic when these commands are called.
         */

        const aggregator = new Aggregator();

        const numDevices = getIntParameter("num") || 2;
        for (let i = 1; i <= numDevices; i++) {
            const onOffDevice =
                getParameter(`type${i}`) === "socket" ? new OnOffPluginUnitDevice() : new OnOffLightDevice();

            onOffDevice.addOnOffListener(on => commandExecutor(on ? `on${i}` : `off${i}`)?.());
            onOffDevice.addCommandHandler("identify", async ({ request: { identifyTime } }) =>
                console.log(
                    `Identify called for OnOffDevice ${onOffDevice.name} with id: ${i} and identifyTime: ${identifyTime}`,
                ),
            );

            const name = `OnOff ${onOffDevice instanceof OnOffPluginUnitDevice ? "Socket" : "Light"} ${i}`;
            aggregator.addBridgedDevice(onOffDevice, {
                nodeLabel: name, // Main end user name for the device
                productName: name,
                productLabel: name,
                serialNumber: `node-matter-${uniqueId}-${i}`,
                reachable: true,
            });
        }

        commissioningServer.addDevice(aggregator);

        await this.matterServer.addCommissioningServer(commissioningServer);

        /**
         * Start the Matter Server
         *
         * After everything was plugged together we can start the server. When not delayed announcement is set for the
         * CommissioningServer node then this command also starts the announcement of the device into the network.
         */

        await this.matterServer.start();

        /**
         * Print Pairing Information
         *
         * If the device is not already commissioned (this info is stored in the storage system) then get and print the
         * pairing details. This includes the QR code that can be scanned by the Matter app to pair the device.
         */

        logger.info("Listening");
        if (!commissioningServer.isCommissioned()) {
            const pairingData = commissioningServer.getPairingCode();
            const { qrPairingCode, manualPairingCode } = pairingData;

            console.log(QrCode.get(qrPairingCode));
            console.log(
                `QR Code URL: https://project-chip.github.io/connectedhomeip/qrcode.html?data=${qrPairingCode}`,
            );
            console.log(`Manual pairing code: ${manualPairingCode}`);
        } else {
            console.log("Device is already commissioned. Waiting for controllers to connect ...");
        }
    }

    async stop() {
        await this.matterServer?.close();
    }
}

const device = new BridgedDevice();
device
    .start()
    .then(() => {
        /* done */
    })
    .catch(err => console.error(err));

process.on("SIGINT", () => {
    // Clean up on CTRL-C
    device
        .stop()
        .then(() => {
            // Pragmatic way to make sure the storage is correctly closed before the process ends.
            storage.close();
            process.exit(0);
        })
        .catch(err => console.error(err));
});
