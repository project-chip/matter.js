/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Destructable } from "../../../common/Lifecycle.js";
import { ImplementationError } from "../../../common/MatterError.js";
import { Environment } from "../../../environment/Environment.js";
import { StorageService } from "../../../environment/StorageService.js";
import { Diagnostic } from "../../../log/Diagnostic.js";
import { Logger } from "../../../log/Logger.js";
import { StorageContext } from "../../../storage/StorageContext.js";
import { StorageManager } from "../../../storage/StorageManager.js";
import { AsyncConstruction, asyncNew } from "../../../util/AsyncConstruction.js";

const logger = Logger.get("ControllerStore");

/**
 * Non-volatile state management for a {@link ControllerNode}.
 *
 * The default implementation for matter.js uses synchronous APIs for storage.
 * However, this will change in the future, and other implementations may be
 * backed by asynchronous storage.  So the public API is asynchronous.
 */
export class ControllerStore implements Destructable {
    #location: string;
    #nodeId: string;
    #storageManager?: StorageManager;
    #sessionStorage?: StorageContext;
    #credentialsStorage?: StorageContext; // Root certificate and Fabric
    #nodesStorage?: StorageContext; // Holds list of nodes in root level and then sub levels with data per client node?
    #construction: AsyncConstruction<ControllerStore>;

    get construction() {
        return this.#construction;
    }

    /**
     * Create a new store.
     *
     * TODO - implement conversion from 0.7 format so people can change API seamlessly
     */
    constructor(environment: Environment, nodeId?: string) {
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

        this.#construction = AsyncConstruction(this, initializeStorage);
    }

    static async create(environment: Environment, nodeId: string) {
        return await asyncNew(this, environment, nodeId);
    }

    async erase() {
        await this.#sessionStorage?.clearAll();
        await this.#credentialsStorage?.clearAll();
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

    get credentialsStorage() {
        if (!this.#credentialsStorage) {
            this.#credentialsStorage = this.storage.createContext("credentials");
        }
        return this.#credentialsStorage;
    }

    get nodesStorage() {
        if (this.#nodesStorage === undefined) {
            this.#nodesStorage = this.storage.createContext("nodes");
        }
        return this.#nodesStorage;
    }

    get storage() {
        if (this.#storageManager === undefined) {
            throw new ImplementationError("Node storage accessed prior to initialization");
        }
        return this.#storageManager;
    }

    #logChange(what: "Opened" | "Closed") {
        logger.info(what, Diagnostic.strong(this.#nodeId ?? "node"), "storage at", `${this.#location}/${this.#nodeId}`);
    }
}
