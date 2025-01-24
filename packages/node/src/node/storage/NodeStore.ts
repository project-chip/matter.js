/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { asyncNew, Construction, ImplementationError, StorageContextFactory } from "#general";
import type { Node } from "../Node.js";
import { EndpointStoreFactory, EndpointStoreService } from "./EndpointStoreService.js";

/**
 * Non-volatile state management for a {@link Node}.
 */
export class NodeStore {
    #factory: StorageContextFactory;
    #rootStore?: EndpointStoreFactory;
    #construction: Construction<NodeStore>;

    get construction() {
        return this.#construction;
    }

    constructor(factory: StorageContextFactory) {
        this.#factory = factory;
        this.#construction = Construction(this);
    }

    toString() {
        return "node store";
    }

    [Construction.construct]() {
        return this.initializeStorage();
    }

    async erase() {
        await this.#rootStore?.erase();
    }

    get endpointStores(): EndpointStoreService {
        if (this.#rootStore === undefined) {
            throw new ImplementationError("Endpoint storage accessed prior to initialization");
        }
        return this.#rootStore;
    }

    protected async initializeStorage() {
        this.#rootStore = await asyncNew(EndpointStoreFactory, {
            storage: this.factory.createContext("root"),
        });
    }

    protected get factory() {
        return this.#factory;
    }
}
