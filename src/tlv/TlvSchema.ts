/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "../util/ByteArray.js";
import { DataReaderLE } from "../util/DataReaderLE.js";
import { DataWriterLE } from "../util/DataWriterLE.js";
import { Schema } from "../util/schema/Schema.js";
import { TlvTag } from "./TlvCodec.js";

export abstract class TlvSchema<T> extends Schema<T, ByteArray> {
    /** @override */
    protected decodeInternal(encoded: ByteArray): T {
        return this.decodeTlv(new DataReaderLE(encoded)).value;
    }

    /** @override */
    protected encodeInternal(value: T): ByteArray {
        const writer = new DataWriterLE();
        this.encodeTlv(writer, value);
        return writer.toBuffer();
    }

    /** Decodes a TLV value. */
    protected abstract decodeTlv(reader: DataReaderLE): { value: T, tag: TlvTag};

    /** Encodes a TLV value. */
    protected abstract encodeTlv(writer: DataWriterLE, value: T, tag?: TlvTag): void;
}
