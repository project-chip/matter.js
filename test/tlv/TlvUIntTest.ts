/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvUInt64, TlvUInt, TlvUInt32 } from "../../src/tlv/TlvUInt.js";
import { ByteArray } from "../../src/util/ByteArray.js";

type TestVector<I, E> = {[testName: string]: { input: I, out: E }};

const encodeTestVector: TestVector<number | bigint, string> = {
    "encodes an 1 byte unsigned int": { input: 1, out: "0401" },
    "encodes a 2 bytes unsigned int": { input: 0x0100, out: "050001" },
    "encodes a 4 bytes unsigned int": { input: 0x01000000, out: "0600000001" },
    "encodes a 8 bytes unsigned int": { input: BigInt(0x01000000000000), out: "070000000000000100" },
};

const decodeTestVector: TestVector<string, number | bigint> = {
    "decodes an 1 byte unsigned int": { input: "0401", out: 1 },
    "decodes a 2 bytes unsigned int": { input: "050001", out: 0x0100 },
    "decodes a 4 bytes unsigned int": { input: "0600000001", out: 0x01000000 },
    "decodes a 8 bytes unsigned int": { input: "070000000000000100", out: BigInt(0x01000000000000) },
};

const validateTestVector: TestVector<number | bigint, boolean> = {
    "validates a value between min and max": { input: 6, out: false },
    "throws an error if the value is too low": { input: 1, out: true },
    "throws an error if the value is too high": { input: 12, out: true },
};

describe("TlvUInt", () => {

    describe("encode", () => {
        for (const testName in encodeTestVector) {
            const { input, out } = encodeTestVector[testName];
            it(testName, () => {
                expect((TlvUInt64.encode(input).toHex()))
                    .toBe(out);
            });
        }
    });

    describe("decode", () => {
        for (const testName in decodeTestVector) {
            const { input, out } = decodeTestVector[testName];
            it(testName, () => {
                expect(TlvUInt64.decode(ByteArray.fromHex(input)))
                    .toBe(out);
            });
        }
    });

    describe("decode", () => {
        it("decodes a 8 bytes small value as a number", () => {
            expect(TlvUInt32.decode(ByteArray.fromHex("070100000000000000")))
                .toBe(1);
        });
    });

    describe("validate", () => {
        const BoundedUint = TlvUInt({ min: 5, max: 10 });

        for (const testName in validateTestVector) {
            const { input, out: throwException } = validateTestVector[testName];
            it(testName, () => {
                const test = () => BoundedUint.validate(input);
                if (throwException) {
                    expect(test).toThrow();
                } else {
                    expect(test).not.toThrow();
                }
            });
        }
    });
});
