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
import { BehaviorInitializer } from "../../src/endpoint/part/BehaviorInitializer.js";
import { MockPartStore } from "../behavior/mock-behavior.js";
import { PartStoreService } from "../../src/node/server/storage/PartStoreService.js";
import { StorageBackendMemory } from "../../src/storage/StorageBackendMemory.js";
import { StorageManager } from "../../src/storage/StorageManager.js";
import { EventHandler } from "../../src/protocol/interaction/EventHandler.js";
import { Lifecycle } from "../../src/endpoint/part/Lifecycle.js";
import { IdentityService } from "../../src/node/server/IdentityService.js";

export class MockBehaviorInitializer extends BehaviorInitializer {
    #nextId = 1;
    initializeDescendent(part: Part) {
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

export class MockOwner implements PartOwner {
    #stores = new Map<Part, MockPartStore>();
    #root?: Part;
    #behaviorInitializer = new MockBehaviorInitializer();
    #storage = new StorageManager(new StorageBackendMemory());
    #partStores: PartStoreService;
    #eventHandler: EventHandler;
    #identityService?: IdentityService;

    constructor() {
        (this.#storage as any).initialized = true;
        this.#partStores = new PartStoreService({
            storage: this.#storage.createContext("endpoint"),
            loadKnown: false,
        });
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
        this.#identityService = new IdentityService(part);
        part.lifecycle.change(Lifecycle.Change.Installed);
    }

    storeFor(part: Part) {
        let store = this.#stores.get(part);
        if (!store) {
            this.#stores.set(part, store = new MockPartStore());
        }
        return store;
    }

    serviceFor<T>(type: abstract new (...args: any[]) => T): T {
        switch (type as unknown) {
            case BehaviorInitializer:
                return this.#behaviorInitializer as T;

            case IdentityService:
                if (!this.#root) {
                    throw new ImplementationError(`No root so can't provice IndexBehavior`);
                }
                if (!this.#identityService) {
                    this.#identityService = new IdentityService(this.#root);
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
