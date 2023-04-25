/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as assert from "assert";
import { MessageCodec } from "../../src/codec/MessageCodec.js";
import { NodeId } from "../../src/datatype/NodeId.js";
import { ByteArray } from "../../src/util/ByteArray.js";

const ENCODED = ByteArray.fromHex("040000000a4ff2177ea0c8a7cb6a63520520d3640000153001204715a406c6b0496ad52039e347db8528cb69a1cb2fce6f2318552ae65e103aca250233dc240300280435052501881325022c011818");

const DECODED = {
    packetHeader: {
        sessionId: 0,
        sessionType: 0,
        sourceNodeId: new NodeId(BigInt("5936706156730294398")),
        messageId: 401755914,
        destGroupId: undefined,
        destNodeId: undefined
    },
    payloadHeader: {
        protocolId: 0,
        isInitiatorMessage: true,
        exchangeId: 25811,
        messageType: 0x20,
        requiresAck: true,
        ackedMessageId: undefined,
    },
    payload: ByteArray.fromHex("153001204715a406c6b0496ad52039e347db8528cb69a1cb2fce6f2318552ae65e103aca250233dc240300280435052501881325022c011818"),
};

const ENCODED_2 = ByteArray.fromHex("01000000218712797ea0c8a7cb6a63520621d36400000a4ff217153001204715a406c6b0496ad52039e347db8528cb69a1cb2fce6f2318552ae65e103aca3002201783302d95a4a9fb0decb8fdd6564b90a957681459aeee069961bea61d7b247125039d8935042501e80330022099f813dd41bd081a1c63e811828f0662594bca89cd9d4ed26f7427fdb2a027361835052501881325022c011818");

const DECODED_2 = {
    packetHeader: {
        sessionId: 0,
        sessionType: 0,
        sourceNodeId: undefined,
        messageId: 2031257377,
        destGroupId: undefined,
        destNodeId: new NodeId(BigInt("5936706156730294398")),
    },
    payloadHeader: {
        protocolId: 0,
        isInitiatorMessage: false,
        exchangeId: 25811,
        messageType: 0x21,
        requiresAck: true,
        ackedMessageId: 401755914,
    },
    payload: ByteArray.fromHex("153001204715a406c6b0496ad52039e347db8528cb69a1cb2fce6f2318552ae65e103aca3002201783302d95a4a9fb0decb8fdd6564b90a957681459aeee069961bea61d7b247125039d8935042501e80330022099f813dd41bd081a1c63e811828f0662594bca89cd9d4ed26f7427fdb2a027361835052501881325022c011818"),
};

describe("MessageCodec", () => {
    describe("decode", () => {
        it("decodes a message", () => {
            const result = MessageCodec.decodePayload(MessageCodec.decodePacket(ENCODED));

            assert.deepEqual(result, DECODED);
        });

        it("decodes a message 2", () => {
            const result = MessageCodec.decodePayload(MessageCodec.decodePacket(ENCODED_2));

            assert.deepEqual(result, DECODED_2);
        });
    });

    describe("encode", () => {
        it("encodes a message", () => {
            const result = MessageCodec.encodePacket(MessageCodec.encodePayload(DECODED));

            assert.deepEqual(result, ENCODED);
        });

        it("encodes a message 2", () => {
            const result = MessageCodec.encodePacket(MessageCodec.encodePayload(DECODED_2));

            assert.deepEqual(result, ENCODED_2);
        });
    });
});
