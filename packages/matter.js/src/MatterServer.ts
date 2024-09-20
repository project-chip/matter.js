/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Logger, Network, NetworkError, StorageManager, SyncStorage } from "#general";
import { MdnsBroadcaster, MdnsScanner } from "#protocol";
import { CommissioningController } from "./CommissioningController.js";
import { CommissioningServer } from "./CommissioningServer.js";
import { MatterNode } from "./MatterNode.js";

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
     * TODO: Remove in later versions then 0.7
     * @deprecated
     */
    mdnsAnnounceInterface?: string;

    /**
     * Interface to use for MDNS announcements and scanning. If not provided announcements/scanning will be done on all
     * network interfaces
     */
    mdnsInterface?: string;
};

/**
 * Main Matter server class that represents the process on the host allowing to commission and pair multiple devices
 * by reusing MDNS scanner and broadcaster
 */
export class MatterServer {
    private started = false;
    private readonly nodes = new Map<string, MatterNode>();

    private mdnsScanner?: MdnsScanner;
    private mdnsBroadcaster?: MdnsBroadcaster;

    private readonly formerlyUsedPorts = new Array<number>();

    /**
     * Create a new Matter server instance
     *
     * @param storageManager Storage manager instance to use for all nodes
     * @param options Optional MatterServer options
     */
    constructor(
        private readonly storageManager: StorageManager<SyncStorage>,
        private readonly options?: MatterServerOptions,
    ) {}

    get ipv4Disabled() {
        return !!this.options?.disableIpv4;
    }

