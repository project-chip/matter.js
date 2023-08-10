/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ValidationError } from "../../src/common/MatterError.js";
import { Schema } from "../../src/schema/Schema.js";
import { TlvDouble, TlvFloat, TlvInt64, TlvUInt32, TlvUInt64 } from "../../src/tlv/TlvNumber.js";
import { ByteArray } from "../../src/util/ByteArray.js";

type CodecVector<I, E> = {
    [valueDescription: string]: { schema: Schema<number | bigint, ByteArray>; encoded: I; decoded: E };
};
type TestVector<I, E> = { [testName: string]: { input: I; out: E } };

const codecVector: CodecVector<string, number | bigint> = {
    "a float": { schema: TlvFloat, decoded: 6546.25390625, encoded: "0a0892cc45" },
    "a double": { schema: TlvDouble, decoded: 6546.254, encoded: "0b2fdd24064192b940" },
    "an 1 byte signed int": { schema: TlvInt64, decoded: -1, encoded: "00ff" },
    "a 2 bytes signed int": { schema: TlvInt64, decoded: 0x0100, encoded: "010001" },
    "a 4 bytes signed int": { schema: TlvInt64, decoded: 0x01000000, encoded: "0200000001" },
    "a 8 bytes signed int": { schema: TlvInt64, decoded: BigInt(0x01000000000000), encoded: "030000000000000100" },
    "an 1 byte unsigned int": { schema: TlvUInt64, decoded: 1, encoded: "0401" },
    "a 2 bytes unsigned int": { schema: TlvUInt64, decoded: 0x0100, encoded: "050001" },
    "a 4 bytes unsigned int": { schema: TlvUInt64, decoded: 0x01000000, encoded: "0600000001" },
    "a 8 bytes unsigned int": { schema: TlvUInt64, decoded: BigInt(0x01000000000000), encoded: "070000000000000100" },
};

const validateTestVector: TestVector<number, boolean> = {
    "validates a value between min and max": { input: 6, out: false },
    "throws an error if the value is too low": { input: 1, out: true },
    "throws an error if the value is too high": { input: 12, out: true },
};

describe("TlvNumber", () => {
    describe("encode", () => {
        for (const valueDescription in codecVector) {
            const { schema, encoded, decoded } = codecVector[valueDescription];
            it(`encodes ${valueDescription}`, () => {
                expect(schema.encode(decoded).toHex()).toBe(encoded);
            });
        }
    });

    describe("decode", () => {
        for (const valueDescription in codecVector) {
            const { schema, encoded, decoded } = codecVector[valueDescription];
            it(`decodes ${valueDescription}`, () => {
                expect(schema.decode(ByteArray.fromHex(encoded))).toBe(decoded);
            });
        }
    });

    describe("decode", () => {
        it("decodes a 8 bytes small value as a number", () => {
            expect(TlvUInt32.decode(ByteArray.fromHex("070100000000000000"))).toBe(1);
        });
    });

    describe("validate bound ranges", () => {
        const BoundedUint = TlvUInt32.bound({ min: 5, max: 10 });

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

    describe("validate", () => {
        it("throws an error if the value is not a number", () => {
            expect(() => TlvUInt32.validate("a" as any)).toThrow(new ValidationError("Expected number, got string."));
        });

        it("throws an error if the value is not a bigint", () => {
            expect(() => TlvUInt64.validate("a" as any)).toThrow(new ValidationError("Expected number, got string."));
        });

        it("throws an error if the value is not a bigint", () => {
            expect(() => TlvUInt32.validate(BigInt(12345678790) as any)).toThrow(
                new ValidationError("Expected number, got bigint."),
            );
        });

        it("does not throw an error if the value is a number", () => {
            expect(TlvUInt64.validate(12345)).not.toBeDefined();
        });

        it("does not throw an error if the value is a bigint", () => {
            expect(TlvUInt64.validate(BigInt(12345678790))).not.toBeDefined();
        });
    });
});
