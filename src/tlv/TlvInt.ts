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
                type = TlvType.SignedInt_1OctetValue;
            } else if (value <= INT16_RANGE.max) {
                type = TlvType.SignedInt_2OctetValue;
            } else if (value <= INT32_RANGE.max) {
                type = TlvType.SignedInt_4OctetValue;
            } else {
                type = TlvType.SignedInt_8OctetValue;
            }
        } else {
            if (value >= INT8_RANGE.min) {
                type = TlvType.SignedInt_1OctetValue;
            } else if (value >= INT16_RANGE.min) {
                type = TlvType.SignedInt_2OctetValue;
            } else if (value >= INT32_RANGE.min) {
                type = TlvType.SignedInt_4OctetValue;
            } else {
                type = TlvType.SignedInt_8OctetValue;
            }
        }

        TlvCodec.writeTag(writer, type, tag);
        TlvCodec.writeIntegerValue(writer, type, value);
    }

    /** @override */
    protected decodeTlv(reader: DataReaderLE) {
        const { tag, type } = TlvCodec.readTagType(reader);
        if (type !== TlvType.UnsignedInt_1OctetValue
            && type !== TlvType.UnsignedInt_2OctetValue
            && type !== TlvType.UnsignedInt_4OctetValue
            && type !== TlvType.UnsignedInt_8OctetValue) throw new Error(`Unexpected type ${type}.`);
        return { tag, value: TlvCodec.readIntegerValue(reader, type) };
    }

    /** @override */
    validate(value: number | bigint): void {
        if (value < this.min) throw new Error(`Invalid value: ${value} is below the minimum, ${this.min}.`);
        if (value > this.max) throw new Error(`Invalid value: ${value} is above the maximum, ${this.min}.`);
    }
}

/** Unsigned integer TLV schema. */
export const TlvUInt = ({ min = 0, max = UINT64_MAX }: { min?: number | bigint, max?: number | bigint }) => new UIntSchema(min, max);
export const TlvUInt8 = TlvUInt({ max: UINT8_MAX }) as TlvSchema<number>;
export const TlvUInt16 = TlvUInt({ max: UINT16_MAX }) as TlvSchema<number>;
export const TlvUInt32 = TlvUInt({ max: UINT32_MAX }) as TlvSchema<number>;
export const TlvUInt64 = TlvUInt({ max: UINT64_MAX });
