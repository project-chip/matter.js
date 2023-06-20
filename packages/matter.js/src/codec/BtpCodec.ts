/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray, Endian } from "../util/ByteArray.js";
import { DataReader } from "../util/DataReader.js";
import { DataWriter } from "../util/DataWriter.js";

export interface HandshakeRequest {
    versions: ByteArray,
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

export interface HandshakeResponse {
    finalVersion: number,
    attMtu: number,
    windowSize: number
}

export interface PacketPayload {
    ackNumber?: number,
    sequenceNumber: number,
    msgLength?: number,
    segmentPayload?: ByteArray
}

export interface Packet {
    header: Header,
    payload: PacketPayload
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

export class BtpCodec {

    static decodeHandshakeRequest(data: ByteArray): HandshakeRequest {
        const reader = new DataReader(data, Endian.Little);
        return this.decodeRequestPayload(reader);
    }

    static decodePacket(data: ByteArray): Packet {
        const reader = new DataReader(data, Endian.Little);

        return {
            header: this.decodeHeader(reader),
            payload: this.decodePacketPayload(reader)
        };

    }

    static encodeHandshakeResponse({ finalVersion, attMtu, windowSize }: HandshakeResponse): ByteArray {

        return ByteArray.concat(
            new Uint8Array(HANDSHAKE_HEADER),
            this.encodeResponsePayload({ finalVersion, attMtu, windowSize })
        );
    }

    private static decodePacketPayload(reader: DataReader<Endian.Little>): PacketPayload {

        const ackNumber = reader.readUInt8();
        const sequenceNumber = reader.readUInt8();
        const msgLength = reader.readUInt16();
        const segmentPayload = reader.getRemainingBytes();

        return { ackNumber, sequenceNumber, msgLength, segmentPayload };
    }


    private static decodeRequestPayload(reader: DataReader<Endian.Little>): HandshakeRequest {

        const header = reader.readUInt8();
        if (header !== HANDSHAKE_HEADER) throw new Error("Error in BTP Handhshake Request Headers");

        const opcode = reader.readUInt8();
        const isManagementOpcode = (opcode & Opcode.HandshakeManagementOpcode) !== 0;

        if (isManagementOpcode) throw new Error("Handshake Error - Management Opcode is incorrect");

        const version = reader.readUInt32();
        if (version == 0) throw new Error("BTP Handshake Error - Version is 0");

        const versions = reader.readByteArray(version);
        const attMtu = reader.readUInt16();
        const clientWindowSize = reader.readUInt8();

        return { versions, attMtu, clientWindowSize };
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

    private static encodeResponsePayload({ finalVersion, attMtu, windowSize }: HandshakeResponse): ByteArray {

        const writer = new DataWriter(Endian.Little);

        // how to add header, finalversion (4 bits) and reserved (4 bits) bits here?
        writer.writeUInt16(attMtu);
        writer.writeInt8(windowSize);
        return writer.toByteArray();
    }
}