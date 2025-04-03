/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
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
} from "#codec/DnsCodec.js";
import { Bytes, Endian } from "#util/Bytes.js";
import { DataReader } from "#util/index.js";

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
// Tweak the DNS_RESPONSE to make it easier to compare with the result
DNS_RESPONSE.answers.forEach(answer => {
    if (answer.forInstance === undefined) delete answer.forInstance;
});
DNS_RESPONSE.additionalRecords.forEach(additional => {
    if (additional.forInstance === undefined) delete additional.forInstance;
});

const RESULT = Bytes.fromHex(
    "000084000000000400000004095f7365727669636573075f646e732d7364045f756470056c6f63616c00000c0001000000780014075f6d6174746572045f746370056c6f63616c00095f7365727669636573075f646e732d7364045f756470056c6f63616c00000c000100000078002c125f4944353539414633363135343941394132045f737562075f6d6174746572045f746370056c6f63616c00075f6d6174746572045f746370056c6f63616c00000c000100000078003621443535394146333631353439413941322d30303030303030303030303030303039075f6d6174746572045f746370056c6f63616c00125f4944353539414633363135343941394132045f737562075f6d6174746572045f746370056c6f63616c00000c000100000078003621443535394146333631353439413941322d30303030303030303030303030303039075f6d6174746572045f746370056c6f63616c001044434136333241303239354630303030056c6f63616c0000010001000000780004c0a8c82e1044434136333241303239354630303030056c6f63616c00001c0001000000780010fe800000000000009580b7336f549f4321443535394146333631353439413941322d30303030303030303030303030303039075f6d6174746572045f746370056c6f63616c000021000100000078001e0000000015a41044434136333241303239354630303030056c6f63616c0021443535394146333631353439413941322d30303030303030303030303030303039075f6d6174746572045f746370056c6f63616c0000100001000000780015085349493d35303030075341493d33303003543d31",
);

const ENCODED = Bytes.fromHex(
    "000000000003000200000001026c62075f646e732d7364045f756470056c6f63616c00000c00010f5f636f6d70616e696f6e2d6c696e6b045f746370c01c000c0001085f686f6d656b6974c037000c0001c027000c000100001194000a074b69746368656ec027c042000c00010000119400272441423645433741312d333837422d353235332d413835342d394441353236333535363746c04200002905a00000119400120004000e0099929387b033db4275a6a31b2d",
);

const DNS_DECODED = {
    transactionId: 0,
    messageType: 0,
    queries: [
        { name: "lb._dns-sd._udp.local", recordType: 12, recordClass: 1, uniCastResponse: false },
        { name: "_companion-link._tcp.local", recordType: 12, recordClass: 1, uniCastResponse: false },
        { name: "_homekit._tcp.local", recordType: 12, recordClass: 1, uniCastResponse: false },
    ],
    answers: [
        {
            name: "_companion-link._tcp.local",
            recordType: 12,
            recordClass: 1,
            ttl: 4500,
            value: "Kitchen._companion-link._tcp.local",
            flushCache: false,
        },
        {
            name: "_homekit._tcp.local",
            recordType: 12,
            recordClass: 1,
            ttl: 4500,
            value: "AB6EC7A1-387B-5253-A854-9DA52635567F._homekit._tcp.local",
            flushCache: false,
        },
    ],
    authorities: [],
    additionalRecords: [
        {
            name: "",
            recordType: 41,
            recordClass: 1440,
            ttl: 4500,
            value: Bytes.fromHex("0004000e0099929387b033db4275a6a31b2d"),
            flushCache: false,
        },
    ],
};

const QNameTestData: { testCase: string; data: string; offset?: number; result?: string; error?: string }[] = [
    { testCase: "one item", data: "\x04test\x00", result: "test" },
    { testCase: "two items", data: "\x04test\x03com\x00", result: "test.com" },
    { testCase: "multiple items", data: "\x04this\x02is\x01a\x04test\x00", result: "this.is.a.test" },
    {
        testCase: "multiple items with pointers",
        data: "\x03abc\x02is\x01a\x04test\x00\x04this\xc0\x04",
        offset: 15,
        result: "this.is.a.test",
    },
    {
        testCase: "multiple items with pointers and loop",
        data: "\x04this\xc0\x00\x03abc\x02is\x01a\x04test\xc0\x00",
        offset: 7,
        error: "QNAME pointer loop detected. Index 0 visited twice.",
    },
    {
        testCase: "multiple items with pointers and loop",
        data: "\x04this\xc0\x05\x03abc\x02is\x01a\x04test\xc0\x00",
        offset: 7,
        error: "QNAME pointer loop detected. Index 5 visited twice.",
    },
    {
        testCase: "data truncated before the end #1",
        data: "\x04test",
        error: "QNAME item length 4 exceeds remaining bytes.",
    },
    {
        testCase: "data truncated before the end #2",
        data: "\x02",
        error: "QNAME item length 2 exceeds remaining bytes.",
    },
    {
        testCase: "data truncated before the end #3",
        data: "\xc0",
        error: "QNAME pointer exceeds remaining bytes.",
    },
    {
        testCase: "Reference to 0 byte length string", // Truncated before the end (but seemingly valid in case of error)
        data: "\x00\xc0\x00",
        offset: 1,
        result: undefined,
    },
    {
        testCase: "Infinite recursion",
        data: "\x04test\xc0\x00",
        error: "QNAME pointer loop detected. Index 0 visited twice.",
    },
    {
        testCase: "Infinite recursion by referencing own element (inside the stream)",
        data: "\x04test\xc0\x05",
        error: "QNAME pointer loop detected. Index 5 visited twice.",
    },
    {
        testCase: "Infinite recursion by referencing own element at the start",
        data: "\xc0\x00",
        error: "QNAME pointer loop detected. Index 0 visited twice.",
    },
    {
        testCase: "Reference that goes forward instead of backward",
        data: "\x04test\xc0\x07",
        error: "Invalid compressed QNAME pointer pointing to out of bounds index.",
    },
];

describe("DnsCodec", () => {
    describe("decode", () => {
        it("decodes a message", () => {
            const result = DnsCodec.decode(ENCODED);

            expect(result).ok;
            expect(result).deep.equal(DNS_DECODED);

            // Checking the encoding of this decoded message will not work because message uses compressed QNames
            // that we do not support right now on encoding side
        });
    });

    describe("encode", () => {
        it("encodes a message and verify with decoding again", () => {
            const result = DnsCodec.encode(DNS_RESPONSE);

            expect(Bytes.toHex(result)).equal(Bytes.toHex(RESULT));

            const decoded = DnsCodec.decode(result);

            expect(decoded).deep.equal(DNS_RESPONSE);
        });

        it("encodes second message and verify with decoding again", () => {
            const result = DnsCodec.encode(DNS_DECODED);

            const decoded = DnsCodec.decode(result);

            expect(decoded).deep.equal(DNS_DECODED);
        });
    });

    describe("decode QName", () => {
        for (const { testCase, data, offset, result, error } of QNameTestData) {
            it(`decodes ${testCase}`, () => {
                const dataBytes = Uint8Array.from(data, x => x.charCodeAt(0));
                const reader = new DataReader(dataBytes, Endian.Big);
                if (offset !== undefined) {
                    reader.offset = offset;
                }
                if (result !== undefined) {
                    const decoded = DnsCodec.decodeQName(reader, dataBytes);
                    expect(decoded).equal(result);
                } else if (error !== undefined) {
                    expect(() => DnsCodec.decodeQName(reader, dataBytes)).to.throw(error);
                }
            });
        }
    });
});
