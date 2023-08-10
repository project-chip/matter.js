/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { UnexpectedDataError } from "../common/MatterError.js";
import { ByteArray, Endian } from "../util/ByteArray.js";
import { DataReader } from "../util/DataReader.js";

export const OBJECT_ID_KEY = "_objectId";
export const TAG_ID_KEY = "_tag";
export const BYTES_KEY = "_bytes";
export const ELEMENTS_KEY = "_elements";
export const BITS_PADDING = "_padding";

export const enum DerType {
    Boolean = 0x01,
    UnsignedInt = 0x02,
    BitString = 0x03,
    OctetString = 0x04,
    ObjectIdentifier = 0x06,
    UTF8String = 0x0c,
    Sequence = 0x10,
    Set = 0x11,
    UtcDate = 0x17,
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
        } else if (typeof value === "object" && value[TAG_ID_KEY] !== undefined) {
            return this.encodeAnsi1(
                value[TAG_ID_KEY],
                value[BITS_PADDING] === undefined
                    ? value[BYTES_KEY]
                    : ByteArray.concat(ByteArray.of(value[BITS_PADDING]), value[BYTES_KEY]),
            );
        } else if (typeof value === "object") {
            return this.encodeObject(value);
        } else if (typeof value === "string") {
            return this.encodeString(value);
        } else if (typeof value === "number") {
            return this.encodeUnsignedInt(value);
        } else if (typeof value === "boolean") {
            return this.encodeBoolean(value);
        } else if (value === undefined) {
            return new ByteArray(0);
        } else {
            throw new UnexpectedDataError(`Unsupported type ${typeof value}`);
        }
    }

    private static encodeDate(date: Date) {
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
            if (start === 4) break;
        }
        return this.encodeAnsi1(DerType.UnsignedInt, byteArray.slice(start));
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
