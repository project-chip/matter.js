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
 * A string tag for hex literals.
 *
 * Example: b$`01020304` creates a four-byte Uint8Array.
 */
export function b$(strings: TemplateStringsArray, ...values: unknown[]) {
    if (strings.length === 1 && values.length === 0) {
        return Bytes.fromHex(strings[0]);
    }
    const parts = Array<string>();
    for (let i = 0; i < strings.length; i++) {
        parts.push(strings[i]);
        if (i < values.length) {
            parts.push(`${values[i]}`);
        }
    }
    return Bytes.fromHex(parts.join(""));
}

/**
 * Utility functions for manipulating Uint8Array.
 */
export namespace Bytes {
    export function toHex(array: BufferSource) {
        const hexArray = new Array<string>();
        const data = Bytes.of(array);
        hexArray.length = data.length;
        data.forEach(byte => hexArray.push(byte.toString(16).padStart(2, "0")));
        return hexArray.join("");
    }

    export function toBase64(array: BufferSource) {
        let result = "";
        const data = Bytes.of(array);
        data.forEach(byte => (result += String.fromCharCode(byte)));
        return btoa(result);
    }

    export function dataViewOf(array: BufferSource) {
        const data = Bytes.of(array);
        return new DataView(data.buffer, data.byteOffset, data.byteLength);
    }

    export function areEqual(array1: BufferSource, array2: BufferSource) {
        if (array1.byteLength !== array2.byteLength) return false;
        const data1 = Bytes.of(array1);
        const data2 = Bytes.of(array2);
        return data1.every((value, index) => data2[index] === value);
    }

    export function of(source: BufferSource | Uint8Array): Uint8Array<ArrayBuffer> {
        if (source instanceof Uint8Array) {
            return source as Uint8Array<ArrayBuffer>;
        }

        if (ArrayBuffer.isView(source)) {
            return new Uint8Array<ArrayBuffer>(source.buffer, source.byteLength, source.byteOffset);
        }

        return new Uint8Array<ArrayBuffer>(source);
    }

    export function isBufferSource(source: any): source is BufferSource {
        return source instanceof ArrayBuffer || source instanceof Uint8Array || ArrayBuffer.isView(source);
    }

    export function fromHex(hexString: string): BufferSource {
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

    export function fromString(string: string): BufferSource {
        return new TextEncoder().encode(string);
    }

    export function concat(...arrays: BufferSource[]): BufferSource {
        let length = 0;
        const data = arrays.map(array => Bytes.of(array));
        data.forEach(array => (length += array.length));
        const result = new Uint8Array(length);
        let offset = 0;
        data.forEach(array => {
            result.set(array, offset);
            offset += array.length;
        });
        return result;
    }

    export function asBigInt(bytes: BufferSource) {
        const view = Bytes.dataViewOf(bytes);
        let result = 0n;
        const length = view.byteLength;
        for (let i = 0; i < length; ) {
            const remaining = length - i;
            if (remaining >= 8) {
                result = (result << 64n) + view.getBigUint64(i);
                i += 8;
            } else if (remaining >= 4) {
                result = (result << 32n) + BigInt(view.getUint32(i));
                i += 4;
            } else if (remaining >= 2) {
                result = (result << 16n) + BigInt(view.getUint16(i));
                i += 2;
            } else {
                result = (result << 8n) + BigInt(view.getUint8(i));
                i++;
            }
        }
        return result;
    }
}
