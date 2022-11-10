/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import assert from "assert";
import { TlvInt, TlvInt32, TlvInt64 } from "../../src/tlv/TlvInt";
import { byteArrayFromHex, byteArrayToHex } from "../../src/util/ArrayBuffer";

type TestVector<I, E> = {[testName: string]: { input: I, out: E }};

const encodeTestVector: TestVector<number | bigint, string> = {
    "encodes an 1 byte signed int": { input: -1, out: "00ff" },
    "encodes a 2 bytes signed int": { input: 0x0100, out: "010001" },
    "encodes a 4 bytes signed int": { input: 0x01000000, out: "0200000001" },
    "encodes a 8 bytes signed int": { input: BigInt(0x01000000000000), out: "030000000000000100" },
};

const decodeTestVector: TestVector<string, number | bigint> = {
    "decodes an 1 byte signed int": { input: "00ff", out: -1 },
    "decodes a 2 bytes signed int": { input: "010001", out: 0x0100 },
    "decodes a 4 bytes signed int": { input: "0200000001", out: 0x01000000 },
    "decodes a 8 bytes signed int": { input: "030000000000000100", out: BigInt(0x01000000000000) },
};

const validateTestVector: TestVector<number | bigint, boolean> = {
    "validates a value between min and max": { input: 6, out: false },
    "throws an error if the value is too low": { input: -10, out: true },
    "throws an error if the value is too high": { input: 12, out: true },
};

describe("TlvInt", () => {

    context("encode", () => {
        for (const testName in encodeTestVector) {
            const { input, out } = encodeTestVector[testName];
            it(testName, () => {
                assert.strictEqual(byteArrayToHex(TlvInt64.encode(input)), out);
            });
        }
    });

    context("decode", () => {
        for (const testName in decodeTestVector) {
            const { input, out } = decodeTestVector[testName];
            it(testName, () => {
                assert.strictEqual(TlvInt64.decode(byteArrayFromHex(input)), out);
            });
        }
    });

    context("decode", () => {
        it("decodes a 8 bytes small value as a number", () => {
            assert.strictEqual(TlvInt32.decode(byteArrayFromHex("030100000000000000")), 1);
        });
    });

    context("validate", () => {
        const BoundedInt = TlvInt({ min: -5, max: 10 });

        for (const testName in validateTestVector) {
            const { input, out: throwException } = validateTestVector[testName];
            it(testName, () => {
                if (throwException) {
                    assert.throws(() => {
                        BoundedInt.validate(input);
                    });
                } else {
                    BoundedInt.validate(input);
                }
            });
        }
    });
});
