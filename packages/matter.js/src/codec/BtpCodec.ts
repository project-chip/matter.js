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
    handshakeBit: boolean,
    managementBit: boolean,
    ackMsgBit: boolean,
    endSegmentBit: boolean,
    beginSegmentBit: boolean
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

        const writer = new DataWriter(Endian.Little);
        writer.writeUInt8(HANDSHAKE_HEADER);
        writer.writeUInt8(BtpOpcode.HandshakeManagementOpcode);
        writer.writeUInt8(version & 0x0f); //reserved bit and final version
        writer.writeUInt16(attMtu);
        writer.writeUInt8(windowSize);
        return writer.toByteArray();
    }

    private static decodeBtpPacketPayload(reader: DataReader<Endian.Little>): BtpPacketPayload {

        const ackNumber = reader.readUInt8();
        const sequenceNumber = reader.readUInt8();
        const msgLength = reader.readUInt16();
        const segmentPayload = reader.getRemainingBytes();

        return { ackNumber, sequenceNumber, msgLength, segmentPayload };
    }

    private static decodeRequestPayload(reader: DataReader<Endian.Little>): BtpHandshakeRequest {

        const ver = [];
        const header = reader.readUInt8();
        const opcode = reader.readUInt8();
        let version = reader.readUInt8();

        if (header !== HANDSHAKE_HEADER) throw new Error("BTPHandshake Request Headers is incorrect");
        if (opcode !== BtpOpcode.HandshakeManagementOpcode) throw new Error("Management Opcode for BTPHandshake Request is incorrect");

        ver[0] = version & 0xF0;
        ver[1] = version & 0x0F;

        version = reader.readUInt8();
        ver[2] = version & 0xF0;
        ver[3] = version & 0x0F;

        version = reader.readUInt8();
        ver[4] = version & 0xF0;
        ver[5] = version & 0x0F;

        version = reader.readUInt8();
        ver[6] = version & 0xF0;
        ver[7] = version & 0x0F;

        const versions = ver.filter(v => v !== 0)
        if (versions.length == 0) throw new Error("No valid version provided");

        const attMtu = reader.readUInt16();
        const clientWindowSize = reader.readUInt8();

        return { versions, attMtu, clientWindowSize };
    }

    private static decodeHeader(reader: DataReader<Endian.Little>): BtpHeader {

        const headerBits = reader.readUInt8();
        const handshakeBit = (headerBits & BtpHeaderBits.HandshakeBit) !== 0;
        const managementBit = (headerBits & BtpHeaderBits.ManagementMsg) !== 0;
        const ackMsgBit = (headerBits & BtpHeaderBits.AckMsg) !== 0;
        const endSegmentBit = (headerBits & BtpHeaderBits.EndSegment) !== 0;
        const beginSegmentBit = (headerBits & BtpHeaderBits.BeginSegment) !== 0;

        const managementOpcode = reader.readUInt8();
        if (managementBit && managementOpcode == 0) throw new Error("Opcode expected but not provided");
        if (!managementBit && managementOpcode !== 0) throw new Error("Opcode not expected but provided");

        return { handshakeBit, managementBit, ackMsgBit, endSegmentBit, beginSegmentBit };
    }
}