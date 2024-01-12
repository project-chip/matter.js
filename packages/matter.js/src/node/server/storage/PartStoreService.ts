/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError, InternalError } from "../../../common/MatterError.js";
import { Part } from "../../../endpoint/Part.js";
import type { NodeServer } from "../NodeServer.js";
import { ServerPartStore } from "./ServerPartStore.js";
import type { StorageContext } from "../../../storage/StorageContext.js";
import { AsyncConstruction, asyncNew } from "../../../util/AsyncConstruction.js";
import { IdentityConflictError } from "../IdentityService.js";

const NEXT_NUMBER_KEY = "__nextNumber__";

/**
 * Manages all {@link ServerPartStore}s for a {@link NodeServer}.
 * 
 * We eagerly load all available part data from disk because this allows us to keep {@link Part} initialization more
 * synchronous.  We can initialize most behaviors synchronously if their state is already in memory.
 * 
 * TODO - cleanup of storage for permanently removed endpoints
 */
export class PartStoreService {
    #storage: StorageContext;
    #allocatedNumbers = new Set<number>;
    #construction: AsyncConstruction<PartStoreService>;
    #persistedNextNumber?: number;
    #numbersPersisted?: Promise<void>;
    #numbersToPersist?: Array<Part>;
    #nextNumber?: number;
    #root?: ServerPartStore;

    get construction() {
        return this.#construction;
    }

    constructor({storage, nextNumber }: PartStoreService.Options) {
        this.#storage = storage;

        if (typeof nextNumber !== "number") {
            nextNumber = 1;
        }

        this.#construction = AsyncConstruction(
            this,
            async () => {
                // Load next number with excessive validation for the off-chance it somehow gets corrupted
                this.#nextNumber = storage.get(NEXT_NUMBER_KEY, nextNumber) % 0xffff;

                if (!this.#nextNumber) {
                    this.#nextNumber = 1;
                } else {
                    this.#persistedNextNumber = this.#nextNumber;
                }

                // Preload stores so we can access synchronously going forward
                this.#root = await asyncNew(ServerPartStore, "root", this.#storage, true);
            }
        );
    }

    async [Symbol.asyncDispose]() {
        // We can't dispose until number persistence completes
        if (this.#numbersPersisted) {
            await this.#numbersPersisted;
        }
    }

    get storage() {
        return this.#storage;
    }

    /**
     * Allocate an endpoint number.
     * 
     * Either allocates a new number for a {@link Part} or reserves the part's number.  If the {@link Part} already has
     * a number but it is allocated to a different part it is an error.
     * 
     * We must persist the assigned number and next endpoint number.  We are fairly resilient to the small chance that
     * persistence fails so we persist lazily and return synchronously.
     */
    assignNumber(part: Part) {
        if (this.#nextNumber === undefined) {
            throw new InternalError("Part number assigned prior to store initialization");
        }

        this.#construction.assert();

        const store = this.storeForPart(part);

        if (part.lifecycle.hasNumber) {
            // Reserve number
            if (this.#allocatedNumbers.has(part.number)) {
                if (this.storeForPart(part).number !== part.number) {
                    throw new IdentityConflictError(
                        `Part ${part.id} number ${part.number} is allocated to another part`
                    );
                }
                return;
            }
        } else {
            // Allocate number
            const knownNumber = store.number;
            if (knownNumber) {
                part.number = knownNumber;
                return;
            }

            const startNumber = this.#nextNumber;
            
            while (this.#nextNumber < 2 || this.#allocatedNumbers.has(this.#nextNumber)) {
                this.#nextNumber = (this.#nextNumber + 1) % 0xffff;
                if (this.#nextNumber === startNumber) {
                    throw new ImplementationError("Cannot add additional parts because part numbers are exhausted");
                }
            }

            const number = this.#nextNumber++;
            part.number = number;

            this.#allocatedNumbers.add(number);
        }

        store.number = part.number;
        this.#persistNumber(part);
    }

    /**
     * Obtain the store for a single {@link Part}.
     * 
     * These stores are cached internally by ID.
     * 
     * TODO - when StorageContext becomes async we can keep this synchronous if we add "StorageContext.subcontexts" or
     * somesuch
     */
    storeForPart(part: Part): ServerPartStore {
        this.#construction.assert();
        
        if (!part.lifecycle.hasId) {
            throw new InternalError("Part storage access without assigned ID");
        }
        if (part.owner instanceof Part) {
            return this.storeForPart(part.owner).substoreFor(part);
        }
        if (part.number !== 0) {
            throw new InternalError("Part storage inaccessible because part is not root and is not owned by part");
        }
        if (!this.#root) {
            throw new InternalError("Part storage accessed prior to initialization");
        }
        return this.#root;
    }

    /**
     * Lazily persist a newly allocated number and the next number.
     */
    #persistNumber(part: Part) {
        // If there's already a set of numbers to persist there will be an outstanding promise that will do the work
        // for us
        if (this.#numbersToPersist) {
            this.#numbersToPersist.push(part);
            return;
        }

        this.#numbersToPersist = [ part ];

        const numberPersister = async () => {
            await this.#construction;

            const numbersToPersist = this.#numbersToPersist;
            if (!numbersToPersist) {
                return;
            }

            this.#numbersToPersist = undefined;
            for (const part of numbersToPersist) {
                const store = this.storeForPart(part);
                store.saveNumber();
            }

            if (this.#nextNumber !== this.#persistedNextNumber) {
                this.#storage.set(NEXT_NUMBER_KEY, this.#nextNumber);
                this.#persistedNextNumber = this.#nextNumber;
            }
        }

        // There is a very small chance that there is an outstanding worker that is persisting numbers but hasn't yet
        // completed.  If this is the case then wait our turn.  Otherwise there's an even smaller chance that
        // this.#nextNumber gets persisted in the wrong order
        if (this.#numbersPersisted) {
            this.#numbersPersisted = this.#numbersPersisted.then(numberPersister);
        } else {
            this.#numbersPersisted = numberPersister();
        }
    }
}

export namespace PartStoreService {
    export interface Options {
        storage: StorageContext,
        nextNumber?: number,
        load?: boolean,
    }
}
