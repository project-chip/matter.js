/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataReaderLE } from "../util/DataReaderLE";
import { DataWriterLE } from "../util/DataWriterLE";
import { TlvType, TlvCodec, TlvTag } from "./TlvCodec";
import { TlvSchema } from "./TlvSchema";

const UINT8_MAX = 0xFF;
const UINT16_MAX = 0xFFFF;
const UINT32_MAX = 0xFFFFFFFF;
const UINT64_MAX = BigInt("18446744073709551615");

/**
 * Schema to encode an unsigned integer in TLV.
 * 
 * @see {@link MatterCoreSpecificationV1_0} § A.11.1
 */
 class UIntSchema extends TlvSchema<number | bigint> {
    constructor(
        private readonly min: number | bigint,
        private readonly max: number | bigint,
    ) {
        super();

        if (this.min < 0) throw new Error("Unsigned integer minimum should be greater or equal to 0.");
        if (this.max > UINT64_MAX) throw new Error("Unsigned integer maximum should be lower or equal to uint64 max.");
    }

    /** @override */
    protected encodeTlv(writer: DataWriterLE, value: number | bigint, tag: TlvTag = {}): void {
        let type: TlvType;
        if (value <= UINT8_MAX) {
            type = TlvType.UnsignedInt8;
        } else if (value <= UINT16_MAX) {
            type = TlvType.UnsignedInt16;
        } else if (value <= UINT32_MAX) {
            type = TlvType.UnsignedInt32;
        } else {
            type = TlvType.UnsignedInt64;
        }

        TlvCodec.writeTag(writer, type, tag);
        TlvCodec.writePrimitive(writer, type, value);
    }

    /** @override */
    protected decodeTlv(reader: DataReaderLE) {
        const { tag, type } = TlvCodec.readTagType(reader);
        if (type !== TlvType.UnsignedInt8
            && type !== TlvType.UnsignedInt16
            && type !== TlvType.UnsignedInt32
            && type !== TlvType.UnsignedInt64) throw new Error(`Unexpected type ${type}.`);
        let value = TlvCodec.readPrimitive(reader, type);
        this.validate(value);
        if (this.max <= UINT32_MAX && typeof value === "bigint") {
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

/** Unsigned integer TLV schema. */
export const TlvUInt = ({ min = 0, max = UINT64_MAX }: { min?: number | bigint, max?: number | bigint }) => new UIntSchema(min, max);
export const TlvUInt8 = TlvUInt({ max: UINT8_MAX }) as TlvSchema<number>;
export const TlvUInt16 = TlvUInt({ max: UINT16_MAX }) as TlvSchema<number>;
export const TlvUInt32 = TlvUInt({ max: UINT32_MAX }) as TlvSchema<number>;
export const TlvUInt64 = TlvUInt({ max: UINT64_MAX });
