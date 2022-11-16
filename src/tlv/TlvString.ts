/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataReaderLE } from "../util/DataReaderLE.js";
import { DataWriterLE } from "../util/DataWriterLE.js";
import { TlvType, TlvCodec, TlvTag, TlvTypeLength, TlvToPrimitive } from "./TlvCodec.js";
import { LengthConstraints, TlvSchema } from "./TlvSchema.js";
import { MatterCoreSpecificationV1_0 } from "../Specifications.js";

/**
 * Schema to encode an byte string or an Utf8 string in TLV.
 * 
 * @see {@link MatterCoreSpecificationV1_0} § A.11.2
 */
 class StringSchema<T extends TlvType.ByteString | TlvType.Utf8String> extends TlvSchema<TlvToPrimitive[T]> {
    constructor(
        private type: T,
        private readonly minLength: number = 0,
        private readonly maxLength: number = 1024,
    ) {
        super();

        if (minLength < 0) throw new Error("Minimum length should be a positive number.");
    }

    /** @override */
    encodeTlv(writer: DataWriterLE, value: TlvToPrimitive[T], tag: TlvTag = {}): void {
        const typeLength: TlvTypeLength = { type: this.type, length: TlvCodec.getUIntTlvLength(value.length)}
        TlvCodec.writeTag(writer, typeLength, tag);
        TlvCodec.writePrimitive(writer, typeLength, value);
    }

    /** @override */
    decodeTlvValue(reader: DataReaderLE, typeLength: TlvTypeLength) {
        if (typeLength.type !== this.type) throw new Error(`Unexpected type ${typeLength.type}.`);
        return TlvCodec.readPrimitive(reader, typeLength) as TlvToPrimitive[T];
    }

    /** @override */
    validate({ length }: TlvToPrimitive[T]): void {
        if (length > this.maxLength) throw new Error(`Array is too long: ${length}, max ${this.maxLength}.`);
        if (length < this.minLength) throw new Error(`Array is too short: ${length}, min ${this.minLength}.`);
    }
}

/** ByteString TLV schema. */
export const TlvByteString = ({minLength, maxLength, length}: LengthConstraints = {}) => new StringSchema(TlvType.ByteString, length ?? minLength, length ?? maxLength);

/** String TLV schema. */
export const TlvString = ({minLength, maxLength, length}: LengthConstraints = {}) => new StringSchema(TlvType.Utf8String, length ?? minLength, length ?? maxLength);
