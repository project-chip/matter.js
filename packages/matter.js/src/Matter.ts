/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { StorageManager } from "./storage/StorageManager.js";
import { CommissionableMatterNode } from "./CommissionableMatterNode.js";
import { MatterNode } from "./MatterNode.js";
import { MdnsBroadcaster } from "./mdns/MdnsBroadcaster.js";
import { MdnsScanner } from "./mdns/MdnsScanner.js";
import { PairableMatterNode } from "./PairableMatterNode.js";

// TODO Move Mdns instances internally
// TODO enhance storage manager to support multiple nodes

export class Matter {
    private readonly nodes: MatterNode[] = [];

    constructor(
        private storageManager: StorageManager,
        private mdnsAnnounceInterface?: string,
    ) { }

    addCommissionableNode(commisionableNode: CommissionableMatterNode) {
        if (this.nodes.length > 0) {
            throw new Error("Only one node is allowed for now");
        }

        const portCheckMap = new Map<number, boolean>();
        for (const node of this.nodes) {
            if (node instanceof CommissionableMatterNode) {
                const nodePort = node.getPort();
                if (portCheckMap.has(nodePort)) {
                    throw new Error(`Port ${nodePort} is already in use by other node`);
                }
                portCheckMap.set(nodePort, true);
            }
        }
        commisionableNode.setStorageManager(this.storageManager);
        this.nodes.push(commisionableNode);
    }

    addPairableNode(pairableNode: PairableMatterNode) {
        if (this.nodes.length > 0) {
            throw new Error("Only one node is allowed for now");
        }

        pairableNode.setStorageManager(this.storageManager);
        this.nodes.push(pairableNode);
    }

    async start() {
        // TODO the mdns classes will later be in this class and assigned differently!!
        for (const node of this.nodes) {
            if (node instanceof CommissionableMatterNode) {
                node.setMdnsBroadcaster(await MdnsBroadcaster.create(node.getPort(), this.mdnsAnnounceInterface));
                node.setMdnsScanner(await MdnsScanner.create());
                if (!node.delayedAnnouncement) {
                    await node.advertise();
                }
            } else if (node instanceof PairableMatterNode) {
                node.setMdnsScanner(await MdnsScanner.create());
                if (!node.delayedPairing) {
                    await node.connect();
                }
            }
        }
    }

    async close() {
        for (const node of this.nodes) {
            await node.close();
        }
    }

}
