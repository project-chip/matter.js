/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    AAAARecord,
    ARecord,
    DnsCodec,
    DnsMessage,
    DnsMessageType,
    PtrRecord,
    SrvRecord,
    TxtRecord,
} from "../../src/codec/DnsCodec.js";
import { ByteArray } from "../../src/util/ByteArray.js";

const DNS_RESPONSE: DnsMessage = {
    transactionId: 0,
    messageType: DnsMessageType.Response,
    queries: [],
    answers: [
        PtrRecord("_services._dns-sd._udp.local", "_matter._tcp.local"),
        PtrRecord("_services._dns-sd._udp.local", "_ID559AF361549A9A2._sub._matter._tcp.local"),
        PtrRecord("_matter._tcp.local", "D559AF361549A9A2-0000000000000009._matter._tcp.local"),
        PtrRecord("_ID559AF361549A9A2._sub._matter._tcp.local", "D559AF361549A9A2-0000000000000009._matter._tcp.local"),
    ],
    authorities: [],
    additionalRecords: [
        ARecord("DCA632A0295F0000.local", "192.168.200.46"),
        AAAARecord("DCA632A0295F0000.local", "fe80::9580:b733:6f54:9f43"),
        SrvRecord("D559AF361549A9A2-0000000000000009._matter._tcp.local", {
            priority: 0,
            weight: 0,
            port: 5540,
            target: "DCA632A0295F0000.local",
        }),
        TxtRecord("D559AF361549A9A2-0000000000000009._matter._tcp.local", ["SII=5000", "SAI=300", "T=1"]),
    ],
};

const RESULT = ByteArray.fromHex(
    "000084000000000400000004095f7365727669636573075f646e732d7364045f756470056c6f63616c00000c0001000000780014075f6d6174746572045f746370056c6f63616c00095f7365727669636573075f646e732d7364045f756470056c6f63616c00000c000100000078002c125f4944353539414633363135343941394132045f737562075f6d6174746572045f746370056c6f63616c00075f6d6174746572045f746370056c6f63616c00000c000100000078003621443535394146333631353439413941322d30303030303030303030303030303039075f6d6174746572045f746370056c6f63616c00125f4944353539414633363135343941394132045f737562075f6d6174746572045f746370056c6f63616c00000c000100000078003621443535394146333631353439413941322d30303030303030303030303030303039075f6d6174746572045f746370056c6f63616c001044434136333241303239354630303030056c6f63616c0000010001000000780004c0a8c82e1044434136333241303239354630303030056c6f63616c00001c0001000000780010fe800000000000009580b7336f549f4321443535394146333631353439413941322d30303030303030303030303030303039075f6d6174746572045f746370056c6f63616c000021000100000078001e0000000015a41044434136333241303239354630303030056c6f63616c0021443535394146333631353439413941322d30303030303030303030303030303039075f6d6174746572045f746370056c6f63616c0000100001000000780015085349493d35303030075341493d33303003543d31",
);

const ENCODED = ByteArray.fromHex(
    "000000000003000200000001026c62075f646e732d7364045f756470056c6f63616c00000c00010f5f636f6d70616e696f6e2d6c696e6b045f746370c01c000c0001085f686f6d656b6974c037000c0001c027000c000100001194000a074b69746368656ec027c042000c00010000119400272441423645433741312d333837422d353235332d413835342d394441353236333535363746c04200002905a00000119400120004000e0099929387b033db4275a6a31b2d",
);

const DNS_DECODED = {
    transactionId: 0,
    messageType: 0,
    queries: [
        { name: "lb._dns-sd._udp.local", recordType: 12, recordClass: 1 },
        { name: "_companion-link._tcp.local", recordType: 12, recordClass: 1 },
        { name: "_homekit._tcp.local", recordType: 12, recordClass: 1 },
    ],
    answers: [
        {
            name: "_companion-link._tcp.local",
            recordType: 12,
            recordClass: 1,
            ttl: 4500,
            value: "Kitchen._companion-link._tcp.local",
        },
        {
            name: "_homekit._tcp.local",
            recordType: 12,
            recordClass: 1,
            ttl: 4500,
            value: "AB6EC7A1-387B-5253-A854-9DA52635567F._homekit._tcp.local",
        },
    ],
    authorities: [],
    additionalRecords: [
        {
            name: "",
            recordType: 41,
            recordClass: 1440,
            ttl: 4500,
            value: ByteArray.fromHex("0004000e0099929387b033db4275a6a31b2d"),
        },
    ],
};

describe("DnsCodec", () => {
    describe("decode", () => {
        it("decodes a message", () => {
            const result = DnsCodec.decode(ENCODED);

            expect(result).toBeTruthy();
            expect(result).toEqual(DNS_DECODED);

            // Checking the encoding of this decoded message will not work because message uses compressed QNames
            // that we do not support right now on encoding side
        });
    });

    describe("encode", () => {
        it("encodes a message and verify with decoding again", () => {
            const result = DnsCodec.encode(DNS_RESPONSE);

            expect(result.toHex()).toBe(RESULT.toHex());

            const decoded = DnsCodec.decode(result);

            expect(decoded).toEqual(DNS_RESPONSE);
        });

        it("encodes second message and verify with decoding again", () => {
            const result = DnsCodec.encode(DNS_DECODED);

            const decoded = DnsCodec.decode(result);

            expect(decoded).toEqual(DNS_DECODED);
        });
    });
});
