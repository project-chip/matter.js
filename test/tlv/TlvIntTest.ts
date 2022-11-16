/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvInt, TlvInt32, TlvInt64 } from "../../src/tlv/TlvInt.js";
import { ByteArray } from "../../src/util/ByteArray.js";

type CodecVector<I, E> = {[valueDescription: string]: { encoded: E, decoded: I }};
type TestVector<I, E> = {[testName: string]: { input: I, out: E }};

const codecVector: CodecVector<number | bigint, string> = {
    "an 1 byte signed int": { decoded: -1, encoded: "00ff" },
    "a 2 bytes signed int": { decoded: 0x0100, encoded: "010001" },
    "a 4 bytes signed int": { decoded: 0x01000000, encoded: "0200000001" },
    "a 8 bytes signed int": { decoded: BigInt(0x01000000000000), encoded: "030000000000000100" },
};

const validateTestVector: TestVector<number | bigint, boolean> = {
    "validates a value between min and max": { input: 6, out: false },
    "throws an error if the value is too low": { input: -10, out: true },
    "throws an error if the value is too high": { input: 12, out: true },
};

describe("TlvInt", () => {

    describe("encode", () => {
        for (const valueDescription in codecVector) {
            const { encoded, decoded } = codecVector[valueDescription];
            it(`encodes ${valueDescription}`, () => {
                expect(TlvInt64.encode(decoded).toHex())
                    .toBe(encoded);
            });
        }
    });

    describe("decode", () => {
        for (const valueDescription in codecVector) {
            const { encoded, decoded } = codecVector[valueDescription];
            it(`decodes ${valueDescription}`, () => {
                expect(TlvInt64.decode(ByteArray.fromHex(encoded)))
                    .toBe(decoded);
            });
        }
    });

    describe("decode", () => {
        it("decodes a 8 bytes small value as a number", () => {
            expect(TlvInt32.decode(ByteArray.fromHex("030100000000000000")))
                .toBe(1);
        });
    });

    describe("validate", () => {
        const BoundedInt = TlvInt({ min: -5, max: 10 });

        for (const testName in validateTestVector) {
            const { input, out: throwException } = validateTestVector[testName];
            it(testName, () => {
                const test = () => BoundedInt.validate(input);
                if (throwException) {
                    expect(test).toThrow();
                } else {
                    expect(test).not.toThrow();
                }
            });
        }
    });
});
