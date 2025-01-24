/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { UnexpectedDataError } from "../MatterError.js";
import { Bytes, Endian } from "../util/Bytes.js";
import { DataReader } from "../util/DataReader.js";
import { toHex } from "../util/Number.js";
import { isObject } from "../util/Type.js";

export enum DerKey {
    ObjectId = "_objectId",
    TagId = "_tag",
    Bytes = "_bytes",
    Elements = "_elements",
    BitsPadding = "_padding",
    TypeOverride = "_type",
    RawData = "_raw",
}

export class DerError extends UnexpectedDataError {}

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
    [DerKey.TagId]: DerType.ObjectIdentifier as number,
    [DerKey.Bytes]: Bytes.fromHex(objectId),
});
export const DerObject = (objectId: string, content: any = {}) => ({
    [DerKey.ObjectId]: ObjectId(objectId),
    ...content,
});
export const BitByteArray = (data: Uint8Array, padding = 0) => ({
    [DerKey.TagId]: DerType.BitString as number,
    [DerKey.Bytes]: data,
    [DerKey.BitsPadding]: padding,
});
export const ContextTagged = (tagId: number, value?: any) => ({
    [DerKey.TagId]: tagId | DerClass.ContextSpecific | CONSTRUCTED,
    [DerKey.Bytes]: value === undefined ? new Uint8Array(0) : DerCodec.encode(value),
});
export const ContextTaggedBytes = (tagId: number, value: Uint8Array) => ({
    [DerKey.TagId]: tagId | DerClass.ContextSpecific,
    [DerKey.Bytes]: value,
});
export const DatatypeOverride = (type: DerType, value: any) => ({
    [DerKey.TypeOverride]: type,
    [DerKey.RawData]: value,
});
export const RawBytes = (bytes: Uint8Array) => ({
    [DerKey.Bytes]: bytes,
});

export type DerNode = {
    [DerKey.TagId]: number;
    [DerKey.Bytes]: Uint8Array;
    [DerKey.Elements]?: DerNode[];
    [DerKey.BitsPadding]?: number;
};

export class DerCodec {
    static encode(value: any): Uint8Array {
        if (Array.isArray(value)) {
            return this.encodeArray(value);
        } else if (value instanceof Uint8Array) {
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
            return new Uint8Array(0);
        } else if (isObject(value)) {
            if (value[DerKey.TagId] !== undefined) {
                const { [DerKey.TagId]: tagId, [DerKey.BitsPadding]: bitsPadding, [DerKey.Bytes]: bytes } = value;
                if (typeof tagId !== "number") {
                    throw new DerError("Tag ID is non-numeric");
                }
                if (bitsPadding !== undefined && typeof bitsPadding !== "number") {
                    throw new DerError("Bits padding is not a numeric byte value");
                }
                if (bytes === undefined || !ArrayBuffer.isView(bytes)) {
                    throw new DerError("DER bytes is not a byte array");
                }
                return this.encodeAsn1(
                    tagId,
                    bitsPadding === undefined
                        ? (bytes as Uint8Array)
                        : Bytes.concat(Uint8Array.of(bitsPadding), bytes as Uint8Array),
                );
            } else if (value[DerKey.TypeOverride] !== undefined && value[DerKey.RawData] !== undefined) {
                if (value[DerKey.TypeOverride] === DerType.Integer && value[DerKey.RawData] instanceof Uint8Array) {
                    return this.encodeInteger(value[DerKey.RawData]);
                } else if (
                    value[DerKey.TypeOverride] === DerType.BitString &&
                    typeof value[DerKey.RawData] === "number"
                ) {
                    return this.encodeBitString(value[DerKey.RawData]);
                } else if (
                    value[DerKey.TypeOverride] === DerType.PrintableString &&
                    typeof value[DerKey.RawData] === "string"
                ) {
                    return this.encodePrintableString(value[DerKey.RawData]);
                } else if (
                    value[DerKey.TypeOverride] === DerType.IA5String &&
                    typeof value[DerKey.RawData] === "string"
                ) {
                    return this.encodeIA5String(value[DerKey.RawData]);
                } else {
                    throw new UnexpectedDataError(`Unsupported override type ${value[DerKey.TypeOverride]}`);
                }
            } else if (
                value[DerKey.Bytes] !== undefined &&
                value[DerKey.Bytes] instanceof Uint8Array &&
                Object.keys(value).length === 1
            ) {
                // Raw Data
                return value[DerKey.Bytes];
            } else if (value[DerKey.TypeOverride] === undefined && value[DerKey.Bytes] === undefined) {
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
                Bytes.fromString(
                    date
                        .toISOString()
                        .replace(/[-:.T]/g, "")
                        .slice(0, 14) + "Z",
                ),
            );
        } else
            return this.encodeAsn1(
                DerType.UtcDate,
                Bytes.fromString(
                    date
                        .toISOString()
                        .replace(/[-:.T]/g, "")
                        .slice(2, 14) + "Z",
                ),
            );
    }

