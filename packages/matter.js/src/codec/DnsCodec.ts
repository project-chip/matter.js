/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError, NotImplementedError, UnexpectedDataError } from "../common/MatterError.js";
import { ByteArray, Endian } from "../util/ByteArray.js";
import { DataReader } from "../util/DataReader.js";
import { DataWriter } from "../util/DataWriter.js";
import { isIPv4, isIPv6 } from "../util/Ip.js";

export const PtrRecord = (name: string, ptr: string): DnsRecord<string> => ({
    name,
    value: ptr,
    ttl: 120,
    recordType: DnsRecordType.PTR,
    recordClass: DnsRecordClass.IN,
});
export const ARecord = (name: string, ip: string): DnsRecord<string> => ({
    name,
    value: ip,
    ttl: 120,
    recordType: DnsRecordType.A,
    recordClass: DnsRecordClass.IN,
});
export const AAAARecord = (name: string, ip: string): DnsRecord<string> => ({
    name,
    value: ip,
    ttl: 120,
    recordType: DnsRecordType.AAAA,
    recordClass: DnsRecordClass.IN,
});
export const TxtRecord = (name: string, entries: string[]): DnsRecord<string[]> => ({
    name,
    value: entries,
    ttl: 120,
    recordType: DnsRecordType.TXT,
    recordClass: DnsRecordClass.IN,
});
export const SrvRecord = (name: string, srv: SrvRecordValue): DnsRecord<SrvRecordValue> => ({
    name,
    value: srv,
    ttl: 120,
    recordType: DnsRecordType.SRV,
    recordClass: DnsRecordClass.IN,
});

export interface SrvRecordValue {
    priority: number;
    weight: number;
    port: number;
    target: string;
}

export interface DnsQuery {
    name: string;
    recordType: DnsRecordType;
    recordClass: DnsRecordClass;
}

export interface DnsRecord<T> {
    name: string;
    recordType: DnsRecordType;
    recordClass: DnsRecordClass;
    ttl: number;
    value: T;
}

export interface DnsMessage {
    transactionId: number;
    messageType: DnsMessageType;
    queries: DnsQuery[];
    answers: DnsRecord<any>[];
    authorities: DnsRecord<any>[];
    additionalRecords: DnsRecord<any>[];
}

export const enum DnsMessageType {
    Query = 0x0000,
    TruncatedQuery = 0x0200,
    Response = 0x8400, // Authoritative Answer
    TruncatedResponse = 0x8600,
}

export const enum DnsRecordType {
    A = 0x01,
    PTR = 0x0c,
    TXT = 0x10,
    AAAA = 0x1c,
    SRV = 0x21,
    NSEC = 0x2f,
    ANY = 0xff,
}

export const enum DnsRecordClass {
    IN = 0x01,
    ANY = 0xff,
}

export class DnsCodec {
    static decode(message: ByteArray): DnsMessage | undefined {
        try {
            const reader = new DataReader(message, Endian.Big);
            const transactionId = reader.readUInt16();
            const messageType = reader.readUInt16();
            const queriesCount = reader.readUInt16();
            const answersCount = reader.readUInt16();
            const authoritiesCount = reader.readUInt16();
            const additionalRecordsCount = reader.readUInt16();
            const queries = new Array<DnsQuery>();
            for (let i = 0; i < queriesCount; i++) {
                queries.push(this.decodeQuery(reader, message));
            }
            const answers = new Array<DnsRecord<any>>();
            for (let i = 0; i < answersCount; i++) {
                answers.push(this.decodeRecord(reader, message));
            }
            const authorities = new Array<DnsRecord<any>>();
            for (let i = 0; i < authoritiesCount; i++) {
                authorities.push(this.decodeRecord(reader, message));
            }
            const additionalRecords = new Array<DnsRecord<any>>();
            for (let i = 0; i < additionalRecordsCount; i++) {
                additionalRecords.push(this.decodeRecord(reader, message));
            }
            return { transactionId, messageType, queries, answers, authorities, additionalRecords };
        } catch (error) {
            return undefined;
        }
    }

    private static decodeQuery(reader: DataReader<Endian.Big>, message: ByteArray) {
        const name = this.decodeQName(reader, message);
        const recordType = reader.readUInt16();
        const recordClass = reader.readUInt16();
        return { name, recordType, recordClass };
    }

