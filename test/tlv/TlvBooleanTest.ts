/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvBoolean } from "../../src/tlv/TlvBoolean.js";
import { ByteArray } from "../../src/util/ByteArray.js";

type TestVector<I, E> = {[testName: string]: { input: I, out: E }};

const encodeTestVector: TestVector<boolean, string> = {
    "encodes true": { input: true, out: "09" },
    "encodes false": { input: false, out: "08" },
};

const decodeTestVector: TestVector<string, boolean> = {
    "decodes true": { input: "09", out: true },
    "decodes false": { input: "08", out: false },
};

describe("TlvBoolean", () => {

    describe("encode", () => {
        for (const testName in encodeTestVector) {
            const { input, out } = encodeTestVector[testName];
            it(testName, () => {
                expect(TlvBoolean.encode(input).toHex())
                    .toBe(out);
            });
        }
    });

    describe("decode", () => {
        for (const testName in decodeTestVector) {
            const { input, out } = decodeTestVector[testName];
            it(testName, () => {
                expect(TlvBoolean.decode(ByteArray.fromHex(input)))
                    .toBe(out);
            });
        }
    });
});
