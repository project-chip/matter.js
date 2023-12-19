/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ValueModel } from "../../../model/index.js";
import { ByteArray } from "../../../util/ByteArray.js";
import { DatatypeError } from "../../errors.js";
import { Schema } from "../../supervision/Schema.js";
import { Val } from "../managed/Val.js";

export function assertNumber(value: Val, schema: Schema): asserts value is number {
    if (typeof value === "number") {
        return;
    }
    throw new DatatypeError(schema, "a number", value);
}

export function assertObject(value: Val, schema: Schema): asserts value is Val.Struct {
    if (typeof value === "object" && !Array.isArray(value)) {
        return;
    }
    throw new DatatypeError(schema, "an object", value);
}

export function assertNumeric(value: Val, schema: ValueModel): asserts value is number | bigint {
    if (typeof value === "number" || typeof value === "bigint") {
        return;
    }
    throw new DatatypeError(schema, "number a number or bigint", value);
}

export function assertString(value: Val, schema: ValueModel): asserts value is string {
    if (typeof value === "string") {
        return;
    }
    throw new DatatypeError(schema, "a string", value);
}

export function assertBytes(value: Val, schema: ValueModel): asserts value is ByteArray {
    if (value instanceof ByteArray) {
        return;
    }
    throw new DatatypeError(schema, "a byte array", value);
}

export function assertSequence(value: Val, schema: ValueModel): asserts value is string | ByteArray {
    if (typeof value === "string" || value instanceof ByteArray) {
        return;
    }
    throw new DatatypeError(schema, "a string or byte array", value);
}

export function assertArray(value: Val, schema: ValueModel): asserts value is Val[] {
    if (!Array.isArray(value)) {
        throw new DatatypeError(schema, "an array", value);
    }
}
