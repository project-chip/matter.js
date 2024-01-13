/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../common/MatterError.js";
import { ValueModel } from "../model/index.js";
import { StatusCode, StatusResponseError } from "../protocol/interaction/StatusCode.js";
import { Schema } from "./supervision/Schema.js";

/**
 * Thrown due to schema violations.
 */
export class SchemaViolationError extends StatusResponseError {
    constructor(prefix: string, schema: Schema, message: string, code: StatusCode) {
        const text = `${prefix} ${schema.path}: ${message}`;
        super(text, code);

        // Remove injected status code
        this.message = text;
    }
}

/**
 * Thrown for invalid reads.
 */
export class ReadError extends SchemaViolationError {
    constructor(schema: Schema, message: string, code?: StatusCode) {
        super("Reading", schema, message, code ?? StatusCode.UnsupportedRead);
    }
}

/**
 * Thrown for invalid writes.
 */
export class WriteError extends SchemaViolationError {
    constructor(schema: Schema, message: string, code?: StatusCode) {
        super("Writing", schema, message, code ?? StatusCode.UnsupportedWrite);
    }
}

/**
 * Thrown when validation fails.
 */
export class ValidateError extends SchemaViolationError {
    constructor(schema: Schema, message: string, code?: StatusCode) {
        super("Validating", schema, message, code ?? StatusCode.InvalidDataType);
    }
}

/**
 * Thrown when a value is of the wrong datatype.
 */
export class DatatypeError extends ValidateError {
    constructor(schema: Schema, type: string, value: unknown, code?: StatusCode) {
        const str = `${value}`;
        if (str.length > 60) {
            value = `${str.substring(60)}…`;
        }
        super(schema, `Value "${str}" is not ${type}`, code);
    }
}

/**
 * Thrown when constraint is violated.
 */
export class ConstraintError extends ValidateError {
    constructor(schema: Schema, message: string) {
        super(schema, `Constraint "${(schema as ValueModel).constraint}": ${message}`, StatusCode.ConstraintError);
    }
}

/**
 * Thrown when conformance is violated.
 */
export class ConformanceError extends ValidateError {
    constructor(schema: Schema, message: string, choice?: string) {
        let prefix;
        if (choice) {
            prefix = `Conformance choice "${choice}"`;
        } else {
            prefix = `Conformance "${(schema as ValueModel).conformance}"`;
        }
        super(schema, `${prefix}: ${message}`, StatusCode.InvalidAction);
    }
}

/**
 * Thrown for issues with metadata definitions or related data that are
 * a local (vs network client) problem.
 */
export class SchemaError extends ImplementationError {
    constructor(schema: Schema, message: string) {
        super(`Path ${schema.path}: ${message}`);
    }
}
