/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Schema } from "./Schema";

const enum BitRangeType {
    Flag,
    Enum,
}

/** Specifies the position of the bit. */
export interface FlagBit { type: BitRangeType.Flag, offset: number }
export const FlagBit = (offset: number) => ({ type: BitRangeType.Flag, offset }) as FlagBit;
export interface EnumBits<E extends number> { type: BitRangeType.Enum, offset: number, length: number }
export const EnumBits = <E extends number>(offset: number, length: number) => ({ type: BitRangeType.Enum, offset, length }) as EnumBits<E>;

type BitSchema = {[key: string]: FlagBit | EnumBits<any> };
export type TypeFromBitSchema<T extends BitSchema> = {[K in keyof T]: T[K] extends EnumBits<infer E> ? E : boolean};

const enum EnumTest {
    VALUE_1 = 1,
    VALUE_2 = 2,
}

const bitSchema = {
    /** flag1 jsdoc */
    flag1: FlagBit(2),

    /** flag2 jsdoc */
    flag2: FlagBit(4),

    /** enum jsdoc */
    enumTest: EnumBits<EnumTest>(5, 2),
};

type a = TypeFromBitSchema<typeof bitSchema>;


/** Declares a bitmap schema by indicating the bit position and their names. */
export const BitmapSchema = <B extends BitSchema>(bitSchemas: B) => new class<T extends BitSchema> extends Schema<TypeFromBitSchema<T>, number>{
    constructor(readonly bitSchemas: T) {
        super();

        // TODO: validate that bitSchemas is coherent
    }

    /** @override */
    encodeInternal(value: TypeFromBitSchema<T>) {
        let result = 0;
        for (const name in this.bitSchemas) {
            if (this.bitSchemas[name].type === BitRangeType.Flag) {
                if (value[name]) result |= 1 << this.bitSchemas[name].offset;
            } else {
                result |= (value[name] as number) << this.bitSchemas[name].offset;
            }
        }
        return result;
    }

    /** @override */
    decodeInternal(bitmap: number) {
        const result = {} as any;
        for (const name in this.bitSchemas) {
            const offset = this.bitSchemas[name].offset;
            if (this.bitSchemas[name].type === BitRangeType.Flag) {
                result[name] = (bitmap & (1 << offset)) !== 0;
            } else {
                const length = (this.bitSchemas[name] as EnumBits<any>).length;
                const mask = ((1 << length) - 1) << offset;
                result[name] = (bitmap & mask) >> offset;
            }
        }
        return result as TypeFromBitSchema<T>;
    }
}<B>(bitSchemas);
