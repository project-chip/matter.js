/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Endpoint } from "#endpoint/Endpoint.js";
import type { StorageContext } from "#general";
import { Construction, ImplementationError, InternalError, Lifecycle, Logger, asyncNew } from "#general";
import { EndpointStore } from "../../endpoint/storage/EndpointStore.js";
import { type Node } from "../Node.js";
import { IdentityConflictError } from "../server/IdentityService.js";

const NEXT_NUMBER_KEY = "__nextNumber__";

const logger = Logger.get("EndpointStoreService");

/**
 * Manages all {@link EndpointStore}s for a {@link Node}.
 *
 * We eagerly load all available endpoint data from disk because this allows us to keep {@link Endpoint} initialization
 * more synchronous.  We can initialize most behaviors synchronously if their state is already in memory.
 *
 * TODO - cleanup of storage for permanently removed endpoints
 */
export abstract class EndpointStoreService {
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
     */
    abstract storeForEndpoint(endpoint: Endpoint): EndpointStore;

    /**
     * Deactivate the store for a single {@link Endpoint}. This puts the endpoint number back into pre-allocated state
     */
    abstract deactivateStoreForEndpoint(endpoint: Endpoint): void;

    /**
     * Erase storage for a single {@link Endpoint}.
     */
    abstract eraseStoreForEndpoint(endpoint: Endpoint): Promise<void>;
}

export class EndpointStoreFactory extends EndpointStoreService {
    #storage: StorageContext;
    #allocatedNumbers = new Set<number>();
    #preAllocatedNumbers = new Set<number>();
    #construction: Construction<EndpointStoreFactory>;
    #persistedNextNumber?: number;
    #numbersPersisted?: Promise<void>;
    #numbersToPersist?: Array<Endpoint>;
    #nextNumber?: number;
    #defaultNextNumber: number;
    #root?: EndpointStore;

    get construction() {
        return this.#construction;
    }

    constructor({ storage, nextNumber }: EndpointStoreService.Options) {
        super();

        this.#storage = storage;
        this.#defaultNextNumber = nextNumber ?? 1;

        this.#construction = Construction(this);
        this.#construction.start();
    }

    async [Construction.construct]() {
        // Load next number with excessive validation for the off-chance it somehow gets corrupted
        this.#nextNumber = (await this.#storage.get(NEXT_NUMBER_KEY, this.#defaultNextNumber)) % 0xffff;

        if (!this.#nextNumber) {
            this.#nextNumber = 1;
        } else {
            this.#persistedNextNumber = this.#nextNumber;
        }

        // Preload stores so we can access synchronously going forward
        this.#root = await asyncNew(EndpointStore, this.#storage);

        // Ensure all known numbers are allocated.  This protects them when unknown endpoints initialize before known
        // endpoints and #nextNumber is somehow invalid
        this.#root.visit(({ number }) => {
            if (number !== undefined) {
                this.#preAllocatedNumbers.add(number);
            }
        });
    }

    async erase() {
        if (this.#numbersPersisted) {
            await this.#numbersPersisted;
        }

        await this.#storage.clearAll();

        this.#construction.setStatus(Lifecycle.Status.Inactive);
        this.#construction.start();

        this.#allocatedNumbers = new Set();
        this.#nextNumber = (this.#defaultNextNumber ?? 1) % 0xffff;
        this.#persistedNextNumber = undefined;
        this.#root = new EndpointStore(this.#storage, false);

        await this.construction;
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

        const store = this.storeForEndpoint(endpoint);

        if (endpoint.lifecycle.hasNumber) {
            // Reserve number
            if (this.#allocatedNumbers.has(endpoint.number)) {
                if (this.storeForEndpoint(endpoint).number !== endpoint.number) {
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
                    this.#preAllocatedNumbers.delete(knownNumber);
                    this.#allocatedNumbers.add(knownNumber);
                    endpoint.number = knownNumber;
                    return;
                }
            }

            const startNumber = this.#nextNumber;

            while (
                this.#nextNumber < 1 ||
                this.#allocatedNumbers.has(this.#nextNumber) ||
                this.#preAllocatedNumbers.has(this.#nextNumber)
            ) {
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

    storeForEndpoint(endpoint: Endpoint): EndpointStore {
        this.#construction.assert();

        if (endpoint.maybeNumber === 0) {
            return this.#construction.assert("root node store", this.#root);
        }

        if (!endpoint.owner) {
            throw new InternalError(
                "Endpoint storage inaccessible because endpoint is not a node and is not owned by another endpoint",
            );
        }

        return this.storeForEndpoint(endpoint.owner).childStoreFor(endpoint);
    }

    deactivateStoreForEndpoint(endpoint: Endpoint) {
        this.#construction.assert();

        if (endpoint.maybeNumber === 0) {
            throw new InternalError("Cannot deactivate root node store");
        }

        if (!this.#allocatedNumbers.has(endpoint.number)) {
            return;
        }
        this.#allocatedNumbers.delete(endpoint.number);
        this.#preAllocatedNumbers.add(endpoint.number);
    }

    async eraseStoreForEndpoint(endpoint: Endpoint) {
        this.#construction.assert();

        if (!endpoint.owner) {
            throw new InternalError(
                "Endpoint storage inaccessible because endpoint is not a node and is not owned by another endpoint",
            );
        }

        await this.storeForEndpoint(endpoint.owner).eraseChildStoreFor(endpoint);

        this.#allocatedNumbers.delete(endpoint.number);
        this.#preAllocatedNumbers.delete(endpoint.number);
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
                const store = this.storeForEndpoint(endpoint);
                await store.saveNumber();
            }

            if (this.#nextNumber !== this.#persistedNextNumber) {
                await this.#storage.set(NEXT_NUMBER_KEY, this.#nextNumber);
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

export namespace EndpointStoreService {
    export interface Options {
        storage: StorageContext;
        nextNumber?: number;
        load?: boolean;
    }
}
