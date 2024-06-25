/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BehaviorBacking } from "../behavior/internal/BehaviorBacking.js";
import { MatterAggregateError, MatterError } from "../common/MatterError.js";
import { Endpoint } from "./Endpoint.js";

/**
 * Thrown when an error occurs during initialization of a behavior.
 */
export class BehaviorInitializationError extends MatterError {
    constructor(backing: BehaviorBacking, cause: Error) {
        super(`Error initializing ${backing}`);
        this.cause = cause;
    }

    override cause: Error;
}

/**
 * Thrown when an error occurs initializing the behaviors of an endpoint.
 */
export class BehaviorsInitializationError extends MatterAggregateError {
    constructor(causes: Error[], endpoint: Endpoint) {
        super(causes, `Error initializing ${endpoint}: Behaviors have errors`);
    }
}
