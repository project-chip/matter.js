/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvType, TlvCodec, TlvTag, TlvTypeLength, TlvToPrimitive } from "./TlvCodec.js";
import { TlvReader, TlvSchema, TlvWriter } from "./TlvSchema.js";
import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";
import { maxValue, minValue } from "../util/Number.js";

type LengthConstraints = {
    minLength?: number,
    maxLength?: number,
    length?: number,
};

/**
 * Schema to encode an byte string or an Utf8 string in TLV.
 * 
 * @see {@link MatterCoreSpecificationV1_0} § A.11.2
 */
export class StringSchema<T extends TlvType.ByteString | TlvType.Utf8String> extends TlvSchema<TlvToPrimitive[T]> {
    constructor(
        private type: T,
        private readonly minLength: number = 0,
        private readonly maxLength: number = 1024,
    ) {
        super();

        if (minLength < 0) throw new Error("Minimum length should be a positive number.");
    }

    override encodeTlvInternal(writer: TlvWriter, value: TlvToPrimitive[T], tag: TlvTag = {}): void {
        const typeLength: TlvTypeLength = { type: this.type, length: TlvCodec.getUIntTlvLength(value.length)}
        writer.writeTag(typeLength, tag);
        writer.writePrimitive(typeLength, value);
    }

    override decodeTlvInternalValue(reader: TlvReader, typeLength: TlvTypeLength) {
        if (typeLength.type !== this.type) throw new Error(`Unexpected type ${typeLength.type}.`);
        const value = reader.readPrimitive(typeLength) as TlvToPrimitive[T];
        this.validate(value);
        return value;
    }

    override validate({ length }: TlvToPrimitive[T]): void {
        if (length > this.maxLength) throw new Error(`Array is too long: ${length}, max ${this.maxLength}.`);
        if (length < this.minLength) throw new Error(`Array is too short: ${length}, min ${this.minLength}.`);
    }

    bound({ minLength, maxLength, length }: LengthConstraints) {
        return new StringSchema(this.type, length ?? maxValue(this.minLength, minLength), length ?? minValue(this.maxLength, maxLength));
    }
}

/** ByteString TLV schema. */
export const TlvByteString = new StringSchema(TlvType.ByteString);

/** String TLV schema. */
export const TlvString = new StringSchema(TlvType.Utf8String);

/** String TLV schema. */
export const TlvString32max = TlvString.bound({ maxLength: 32 });

/** String TLV schema. */
export const TlvString64max = TlvString.bound({ maxLength: 64 });

/** String TLV schema. */
export const TlvString256max = TlvString.bound({ maxLength: 256 });
