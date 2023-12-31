/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Val } from "../../behavior/state/managed/Val.js";
import { ImplementationError } from "../../common/MatterError.js";
import { Part } from "../../endpoint/Part.js";
import { PartStore } from "../../endpoint/part/PartStore.js";
import { Logger } from "../../log/Logger.js";
import { EventHandler } from "../../protocol/interaction/EventHandler.js";
import { StorageContext } from "../../storage/StorageContext.js";
import { SupportedStorageTypes } from "../../storage/StringifyTools.js";
import { StorageManager } from "../../storage/StorageManager.js";
import { ServerOptions } from "../options/ServerOptions.js";
import { Environment } from "../../common/Environment.js";

const logger = Logger.get("NodeStore");

/**
 * Non-volatile state management for a {@link ServerNode}.
 * 
 * The default implementation for matter.js uses synchronous APIs for storage.
 * However, this will change in the future, and other implementations may be
 * backed by asynchronous storage.  So the public API is asynchronous.
 */
export class NodeStore {
    #environment: Environment;
    #nextNumber: number;
    #allocatedNumbers = new Set<number>;
    #storage?: StorageManager;
    #eventHandler?: EventHandler;
    #sessionStorage?: StorageContext;
    #fabricStorage?: StorageContext;
    #endpointStorage?: StorageContext;
    #partStores = {} as Record<string, ServerPartStore>;

    constructor(configuration: ServerOptions.Configuration) {
        this.#environment = configuration.environment;
        this.#nextNumber = (configuration.nextEndpointNumber ?? 1) % 0xffff;
    }

    /**
     * Initialize the store.
     * 
     * TODO - implement conversion from 0.7 format so people can change API
     * seamlessly
     */
    async initialize() {
        this.#storage = await this.#environment.createStorage();

        this.#endpointStorage = this.#storage.createContext("endpoints");

        for (const partId in this.#endpointStorage) {
            const partStore = new ServerPartStore(partId, this.#storage, true);
            this.#partStores[partId] = partStore;

            const number = partStore.number;
            if (number !== undefined) {
                this.#allocatedNumbers.add(number);
                if (number < this.#nextNumber) {
                    this.#nextNumber = number + 1;
                }
            }
        }
    }

    allocateNumber() {
        const startNumber = this.#nextNumber;
        
        while (this.#nextNumber < 2 || this.#allocatedNumbers.has(this.#nextNumber)) {
            this.#nextNumber = (this.#nextNumber + 1) % 0xffff;
            if (this.#nextNumber === startNumber) {
                throw new ImplementationError("Cannot add additional parts because part numbers are exhausted");
            }
        }

        const number = this.#nextNumber++;
        this.#allocatedNumbers.add(number);
        return number;
    }

    async [Symbol.asyncDispose]() {
        this.#storage?.close();
    }

    get eventHandler() {
        if (!this.#eventHandler) {
            this.#eventHandler = new EventHandler(this.storage.createContext("events"));
        }
        return this.#eventHandler;
    }

    get sessionStorage() {
        if (!this.#sessionStorage) {
            this.#sessionStorage = this.storage.createContext("sessions");
        }
        return this.#sessionStorage;
    }

    get fabricStorage() {
        if (!this.#fabricStorage) {
            this.#fabricStorage = this.storage.createContext("fabrics");
        }
        return this.#fabricStorage;
    }

    get storage() {
        if (this.#storage === undefined) {
            throw new ImplementationError("Node storage accessed prior to initialization");
        }
        return this.#storage;
    }

    storeFor(part: Part): ServerPartStore {
        if (part.id === undefined) {
            throw new ImplementationError("Cannot access part storage because part has no assigned ID");
        }
        let store = this.#partStores[part.id];
        if (store === undefined) {
            store = this.#partStores[part.id] = new ServerPartStore(part.id, this.storage, true);
        }
        return store;
    }
}

class ServerPartStore implements PartStore {
    #storage: StorageContext;
    #initialValues = {} as Record<string, Val.Struct>;
    #number: number | undefined;

    constructor(partId: string, storage: StorageManager, isNew: boolean) {
        this.#storage = storage.createContext(partId);

        this.#storage.set("defined", true);

        for (const behaviorId of this.#storage.keys()) {
            const behaviorValues = this.#initialValues[behaviorId] = {} as Val.Struct;
            const behaviorStorage = this.#storage.createContext(behaviorId);

            for (const key of behaviorStorage.keys()) {
                behaviorValues[key] = behaviorStorage.get(key);
            }
        }

        this.#number = this.#storage.get("number") as number | undefined;
        if (!isNew && this.#number === undefined) {
            logger.warn(`No endpoint number persisted for part ${partId}`);
        }
    }

    get initialValues() {
        return this.#initialValues;
    }

    get number() {
        return this.#number;
    }

    async setNumber(number: number) {
        this.#storage.set("number", number);
    }
    
    async set(values: Record<string, Val.Struct>) {
        for (const behaviorId in values) {
            const behaviorValues = values[behaviorId];
            const behaviorStorage = this.#storage.createContext(behaviorId);

            behaviorStorage.set("defined" , true);

            for (const key in behaviorValues) {
                const value = behaviorValues[key];
                if (value === undefined) {
                    behaviorStorage.delete(key);
                } else {
                    behaviorStorage.set(key, behaviorValues[key] as SupportedStorageTypes);
                }
            }
        }

        // TODO - should probably wire support for immediate commit into
        // storage API
    }

    async delete() {
        this.#storage.clearAll();
    }
}
