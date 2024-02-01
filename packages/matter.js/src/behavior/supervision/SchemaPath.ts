/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Utility for tracking location in the Matter data model used for diagnostic messages.
 */
export interface SchemaPath {
    parent?: SchemaPath;

    name: string | number;

    at(name: string | number): SchemaPath;

    toString(): string;
}

/**
 * Create a {@link SchemaPath} rooted at {@link name}.
 */
export function SchemaPath(name: string): SchemaPath {
    function toString(this: SchemaPath) {
        if (this.parent) {
            return `${this.parent}.${this.name}`;
        }
        return this.name.toString();
    }

    function at(this: SchemaPath, name: string): SchemaPath {
        return {
            parent: this,
            name: name,
            at,
            toString,
        };
    }

    return {
        name,
        at,
        toString,
    };
}