    private static decodeRecord(reader: DataReader<Endian.Big>, message: ByteArray) {
        const name = this.decodeQName(reader, message);
        const recordType = reader.readUInt16();
        const recordClass = reader.readUInt16();
        const ttl = reader.readUInt32();
        const valueLength = reader.readUInt16();
        const valueBytes = reader.readByteArray(valueLength);
        const value = this.decodeRecordValue(valueBytes, recordType, message);
        return { name, recordType, recordClass, ttl, value };
    }

    private static decodeQName(reader: DataReader<Endian.Big>, message: ByteArray) {
        const qNameItems = new Array<string>();
        while (true) {
            const itemLength = reader.readUInt8();
            if (itemLength === 0) break;
            if ((itemLength & 0xc0) !== 0) {
                // Compressed Qname
                const indexInMessage = reader.readUInt8() | ((itemLength & 0x3f) << 8);
                qNameItems.push(this.decodeQName(new DataReader(message.slice(indexInMessage), Endian.Big), message));
                break;
            }
            qNameItems.push(reader.readUtf8String(itemLength));
        }
        return qNameItems.join(".");
    }

    private static decodeRecordValue(valueBytes: ByteArray, recordType: DnsRecordType, message: ByteArray) {
        switch (recordType) {
            case DnsRecordType.PTR:
                return this.decodeQName(new DataReader(valueBytes, Endian.Big), message);
            case DnsRecordType.SRV:
                return this.decodeSrvRecord(valueBytes, message);
            case DnsRecordType.TXT:
                return this.decodeTxtRecord(valueBytes);
            case DnsRecordType.AAAA:
                return this.decodeAaaaRecord(valueBytes);
            case DnsRecordType.A:
                return this.decodeARecord(valueBytes);
            default:
                // Unknown type, don't decode
                return valueBytes;
        }
    }

    private static decodeSrvRecord(valueBytes: ByteArray, message: ByteArray): SrvRecordValue {
        const reader = new DataReader(valueBytes, Endian.Big);
        const priority = reader.readUInt16();
        const weight = reader.readUInt16();
        const port = reader.readUInt16();
        const target = this.decodeQName(reader, message);
        return { priority, weight, port, target };
    }

    private static decodeTxtRecord(valueBytes: ByteArray): string[] {
        const reader = new DataReader(valueBytes, Endian.Big);
        const result = new Array<string>();
        let bytesRead = 0;
        while (bytesRead < valueBytes.length) {
            const length = reader.readUInt8();
            result.push(reader.readUtf8String(length));
            bytesRead += length + 1;
        }
        return result;
    }

    private static decodeAaaaRecord(valueBytes: ByteArray): string {
        const reader = new DataReader(valueBytes, Endian.Big);
        const ipItems = new Array<string>();
        for (let i = 0; i < 8; i++) {
            ipItems.push(reader.readUInt16().toString(16));
        }
        // Compress 0 sequences
        const zeroSequences = new Array<{ start: number; length: number }>();
        for (let i = 0; i < 8; i++) {
            if (ipItems[i] !== "0") continue;
            const start = i;
            i++;
            while (i < 8 && ipItems[i] === "0") {
                i++;
            }
            zeroSequences.push({ start, length: i - start });
        }
        if (zeroSequences.length > 0) {
            zeroSequences.sort((a, b) => a.length - b.length);
            const { start, length } = zeroSequences[0];
            ipItems[start] = "";
            ipItems.splice(start + 1, length - 1);
        }
        return ipItems.join(":");
    }

    private static decodeARecord(valueBytes: ByteArray): string {
        const reader = new DataReader(valueBytes, Endian.Big);
        const ipItems = new Array<string>();
        for (let i = 0; i < 4; i++) {
            ipItems.push(reader.readUInt8().toString());
        }
        return ipItems.join(".");
    }

