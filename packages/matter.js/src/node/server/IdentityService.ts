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
export class IdentityConflictError extends ImplementationError {};

/**
 * Provides NodeServer and Part identification.
 */
export class IdentityService {
    #nodeDescription: string;
    #port?: number;
    #index?: IndexBehavior;

    constructor(root: Part, nodeDescription: string, port?: number) {
        this.#nodeDescription = nodeDescription;
        this.#port = port;

        const acquireIndex = () => {
            root.behaviors.require(IndexBehavior);
            this.#index = root.agent.get(IndexBehavior);
        }

        // Obtain the part index used for validating identity availability.  If the root part isn't yet initialized we
        // don't need to validate identities anyway
        if (root.lifecycle.isReady) {
            acquireIndex();
        } else {
            root.lifecycle.ready.once(acquireIndex);
        }
    }

    /**
     * Textual description of the node.
     */
    get nodeDescription() {
        return this.#nodeDescription;
    }

    /**
     * The network port the node is listening on.
     */
    get port() {
        return this.#port;
    }

    /**
     * Ensure that a number is available for assignment to a {@link Part}.
     */
    assertNumberAvailable(number: number, part: Part) {
        const other = this.#index?.forNumber(number);
        if (other && other !== part) {
            throw new IdentityConflictError(`Another part already exists with number ${number}`)
        }
    }
}
