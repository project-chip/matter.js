/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { IndexBehavior } from "../../behavior/definitions/index/IndexBehavior.js";
import { ImplementationError } from "../../common/MatterError.js";
import { Part } from "../../endpoint/Part.js";

/**
 * Thrown when there is a part ID or number conflict.
 */
export class IdentityConflictError extends ImplementationError {}

export class IdentityService {
    #port?: number;
    #index?: IndexBehavior;

    constructor(root: Part, port?: number) {
        this.#port = port;

        const acquireIndex = () => {
            root.behaviors.require(IndexBehavior);
            this.#index = root.agent.get(IndexBehavior);
        };

        // Obtain the part index used for validating identity availability.  If the root part isn't yet initialized we
        // don't need to validate identities anyway
        if (root.lifecycle.isReady) {
            acquireIndex();
        } else {
            root.lifecycle.ready.once(acquireIndex);
        }
    }

    /**
     * This is the best we currently have in terms of a well-known node identifier.
     */
    get port() {
        return this.#port;
    }

    /**
     * Ensure that an ID is available for assignment to a {@link Part}.
     */
    assertIdAvailable(id: string, part: Part) {
        const other = this.#index?.forId(id);
        if (other && other !== part) {
            throw new IdentityConflictError(`Another part already exists with ID ${id}`);
        }
    }

    /**
     * Ensure that a number is available for assignment to a {@link Part}.
     */
    assertNumberAvailable(number: number, part: Part) {
        const other = this.#index?.forNumber(number);
        if (other && other !== part) {
            throw new IdentityConflictError(`Another part already exists with number ${number}`);
        }
    }
}
