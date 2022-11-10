/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Schema } from "./Schema";

const enum BitRangeType {
    Flag,
    Number,
    Enum,
}
type BitRange<T> = { type: BitRangeType, offset: number, mask: number };
const BitRange = <T>(type: BitRangeType, offset: number, length: number) => ({ type, mask: ((1 << length) - 1) << offset, offset } as BitRange<T>);

/** Defines the bit position of a boolean flag. */
export interface BitFlag extends BitRange<boolean> { type: BitRangeType.Flag }
export const BitFlag = (offset: number) => BitRange(BitRangeType.Flag, offset, 1) as BitFlag;

/** Defines the bit position and bit length of a numeric value. */
export interface BitField extends BitRange<number> { type: BitRangeType.Number }
export const BitField = (offset: number, length: number) => BitRange(BitRangeType.Number, offset, length) as BitField;

/** Defines the bit position and bit length of an enum flag. */
export interface BitFieldEnum<E extends number> extends BitRange<E> { type: BitRangeType.Enum }
export const BitFieldEnum = <E extends number>(offset: number, length: number) => BitRange(BitRangeType.Enum, offset, length) as BitFieldEnum<E>;

type BitSchema = {[key: string]: BitFlag | BitField | BitFieldEnum<any> };
type TypeFromBitSchema<T extends BitSchema> = {[K in keyof T]: T[K] extends BitFieldEnum<infer E> ? E : (T[K] extends BitField ? number : boolean )};

class BitmapSchemaInternal<T extends BitSchema> extends Schema<TypeFromBitSchema<T>, number> {
    constructor(readonly bitSchemas: T) {
        super();

        // TODO: validate that bitSchemas is coherent
    }

    /** @override */
    encodeInternal(value: TypeFromBitSchema<T>) {
        let result = 0;
        for (const name in this.bitSchemas) {
            const { type, offset, mask } = this.bitSchemas[name];
            switch (type) {
                case BitRangeType.Flag:
                    if (value[name]) result |= mask;
                    break;
                case BitRangeType.Enum:
                case BitRangeType.Number:
                    result |= (value[name] as number) << offset;
            }
        }
        return result;
    }

    /** @override */
    decodeInternal(bitmap: number) {
        const result = {} as any;
        for (const name in this.bitSchemas) {
            const { type, offset, mask } = this.bitSchemas[name];
            if (type === BitRangeType.Flag) {
                result[name] = (bitmap & mask) !== 0;
            } else {
                result[name] = (bitmap & mask) >> offset;
            }
        }
        return result as TypeFromBitSchema<T>;
    }
}

/** Declares a bitmap schema by indicating the bit position and their names. */
export const BitmapSchema = <T extends BitSchema>(bitSchemas: T) => new BitmapSchemaInternal(bitSchemas);
