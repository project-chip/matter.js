/**
 * @file Define schema primitives to encode / decode javascript data.
 * @copyright Project CHIP Authors 2022
 * @license Apache-2.0
 */

/** Define a schema to encode / decode the javascript data of type T from / to an encoded type E . */
export interface Schema<T, E> {
    /** Encodes the value using the schema. */
    encode: (value: T) => E,

    /** Decodes the encoded data using the schema. */
    decode: (encoded: E) => T,

    /** Optional validator that can be used to enforce constraints on the data before encoding / after decoding. */
    validator?: (value: T) => void,
}
