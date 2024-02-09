/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Utility for tracking location in the Matter data model used for diagnostics.
 *
 * The path consists of a sequence of IDs, optionally with type information.
 */
export interface DataModelPath {
    parent?: DataModelPath;

    id: string | number;

    type?: string;

    at(name: string | number, type?: string): DataModelPath;

    toString(): string;

    toArray(): (string | number)[];
}

/**
 * Create a {@link DataModelPath} rooted at {@link id}.
 */
export function DataModelPath(id: string | number, type?: string): DataModelPath {
    function identity(this: DataModelPath) {
        if (this.type) {
            return `${this.type}#${this.id}`;
        }
        return this.id;
    }

    function toString(this: DataModelPath) {
        if (this.parent) {
            return `${this.parent}.${identity.call(this)}`;
        }
        return identity.call(this).toString();
    }

    function toArray(this: DataModelPath): (string | number)[] {
        if (this.parent) {
            return [...this.parent.toArray(), this.id];
        }
        return [this.id];
    }

    function at(this: DataModelPath, id: string | number, type?: string): DataModelPath {
        return {
            parent: this,
            id,
            type,
            at,
            toString,
            toArray,
        };
    }

    return {
        id,
        type,
        at,
        toString,
        toArray,
    };
}
