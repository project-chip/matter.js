/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "../util/ByteArray.js";
import { DataReaderLE } from "../util/DataReaderLE.js";
import { DataWriterLE } from "../util/DataWriterLE.js";
import { Schema } from "../schema/Schema.js";
import { TlvCodec, TlvTag, TlvTypeLength } from "./TlvCodec.js";

export abstract class TlvSchema<T> extends Schema<T, ByteArray> implements TlvSchema<T> {
    
    /** @override */
    decodeInternal(encoded: ByteArray): T {
        return this.decodeTlv(new DataReaderLE(encoded)).value;
    }

    /** @override */
    encodeInternal(value: T): ByteArray {
        const writer = new DataWriterLE();
        this.encodeTlv(writer, value);
        return writer.toBuffer();
    }

    /** @override */
    decodeTlv(reader: DataReaderLE): { value: T, tag: TlvTag} {
        const { tag, typeLength } = TlvCodec.readTagType(reader);
        return { tag, value: this.decodeTlvValue(reader, typeLength) };
    }

    /** @override */
    abstract decodeTlvValue(reader: DataReaderLE, typeLength: TlvTypeLength): T;

    /** @override */
    abstract encodeTlv(writer: DataWriterLE, value: T, tag?: TlvTag): void;
}

export type LengthConstraints = {
    minLength?: number,
    maxLength?: number,
    length?: number,
};

/** Type defined by the TLV schema. */
export type TypeFromSchema<S extends TlvSchema<any>> = S extends TlvSchema<infer T> ? T : never;
