/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray, Endian } from "../util/ByteArray.js";
import { DataReader } from "../util/DataReader.js";

export interface HandshakeRequestPayload {
    isManagementOpcode: boolean,
    version: number,
    attMtu: number,
    clientWindowSize: number,
}

export interface HandshakeHeader {
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
    header: HandshakeHeader,
    payload: HandshakeRequestPayload
}

export const enum HeaderBits {
    UNUSED_BIT1 = 0b00000001, //unused bit 1
    HANDSHAKE_BIT = 0b00000010,
    MANAGEMENT_MESSAGE = 0b00000100,
    UNUSED_BIT2 = 0b00001000, //unused bit 2
    ACKNOWLEDGEMENT_MSG = 0b00010000,
    ENDING_SEGMENT = 0b00100000,
    UNUSED_BIT3 = 0b01000000, //unused bit 3
    BEGINNING_SEGMENT = 0b10000000
}

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
        const header = this.decodeHeader(reader);
        const payload = this.decodeRequestPayload(reader);

        return {
            header,
            payload
        };

    }

    private static decodeRequestPayload(reader: DataReader<Endian.Little>): HandshakeRequestPayload {

        const opcode = reader.readUInt8();
        const isManagementOpcode = (opcode & Opcode.MANAGEMENT_OPCODE) !== 0;
        const version = reader.readUInt32();
        const attMtu = reader.readInt16();
        const clientWindowSize = reader.readInt8();

        return { isManagementOpcode, version, attMtu, clientWindowSize };
    }

    private static decodeHeader(reader: DataReader<Endian.Little>): HandshakeHeader {

        const headerBits = reader.readUInt8();
        const isUnused1 = (headerBits & HeaderBits.UNUSED_BIT1) == 0;
        const isHandshake = (headerBits & HeaderBits.HANDSHAKE_BIT) !== 0;
        const isManagement = (headerBits & HeaderBits.MANAGEMENT_MESSAGE) !== 0;
        const isUnused2 = (headerBits & HeaderBits.UNUSED_BIT2) == 0;
        const isAckMsg = (headerBits & HeaderBits.ACKNOWLEDGEMENT_MSG) == 0;
        const isEndingSegment = (headerBits & HeaderBits.ENDING_SEGMENT) !== 0;
        const isUnused3 = (headerBits & HeaderBits.UNUSED_BIT3) == 0;
        const isBeginingSegment = (headerBits & HeaderBits.BEGINNING_SEGMENT) !== 0;

        return { isUnused1, isHandshake, isManagement, isUnused2, isAckMsg, isEndingSegment, isUnused3, isBeginingSegment };
    }
}