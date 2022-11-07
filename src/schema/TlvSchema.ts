/**
 * @file TLV to encode / decode data in TLV format.
 * @copyright Project CHIP Authors 2022
 * @license Apache-2.0
 */

import { MatterCoreSpecificationV1_0 } from "../Specifications";
import { DataReaderLE } from "../util/DataReaderLE";
import { DataWriterLE } from "../util/DataWriterLE";
import { Schema } from "./Schema";

/**
 * TLV element types.
 * 
 * @see {@link MatterCoreSpecificationV1_0} § A.7.1
 */
export enum ElementType {
    SignedInt = 0x00,
    UnsignedInt = 0x04,
    Boolean = 0x08,
    Float = 0x0A,
    Double = 0x0B,
    Utf8String = 0x0C,
    OctetString = 0x10,
    Null = 0x14,
    Structure = 0x15,
    Array = 0x16,
    List = 0x17,
    EndOfContainer = 0x18,
}

/**
 * TLV element data or length size.
 * 
 * @see {@link MatterCoreSpecificationV1_0} § A.7.1
 */
export const enum ElementSize {
    Byte1 = 0x00,
    Byte2 = 0x01,
    Byte4 = 0x02,
    Byte8 = 0x03,
}

/**
 * TLV element tag control.
 * 
 * @see {@link MatterCoreSpecificationV1_0} § A.7.2
 */
const enum TagControl {
    Anonymous = 0x00,
    ContextSpecific = 0x20,
    CommonProfile2Bytes = 0x40,
    CommonProfile4Bytes = 0x60,
    ImplicitProfile2Bytes = 0x80,
    ImplicitProfile4Bytes = 0xA0,
    FullyQualified6Bytes = 0xC0,
    FullyQualified8Bytes = 0xE0,
}


interface TlvTag {
    profile?: number,
    id?: number,
}

const COMMON_PROFILE = 0x00000000;
const UNSPECIFIED_PROFILE = 0xFFFFFFFF;
const ANONYMOUS_ID = 0xFFFFFFFF;

abstract class TlvSchema<T> extends Schema<T, ArrayBuffer> {

    /** @see {@link MatterCoreSpecificationV1_0} § A.7 */
    protected decodeTagAndTypeSize(reader: DataReaderLE) {
        const controlByte = reader.readUInt8();
        const tag = this.decodeTag(reader, (controlByte & 0xE0) as TagControl);
        return {tag, typeSizeByte: controlByte & 0x1F};
    }

    /** @see {@link MatterCoreSpecificationV1_0} § A.8 */
    private decodeTag(reader: DataReaderLE, tagControl: TagControl): TlvTag {
        switch (tagControl) {
            case TagControl.Anonymous:
                return { };
            case TagControl.ContextSpecific:
                return { id: reader.readUInt8() };
            case TagControl.CommonProfile2Bytes:
                return { profile: COMMON_PROFILE, id: reader.readUInt16() };
            case TagControl.CommonProfile4Bytes:
                return { profile: COMMON_PROFILE, id: reader.readUInt32() };
            case TagControl.ImplicitProfile2Bytes:
            case TagControl.ImplicitProfile4Bytes:
                throw new Error(`Unsupported implicit profile ${tagControl}`);
            case TagControl.FullyQualified6Bytes:
                return { profile: reader.readUInt32(), id: reader.readUInt16() };
            case TagControl.FullyQualified6Bytes:
                return { profile: reader.readUInt32(), id: reader.readUInt32() };
            default:
                throw new Error(`Unexpected tagControl ${tagControl}`);
        }
    }

