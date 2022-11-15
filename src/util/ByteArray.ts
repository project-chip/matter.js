/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

declare global {
    interface Uint8Array {
        /** Displays as an hex string. */
        toHex(): string;
    }

    interface Uint8ArrayConstructor {
        /** Gets an {@link ByteArray} from an hex string. */
        fromHex(hexString: string): ByteArray;
    }
}

Uint8Array.prototype.toHex = function () {
    return this.reduce((result, byte) => result + byte.toString(16).padStart(2, "0"), "");
}

Uint8Array.fromHex = function (hexString: string) {
    if (hexString.length % 2 !== 0) throw new Error("Hex string should have an even length.");
    const bytes = hexString.match(/.{1,2}/g)?.map(byteHex => parseInt(byteHex, 16));
    if (bytes === undefined) throw new Error("Failed to parse the hex string.");
    return ByteArray.from(bytes);
}

/** Array of bytes, alias of {@link Uint8Array}. */
export type ByteArray = Uint8Array;
export const ByteArray = Uint8Array;
