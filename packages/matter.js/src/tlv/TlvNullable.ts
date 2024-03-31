/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArraySchema } from "./TlvArray.js";
import { TlvTag, TlvType, TlvTypeLength } from "./TlvCodec.js";
import { TlvReader, TlvSchema, TlvWriter } from "./TlvSchema.js";
import { StringSchema } from "./TlvString.js";

/**
 * Schema to encode a nullable value in TLV.
 *
 * @see {@link MatterSpecification.v10.Core} § A.11.6
 */
export class NullableSchema<T> extends TlvSchema<T | null> {
    constructor(private readonly schema: TlvSchema<T>) {
        super();
    }

    override encodeTlvInternal(writer: TlvWriter, value: T | null, tag?: TlvTag, forWriteInteraction?: boolean): void {
        if (value === null) {
            writer.writeTag({ type: TlvType.Null }, tag);
        } else {
            this.schema.encodeTlvInternal(writer, value, tag, forWriteInteraction);
        }
    }

    override decodeTlvInternalValue(reader: TlvReader, typeLength: TlvTypeLength): T | null {
        if (typeLength.type === TlvType.Null) return null;
        const value = this.schema.decodeTlvInternalValue(reader, typeLength);
        // The Matter standard allows to send an empty string or Array for nullable elements with a minimum length > 0.
        // This should be handled like null, so make sure to convert that correctly when decoding.
        if (
            value !== null &&
            (this.schema instanceof ArraySchema || this.schema instanceof StringSchema) &&
            this.schema.minLength !== undefined &&
            this.schema.minLength > 0 &&
            (value as any).length === 0
        ) {
            return null;
        }
        return value;
    }

    override validate(value: T | null): void {
        if (value !== null) this.schema.validate(value);
    }

    override injectField(value: T, fieldId: number, fieldValue: any, injectChecker: (fieldValue: any) => boolean): T {
        if (value !== null) {
            return this.schema.injectField(value, fieldId, fieldValue, injectChecker);
        }
        return value;
    }

    override removeField(value: T, fieldId: number, removeChecker: (fieldValue: any) => boolean): T {
        if (value !== null) {
            return this.schema.removeField(value, fieldId, removeChecker);
        }
        return value;
    }
}

/** Nullable TLV schema. */
export const TlvNullable = <T>(schema: TlvSchema<T>) => new NullableSchema(schema);
