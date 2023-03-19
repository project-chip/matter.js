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
import { NodeId } from "./matter/common/NodeId";
import { StorageNode } from "./persistence/StorageNode";
import { PersistenceManager } from "./persistence/PersistenceManager";
import { Crypto } from "./crypto/Crypto";

const logger = Logger.get("Controller");

const storage = new StorageNode(getParameter("file") || "controller.json");

class Controller {
    async start() {
        logger.info(`node-matter`);

        const persistenceManager = new PersistenceManager(storage);
        await persistenceManager.initialize();

        const ip = getParameter("ip");
        if (ip === undefined) throw new Error("Please specify the IP of the device to commission with -ip");
        const port = getIntParameter("port") ?? 5540;
        const discriminator = getIntParameter("discriminator") ?? 3840;
        const setupPin = getIntParameter("pin") ?? 20202021;
        const client = await MatterController.create(await MdnsScanner.create(), await UdpInterface.create(5540, "udp4"), await UdpInterface.create(5540, "udp6"), persistenceManager);
        try {
            let nodeId = new NodeId(Crypto.getRandomBigUInt64())
            if (!client.isCommissioned()) {
                nodeId = await client.commission(ip, port, discriminator, setupPin);
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
