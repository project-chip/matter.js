/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as assert from "assert";
import { BtpCodec } from "../../src/codec/BtpCodec.js";
import { ByteArray } from "../../src/util/ByteArray.js";

const ENCODED_HANDSHAKE_REQUEST = ByteArray.fromHex("656c04000000b90006");
const ENCODED_HANDSHAKE_RESPONSE = ByteArray.fromHex("656c04000106");
const ENCODED_PAYLOAD = ByteArray.fromHex("0d000044000400000049b6a902a9a5773dbb8cafd90120a7c7000015300120cb0c120a3499327ddaec4ebe60889df0f1bf80d8a4dea1dd6ffef16ef58ecafe25028e17240300280418");

const DECODED_HANDSHAKE_REQUEST = {
    versions: [4], // 00000040
    attMtu: 185, // 00b9
    clientWindowSize: 6,
}

const DECODED_HANDSHAKE_RESPONSE = {
    version: 4,
    attMtu: 256,
    windowSize: 6,
}

const DECODED_PAYLOAD = {
    header: {
        handshakeBit: 0,
        managementBit: 0,
        ackMsgBit: 1,
        endSegmentBit: 1,
        beginSegmentBit: 1
    },
    payload: {
        ackNumber: 0,
        sequenceNumber: 68, // 4f
        msgLength: 1024, // 0400
        segmentPayload: ByteArray.fromHex("00000049b6a902a9a5773dbb8cafd90120a7c7000015300120cb0c120a3499327ddaec4ebe60889df0f1bf80d8a4dea1dd6ffef16ef58ecafe25028e17240300280418"),
    }
}

describe("MessageCodec", () => {
    describe("decode", () => {
        it("decodes a message 1", () => {
            const result = BtpCodec.decodeBtpHandshakeRequest(ENCODED_HANDSHAKE_REQUEST);

            assert.deepEqual(result, DECODED_HANDSHAKE_REQUEST);
        });

        it("decodes a message 2", () => {
            const result = BtpCodec.decodeBtpPacket(ENCODED_PAYLOAD);

            assert.deepEqual(result, DECODED_PAYLOAD);
        });
    });

    // describe("encode", () => {
    //     it("encodes a message", () => {
    //         const result = BtpCodec.encodeBtpHandshakeResponse(DECODED_HANDSHAKE_RESPONSE);
    //
    //         assert.deepEqual(result, ENCODED_HANDSHAKE_RESPONSE);
    //     });
    // });
});
