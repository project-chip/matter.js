/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Construction, MatterAggregateError, StorageContext } from "#general";
import type { ClientNode } from "#node/ClientNode.js";
import type { Node } from "#node/Node.js";
import { NodeStore } from "./NodeStore.js";

const CLIENT_ID_PREFIX = "peer";

/**
 * Manages all {@link ClientNodeStore}s for a {@link Node}.
 *
 * We eagerly load all available endpoint data from disk because this allows us to keep {@link Endpoint} initialization
 * more synchronous.  We can initialize most behaviors synchronously if their state is already in memory.
 *
 * TODO - cleanup of storage for permanently removed endpoints
 */
export abstract class ClientStoreService {
    /**
     * Allocate a stable local ID. for a peer
     *
     * The ID may be preassigned or we will assign using an incrementing sequential number.  The number is reserved for
     * the life of this process or, if data is persisted, until erased.
     */
    abstract allocateId(): string;

    /**
     * Obtain the store for a single {@link ClientNode}.
     *
     * These stores are cached internally by ID.
     */
    abstract storeForNode(node: ClientNode): NodeStore;

    /**
     * List all nodes present.
     */
    abstract knownIds: string[];
}

export class ClientStoreFactory extends ClientStoreService {
    #storage: StorageContext;
    #stores = {} as Record<string, NodeStore>;
    #construction: Construction<ClientStoreFactory>;
    #nextAutomaticId = 1;

    get construction() {
        return this.#construction;
    }

    constructor(storage: StorageContext) {
        super();
        this.#storage = storage;
        this.#construction = Construction(this);
        this.#construction.start();
    }

    async [Construction.construct]() {
        const contexts = await this.#storage.contexts();

        for (const id of contexts) {
            if (!id.startsWith(CLIENT_ID_PREFIX)) {
                continue;
            }

            const num = Number.parseInt(id.slice(CLIENT_ID_PREFIX.length));
            if (!Number.isNaN(num)) {
                if (this.#nextAutomaticId <= num) {
                    this.#nextAutomaticId = num + 1;
                }
            }

            const store = new NodeStore(this.#storage.createContext(id));
            this.#stores[id] = store;
            store.construction.start();
        }

        await MatterAggregateError.allSettled(
            Object.values(this.#stores).map(store => store.construction.ready),
            "Error while initializing client stores",
        );
    }

    allocateId() {
        this.#construction.assert();

        return `${CLIENT_ID_PREFIX}${this.#nextAutomaticId++}`;
    }

    storeForNode(node: ClientNode): NodeStore {
        this.#construction.assert();

        let store = this.#stores[node.id];
        if (store) {
            return store;
        }

        store = new NodeStore(this.#storage.createContext(node.id));
        store.construction.start();
        this.#stores[node.id] = store;

        return store;
    }

    get knownIds() {
        this.#construction.assert();

        return Object.keys(this.#stores);
    }

    async close() {
        await this.construction;
    }
}
