/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../src/behavior/Behavior.js";
import { ServerBehaviorBacking } from "../../src/behavior/internal/ServerBacking.js";
import { Val } from "../../src/behavior/state/Val.js";
import { Datasource } from "../../src/behavior/state/managed/Datasource.js";
import { Transaction } from "../../src/behavior/state/transaction/Transaction.js";
import { EndpointNumber } from "../../src/datatype/EndpointNumber.js";
import { Agent } from "../../src/endpoint/Agent.js";
import { Part } from "../../src/endpoint/Part.js";
import { PartInitializer } from "../../src/endpoint/part/PartInitializer.js";
import { PartStore } from "../../src/endpoint/storage/PartStore.js";
import { EndpointType } from "../../src/endpoint/type/EndpointType.js";
import { Environment } from "../../src/environment/Environment.js";
import { StorageService } from "../../src/environment/StorageService.js";
import { Node } from "../../src/node/Node.js";
import { ServerNode } from "../../src/node/ServerNode.js";
import { IdentityService } from "../../src/node/server/IdentityService.js";
import { ServerRootEndpoint } from "../../src/node/server/ServerRootEndpoint.js";
import { PartStoreService } from "../../src/node/server/storage/PartStoreService.js";
import { ServerStore } from "../../src/node/server/storage/ServerStore.js";
import { StorageBackendMemory } from "../../src/storage/StorageBackendMemory.js";
import { StorageManager } from "../../src/storage/StorageManager.js";

export class MockPartInitializer extends PartInitializer {
    #nextId = 1;
    override initializeDescendent(part: Part) {
        if (!part.lifecycle.hasNumber) {
            part.number = EndpointNumber(this.#nextId++);
        }
        if (!part.lifecycle.hasId) {
            part.id = part.number.toString();
        }
    }

    createBacking(part: Part, behavior: Behavior.Type) {
        return new ServerBehaviorBacking(part, behavior);
    }
}

class MockPartStore implements PartStore {
    part: Part;
    isNew = true;
    values = {} as Record<string, Val.Struct>;
    initialValues = {};

    constructor(part: Part) {
        this.part = part;
    }

    toString() {
        return `MockStore#${this.part.number}`;
    }

    async set(values: Record<string, Val.Struct>) {
        for (const behaviorId in values) {
            if (values[behaviorId]) {
                Object.assign(values[behaviorId]);
            } else {
                values[behaviorId] = values[behaviorId];
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

    override assignNumber(part: Part<EndpointType.Empty>): void {
        part.number = this.#nextNumber++;
    }

    override storeForPart(part: Part<EndpointType.Empty>): PartStore {
        if (this.#stores[part.number]) {
            return this.#stores[part.number];
        }

        return (this.#stores[part.number] = new MockPartStore(part));
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
export class MockNode<T extends ServerRootEndpoint = ServerRootEndpoint> extends ServerNode<T> {
    #storage = new StorageManager(new StorageBackendMemory());

    constructor(type: T = ServerRootEndpoint as T) {
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
        this.env.set(PartInitializer, new MockPartInitializer());
        this.env.set(ServerStore, new MockServerStore(this.env, "test"));
        this.env.set(PartStoreService, new MockPartStoreService());
        this.env.set(IdentityService, new IdentityService(this));
        return super.initialize(agent);
    }

    override get owner() {
        return undefined;
    }
}
