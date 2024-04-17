/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { UnexpectedDataError } from "../common/MatterError.js";
import { ByteArray, Endian } from "../util/ByteArray.js";
import { DataReader } from "../util/DataReader.js";
import { toHex } from "../util/Number.js";
import { isObject } from "../util/Type.js";

export const OBJECT_ID_KEY = "_objectId";
export const TAG_ID_KEY = "_tag";
export const BYTES_KEY = "_bytes";
export const ELEMENTS_KEY = "_elements";
export const BITS_PADDING = "_padding";
export const TYPE_OVERRIDE_KEY = "_type";
export const RAW_DATA_KEY = "_raw";

export enum DerType {
    Boolean = 0x01,
    Integer = 0x02,
    BitString = 0x03,
    OctetString = 0x04,
    Null = 0x05,
    ObjectIdentifier = 0x06,
    UTF8String = 0x0c,
    Sequence = 0x10,
    Set = 0x11,
    PrintableString = 0x13,
    T16String = 0x14,
    IA5String = 0x16,
    UtcDate = 0x17,
    GeneralizedTime = 0x18,
}

const CONSTRUCTED = 0x20;

const enum DerClass {
    Universal = 0x00,
    Application = 0x40,
    ContextSpecific = 0x80,
    Private = 0xc0,
}
export const ObjectId = (objectId: string) => ({
    [TAG_ID_KEY]: DerType.ObjectIdentifier as number,
    [BYTES_KEY]: ByteArray.fromHex(objectId),
});
export const DerObject = (objectId: string, content: any = {}) => ({ [OBJECT_ID_KEY]: ObjectId(objectId), ...content });
export const BitByteArray = (data: ByteArray, padding = 0) => ({
    [TAG_ID_KEY]: DerType.BitString as number,
    [BYTES_KEY]: data,
    [BITS_PADDING]: padding,
});
export const ContextTagged = (tagId: number, value?: any) => ({
    [TAG_ID_KEY]: tagId | DerClass.ContextSpecific | CONSTRUCTED,
    [BYTES_KEY]: value === undefined ? new ByteArray(0) : DerCodec.encode(value),
});
export const ContextTaggedBytes = (tagId: number, value: ByteArray) => ({
    [TAG_ID_KEY]: tagId | DerClass.ContextSpecific,
    [BYTES_KEY]: value,
});
export const DatatypeOverride = (type: DerType, value: any) => ({
    [TYPE_OVERRIDE_KEY]: type,
    [RAW_DATA_KEY]: value,
});
export const RawBytes = (bytes: ByteArray) => ({
    [BYTES_KEY]: bytes,
});

export type DerNode = {
    [TAG_ID_KEY]: number;
    [BYTES_KEY]: ByteArray;
    [ELEMENTS_KEY]?: DerNode[];
    [BITS_PADDING]?: number;
};

