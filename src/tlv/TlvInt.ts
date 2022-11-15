/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataReaderLE } from "../util/DataReaderLE";
import { DataWriterLE } from "../util/DataWriterLE";
import { INT16_MAX, INT16_MIN, INT32_MAX, INT32_MIN, INT64_MAX, INT64_MIN, INT8_MAX, INT8_MIN } from "../util/Number";
import { TlvType, TlvCodec, TlvTag, TlvTypeLength } from "./TlvCodec";
import { TlvSchema } from "./TlvSchema";

/**
 * Schema to encode an signed integer in TLV.
 * 
 * @see {@link MatterCoreSpecificationV1_0} § A.11.1
 */
 class IntSchema extends TlvSchema<number | bigint> {
    constructor(
        private readonly min: number | bigint,
        private readonly max: number | bigint,
    ) {
        super();

        if (this.min < INT64_MIN) throw new Error("Signed integer minimum should be greater or equal to int64 min.");
        if (this.max > INT64_MAX) throw new Error("Signed integer maximum should be lower or equal to int64 max.");
    }

    /** @override */
    protected encodeTlv(writer: DataWriterLE, value: number | bigint, tag: TlvTag = {}): void {
        let typeLength: TlvTypeLength = { type: TlvType.SignedInt, length: TlvCodec.getIntTlvLength(value) };
        TlvCodec.writeTag(writer, typeLength, tag);
        TlvCodec.writePrimitive(writer, typeLength, value);
    }

    /** @override */
    protected decodeTlv(reader: DataReaderLE) {
        const { tag, typeLength } = TlvCodec.readTagType(reader);
        if (typeLength.type !== TlvType.SignedInt) throw new Error(`Unexpected type ${typeLength.type}.`);
        let value = TlvCodec.readPrimitive(reader, typeLength);
        this.validate(value);
        if (typeof value === "bigint" && this.max <= INT32_MAX && this.min >= INT32_MIN) {
            // Convert down to a number if it can fit and is expected.
            value = Number(value);
        }
        return { tag, value };
    }

    /** @override */
    validate(value: number | bigint): void {
        if (value < this.min) throw new Error(`Invalid value: ${value} is below the minimum, ${this.min}.`);
        if (value > this.max) throw new Error(`Invalid value: ${value} is above the maximum, ${this.min}.`);
    }
}

/** Signed integer TLV schema. */
export const TlvInt = ({ min = INT64_MIN, max = INT64_MAX }: { min?: number | bigint, max?: number | bigint }) => new IntSchema(min, max);
export const TlvInt8 = TlvInt({ min: INT8_MIN, max: INT8_MAX }) as TlvSchema<number>;
export const TlvInt16 = TlvInt({ min: INT16_MIN, max: INT16_MAX }) as TlvSchema<number>;
export const TlvInt32 = TlvInt({ min: INT32_MIN, max: INT32_MAX }) as TlvSchema<number>;
export const TlvInt64 = TlvInt({ min: INT64_MIN, max: INT64_MAX });
