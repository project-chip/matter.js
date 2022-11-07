/**
 * @file Define schema for a bitmap.
 * @copyright Project CHIP Authors 2022
 * @license Apache-2.0
 */

import { Schema } from "./Schema";

/** Specifies the position of the bit. */
export interface FlagBit { type: "flag", offset: number }
export const FlagBit = (offset: number) => ({ type: "flag", offset }) as FlagBit;
export interface EnumBits<E extends number> { type: "enum", offset: number, length: number }
export const EnumBits = <E extends number>(offset: number, length: number) => ({ type: "enum", offset, length }) as EnumBits<E>;

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
export const BitmapSchema = <T extends BitSchema>(bitSchemas: T) => new class<B extends BitSchema> extends Schema<TypeFromBitSchema<B>, number>{
    constructor(readonly bitSchemas: B) {
        super();

        // TODO: validate that bitSchemas is coherent
    }

    /** @override */
    encodeInternal(value: TypeFromBitSchema<B>) {
        let result = 0;
        for (const name in this.bitSchemas) {
            if (this.bitSchemas[name].type === "flag") {
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
            if (this.bitSchemas[name].type === "flag") {
                result[name] = (bitmap & (1 << offset)) !== 0;
            } else {
                const length = (this.bitSchemas[name] as EnumBits<any>).length;
                const mask = ((1 << length) - 1) << offset;
                result[name] = (bitmap & mask) >> offset;
            }
        }
        return result as TypeFromBitSchema<B>;
    }
}<T>(bitSchemas);