export class DerCodec {
    static encode(value: any): ByteArray {
        if (Array.isArray(value)) {
            return this.encodeArray(value);
        } else if (value instanceof ByteArray) {
            return this.encodeOctetString(value);
        } else if (value instanceof Date) {
            return this.encodeDate(value);
        } else if (typeof value === "string") {
            return this.encodeString(value);
        } else if (typeof value === "number" || typeof value === "bigint") {
            return this.encodeInteger(value);
        } else if (typeof value === "boolean") {
            return this.encodeBoolean(value);
        } else if (value === undefined) {
            return new ByteArray(0);
        } else if (isObject(value)) {
            if (value[TAG_ID_KEY] !== undefined) {
                const { [TAG_ID_KEY]: tagId, [BITS_PADDING]: bitsPadding, [BYTES_KEY]: bytes } = value;
                if (typeof tagId !== "number") {
                    throw new UnexpectedDataError("Tag ID is non-numeric");
                }
                if (bitsPadding !== undefined && typeof bitsPadding !== "number") {
                    throw new UnexpectedDataError("Bits padding is not a numeric byte value");
                }
                if (bytes === undefined || !ArrayBuffer.isView(bytes)) {
                    throw new UnexpectedDataError("DER bytes is not a byte array");
                }
                return this.encodeAsn1(
                    tagId,
                    bitsPadding === undefined
                        ? (bytes as Uint8Array)
                        : ByteArray.concat(ByteArray.of(bitsPadding), bytes as Uint8Array),
                );
            } else if (value[TYPE_OVERRIDE_KEY] !== undefined && value[RAW_DATA_KEY] !== undefined) {
                if (value[TYPE_OVERRIDE_KEY] === DerType.Integer && value[RAW_DATA_KEY] instanceof ByteArray) {
                    return this.encodeInteger(value[RAW_DATA_KEY]);
                } else if (value[TYPE_OVERRIDE_KEY] === DerType.BitString && typeof value[RAW_DATA_KEY] === "number") {
                    return this.encodeBitString(value[RAW_DATA_KEY]);
                } else if (
                    value[TYPE_OVERRIDE_KEY] === DerType.PrintableString &&
                    typeof value[RAW_DATA_KEY] === "string"
                ) {
                    return this.encodePrintableString(value[RAW_DATA_KEY]);
                } else if (value[TYPE_OVERRIDE_KEY] === DerType.IA5String && typeof value[RAW_DATA_KEY] === "string") {
                    return this.encodeIA5String(value[RAW_DATA_KEY]);
                } else {
                    throw new UnexpectedDataError(`Unsupported override type ${value[TYPE_OVERRIDE_KEY]}`);
                }
            } else if (
                value[BYTES_KEY] !== undefined &&
                value[BYTES_KEY] instanceof ByteArray &&
                Object.keys(value).length === 1
            ) {
                // Raw Data
                return value[BYTES_KEY];
            } else if (value[TYPE_OVERRIDE_KEY] === undefined && value[BYTES_KEY] === undefined) {
                return this.encodeObject(value);
            } else {
                throw new UnexpectedDataError(`Unsupported object type ${typeof value}`);
            }
        } else {
            throw new UnexpectedDataError(`Unsupported type ${typeof value}`);
        }
    }

    private static encodeDate(date: Date) {
        if (date.getFullYear() > 2049) {
            // Dates 2050+ are encoded as GeneralizedTime. This includes the special Non Well Defined date 9999-12-31.
            return this.encodeAsn1(
                DerType.GeneralizedTime,
                ByteArray.fromString(
                    date
                        .toISOString()
                        .replace(/[-:.T]/g, "")
                        .slice(0, 14) + "Z",
                ),
            );
        } else
            return this.encodeAsn1(
                DerType.UtcDate,
                ByteArray.fromString(
                    date
                        .toISOString()
                        .replace(/[-:.T]/g, "")
                        .slice(2, 14) + "Z",
                ),
            );
    }

    private static encodeBoolean(bool: boolean) {
        return this.encodeAsn1(DerType.Boolean, ByteArray.of(bool ? 0xff : 0));
    }

    private static encodeArray(array: Array<any>) {
        return this.encodeAsn1(
            DerType.Set | CONSTRUCTED,
            ByteArray.concat(...array.map(element => this.encode(element))),
        );
    }

    private static encodeOctetString(value: ByteArray) {
        return this.encodeAsn1(DerType.OctetString, value);
    }

    private static encodeObject(object: any) {
        const attributes = new Array<ByteArray>();
        for (const key in object) {
            attributes.push(this.encode(object[key]));
        }
        return this.encodeAsn1(DerType.Sequence | CONSTRUCTED, ByteArray.concat(...attributes));
    }

    private static encodeString(value: string) {
        return this.encodeAsn1(DerType.UTF8String, ByteArray.fromString(value));
    }

