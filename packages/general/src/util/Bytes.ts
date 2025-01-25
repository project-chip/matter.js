/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { UnexpectedDataError } from "../MatterError.js";

export enum Endian {
    Little,
    Big,
}

/**
 * Utility functions for manipulating Uint8Array.
 */
export namespace Bytes {
    export function toHex(array: Uint8Array) {
        const hexArray = new Array<string>();
        hexArray.length = array.length;
        array.forEach(byte => hexArray.push(byte.toString(16).padStart(2, "0")));
        return hexArray.join("");
    }

    export function toBase64(array: Uint8Array) {
        let result = "";
        array.forEach(byte => (result += String.fromCharCode(byte)));
        return btoa(result);
    }

    export function dataViewOf(array: Uint8Array) {
        return new DataView(array.buffer, array.byteOffset, array.byteLength);
    }

    export function areEqual(array1: Uint8Array, array2: Uint8Array) {
        if (array1.length !== array2.length) return false;
        return array1.every((value, index) => array2[index] === value);
    }

    export function fromHex(hexString: string) {
        if (hexString.length === 0) return new Uint8Array(0);
        if (hexString.length % 2 !== 0) throw new UnexpectedDataError("Hex string should have an even length.");
        const bytes = hexString.match(/.{1,2}/g)?.map(byteHex => parseInt(byteHex, 16));
        if (bytes === undefined) throw new UnexpectedDataError("Failed to parse the hex string.");
        return Uint8Array.from(bytes);
    }

    export function fromBase64(base64String: string) {
        const raw = atob(base64String);
        let result = "";
        for (let i = 0; i < raw.length; i++) {
            const hex = raw.charCodeAt(i).toString(16);
            result += hex.length === 2 ? hex : "0" + hex;
        }
        return fromHex(result);
    }

    export function fromString(string: string) {
        return new TextEncoder().encode(string);
    }

    export function concat(...arrays: Uint8Array[]): Uint8Array {
        let length = 0;
        arrays.forEach(array => (length += array.length));
        const result = new Uint8Array(length);
        let offset = 0;
        arrays.forEach(array => {
            result.set(array, offset);
            offset += array.length;
        });
        return result;
    }
}
