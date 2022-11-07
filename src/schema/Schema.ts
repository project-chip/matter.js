/**
 * @license
 * Copyright 2000 Example, Inc
 * SPDX-License-Identifier: Apache-2.0
 */

/** Define a schema to encode / decode convert type T to type E. */
export abstract class Schema<T, E> {
    /** Encodes the value using the schema. */
    encode(value: T): E {
        this.validate(value);
        return this.encodeInternal(value);
    }

    /** Decodes the encoded data using the schema. */
    decode(encoded: E): T {
        const result = this.decodeInternal(encoded);
        this.validate(result);
        return result;
    }

    protected abstract encodeInternal(value: T): E;
    protected abstract decodeInternal(encoded: E): T;

    /** Optional validator that can be used to enforce constraints on the data before encoding / after decoding. */
    validate(value: T): void {
    }
}