    /** @see {@link MatterCoreSpecificationV1_0} § A.7 & A.8 */
    protected encodeControlByteAndTag(writer: DataWriterLE, valueType: ElementType, { profile = UNSPECIFIED_PROFILE, id = ANONYMOUS_ID}: TlvTag) {
        var tagControl;
        var longTag = (id & 0xFFFF0000) !== 0;
        if (profile === UNSPECIFIED_PROFILE && id === ANONYMOUS_ID) {
            tagControl = TagControl.Anonymous;
        } else if (profile === UNSPECIFIED_PROFILE) {
            tagControl = TagControl.ContextSpecific;
        } else if (profile === COMMON_PROFILE) {
            tagControl = longTag ? TagControl.CommonProfile4Bytes : TagControl.CommonProfile2Bytes;
        } else {
            tagControl = longTag ? TagControl.FullyQualified8Bytes : TagControl.FullyQualified6Bytes;
        }
        writer.writeUInt8(tagControl | valueType);
        switch (tagControl) {
            case TagControl.ContextSpecific:
                writer.writeUInt8(id);
                break;
            case TagControl.CommonProfile2Bytes:
                writer.writeUInt16(id);
                break;
            case TagControl.CommonProfile4Bytes:
                writer.writeUInt32(id);
                break;
            case TagControl.FullyQualified6Bytes:
                writer.writeUInt32(profile);
                writer.writeUInt16(id);
                break;
            case TagControl.FullyQualified8Bytes:
                writer.writeUInt32(profile);
                writer.writeUInt32(id);
                break;
            case TagControl.Anonymous:
                // No need to write the tag
                break;
        }
    }

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

    /** Gets {@link ElementSize} based on the number value. */
    protected getUnsignedIntSize(value: number | bigint) {
        if (value < 256) {
            return ElementSize.Byte1;
        } else if (value < 65536) {
            return ElementSize.Byte2;
        } else if (value < 4294967296) {
            return ElementSize.Byte4;
        } else {
            return ElementSize.Byte8;
        }
    }

    /** Encodes an unsigned integer value. */
    protected encodeUnsignedIntBytes(writer: DataWriterLE, value: number | bigint, size: ElementSize) {
        if (typeof value === "number") {
            switch (size) {
                case ElementSize.Byte1:
                    writer.writeUInt8(value);
                    break;
                case ElementSize.Byte2:
                    writer.writeUInt16(value);
                    break;
                case ElementSize.Byte4:
                    writer.writeUInt32(value);
                    break;
                case ElementSize.Byte8:
                    throw new Error("64 bits number should be stored on a bigint");
            }
        } else {
            switch (size) {
                case ElementSize.Byte1:
                    writer.writeUInt8(Number(value));
                    break;
                case ElementSize.Byte2:
                    writer.writeUInt16(Number(value));
                    break;
                case ElementSize.Byte4:
                    writer.writeUInt32(Number(value));
                    break;
                case ElementSize.Byte8:
                    writer.writeUInt64(value);
                    break;
            }
        }
    }

    /** Decodes a TLV value. */
    protected abstract decodeTlv(reader: DataReaderLE): { value: T, tag: TlvTag};

    /** Encodes a TLV value. */
    protected abstract encodeTlv(writer: DataWriterLE, value: T, tag?: TlvTag): void;
}

/**
 * Schema to encode an unsigned integer in TLV.
 * 
 * @see {@link MatterCoreSpecificationV1_0} § A.11.1
 */
class UnsignedNumberSchema extends TlvSchema<number | bigint> {
    /** @override */
    protected encodeTlv(writer: DataWriterLE, value: number | bigint, tag: TlvTag = {}): void {
        const size = this.getUnsignedIntSize(value);
        this.encodeControlByteAndTag(writer, ElementType.UnsignedInt | size, tag);
        this.encodeUnsignedIntBytes(writer, value, size);
    }

    /** @override */
    protected decodeTlv(encoded: DataReaderLE) {
        const { tag, typeSizeByte } = this.decodeTagAndTypeSize(encoded);
        const type = typeSizeByte & 0x1C;
        const size = typeSizeByte & 0x03;
        if (type !== ElementType.UnsignedInt) throw new Error(`Unexpected element type ${type}, was expecting: ${ElementType.UnsignedInt}`);

        switch (size) {
            case ElementSize.Byte1:
                return { tag, value: encoded.readUInt8() };
            case ElementSize.Byte2:
                return { tag, value: encoded.readUInt16() };
            case ElementSize.Byte4:
                return { tag, value: encoded.readUInt32() };
            case ElementSize.Byte8:
                return { tag, value: encoded.readUInt64() };
            default:
                throw Error(`Unexpected element size ${size}`);
        }
    }
}

/** Unsigned integer TLV schema. */
export const UnsignedNumberTlv = new UnsignedNumberSchema();
