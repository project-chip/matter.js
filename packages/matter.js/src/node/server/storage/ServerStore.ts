/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../../../common/MatterError.js";
import { Logger } from "../../../log/Logger.js";
import { EventHandler } from "../../../protocol/interaction/EventHandler.js";
import { StorageContext } from "../../../storage/StorageContext.js";
import { StorageManager } from "../../../storage/StorageManager.js";
import { ServerOptions } from "../../options/ServerOptions.js";
import { Environment } from "../../../common/Environment.js";
import { AsyncConstruction, asyncNew } from "../../../util/AsyncConstruction.js";
import type { NodeServer } from "../NodeServer.js";
import { PartStoreService } from "./PartStoreService.js";

export const logger = Logger.get("NodeStore");

/**
 * Non-volatile state management for a {@link NodeServer}.
 * 
 * The default implementation for matter.js uses synchronous APIs for storage.
 * However, this will change in the future, and other implementations may be
 * backed by asynchronous storage.  So the public API is asynchronous.
 */
export class ServerStore {
    #environment: Environment;
    #storage?: StorageManager;
    #eventHandler?: EventHandler;
    #sessionStorage?: StorageContext;
    #fabricStorage?: StorageContext;
    #partStores?: PartStoreService;
    #construction: AsyncConstruction<ServerStore>;

    get construction() {
        return this.#construction;
    }

   /**
    * Create a new store.
    * 
    * TODO - implement conversion from 0.7 format so people can change API
    * seamlessly
    */
   constructor(configuration: ServerOptions.Configuration) {
        this.#environment = configuration.environment;
        let nextNumber = configuration.nextEndpointNumber;

        this.#construction = AsyncConstruction(
            this,
            async () => {
                this.#storage = await this.#environment.createStorage();
        
                this.#partStores = await asyncNew(
                    PartStoreService,
                    {
                        storage: this.#storage.createContext("root"),
                        nextNumber,
                    }
                );
            }
        )
    }

    static async create(configuration: ServerOptions.Configuration) {
        return await asyncNew(this, configuration);
    }

    async [Symbol.asyncDispose]() {
        this.#storage?.close();
    }

    get eventHandler() {
        if (!this.#eventHandler) {
            this.#eventHandler = new EventHandler(this.#initializedStorage.createContext("events"));
        }
        return this.#eventHandler;
    }

    get sessionStorage() {
        if (!this.#sessionStorage) {
            this.#sessionStorage = this.#initializedStorage.createContext("sessions");
        }
        return this.#sessionStorage;
    }

    get fabricStorage() {
        if (!this.#fabricStorage) {
            this.#fabricStorage = this.#initializedStorage.createContext("fabrics");
        }
        return this.#fabricStorage;
    }

    get partStores() {
        if (this.#partStores === undefined) {
            throw new ImplementationError("Part storage accessed prior to initialization");
        }
        return this.#partStores;
    }

    get #initializedStorage() {
        if (this.#storage === undefined) {
            throw new ImplementationError("Node storage accessed prior to initialization");
        }
        return this.#storage;
    }
}
