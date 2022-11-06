/**
 * @file Data reader to read bytes data sequentially.
 * @copyright Project CHIP Authors 2022
 * @license Apache-2.0
 */

/** Reader that auto-increments its offset after each read. */
export class DataReaderLE {
    private dataView: DataView;
    private offset = 0;

    constructor(buffer: ArrayBuffer) {
        this.dataView = new DataView(buffer);
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

    private getOffsetAndAdvance(size: number) {
        const result = this.offset;
        this.offset += size;
        return result;
    }
}