    private static encodePrintableString(value: string) {
        if (!/^[A-Za-z0-9 '()+,-./:=?]*$/g.test(value)) {
            throw new UnexpectedDataError(`String ${value} is not a printable string.`);
        }
        return this.encodeAsn1(DerType.PrintableString, ByteArray.fromString(value));
    }

    private static encodeIA5String(value: string) {
        /*eslint-disable-next-line no-control-regex */
        if (!/^[\x00-\x7F]*$/.test(value)) {
            throw new UnexpectedDataError(`String ${value} is not an IA5 string.`);
        }
        return this.encodeAsn1(DerType.IA5String, ByteArray.fromString(value));
    }

    private static encodeInteger(value: number | bigint | ByteArray) {
        const isByteArray = ArrayBuffer.isView(value);
        let valueBytes: ByteArray;
        if (isByteArray) {
            valueBytes = value;
        } else {
            valueBytes = ByteArray.fromHex(toHex(value));
        }
        const byteArray = ByteArray.concat(new ByteArray(1), valueBytes);
        const dataView = byteArray.getDataView();
        let start = 0;
        while (true) {
            if (dataView.getUint8(start) !== 0) break;
            if (dataView.getUint8(start + 1) >= 0x80) break;
            start++;
            if (start === byteArray.length - 1) break;
        }
        return this.encodeAsn1(DerType.Integer, byteArray.slice(start));
    }

    private static encodeBitString(value: number) {
        const reversedBits = value.toString(2).padStart(8, "0");
        const unusedBits = reversedBits.indexOf("1");
        const bitByteArray = ByteArray.of(parseInt(reversedBits.split("").reverse().join(""), 2));
        return this.encode(BitByteArray(bitByteArray, unusedBits === -1 ? 8 : unusedBits));
    }

    private static encodeLengthBytes(value: number) {
        const byteArray = new ByteArray(5);
        const dataView = byteArray.getDataView();
        dataView.setUint32(1, value);
        let start = 0;
        while (true) {
            if (dataView.getUint8(start) !== 0) break;
            start++;
            if (start === 4) break;
        }
        const lengthLength = byteArray.length - start;
        if (lengthLength > 1 || dataView.getUint8(start) >= 0x80) {
            start--;
            dataView.setUint8(start, 0x80 + lengthLength);
        }
        return byteArray.slice(start);
    }

    private static encodeAsn1(tag: number, data: ByteArray) {
        return ByteArray.concat(ByteArray.of(tag), this.encodeLengthBytes(data.length), data);
    }

    static decode(data: ByteArray): DerNode {
        return this.decodeRec(new DataReader(data, Endian.Big));
    }

    private static decodeRec(reader: DataReader<Endian.Big>): DerNode {
        const { tag, bytes } = this.decodeAsn1(reader);
        if (tag === DerType.BitString)
            return { [TAG_ID_KEY]: tag, [BYTES_KEY]: bytes.slice(1), [BITS_PADDING]: bytes[0] };
        if ((tag & CONSTRUCTED) === 0) return { [TAG_ID_KEY]: tag, [BYTES_KEY]: bytes };
        const elementsReader = new DataReader(bytes, Endian.Big);
        const elements: DerNode[] = [];
        while (elementsReader.getRemainingBytesCount() > 0) {
            elements.push(this.decodeRec(elementsReader));
        }
        return { [TAG_ID_KEY]: tag, [BYTES_KEY]: bytes, [ELEMENTS_KEY]: elements };
    }

    private static decodeAsn1(reader: DataReader<Endian.Big>): { tag: number; bytes: ByteArray } {
        const tag = reader.readUInt8();
        let length = reader.readUInt8();
        if ((length & 0x80) !== 0) {
            let lengthLength = length & 0x7f;
            length = 0;
            while (lengthLength > 0) {
                length = (length << 8) + reader.readUInt8();
                lengthLength--;
            }
        }
        const bytes = reader.readByteArray(length);
        return { tag, bytes };
    }
}
