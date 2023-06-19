/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray, Endian } from "../util/ByteArray.js";
import { DataReader } from "../util/DataReader.js";
import { DataWriter } from "../util/DataWriter.js";

export interface HandshakeRequestPayload {
    isManagementOpcode: boolean,
    version: number,
    attMtu: number,
    clientWindowSize: number,
}

export interface Header {
    isUnused1: boolean,
    isHandshake: boolean,
    isManagement: boolean,
    isUnused2: boolean,
    isAckMsg: boolean,
    isEndingSegment: boolean,
    isUnused3: boolean,
    isBeginingSegment: boolean
}

export interface HandshakeRequest {
    header: Header,
    payload: HandshakeRequestPayload
}

export interface HandshakeResponsePayload {
    isManagementOpcode: boolean,
    isReserved: boolean,
    isFinalVersion: boolean,
    attMtu: number,
    windowSize: number
}

export interface HandshakeResponse {
    header: Header,
    payload: HandshakeResponsePayload
}

export interface PacketPayload {
    isManagementOpcode: boolean,
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
    UNUSED_BIT = 0b00000000, //unused bit
    HANDSHAKE_BIT = 0b00000010,
    MANAGEMENT_MESSAGE = 0b00000100,
    ACKNOWLEDGEMENT_MSG = 0b00000000,
    ENDING_SEGMENT = 0b00100000,
    BEGINNING_SEGMENT = 0b10000000
}

const HEADER = 0b01100101;

export const enum Opcode {
    MANAGEMENT_OPCODE = 0b01101100, // 0x6c - binary representation
}

export const enum Reserved {
    RESERVE_BIT = 0b00000000,
}

export const enum ProtocolVersion {
    FINAL_PROTOCOL_VERSION = 0b00000100,
}

export class BtpCodec {

    static decodeHandshakeRequest(data: ByteArray): HandshakeRequest {
        const reader = new DataReader(data, Endian.Little);

        return {
            header: this.decodeHeader(reader),
            payload: this.decodeRequestPayload(reader)
        };

    }

    static decodePacket(data: ByteArray): Packet {
        const reader = new DataReader(data, Endian.Little);

        return {
            header: this.decodeHeader(reader),
            payload: this.decodeRacketPayload(reader)
        };

    }

    static encodeHandshakeResponse({ header, payload }: HandshakeResponse): ByteArray {
        
        return ByteArray.concat(
            this.encodeHeader(header),
            this.encodeResponsePayload(payload)
        );
    }

    private static decodeRacketPayload(reader: DataReader<Endian.Little>): PacketPayload {

        const opcode = reader.readUInt8();
        const isManagementOpcode = (opcode & Opcode.MANAGEMENT_OPCODE) !== 0;

        if (opcode !== Opcode.MANAGEMENT_OPCODE) throw new Error("Handshake Error - Management Opcode is incorrect");

        const ackNumber = reader.readUInt8();
        const sequenceNumber = reader.readInt8();
        const msgLength = reader.readInt16();
        const segmentPayload = reader.getRemainingBytes();

        return { isManagementOpcode, ackNumber, sequenceNumber, msgLength, segmentPayload };
    }


    private static decodeRequestPayload(reader: DataReader<Endian.Little>): HandshakeRequestPayload {

        const opcode = reader.readUInt8();
        const isManagementOpcode = (opcode & Opcode.MANAGEMENT_OPCODE) !== 0;

        if (opcode !== Opcode.MANAGEMENT_OPCODE) throw new Error("Handshake Error - Management Opcode is incorrect");

        const version = reader.readUInt32();
        const attMtu = reader.readInt16();
        const clientWindowSize = reader.readInt8();

        return { isManagementOpcode, version, attMtu, clientWindowSize };
    }

    private static decodeHeader(reader: DataReader<Endian.Little>): Header {

        const headerBits = reader.readUInt8();
        const isUnused1 = (headerBits & HeaderBits.UNUSED_BIT) == 0;
        const isHandshake = (headerBits & HeaderBits.HANDSHAKE_BIT) !== 0;
        const isManagement = (headerBits & HeaderBits.MANAGEMENT_MESSAGE) !== 0;
        const isUnused2 = (headerBits & HeaderBits.UNUSED_BIT) == 0;
        const isAckMsg = (headerBits & HeaderBits.ACKNOWLEDGEMENT_MSG) == 0;
        const isEndingSegment = (headerBits & HeaderBits.ENDING_SEGMENT) !== 0;
        const isUnused3 = (headerBits & HeaderBits.UNUSED_BIT) == 0;
        const isBeginingSegment = (headerBits & HeaderBits.BEGINNING_SEGMENT) !== 0;

        if (headerBits !== HEADER) throw new Error("Error in BTP Handhshake Request Headers");

        return { isUnused1, isHandshake, isManagement, isUnused2, isAckMsg, isEndingSegment, isUnused3, isBeginingSegment };
    }

    private static encodeResponsePayload({ isManagementOpcode, isReserved, isFinalVersion, attMtu, windowSize }: HandshakeResponsePayload): ByteArray {

        const writer = new DataWriter(Endian.Little);
        const flags = (isManagementOpcode ? Opcode.MANAGEMENT_OPCODE : 0) | (isReserved ? Reserved.RESERVE_BIT : 0) | (isFinalVersion ? ProtocolVersion.FINAL_PROTOCOL_VERSION : 0);

        writer.writeUInt8(flags);
        writer.writeUInt16(attMtu);
        writer.writeInt8(windowSize);
        return writer.toByteArray();
    }

    private static encodeHeader({ isUnused1, isHandshake, isManagement, isUnused2, isAckMsg, isEndingSegment, isUnused3, isBeginingSegment }: Header): ByteArray {

        const writer = new DataWriter(Endian.Little);
        const header = (isUnused1 ? HeaderBits.UNUSED_BIT : 0) | (isHandshake ? HeaderBits.HANDSHAKE_BIT : 0) | (isManagement ? HeaderBits.MANAGEMENT_MESSAGE : 0)
            | (isUnused2 ? HeaderBits.UNUSED_BIT : 0) | (isAckMsg ? HeaderBits.ACKNOWLEDGEMENT_MSG : 0) | (isEndingSegment ? HeaderBits.ENDING_SEGMENT : 0)
            | (isUnused3 ? HeaderBits.UNUSED_BIT : 0) | (isBeginingSegment ? HeaderBits.BEGINNING_SEGMENT : 0);

        writer.writeUInt8(header);
        return writer.toByteArray();
    }
}