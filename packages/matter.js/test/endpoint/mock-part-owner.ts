/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../src/behavior/Behavior.js";
import { ServerBehaviorBacking } from "../../src/behavior/server/ServerBehaviorBacking.js";
import { Part } from "../../src/endpoint/Part.js";
import { PartOwner } from "../../src/endpoint/part/PartOwner.js";
import { EndpointNumber } from "../../src/datatype/EndpointNumber.js";
import { ImplementationError, InternalError } from "../../src/common/MatterError.js";
import { PartInitializer } from "../../src/endpoint/part/PartInitializer.js";
import { PartStoreService } from "../../src/node/server/storage/PartStoreService.js";
import { StorageBackendMemory } from "../../src/storage/StorageBackendMemory.js";
import { StorageManager } from "../../src/storage/StorageManager.js";
import { EventHandler } from "../../src/protocol/interaction/EventHandler.js";
import { PartLifecycle } from "../../src/endpoint/part/PartLifecycle.js";
import { IdentityService } from "../../src/node/server/IdentityService.js";
import { PartStore } from "../../src/endpoint/storage/PartStore.js";
import { EndpointType } from "../../src/endpoint/type/EndpointType.js";
import { Val } from "../../src/behavior/state/managed/Val.js";
import { Datasource } from "../../src/behavior/state/managed/Datasource.js";
import { Transaction } from "../../src/behavior/state/transaction/Transaction.js";

export class MockBehaviorInitializer extends PartInitializer {
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

                    rollback() {}
                })
            }
        }
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

        return this.#stores[part.number] = new MockPartStore(part);
    }
}

export class MockOwner implements PartOwner {
    #root?: Part;
    #behaviorInitializer = new MockBehaviorInitializer();
    #storage = new StorageManager(new StorageBackendMemory());
    #partStores = new MockPartStoreService;
    #eventHandler: EventHandler;
    #identityService?: IdentityService;

    constructor() {
        (this.#storage as any).initialized = true;
        this.#eventHandler = new EventHandler(this.#storage.createContext("events"));
    }

    get owner() {
        return undefined;
    }

    adoptChild(part: Part) {
        if (this.#root !== undefined) {
            throw new InternalError("Multiple roots disallowed");
        }
        this.#root = part;
        this.#identityService = new IdentityService(part, "Test node");
        part.lifecycle.change(PartLifecycle.Change.Installed);
    }

    serviceFor<T>(type: abstract new (...args: any[]) => T): T {
        switch (type as unknown) {
            case PartInitializer:
                return this.#behaviorInitializer as T;

            case IdentityService:
                if (!this.#root) {
                    throw new ImplementationError(`No root so can't provice IndexBehavior`);
                }
                if (!this.#identityService) {
                    this.#identityService = new IdentityService(this.#root, "Test node");
                }
                return this.#identityService as T;

            case PartStoreService:
                return this.#partStores as T;

            case EventHandler:
                return this.#eventHandler as T;
        }

        throw new ImplementationError(`Unsupported service ${type.name}`);
    }
}