    static encode({
        messageType,
        transactionId = 0,
        queries = [],
        answers = [],
        authorities = [],
        additionalRecords = [],
    }: Partial<DnsMessage>): ByteArray {
        if (messageType === undefined) throw new InternalError("Message type must be specified!");
        if (queries.length > 0 && messageType !== DnsMessageType.Query && messageType !== DnsMessageType.TruncatedQuery)
            throw new InternalError("Queries can only be included in query messages!");
        if (authorities.length > 0) throw new NotImplementedError("Authority answers are not supported yet!");

        const writer = new DataWriter(Endian.Big);
        writer.writeUInt16(transactionId);
        writer.writeUInt16(messageType);
        writer.writeUInt16(queries.length);
        writer.writeUInt16(answers.length);
        writer.writeUInt16(authorities.length);
        writer.writeUInt16(additionalRecords.length);
        queries.forEach(({ name, recordClass, recordType }) => {
            writer.writeByteArray(this.encodeQName(name));
            writer.writeUInt16(recordType);
            writer.writeUInt16(recordClass);
        });
        [...answers, ...authorities, ...additionalRecords].forEach(record =>
            writer.writeByteArray(this.encodeRecord(record)),
        );
        return writer.toByteArray();
    }

    static encodeRecord(record: DnsRecord<any>): ByteArray {
        const { name, recordType, recordClass, ttl, value } = record;

        const writer = new DataWriter(Endian.Big);
        writer.writeByteArray(this.encodeQName(name));
        writer.writeUInt16(recordType);
        writer.writeUInt16(recordClass);
        writer.writeUInt32(ttl);
        const encodedValue = this.encodeRecordValue(value, recordType);
        writer.writeUInt16(encodedValue.length);
        writer.writeByteArray(encodedValue);
        return writer.toByteArray();
    }

    private static encodeRecordValue(value: any, recordType: DnsRecordType): ByteArray {
        switch (recordType) {
            case DnsRecordType.PTR:
                return this.encodeQName(value as string);
            case DnsRecordType.SRV:
                return this.encodeSrvRecord(value as SrvRecordValue);
            case DnsRecordType.TXT:
                return this.encodeTxtRecord(value as string[]);
            case DnsRecordType.AAAA:
                return this.encodeAaaaRecord(value as string);
            case DnsRecordType.A:
                return this.encodeARecord(value as string);
            default:
                if (value instanceof ByteArray) return value;
                throw new UnexpectedDataError(`Unsupported record type ${recordType}`);
        }
    }

    private static encodeARecord(ip: string) {
        if (!isIPv4(ip)) throw new UnexpectedDataError(`Invalid A Record value: ${ip}`);
        const writer = new DataWriter(Endian.Big);
        ip.split(".").forEach(part => {
            writer.writeUInt8(parseInt(part));
        });
        return writer.toByteArray();
    }

    private static encodeAaaaRecord(ip: string) {
        if (!isIPv6(ip)) throw new UnexpectedDataError(`Invalid AAAA Record value: ${ip}`);
        const writer = new DataWriter(Endian.Big);
        const parts = ip.split(":");
        parts.forEach(part => {
            if (part === "") {
                const compressedParts = 8 - parts.length;
                for (let i = 0; i < compressedParts; i++) {
                    writer.writeUInt16(0);
                }
            }
            writer.writeUInt16(parseInt(part, 16));
        });
        return writer.toByteArray();
    }

    private static encodeTxtRecord(entries: string[]) {
        const writer = new DataWriter(Endian.Big);
        entries.forEach(entry => {
            const entryData = ByteArray.fromString(entry);
            writer.writeUInt8(entryData.length);
            writer.writeByteArray(entryData);
        });
        return writer.toByteArray();
    }

    private static encodeSrvRecord({ priority, weight, port, target }: SrvRecordValue) {
        const writer = new DataWriter(Endian.Big);
        writer.writeUInt16(priority);
        writer.writeUInt16(weight);
        writer.writeUInt16(port);
        writer.writeByteArray(this.encodeQName(target));
        return writer.toByteArray();
    }

    private static encodeQName(qname: string) {
        const writer = new DataWriter(Endian.Big);
        if (qname.length > 0) {
            qname.split(".").forEach(label => {
                const labelData = ByteArray.fromString(label);
                writer.writeUInt8(labelData.length);
                writer.writeByteArray(labelData);
            });
        }
        writer.writeUInt8(0);
        return writer.toByteArray();
    }
}
