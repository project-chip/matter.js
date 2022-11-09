/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataReaderLE } from "../util/DataReaderLE";
import { DataWriterLE } from "../util/DataWriterLE";
import { TlvType, TlvCodec, TlvTag } from "./TlvCodec";
import { TlvSchema } from "./TlvSchema";

const INT8_RANGE = { min: -128, max: 127};
const INT16_RANGE = { min: -32768, max: 32767 };
const INT32_RANGE = { min: -2147483648, max: 2147483647 };
const INT64_RANGE = { min: BigInt("-9223372036854775808"), max: BigInt("9223372036854775807") };

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

        if (this.min < INT64_RANGE.min) throw new Error("Signed integer minimum should be greater or equal to int64 min.");
        if (this.max > INT64_RANGE.max) throw new Error("Signed integer maximum should be lower or equal to int64 max.");
    }

    /** @override */
    protected encodeTlv(writer: DataWriterLE, value: number | bigint, tag: TlvTag = {}): void {
        let type: TlvType;
        if (value > 0) {
            if (value <= INT8_RANGE.max) {
                type = TlvType.SignedInt8;
            } else if (value <= INT16_RANGE.max) {
                type = TlvType.SignedInt16;
            } else if (value <= INT32_RANGE.max) {
                type = TlvType.SignedInt32;
            } else {
                type = TlvType.SignedInt64;
            }
        } else {
            if (value >= INT8_RANGE.min) {
                type = TlvType.SignedInt8;
            } else if (value >= INT16_RANGE.min) {
                type = TlvType.SignedInt16;
            } else if (value >= INT32_RANGE.min) {
                type = TlvType.SignedInt32;
            } else {
                type = TlvType.SignedInt64;
            }
        }

        TlvCodec.writeTag(writer, type, tag);
        TlvCodec.writeIntegerValue(writer, type, value);
    }

    /** @override */
    protected decodeTlv(reader: DataReaderLE) {
        const { tag, type } = TlvCodec.readTagType(reader);
        if (type !== TlvType.SignedInt8 && type !== TlvType.SignedInt16 && type !== TlvType.SignedInt32 && type !== TlvType.SignedInt64)
            throw new Error(`Unexpected type ${type}.`);
        let value = TlvCodec.readIntegerValue(reader, type);
        this.validate(value);
        if (typeof value === "bigint" && this.max <= INT32_RANGE.max && this.min >= INT32_RANGE.min) {
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
export const TlvInt = ({ min = INT64_RANGE.min, max = INT64_RANGE.max }: { min?: number | bigint, max?: number | bigint }) => new IntSchema(min, max);
export const TlvInt8 = TlvInt(INT8_RANGE) as TlvSchema<number>;
export const TlvInt16 = TlvInt(INT16_RANGE) as TlvSchema<number>;
export const TlvInt32 = TlvInt(INT32_RANGE) as TlvSchema<number>;
export const TlvInt64 = TlvInt(INT64_RANGE);
