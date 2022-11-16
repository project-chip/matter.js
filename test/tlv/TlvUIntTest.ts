/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvUInt64, TlvUInt, TlvUInt32 } from "../../src/tlv/TlvUInt.js";
import { ByteArray } from "../../src/util/ByteArray.js";

type CodecVector<I, E> = {[valueDescription: string]: { encoded: E, decoded: I }};
type TestVector<I, E> = {[testName: string]: { input: I, out: E }};

const codecVector: CodecVector<number | bigint, string> = {
    "an 1 byte unsigned int": { decoded: 1, encoded: "0401" },
    "a 2 bytes unsigned int": { decoded: 0x0100, encoded: "050001" },
    "a 4 bytes unsigned int": { decoded: 0x01000000, encoded: "0600000001" },
    "a 8 bytes unsigned int": { decoded: BigInt(0x01000000000000), encoded: "070000000000000100" },
};

const validateTestVector: TestVector<number | bigint, boolean> = {
    "validates a value between min and max": { input: 6, out: false },
    "throws an error if the value is too low": { input: 1, out: true },
    "throws an error if the value is too high": { input: 12, out: true },
};

describe("TlvUInt", () => {

    describe("encode", () => {
        for (const valueDescription in codecVector) {
            const { encoded, decoded } = codecVector[valueDescription];
            it(`encodes ${valueDescription}`, () => {
                expect((TlvUInt64.encode(decoded).toHex()))
                    .toBe(encoded);
            });
        }
    });

    describe("decode", () => {
        for (const valueDescription in codecVector) {
            const { encoded, decoded } = codecVector[valueDescription];
            it(`decodes ${valueDescription}`, () => {
                expect(TlvUInt64.decode(ByteArray.fromHex(encoded)))
                    .toBe(decoded);
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
