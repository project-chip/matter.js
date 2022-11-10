/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import assert from "assert";
import { TlvByteString, TlvUtfString } from "../../src/tlv/TlvString";
import { byteArrayFromHex, byteArrayToHex } from "../../src/util/ArrayBuffer";
import { DataReaderLE } from "../../src/util/DataReaderLE";

type TestVector<I, E> = {[testName: string]: { input: I, out: E }};

const validateUtfStringTestVector: TestVector<string, boolean> = {
    "validates a string with an acceptable length": { input: "abcde", out: false },
    "throws an error if the string is too short": { input: "a", out: true },
    "throws an error if the string is too long": { input: "abcdefgh", out: true },
};

const validateByteStringTestVector: TestVector<string, boolean> = {
    "validates a string with an acceptable length": { input: "0001020304", out: false },
    "throws an error if the string is too short": { input: "00", out: true },
    "throws an error if the string is too long": { input: "0001020304050607", out: true },
};

describe("TlvUtfString", () => {

    context("encode", () => {
        it("encodes a string", () => {
            const result = TlvUtfString().encode("test");

            assert.strictEqual(byteArrayToHex(result), "0c0474657374");
        });
    });

    context("decode", () => {
        it("decodes a string", () => {
            const result = TlvUtfString().decode(byteArrayFromHex("0c0474657374"));

            assert.strictEqual(result, "test");
        });
    });

    context("validate", () => {
        const BoundedInt = TlvUtfString({ minLength: 4, maxLength: 6 });

        for (const testName in validateUtfStringTestVector) {
            const { input, out: throwException } = validateUtfStringTestVector[testName];
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

describe("TlvByteString", () => {

    context("encode", () => {
        it("encodes a byte string", () => {
            const result = TlvByteString().encode(byteArrayFromHex("0001"));

            assert.strictEqual(byteArrayToHex(result), "10020001");
        });
    });

    context("decode", () => {
        it("decodes a byte string", () => {
            const result = TlvByteString().decode(byteArrayFromHex("10020001"));

            assert.strictEqual(byteArrayToHex(result), "0001");
        });
    });

    context("validate", () => {
        const BoundedInt = TlvByteString({ minLength: 4, maxLength: 6 });

        for (const testName in validateByteStringTestVector) {
            const { input, out: throwException } = validateByteStringTestVector[testName];
            it(testName, () => {
                if (throwException) {
                    assert.throws(() => {
                        BoundedInt.validate(byteArrayFromHex(input));
                    });
                } else {
                    BoundedInt.validate(byteArrayFromHex(input));
                }
            });
        }
    });
});
