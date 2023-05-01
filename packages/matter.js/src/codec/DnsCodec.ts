/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray, Endian } from "../util/ByteArray.js";
import { DataReader } from "../util/DataReader.js";
import { DataWriter } from "../util/DataWriter.js";
import { isIPv4, isIPv6 } from "../util/Ip.js";

export const PtrRecord = (name: string, ptr: string): Record<string> => ({ name, value: ptr, ttl: 120, recordType: RecordType.PTR, recordClass: RecordClass.IN });
export const ARecord = (name: string, ip: string): Record<string> => ({ name, value: ip, ttl: 120, recordType: RecordType.A, recordClass: RecordClass.IN });
export const AAAARecord = (name: string, ip: string): Record<string> => ({ name, value: ip, ttl: 120, recordType: RecordType.AAAA, recordClass: RecordClass.IN });
export const TxtRecord = (name: string, entries: string[]): Record<string[]> => ({ name, value: entries, ttl: 120, recordType: RecordType.TXT, recordClass: RecordClass.IN });
export const SrvRecord = (name: string, srv: SrvRecordValue): Record<SrvRecordValue> => ({ name, value: srv, ttl: 120, recordType: RecordType.SRV, recordClass: RecordClass.IN });

export interface SrvRecordValue {
    priority: number,
    weight: number,
    port: number,
    target: string,
}

export interface Query {
    name: string,
    recordType: RecordType,
    recordClass: RecordClass,
}

export interface Record<T> {
    name: string,
    recordType: RecordType,
    recordClass: RecordClass,
    ttl: number,
    value: T,
}

export interface DnsMessage {
    transactionId: number,
    messageType: MessageType,
    queries: Query[],
    answers: Record<any>[],
    authorities: Record<any>[],
    additionalRecords: Record<any>[],
}

export const enum MessageType {
    Query = 0x0000,
    Response = 0x8400,
}

export const enum RecordType {
    A = 0x01,
    PTR = 0x0C,
    TXT = 0x10,
    AAAA = 0x1C,
    SRV = 0x21,
    ANY = 0xFF,
}

export const enum RecordClass {
    IN = 0x01,
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
            const queries = new Array<Query>();
            for (let i = 0; i < queriesCount; i++) {
                queries.push(this.decodeQuery(reader, message));
            }
            const answers = new Array<Record<any>>();
            for (let i = 0; i < answersCount; i++) {
                answers.push(this.decodeRecord(reader, message));
            }
            const authorities = new Array<Record<any>>();
            for (let i = 0; i < authoritiesCount; i++) {
                authorities.push(this.decodeRecord(reader, message));
            }
            const additionalRecords = new Array<Record<any>>();
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
            if ((itemLength & 0xC0) !== 0) {
                // Compressed Qname
                const indexInMessage = reader.readUInt8() | ((itemLength & 0x3F) << 8);
                qNameItems.push(this.decodeQName(new DataReader(message.slice(indexInMessage), Endian.Big), message));
                break;
            }
            qNameItems.push(reader.readUtf8String(itemLength));
        }
        return qNameItems.join(".");
    }

    private static decodeRecordValue(valueBytes: ByteArray, recordType: RecordType, message: ByteArray) {
        switch (recordType) {
            case RecordType.PTR:
                return this.decodeQName(new DataReader(valueBytes, Endian.Big), message);
            case RecordType.SRV:
                return this.decodeSrvRecord(valueBytes, message);
            case RecordType.TXT:
                return this.decodeTxtRecord(valueBytes);
            case RecordType.AAAA:
                return this.decodeAaaaRecord(valueBytes);
            case RecordType.A:
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
        const zeroSequences = new Array<{ start: number, length: number }>();
        for (let i = 0; i < 8; i++) {
            if (ipItems[i] !== "0") continue;
            const start = i;
            i++;
            while (i < 8 && ipItems[i] === "0") { i++; }
            zeroSequences.push({ start, length: i - start });
        }
        if (zeroSequences.length > 0) {
            zeroSequences.sort((a, b) => a.length - b.length);
            const { start, length } = zeroSequences[0];
            for (let i = start; i < start + length; i++) {
                ipItems[i] = "";
            }
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

    static encode({ transactionId = 0, queries = [], answers = [], authorities = [], additionalRecords = [] }: Partial<DnsMessage>): ByteArray {
        const writer = new DataWriter(Endian.Big);
        writer.writeUInt16(transactionId);
        writer.writeUInt16(queries.length > 0 ? MessageType.Query : MessageType.Response);
        writer.writeUInt16(queries.length);
        writer.writeUInt16(answers.length);
        writer.writeUInt16(0); // No authority answers
        writer.writeUInt16(additionalRecords.length);
        queries.forEach(({ name, recordClass, recordType }) => {
            writer.writeByteArray(this.encodeQName(name));
            writer.writeUInt16(recordType);
            writer.writeUInt16(recordClass);
        });
        [...answers, ...authorities, ...additionalRecords].forEach(({ name, recordType, recordClass, ttl, value }) => {
            writer.writeByteArray(this.encodeQName(name));
            writer.writeUInt16(recordType);
            writer.writeUInt16(recordClass);
            writer.writeUInt32(ttl);
            const encodedValue = this.encodeRecordValue(value, recordType);
            writer.writeUInt16(encodedValue.length);
            writer.writeByteArray(encodedValue);
        });
        return writer.toByteArray();
    }

    private static encodeRecordValue(value: any, recordType: RecordType): ByteArray {
        switch (recordType) {
            case RecordType.PTR:
                return this.encodeQName(value as string);
            case RecordType.SRV:
                return this.encodeSrvRecord(value as SrvRecordValue);
            case RecordType.TXT:
                return this.encodeTxtRecord(value as string[]);
            case RecordType.AAAA:
                return this.encodeAaaaRecord(value as string);
            case RecordType.A:
                return this.encodeARecord(value as string);
            default:
                throw new Error(`Unsupported record type ${recordType}`);
        }
    }

    private static encodeARecord(ip: string) {
        if (!isIPv4(ip)) throw new Error(`Invalid A Record value: ${ip}`);
        const writer = new DataWriter(Endian.Big);
        ip.split(".").forEach(part => {
            writer.writeUInt8(parseInt(part));
        });
        return writer.toByteArray();
    }

    private static encodeAaaaRecord(ip: string) {
        if (!isIPv6(ip)) throw new Error(`Invalid AAAA Record value: ${ip}`);
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
            writer.writeUInt8(entry.length);
            writer.writeUtf8String(entry);
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
        qname.split(".").forEach(label => {
            writer.writeUInt8(label.length);
            writer.writeUtf8String(label);
        });
        writer.writeUInt8(0);
        return writer.toByteArray();
    }
}
