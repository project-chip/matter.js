/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ValidationError } from "../../src/common/MatterError.js";
import { TlvByteString, TlvString } from "../../src/tlv/TlvString.js";
import { ByteArray } from "../../src/util/ByteArray.js";

type TestVector<I, E> = { [testName: string]: { input: I; out: E } };

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

describe("TlvString", () => {
    describe("encode", () => {
        it("encodes a string", () => {
            const result = TlvString.encode("test");

            expect(result.toHex()).toBe("0c0474657374");
        });

        it("encodes a string that gets utf8 encoded", () => {
            const result = TlvString.encode("testè");

            expect(result.toHex()).toBe("0c0674657374c3a8");
        });
    });

    describe("decode", () => {
        it("decodes a string", () => {
            const result = TlvString.decode(ByteArray.fromHex("0c0474657374"));

            expect(result).toBe("test");
        });

        it("decodes a string that was utf8", () => {
            const result = TlvString.decode(ByteArray.fromHex("0c0674657374c3a8"));

            expect(result).toBe("testè");
        });
    });

    describe("validate", () => {
        const BoundedInt = TlvString.bound({ minLength: 4, maxLength: 6 });

        for (const testName in validateUtfStringTestVector) {
            const { input, out: throwException } = validateUtfStringTestVector[testName];
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

describe("TlvByteString", () => {
    describe("encode", () => {
        it("encodes a byte string", () => {
            const result = TlvByteString.encode(ByteArray.fromHex("0001"));

            expect(result.toHex()).toBe("10020001");
        });
    });

    describe("decode", () => {
        it("decodes a byte string", () => {
            const result = TlvByteString.decode(ByteArray.fromHex("10020001"));

            expect(result.toHex()).toBe("0001");
        });
    });

    describe("validate ByteString", () => {
        const BoundedInt = TlvByteString.bound({ minLength: 4, maxLength: 6 });

        for (const testName in validateByteStringTestVector) {
            const { input, out: throwException } = validateByteStringTestVector[testName];
            it(testName, () => {
                const test = () => BoundedInt.validate(ByteArray.fromHex(input));
                if (throwException) {
                    expect(test).toThrow();
                } else {
                    expect(test).not.toThrow();
                }
            });
        }
    });

    describe("validation", () => {
        it("throws an error if the value is not a ByteString", () => {
            expect(() => TlvByteString.validate(5 as any)).toThrow(
                new ValidationError("Expected ByteArray, got number."),
            );
        });

        it("throws an error if the value is not a String", () => {
            expect(() => TlvString.validate(true as any)).toThrow(new ValidationError("Expected string, got boolean."));
        });
    });
});
