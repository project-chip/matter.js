/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";
import { TlvTag, TlvType, TlvTypeLength } from "./TlvCodec.js";
import { TlvReader, TlvSchema, TlvWriter } from "./TlvSchema.js";

/**
 * Schema to encode a nullable value in TLV.
 *
 * @see {@link MatterCoreSpecificationV1_0} § A.11.6
 */
export class NullableSchema<T> extends TlvSchema<T | null> {
    constructor(private readonly schema: TlvSchema<T>) {
        super();
    }

    override encodeTlvInternal(writer: TlvWriter, value: T | null, tag?: TlvTag): void {
        if (value === null) {
            writer.writeTag({ type: TlvType.Null }, tag);
        } else {
            this.schema.encodeTlvInternal(writer, value, tag);
        }
    }

    override decodeTlvInternalValue(reader: TlvReader, typeLength: TlvTypeLength): T | null {
        if (typeLength.type === TlvType.Null) return null;
        return this.schema.decodeTlvInternalValue(reader, typeLength);
    }

    override validate(value: T | null): void {
        if (value !== null) this.schema.validate(value);
    }

    override injectField(
        value: T,
        fieldId: number,
        fieldValue: any,
        injectChecker: (fieldValue: any | undefined) => boolean,
    ): T {
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
