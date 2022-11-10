/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/** Gets an {@link ArrayBuffer} from an hex string. */
export function arrayBufferFromHex(bytesHex: string): ArrayBuffer {
    if (bytesHex.length % 2 !== 0) throw new Error("Hex string should have an even length.");
    const bytes = bytesHex.match(/.{1,2}/g)?.map(byteHex => parseInt(byteHex, 16));
    if (bytes === undefined) throw new Error("Failed to parse the hex string.");
    return Uint8Array.from(bytes).buffer;
}

/** Converts an {@link ArrayBuffer} to an hex string. */
export function arrayBufferToHex(buffer: ArrayBuffer) {
    const byteBuffer = new Uint8Array(buffer);
    return byteBuffer.reduce((result, byte) => result + byte.toString(16).padStart(2, "0"), "");
}
