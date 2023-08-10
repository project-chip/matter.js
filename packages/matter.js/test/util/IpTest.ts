/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { iPv4ToNumber, iPv6ToArray, onSameNetwork } from "../../src/util/Ip.js";

describe("IP", () => {
    describe("iPv4ToNumber", () => {
        it("converts an IPv4 address to a number", () => {
            const result = iPv4ToNumber("192.168.200.250");

            expect(result).toBe(0xc0a8c8fa);
        });
    });

    describe("iPv6ToArray", () => {
        it("converts an IPv6 address to an Uint16 array", () => {
            const result = iPv6ToArray("fe80::e777:4f5e:c61e:7314");

            expect(result).toEqual(Uint16Array.of(0xfe80, 0, 0, 0, 0xe777, 0x4f5e, 0xc61e, 0x7314));
        });

        it("converts ::1 to an Uint16 array", () => {
            const result = iPv6ToArray("::1");

            expect(result).toEqual(Uint16Array.of(0, 0, 0, 0, 0, 0, 0, 1));
        });

        it("converts ffff:: to an Uint16 array", () => {
            const result = iPv6ToArray("ffff::");

            expect(result).toEqual(Uint16Array.of(0xffff, 0, 0, 0, 0, 0, 0, 0));
        });
    });

    describe("onSameNetwork", () => {
        it("returns true if two IPv4 addresses are on the same network", () => {
            const result = onSameNetwork("192.168.200.250", "192.168.200.1", "255.255.255.0");

            expect(result).toBe(true);
        });

        it("returns false if two IPv4 addresses are not on the same network", () => {
            const result = onSameNetwork("192.168.200.250", "192.1.1.1", "255.255.255.0");

            expect(result).toBe(false);
        });

        it("returns true if two IPv6 addresses are on the same network", () => {
            const result = onSameNetwork("fe80::e777:4f5e:c61e:7314", "fe80::e777:4f5e:1:1", "ffff:ffff:ffff:ffff::");

            expect(result).toBe(true);
        });

        it("returns false if two IPv6 addresses are not on the same network", () => {
            const result = onSameNetwork("fe80::e777:4f5e:c61e:7314", "fe80:1::4f5e:1:1", "ffff:ffff:ffff:ffff::");

            expect(result).toBe(false);
        });
    });
});
