/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OfflineContext } from "#behavior/context/server/OfflineContext.js";
import { IndexBehavior } from "#behavior/system/index/IndexBehavior.js";
import { Endpoint } from "#endpoint/Endpoint.js";
import { ImplementationError } from "#general";

/**
 * Thrown when there is a endpoint ID or number conflict.
 */
export class IdentityConflictError extends ImplementationError {}

/**
 * Provides NodeServer and Endpoint identification.
 */
export class IdentityService {
    #partsById?: Record<string, Endpoint | undefined>;
    #node: Endpoint;

    constructor(node: Endpoint) {
        this.#node = node;
    }

    /**
     * Textual description of the node.
     */
    get nodeDescription() {
        return this.#node.toString();
    }

    /**
     * Ensure that a number is available for assignment to a {@link Endpoint}.
     */
    assertNumberAvailable(number: number, endpoint: Endpoint) {
        let other;
        if (this.#node.lifecycle.hasNumber && this.#node.number === number) {
            other = this.#node;
        } else {
            if (this.#partsById === undefined) {
                this.#partsById = OfflineContext.ReadOnly.agentFor(this.#node).get(IndexBehavior).partsById;
            }
            other = this.#partsById?.[number];
        }
        if (other && other !== endpoint) {
            let owner;
            if (other.lifecycle.hasId) {
                owner = `endpoint ${other.id}`;
            } else {
                owner = `another endpoint`;
            }
            throw new IdentityConflictError(`Endpoint number ${number} is already assigned to ${owner}`);
        }
    }
}
