/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { UnexpectedDataError, ValidationError } from "../common/MatterError.js";
import { Logger } from "../log/Logger.js";
import { TlvTag, TlvType, TlvTypeLength } from "./TlvCodec.js";
import { TlvArrayReader, TlvElement, TlvReader, TlvSchema, TlvStream, TlvWriter } from "./TlvSchema.js";

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
                tlvStream.push({ tag, typeLength, value: null });
                break;
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

    override validate(tlvStream: TlvStream): void {
        if (!Array.isArray(tlvStream)) throw new ValidationError(`Expected TlvStream, got ${typeof tlvStream}.`);
        tlvStream.forEach(({ typeLength }) => {
            if (!typeLength || typeof typeLength !== "object")
                throw new ValidationError(`Expected typeLength properties in TlvStream, got ${typeof typeLength}.`);
            if (typeof typeLength.type !== "number")
                throw new ValidationError(
                    `Expected typeLength.type as number in TlvStream, got ${typeof typeLength.type}.`,
                );
        });
    }

    decodeAnyTlvStream(encoded: TlvStream) {
        if (encoded.length === 0) {
            return undefined;
        }
        const reader = new TlvArrayReader(encoded);
        const result = this.decodeGenericElement(reader);
        const nextElement = reader.readTagType();
        if (nextElement !== undefined) {
            throw new UnexpectedDataError(`Unexpected data left after parsing all data: ${Logger.toJSON(nextElement)}`);
        }
        return result;
    }

    decodeGenericElement(reader: TlvArrayReader, preReadElement?: TlvElement<any>, allowTag = false) {
        while (true) {
            const element = preReadElement ?? reader.readTagType();
            const {
                tag,
                typeLength: { type },
            } = element;

            switch (type) {
                case TlvType.Null:
                case TlvType.Boolean:
                case TlvType.UnsignedInt:
                case TlvType.SignedInt:
                case TlvType.Float:
                case TlvType.Utf8String:
                case TlvType.ByteString: {
                    if (tag !== undefined && !allowTag) {
                        throw new UnexpectedDataError(
                            `Tag detected or invalid length for a native type: ${Logger.toJSON(element)}`,
                        );
                    }
                    return reader.readPrimitive(element.typeLength);
                }
                case TlvType.Array:
                case TlvType.List: {
                    return this.decodeGenericArrayOrList(reader);
                }
                case TlvType.Structure: {
                    return this.decodeGenericStructure(reader);
                }
                default:
                    throw new UnexpectedDataError(`Unknown type: ${type}`);
            }
        }
    }

    decodeGenericArrayOrList(reader: TlvArrayReader) {
        const result = new Array<any>();
        while (true) {
            const element = reader.readTagType();
            const {
                tag,
                typeLength: { type },
            } = element;
            if (type === TlvType.EndOfContainer) break;
            if (tag !== undefined) {
                throw new UnexpectedDataError(
                    `Tag detected or invalid length for a native type: ${Logger.toJSON(element)}`,
                );
            }
            result.push(this.decodeGenericElement(reader, element));
        }
        return result;
    }

    decodeGenericStructure(reader: TlvArrayReader) {
        const result: { [key: string]: any } = {};
        while (true) {
            const element = reader.readTagType();
            const {
                tag,
                typeLength: { type },
            } = element;
            if (type === TlvType.EndOfContainer) break;
            if (tag === undefined || tag.id === undefined) {
                throw new UnexpectedDataError(
                    `Tag not detected or invalid length for a structure: ${Logger.toJSON(element)}`,
                );
            }
            result[tag.id] = this.decodeGenericElement(reader, element, true);
        }
        return result;
    }
}

export const TlvAny = new AnySchema();
