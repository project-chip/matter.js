/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "../util/ByteArray.js";
import { DataReaderLE } from "../util/DataReaderLE.js";
import { DataWriterLE } from "../util/DataWriterLE.js";
import { Schema } from "../schema/Schema.js";
import { TlvCodec, TlvTag, TlvToPrimitive, TlvTypeLength } from "./TlvCodec.js";

export abstract class TlvSchema<T> extends Schema<T, ByteArray> implements TlvSchema<T> {
    
    override decodeInternal(encoded: ByteArray): T {
        return this.decodeTlv(new TlvByteArrayReader(encoded)).value;
    }

    override encodeInternal(value: T): ByteArray {
        const writer = new TlvByteArrayWriter();
        this.encodeTlv(writer, value);
        return writer.toByteArray();
    }

    decodeTlv(reader: TlvReader): { value: T, tag?: TlvTag} {
        const { tag, typeLength } = reader.readTagType();
        return { tag, value: this.decodeTlvValue(reader, typeLength) };
    }

    abstract decodeTlvValue(reader: TlvReader, typeLength: TlvTypeLength): T;

    abstract encodeTlv(writer: TlvWriter, value: T, tag?: TlvTag): void;
}

/** Type defined by the TLV schema. */
export type TypeFromSchema<S extends TlvSchema<any>> = S extends TlvSchema<infer T> ? T : never;

export interface TlvReader {
    readTagType(): { tag?: TlvTag, typeLength: TlvTypeLength };

    readPrimitive<T extends TlvTypeLength, V = TlvToPrimitive[T["type"]]>(typeLength: T): V;
}

export interface TlvWriter {
    writeTag(typeLength: TlvTypeLength, tag?: TlvTag): void;

    writePrimitive<T extends TlvTypeLength>(typeLength: T, value: TlvToPrimitive[T["type"]]): void;
}

export class TlvByteArrayWriter implements TlvWriter {
    private readonly writer = new DataWriterLE();

    writeTag(typeLength: TlvTypeLength, tag?: TlvTag) {
        TlvCodec.writeTag(this.writer, typeLength, tag);
    }

    writePrimitive<T extends TlvTypeLength>(typeLength: T, value: TlvToPrimitive[T["type"]]) {
        TlvCodec.writePrimitive(this.writer, typeLength, value);
    }

    toByteArray() {
        return this.writer.toBuffer();
    }
}

export class TlvByteArrayReader implements TlvReader {
    private readonly reader: DataReaderLE;

    constructor(byteArray: ByteArray) {
        this.reader = new DataReaderLE(byteArray);
    }

    readTagType() {
        return TlvCodec.readTagType(this.reader);
    }

    readPrimitive<T extends TlvTypeLength, V = TlvToPrimitive[T["type"]]>(typeLength: T): V {
        return TlvCodec.readPrimitive(this.reader, typeLength);
    }
}
