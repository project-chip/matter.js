/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Endpoint } from "#endpoint/Endpoint.js";
import { BlobStorageContext, InternalError, StorageContext, StorageContextFactory } from "#general";
import type { ClientNode } from "#node/ClientNode.js";
import { EndpointNumber } from "#types";
import { NodeStore } from "../NodeStore.js";
import { ClientEndpointStore } from "./ClientEndpointStore.js";
import type { RemoteWriter } from "./RemoteWriter.js";

/**
 * {@link ClientNode} persistence.
 */
export class ClientNodeStore extends NodeStore {
    #id: string;
    #storage?: StorageContext;
    #stores = new Map<EndpointNumber, ClientEndpointStore>();
    #write?: RemoteWriter;
    #bdxStorageContext?: BlobStorageContext;

    constructor(id: string, storage: StorageContextFactory) {
        super(storage);
        this.#id = id;
    }

    override toString() {
        return `client-node-store#${this.#id}`;
    }

    get id() {
        return this.#id;
    }

    get write() {
        if (this.#write === undefined) {
            throw new InternalError("Write attempt on ClientNodeStore without writer installed");
        }

        return this.#write;
    }

    set write(write: RemoteWriter) {
        this.#write = write;
    }

    get endpointStores() {
        return this.#stores.values();
    }

    get bdxStore() {
        if (this.#bdxStorageContext === undefined) {
            this.#bdxStorageContext = this.createBlobStorageContext("bdx");
        }
        return this.#bdxStorageContext;
    }

    override erase() {
        this.#stores = new Map();
        return this.#storage?.clearAll();
    }

    override storeForEndpoint(endpoint: Endpoint) {
        const { number } = endpoint;

        if (this.#storage === undefined) {
            throw new InternalError(`Endpoint storage ${this.toString()}.endpoints.${number} accessed before load`);
        }

        let store = this.#stores.get(number);
        if (store === undefined) {
            store = new ClientEndpointStore(this, number, this.#storage.createContext(number.toString()));
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

            const store = new ClientEndpointStore(this, number, this.#storage.createContext(id));
            await store.load();
            this.#stores.set(number, store);
        }
    }
}
