/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StatusCode, StatusResponseError } from "../../protocol/interaction/StatusCode.js";
import { DataModelPath } from "./DataModelPath.js";

export type SchemaErrorPath = (DataModelPath & { path?: undefined }) | { path: DataModelPath | string };

/**
 * Thrown due operational schema violations.
 */
export class SchemaViolationError extends StatusResponseError {
    constructor(prefix: string, path: SchemaErrorPath, message: string, code: StatusCode) {
        const text = `${prefix} ${path.path ?? path}: ${message} (${code})`;
        super(text, code);

        // Remove default status code injection
        this.message = text;
    }
}

/**
 * Thrown for issues with metadata definitions or related data that are a local (vs network client) problem.
 */
export class SchemaImplementationError extends SchemaViolationError {
    constructor(path: SchemaErrorPath, message: string, code?: StatusCode) {
        super("Definition of", path, message, code ?? StatusCode.Failure);
    }
}
