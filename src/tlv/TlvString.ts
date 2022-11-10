/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "../util/ByteArray";
import { DataReaderLE } from "../util/DataReaderLE";
import { DataWriterLE } from "../util/DataWriterLE";
import { TlvType, TlvCodec, TlvTag } from "./TlvCodec";
import { TlvSchema } from "./TlvSchema";
import { getUIntEncodedLength } from "./TlvUInt";

const LengthToByteStringType = {
    1: TlvType.ByteString8,
    2: TlvType.ByteString16,
    4: TlvType.ByteString32,
    8: TlvType.ByteString64,
};
type ByteStringTypes = TlvType.ByteString8 | TlvType.ByteString16 | TlvType.ByteString32 | TlvType.ByteString64;
const ByteStringTypes = Object.values(LengthToByteStringType);

const LengthToUtfStringType = {
    1: TlvType.Utf8String8,
    2: TlvType.Utf8String16,
    4: TlvType.Utf8String32,
    8: TlvType.Utf8String64,
};
type UtftringTypes = TlvType.Utf8String8 | TlvType.Utf8String16 | TlvType.Utf8String32 | TlvType.Utf8String64;
const UtfStringTypes = Object.values(LengthToUtfStringType);

/**
 * Schema to encode an byte string in TLV.
 * 
 * @see {@link MatterCoreSpecificationV1_0} § A.11.2
 */
 class ByteStringSchema extends TlvSchema<ByteArray> {
    constructor(
        private readonly minLength: number = 0,
        private readonly maxLength: number = 1024,
    ) {
        super();

        if (minLength < 0) throw new Error("Minimum length should be a positive number.");
    }

    /** @override */
    protected encodeTlv(writer: DataWriterLE, value: ByteArray, tag: TlvTag = {}): void {
        const type = LengthToByteStringType[getUIntEncodedLength(value.byteLength)];
        TlvCodec.writeTag(writer, type, tag);
        TlvCodec.writePrimitive(writer, type, value);
    }

    /** @override */
    protected decodeTlv(reader: DataReaderLE) {
        const { tag, type } = TlvCodec.readTagType(reader);
        if (!ByteStringTypes.includes(type)) throw new Error(`Unexpected type ${type}.`);
        return { tag, value: TlvCodec.readPrimitive(reader, type as ByteStringTypes) };
    }

    /** @override */
    validate({ byteLength: length }: ArrayBuffer): void {
        if (length > this.maxLength) throw new Error(`ArrayBuffer is too long: ${length}, max ${this.maxLength}.`);
        if (length < this.minLength) throw new Error(`ArrayBuffer is too short: ${length}, min ${this.minLength}.`);
    }
}

/**
 * Schema to encode an UTF-8 string in TLV.
 * 
 * @see {@link MatterCoreSpecificationV1_0} § A.11.2
 */
 class UtfStringSchema extends TlvSchema<string> {
    constructor(
        private readonly minLength: number = 0,
        private readonly maxLength: number = 1024,
    ) {
        super();

        if (minLength < 0) throw new Error("Minimum length should be a positive number.");
    }

    /** @override */
    protected encodeTlv(writer: DataWriterLE, value: string, tag: TlvTag = {}): void {
        const type = LengthToUtfStringType[getUIntEncodedLength(value.length)];
        TlvCodec.writeTag(writer, type, tag);
        TlvCodec.writePrimitive(writer, type, value);
    }

    /** @override */
    protected decodeTlv(reader: DataReaderLE) {
        const { tag, type } = TlvCodec.readTagType(reader);
        if (!UtfStringTypes.includes(type)) throw new Error(`Unexpected type ${type}.`);
        return { tag, value: TlvCodec.readPrimitive(reader, type as UtftringTypes) };
    }

    /** @override */
    validate({ length }: string): void {
        if (length > this.maxLength) throw new Error(`ArrayBuffer is too long: ${length}, max ${this.maxLength}.`);
        if (length < this.minLength) throw new Error(`ArrayBuffer is too short: ${length}, min ${this.minLength}.`);
    }
}

type LengthConstraints = {
    minLength?: number,
    maxLength?: number,
    length?: number,
};

/** ByteString TLV schema. */
export const TlvByteString = ({minLength, maxLength, length}: LengthConstraints = {}) => new ByteStringSchema(length ?? minLength, length ?? maxLength);

/** UtfString TLV schema. */
export const TlvUtfString = ({minLength, maxLength, length}: LengthConstraints = {}) => new UtfStringSchema(length ?? minLength, length ?? maxLength);
