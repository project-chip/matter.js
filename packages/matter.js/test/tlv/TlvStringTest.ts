/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ValidationError } from "../../src/common/ValidationError.js";
import { TlvAny } from "../../src/tlv/TlvAny.js";
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

            expect(result.toHex()).equal("0c0474657374");
        });

        it("encodes a string that gets utf8 encoded", () => {
            const result = TlvString.encode("testè");

            expect(result.toHex()).equal("0c0674657374c3a8");
        });
    });

    describe("decode", () => {
        it("decodes a string", () => {
            const result = TlvString.decode(ByteArray.fromHex("0c0474657374"));

            expect(result).equal("test");
        });

        it("decodes a string that was utf8", () => {
            const result = TlvString.decode(ByteArray.fromHex("0c0674657374c3a8"));

            expect(result).equal("testè");
        });
    });

    describe("calculate byte size", () => {
        it("calculate byte size a string", () => {
            const tlvEncoded = TlvString.encodeTlv("test");
            expect(TlvAny.getEncodedByteLength(tlvEncoded)).equal(6);
        });

        it("calculate byte size a string that was utf8", () => {
            const tlvEncoded = TlvString.encodeTlv("testè");
            expect(TlvAny.getEncodedByteLength(tlvEncoded)).equal(8);
        });
    });

    describe("validate", () => {
        const BoundedInt = TlvString.bound({ minLength: 4, maxLength: 6 });

        for (const testName in validateUtfStringTestVector) {
            const { input, out: throwException } = validateUtfStringTestVector[testName];
            it(testName, () => {
                const test = () => BoundedInt.validate(input);
                if (throwException) {
                    expect(test).throw();
                } else {
                    expect(test).not.throw();
                }
            });
        }
    });
});

describe("TlvByteString", () => {
    describe("encode", () => {
        it("encodes a byte string", () => {
            const result = TlvByteString.encode(ByteArray.fromHex("0001"));

            expect(result.toHex()).equal("10020001");
        });
    });

    describe("decode", () => {
        it("decodes a byte string", () => {
            const result = TlvByteString.decode(ByteArray.fromHex("10020001"));

            expect(result.toHex()).equal("0001");
        });
    });

    describe("validate ByteString", () => {
        const BoundedInt = TlvByteString.bound({ minLength: 4, maxLength: 6 });

        for (const testName in validateByteStringTestVector) {
            const { input, out: throwException } = validateByteStringTestVector[testName];
            it(testName, () => {
                const test = () => BoundedInt.validate(ByteArray.fromHex(input));
                if (throwException) {
                    expect(test).throw();
                } else {
                    expect(test).not.throw();
                }
            });
        }
    });

    describe("validation", () => {
        it("throws an error if the value is not a ByteString", () => {
            expect(() => TlvByteString.validate(5 as any)).throw(ValidationError, "Expected ByteArray, got number.");
        });

        it("throws an error if the value is not a String", () => {
            expect(() => TlvString.validate(true as any)).throw(ValidationError, "Expected string, got boolean.");
        });
    });
});
