/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Datasource } from "#behavior/state/managed/Datasource.js";
import { StorageContext, SupportedStorageTypes } from "#general";
import { Val } from "#protocol";
import { DatasourceStore } from "./server/DatasourceStore.js";

/**
 * Persistence for state values associated with a specific endpoint.
 */
export class EndpointStore {
    protected initialValues = {} as Record<string, Val.Struct>;

    #storage: StorageContext;

    #knownBehaviors = new Set<string>();

    constructor(storage: StorageContext) {
        this.#storage = storage;
    }

    /**
     * Retrieve the primary key used to identify this store.
     */
    get id() {
        return this.storage.thisContexts[this.storage.thisContexts.length - 1];
    }

    /**
     * Create a {@link Datasource.Store} for a behavior.
     */
    createStoreForBehavior<T extends DatasourceStore.Type>(behaviorId: string, factory: T): ReturnType<T> {
        const initialValues = this.initialValues[behaviorId];
        if (initialValues !== undefined) {
            delete this.initialValues[behaviorId];
        }

        return factory(this, behaviorId, initialValues) as ReturnType<T>;
    }

    /**
     * Patch values.  Keyed by {@link Behavior.id} then property name.
     *
     * See {@link Datasource.Store.set} for the patch semantics the individual structs use.
     */
    async set(values: Record<string, undefined | Val.Struct>) {
        for (const behaviorId in values) {
            const behaviorValues = values[behaviorId];
            const behaviorStorage = this.storage.createContext(behaviorId);

            if (behaviorValues === undefined) {
                if (this.knownBehaviors.has(behaviorId)) {
                    await behaviorStorage.clearAll();
                    this.knownBehaviors.delete(behaviorId);
                }
                continue;
            }

            if (!this.knownBehaviors.has(behaviorId)) {
                this.knownBehaviors.add(behaviorId);
            }

            const toSave = {} as Record<string, SupportedStorageTypes>;
            let keysToSave = 0;
            for (const key in behaviorValues) {
                const value = behaviorValues[key];
                if (value === undefined) {
                    await behaviorStorage.delete(key);
                } else {
                    toSave[key] = value as SupportedStorageTypes;
                    keysToSave++;
                }
            }
            if (keysToSave > 0) {
                await behaviorStorage.set(toSave);
            }
        }
    }

    /**
     * Description used in diagnostic messages.
     */
    toString() {
        return `storage:${this.#storage.thisContexts.join(".")}`;
    }

    /**
     * IDs for behaviors persisted in this store.
     */
    get knownBehaviors() {
        return this.#knownBehaviors;
    }

    /**
     * Load the store with persisted values.
     */
    async load() {
        this.#knownBehaviors = new Set(await this.storage.contexts());

        for (const behaviorId of this.#knownBehaviors) {
            const behaviorValues = (this.initialValues[behaviorId] = {} as Val.Struct);
            const behaviorStorage = this.storage.createContext(behaviorId);

            const storedValues = await behaviorStorage.values();
            for (const [key, value] of Object.entries(storedValues)) {
                if (value !== undefined) {
                    behaviorValues[key] = value;
                }
            }
        }
    }

    /**
     * Remove all persisted information for the {@link Endpoint}
     */
    erase() {
        return this.storage.clearAll();
    }

    protected get storage() {
        return this.#storage;
    }
}
