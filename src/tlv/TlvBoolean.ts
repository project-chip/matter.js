/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataReaderLE } from "../util/DataReaderLE";
import { DataWriterLE } from "../util/DataWriterLE";
import { TlvType, TlvCodec, TlvTag } from "./TlvCodec";
import { TlvSchema } from "./TlvSchema";

/**
 * Schema to encode a boolean in TLV.
 * 
 * @see {@link MatterCoreSpecificationV1_0} § A.11.3
 */
 class BooleanSchema extends TlvSchema<boolean> {
    /** @override */
    protected encodeTlv(writer: DataWriterLE, value: boolean, tag: TlvTag = {}): void {
        TlvCodec.writeTag(writer, { type: TlvType.Boolean, value },  tag);
    }

    /** @override */
    protected decodeTlv(reader: DataReaderLE) {
        const { tag, typeLength } = TlvCodec.readTagType(reader);
        if (typeLength.type !== TlvType.Boolean) throw new Error(`Unexpected type ${typeLength.type}.`)
        return { tag, value: typeLength.value };
    }
}

/** Boolean TLV schema. */
export const TlvBoolean = new BooleanSchema();
