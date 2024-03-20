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
import { EventHandler } from "../../../protocol/interaction/EventHandler.js";
import { StorageContext } from "../../../storage/StorageContext.js";
import { StorageManager } from "../../../storage/StorageManager.js";
import { AsyncConstruction, asyncNew } from "../../../util/AsyncConstruction.js";
import { PartStoreFactory, PartStoreService } from "./PartStoreService.js";

const logger = Logger.get("ServerStore");

/**
 * Non-volatile state management for a {@link NodeServer}.
 *
 * The default implementation for matter.js uses synchronous APIs for storage. However, this will change in the future,
 * and other implementations may be backed by asynchronous storage.  So the public API is asynchronous.
 */
export class ServerStore implements Destructable {
    #location: string;
    #nodeId: string;
    #storageManager?: StorageManager;
    #eventHandler?: EventHandler;
    #sessionStorage?: StorageContext;
    #fabricStorage?: StorageContext;
    #eventStorage?: StorageContext;
    #rootStore?: PartStoreFactory;
    #construction: AsyncConstruction<ServerStore>;

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

            this.#rootStore = await asyncNew(PartStoreFactory, {
                storage: this.#storageManager.createContext("root"),
            });

            this.#eventStorage = this.#storage.createContext("events");
            this.#eventHandler = await EventHandler.create(this.eventStorage);

            this.#logChange("Opened");
        };

        this.#construction = AsyncConstruction(this, initializeStorage);
    }

    static async create(environment: Environment, nodeId: string) {
        return await asyncNew(this, environment, nodeId);
    }

    async erase() {
        await this.#sessionStorage?.clearAll();
        await this.#fabricStorage?.clearAll();
        await this.#eventStorage?.clearAll();
        await this.#rootStore?.erase();
    }

    async close() {
        await this.#construction.close(async () => {
            await this.#storageManager?.close();
            this.#logChange("Closed");
        });
    }

    get eventStorage() {
        if (!this.#eventStorage) {
            throw new ImplementationError("Event storage accessed prior to initialization");
        }
        return this.#eventStorage;
    }

    get eventHandler() {
        if (!this.#eventHandler) {
            throw new ImplementationError("Event Handler accessed prior to initialization");
        }
        return this.#eventHandler;
    }

    get sessionStorage() {
        if (!this.#sessionStorage) {
            this.#sessionStorage = this.#storage.createContext("sessions");
        }
        return this.#sessionStorage;
    }

    get fabricStorage() {
        if (!this.#fabricStorage) {
            this.#fabricStorage = this.#storage.createContext("fabrics");
        }
        return this.#fabricStorage;
    }

    get partStores(): PartStoreService {
        if (this.#rootStore === undefined) {
            throw new ImplementationError("Endpoint storage accessed prior to initialization");
        }
        return this.#rootStore;
    }

    get #storage() {
        if (this.#storageManager === undefined) {
            throw new ImplementationError("Node storage accessed prior to initialization");
        }
        return this.#storageManager;
    }

    #logChange(what: "Opened" | "Closed") {
        logger.info(what, Diagnostic.strong(this.#nodeId ?? "node"), "storage at", `${this.#location}/${this.#nodeId}`);
    }
}