    private getNextMatterPort(desiredPort?: number) {
        // Build a temporary map with all ports in use
        const portCheckMap = new Map<number, boolean>();
        for (const node of this.nodes.values()) {
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

        // Try to find a free port with consideration of currently blocked ports, we start at the matter default port
        let portToCheck = MATTER_PORT;
        while ((portCheckMap.has(portToCheck) || this.formerlyUsedPorts.includes(portToCheck)) && portToCheck < 65536) {
            portToCheck++;
        }
        // If we did not find an available port, check the oldest blocked ones
        if (portToCheck === 65536) {
            for (let i = 0; i < this.formerlyUsedPorts.length; i++) {
                const port = this.formerlyUsedPorts[i];
                this.formerlyUsedPorts.splice(i, 1); // Irrelevant of next check result, remove from blocked ports
                if (!portCheckMap.has(port)) {
                    // Should normally be always the case, but lets make sure
                    portToCheck = port;
                    break;
                }
            }
            if (portToCheck === 65536) {
                throw new NetworkError("No free port available for Matter server.");
            }
        }

        return portToCheck;
    }

    /**
     * Add a CommissioningServer node to the server
     *
     * @param commissioningServer CommissioningServer node to add
     * @param nodeOptions Optional options for the node (e.g. unique node id)
     */
    async addCommissioningServer(commissioningServer: CommissioningServer, nodeOptions?: NodeOptions) {
        const storageKey = nodeOptions?.uniqueStorageKey ?? nodeOptions?.uniqueNodeId ?? this.nodes.size.toString();
        if (this.nodes.has(storageKey)) {
            throw new Error(`Node with storage key "${storageKey}" already exists.`);
        }
        commissioningServer.setPort(this.getNextMatterPort(commissioningServer.getPort()));
        await commissioningServer.setStorage(this.storageManager.createContext(storageKey));
        logger.debug(`Adding CommissioningServer using storage key "${storageKey}".`);
        await this.prepareNode(commissioningServer);
        this.nodes.set(storageKey, commissioningServer);
    }

    /**
     * Remove a CommissioningServer node from the server, close the CommissioningServer and optionally destroy the
     * storage context.
     *
     * @param commissioningServer CommissioningServer node to remove
     * @param destroyStorage If true the storage context will be destroyed
     */
    async removeCommissioningServer(commissioningServer: CommissioningServer, destroyStorage = false) {
        // Find instance from list
        for (const [key, value] of this.nodes.entries()) {
            if (value === commissioningServer) {
                this.nodes.delete(key);

                const port = commissioningServer.getPort();
                if (port !== undefined) {
                    // Remember port to not reuse for this run if not needed to prevent issues with controllers
                    this.formerlyUsedPorts.push(port);
                }

                // Close instance
                await commissioningServer.close();

                if (destroyStorage) {
                    // Destroy storage
                    await commissioningServer.factoryReset();
                }
                return;
            }
        }

        throw new Error("CommissioningServer to remove not found.");
    }

    /**
     * Add a Controller node to the server
     *
     * @param commissioningController Controller node to add
     * @param nodeOptions Optional options for the node (e.g. unique node id)
     */
    async addCommissioningController(commissioningController: CommissioningController, nodeOptions?: NodeOptions) {
        const storageKey = nodeOptions?.uniqueStorageKey ?? nodeOptions?.uniqueNodeId ?? this.nodes.size.toString();
        if (this.nodes.has(storageKey)) {
            throw new Error(`Node with storage key "${storageKey}" already exists.`);
        }

        const localPort = commissioningController.getPort();
        if (localPort !== undefined) {
            // If a local port for controller is defined verify that the port is not overlapping with other nodes
            // Method throws if port is already used
            this.getNextMatterPort(localPort);
        }
        commissioningController.setStorage(this.storageManager.createContext(storageKey));
        logger.debug(`Adding CommissioningController using storage key "${storageKey}".`);
        await this.prepareNode(commissioningController);
        this.nodes.set(storageKey, commissioningController);
    }

    /**
     * Remove a Controller node from the server, close the Controller and optionally destroy the storage context.
     *
     * @param commissioningController Controller node to remove
     * @param destroyStorage If true the storage context will be destroyed
     */
    async removeCommissioningController(commissioningController: CommissioningController, destroyStorage = false) {
        // Find instance from list
        for (const [key, value] of this.nodes.entries()) {
            if (value === commissioningController) {
                this.nodes.delete(key);

                // Close instance
                await commissioningController.close();

                if (destroyStorage) {
                    // Destroy storage
                    await commissioningController.resetStorage();
                }
                return;
            }
        }

        throw new Error("CommissioningController to remove not found.");
    }

    /**
     * Start the server and all nodes. If the nodes do not have specified a delayed announcement or pairing they will
     * be announced/paired immediately.
     */
    async start() {
        if (this.mdnsBroadcaster === undefined) {
            this.mdnsBroadcaster = await MdnsBroadcaster.create(Network.get(), {
                enableIpv4: !this.ipv4Disabled,
                multicastInterface: this.options?.mdnsInterface ?? this.options?.mdnsAnnounceInterface,
            });
        }
        if (this.mdnsScanner === undefined) {
            this.mdnsScanner = await MdnsScanner.create(Network.get(), {
                enableIpv4: !this.ipv4Disabled,
                netInterface: this.options?.mdnsInterface,
            });
        }
        this.started = true;
        for (const [key, node] of this.nodes.entries()) {
            try {
                await this.prepareNode(node);
            } catch (error: any) {
                // TODO: Find a better way how to report back such issues and which nodes errored
                logger.error(`Failed to start node with storageKey ${key}:`, error);
            }
        }
    }

    private async prepareNode(node: MatterNode) {
        node.initialize(this.ipv4Disabled);
        if (this.mdnsBroadcaster === undefined || this.mdnsScanner === undefined) {
            logger.debug("Mdns instances not yet created, delaying node preparation.");
            return;
        }
        node.setMdnsBroadcaster(this.mdnsBroadcaster);
        node.setMdnsScanner(this.mdnsScanner);
        if (this.started) {
            await node.start();
        }
    }

    /**
     * Close the server and all nodes
     */
    async close() {
        for (const [key, node] of this.nodes.entries()) {
            try {
                await node.close();
            } catch (error) {
                logger.error(`Failed to close node with storageKey ${key}: ${error}`);
            }
        }
        await this.mdnsBroadcaster?.close();
        this.mdnsBroadcaster = undefined;
        await this.mdnsScanner?.close();
        this.mdnsScanner = undefined;
        this.started = false;
    }
}
