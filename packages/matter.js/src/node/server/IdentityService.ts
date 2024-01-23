/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OfflineContext } from "../../behavior/context/server/OfflineContext.js";
import { IndexBehavior } from "../../behavior/system/index/IndexBehavior.js";
import { ImplementationError } from "../../common/MatterError.js";
import { Part } from "../../endpoint/Part.js";

/**
 * Thrown when there is a part ID or number conflict.
 */
export class IdentityConflictError extends ImplementationError {};

/**
 * Provides NodeServer and Part identification.
 */
export class IdentityService {
    #partsById?: Record<string, Part | undefined>;
    #node: Part;

    constructor(node: Part) {
        this.#node = node;

        const acquireIndex = () => {
            this.#partsById = OfflineContext.ReadOnly.agentFor(node).get(IndexBehavior).partsById;
        }

        // Obtain the part index used for validating identity availability.  If the root part isn't yet initialized we
        // don't need to validate identities anyway
        if (node.lifecycle.isReady) {
            acquireIndex();
        } else {
            node.lifecycle.ready.on(acquireIndex);
        }
    }

    /**
     * Textual description of the node.
     */
    get nodeDescription() {
        return this.#node.toString();
    }

    /**
     * Ensure that a number is available for assignment to a {@link Part}.
     */
    assertNumberAvailable(number: number, part: Part) {
        let other;
        if (this.#node.lifecycle.hasNumber && this.#node.number === number) {
            other = this.#node;
        } else {
            other = this.#partsById?.[number];
        }
        if (other && other !== part) {
            let owner;
            if (other.lifecycle.hasId) {
                owner = `part ${other.id}`;
            } else {
                owner = `another part`
            }
            throw new IdentityConflictError(`Endpoint number ${number} is already assigned to ${owner}`);
        }
    }
}
