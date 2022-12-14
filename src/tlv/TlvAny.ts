/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvTag, TlvType, TlvTypeLength } from "./TlvCodec.js";
import { TlvElement, TlvReader, TlvSchema, TlvStream, TlvWriter } from "./TlvSchema.js";

export class AnySchema extends TlvSchema<TlvStream> {
    override encodeTlvInternal(writer: TlvWriter, tlvStream: TlvStream, tagAssigned?: TlvTag | undefined): void {
        tlvStream.forEach(({ tag, typeLength, value }) => {
            if (tagAssigned !== undefined) {
                // Assign the tag to the 1st TLV element in the stream
                tag = tagAssigned;
                tagAssigned = undefined;
            }
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

    override decodeTlvInternalValue(reader: TlvReader, typeLength: TlvTypeLength): TlvStream {
        return this.decodeTlvValueRec(reader, typeLength, new Array<TlvElement<any>>());
    }

    decodeTlvValueRec(reader: TlvReader, typeLength: TlvTypeLength, tlvStream: TlvStream, tag?: TlvTag) {
        switch (typeLength.type) {
            case TlvType.Null:
            case TlvType.Boolean:
            case TlvType.UnsignedInt: 
            case TlvType.SignedInt:
            case TlvType.Float:
            case TlvType.Utf8String:
            case TlvType.ByteString:
                tlvStream.push({ tag, typeLength, value: reader.readPrimitive(typeLength) });
                break;
            case TlvType.Array:
            case TlvType.Structure:
            case TlvType.List:
                tlvStream.push({ tag, typeLength });
                while (true) {
                    const { tag: elementTag, typeLength: typeLengthElement } = reader.readTagType();
                    this.decodeTlvValueRec(reader, typeLengthElement, tlvStream, elementTag);
                    if (typeLengthElement.type === TlvType.EndOfContainer) break;
                }
                break;
            case TlvType.EndOfContainer:
                tlvStream.push({ tag, typeLength });
                break;
        }
        return tlvStream;
    }
}

export const TlvAny = new AnySchema(); 
