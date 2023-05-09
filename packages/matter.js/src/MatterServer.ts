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

/**
 * Main Matter server class that represents the process on the host allowing to commission and pair multiple devices
 * by reusing MDNS scanner and Broadcaster
 */
export class MatterServer {
    private readonly nodes: MatterNode[] = [];

    /**
     * Create a new Matter server instance
     *
     * @param storageManager Storage manager instance to use for all nodes
     * @param mdnsAnnounceInterface Optional interface to use for MDNS announcements. If not provided announcements will
     *                              be sent from all network interfaces
     */
    constructor(
        private storageManager: StorageManager,
        private mdnsAnnounceInterface?: string,
    ) { }

    /**
     * Add a commissionable node to the server
     *
     * @param commisionableNode Commissionable node to add
     */
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

    /**
     * Add a pairable node to the server
     *
     * @param pairableNode Pairable node to add
     */
    addPairableNode(pairableNode: PairableMatterNode) {
        if (this.nodes.length > 0) {
            throw new Error("Only one node is allowed for now");
        }

        pairableNode.setStorageManager(this.storageManager);
        this.nodes.push(pairableNode);
    }

    /**
     * Start the server and all nodes. If the nodes do not have specified a delayed announcement or pairing they will
     * be announced/paired immediately.
     */
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

    /**
     * Close the server and all nodes
     */
    async close() {
        for (const node of this.nodes) {
            await node.close();
        }
    }

}
