/**
 * @file Data write to write bytes data sequentially.
 * @copyright Project CHIP Authors 2022
 * @license Apache-2.0
 */

/** Writer that auto-increments its offset after each write. */
// TODO: some research should be done to make sure this is most performant implementation.
export class DataWriterLE {
    private length = 0;
    private readonly chunks = new Array<Uint8Array>();

    writeUInt8(value: number | bigint) {
        this.chunks.push(new Uint8Array([typeof value === "bigint" ? Number(value) : value]));
        this.length += 1;
    }
    
    writeUInt16(value: number | bigint) {
        const chunk = new Uint8Array(2);
        new DataView(chunk.buffer, 0, 2).setUint16(0, typeof value === "bigint" ? Number(value) : value, true);
        this.chunks.push(chunk);
        this.length += 2;
    }
    
    writeUInt32(value: number | bigint) {
        const chunk = new Uint8Array(4);
        new DataView(chunk.buffer, 0, 4).setUint32(0, typeof value === "bigint" ? Number(value) : value, true);
        this.chunks.push(chunk);
        this.length += 4;
    }
    
    writeUInt64(value: number | bigint) {
        const chunk = new Uint8Array(8);
        new DataView(chunk.buffer, 0, 8).setBigUint64(0, typeof value === "number" ? BigInt(value) : value, true);
        this.chunks.push(chunk);
        this.length += 8;
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

        return result.buffer;
    }
}