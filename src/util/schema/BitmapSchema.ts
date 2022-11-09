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

/** Defines the bit position of a boolean flag. */
export interface FlagBit { type: BitRangeType.Flag, offset: number }
export const FlagBit = (offset: number) => ({ type: BitRangeType.Flag, offset }) as FlagBit;

/** Defines the bit position and bit lenght of an enum flag. */
export interface EnumBits<E extends number> { type: BitRangeType.Enum, offset: number, length: number }
export const EnumBits = <E extends number>(offset: number, length: number) => ({ type: BitRangeType.Enum, offset, length }) as EnumBits<E>;

type BitSchema = {[key: string]: FlagBit | EnumBits<any> };
type TypeFromBitSchema<T extends BitSchema> = {[K in keyof T]: T[K] extends EnumBits<infer E> ? E : boolean};

class BitmapSchemaInternal<T extends BitSchema> extends Schema<TypeFromBitSchema<T>, number> {
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
}

/** Declares a bitmap schema by indicating the bit position and their names. */
export const BitmapSchema = <T extends BitSchema>(bitSchemas: T) => new BitmapSchemaInternal(bitSchemas);
