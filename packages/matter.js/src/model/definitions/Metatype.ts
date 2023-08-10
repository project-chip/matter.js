/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "../../util/ByteArray.js";
import { FieldValue } from "./FieldValue.js";

/**
 * General groupings of Matter types.
 */
export enum Metatype {
    any = "any",
    boolean = "boolean",
    bitmap = "bitmap",
    enum = "enum",
    integer = "integer",
    float = "float",
    bytes = "bytes",
    array = "array",
    object = "object",
    string = "string",
    date = "date",
}

export namespace Metatype {
    /**
     * Does the specific type have children?
     */
    export function hasChildren(type: Metatype | undefined) {
        switch (type) {
            case Metatype.enum:
            case Metatype.bitmap:
            case Metatype.object:
                return true;

            default:
                return false;
        }
    }

    /**
     * Determine the JS type for a metatype.
     */
    export function native(type: Metatype | undefined) {
        switch (type) {
            case Metatype.boolean:
                return Boolean;

            case Metatype.integer:
                return BigInt;

            case Metatype.bitmap:
            case Metatype.enum:
            case Metatype.float:
                return Number;

            case Metatype.bytes:
                return ByteArray;

            case Metatype.array:
                return Array;

            case Metatype.object:
                return Object;

            case Metatype.string:
                return String;

            case Metatype.date:
                return Date;
        }
    }

    /**
     * Cast a value to a specific type.
     *
     * @param type casts to a native equivalent of this type
     * @param value value to cast
     * @returns the cast value or FieldValue.Invalid if cast is not possible
     */
    export function cast(type: Metatype, value: FieldValue): FieldValue | FieldValue.Invalid | undefined {
        if (value === undefined || value === null || type === Metatype.any) {
            return value;
        }

        if (value === "null") {
            return null;
        }

        if (value === "") {
            if (type === Metatype.string) {
                return "";
            }
            return undefined;
        }

        if (FieldValue.is(value, FieldValue.reference)) {
            return value;
        }

        switch (type) {
            case Metatype.string:
                return value.toString();

            case Metatype.boolean:
                if (typeof value === "string") {
                    value = value.trim().toLowerCase();
                }
                return value === "false" || value === "no" || !!value;

            case Metatype.bitmap:
            case Metatype.enum:
                const id = Number(value);
                if (Number.isNaN(id)) {
                    // Key name
                    return value.toString();
                }
                // Value
                return id;

            case Metatype.integer:
                if (typeof value === "string") {
                    // Specialized support for percentages and temperatures
                    let type: FieldValue.celsius | FieldValue.percent | undefined;
                    if (value.endsWith("°C")) {
                        type = FieldValue.celsius;
                    } else if (value.endsWith("%")) {
                        type = FieldValue.percent;
                    }
                    if (type) {
                        value = Number.parseInt(value);
                        if (Number.isNaN(value)) {
                            return FieldValue.Invalid;
                        }
                        return { type, value };
                    }

                    // Strip off extra garbage like Number.parseInt would but
                    // BigInt doesn't
                    const match = value.match(/^(0x[0-9a-f]+|\d+)/);
                    if (match) {
                        value = match[1];
                    }
                }

                try {
                    switch (typeof value) {
                        case "string":
                        case "number":
                        case "bigint":
                        case "boolean":
                            break;

                        default:
                            if (FieldValue.is(value, FieldValue.celsius) || FieldValue.is(value, FieldValue.percent)) {
                                return value;
                            }
                            return FieldValue.Invalid;
                    }
                    const i = BigInt(value);
                    const n = Number(i);
                    if (BigInt(n) === i) {
                        return n;
                    }
                    return i;
                } catch (e) {
                    if (e instanceof SyntaxError) {
                        return FieldValue.Invalid;
                    }
                    throw e;
                }

            case Metatype.float:
                const float = Number(value);
                if (Number.isNaN(float)) {
                    return FieldValue.Invalid;
                }
                return float.valueOf();

            case Metatype.date:
                if (value instanceof Date) {
                    return value;
                }
                if (typeof value !== "string") {
                    return FieldValue.Invalid;
                }
                value = new Date(value);
                if (Number.isNaN(value.valueOf())) {
                    return FieldValue.Invalid;
                }
                return value;

            case Metatype.object:
                if (value === "null") {
                    return null;
                }
                if (FieldValue.is(value, FieldValue.properties)) {
                    return value;
                }
                break;

            case Metatype.bytes:
                if (value === "empty") {
                    return undefined;
                }
                if (!(value instanceof Uint8Array)) {
                    return FieldValue.Invalid;
                }
                return value;

            case Metatype.array:
                // Eject garbage we've seen in the spec
                if (value === "0" || value === "{0,0}") {
                    return;
                }
                if (value === "empty" || value === "[]" || value === "{}") {
                    return [];
                }
                if (Array.isArray(value) && !value.length) {
                    return value;
                }

                // The only supported literal is an empty array
                return FieldValue.Invalid;
        }

        return FieldValue.Invalid;
    }

    /**
     * These are the native types used by this module.
     */
    export type NativeType =
        | typeof Boolean
        | typeof BigInt
        | typeof Number
        | typeof ByteArray
        | typeof Array
        | typeof Object
        | typeof String
        | typeof Date;
}
