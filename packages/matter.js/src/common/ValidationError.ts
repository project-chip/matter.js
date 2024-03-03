/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StatusCode, StatusResponseError } from "../protocol/interaction/StatusCode.js";

/**
 * Error thrown when Data validation fails. Please check the provided data.
 * We encode this as StatusResponseError because in most places we want to return a StatusResponseError anyway.
 */
export class ValidationError extends StatusResponseError {
    public constructor(
        message: string,
        public fieldName?: string,
    ) {
        super(message, StatusCode.ConstraintError);

        this.message = `(Validation/${StatusCode.ConstraintError}) ${message}`;
    }
}
