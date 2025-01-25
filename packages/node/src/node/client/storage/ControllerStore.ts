/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    Construction,
    Destructable,
    Diagnostic,
    Environment,
    ImplementationError,
    Logger,
    MaybePromise,
    StorageContext,
    StorageManager,
    StorageService,
    asyncNew,
} from "#general";

const logger = Logger.get("ControllerStore");

/**
 * Non-volatile state management for a {@link ControllerNode}.
 *
 * The default implementation for matter.js uses synchronous APIs for storage.
 * However, this will change in the future, and other implementations may be
 * backed by asynchronous storage.  So the public API is asynchronous.
 */
export class ControllerStore implements Destructable, ControllerStoreInterface {
    #location: string;
    #nodeId: string;
    #storageManager?: StorageManager;
    #sessionStorage?: StorageContext;
    #caStorage?: StorageContext; // Root certificate and Fabric
    #nodesStorage?: StorageContext; // Holds list of nodes in root level and then sub levels with data per client node?
    #construction: Construction<ControllerStore>;

    get construction() {
        return this.#construction;
    }

    /**
     * Create a new store.
     *
     * TODO - implement conversion from 0.7 format so people can change API seamlessly
     */
    constructor(nodeId: string, environment: Environment) {
        if (nodeId === undefined) {
            throw new ImplementationError("ServerStore must be created with a nodeId");
        }

        const storage = environment.get(StorageService);
        this.#location = storage.location ?? "(unknown location)";
        this.#nodeId = nodeId;

        const initializeStorage = async () => {
            this.#storageManager = await storage.open(nodeId);

            this.#logChange("Opened");
        };

        this.#construction = Construction(this, initializeStorage);
    }

    static async create(nodeId: string, environment = Environment.default) {
        return await asyncNew(this, nodeId, environment);
    }

    async erase() {
        await this.#sessionStorage?.clearAll();
        await this.#caStorage?.clearAll();
        await this.#nodesStorage?.clearAll();
    }

    async close() {
        await this.#construction.close(async () => {
            await this.#storageManager?.close();
            this.#logChange("Closed");
        });
    }

    get sessionStorage() {
        if (!this.#sessionStorage) {
            this.#sessionStorage = this.storage.createContext("sessions");
        }
        return this.#sessionStorage;
    }

    get caStorage() {
        if (!this.#caStorage) {
            this.#caStorage = this.storage.createContext("credentials");
        }
        return this.#caStorage;
    }

    get nodesStorage() {
        if (this.#nodesStorage === undefined) {
            this.#nodesStorage = this.storage.createContext("nodes");
        }
        return this.#nodesStorage;
    }

    get fabricStorage() {
        return this.caStorage;
    }

    get storage() {
        if (this.#storageManager === undefined) {
            throw new ImplementationError("Node storage accessed prior to initialization");
        }
        return this.#storageManager;
    }

    async clientNodeStore(nodeId: string) {
        return this.storage.createContext(`node-${nodeId}`);
    }

    #logChange(what: "Opened" | "Closed") {
        logger.info(what, Diagnostic.strong(this.#nodeId ?? "node"), "storage at", `${this.#location}/${this.#nodeId}`);
    }
}

export abstract class ControllerStoreInterface {
    abstract erase(): Promise<void>;
    abstract close(): Promise<void>;
    abstract get sessionStorage(): StorageContext;
    abstract get caStorage(): StorageContext;
    abstract get nodesStorage(): StorageContext;
    abstract get fabricStorage(): StorageContext;
    abstract clientNodeStore(nodeId: string): MaybePromise<StorageContext>;
}
