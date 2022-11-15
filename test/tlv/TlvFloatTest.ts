/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvFloat, TlvDouble, TlvBoundedDouble } from "../../src/tlv/TlvFloat.js";
import { ByteArray } from "../../src/util/ByteArray.js";
import { Schema } from "../../src/util/schema/Schema.js";

type CodecVector<I, E> = {[valueDescription: string]: { schema: Schema<number, ByteArray>, encoded: I, decoded: E }};
type TestVector<I, E> = {[testName: string]: { input: I, out: E }};

const codecVector: CodecVector<string, number> = {
    "float": { schema: TlvFloat, decoded: 6546.254, encoded: "0a0892cc45" },
    "double": { schema: TlvDouble, decoded: 6546.254, encoded: "0b2fdd24064192b940" },
};

const validateTestVector: TestVector<number, boolean> = {
    "validates a value between min and max": { input: 6, out: false },
    "throws an error if the value is too low": { input: -10, out: true },
    "throws an error if the value is too high": { input: 12, out: true },
};

describe("TlvFloat", () => {

    describe("encode", () => {
        for (const valueDescription in codecVector) {
            const { schema, encoded, decoded } = codecVector[valueDescription];
            it(`encodes ${valueDescription}`, () => {
                expect(schema.encode(decoded).toHex())
                    .toBe(encoded);
            });
        }
    });

    describe("decode", () => {
        for (const valueDescription in codecVector) {
            const { schema, encoded, decoded } = codecVector[valueDescription];
            it(`decodes ${valueDescription}`, () => {
                expect(schema.decode(ByteArray.fromHex(encoded)))
                    .toBeCloseTo(decoded, 3);
            });
        }
    });

    describe("validate", () => {
        const BoundedInt = TlvBoundedDouble({ min: -5, max: 10 });

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
