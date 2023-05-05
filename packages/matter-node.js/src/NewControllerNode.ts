#!/usr/bin/env node

/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { singleton } from "@project-chip/matter-node.js/util";
import { Time } from "@project-chip/matter-node.js/time";
import { TimeNode } from "./time/TimeNode";

Time.get = singleton(() => new TimeNode());

import { Network } from "@project-chip/matter-node.js/net";
import { NetworkNode } from "./net/NetworkNode";

Network.get = singleton(() => new NetworkNode());

import { Crypto } from "@project-chip/matter-node.js/crypto";
import { CryptoNode } from "./crypto/CryptoNode";

Crypto.get = singleton(() => new CryptoNode());

import { Logger } from "@project-chip/matter-node.js/log";
import { StorageManager } from "@project-chip/matter-node.js/storage";
import { Matter, PairableMatterNode } from "@project-chip/matter-node.js";
import { BasicInformationCluster, DescriptorCluster, OnOffCluster } from "@project-chip/matter-node.js/cluster";

import { getIntParameter, getParameter } from "./util/CommandLine";
import { StorageBackendDisk } from "./storage/StorageBackendDisk";
import { requireMinNodeVersion } from "./util/Node";

const logger = Logger.get("Controller");

requireMinNodeVersion(16);

const storage = new StorageBackendDisk(getParameter("store") ?? "controller-node");

class ControllerNode {
    async start() {
        logger.info(`node-matter Controller started`);

        const storageManager = new StorageManager(storage);
        await storageManager.initialize();

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

        const matterClient = new Matter(storageManager);
        const pairableNode = new PairableMatterNode({
            ip,
            port,
            discriminator,
            passcode: setupPin,
            delayedPairing: true,
        });
        matterClient.addPairableNode(pairableNode);
        await matterClient.start();

        try {
            await pairableNode.connect();
            const interactionClient = await pairableNode.createInteractionClient();

            // Important: This is a temporary API to proof the methods working and this will change soon and is NOT stable!
            // It is provided to proof the concept

            // Example to initialize a ClusterClient and access concrete fields as API methods
            const descriptor = pairableNode.getRootClusterClient(DescriptorCluster)!;
            descriptor.bindToInteractionClient(interactionClient);
            console.log(await descriptor.attributes.deviceTypeList.get());
            console.log(await descriptor.attributes.serverList.get());

            // Example to subscribe to a field and get the value
            const info = pairableNode.getRootClusterClient(BasicInformationCluster)!;
            info.bindToInteractionClient(interactionClient);
            console.log(await info.attributes.productName.get()); // This call is executed remotely
            //console.log(await info.attributes.productName.subscribe(5, 30));
            //info.attributes.productName.addListener((value) => console.log("productName", value));
            //console.log(await info.attributes.productName.get()); // This call is resolved locally because we have subscribed to the value!

            // Example to get all Attributes of the commissioned node: */*/*
            //const attributesAll = await interactionClient.getAllAttributes();
            //console.log("Attributes-All:", Logger.toJSON(attributesAll));

            // Example to get all Attributes of all Descriptor Clusters of the commissioned node: */DescriptorCluster/*
            //const attributesAllDescriptor = await interactionClient.getMultipleAttributes([{ clusterId: DescriptorCluster.id} ]);
            //console.log("Attributes-Descriptor:", JSON.stringify(attributesAllDescriptor, null, 2));

            // Example to get all Attributes of the Basic Information Cluster of endpoint 0 of the commissioned node: 0/BasicInformationCluster/*
            //const attributesBasicInformation = await interactionClient.getMultipleAttributes([{ endpointId: 0, clusterId: BasicInformationCluster.id} ]);
            //console.log("Attributes-BasicInformation:", JSON.stringify(attributesBasicInformation, null, 2));

            const devices = pairableNode.getDevices();
            if (devices[0] && devices[0].id === 1) {
                // Example to subscribe to all Attributes of endpoint 1 of the commissioned node: */*/*
                //await interactionClient.subscribeMultipleAttributes([{ endpointId: 1, /* subscribe anything from endpoint 1 */ }], 0, 180, data => {
                //    console.log("Subscribe-All Data:", Logger.toJSON(data));
                //});

                const onOff = devices[0].getClusterClient(OnOffCluster);
                if (onOff !== undefined) {
                    /*onOff.bindToInteractionClient(interactionClient);
                    let onOffStatus = await onOff.attributes.onOff.get();
                    // read data every minute to keep up the connection to show the subscription is working
                    setInterval(() => {
                        onOff.commands.toggle().then(() => onOffStatus = !onOffStatus).catch(error => logger.error(error));
                    }, 60000);*/
                }
            }

        } finally {
            await matterClient.close(); // Comment out when subscribes are used, else the connection will be closed
        }
    }
}

new ControllerNode().start().catch(error => logger.error(error));

process.on("SIGINT", () => {
    storage.close().then(() => process.exit(0)).catch(() => process.exit(1));
});
