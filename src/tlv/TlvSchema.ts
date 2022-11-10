/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataReaderLE } from "../util/DataReaderLE";
import { DataWriterLE } from "../util/DataWriterLE";
import { Schema } from "../util/schema/Schema";
import { TlvTag } from "./TlvCodec";

export abstract class TlvSchema<T> extends Schema<T, ArrayBuffer> {
    /** @override */
    protected decodeInternal(encoded: ArrayBuffer): T {
        return this.decodeTlv(new DataReaderLE(encoded)).value;
    }

    /** @override */
    protected encodeInternal(value: T): ArrayBuffer {
        const writer = new DataWriterLE();
        this.encodeTlv(writer, value);
        return writer.toBuffer();
    }

    /** Decodes a TLV value. */
    protected abstract decodeTlv(reader: DataReaderLE): { value: T, tag: TlvTag};

    /** Encodes a TLV value. */
    protected abstract encodeTlv(writer: DataWriterLE, value: T, tag?: TlvTag): void;
}
