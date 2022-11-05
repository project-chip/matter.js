/**
 * @file Define schema primitives to encode / decode javascript data.
 * @copyright Project CHIP Authors 2022
 * @license Apache-2.0
 */

/** Define a schema to encode / decode the javascript data of type T. */
export interface Schema<T, E> {
    encode: (value: T) => E,
    decode: (encoded: E) => T,
    validator?: (value: T) => void,
}

export interface NumberSchema<N extends number | bigint, E> extends Schema<N, E> {
    min: N,
    max: N,
}

export const UInt8Schema = <E>({ min, max }: { min?: number, max?: number}) => {
    if (min !== undefined && min < 0) throw new Error("UInt8 minimum should be greater or equal to 0.")
    if (max !== undefined && max > 255) throw new Error("UInt8 maximum should be greater or equal to 255.")

    return {
        
    }
}