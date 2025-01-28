/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { isObject } from "#general";
import { SchemaErrorPath } from "#model";
import { DatatypeError, Val } from "#protocol";

export function assertNumber(value: Val, path: SchemaErrorPath): asserts value is number {
    if (Number.isFinite(value)) {
        return;
    }
    throw new DatatypeError(path, "a number", value);
}

export function assertBoolean(value: Val, path: SchemaErrorPath): asserts value is number {
    if (typeof value === "boolean" || value === 0 || value === 1) {
        return;
    }
    throw new DatatypeError(path, "a boolean", value);
}

export function assertObject(value: Val, path: SchemaErrorPath): asserts value is Val.Struct {
    if (isObject(value)) {
        return;
    }
    throw new DatatypeError(path, "an object", value);
}

export function assertNumeric(value: Val, path: SchemaErrorPath): asserts value is number | bigint {
    if (typeof value === "number" || typeof value === "bigint") {
        return;
    }
    throw new DatatypeError(path, "a number or bigint", value);
}

export function assertString(value: Val, path: SchemaErrorPath): asserts value is string {
    if (typeof value === "string") {
        return;
    }
    throw new DatatypeError(path, "a string", value);
}

export function assertBytes(value: Val, path: SchemaErrorPath): asserts value is Uint8Array {
    if (value instanceof Uint8Array) {
        return;
    }
    throw new DatatypeError(path, "a byte array", value);
}

export function assertSequence(value: Val, path: SchemaErrorPath): asserts value is string | Uint8Array {
    if (typeof value === "string" || value instanceof Uint8Array) {
        return;
    }
    throw new DatatypeError(path, "a string or byte array", value);
}

export function assertArray(value: Val, path: SchemaErrorPath): asserts value is Val[] {
    if (!Array.isArray(value)) {
        throw new DatatypeError(path, "an array", value);
    }
}
