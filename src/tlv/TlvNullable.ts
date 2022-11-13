/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataReaderLE } from "../util/DataReaderLE.js";
import { DataWriterLE } from "../util/DataWriterLE.js";
import { TlvType, TlvCodec, TlvTag, TlvTypeLength } from "./TlvCodec.js";
import { TlvSchema } from "./TlvSchema.js";

/**
 * Schema to encode a nulable value in TLV.
 * 
 * @see {@link MatterCoreSpecificationV1_0} § A.11.6
 */
 class NullableSchema<T> extends TlvSchema<T | null> {

    constructor(
        private readonly schema: TlvSchema<T>,
    ) {
        super();
    }

    /** @override */
    encodeTlv(writer: DataWriterLE, value: T | null, tag: TlvTag = {}): void {
        if (value === null) {
            TlvCodec.writeTag(writer, { type: TlvType.Null }, tag);
        } else {
            this.schema.encodeTlv(writer, value, tag);
        }
    }

    /** @override */
    decodeTlvValue(reader: DataReaderLE, typeLength: TlvTypeLength): T | null {
        if (typeLength.type === TlvType.Null) return null;
        return this.schema.decodeTlvValue(reader, typeLength);
    }
}

/** Nullable TLV schema. */
export const TlvNullable = <T>(schema: TlvSchema<T>) => new NullableSchema(schema);
