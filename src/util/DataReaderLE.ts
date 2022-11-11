/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "./ByteArray.js";

/** Reader that auto-increments its offset after each read. */
export class DataReaderLE {
    private dataView: DataView;
    private offset = 0;

    constructor(
        private readonly buffer: ByteArray,
    ) {
        this.dataView = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    }
    
    readUInt8() {
        return this.dataView.getUint8(this.getOffsetAndAdvance(1));
    }
    
    readUInt16() {
        return this.dataView.getUint16(this.getOffsetAndAdvance(2), true);
    }
    
    readUInt32() {
        return this.dataView.getUint32(this.getOffsetAndAdvance(4), true);
    }
    
    readUInt64() {
        return this.dataView.getBigUint64(this.getOffsetAndAdvance(8), true);
    }
    
    readInt8() {
        return this.dataView.getInt8(this.getOffsetAndAdvance(1));
    }
    
    readInt16() {
        return this.dataView.getInt16(this.getOffsetAndAdvance(2), true);
    }
    
    readInt32() {
        return this.dataView.getInt32(this.getOffsetAndAdvance(4), true);
    }
    
    readInt64() {
        return this.dataView.getBigInt64(this.getOffsetAndAdvance(8), true);
    }
    
    readFloat() {
        return this.dataView.getFloat32(this.getOffsetAndAdvance(4), true);
    }
    
    readDouble() {
        return this.dataView.getFloat64(this.getOffsetAndAdvance(8), true);
    }

    readUtfString(length: number) {
        const offset = this.getOffsetAndAdvance(length);
        return new TextDecoder().decode(this.buffer.subarray(offset, offset + length));
    }

    readByteArray(length: number) {
        const offset = this.getOffsetAndAdvance(length);
        const result = this.buffer.subarray(offset, offset + length);
        return result;
    }

    private getOffsetAndAdvance(size: number) {
        const result = this.offset;
        this.offset += size;
        return result;
    }
}
