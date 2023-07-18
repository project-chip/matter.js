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
    messageLength?: number,
    segmentPayload?: ByteArray
}

export interface BtpHeader {
    isHandshakeRequest: boolean,
    hasManagementOpcode: boolean,
    hasAckNumber: boolean,
    isEndingSegment: boolean,
    isContinuingSegment: boolean,
    isBeginningSegment: boolean
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
    ContinuingSegment = 0b00000010,
    BeginSegment = 0b00000001
}

export const enum BtpOpcode {
    HandshakeManagementOpcode = 0x6c,
}

const HANDSHAKE_HEADER = 0b01100101;

export class BtpCodec {

    static decodeBtpHandshakeRequest(data: ByteArray): BtpHandshakeRequest {
        const reader = new DataReader(data, Endian.Little);
        return this.decodeHandshakeRequestPayload(reader);
    }

    static decodeBtpPacket(data: ByteArray): BtpPacket {
        const reader = new DataReader(data, Endian.Little);

        const header = this.decodeBtpPacketHeader(reader);

        return {
            header,
            payload: this.decodeBtpPacketPayload(reader, header)
        };
    }

    static encodeBtpPacket({ header, payload }: BtpPacket): ByteArray {
        return ByteArray.concat(
            this.encodeBtpPacketHeader(header),
            this.encodeBtpPacketPayload(header, payload)
        )
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

    private static decodeBtpPacketPayload(reader: DataReader<Endian.Little>, header: BtpHeader): BtpPacketPayload {
        const { hasAckNumber, isBeginningSegment } = header;
        const ackNumber = hasAckNumber ? reader.readUInt8() : undefined;
        const sequenceNumber = reader.readUInt8();
        const messageLength = isBeginningSegment ? reader.readUInt16() : undefined;
        const segmentPayload = reader.getRemainingBytes();

        return { ackNumber, sequenceNumber, messageLength, segmentPayload };
    }

    private static encodeBtpPacketPayload({ hasAckNumber, isBeginningSegment }: BtpHeader, { ackNumber, sequenceNumber, messageLength, segmentPayload }: BtpPacketPayload): ByteArray {
        const writer = new DataWriter(Endian.Little);

        if (!hasAckNumber && ackNumber !== undefined) {
            throw new Error("Ack number shouldn't be set because header flag is not set");
        }
        if (hasAckNumber && ackNumber === undefined) {
            throw new Error("Ack number needs to be set because header flag is set");
        }
        if (ackNumber !== undefined) {
            writer.writeUInt8(ackNumber);
        }

        writer.writeUInt8(sequenceNumber);

        if (!isBeginningSegment && messageLength !== undefined) {
            throw new Error("Message Length shouldn't be set because the package is not a beginning segment");
        }
        if (isBeginningSegment && messageLength == undefined) {
            throw new Error("Message Length needs to be set because paket is a beginning segment");
        }
        if (messageLength !== undefined) {
            writer.writeUInt16(messageLength);
        }

        if (segmentPayload !== undefined) {
            writer.writeByteArray(segmentPayload);
        }
        return writer.toByteArray();
    }

    private static decodeHandshakeRequestPayload(reader: DataReader<Endian.Little>): BtpHandshakeRequest {
        const header = reader.readUInt8();
        const opcode = reader.readUInt8();
        let version = reader.readUInt8();

        if (header !== HANDSHAKE_HEADER) {
            throw new Error("BTPHandshake Request Headers is incorrect");
        }
        if (opcode !== BtpOpcode.HandshakeManagementOpcode) {
            throw new Error("Management Opcode for BTPHandshake Request is incorrect");
        }

        const ver: number[] = [];
        ver[0] = (version & 0xF0) >> 4;
        ver[1] = version & 0x0F;

        version = reader.readUInt8();
        ver[2] = (version & 0xF0) >> 4;
        ver[3] = version & 0x0F;

        version = reader.readUInt8();
        ver[4] = (version & 0xF0) >> 4;
        ver[5] = version & 0x0F;

        version = reader.readUInt8();
        ver[6] = (version & 0xF0) >> 4;
        ver[7] = version & 0x0F;

        const versions = ver.filter(v => v !== 0)
        if (versions.length == 0) {
            throw new Error("No valid version provided");
        }

        const attMtu = reader.readUInt16();
        const clientWindowSize = reader.readUInt8();

        return { versions, attMtu, clientWindowSize };
    }

    private static decodeBtpPacketHeader(reader: DataReader<Endian.Little>): BtpHeader {
        const headerBits = reader.readUInt8();
        const isHandshakeRequest = (headerBits & BtpHeaderBits.HandshakeBit) !== 0;
        const hasManagementOpcode = (headerBits & BtpHeaderBits.ManagementMsg) !== 0;
        const hasAckNumber = (headerBits & BtpHeaderBits.AckMsg) !== 0;
        const isEndingSegment = (headerBits & BtpHeaderBits.EndSegment) !== 0;
        const isContinuingSegment = (headerBits & BtpHeaderBits.ContinuingSegment) !== 0;
        const isBeginningSegment = (headerBits & BtpHeaderBits.BeginSegment) !== 0;

        if (hasManagementOpcode) {
            throw new Error("Management Opcode for BTPHandshake Request is not expected");
        }

        return { isHandshakeRequest, hasManagementOpcode, hasAckNumber, isEndingSegment, isContinuingSegment, isBeginningSegment };
    }

    private static encodeBtpPacketHeader({ isHandshakeRequest, hasManagementOpcode, hasAckNumber, isEndingSegment, isContinuingSegment, isBeginningSegment }: BtpHeader): ByteArray {
        const writer = new DataWriter(Endian.Little);

        if (isHandshakeRequest || hasManagementOpcode) {
            throw new Error("Please use the specific methods to encode a Handshake packet");
        }

        const header = (isHandshakeRequest ? BtpHeaderBits.HandshakeBit : 0)
            | (hasManagementOpcode ? BtpHeaderBits.ManagementMsg : 0)
            | (hasAckNumber ? BtpHeaderBits.AckMsg : 0)
            | (isEndingSegment ? BtpHeaderBits.EndSegment : 0)
            | (isContinuingSegment ? BtpHeaderBits.ContinuingSegment : 0)
            | (isBeginningSegment ? BtpHeaderBits.BeginSegment : 0)

        writer.writeUInt8(header);
        return writer.toByteArray();
    }
}
