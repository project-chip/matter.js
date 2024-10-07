/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BasicSet, MutableSet, ObservableSet } from "#general";
import { IdentityConflictError } from "#node/server/IdentityService.js";
import { Endpoint } from "../Endpoint.js";

/**
 * Manages parent-child relationships between endpoints.
 */
export class EndpointContainer<T extends Endpoint = Endpoint> implements MutableSet<T, T>, ObservableSet<T> {
    #children = new BasicSet<T>();
    #endpoint: Endpoint;

    constructor(endpoint: Endpoint) {
        this.#endpoint = endpoint;
    }

    get(id: string) {
        for (const child of this) {
            if (child.maybeId === id) {
                return child;
            }
        }
    }

    add(endpoint: T) {
        if (endpoint.lifecycle.hasId) {
            this.assertIdAvailable(endpoint.id, endpoint);
        }

        this.#children.add(endpoint);
        endpoint.owner = this.#endpoint;

        endpoint.lifecycle.destroyed.once(() => {
            this.delete(endpoint);
        });

        this.#children.add(endpoint);
    }

    delete(endpoint: T) {
        return this.#children.delete(endpoint);
    }

    clear() {
        this.#children.clear();
    }

    has(endpoint: T) {
        return this.#children.has(endpoint);
    }

    get added() {
        return this.#children.added;
    }

    get deleted() {
        return this.#children.deleted;
    }

    get size() {
        return this.#children.size;
    }

    [Symbol.iterator]() {
        return this.#children[Symbol.iterator]();
    }

    /**
     * Soft-reset all parts.  Invoked automatically by the owner on reset.
     */
    async reset() {
        for (const endpoint of this) {
            await endpoint.reset();
        }
    }

    /**
     * Destroy all parts.  Invoked automatically by the owner on destroy.
     */
    async close() {
        for (const endpoint of this) {
            await endpoint.close();
        }
    }

    /**
     * Ensure the endpoint's identity is unique amongst siblings.
     */

    /**
     * Confirm availability of an ID amongst the endpoint's children.
     */
    assertIdAvailable(id: string, endpoint: Endpoint) {
        const other = this.get(id);
        if (other && other !== endpoint) {
            throw new IdentityConflictError(`${other} is already defined; endpoint IDs must be unique within parent`);
        }
    }

    protected get endpoint() {
        return this.#endpoint;
    }
}
