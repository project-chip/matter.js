/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataReaderLE } from "../util/DataReaderLE";
import { DataWriterLE } from "../util/DataWriterLE";
import { BitmapSchema, EnumBits } from "../util/schema/BitmapSchema";


/**
 * TLV element types.
 * 
 * @see {@link MatterCoreSpecificationV1_0} § A.7.1
 */
export enum TlvType {
    SignedInt_1OctetValue = 0x00,
    SignedInt_2OctetValue = 0x01,
    SignedInt_4OctetValue = 0x02,
    SignedInt_8OctetValue = 0x03,
    UnsignedInt_1OctetValue = 0x04,
    UnsignedInt_2OctetValue = 0x05,
    UnsignedInt_4OctetValue = 0x06,
    UnsignedInt_8OctetValue = 0x07,
    Boolean = 0x08,
    Float = 0x0A,
    Double = 0x0B,
    Utf8String_1OctetLength = 0x0C,
    Utf8String_2OctetLength = 0x0D,
    Utf8String_4OctetLength = 0x0E,
    Utf8String_8OctetLength = 0x0F,
    OctetString_1OctetLength = 0x10,
    OctetString_2OctetLength = 0x11,
    OctetString_4OctetLength = 0x12,
    OctetString_8OctetLength = 0x13,
    Null = 0x14,
    Structure = 0x15,
    Array = 0x16,
    List = 0x17,
    EndOfContainer = 0x18,
}

/**
 * TLV element tag control.
 * 
 * @see {@link MatterCoreSpecificationV1_0} § A.7.2
 */
const enum TagControl {
    Anonymous = 0,
    ContextSpecific = 1,
    CommonProfile2Bytes = 2,
    CommonProfile4Bytes = 3,
    ImplicitProfile2Bytes = 4,
    ImplicitProfile4Bytes = 5,
    FullyQualified6Bytes = 6,
    FullyQualified8Bytes = 7,
}

const ControlOctetSchema = BitmapSchema({
    type: EnumBits<TlvType>(0, 5),
    tagControl: EnumBits<TagControl>(5, 3),
});

const COMMON_PROFILE = 0x00000000;

export type TlvTag = {
    profile?: number,
    id?: number,
};

export class TlvCodec {

    /** @see {@link MatterCoreSpecificationV1_0} § A.7 */
    public static readTagType(reader: DataReaderLE) {
        const { tagControl, type } = ControlOctetSchema.decode(reader.readUInt8());
        switch (tagControl) {
            case TagControl.Anonymous:
                return { type, tag: {} };
            case TagControl.ContextSpecific:
                return { type, tag: { id: reader.readUInt8() } };
            case TagControl.CommonProfile2Bytes:
                return { type, tag: { profile: COMMON_PROFILE, id: reader.readUInt16() } };
            case TagControl.CommonProfile4Bytes:
                return { type, tag: { profile: COMMON_PROFILE, id: reader.readUInt32() } };
            case TagControl.ImplicitProfile2Bytes:
            case TagControl.ImplicitProfile4Bytes:
                throw new Error(`Unsupported implicit profile ${tagControl}`);
            case TagControl.FullyQualified6Bytes:
                return { type, tag: { profile: reader.readUInt32(), id: reader.readUInt16() } };
            case TagControl.FullyQualified6Bytes:
                return { type, tag: { profile: reader.readUInt32(), id: reader.readUInt32() } };
            default:
                throw new Error(`Unexpected tagControl ${tagControl}`);
        }
    }

    public static readIntegerValue(reader: DataReaderLE, type: TlvType) {
        switch (type) {
            case TlvType.UnsignedInt_1OctetValue:
                return reader.readUInt8();
            case TlvType.UnsignedInt_2OctetValue:
                return reader.readUInt16();
            case TlvType.UnsignedInt_4OctetValue:
                return reader.readUInt32();
            case TlvType.UnsignedInt_8OctetValue:
                return reader.readUInt64();
            default:
                throw new Error(`Unexpected TLV type ${type}`);
        }
    }

    /** @see {@link MatterCoreSpecificationV1_0} § A.7 & A.8 */
    public static writeTag(writer: DataWriterLE, type: TlvType, { profile, id }: TlvTag) {
        if (profile === undefined && id === undefined) {
            writer.writeUInt8(ControlOctetSchema.encode({ tagControl: TagControl.Anonymous, type }));
        } else if (profile === undefined) {
            if (id === undefined) throw new Error("Invalid TLV tag: id should be defined for a context specific tag.");
            writer.writeUInt8(ControlOctetSchema.encode({ tagControl: TagControl.ContextSpecific, type }));
            writer.writeUInt8(id);
        } else if (profile === COMMON_PROFILE) {
            if (id === undefined) throw new Error("Invalid TLV tag: id should be defined for a common profile.");
            if ((id & 0xFFFF0000) === 0) {
                writer.writeUInt8(ControlOctetSchema.encode({ tagControl: TagControl.CommonProfile2Bytes, type }));
                writer.writeUInt16(id);
            } else {
                writer.writeUInt8(ControlOctetSchema.encode({ tagControl: TagControl.CommonProfile4Bytes, type }));
                writer.writeUInt32(id);
            }
        } else {
            if (id === undefined) throw new Error("Invalid TLV tag: id should be defined for a custom profile.");
            if ((id & 0xFFFF0000) === 0) {
                writer.writeUInt8(ControlOctetSchema.encode({ tagControl: TagControl.FullyQualified6Bytes, type }));
                writer.writeUInt32(profile);
                writer.writeUInt16(id);
            } else {
                writer.writeUInt8(ControlOctetSchema.encode({ tagControl: TagControl.FullyQualified8Bytes, type }));
                writer.writeUInt32(profile);
                writer.writeUInt32(id);
            }
        }
    }

    public static writeIntegerValue(writer: DataWriterLE, type: TlvType, value: number | bigint) {
        switch (type) {
            case TlvType.UnsignedInt_1OctetValue:
                writer.writeUInt8(value);
                break;
            case TlvType.UnsignedInt_2OctetValue:
                writer.writeUInt16(value);
                break;
            case TlvType.UnsignedInt_4OctetValue:
                writer.writeUInt32(value);
                break;
            case TlvType.UnsignedInt_8OctetValue:
                writer.writeUInt64(value);
                break;
            default:
                throw new Error(`Unexpected TLV type ${type}`);
        }
    }
}
