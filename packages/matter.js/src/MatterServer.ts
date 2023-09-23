/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { CommissioningController } from "./CommissioningController.js";
import { CommissioningServer } from "./CommissioningServer.js";
import { Logger } from "./log/Logger.js";
import { MatterNode } from "./MatterNode.js";
import { MdnsBroadcaster } from "./mdns/MdnsBroadcaster.js";
import { MdnsScanner } from "./mdns/MdnsScanner.js";
import { NetworkError } from "./net/Network.js";
import { StorageManager } from "./storage/StorageManager.js";

const logger = Logger.get("MatterServer");

// TODO Move Mdns instances internally
// TODO enhance storage manager to support multiple nodes

export type NodeOptions = {
    /** Unique node id to use for the storage context of this node. If not provided the order of node addition is used. */
    uniqueNodeId?: string;
};

export type MatterServerOptions = {
    /** If set to true no IPv4 socket listener is sed and only IPv6 is supported. */
    disableIpv4?: boolean;

    /**
     * Interface to use for MDNS announcements. If not provided announcements will be sent from all network interfaces
     */
    mdnsAnnounceInterface?: string;
};

/**
 * Main Matter server class that represents the process on the host allowing to commission and pair multiple devices
 * by reusing MDNS scanner and broadcaster
 */
export class MatterServer {
    private readonly nodes: MatterNode[] = [];

    private mdnsScanner?: MdnsScanner;
    private mdnsBroadcaster?: MdnsBroadcaster;

    /**
     * Create a new Matter server instance
     *
     * @param storageManager Storage manager instance to use for all nodes
     * @param options Optional MatterServer options
     */
    constructor(
        private readonly storageManager: StorageManager,
        private readonly options?: MatterServerOptions,
    ) {}

    get ipv4Disabled() {
        return !!this.options?.disableIpv4;
    }

    /**
     * Add a CommissioningServer node to the server
     *
     * @param commissioningServer CommissioningServer node to add
     * @param nodeOptions Optional options for the node (e.g. unique node id)
     */
    addCommissioningServer(commissioningServer: CommissioningServer, nodeOptions?: NodeOptions) {
        // TODO move port handling completely to MatterServer
        const portCheckMap = new Map<number, boolean>();
        for (const node of this.nodes) {
            const nodePort = node.getPort();
            if (nodePort === undefined) continue;
            if (portCheckMap.has(nodePort)) {
                throw new NetworkError(`Port ${nodePort} is already in use by other node`);
            }
            portCheckMap.set(nodePort, true);
        }
        commissioningServer.setStorage(
            this.storageManager.createContext(nodeOptions?.uniqueNodeId ?? this.nodes.length.toString()),
        );
        this.prepareNode(commissioningServer);
        this.nodes.push(commissioningServer);
    }

    /**
     * Add a Controller node to the server
     *
     * @param commissioningController Controller node to add
     * @param nodeOptions Optional options for the node (e.g. unique node id)
     */
    addCommissioningController(commissioningController: CommissioningController, nodeOptions?: NodeOptions) {
        commissioningController.setStorage(
            this.storageManager.createContext(nodeOptions?.uniqueNodeId ?? this.nodes.length.toString()),
        );
        this.prepareNode(commissioningController);
        this.nodes.push(commissioningController);
    }

    /**
     * Start the server and all nodes. If the nodes do not have specified a delayed announcement or pairing they will
     * be announced/paired immediately.
     */
    async start() {
        if (this.mdnsBroadcaster === undefined) {
            this.mdnsBroadcaster = await MdnsBroadcaster.create({
                enableIpv4: !this.options?.disableIpv4,
                multicastInterface: this.options?.mdnsAnnounceInterface,
            });
        }
        if (this.mdnsScanner === undefined) {
            this.mdnsScanner = await MdnsScanner.create({ enableIpv4: !this.options?.disableIpv4 });
        }
        // TODO the mdns classes will later be in this class and assigned differently!!
        for (const node of this.nodes) {
            this.prepareNode(node);
            await node.start();
        }
    }

    private prepareNode(node: MatterNode) {
        if (this.mdnsBroadcaster === undefined || this.mdnsScanner === undefined) {
            logger.debug("Mdns instances not yet created, delaying node preparation");
            return;
        }
        node.setMdnsBroadcaster(this.mdnsBroadcaster);
        node.setMdnsScanner(this.mdnsScanner);
        node.ipv4Disabled = this.ipv4Disabled;
    }

    /**
     * Close the server and all nodes
     */
    async close() {
        for (const node of this.nodes) {
            await node.close();
        }
        await this.mdnsBroadcaster?.close();
        this.mdnsBroadcaster = undefined;
        await this.mdnsScanner?.close();
        this.mdnsScanner = undefined;
    }
}
