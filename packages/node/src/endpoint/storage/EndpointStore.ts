/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Datasource } from "#behavior/state/managed/Datasource.js";
import { Endpoint } from "#endpoint/Endpoint.js";
import { DatasourceStore } from "#endpoint/storage/DatasourceStore.js";
import { Construction, ImplementationError, StorageContext, SupportedStorageTypes } from "#general";
import { Val } from "#protocol";

const NUMBER_KEY = "__number__";

/**
 * Persistence backing for an {@link Endpoint}.
 *
 * This is the API {@link Endpoint} uses for reading and writing non-volatile values.
 */
export class EndpointStore {
    #storage: StorageContext;
    protected initialValues = {} as Record<string, Val.Struct>;
    #number: number | undefined;
    #construction: Construction<EndpointStore>;

    #childStorage: StorageContext;
    #childStores = {} as Record<string, EndpointStore>;

    #knownBehaviors = new Set<string>();

    /**
     * Description used in diagnostic messages.
     */
    toString() {
        return `storage:${this.#storage.thisContexts.join(".")}`;
    }

    get construction() {
        return this.#construction;
    }

    get number() {
        this.#construction.assert();

        return this.#number;
    }

    set number(number: number | undefined) {
        this.#construction.assert();

        if (this.#number !== number) {
            this.#number = number;
        }
    }

    constructor(storage: StorageContext, load = true) {
        this.#storage = storage;
        this.#childStorage = storage.createContext("parts");

        this.#construction = Construction(this, () => {
            // Load is false when the store was not pre-loaded, which means it does not yet exist on disk and we can
            // avoid async I/O
            if (!load) {
                return;
            }

            return this.#load();
        });
    }

    async #load() {
        this.#knownBehaviors = new Set(await this.#storage.contexts());

        for (const behaviorId of this.#knownBehaviors) {
            const behaviorValues = (this.initialValues[behaviorId] = {} as Val.Struct);
            const behaviorStorage = this.#storage.createContext(behaviorId);

            const storedValues = await behaviorStorage.values();
            for (const [key, value] of Object.entries(storedValues)) {
                if (value !== undefined) {
                    behaviorValues[key] = value;
                }
            }
        }

        const number = await this.#storage.get(NUMBER_KEY, -1);
        if (number !== -1) {
            this.#number = number;
        }

        await this.#loadSubparts();
    }

    /**
     * Invoke a function on this store and the stores of descendant parts.
     */
    visit(fn: (store: EndpointStore) => void) {
        fn(this);
        for (const child of Object.values(this.#childStores)) {
            child.visit(fn);
        }
    }

    /**
     * Obtain a {@link Datasource.Store} for a behavior.
     */
    storeForBehavior(behaviorId: string): Datasource.Store {
        this.#construction.assert();

        const initialValues = this.initialValues[behaviorId];
        if (initialValues !== undefined) {
            delete this.initialValues[behaviorId];
        }
        return DatasourceStore(this, behaviorId, initialValues);
    }

    childStoreFor(endpoint: Endpoint): EndpointStore {
        if (!endpoint.lifecycle.hasId) {
            throw new ImplementationError("Cannot access endpoint storage because endpoint has no assigned ID");
        }
        return this.storeForPartId(endpoint.id);
    }

    protected storeForPartId(partId: string) {
        this.#construction.assert();

        let store = this.#childStores[partId];
        if (store === undefined) {
            store = this.#childStores[partId] = new EndpointStore(this.#childStorage.createContext(partId), false);
        }

        return store;
    }

    async saveNumber() {
        await this.#construction;

        await this.#storage.set(NUMBER_KEY, this.number);
    }

    /**
     * Patch values.  Keyed by {@link Behavior.id} then property name.
     *
     * See {@link Datasource.Store.set} for the patch semantics the individual structs use.
     */
    async set(values: Record<string, undefined | Val.Struct>) {
        await this.#construction;

        for (const behaviorId in values) {
            const behaviorValues = values[behaviorId];
            const behaviorStorage = this.#storage.createContext(behaviorId);

            if (behaviorValues === undefined) {
                if (this.#knownBehaviors.has(behaviorId)) {
                    await behaviorStorage.clearAll();
                    this.#knownBehaviors.delete(behaviorId);
                }
                continue;
            }

            if (!this.#knownBehaviors.has(behaviorId)) {
                this.#knownBehaviors.add(behaviorId);
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
     * Remove all persisted information for the {@link Endpoint}
     */
    async erase() {
        await this.#construction;

        await this.#storage.clearAll();
    }

    /**
     * Erase the child storage for one part
     */
    async eraseChildStoreFor(endpoint: Endpoint) {
        await this.#construction;

        const partId = endpoint.id;
        const store = this.#childStores[partId];
        await store.erase();
        delete this.#childStores[partId];
    }

    async #loadSubparts() {
        const knownParts = await this.#childStorage.contexts();
        for (const partId of knownParts) {
            await this.#loadKnownChildStores(partId);
        }
    }

    async #loadKnownChildStores(partId: string) {
        const endpointStore = new EndpointStore(this.#childStorage.createContext(partId));
        this.#childStores[partId] = endpointStore;
        await endpointStore.construction;
    }
}
