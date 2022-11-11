/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import assert from "assert";
import { TlvFloat, TlvDouble, TlvBoundedDouble } from "../../src/tlv/TlvFloat";
import { ByteArray } from "../../src/util/ByteArray";
import { Schema } from "../../src/util/schema/Schema";

type TestVector<I, E> = {[testName: string]: { input: I, out: E }};

const encodeTestVector: TestVector<{ schema: Schema<number, ByteArray>, value: number}, string> = {
    "encodes a float": { input: { schema: TlvFloat, value: 6546.254}, out: "0a0892cc45" },
    "encodes a double": { input: { schema: TlvDouble, value: 6546.254}, out: "0b2fdd24064192b940" },
};

const decodeTestVector: TestVector<{ schema: Schema<number, ByteArray>, value: string}, number> = {
    "decodes a float": { input: { schema: TlvFloat, value: "0a0892cc45"}, out: 6546.254 },
    "decodes a double": { input: { schema: TlvDouble, value: "0b2fdd24064192b940"}, out: 6546.254 },
};

const validateTestVector: TestVector<number, boolean> = {
    "validates a value between min and max": { input: 6, out: false },
    "throws an error if the value is too low": { input: -10, out: true },
    "throws an error if the value is too high": { input: 12, out: true },
};

describe("TlvFloat", () => {

    describe("encode", () => {
        for (const testName in encodeTestVector) {
            const { input: { schema, value }, out } = encodeTestVector[testName];
            it(testName, () => {
                assert.equal(schema.encode(value).toHex(), out);
            });
        }
    });

    describe("decode", () => {
        for (const testName in decodeTestVector) {
            const { input: { schema, value }, out } = decodeTestVector[testName];
            it(testName, () => {
                assert.equal(schema.decode(ByteArray.fromHex(value)) - out < 0.001, true);
            });
        }
    });

    describe("validate", () => {
        const BoundedInt = TlvBoundedDouble({ min: -5, max: 10 });

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
