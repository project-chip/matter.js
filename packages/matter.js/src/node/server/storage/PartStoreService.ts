/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lifecycle } from "../../../common/Lifecycle.js";
import { ImplementationError, InternalError } from "../../../common/MatterError.js";
import { Endpoint } from "../../../endpoint/Endpoint.js";
import { PartStore } from "../../../endpoint/storage/PartStore.js";
import { Logger } from "../../../log/Logger.js";
import type { StorageContext } from "../../../storage/StorageContext.js";
import { AsyncConstruction, asyncNew } from "../../../util/AsyncConstruction.js";
import { IdentityConflictError } from "../IdentityService.js";
import { ServerPartStore } from "./ServerPartStore.js";

const NEXT_NUMBER_KEY = "__nextNumber__";

const logger = Logger.get("PartStoreService");

/**
 * Manages all {@link ServerPartStore}s for a {@link NodeServer}.
 *
 * We eagerly load all available endpoint data from disk because this allows us to keep {@link Endpoint} initialization
 * more synchronous.  We can initialize most behaviors synchronously if their state is already in memory.
 *
 * TODO - cleanup of storage for permanently removed endpoints
 */
export abstract class PartStoreService {
    /**
     * Allocate an endpoint number.
     *
     * Either allocates a new number for a {@link Endpoint} or reserves the endpoint's number.  If the {@link Endpoint}
     * already has a number but it is allocated to a different endpoint it is an error.
     *
     * We must persist the assigned number and next endpoint number.  We are fairly resilient to the small chance that
     * persistence fails so we persist lazily and return synchronously.
     */
    abstract assignNumber(endpoint: Endpoint): void;

    /**
     * Obtain the store for a single {@link Endpoint}.
     *
     * These stores are cached internally by ID.
     *
     * TODO - when StorageContext becomes async we can keep this synchronous if we add "StorageContext.subcontexts" or
     * somesuch
     */
    abstract storeForPart(endpoint: Endpoint): PartStore;
}

export class PartStoreFactory extends PartStoreService {
    #storage: StorageContext;
    #allocatedNumbers = new Set<number>();
    #construction: AsyncConstruction<PartStoreFactory>;
    #persistedNextNumber?: number;
    #numbersPersisted?: Promise<void>;
    #numbersToPersist?: Array<Endpoint>;
    #nextNumber?: number;
    #root?: ServerPartStore;

    get construction() {
        return this.#construction;
    }

    constructor({ storage, nextNumber }: PartStoreService.Options) {
        super();

        this.#storage = storage;

        if (typeof nextNumber !== "number") {
            nextNumber = 1;
        }

        this.#construction = AsyncConstruction(this, async () => {
            // Load next number with excessive validation for the off-chance it somehow gets corrupted
            this.#nextNumber = storage.get(NEXT_NUMBER_KEY, nextNumber) % 0xffff;

            if (!this.#nextNumber) {
                this.#nextNumber = 1;
            } else {
                this.#persistedNextNumber = this.#nextNumber;
            }

            // Preload stores so we can access synchronously going forward
            this.#root = await asyncNew(ServerPartStore, this.#storage);
        });
    }

    async erase() {
        if (this.#numbersPersisted) {
            await this.#numbersPersisted;
        }

        this.#storage.clearAll();

        this.#construction.setStatus(Lifecycle.Status.Inactive);
        this.#construction.start();

        await this.#construction;
    }

    async close() {
        // We can't dispose until number persistence completes
        if (this.#numbersPersisted) {
            await this.#numbersPersisted;
        }
    }

    assignNumber(endpoint: Endpoint) {
        if (this.#nextNumber === undefined) {
            throw new InternalError("Endpoint number assigned prior to store initialization");
        }

        this.#construction.assert();

        const store = this.storeForPart(endpoint);

        if (endpoint.lifecycle.hasNumber) {
            // Reserve number
            if (this.#allocatedNumbers.has(endpoint.number)) {
                if (this.storeForPart(endpoint).number !== endpoint.number) {
                    throw new IdentityConflictError(
                        `Endpoint ${endpoint.id} number ${endpoint.number} is allocated to another endpoint`,
                    );
                }
                return;
            }
        } else {
            // Allocate number
            const knownNumber = store.number;
            if (knownNumber) {
                if (this.#allocatedNumbers.has(knownNumber)) {
                    logger.warn(`Stored number ${knownNumber} is already allocated to another endpoint, ignoring`);
                } else {
                    endpoint.number = knownNumber;
                    return;
                }
            }

            const startNumber = this.#nextNumber;

            while (this.#nextNumber < 1 || this.#allocatedNumbers.has(this.#nextNumber)) {
                this.#nextNumber = (this.#nextNumber + 1) % 0xffff;
                if (this.#nextNumber === startNumber) {
                    throw new ImplementationError(
                        "Cannot add additional endpoints because endpoint numbers are exhausted",
                    );
                }
            }

            const number = this.#nextNumber++;
            endpoint.number = number;
        }

        this.#allocatedNumbers.add(endpoint.number);
        store.number = endpoint.number;
        this.#persistNumber(endpoint);
    }

    storeForPart(endpoint: Endpoint): ServerPartStore {
        this.#construction.assert();

        if (!endpoint.lifecycle.hasId) {
            throw new InternalError("Endpoint storage access without assigned ID");
        }
        if (endpoint.owner) {
            return this.storeForPart(endpoint.owner).childStoreFor(endpoint);
        }
        if (endpoint.number !== 0) {
            throw new InternalError(
                "Endpoint storage inaccessible because endpoint is not a node and is not owned by another endpoint",
            );
        }
        if (!this.#root) {
            throw new InternalError("Endpoint storage accessed prior to initialization");
        }
        return this.#root;
    }

    /**
     * Lazily persist a newly allocated number and the next number.
     */
    #persistNumber(endpoint: Endpoint) {
        // If there's already a set of numbers to persist there will be an outstanding promise that will do the work
        // for us
        if (this.#numbersToPersist) {
            this.#numbersToPersist.push(endpoint);
            return;
        }

        this.#numbersToPersist = [endpoint];

        const numberPersister = async () => {
            await this.#construction;

            const numbersToPersist = this.#numbersToPersist;
            if (!numbersToPersist) {
                return;
            }

            this.#numbersToPersist = undefined;
            for (const endpoint of numbersToPersist) {
                const store = this.storeForPart(endpoint);
                await store.saveNumber();
            }

            if (this.#nextNumber !== this.#persistedNextNumber) {
                this.#storage.set(NEXT_NUMBER_KEY, this.#nextNumber);
                this.#persistedNextNumber = this.#nextNumber;
            }
        };

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
        storage: StorageContext;
        nextNumber?: number;
        load?: boolean;
    }
}
