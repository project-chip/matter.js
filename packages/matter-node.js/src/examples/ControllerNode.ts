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
 *
 * When you use this as example please adjust the imports as stated in the "same as ..." comments and simply use
 * @project-chip/matter-node.js as dependency in your package.json.
 */
// Include this first to auto-register Crypto, Network and Time Node.js implementations
import { MatterServer, CommissioningController } from "../"; // same as @project-chip/matter-node.js

import { Logger } from "../exports/log"; // same as @project-chip/matter-node.js/log
import { StorageManager, StorageBackendDisk } from "../storage"; // same as @project-chip/matter-node.js/storage
import { BasicInformationCluster, DescriptorCluster, OnOffCluster } from "../exports/cluster"; // same as @project-chip/matter-node.js/cluster
import { getIntParameter, getParameter, requireMinNodeVersion } from "../util"; // same as @project-chip/matter-node.js/util

const logger = Logger.get("Controller");

requireMinNodeVersion(16);

const storageLocation = getParameter("store") ?? "controller-node";
const storage = new StorageBackendDisk(storageLocation, getIntParameter("clearstorage") === 1);
logger.info(`Storage location: ${storageLocation} (Directory)`);
logger.info('Use the parameter "-store NAME" to specify a different storage location, use -clearstorage to start with an empty storage.')

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
        const ip = getParameter("ip") ?? controllerStorage.get<string>("ip", "");
        if (ip === "") throw new Error("Please specify the IP of the device to commission with -ip");
        const port = getIntParameter("port") ?? controllerStorage.get("port", 5540);
        const discriminator = getIntParameter("discriminator") ?? controllerStorage.get("discriminator", 3840);
        const setupPin = getIntParameter("pin") ?? controllerStorage.get("pin", 20202021);

        controllerStorage.set("ip", ip);
        controllerStorage.set("port", port);
        controllerStorage.set("discriminator", discriminator);
        controllerStorage.set("pin", setupPin);

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

        const matterClient = new MatterServer(storageManager);
        const commissioningController = new CommissioningController({
            ip,
            port,
            discriminator,
            passcode: setupPin,
            delayedPairing: true,
        });
        matterClient.addCommissioningController(commissioningController);

        /**
         * Start the Matter Server
         *
         * After everything was plugged together we can start the server. When not delayed announcement is set for the
         * CommissioningServer node then this command also starts the announcement of the device into the network.
         */

        await matterClient.start();

        /**
         * TBD
         */
        try {
            await commissioningController.connect();

            // Important: This is a temporary API to proof the methods working and this will change soon and is NOT stable!
            // It is provided to proof the concept

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
                    /*
                    let onOffStatus = await onOff.getOnOffAttribute();
                    // read data every minute to keep up the connection to show the subscription is working
                    setInterval(() => {
                        onOff.toggle().then(() => onOffStatus = !onOffStatus).catch(error => logger.error(error));
                    }, 60000);
                    */
                }
            }

        } finally {
            await matterClient.close(); // Comment out when subscribes are used, else the connection will be closed
        }
    }
}

new ControllerNode().start().catch(error => logger.error(error));

process.on("SIGINT", () => {
    // Pragmatic way to make sure the storage is correctly closed before the process ends.
    storage.close().then(() => process.exit(0)).catch(() => process.exit(1));
});
