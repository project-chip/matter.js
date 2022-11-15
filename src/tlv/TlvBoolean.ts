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
    constructor() {
        super();
    }

    /** @override */
    protected encodeTlv(writer: DataWriterLE, value: boolean, tag: TlvTag = {}): void {
        TlvCodec.writeTag(writer, value ? TlvType.BooleanTrue : TlvType.BooleanFalse, tag);
    }

    /** @override */
    protected decodeTlv(reader: DataReaderLE) {
        const { tag, type } = TlvCodec.readTagType(reader);
        switch (type) {
            case TlvType.BooleanTrue:
                return { tag, value: true};
            case TlvType.BooleanFalse:
                return { tag, value: false};
            default:
                throw new Error(`Unexpected type ${type}.`);
        }
    }
}

/** Boolean TLV schema. */
export const TlvBoolean = new BooleanSchema();
