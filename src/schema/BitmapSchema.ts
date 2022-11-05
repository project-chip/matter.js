/**
 * @file Define schema for a bitmap.
 * @copyright Project CHIP Authors 2022
 * @license Apache-2.0
 */

import { Schema } from "./Schema";

/** Specifies the position of the bit. */
export interface BitPosition { position: number }
export const BitPosition = (position: number) => ({ position });

type BitSchema = {[key: string]: BitPosition};
type TypeFromBitSchema<T extends BitSchema> = {[K in keyof T]: boolean};

/** Declares a bitmap schema by indicating the bit position and their names. */
export interface BitmapSchema<T extends BitSchema> extends Schema<TypeFromBitSchema<T>, number> {}
export const BitmapSchema = <T extends BitSchema>(bitSchemas: T) => ({
    encode: (value: TypeFromBitSchema<T>) => {
        let result = 0;
        for (const name in bitSchemas) {
            if (value[name]) result |= 1 << bitSchemas[name].position;
        }
        return result;
    },

    decode: (bitmap: number) => {
        const result = <TypeFromBitSchema<T>>{};
        for (const name in bitSchemas) {
            result[name] = (bitmap & (1 << bitSchemas[name].position)) !== 0;
        }
        return result;
    },
});
