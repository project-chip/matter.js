/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import assert from "assert";
import { TlvBoolean } from "../../src/tlv/TlvBoolean";
import { byteArrayFromHex, byteArrayToHex } from "../../src/util/ArrayBuffer";

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

    context("encode", () => {
        for (const testName in encodeTestVector) {
            const { input, out } = encodeTestVector[testName];
            it(testName, () => {
                assert.strictEqual(byteArrayToHex(TlvBoolean.encode(input)), out);
            });
        }
    });

    context("decode", () => {
        for (const testName in decodeTestVector) {
            const { input, out } = decodeTestVector[testName];
            it(testName, () => {
                assert.strictEqual(TlvBoolean.decode(byteArrayFromHex(input)), out);
            });
        }
    });
});
