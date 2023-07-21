/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DefinitionError } from "../../definitions/index.js";

/**
 * The result of validation.
 */
export interface RecordValidationResult {
    valid: boolean;
    errors?: DefinitionError[];
}

/**
 * Record validation API.
 */
export interface RecordValidator {
    validate(record: { [name: string]: any }): RecordValidationResult;
    logFailure(): void;
}
