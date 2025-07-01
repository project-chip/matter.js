/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Endpoint } from "#endpoint/Endpoint.js";
import { InternalError, StorageContext } from "#general";
import { EndpointStore } from "#storage/EndpointStore.js";
import { EndpointNumber } from "#types";
import { NodeStore } from "../NodeStore.js";

export class ClientNodeStore extends NodeStore {
    #storage?: StorageContext;
    #stores = new Map<EndpointNumber, EndpointStore>();

    get endpointStores() {
        return this.#stores.values();
    }

    override erase() {
        this.#stores = new Map();
        return this.#storage?.clearAll();
    }

    override storeForEndpoint(endpoint: Endpoint): EndpointStore {
        const { number } = endpoint;

        if (this.#storage === undefined) {
            throw new InternalError(`Endpoint storage ${this.toString()}.endpoints.${number} accessed before load`);
        }

        let store = this.#stores.get(number);
        if (store === undefined) {
            store = new EndpointStore(this.#storage.createContext(number.toString()));
            this.#stores.set(number, store);
        }

        return store;
    }

    protected override async load() {
        this.#storage = this.storageFactory.createContext("endpoints");
        for (const id of await this.#storage.contexts()) {
            const number = Number.parseInt(id) as EndpointNumber;
            if (Number.isNaN(number)) {
                continue;
            }

            const store = new EndpointStore(this.#storage.createContext(id));
            await store.load();
            this.#stores.set(number, store);
        }
    }
}
