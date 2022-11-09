/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import assert from "assert";
import { TlvUInt64, TlvUInt, TlvUInt32 } from "../../src/tlv/TlvUInt";
import { arrayBufferFromHex, arrayBufferToHex } from "../../src/util/ArrayBuffer";

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

    context("encode", () => {
        for (const testName in encodeTestVector) {
            const { input, out } = encodeTestVector[testName];
            it(testName, () => {
                assert.strictEqual(arrayBufferToHex(TlvUInt64.encode(input)), out);
            });
        }
    });

    context("decode", () => {
        for (const testName in decodeTestVector) {
            const { input, out } = decodeTestVector[testName];
            it(testName, () => {
                assert.strictEqual(TlvUInt64.decode(arrayBufferFromHex(input)), out);
            });
        }
    });

    context("decode", () => {
        it("decodes a 8 bytes small value as a number", () => {
            assert.strictEqual(TlvUInt32.decode(arrayBufferFromHex("070100000000000000")), 1);
        });
    });

    context("validate", () => {
        const BoundedUint = TlvUInt({ min: 5, max: 10 });

        for (const testName in validateTestVector) {
            const { input, out: throwException } = validateTestVector[testName];
            it(testName, () => {
                if (throwException) {
                    assert.throws(() => {
                        BoundedUint.validate(input);
                    });
                } else {
                    BoundedUint.validate(input);
                }
            });
        }
    });
});
