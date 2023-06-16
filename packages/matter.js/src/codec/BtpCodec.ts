/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray, Endian } from "../util/ByteArray.js";

export interface BTPHandshakeRequest {
    sourceBits: SourceBits,
    managementOpcode?: string,
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
    U1 = 0, //unused bit 1
    H = 1,
    M = 1,
    U2 = 0, //unused bit 2
    A = 0,
    E = 1,
    U3 = 0, //unused bit 3
    B = 1
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