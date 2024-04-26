/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Create a deep copy of a data structure.
 *
 * Only copies enumerable properties.  Handles typed arrays and graphs.
 */
export function deepCopy<T>(value: T): T {
    let clones: undefined | Map<unknown, unknown>;

    function copy(value: unknown) {
        if (typeof value === "object") {
            if (value === null) {
                return null;
            }

            let clone = clones?.get(value);
            if (clone) {
                return clone;
            }

            if (Array.isArray(value)) {
                clone = [...value];
            } else if (ArrayBuffer.isView(value)) {
                const ViewType = value.constructor as new (buffer: ArrayBuffer) => unknown;
                clone = new ViewType(value.buffer.slice(value.byteOffset, value.byteOffset + value.byteLength));
            } else {
                clone = { ...value };
            }

            if (!clones) {
                clones = new Map();
            }
            clones.set(value, clone);

            return clone;
        }

        return value;
    }

    return copy(value) as T;
}
