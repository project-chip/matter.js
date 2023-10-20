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

const MATTER_PORT = 5540;

export type NodeOptions = {
    /** Unique storage key for this node to use for the storage context of this node. If not provided the order of node addition is used. */
    uniqueStorageKey?: string;

    /**
     * Deprecated name for uniqueStorageKey
     * TODO: Remove with 0.8 or such
     * @deprecated
     */
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

    private getNextMatterPort(desiredPort?: number) {
        // Build a temporary map with all ports in use
        const portCheckMap = new Map<number, boolean>();
        for (const node of this.nodes) {
            const nodePort = node.getPort();
            if (nodePort === undefined) continue;
            if (portCheckMap.has(nodePort)) {
                throw new NetworkError(`Port ${nodePort} is already in use by other node.`);
            }
            portCheckMap.set(nodePort, true);
        }

        if (desiredPort !== undefined) {
            if (portCheckMap.has(desiredPort)) {
                throw new NetworkError(`Port ${desiredPort} is already in use by other node.`);
            }
            return desiredPort;
        }

        // Try to find a free port
        let portToCheck = MATTER_PORT;
        while (portCheckMap.has(portToCheck)) {
            portToCheck++;
        }
        return portToCheck;
    }

    /**
     * Add a CommissioningServer node to the server
     *
     * @param commissioningServer CommissioningServer node to add
     * @param nodeOptions Optional options for the node (e.g. unique node id)
     */
    addCommissioningServer(commissioningServer: CommissioningServer, nodeOptions?: NodeOptions) {
        commissioningServer.setPort(this.getNextMatterPort(commissioningServer.getPort()));
        const storageKey = nodeOptions?.uniqueStorageKey ?? nodeOptions?.uniqueNodeId ?? this.nodes.length.toString();
        commissioningServer.setStorage(this.storageManager.createContext(storageKey));
        logger.debug(`Adding CommissioningServer using storage key "${storageKey}".`);
        this.prepareNode(commissioningServer);
        this.nodes.push(commissioningServer);
    }

    /**
     * Remove a CommissioningServer node from the server, close the CommissioningServer and optionally destroy the
     * storage context.
     *
     * @param commissioningServer CommissioningServer node to remove
     * @param destroyStorage If true the storage context will be destroyed
     */
    async removeCommissioningServer(commissioningServer: CommissioningServer, destroyStorage = false) {
        // Remove instance from list
        const index = this.nodes.indexOf(commissioningServer);
        if (index < 0) {
            throw new Error("CommissioningServer not found");
        }
        this.nodes.splice(index, 1);

        // Close instance
        await commissioningServer.close();

        if (destroyStorage) {
            // Destroy storage
            commissioningServer.resetStorage();
        }
    }

    /**
     * Add a Controller node to the server
     *
     * @param commissioningController Controller node to add
     * @param nodeOptions Optional options for the node (e.g. unique node id)
     */
    addCommissioningController(commissioningController: CommissioningController, nodeOptions?: NodeOptions) {
        const localPort = commissioningController.getPort();
        if (localPort !== undefined) {
            // If a local port for controller is defined verify that the port is not overlapping with other nodes
            // Method throws if port is already used
            this.getNextMatterPort(localPort);
        }
        const storageKey = nodeOptions?.uniqueStorageKey ?? nodeOptions?.uniqueNodeId ?? this.nodes.length.toString();
        commissioningController.setStorage(this.storageManager.createContext(storageKey));
        logger.debug(`Adding CommissioningController using storage key "${storageKey}".`);
        this.prepareNode(commissioningController);
        this.nodes.push(commissioningController);
    }

    /**
     * Remove a Controller node from the server, close the Controller and optionally destroy the storage context.
     *
     * @param commissioningController Controller node to remove
     * @param destroyStorage If true the storage context will be destroyed
     */
    async removeCommissioningController(commissioningController: CommissioningController, destroyStorage = false) {
        // Remove instance from list
        const index = this.nodes.indexOf(commissioningController);
        if (index < 0) {
            throw new Error("CommissioningController not found");
        }
        this.nodes.splice(index, 1);

        // Close instance
        await commissioningController.close();

        if (destroyStorage) {
            // Destroy storage
            commissioningController.resetStorage();
        }
    }

    /**
     * Start the server and all nodes. If the nodes do not have specified a delayed announcement or pairing they will
     * be announced/paired immediately.
     */
    async start() {
        if (this.mdnsBroadcaster === undefined) {
            this.mdnsBroadcaster = await MdnsBroadcaster.create({
                enableIpv4: !this.ipv4Disabled,
                multicastInterface: this.options?.mdnsAnnounceInterface,
            });
        }
        if (this.mdnsScanner === undefined) {
            this.mdnsScanner = await MdnsScanner.create({ enableIpv4: !this.ipv4Disabled });
        }
        // TODO the mdns classes will later be in this class and assigned differently!!
        for (const node of this.nodes) {
            this.prepareNode(node);
            await node.start();
        }
    }

    private prepareNode(node: MatterNode) {
        node.ipv4Disabled = this.ipv4Disabled;
        if (this.mdnsBroadcaster === undefined || this.mdnsScanner === undefined) {
            logger.debug("Mdns instances not yet created, delaying node preparation");
            return;
        }
        node.setMdnsBroadcaster(this.mdnsBroadcaster);
        node.setMdnsScanner(this.mdnsScanner);
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
