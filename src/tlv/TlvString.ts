/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataReaderLE } from "../util/DataReaderLE";
import { DataWriterLE } from "../util/DataWriterLE";
import { TlvType, TlvCodec, TlvTag } from "./TlvCodec";
import { TlvSchema } from "./TlvSchema";
import { getUIntEncodedLength } from "./TlvUInt";


const LengthToOctetStringType = {
    1: TlvType.OctetString_1OctetLength,
    2: TlvType.OctetString_2OctetLength,
    4: TlvType.OctetString_4OctetLength,
    8: TlvType.OctetString_8OctetLength,
};

const LengthToUtfStringType = {
    1: TlvType.Utf8String_1OctetLength,
    2: TlvType.Utf8String_2OctetLength,
    4: TlvType.Utf8String_4OctetLength,
    8: TlvType.Utf8String_8OctetLength,
};

/**
 * Schema to encode an octet string in TLV.
 * 
 * @see {@link MatterCoreSpecificationV1_0} § A.11.2
 */
 class OctetStringSchema extends TlvSchema<ArrayBuffer> {
    constructor() {
        super();
    }

    /** @override */
    protected encodeTlv(writer: DataWriterLE, value: ArrayBuffer, tag: TlvTag = {}): void {
        const type = LengthToOctetStringType[getUIntEncodedLength(value.byteLength)];
        TlvCodec.writeTag(writer, type, tag);
        TlvCodec.writePrimitive(writer, type, value);
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

/** OctetString TLV schema. */
export const TlvOctetString = new OctetStringSchema();
