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
import { MatterController } from "../";  // same as @project-chip/matter-node.js

import { getIntParameter, getParameter, requireMinNodeVersion } from "../util"; // same as @project-chip/matter-node.js/util
import { UdpInterface } from "../net"; // same as @project-chip/matter-node.js/net
import { Logger } from "../exports/log"; // same as @project-chip/matter-node.js/log
import { StorageManager, StorageBackendDisk } from "../storage"; // same as @project-chip/matter-node.js/storage
import { MdnsScanner } from "../exports/mdns"; // same as @project-chip/matter-node.js/mdns
import { ClusterClient } from "../exports/interaction"; // same as @project-chip/matter-node.js/interaction
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BasicInformationCluster, DescriptorCluster, OnOffCluster } from "../exports/cluster"; // same as @project-chip/matter-node.js/cluster
import { ManualPairingCodeCodec } from "../exports/schema"; // same as @project-chip/matter-node.js/schema

const logger = Logger.get("Controller");

requireMinNodeVersion(16);

const storage = new StorageBackendDisk(getParameter("store") ?? "controller-node");

class ControllerNode {
    async start() {
        logger.info(`node-matter`);

        const storageManager = new StorageManager(storage);
        await storageManager.initialize();

        const controllerStorage = storageManager.createContext("Controller");

        const ip = getParameter("ip") ?? controllerStorage.get<string>("ip", "");
        if (ip === "") throw new Error("Please specify the IP of the device to commission with -ip");
        const port = getIntParameter("port") ?? controllerStorage.get("port", 5540);

        const pairingCode = getParameter("pairingcode");
        let discriminator, setupPin;
        if (pairingCode !== undefined) {
            const pairingCodeCodec = ManualPairingCodeCodec.decode(pairingCode);
            discriminator = pairingCodeCodec.shortDiscriminator;
            setupPin = pairingCodeCodec.passcode;
        } else {
            discriminator = getIntParameter("discriminator") ?? controllerStorage.get("discriminator", 3840);
            if (discriminator > 4095) throw new Error("Discriminator value must be less than 4096");
            setupPin = getIntParameter("pin") ?? controllerStorage.get("pin", 20202021);
        }
        if (discriminator === undefined) {
            throw new Error("Please specify the discriminator of the device to commission with -discriminator or provide a valid passcode with -passcode");
        }

        controllerStorage.set("ip", ip);
        controllerStorage.set("port", port);
        controllerStorage.set("discriminator", discriminator);
        controllerStorage.set("pin", setupPin);

        const client = await MatterController.create(
            await MdnsScanner.create(),
            await UdpInterface.create(port, "udp4"),
            await UdpInterface.create(port, "udp6"),
            storageManager
        );
        try {
            let nodeId;
            if (client.isCommissioned()) {
                nodeId = client.getFabric().nodeId;
            } else {
                nodeId = await client.commission(ip, port, discriminator, setupPin);
            }
            const interactionClient = await client.connect(nodeId);

            // Important: This is a temporary API to proof the methods working and this will change soon and is NOT stable!
            // It is provided to proof the concept

            // Example to initialize a ClusterClient and access concrete fields as API methods
            const descriptor = ClusterClient(DescriptorCluster, 0, interactionClient);
            console.log(await descriptor.attributes.deviceTypeList.get());
            console.log(await descriptor.attributes.serverList.get());

            // Example to subscribe to a field and get the value
            const info = ClusterClient(BasicInformationCluster, 0, interactionClient);
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

            // Example to subscribe to all Attributes of endpoint 1 of the commissioned node: */*/*
            //await interactionClient.subscribeMultipleAttributes([{ endpointId: 1, /* subscribe anything from endpoint 1 */ }], 0, 180, data => {
            //    console.log("Subscribe-All Data:", Logger.toJSON(data));
            //});

            /*const onOff = ClusterClient(OnOffCluster, 1, interactionClient);
            let onOffStatus = await onOff.attributes.onOff.get();
            // read data every minute to keep up the connection to show the subscription is working
            setInterval(() => {
                onOff.commands.toggle().then(() => onOffStatus = !onOffStatus).catch(error => logger.error(error));
            }, 60000);*/

        } finally {
            client.close(); // Comment out when subscribes are used, else the connection will be closed
        }
    }
}

new ControllerNode().start().catch(error => logger.error(error));

process.on("SIGINT", () => {
    storage.close().then(() => process.exit(0)).catch(() => process.exit(1));
});
