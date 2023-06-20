/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray, Endian } from "../util/ByteArray.js";
import { DataReader } from "../util/DataReader.js";
import { DataWriter } from "../util/DataWriter.js";

export interface BtpHandshakeRequest {
    versions: number[],
    attMtu: number,
    clientWindowSize: number,
}

export interface BtpHandshakeResponse {
    version: number,
    attMtu: number,
    windowSize: number
}

export interface BtpPacketPayload {
    ackNumber?: number,
    sequenceNumber: number,
    msgLength?: number,
    segmentPayload?: ByteArray
}

export interface BtpHeader {
    handshakeBit: number,
    managementBit: number,
    ackMsgBit: number,
    endSegmentBit: number,
    beginSegmentBit: number
}

export interface BtpPacket {
    header: BtpHeader,
    payload: BtpPacketPayload
}

export const enum BtpHeaderBits {
    HandshakeBit = 0b01000000,
    ManagementMsg = 0b00100000,
    AckMsg = 0b00001000,
    EndSegment = 0b00000100,
    BeginSegment = 0b00000001
}

export const enum BtpOpcode {
    HandshakeManagementOpcode = 0x6c,
}

const HANDSHAKE_HEADER = 0b01100101;

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
            new ByteArray(HANDSHAKE_HEADER),
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
        if (opcode !== BtpOpcode.HandshakeManagementOpcode) throw new Error("Handshake Error - Management Opcode is incorrect");

        const ver: number[] = [];
        let version = reader.readInt8();
        ver[0] = version & 0xF0;
        ver[1] = version & 0x0F;

        version = reader.readInt8();
        ver[2] = version & 0xF0;
        ver[3] = version & 0x0F;

        version = reader.readInt8();
        ver[4] = version & 0xF0;
        ver[5] = version & 0x0F;

        version = reader.readInt8();
        ver[6] = version & 0xF0;
        ver[7] = version & 0x0F;

        const versions = ver.filter(v => v !== 0)
        if (versions.length == 0) throw new Error("Handshake Error - Version is incorrect");

        const attMtu = reader.readUInt16();
        const clientWindowSize = reader.readUInt8();

        return { versions, attMtu, clientWindowSize };
    }

    private static decodeHeader(reader: DataReader<Endian.Little>): BtpHeader {

        const headerBits = reader.readUInt8();
        const handshakeBit = (headerBits & BtpHeaderBits.HandshakeBit) >> 6;
        const managementBit = (headerBits & BtpHeaderBits.ManagementMsg) >> 5;
        const ackMsgBit = (headerBits & BtpHeaderBits.AckMsg) >> 3;
        const endSegmentBit = (headerBits & BtpHeaderBits.EndSegment) >> 2;
        const beginSegmentBit = (headerBits & BtpHeaderBits.BeginSegment);

        const managementOpcode = reader.readInt8();
        if (!managementBit && managementOpcode !== 0) throw new Error("Btp PDU Error - Opcode is incorrect");

        return { handshakeBit, managementBit, ackMsgBit, endSegmentBit, beginSegmentBit };
    }

    private static encodeHandshakeResponsePayload({ version, attMtu, windowSize }: BtpHandshakeResponse): ByteArray {

        const writer = new DataWriter(Endian.Little);

        writer.writeUInt8(BtpOpcode.HandshakeManagementOpcode);
        writer.writeUInt8(version & 0x0f); //reserved bit and final version
        writer.writeUInt16(attMtu);
        writer.writeInt8(windowSize);
        return writer.toByteArray();
    }
}