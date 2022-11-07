/**
 * @license
 * Copyright 2000 Example, Inc
 * SPDX-License-Identifier: Apache-2.0
 */

import { Schema } from "./Schema";

/** Specifies the position of the bit. */
export interface BitPosition { position: number }
export const BitPosition = (position: number) => ({ position });

type BitSchema = {[key: string]: BitPosition};
type TypeFromBitSchema<T extends BitSchema> = {[K in keyof T]: boolean};

/** Declares a bitmap schema by indicating the bit position and their names. */
export const BitmapSchema = (bitSchemas: BitSchema) => new class<T extends BitSchema> extends Schema<TypeFromBitSchema<T>, number>{
    constructor(readonly bitSchemas: T) {
        super();
    }

    encodeInternal(value: TypeFromBitSchema<T>) {
        let result = 0;
        for (const name in this.bitSchemas) {
            if (value[name]) result |= 1 << this.bitSchemas[name].position;
        }
        return result;
    }

    decodeInternal(bitmap: number) {
        const result = <TypeFromBitSchema<T>>{};
        for (const name in this.bitSchemas) {
            result[name] = (bitmap & (1 << this.bitSchemas[name].position)) !== 0;
        }
        return result;
    }
}(bitSchemas);
