/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "../util/ByteArray.js";
import { Schema } from "./Schema.js";

const enum BitRangeType {
    Flag,
    Number,
    Enum,
}

type BitRange<T> = { type: BitRangeType, offset: number, length: number, _type?: T };
const BitRange = <T>(type: BitRangeType, offset: number, length: number) => ({ type, offset, length } as BitRange<T>);

/** Defines the bit position of a boolean flag. */
export interface BitFlag extends BitRange<boolean> { type: BitRangeType.Flag }
export const BitFlag = (offset: number) => BitRange(BitRangeType.Flag, offset, 1) as BitFlag;

/** Defines the bit position and bit length of a numeric value. */
export interface BitField extends BitRange<number> { type: BitRangeType.Number }
export const BitField = (offset: number, length: number) => BitRange(BitRangeType.Number, offset, length) as BitField;

/** Defines the bit position and bit length of an enum flag. */
export interface BitFieldEnum<E extends number> extends BitRange<E> { type: BitRangeType.Enum }
export const BitFieldEnum = <E extends number>(offset: number, length: number) => BitRange(BitRangeType.Enum, offset, length) as BitFieldEnum<E>;

export type BitSchema = { [key: string]: BitFlag | BitField | BitFieldEnum<any> };
export type TypeFromBitSchema<T extends BitSchema> = { [K in keyof T]: T[K] extends BitFieldEnum<infer E> ? E : (T[K] extends BitField ? number : boolean) };
export type TypeFromBitmapSchema<S extends Schema<any, any>> = S extends Schema<infer T, any> ? T : never;

type MaskFromBitSchema<T extends BitSchema> = { [K in keyof T]: number };
type MaskOffsetFromBitSchema<T extends BitSchema> = { [K in keyof T]: { mask: number, byteOffset: number, bitOffset: number } };

export class BitmapSchemaInternal<T extends BitSchema> extends Schema<TypeFromBitSchema<T>, number> {
    private readonly masks: MaskFromBitSchema<T>;

    constructor(
        private readonly bitSchemas: T,
    ) {
        super();

        const masks = <MaskFromBitSchema<T>>{};
        for (const name in this.bitSchemas) {
            const { offset, length } = this.bitSchemas[name];
            masks[name] = ((1 << length) - 1) << offset;
        }
        this.masks = masks;
        // TODO: validate that bitSchemas is coherent
    }

    override encodeInternal(value: TypeFromBitSchema<T>) {
        let result = 0;
        for (const name in this.bitSchemas) {
            const { type, offset } = this.bitSchemas[name];
            switch (type) {
                case BitRangeType.Flag:
                    if (value[name]) result |= this.masks[name];
                    break;
                case BitRangeType.Enum:
                case BitRangeType.Number:
                    result |= (value[name] as number) << offset;
            }
        }
        return result;
    }

    override decodeInternal(bitmap: number) {
        const result = {} as any;
        for (const name in this.bitSchemas) {
            const { type, offset } = this.bitSchemas[name];
            const mask = this.masks[name];
            if (type === BitRangeType.Flag) {
                result[name] = (bitmap & mask) !== 0;
            } else {
                result[name] = (bitmap & mask) >> offset;
            }
        }
        return result as TypeFromBitSchema<T>;
    }
}

export class ByteArrayBitmapSchemaInternal<T extends BitSchema> extends Schema<TypeFromBitSchema<T>, ByteArray> {
    private readonly byteArrayLength: number;
    private readonly maskOffset: MaskOffsetFromBitSchema<T>;

    constructor(
        private readonly bitSchemas: T,
    ) {
        super();

        let maxBitLength = 0;
        const maskOffset = <MaskOffsetFromBitSchema<T>>{};
        for (const name in this.bitSchemas) {
            const { type, offset, length } = this.bitSchemas[name];
            const bitOffset = offset % 8;
            const byteOffset = (offset - bitOffset) / 8;
            let mask: number;
            if (type === BitRangeType.Flag) {
                mask = 1 << bitOffset;
            } else {
                // Do not shift number mask, they might go beyond 2^32
                mask = (1 << length) - 1;
            }
            maskOffset[name] = { bitOffset, byteOffset, mask };
            maxBitLength = Math.max(maxBitLength, offset + length);
        }
        this.byteArrayLength = Math.ceil(maxBitLength / 8);
        this.maskOffset = maskOffset;
    }

    override encodeInternal(value: TypeFromBitSchema<T>) {
        const result = new ByteArray(this.byteArrayLength);
        for (const name in this.bitSchemas) {
            const { type } = this.bitSchemas[name];
            let { bitOffset, byteOffset } = this.maskOffset[name];
            const { mask } = this.maskOffset[name];
            switch (type) {
                case BitRangeType.Flag:
                    if (value[name]) result[byteOffset] |= mask;
                    break;
                case BitRangeType.Enum:
                case BitRangeType.Number: {
                    let numValue = (value[name] as number) & mask;
                    while (numValue !== 0) {
                        result[byteOffset++] |= (numValue << bitOffset) & 0xFF;
                        const bitWritten = 8 - bitOffset;
                        bitOffset = 0;
                        numValue = numValue >> bitWritten;
                    }
                }
            }
        }
        return result;
    }

    override decodeInternal(bitmap: ByteArray) {
        if (bitmap.length !== this.byteArrayLength) throw new Error(`Unexpected length: ${bitmap.length}. Expected ${this.byteArrayLength}`);
        const result = {} as any;
        for (const name in this.bitSchemas) {
            const { type } = this.bitSchemas[name];
            let { mask, bitOffset, byteOffset } = this.maskOffset[name];
            if (type === BitRangeType.Flag) {
                result[name] = (bitmap[byteOffset] & mask) !== 0;
            } else {
                let value = 0;
                let valueBitOffset = 0;
                while (mask !== 0) {
                    value |= ((bitmap[byteOffset++] >> bitOffset) & mask) << valueBitOffset;
                    const bitRead = 8 - bitOffset;
                    bitOffset = 0;
                    valueBitOffset += bitRead;
                    mask = mask >> bitRead;
                }
                result[name] = value;
            }
        }
        return result as TypeFromBitSchema<T>;
    }
}

/** Declares a bitmap schema by indicating the bit position and their names. */
export const BitmapSchema = <T extends BitSchema>(bitSchemas: T) => new BitmapSchemaInternal(bitSchemas);

/** Declares a bitmap schema backed by a ByteArray by indicating the bit position and their names. */
export const ByteArrayBitmapSchema = <T extends BitSchema>(bitSchemas: T) => new ByteArrayBitmapSchemaInternal(bitSchemas);
