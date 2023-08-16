#!/usr/bin/env node
/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * This example shows how to create a new device node that is composed of multiple devices.
 * It creates multiple endpoints on the server. When you want to add a composed devices to a Aggregator you need to
 * add all endpoints of the composed device to an "ComposedDevice" instance! (not shown in this example).
 * It can be used as CLI script and starting point for your own device node implementation.
 */

/**
 * Import needed modules from @project-chip/matter-node.js
 */
// Include this first to auto-register Crypto, Network and Time Node.js implementations
import { CommissioningServer, MatterServer } from "@project-chip/matter-node.js";

import { DeviceTypes, OnOffLightDevice, OnOffPluginUnitDevice } from "@project-chip/matter-node.js/device";
import { Format, Level, Logger } from "@project-chip/matter-node.js/log";
import { StorageBackendDisk, StorageManager } from "@project-chip/matter-node.js/storage";
import { Time } from "@project-chip/matter-node.js/time";
import {
    commandExecutor,
    getIntParameter,
    getParameter,
    hasParameter,
    requireMinNodeVersion,
} from "@project-chip/matter-node.js/util";
import { VendorId } from "@project-chip/matter.js/datatype";

const logger = Logger.get("MultiDevice");

requireMinNodeVersion(16);

/** Configure logging */
switch (getParameter("loglevel")) {
    case "fatal":
        Logger.defaultLogLevel = Level.FATAL;
        break;
    case "error":
        Logger.defaultLogLevel = Level.ERROR;
        break;
    case "warn":
        Logger.defaultLogLevel = Level.WARN;
        break;
    case "info":
        Logger.defaultLogLevel = Level.INFO;
        break;
}

switch (getParameter("logformat")) {
    case "plain":
        Logger.format = Format.PLAIN;
        break;
    case "html":
        Logger.format = Format.HTML;
        break;
    default:
        if (process.stdin?.isTTY) Logger.format = Format.ANSI;
}

const storageLocation = getParameter("store") ?? ".device-node";
const storage = new StorageBackendDisk(storageLocation, hasParameter("clearstorage"));
logger.info(`Storage location: ${storageLocation} (Directory)`);
logger.info(
    'Use the parameter "-store NAME" to specify a different storage location, use -clearstorage to start with an empty storage.',
);

class Device {
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
        const netAnnounceInterface = getParameter("announceinterface");

        const deviceStorage = storageManager.createContext("Device");

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

        this.matterServer = new MatterServer(storageManager, netAnnounceInterface);

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

        const commissioningServers = new Array<CommissioningServer>();

        let defaultPasscode = 20202021;
        let defaultDiscriminator = 3840;
        let defaultPort = 5550;

        const numDevices = getIntParameter("num") || 2;
        for (let i = 1; i <= numDevices; i++) {
            if (deviceStorage.has(`isSocket${i}`)) {
                logger.info("Device type found in storage. -type parameter is ignored.");
            }
            const isSocket = deviceStorage.get(`isSocket${i}`, getParameter(`type${i}`) === "socket");
            const deviceName = `Matter ${getParameter(`type${i}`) ?? "light"} device ${i}`;
            const deviceType =
                getParameter(`type${i}`) === "socket"
                    ? DeviceTypes.ON_OFF_PLUGIN_UNIT.code
                    : DeviceTypes.ON_OFF_LIGHT.code;
            const vendorName = "matter-node.js";
            const passcode = getIntParameter(`passcode${i}`) ?? deviceStorage.get(`passcode${i}`, defaultPasscode++);
            const discriminator =
                getIntParameter(`discriminator${i}`) ?? deviceStorage.get(`discriminator${i}`, defaultDiscriminator++);
            // product name / id and vendor id should match what is in the device certificate
            const vendorId = getIntParameter(`vendorid${i}`) ?? deviceStorage.get(`vendorid${i}`, 0xfff1);
            const productName = `node-matter OnOff-Device ${i}`;
            const productId = getIntParameter(`productid${i}`) ?? deviceStorage.get(`productid${i}`, 0x8000);

            const port = getIntParameter(`port${i}`) ?? defaultPort++;

            const uniqueId =
                getIntParameter(`uniqueid${i}`) ?? deviceStorage.get(`uniqueid${i}`, `${i}-${Time.nowMs()}`);

            deviceStorage.set(`passcode${i}`, passcode);
            deviceStorage.set(`discriminator${i}`, discriminator);
            deviceStorage.set(`vendorid${i}`, vendorId);
            deviceStorage.set(`productid${i}`, productId);
            deviceStorage.set(`isSocket${i}`, isSocket);
            deviceStorage.set(`uniqueid${i}`, uniqueId);

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

            console.log(
                `Added device ${i} on port ${port} and unique id ${uniqueId}: Passcode: ${passcode}, Discriminator: ${discriminator}`,
            );

            const onOffDevice =
                getParameter(`type${i}`) === "socket" ? new OnOffPluginUnitDevice() : new OnOffLightDevice();
            onOffDevice.addFixedLabel("orientation", getParameter(`orientation${i}`) ?? `orientation ${i}`);
            onOffDevice.addOnOffListener(on => commandExecutor(on ? `on${i}` : `off${i}`)?.());
            commissioningServer.addDevice(onOffDevice);

            this.matterServer.addCommissioningServer(commissioningServer);

            commissioningServers.push(commissioningServer);
        }

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
        console.log();
        commissioningServers.forEach((commissioningServer, index) => {
            console.log("----------------------------");
            console.log(`Device ${index + 1}:`);
            if (!commissioningServer.isCommissioned()) {
                const pairingData = commissioningServer.getPairingCode();
                const { qrCode, qrPairingCode, manualPairingCode } = pairingData;

                console.log(qrCode);
                console.log(
                    `QR Code URL: https://project-chip.github.io/connectedhomeip/qrcode.html?data=${qrPairingCode}`,
                );
                console.log(`Manual pairing code: ${manualPairingCode}`);
            } else {
                console.log("Device is already commissioned. Waiting for controllers to connect ...");
            }
            console.log();
        });
    }

    async stop() {
        await this.matterServer?.close();
    }
}

const device = new Device();
device
    .start()
    .then(() => {
        /* done */
    })
    .catch(err => console.error(err));

process.on("SIGINT", () => {
    device
        .stop()
        .then(() => {
            // Pragmatic way to make sure the storage is correctly closed before the process ends.
            storage
                .close()
                .then(() => process.exit(0))
                .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
});
