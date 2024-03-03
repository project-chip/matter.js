/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../src/behavior/Behavior.js";
import { ServerBehaviorBacking } from "../../src/behavior/internal/ServerBacking.js";
import { Val } from "../../src/behavior/state/Val.js";
import { Datasource } from "../../src/behavior/state/managed/Datasource.js";
import { Transaction } from "../../src/behavior/state/transaction/Transaction.js";
import { EndpointNumber } from "../../src/datatype/EndpointNumber.js";
import { Agent } from "../../src/endpoint/Agent.js";
import { Endpoint } from "../../src/endpoint/Endpoint.js";
import { EndpointInitializer } from "../../src/endpoint/properties/EndpointInitializer.js";
import { PartStore } from "../../src/endpoint/storage/PartStore.js";
import { EndpointType } from "../../src/endpoint/type/EndpointType.js";
import { Environment } from "../../src/environment/Environment.js";
import { StorageService } from "../../src/environment/StorageService.js";
import { Node } from "../../src/node/Node.js";
import { ServerNode } from "../../src/node/ServerNode.js";
import { IdentityService } from "../../src/node/server/IdentityService.js";
import { PartStoreService } from "../../src/node/server/storage/PartStoreService.js";
import { ServerStore } from "../../src/node/server/storage/ServerStore.js";
import { StorageBackendMemory } from "../../src/storage/StorageBackendMemory.js";
import { StorageManager } from "../../src/storage/StorageManager.js";

export class MockPartInitializer extends EndpointInitializer {
    #nextId = 1;
    override initializeDescendent(endpoint: Endpoint) {
        if (!endpoint.lifecycle.hasNumber) {
            endpoint.number = EndpointNumber(this.#nextId++);
        }
        if (!endpoint.lifecycle.hasId) {
            endpoint.id = endpoint.number.toString();
        }
    }

    createBacking(endpoint: Endpoint, behavior: Behavior.Type) {
        return new ServerBehaviorBacking(endpoint, behavior);
    }
}

class MockPartStore implements PartStore {
    endpoint: Endpoint;
    values = {} as Record<string, Val.Struct>;
    initialValues = {};

    constructor(endpoint: Endpoint) {
        this.endpoint = endpoint;
    }

    toString() {
        return `MockStore#${this.endpoint.number}`;
    }

    async set(values: Record<string, Val.Struct>) {
        for (const behaviorId in values) {
            if (this.values[behaviorId]) {
                Object.assign(this.values[behaviorId], values[behaviorId]);
            } else {
                this.values[behaviorId] = values[behaviorId];
            }
        }
    }

    async delete() {}

    storeForBehavior(behaviorId: string): Datasource.Store {
        const values = this.values;

        return {
            get initialValues() {
                return values[behaviorId] ?? (values[behaviorId] = {});
            },

            set: async (transaction: Transaction, newValues: Val.Struct) => {
                transaction.addParticipants({
                    commit1() {},

                    commit2() {
                        if (values[behaviorId]) {
                            Object.assign(values[behaviorId], newValues);
                        } else {
                            values[behaviorId] = newValues;
                        }
                    },

                    rollback() {},
                });
            },
        };
    }
}

class MockPartStoreService extends PartStoreService {
    #stores = Array<MockPartStore>();
    #nextNumber = 1;

    override assignNumber(endpoint: Endpoint<EndpointType.Empty>): void {
        endpoint.number = this.#nextNumber++;
    }

    override storeForPart(endpoint: Endpoint<EndpointType.Empty>): PartStore {
        if (this.#stores[endpoint.number]) {
            return this.#stores[endpoint.number];
        }

        return (this.#stores[endpoint.number] = new MockPartStore(endpoint));
    }
}

export class MockServerStore extends ServerStore {
    #partStores?: MockPartStoreService;

    override get partStores() {
        if (!this.#partStores) {
            this.#partStores = new MockPartStoreService();
        }
        return this.#partStores;
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

    override initialize(agent: Agent.Instance<T>) {
        this.env.set(StorageService, new StorageService(this.env, () => new StorageBackendMemory()));
        this.env.set(EndpointInitializer, new MockPartInitializer());
        this.env.set(ServerStore, new MockServerStore(this.env, "test"));
        this.env.set(PartStoreService, new MockPartStoreService());
        this.env.set(IdentityService, new IdentityService(this));
        return super.initialize(agent);
    }

    override get owner() {
        return undefined;
    }
}
