/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { UnexpectedDataError } from "../common/MatterError.js";

declare global {
    interface Uint8Array {
        /** Displays as an hex string. */
        toHex(): string;

        /** Gets a {@link DataView} on this array. */
        getDataView(): DataView;

        /** Tests the deep equality of the two arrays. */
        equals(other: Uint8Array): boolean;
    }

    interface Uint8ArrayConstructor {
        /** Gets an {@link ByteArray} from an hex string. */
        fromHex(hexString: string): ByteArray;

        /** Gets an {@link ByteArray} from an hex string. */
        fromString(string: string): ByteArray;

        /** Concats {@link ByteArray}s. */
        concat(...arrays: Uint8Array[]): Uint8Array;
    }
}

Uint8Array.prototype.toHex = function () {
    return this.reduce((result, byte) => result + byte.toString(16).padStart(2, "0"), "");
};

Uint8Array.prototype.getDataView = function () {
    return new DataView(this.buffer, this.byteOffset, this.byteLength);
};

Uint8Array.prototype.equals = function (other: Uint8Array) {
    if (other.length !== this.length) return false;
    return this.every((value, index) => other[index] === value);
};

Uint8Array.fromHex = function (hexString: string) {
    if (hexString.length === 0) return new ByteArray(0);
    if (hexString.length % 2 !== 0) throw new UnexpectedDataError("Hex string should have an even length.");
    const bytes = hexString.match(/.{1,2}/g)?.map(byteHex => parseInt(byteHex, 16));
    if (bytes === undefined) throw new UnexpectedDataError("Failed to parse the hex string.");
    return ByteArray.from(bytes);
};

Uint8Array.fromString = function (string: string) {
    return new TextEncoder().encode(string);
};

Uint8Array.concat = function (...arrays: Uint8Array[]): Uint8Array {
    let length = 0;
    arrays.forEach(array => (length += array.length));
    const result = new Uint8Array(length);
    let offset = 0;
    arrays.forEach(array => {
        result.set(array, offset);
        offset += array.length;
    });
    return result;
};

/** Array of bytes, alias of {@link Uint8Array}. */
export type ByteArray = Uint8Array;
export const ByteArray = Uint8Array;

export enum Endian {
    Little,
    Big,
}
