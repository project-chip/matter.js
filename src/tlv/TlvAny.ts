/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvTag, TlvToPrimitive, TlvType, TlvTypeLength } from "./TlvCodec.js";
import { TlvReader, TlvSchema, TlvWriter } from "./TlvSchema.js";

export type TlvElement<T extends TlvTypeLength> = {
    tag?: TlvTag,
    typeLength: T,
    value?: TlvToPrimitive[T["type"]],
};

export class TlvArrayWriter implements TlvWriter {
    private readonly tlvArray = new Array<TlvElement<any>>();

    writeTag(typeLength: TlvTypeLength, tag?: TlvTag) {
        this.tlvArray.push({ tag, typeLength });
    }

    writePrimitive<T extends TlvTypeLength>(_typeLength: T, value: TlvToPrimitive[T["type"]]) {
        this.tlvArray[this.tlvArray.length - 1].value = value;
    }

    toTlvArray() {
        this.tlvArray;
    }
}

export class TlvArrayReader implements TlvReader {
    private index = -1;

    constructor(
        private readonly tlvElements: TlvElement<any>[],
    ) {}

    readTagType() {
        this.index++;
        return this.tlvElements[this.index];
    }

    readPrimitive<T extends TlvTypeLength, V = TlvToPrimitive[T["type"]]>(_typeLength: T): V {
        return this.tlvElements[this.index].value;
    }
}

export class TlvAny extends TlvSchema<TlvElement<any>[]> {
    override encodeTlv(writer: TlvWriter, tlvArray: TlvElement<any>[], tagAssigned?: TlvTag | undefined): void {
        tlvArray.forEach(({ tag, typeLength, value }) => {
            switch (typeLength.type) {
                case TlvType.Null:
                case TlvType.Boolean:
                case TlvType.Array:
                case TlvType.Structure:
                case TlvType.List:
                case TlvType.EndOfContainer:
                    writer.writeTag(typeLength, tagAssigned ?? tag);
                    break;
                case TlvType.UnsignedInt: 
                case TlvType.SignedInt:
                case TlvType.Float:
                case TlvType.Utf8String:
                case TlvType.ByteString:
                    writer.writeTag(typeLength, tagAssigned ?? tag);
                    writer.writePrimitive(typeLength, value);
                    break;
            }
        });
    }

    override decodeTlvValue(reader: TlvReader, typeLength: TlvTypeLength): TlvElement<any>[] {
        return this.decodeTlvValueRec(reader, typeLength, new Array<TlvElement<any>>());
    }

    decodeTlvValueRec(reader: TlvReader, typeLength: TlvTypeLength, tlvArray: TlvElement<any>[], tag?: TlvTag) {
        switch (typeLength.type) {
            case TlvType.Null:
            case TlvType.Boolean:
            case TlvType.UnsignedInt: 
            case TlvType.SignedInt:
            case TlvType.Float:
            case TlvType.Utf8String:
            case TlvType.ByteString:
                tlvArray.push({ tag, typeLength, value: reader.readPrimitive(typeLength) });
                break;
            case TlvType.Array:
            case TlvType.Structure:
            case TlvType.List:
                tlvArray.push({ tag, typeLength });
                while (true) {
                    const { tag: elementTag, typeLength: typeLengthElement } = reader.readTagType();
                    this.decodeTlvValueRec(reader, typeLengthElement, tlvArray, elementTag);
                    if (typeLengthElement.type === TlvType.EndOfContainer) break;
                }
                break;
            case TlvType.EndOfContainer:
                tlvArray.push({ tag, typeLength });
                break;
        }
        return tlvArray;
    }
}
