/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray, Endian } from "../util/ByteArray.js";

export interface BTPHandshakeRequest {
    sourceBits: SourceBits,
    managementOpcode?: number,
    version: ByteArray,
    attMtu: ByteArray,
    clientWindowSize: number,
}

export interface BTPHandshakeResponse {
    sourceBits: SourceBits,
    managementOpcode?: string,
    reserved: Reserved,
    finalProtocolVersion: ProtocolVersion,
    attMtu: ByteArray,
    selectedWindowSize: number,
}

export const enum SourceBits {
    UNUSED_BIT1 = 0, //unused bit 1
    HANDSHAKE_BIT = 1,
    MANAGEMENT_MESSAGE = 1,
    UNUSED_BIT2 = 0, //unused bit 2
    ACKNOWLEDGEMENT_MSG = 0,
    ENDING_SEGMENT = 1,
    UNUSED_BIT3 = 0, //unused bit 3
    BEGINNING_SEGMENT = 1
}

export const enum Reserved {
    RESERVE_BIT = 0
}

export const enum ProtocolVersion {
    FINAL_PROTOCOL_VERSION = 4
}

export class BtpCodec {
    static decodeRequest(data: ByteArray): BTPHandshakeRequest {
        // const reader = new DataReader(data, Endian.Little);
        // const header = this.decodePacketHeader(reader);

        // return {
        //     header,
        //     bytes: reader.getRemainingBytes(),
        // };
    }

    static encodeResponse({ response }: BTPHandshakeResponse): ByteArray {
        // return {
        //     header: packetHeader,
        //     bytes: ByteArray.concat(
        //         this.encodePayloadHeader(payloadHeader),
        //         payload,
        //     ),
        // };
    }

}