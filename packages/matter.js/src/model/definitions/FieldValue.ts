/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { UnexpectedDataError } from "../../common/MatterError.js";
import { serialize as stringSerialize } from "../../util/String.js";

/**
 * A FieldValue represents a concrete value for a datatype.  Most values are
 * primitives but some values we encode with specialized typed objects so we
 * can capture the original semantic meaning.
 */
export type FieldValue =
    | null
    | string
    | number
    | bigint
    | boolean
    | Date
    | []
    | FieldValue.Properties
    | FieldValue.Reference
    | FieldValue.Percent
    | FieldValue.Celsius;

export namespace FieldValue {
    // Typing with constants should be just as type safe as using an enum but
    // simplifies type definitions

    export const percent = "percent";
    export type percent = typeof percent;

    export const celsius = "celsius";
    export type celsius = typeof celsius;

    export const reference = "reference";
    export type reference = typeof reference;

    export const properties = "properties";
    export type properties = typeof properties;

    /**
     * If a field value isn't a primitive type, it's an object with a type
     * field indicating one of these types.
     */
    export type Type = percent | celsius | reference | properties;

    /**
     * Test for one of the special placeholder types.
     */
    export function is(value: FieldValue | undefined, type: Type) {
        return value && (value as any).type === type;
    }

    /**
     * Flag for an invalid value.  Not part of the FieldValue union but
     * returned when casting to a field value if the cast is impossible
     */
    export const Invalid: unique symbol = Symbol("invalid");
    export type Invalid = typeof Invalid;

    /**
     * Reference to a named field
     */
    export type Reference = {
        type: reference;
        name: string;
    };

    export function Reference(name: string): Reference {
        return { type: reference, name };
    }

    /**
     * Celsius value, typically .1°C or .01°C
     */
    export type Celsius = {
        type: celsius;
        value: number;
    };

    export function Celsius(value: number): Celsius {
        return { type: celsius, value };
    }

    /**
     * Percent value, units of either 1% (.01) or .01% (.0001)
     */
    export type Percent = {
        type: percent;
        value: number;
    };

    export function Percent(value: number): Percent {
        return { type: percent, value };
    }

    /**
     * A set of struct property values keyed by name.
     */
    export type Properties = {
        type: properties;
        properties: { [name: string]: FieldValue };
    };

    /**
     * Convert the field value to a "defacto-standard" form.
     */
    export function serialize(value: FieldValue) {
        if (value === null) {
            return "null";
        }
        if (is(value, reference)) {
            return (value as Reference).name;
        }
        if (is(value, celsius)) {
            return `${(value as Celsius).value}°C`;
        }
        if (is(value, percent)) {
            return `${(value as Percent).value}%';`;
        }
        if (is(value, properties)) {
            return stringSerialize((value as Properties).properties);
        }
        return value.toString();
    }

    /**
     * Given a type name as a hint, do our best to convert a field value to a
     * number.
     */
    export function numericValue(value: FieldValue | undefined, typeName?: string) {
        if (typeof value === "boolean") {
            return value ? 1 : 0;
        }

        if (typeof value === "number") {
            return value;
        }

        if (is(value, celsius)) {
            switch (typeName) {
                case "temperature":
                case "temp-diff":
                    return (value as Celsius).value * 100;

                case "temp-u8":
                case "temp-s8":
                    return (value as Celsius).value * 10;
            }

            // Not sure how to interpret the value
            return;
        }

        if (is(value, percent)) {
            switch (typeName) {
                case "percent100ths":
                    return (value as Percent).value * 100;

                default:
                    return (value as Percent).value;
            }
        }
    }

    /**
     * Extract object properties from the value.
     */
    export function objectValue(value: FieldValue | undefined) {
        if (is(value, properties)) {
            return (value as Properties).properties;
        }
    }

    /**
     * Unwrap wrapped values, leave others as-is.
     */
    export function unwrap(value: FieldValue | undefined, typeName?: string) {
        if (value === null || typeof value !== "object" || Array.isArray(value) || value instanceof Date) {
            return value;
        }

        const type = value.type;
        switch (type) {
            case "properties":
                return objectValue(value);

            case "reference":
                // This needs to be handled at a higher level
                return;

            case "percent":
            case "celsius":
                return numericValue(value, typeName);

            case undefined:
                throw new UnexpectedDataError(`Field value objects must be wrappers with "type" field`);

            default:
                throw new UnexpectedDataError(`Unsupported wrapped object type "${type}"`);
        }
    }

    /**
     * Get the referenced name if the FieldValue is a reference.
     */
    export function referenced(value: FieldValue | undefined) {
        if (is(value, reference)) {
            return (value as Reference).name;
        }
    }
}
