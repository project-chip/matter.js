#!/usr/bin/env node

/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * This example shows how to create a Matter controller to pair with a device and interfact with it.
 * It can be used as CLI script, but is more thought as a starting point for your own controller implementation
 * because you need to adjust the code in any way depending on your use case.
 */

/**
 * Import needed modules from @project-chip/matter-node.js
 */
// Include this first to auto-register Crypto, Network and Time Node.js implementations
import { CommissioningController, MatterServer } from "@project-chip/matter-node.js";

import { BleNode } from "@project-chip/matter-node-ble.js/ble";
import { Ble } from "@project-chip/matter-node.js/ble";
import {
    BasicInformationCluster,
    DescriptorCluster,
    GeneralCommissioning,
    OnOffCluster,
} from "@project-chip/matter-node.js/cluster";
import { Format, Level, Logger } from "@project-chip/matter-node.js/log";
import { CommissioningOptions } from "@project-chip/matter-node.js/protocol";
import { ManualPairingCodeCodec } from "@project-chip/matter-node.js/schema";
import { StorageBackendDisk, StorageManager } from "@project-chip/matter-node.js/storage";
import {
    getIntParameter,
    getParameter,
    hasParameter,
    logEndpoint,
    requireMinNodeVersion,
    singleton,
} from "@project-chip/matter-node.js/util";

const logger = Logger.get("Controller");

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

if (hasParameter("ble")) {
    // Initialize Ble
    Ble.get = singleton(
        () =>
            new BleNode({
                hciId: getIntParameter("ble-hci-id"),
            }),
    );
}

const storageLocation = getParameter("store") ?? ".controller-node";
const storage = new StorageBackendDisk(storageLocation, hasParameter("clearstorage"));
logger.info(`Storage location: ${storageLocation} (Directory)`);
logger.info(
    'Use the parameter "-store NAME" to specify a different storage location, use -clearstorage to start with an empty storage.',
);

