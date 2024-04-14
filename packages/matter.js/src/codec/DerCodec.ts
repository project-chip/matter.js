/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { InternalError, UnexpectedDataError } from "../common/MatterError.js";
import { ByteArray, Endian } from "../util/ByteArray.js";
import { DataReader } from "../util/DataReader.js";
import { isObject } from "../util/Type.js";

export const OBJECT_ID_KEY = "_objectId";
export const TAG_ID_KEY = "_tag";
export const BYTES_KEY = "_bytes";
export const ELEMENTS_KEY = "_elements";
export const BITS_PADDING = "_padding";
export const TYPE_OVERRIDE_KEY = "_type";

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
export const DatatypeOverride = (type: DerType, value: ByteArray) => ({
    [TYPE_OVERRIDE_KEY]: type,
    [BYTES_KEY]: value,
});

export type DerNode = {
    [TAG_ID_KEY]: number;
    [BYTES_KEY]: ByteArray;
    [ELEMENTS_KEY]?: DerNode[];
    [BITS_PADDING]?: number;
};

export const NON_WELL_DEFINED_DATE = new Date("9999-12-31 23:59:59Z");
const NON_WELLDEFINED_DATE_ENCODED = ByteArray.fromHex("39393939313233313233353935395a"); // 9999-12-31 23:59:59Z encoded as GeneralizedTime

export class DerCodec {
    static encode(value: any): ByteArray {
        if (Array.isArray(value)) {
            return this.encodeArray(value);
        } else if (value instanceof ByteArray) {
            return this.encodeOctetString(value);
        } else if (value instanceof Date) {
            return this.encodeDate(value);
        } else if (isObject(value) && value[TAG_ID_KEY] !== undefined) {
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
            return this.encodeAnsi1(
                tagId,
                bitsPadding === undefined
                    ? (bytes as Uint8Array)
                    : ByteArray.concat(ByteArray.of(bitsPadding), bytes as Uint8Array),
            );
        } else if (isObject(value) && value[TYPE_OVERRIDE_KEY] === undefined) {
            return this.encodeObject(value);
        } else if (typeof value === "string") {
            return this.encodeString(value);
        } else if (typeof value === "number" || typeof value === "bigint") {
            return this.encodeInteger(value);
        } else if (
            isObject(value) &&
            value[TYPE_OVERRIDE_KEY] === DerType.Integer &&
            ArrayBuffer.isView(value[BYTES_KEY])
        ) {
            return this.encodeInteger(value[BYTES_KEY] as ByteArray);
        } else if (
            isObject(value) &&
            value[TYPE_OVERRIDE_KEY] === DerType.BitString &&
            ArrayBuffer.isView(value[BYTES_KEY])
        ) {
            return this.encodeBitString(value[BYTES_KEY] as ByteArray);
        } else if (typeof value === "boolean") {
            return this.encodeBoolean(value);
        } else if (value === undefined) {
            return new ByteArray(0);
        } else {
            throw new UnexpectedDataError(`Unsupported type ${typeof value}`);
        }
    }

    private static encodeDate(date: Date) {
        if (date.getTime() === NON_WELL_DEFINED_DATE.getTime()) {
            return this.encodeAnsi1(DerType.GeneralizedTime, NON_WELLDEFINED_DATE_ENCODED);
        }
        return this.encodeAnsi1(
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
        return this.encodeAnsi1(DerType.Boolean, ByteArray.of(bool ? 0xff : 0));
    }

    private static encodeArray(array: Array<any>) {
        return this.encodeAnsi1(
            DerType.Set | CONSTRUCTED,
            ByteArray.concat(...array.map(element => this.encode(element))),
        );
    }

    private static encodeOctetString(value: ByteArray) {
        return this.encodeAnsi1(DerType.OctetString, value);
    }

    private static encodeObject(object: any) {
        const attributes = new Array<ByteArray>();
        for (const key in object) {
            attributes.push(this.encode(object[key]));
        }
        return this.encodeAnsi1(DerType.Sequence | CONSTRUCTED, ByteArray.concat(...attributes));
    }

    private static encodeString(value: string) {
        return this.encodeAnsi1(DerType.UTF8String, ByteArray.fromString(value));
    }

    private static encodeUnsignedInt(value: number) {
        const byteArray = new ByteArray(5);
        const dataView = byteArray.getDataView();
        dataView.setUint32(1, value);
        let start = 0;
        while (true) {
            if (dataView.getUint8(start) !== 0) break;
            if (dataView.getUint8(start + 1) >= 0x80) break;
            start++;
            if (start === byteArray.length - 1) break;
        }
        return this.encodeAnsi1(DerType.Integer, byteArray.slice(start));
    }

    private static encodeBitString(value: ByteArray) {
        if (value.length !== 1) {
            // We only correctly decode 8 bit values because sufficient right now
            throw new InternalError(`Bit string value ${value} needs to have a length of 1 byte.`);
        }
        const reversedBits = value[0].toString(2).padStart(8, "0");
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

    private static encodeAnsi1(tag: number, data: ByteArray) {
        return ByteArray.concat(ByteArray.of(tag), this.encodeLengthBytes(data.length), data);
    }

    static decode(data: ByteArray): DerNode {
        return this.decodeRec(new DataReader(data, Endian.Big));
    }

    private static decodeRec(reader: DataReader<Endian.Big>): DerNode {
        const { tag, bytes } = this.decodeAnsi1(reader);
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

    private static decodeAnsi1(reader: DataReader<Endian.Big>): { tag: number; bytes: ByteArray } {
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

export const PublicKeyEcPrime256v1_X962 = (key: ByteArray) => ({
    type: {
        algorithm: ObjectId("2A8648CE3D0201") /* EC Public Key */,
        curve: ObjectId("2A8648CE3D030107") /* Curve P256_V1 */,
    },
    bytes: BitByteArray(key),
});
export const EcdsaWithSHA256_X962 = DerObject("2A8648CE3D040302");
export const SHA256_CMS = DerObject("608648016503040201"); // 2.16.840.1.101.3.4.2.1
export const OrganisationName_X520 = (name: string) => [DerObject("55040A", { name })];
export const SubjectKeyIdentifier_X509 = (identifier: ByteArray) =>
    DerObject("551d0e", { value: DerCodec.encode(identifier) });
export const AuthorityKeyIdentifier_X509 = (identifier: ByteArray) =>
    DerObject("551d23", { value: DerCodec.encode({ id: ContextTaggedBytes(0, identifier) }) });
export const BasicConstraints_X509 = (constraints: any) =>
    DerObject("551d13", { critical: true, value: DerCodec.encode(constraints) });
export const ExtendedKeyUsage_X509 = ({ clientAuth, serverAuth }: { clientAuth: boolean; serverAuth: boolean }) =>
    DerObject("551d25", {
        critical: true,
        value: DerCodec.encode({
            client: clientAuth ? ObjectId("2b06010505070302") : undefined,
            server: serverAuth ? ObjectId("2b06010505070301") : undefined,
        }),
    });
export const KeyUsage_Signature_X509 = DerObject("551d0f", {
    critical: true,
    value: DerCodec.encode(BitByteArray(ByteArray.of(1 << 7), 7)),
});
export const KeyUsage_Signature_ContentCommited_X509 = DerObject("551d0f", {
    critical: true,
    value: DerCodec.encode(BitByteArray(ByteArray.of(0x03 << 1), 1)),
});
export const Pkcs7Data = (data: any) => DerObject("2A864886F70D010701", { value: ContextTagged(0, data) });
export const Pkcs7SignedData = (data: any) => DerObject("2a864886f70d010702", { value: ContextTagged(0, data) });
