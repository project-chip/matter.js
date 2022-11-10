/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "./ArrayBuffer";

function toNumber(value: bigint | number): number {
    return typeof value === "bigint" ? Number(value) : value;
}

function toBigInt(value: bigint | number): bigint {
    return typeof value === "number" ? BigInt(value) : value;
}

/** Writer that auto-increments its offset after each write. */
// TODO: some research should be done to make sure this is most performant implementation.
export class DataWriterLE {
    private length = 0;
    private readonly chunks = new Array<ByteArray>();

    writeUInt8(value: number | bigint) {
        this.chunks.push(new Uint8Array([toNumber(value)]));
        this.length += 1;
    }
    
    writeUInt16(value: number | bigint) {
        const chunk = new Uint8Array(2);
        new DataView(chunk.buffer, 0, 2).setUint16(0, toNumber(value), true);
        this.chunks.push(chunk);
        this.length += 2;
    }
    
    writeUInt32(value: number | bigint) {
        const chunk = new Uint8Array(4);
        new DataView(chunk.buffer, 0, 4).setUint32(0, toNumber(value), true);
        this.chunks.push(chunk);
        this.length += 4;
    }
    
    writeUInt64(value: number | bigint) {
        const chunk = new Uint8Array(8);
        new DataView(chunk.buffer, 0, 8).setBigUint64(0, toBigInt(value), true);
        this.chunks.push(chunk);
        this.length += 8;
    }

    writeInt8(value: number | bigint) {
        const chunk = new Uint8Array(1);
        new DataView(chunk.buffer, 0, 1).setInt8(0, toNumber(value));
        this.chunks.push(chunk);
        this.length += 1;
    }
    
    writeInt16(value: number | bigint) {
        const chunk = new Uint8Array(2);
        new DataView(chunk.buffer, 0, 2).setInt16(0, toNumber(value), true);
        this.chunks.push(chunk);
        this.length += 2;
    }
    
    writeInt32(value: number | bigint) {
        const chunk = new Uint8Array(4);
        new DataView(chunk.buffer, 0, 4).setInt32(0, toNumber(value), true);
        this.chunks.push(chunk);
        this.length += 4;
    }
    
    writeInt64(value: number | bigint) {
        const chunk = new Uint8Array(8);
        new DataView(chunk.buffer, 0, 8).setBigInt64(0, toBigInt(value), true);
        this.chunks.push(chunk);
        this.length += 8;
    }
    
    writeFloat(value: number) {
        const chunk = new Uint8Array(4);
        new DataView(chunk.buffer, 0, 4).setFloat32(0, value, true);
        this.chunks.push(chunk);
        this.length += 4;
    }
    
    writeDouble(value: number) {
        const chunk = new Uint8Array(8);
        new DataView(chunk.buffer, 0, 8).setFloat64(0, value, true);
        this.chunks.push(chunk);
        this.length += 8;
    }

    writeUtfString(value: string) {
        const bytes = new TextEncoder().encode(value);
        this.chunks.push(bytes);
        this.length += bytes.byteLength;
    }

    writeByteString(value: Uint8Array) {
        this.chunks.push(value);
        this.length += value.byteLength;
    }

    toBuffer() {
        if (this.chunks.length === 0) return new Uint8Array(0);
        if (this.chunks.length === 1) return this.chunks[0];

        const result = new Uint8Array(this.length);
        let offset = 0;
        this.chunks.forEach(chunck => {
            result.set(chunck, offset);
            offset += chunck.byteLength;
        });
        this.chunks.length = 0;
        this.chunks.push(result);

        return result;
    }
}
