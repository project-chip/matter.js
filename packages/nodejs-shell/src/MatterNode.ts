/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Include this first to auto-register Crypto, Network and Time Node.js implementations
import { Environment, Logger, StorageContext, StorageManager, StorageService } from "@matter/general";
import { ControllerStore } from "@matter/node";
import { StorageBackendDiskAsync } from "@matter/nodejs";
import { CommissioningController, MatterServer } from "@project-chip/matter.js";
import { NodeId } from "@project-chip/matter.js/datatype";
import { CommissioningControllerNodeOptions, PairedNode } from "@project-chip/matter.js/device";
import { EndpointInterface } from "@project-chip/matter.js/endpoint";
import { join } from "node:path";

const logger = Logger.get("Node");

export class MatterNode {
    #storageLocation?: string;
    private storage?: StorageBackendDiskAsync;
    private storageManager?: StorageManager;
    private storageContext?: StorageContext;

    #environment?: Environment;
    commissioningController?: CommissioningController;
    private matterController?: MatterServer;
    private started = false;

    constructor(
        private readonly nodeNum: number,
        private readonly netInterface?: string,
        useLegacyStorage = true,
    ) {
        if (!useLegacyStorage) {
            this.#environment = Environment.default;
        }
    }

    get storageLocation() {
        return this.#storageLocation;
    }

    async initialize(resetStorage: boolean) {
        /**
         * Initialize the storage system.
         *
         * The storage manager is then also used by the Matter server, so this code block in general is required,
         * but you can choose a different storage backend as long as it implements the required API.
         */

        if (this.#environment) {
            if (this.netInterface !== undefined) {
                this.#environment.vars.set("mdns.networkinterface", this.netInterface);
            }
            // Build up the "Not-so-legacy" Controller
            const id = `shell-${this.nodeNum.toString()}`;
            this.commissioningController = new CommissioningController({
                environment: {
                    environment: this.#environment,
                    id,
                },
                autoConnect: false,
                adminFabricLabel: await this.Store.get<string>("ControllerFabricLabel", "matter.js Shell"),
            });
            await this.commissioningController.initializeControllerStore();

            const controllerStore = this.#environment.get(ControllerStore);
            if (resetStorage) {
                await controllerStore.erase();
            }
            this.storageContext = controllerStore.storage.createContext("Node");

            const storageService = this.#environment.get(StorageService);
            const baseLocation = storageService.location;
            if (baseLocation !== undefined) {
                this.#storageLocation = join(baseLocation, id);
            }
        } else {
            this.#storageLocation = `.matter-shell-${this.nodeNum}`;
            this.storage = new StorageBackendDiskAsync(this.#storageLocation, false);
            logger.info(`Storage location: ${this.#storageLocation} (Directory)`);
            this.storageManager = new StorageManager(this.storage);
            await this.storageManager.initialize();
            this.storageContext = this.storageManager.createContext("Node");
            if (resetStorage) {
                await this.storage.clearAll([]);
            }

            // Build up the legacy Controller
            this.matterController = new MatterServer(this.storageManager, { mdnsInterface: this.netInterface });
            this.commissioningController = new CommissioningController({
                autoConnect: false,
                adminFabricLabel: await this.Store.get<string>("ControllerFabricLabel", "matter.js Shell"),
            });
            await this.matterController.addCommissioningController(this.commissioningController);
        }
    }

    get Store() {
        if (!this.storageContext) {
            throw new Error("Storage uninitialized");
        }
        return this.storageContext;
    }

    async close() {
        await this.matterController?.close();
        await this.closeStorage();
    }

    async closeStorage() {
        try {
            await this.storage?.close();
            process.exit(0);
        } catch {
            process.exit(1);
        }
    }

    async start() {
        if (this.started) {
            return;
        }
        logger.info(`matter.js shell controller started for node ${this.nodeNum}`);

        if (this.matterController !== undefined) {
            await this.matterController.start();
        } else if (this.commissioningController !== undefined) {
            await this.commissioningController.start();
        } else {
            throw new Error("No controller initialized");
        }
        this.started = true;
    }

    async connectAndGetNodes(nodeIdStr?: string, connectOptions?: CommissioningControllerNodeOptions) {
        await this.start();
        const nodeId = nodeIdStr !== undefined ? NodeId(BigInt(nodeIdStr)) : undefined;

        if (this.commissioningController === undefined) {
            throw new Error("CommissioningController not initialized");
        }

        if (nodeId === undefined) {
            return await this.commissioningController.connect(connectOptions);
        }

        const node = await this.commissioningController.connectNode(nodeId, connectOptions);
        if (!node.initialized) {
            await node.events.initialized;
        }
        return [node];
    }

    get controller() {
        if (this.commissioningController === undefined) {
            throw new Error("CommissioningController not initialized. Start first");
        }
        return this.commissioningController;
    }

    async iterateNodeDevices(
        nodes: PairedNode[],
        callback: (device: EndpointInterface, node: PairedNode) => Promise<void>,
        endpointId?: number,
    ) {
        for (const node of nodes) {
            let devices = node.getDevices();
            if (endpointId !== undefined) {
                devices = devices.filter(device => device.number === endpointId);
            }

            for (const device of devices) {
                await callback(device, node);
            }
        }
    }
}
