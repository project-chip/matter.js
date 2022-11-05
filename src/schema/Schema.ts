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