    private static encodeBoolean(bool: boolean) {
        return this.encodeAsn1(DerType.Boolean, Uint8Array.of(bool ? 0xff : 0));
    }

    private static encodeArray(array: Array<any>) {
        return this.encodeAsn1(DerType.Set | CONSTRUCTED, Bytes.concat(...array.map(element => this.encode(element))));
    }

    private static encodeOctetString(value: Uint8Array) {
        return this.encodeAsn1(DerType.OctetString, value);
    }

    private static encodeObject(object: any) {
        const attributes = new Array<Uint8Array>();
        for (const key in object) {
            attributes.push(this.encode(object[key]));
        }
        return this.encodeAsn1(DerType.Sequence | CONSTRUCTED, Bytes.concat(...attributes));
    }

    private static encodeString(value: string) {
        return this.encodeAsn1(DerType.UTF8String, Bytes.fromString(value));
    }

    private static encodePrintableString(value: string) {
        if (!/^[a-z0-9 '()+,\-./:=?]*$/i.test(value)) {
            throw new UnexpectedDataError(`String ${value} is not a printable string.`);
        }
        return this.encodeAsn1(DerType.PrintableString, Bytes.fromString(value));
    }

    private static encodeIA5String(value: string) {
        /*eslint-disable-next-line no-control-regex */
        if (!/^[\x00-\x7F]*$/.test(value)) {
            throw new UnexpectedDataError(`String ${value} is not an IA5 string.`);
        }
        return this.encodeAsn1(DerType.IA5String, Bytes.fromString(value));
    }

    private static encodeInteger(value: number | bigint | Uint8Array) {
        const isByteArray = ArrayBuffer.isView(value);
        let valueBytes: Uint8Array;
        if (isByteArray) {
            valueBytes = value;
        } else {
            valueBytes = Bytes.fromHex(toHex(value));
        }
        const byteArray = Bytes.concat(new Uint8Array(1), valueBytes);
        const dataView = Bytes.dataViewOf(byteArray);
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
        const bitByteArray = Uint8Array.of(parseInt(reversedBits.split("").reverse().join(""), 2));
        return this.encode(BitByteArray(bitByteArray, unusedBits === -1 ? 8 : unusedBits));
    }

    private static encodeLengthBytes(value: number) {
        const byteArray = new Uint8Array(5);
        const dataView = Bytes.dataViewOf(byteArray);
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

    private static encodeAsn1(tag: number, data: Uint8Array) {
        return Bytes.concat(Uint8Array.of(tag), this.encodeLengthBytes(data.length), data);
    }

    static decode(data: Uint8Array): DerNode {
        return this.decodeRec(new DataReader(data, Endian.Big));
    }

    private static decodeRec(reader: DataReader<Endian.Big>): DerNode {
        const { tag, bytes } = this.decodeAsn1(reader);
        if (tag === DerType.BitString)
            return { [DerKey.TagId]: tag, [DerKey.Bytes]: bytes.slice(1), [DerKey.BitsPadding]: bytes[0] };
        if ((tag & CONSTRUCTED) === 0) return { [DerKey.TagId]: tag, [DerKey.Bytes]: bytes };
        const elementsReader = new DataReader(bytes, Endian.Big);
        const elements: DerNode[] = [];
        while (elementsReader.remainingBytesCount > 0) {
            elements.push(this.decodeRec(elementsReader));
        }
        return { [DerKey.TagId]: tag, [DerKey.Bytes]: bytes, [DerKey.Elements]: elements };
    }

    private static decodeAsn1(reader: DataReader<Endian.Big>): { tag: number; bytes: Uint8Array } {
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
