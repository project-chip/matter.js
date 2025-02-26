/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "#behavior/Behavior.js";
import { ServerBehaviorBacking } from "#behavior/internal/ServerBehaviorBacking.js";
import { Endpoint } from "#endpoint/Endpoint.js";
import { EndpointInitializer } from "#endpoint/properties/EndpointInitializer.js";
import { EndpointStore } from "#endpoint/storage/EndpointStore.js";
import { EndpointType } from "#endpoint/type/EndpointType.js";
import { Environment, StorageBackendMemory, StorageContext, StorageManager, StorageService } from "#general";
import { Node } from "#node/Node.js";
import { ServerNode } from "#node/ServerNode.js";
import { IdentityService } from "#node/server/IdentityService.js";
import { EndpointStoreService } from "#node/storage/EndpointStoreService.js";
import { ServerNodeStore } from "#node/storage/ServerNodeStore.js";
import { Val } from "#protocol";
import { EndpointNumber } from "#types";

export class MockPartInitializer extends EndpointInitializer {
    #nextId = 1;

    override initializeDescendant(endpoint: Endpoint) {
        if (!endpoint.lifecycle.hasNumber) {
            endpoint.number = EndpointNumber(this.#nextId++);
        }
        if (!endpoint.lifecycle.hasId) {
            endpoint.id = endpoint.number.toString();
        }
    }

    async eraseDescendant(_endpoint: Endpoint) {}
    async deactivateDescendant(_endpoint: Endpoint) {}

    createBacking(endpoint: Endpoint, behavior: Behavior.Type) {
        return new ServerBehaviorBacking(endpoint, behavior);
    }
}

class MockEndpointStore extends EndpointStore {
    endpoint: Endpoint;
    values = {} as Record<string, Val.Struct>;

    constructor(endpoint: Endpoint) {
        super(new StorageContext(new StorageBackendMemory(), []));
        this.endpoint = endpoint;
    }
}

class MockEndpointStoreService extends EndpointStoreService {
    #stores = new Map<EndpointNumber, MockEndpointStore>();
    #nextNumber = 1;

    assignNumber(endpoint: Endpoint<EndpointType.Empty>): void {
        endpoint.number = this.#nextNumber++;
    }

    storeForEndpoint(endpoint: Endpoint<EndpointType.Empty>): EndpointStore {
        const store = this.#stores.get(endpoint.number) ?? new MockEndpointStore(endpoint);
        this.#stores.set(endpoint.number, store);
        return store;
    }

    deactivateStoreForEndpoint(_endpoint: Endpoint<EndpointType.Empty>) {}

    async eraseStoreForEndpoint(endpoint: Endpoint<EndpointType.Empty>) {
        this.#stores.delete(endpoint.number);
    }
}

export class MockServerStore extends ServerNodeStore {
    #endpointStores?: MockEndpointStoreService;

    override get endpointStores() {
        if (!this.#endpointStores) {
            this.#endpointStores = new MockEndpointStoreService();
        }
        return this.#endpointStores;
    }
}

// TODO - this was intended as client/server-independent node but ended up converting to server out of expediency.
// Should probably either convert to extending directly from Node or just replace uses with MockServerNode
export class MockNode<T extends ServerNode.RootEndpoint = ServerNode.RootEndpoint> extends ServerNode<T> {
    #storage = new StorageManager(new StorageBackendMemory());

    constructor(type: T = ServerNode.RootEndpoint as T) {
        const environment = new Environment("test");

        const config = {
            type,
            environment,
        } as Node.Configuration<T>;

        super(config);
        (this.#storage as any).initialized = true;
    }

    override initialize() {
        this.env.set(StorageService, new StorageService(this.env, () => new StorageBackendMemory()));
        this.env.set(EndpointInitializer, new MockPartInitializer());
        this.env.set(ServerNodeStore, new MockServerStore(this.env, "test"));
        this.env.set(EndpointStoreService, new MockEndpointStoreService());
        this.env.set(IdentityService, new IdentityService(this));
        return super.initialize();
    }

    override get owner() {
        return undefined;
    }
}
