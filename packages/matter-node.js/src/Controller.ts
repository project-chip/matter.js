#!/usr/bin/env node

/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { singleton } from "./util/Singleton";
import { Time } from "./time/Time";
import { TimeNode } from "./time/TimeNode";

Time.get = singleton(() => new TimeNode());

import { Network } from "./net/Network";
import { NetworkNode } from "./net/node/NetworkNode";

Network.get = singleton(() => new NetworkNode());

import { MatterController } from "./matter/MatterController";
import { UdpInterface } from "./net/UdpInterface";
import { getIntParameter, getParameter } from "./util/CommandLine";
import { MdnsScanner } from "./matter/mdns/MdnsScanner";
import { Logger } from "./log/Logger";
import { StorageBackendDisk } from "./persistence/StorageBackendDisk";
import { StorageManager } from "./persistence/StorageManager";

const logger = Logger.get("Controller");

const storage = new StorageBackendDisk(getParameter("store") ?? "controller-node");

class Controller {
    async start() {
        logger.info(`node-matter`);

        const persistenceManager = new StorageManager(storage);
        await persistenceManager.initialize();

        const controllerPersistence = persistenceManager.createContext("Controller");

        const ip = getParameter("ip") ?? controllerPersistence.get<string>("ip", "");
        if (ip === "") throw new Error("Please specify the IP of the device to commission with -ip");
        const port = getIntParameter("port") ?? controllerPersistence.get("port", 5540);
        const discriminator = getIntParameter("discriminator") ?? controllerPersistence.get("discriminator", 3840);
        const setupPin = getIntParameter("pin") ?? controllerPersistence.get("pin", 20202021);

        controllerPersistence.set("ip", ip);
        controllerPersistence.set("port", port);
        controllerPersistence.set("discriminator", discriminator);
        controllerPersistence.set("pin", setupPin);

        const client = await MatterController.create(await MdnsScanner.create(), await UdpInterface.create(5540, "udp4"), await UdpInterface.create(5540, "udp6"), persistenceManager);
        try {
            if (client.isCommissioned()) {
                console.log(`Already commissioned. Resume not yet supported.`);
            } else {
                const nodeId = await client.commission(ip, port, discriminator, setupPin);
                console.log(`Commissioning complete. Node ID: ${nodeId}`);
            }
        } finally {
            client.close();
        }
    }
}

new Controller().start().catch(error => logger.error(error));

process.on("SIGINT", () => {
    storage.close().then(() => process.exit(0)).catch(() => process.exit(1));
});
