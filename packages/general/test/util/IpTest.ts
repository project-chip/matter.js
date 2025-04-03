/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ipv4ToBytes, ipv4ToNumber, ipv6ToArray, ipv6ToBytes, onSameNetwork } from "#util/Ip.js";

describe("IP", () => {
    describe("iPv4ToNumber", () => {
        it("converts an IPv4 address to a number", () => {
            const result = ipv4ToNumber("192.168.200.250");

            expect(result).equal(0xc0a8c8fa);
        });
    });

    describe("iPv4ToArray", () => {
        it("converts an IPv4 address to an Uint8 array", () => {
            const result = ipv4ToBytes("192.168.200.250");

            expect(result).deep.equal(Uint8Array.of(192, 168, 200, 250));
        });
    });

    describe("iPv6ToArray", () => {
        it("converts an IPv6 address to an Uint16 array", () => {
            const result = ipv6ToArray("fe80::e777:4f5e:c61e:7314");

            expect(result).deep.equal(Uint16Array.of(0xfe80, 0, 0, 0, 0xe777, 0x4f5e, 0xc61e, 0x7314));
        });

        it("converts ::1 to an Uint16 array", () => {
            const result = ipv6ToArray("::1");

            expect(result).deep.equal(Uint16Array.of(0, 0, 0, 0, 0, 0, 0, 1));
        });

        it("converts ffff:: to an Uint16 array", () => {
            const result = ipv6ToArray("ffff::");

            expect(result).deep.equal(Uint16Array.of(0xffff, 0, 0, 0, 0, 0, 0, 0));
        });
    });

    describe("iPv6ToByteArray", () => {
        it("converts an IPv6 address to a ByteArray", () => {
            const result = ipv6ToBytes("fe80::e777:4f5e:c61e:7314");

            expect(result).deep.equal(
                Uint8Array.of(0xfe, 0x80, 0, 0, 0, 0, 0, 0, 0xe7, 0x77, 0x4f, 0x5e, 0xc6, 0x1e, 0x73, 0x14),
            );
        });
    });

    describe("onSameNetwork", () => {
        it("returns true if two IPv4 addresses are on the same network", () => {
            const result = onSameNetwork("192.168.200.250", "192.168.200.1", "255.255.255.0");

            expect(result).equal(true);
        });

        it("returns false if two IPv4 addresses are not on the same network", () => {
            const result = onSameNetwork("192.168.200.250", "192.1.1.1", "255.255.255.0");

            expect(result).equal(false);
        });

        it("returns true if two IPv6 addresses are on the same network", () => {
            const result = onSameNetwork("fe80::e777:4f5e:c61e:7314", "fe80::e777:4f5e:1:1", "ffff:ffff:ffff:ffff::");

            expect(result).equal(true);
        });

        it("returns false if two IPv6 addresses are not on the same network", () => {
            const result = onSameNetwork("fe80::e777:4f5e:c61e:7314", "fe80:1::4f5e:1:1", "ffff:ffff:ffff:ffff::");

            expect(result).equal(false);
        });
    });
});
