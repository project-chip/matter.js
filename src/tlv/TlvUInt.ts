/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataReaderLE } from "../util/DataReaderLE.js";
import { DataWriterLE } from "../util/DataWriterLE.js";
import { UINT16_MAX, UINT32_MAX, UINT64_MAX, UINT8_MAX } from "../util/Number.js";
import { TlvType, TlvCodec, TlvTag, TlvTypeLength } from "./TlvCodec.js";
import { TlvSchema } from "./TlvSchema.js";
import { MatterCoreSpecificationV1_0 } from "../Specifications.js";

/**
 * Schema to encode an unsigned integer in TLV.
 * 
 * @see {@link MatterCoreSpecificationV1_0} § A.11.1
 */
 class UIntSchema extends TlvSchema<number | bigint> {
    constructor(
        readonly min: number | bigint,
        readonly max: number | bigint,
    ) {
        super();

        if (this.min < 0) throw new Error("Unsigned integer minimum should be greater or equal to 0.");
        if (this.max > UINT64_MAX) throw new Error("Unsigned integer maximum should be lower or equal to uint64 max.");
    }

    /** @override */
    encodeTlv(writer: DataWriterLE, value: number | bigint, tag: TlvTag = {}): void {
        const typeLength: TlvTypeLength = { type: TlvType.UnsignedInt, length: TlvCodec.getUIntTlvLength(value) }
        TlvCodec.writeTag(writer, typeLength, tag);
        TlvCodec.writePrimitive(writer, typeLength, value);
    }

    /** @override */
    decodeTlvValue(reader: DataReaderLE, typeLength: TlvTypeLength) {
        if (typeLength.type !== TlvType.UnsignedInt) throw new Error(`Unexpected type ${typeLength.type}.`);

        const value = TlvCodec.readPrimitive(reader, typeLength);
        this.validate(value);
        if (this.max <= UINT32_MAX && typeof value === "bigint") {
            // Convert down to a number if it can fit and is expected.
            return Number(value);
        }
        return value;
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
export const TlvEnum = <T>() => TlvUInt8 as TlvSchema<T>;
