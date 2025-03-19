/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError, maxValue, minValue, serialize, UnexpectedDataError } from "#general";
import { ValidationDatatypeMismatchError, ValidationOutOfBoundsError } from "../common/ValidationError.js";
import { TlvCodec, TlvTag, TlvToPrimitive, TlvType, TlvTypeLength } from "./TlvCodec.js";
import { TlvReader, TlvSchema, TlvWriter } from "./TlvSchema.js";

type LengthConstraints = {
    minLength?: number;
    maxLength?: number;
    length?: number;
};

/**
 * Schema to encode an byte string or an Utf8 string in TLV.
 *
 * @see {@link MatterSpecification.v10.Core} § A.11.2
 */
export class StringSchema<T extends TlvType.ByteString | TlvType.Utf8String> extends TlvSchema<TlvToPrimitive[T]> {
    constructor(
        readonly type: T,
        readonly minLength: number = 0,
        readonly maxLength: number = 1024,
    ) {
        super();

        if (minLength < 0) throw new InternalError("Minimum length should be a positive number.");
    }

    override encodeTlvInternal(writer: TlvWriter, value: TlvToPrimitive[T], tag?: TlvTag): void {
        const typeLength: TlvTypeLength = { type: this.type, length: TlvCodec.getUIntTlvLength(value.length) };
        writer.writeTag(typeLength, tag);
        writer.writePrimitive(typeLength, value);
    }

    override decodeTlvInternalValue(reader: TlvReader, typeLength: TlvTypeLength): TlvToPrimitive[T] {
        if (typeLength.type !== this.type) throw new UnexpectedDataError(`Unexpected type ${typeLength.type}.`);
        return reader.readPrimitive(typeLength);
    }

    override validate(value: TlvToPrimitive[T]): void {
        if (this.type === TlvType.Utf8String && typeof value !== "string")
            throw new ValidationDatatypeMismatchError(`Expected string, got ${typeof value}.`);
        if (this.type === TlvType.ByteString && !(value instanceof Uint8Array))
            throw new ValidationDatatypeMismatchError(`Expected Uint8Array, got ${typeof value}.`);
        if (value.length > this.maxLength)
            throw new ValidationOutOfBoundsError(
                `String ${serialize(value)} is too long: ${value.length}, max ${this.maxLength}.`,
            );
        if (value.length < this.minLength)
            throw new ValidationOutOfBoundsError(
                `String ${serialize(value)} is too short: ${value.length}, min ${this.minLength}.`,
            );
    }

    bound({ minLength, maxLength, length }: LengthConstraints) {
        return new StringSchema(
            this.type,
            length ?? maxValue(this.minLength, minLength),
            length ?? minValue(this.maxLength, maxLength),
        );
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

export const TlvHardwareAddress = TlvByteString.bound({ minLength: 6, maxLength: 8 });