class ControllerNode {
    async start() {
        logger.info(`node-matter Controller started`);

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

        const controllerStorage = storageManager.createContext("Controller");
        const ip = controllerStorage.has("ip") ? controllerStorage.get<string>("ip") : getParameter("ip");
        const port = controllerStorage.has("port") ? controllerStorage.get<number>("port") : getIntParameter("port");

        const pairingCode = getParameter("pairingcode");
        let longDiscriminator, setupPin, shortDiscriminator;
        if (pairingCode !== undefined) {
            const pairingCodeCodec = ManualPairingCodeCodec.decode(pairingCode);
            shortDiscriminator = pairingCodeCodec.shortDiscriminator;
            longDiscriminator = undefined;
            setupPin = pairingCodeCodec.passcode;
            logger.debug(`Data extracted from pairing code: ${Logger.toJSON(pairingCodeCodec)}`);
        } else {
            longDiscriminator =
                getIntParameter("longDiscriminator") ?? controllerStorage.get("longDiscriminator", 3840);
            if (longDiscriminator > 4095) throw new Error("Discriminator value must be less than 4096");
            setupPin = getIntParameter("pin") ?? controllerStorage.get("pin", 20202021);
        }
        if ((shortDiscriminator === undefined && longDiscriminator === undefined) || setupPin === undefined) {
            throw new Error(
                "Please specify the longDiscriminator of the device to commission with -longDiscriminator or provide a valid passcode with -passcode",
            );
        }

        // Collect commissioning options from commandline parameters
        const commissioningOptions: CommissioningOptions = {
            regulatoryLocation: GeneralCommissioning.RegulatoryLocationType.IndoorOutdoor,
            regulatoryCountryCode: "XX",
        };
        if (hasParameter("ble")) {
            const wifiSsid = getParameter("ble-wifi-ssid");
            const wifiCredentials = getParameter("ble-wifi-credentials");
            const threadNetworkName = getParameter("ble-thread-networkname");
            const threadOperationalDataset = getParameter("ble-thread-operationaldataset");
            if (wifiSsid !== undefined && wifiCredentials !== undefined) {
                logger.info(`Registering Commissioning over BLE with WiFi: ${wifiSsid}`);
                commissioningOptions.wifiNetwork = {
                    wifiSsid: wifiSsid,
                    wifiCredentials: wifiCredentials,
                };
            }
            if (threadNetworkName !== undefined && threadOperationalDataset !== undefined) {
                logger.info(`Registering Commissioning over BLE with Thread: ${threadNetworkName}`);
                commissioningOptions.threadNetwork = {
                    networkName: threadNetworkName,
                    operationalDataset: threadOperationalDataset,
                };
            }
        }

        /**
         * Create Matter Server and Controller Node
         *
         * To allow the device to be announced, found, paired and operated we need a MatterServer instance and add a
         * CommissioningController to it and add the just created device instance to it.
         * The Controller node defines the port where the server listens for the UDP packages of the Matter protocol
         * and initializes deice specific certificates and such.
         *
         * The below logic also adds command handlers for commands of clusters that normally are handled internally
         * like testEventTrigger (General Diagnostic Cluster) that can be implemented with the logic when these commands
         * are called.
         */

        const matterServer = new MatterServer(storageManager);
        const commissioningController = new CommissioningController({
            serverAddress: ip !== undefined && port !== undefined ? { ip, port, type: "udp" } : undefined,
            longDiscriminator,
            shortDiscriminator,
            passcode: setupPin,
            delayedPairing: true,
            commissioningOptions,
            subscribeAllAttributes: true,
        });
        matterServer.addCommissioningController(commissioningController);

        /**
         * Start the Matter Server
         *
         * After everything was plugged together we can start the server. When not delayed announcement is set for the
         * CommissioningServer node then this command also starts the announcement of the device into the network.
         */

        await matterServer.start();

        /**
         * TBD
         */
        try {
            await commissioningController.connect();

            if (commissioningController.serverAddress !== undefined) {
                const { ip, port } = commissioningController.serverAddress;
                controllerStorage.set("ip", ip);
                controllerStorage.set("port", port);
            }
            if (longDiscriminator !== undefined) {
                controllerStorage.set("longDiscriminator", longDiscriminator);
            }
            controllerStorage.set("pin", setupPin);

            // Important: This is a temporary API to proof the methods working and this will change soon and is NOT stable!
            // It is provided to proof the concept

            logEndpoint(commissioningController.getRootEndpoint());

            // Example to initialize a ClusterClient and access concrete fields as API methods
            const descriptor = commissioningController.getRootClusterClient(DescriptorCluster);
            if (descriptor !== undefined) {
                console.log(await descriptor.attributes.deviceTypeList.get()); // you can call that way
                console.log(await descriptor.getServerListAttribute()); // or more convenient that way
            } else {
                console.log("No Descriptor Cluster found. This should never happen!");
            }

            // Example to subscribe to a field and get the value
            const info = commissioningController.getRootClusterClient(BasicInformationCluster);
            if (info !== undefined) {
                console.log(await info.getProductNameAttribute()); // This call is executed remotely
                //console.log(await info.subscribeProductNameAttribute(value => console.log("productName", value), 5, 30));
                //console.log(await info.getProductNameAttribute()); // This call is resolved locally because we have subscribed to the value!
            } else {
                console.log("No BasicInformation Cluster found. This should never happen!");
            }

            // Example to get all Attributes of the commissioned node: */*/*
            //const attributesAll = await interactionClient.getAllAttributes();
            //console.log("Attributes-All:", Logger.toJSON(attributesAll));

            // Example to get all Attributes of all Descriptor Clusters of the commissioned node: */DescriptorCluster/*
            //const attributesAllDescriptor = await interactionClient.getMultipleAttributes([{ clusterId: DescriptorCluster.id} ]);
            //console.log("Attributes-Descriptor:", JSON.stringify(attributesAllDescriptor, null, 2));

            // Example to get all Attributes of the Basic Information Cluster of endpoint 0 of the commissioned node: 0/BasicInformationCluster/*
            //const attributesBasicInformation = await interactionClient.getMultipleAttributes([{ endpointId: 0, clusterId: BasicInformationCluster.id} ]);
            //console.log("Attributes-BasicInformation:", JSON.stringify(attributesBasicInformation, null, 2));

            const devices = commissioningController.getDevices();
            if (devices[0] && devices[0].id === 1) {
                // Example to subscribe to all Attributes of endpoint 1 of the commissioned node: */*/*
                //await interactionClient.subscribeMultipleAttributes([{ endpointId: 1, /* subscribe anything from endpoint 1 */ }], 0, 180, data => {
                //    console.log("Subscribe-All Data:", Logger.toJSON(data));
                //});

                const onOff = devices[0].getClusterClient(OnOffCluster);
                if (onOff !== undefined) {
                    let onOffStatus = await onOff.getOnOffAttribute();
                    console.log("initial onOffStatus", onOffStatus);

                    onOff.addOnOffAttributeListener(value => {
                        console.log("subscription onOffStatus", value);
                        onOffStatus = value;
                    });
                    // read data every minute to keep up the connection to show the subscription is working
                    setInterval(() => {
                        onOff
                            .toggle()
                            .then(() => {
                                onOffStatus = !onOffStatus;
                                console.log("onOffStatus", onOffStatus);
                            })
                            .catch(error => logger.error(error));
                    }, 60000);
                }
            }
        } finally {
            //await matterServer.close(); // Comment out when subscribes are used, else the connection will be closed
            setTimeout(() => process.exit(0), 1000000);
        }
    }
}

new ControllerNode().start().catch(error => logger.error(error));

process.on("SIGINT", () => {
    // Pragmatic way to make sure the storage is correctly closed before the process ends.
    storage
        .close()
        .then(() => process.exit(0))
        .catch(() => process.exit(1));
});
