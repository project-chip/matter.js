/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvType, TlvTag, TlvTypeLength } from "./TlvCodec.js";
import { TlvReader, TlvSchema, TlvWriter } from "./TlvSchema.js";
import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";

/**
 * Schema to encode a nulable value in TLV.
 * 
 * @see {@link MatterCoreSpecificationV1_0} § A.11.6
 */
export class NullableSchema<T> extends TlvSchema<T | null> {

    constructor(
        private readonly schema: TlvSchema<T>,
    ) {
        super();
    }

    override encodeTlvInternal(writer: TlvWriter, value: T | null, tag: TlvTag = {}): void {
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
}

/** Nullable TLV schema. */
export const TlvNullable = <T>(schema: TlvSchema<T>) => new NullableSchema(schema);
