#!/usr/bin/env node

/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { MatterEnvironment } from "./util/MatterEnvironment";
import { UdpInterface } from "@project-chip/matter.js/net";
import { StorageManager } from "@project-chip/matter.js/storage";
import { MatterController } from "@project-chip/matter.js";
import { MdnsScanner } from "@project-chip/matter.js/mdns";
import { ClusterClient } from "@project-chip/matter.js/interaction";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BasicInformationCluster, DescriptorCluster, OnOffCluster } from "@project-chip/matter.js/cluster";
import { ManualPairingCodeCodec } from "@project-chip/matter-node.js/schema";

import { getIntParameter, getParameter } from "./util/CommandLine";
import { requireMinNodeVersion } from "./util/Node";

requireMinNodeVersion(16);

class ControllerNode {
    async start() {
        const controllerStorage = StorageManager.get().createContext("Controller");

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

        controllerStorage.set("ip", ip);
        controllerStorage.set("port", port);
        controllerStorage.set("discriminator", discriminator);
        controllerStorage.set("pin", setupPin);


        const client = await MatterController.create(
            await MdnsScanner.create(),
            await UdpInterface.create(port, "udp4"),
            await UdpInterface.create(port, "udp6")
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
            const descriptor = ClusterClient(interactionClient, 0, DescriptorCluster);
            console.log(await descriptor.getDeviceTypeList());
            console.log(await descriptor.getServerList());

            // Example to subscribe to a field and get the value
            const info = ClusterClient(interactionClient, 0, BasicInformationCluster);
            console.log(await info.getProductName()); // This call is executed remotely
            //console.log(await info.subscribeProductName((value, version) => console.log("productName", value, version), 5, 30));
            //console.log(await info.getProductName()); // This call is resolved locally because we have subscribed to the value!

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

            /*const onOff = ClusterClient(interactionClient, 1, OnOffCluster);
            let onOffStatus = await onOff.getOnOff();
            // read data every minute to keep up the connection to show the subscription is working
            setInterval(() => {
                onOff.toggle({}).then(() => onOffStatus = !onOffStatus).catch(error => logger.error(error));
            }, 60000);*/

        } finally {
            client.close(); // Comment out when subscribes are used, else the connection will be closed
        }
    }
}

MatterEnvironment.exec("controller-node", () => new ControllerNode().start());
