/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export type ByteArray = Uint8Array;

/** Gets an {@link ByteArray} from an hex string. */
export function byteArrayFromHex(bytesHex: string): ByteArray {
    if (bytesHex.length % 2 !== 0) throw new Error("Hex string should have an even length.");
    const bytes = bytesHex.match(/.{1,2}/g)?.map(byteHex => parseInt(byteHex, 16));
    if (bytes === undefined) throw new Error("Failed to parse the hex string.");
    return Uint8Array.from(bytes);
}

/** Converts an {@link ByteArray} to an hex string. */
export function byteArrayToHex(buffer: ByteArray) {
    return buffer.reduce((result, byte) => result + byte.toString(16).padStart(2, "0"), "");
}
