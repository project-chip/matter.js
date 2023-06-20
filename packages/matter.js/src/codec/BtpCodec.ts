/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray, Endian } from "../util/ByteArray.js";
import { DataReader } from "../util/DataReader.js";
import { DataWriter } from "../util/DataWriter.js";

export interface BtpHandshakeRequest {
    version: ByteArray,
    attMtu: number,
    clientWindowSize: number,
}

export interface Header {
    handshakeBit: number,
    managementBit: number,
    ackMsgBit: number,
    endSegmentBit: number,
    beginSegmentBit: number
}

export interface BtpHandshakeResponse {
    version: ByteArray,
    attMtu: number,
    windowSize: number
}

export interface BtpPacketPayload {
    ackNumber?: number,
    sequenceNumber: number,
    msgLength?: number,
    segmentPayload?: ByteArray
}

export interface BtpPacket {
    header: Header,
    payload: BtpPacketPayload
}

export const enum HeaderBits {
    HandshakeBit = 0b00000010,
    ManagementMsg = 0b00000100,
    AckMsg = 0b00010000,
    EndSegment = 0b00100000,
    BeginSegment = 0b10000000
}

export const enum Opcode {
    HandshakeManagementOpcode = 0x6c,
}

const HANDSHAKE_HEADER = 0b01100101;

var ver: Uint8Array = new Uint8Array();

export class BtpCodec {

    static decodeBtpHandshakeRequest(data: ByteArray): BtpHandshakeRequest {
        const reader = new DataReader(data, Endian.Little);
        return this.decodeRequestPayload(reader);
    }

    static decodeBtpPacket(data: ByteArray): BtpPacket {
        const reader = new DataReader(data, Endian.Little);

        return {
            header: this.decodeHeader(reader),
            payload: this.decodeBtpPacketPayload(reader)
        };

    }

    static encodeBtpHandshakeResponse({ version, attMtu, windowSize }: BtpHandshakeResponse): ByteArray {

        return ByteArray.concat(
            new Uint8Array(HANDSHAKE_HEADER),
            this.encodeHandshakeResponsePayload({ version, attMtu, windowSize })
        );
    }

    private static decodeBtpPacketPayload(reader: DataReader<Endian.Little>): BtpPacketPayload {

        const ackNumber = reader.readUInt8();
        const sequenceNumber = reader.readUInt8();
        const msgLength = reader.readUInt16();
        const segmentPayload = reader.getRemainingBytes();

        return { ackNumber, sequenceNumber, msgLength, segmentPayload };
    }


    private static decodeRequestPayload(reader: DataReader<Endian.Little>): BtpHandshakeRequest {

        const header = reader.readUInt8();
        if (header !== HANDSHAKE_HEADER) throw new Error("Handshake Error - Incorrect BTP Handhshake Request Headers");

        const opcode = reader.readUInt8();
        if (opcode !== Opcode.HandshakeManagementOpcode) throw new Error("Handshake Error - Management Opcode is incorrect");

        var versions = reader.readInt8();
        ver[0] = versions & 0xF0;
        ver[1] = versions & 0x0F;

        versions = reader.readInt8();
        ver[2] = versions & 0xF0;
        ver[3] = versions & 0x0F;

        versions = reader.readInt8();
        ver[4] = versions & 0xF0;
        ver[5] = versions & 0x0F;

        versions = reader.readInt8();
        ver[6] = versions & 0xF0;
        ver[7] = versions & 0x0F;

        const version = ver.filter(v => v !== 0)
        if(version.length == 0) throw new Error("Handshake Error - Version is incorrect");

        const attMtu = reader.readUInt16();
        const clientWindowSize = reader.readUInt8();

        return { version, attMtu, clientWindowSize };
    }

    private static decodeHeader(reader: DataReader<Endian.Little>): Header {

        const headerBits = reader.readUInt8();
        const handshakeBit = (headerBits & HeaderBits.HandshakeBit);
        const managementBit = (headerBits & HeaderBits.ManagementMsg);
        const ackMsgBit = (headerBits & HeaderBits.AckMsg);
        const endSegmentBit = (headerBits & HeaderBits.EndSegment);
        const beginSegmentBit = (headerBits & HeaderBits.BeginSegment);

        return { handshakeBit, managementBit, ackMsgBit, endSegmentBit, beginSegmentBit };
    }

    private static encodeHandshakeResponsePayload({ version, attMtu, windowSize }: BtpHandshakeResponse): ByteArray {

        const writer = new DataWriter(Endian.Little);

        writer.writeUInt8(Opcode.HandshakeManagementOpcode);
        const maxVersion = Math.max(...version); // finding out the highest version
        writer.writeUInt8(maxVersion & 0x0f); //reserved bit and final version
        writer.writeUInt16(attMtu);
        writer.writeInt8(windowSize);
        return writer.toByteArray();
    }
}