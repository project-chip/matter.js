/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ValidationError } from "../../src/common/MatterError.js";
import { TlvAny } from "../../src/tlv/TlvAny.js";
import { TlvType } from "../../src/tlv/TlvCodec.js";
import { ByteArray } from "../../src/util/ByteArray.js";

type CodecVector<I, E> = { [valueDescription: string]: { encoded: I; decoded: E } };

const testVector: CodecVector<string, any> = {
    null: { encoded: "14", decoded: [{ tag: undefined, typeLength: { type: TlvType.Null }, value: null }] },
    array: {
        encoded: "1618",
        decoded: [
            {
                tag: undefined,
                typeLength: {
                    type: TlvType.Array,
                },
            },
            {
                tag: undefined,
                typeLength: {
                    type: TlvType.EndOfContainer,
                },
            },
        ],
    },
};

describe("TlvAny", () => {
    describe("encode", () => {
        for (const valueDescription in testVector) {
            const { encoded, decoded } = testVector[valueDescription];
            it(`encodes ${valueDescription}`, () => {
                expect(TlvAny.encode(decoded).toHex()).toBe(encoded);
            });
        }
    });

    describe("decode", () => {
        for (const valueDescription in testVector) {
            const { encoded, decoded } = testVector[valueDescription];
            it(`decodes ${valueDescription}`, () => {
                expect(TlvAny.decode(ByteArray.fromHex(encoded))).toEqual(decoded);
            });
        }
    });

    describe("validation", () => {
        it("throws an error if the value is not a boolean", () => {
            expect(() => TlvAny.validate("a" as any)).toThrow(new ValidationError("Expected TlvStream, got string."));
        });

        it("does not throw an error if the value is a boolean", () => {
            expect(TlvAny.validate([{ typeLength: { type: TlvType.Null } }])).toBe(undefined);
        });
    });

    describe("generic decoding", () => {
        it("decodes a boolean", () => {
            expect(TlvAny.decodeAnyTlvStream([{ typeLength: { type: TlvType.Boolean }, value: true }])).toBe(true);
        });

        it("decodes a null", () => {
            expect(TlvAny.decodeAnyTlvStream([{ typeLength: { type: TlvType.Null }, value: null }])).toBe(null);
        });

        it("decodes an array of integers", () => {
            expect(
                TlvAny.decodeAnyTlvStream([
                    { typeLength: { type: TlvType.Array } },
                    { typeLength: { type: TlvType.UnsignedInt }, value: 1 },
                    { typeLength: { type: TlvType.UnsignedInt }, value: 2 },
                    { typeLength: { type: TlvType.EndOfContainer } },
                ]),
            ).toEqual([1, 2]);
        });

        it("decodes a list of strings", () => {
            expect(
                TlvAny.decodeAnyTlvStream([
                    { typeLength: { type: TlvType.List } },
                    { typeLength: { type: TlvType.Utf8String }, value: "a" },
                    { typeLength: { type: TlvType.Utf8String }, value: "b" },
                    { typeLength: { type: TlvType.EndOfContainer } },
                ]),
            ).toEqual(["a", "b"]);
        });

        it("decodes a structure", () => {
            expect(
                TlvAny.decodeAnyTlvStream([
                    { typeLength: { type: TlvType.Structure } },
                    { tag: { id: 1 }, typeLength: { type: TlvType.Utf8String }, value: "a" },
                    { tag: { id: 2 }, typeLength: { type: TlvType.Utf8String }, value: "b" },
                    { typeLength: { type: TlvType.EndOfContainer } },
                ]),
            ).toEqual({ "1": "a", "2": "b" });
        });

        it("decodes and array of structures", () => {
            expect(
                TlvAny.decodeAnyTlvStream([
                    { typeLength: { type: TlvType.Array } },
                    { typeLength: { type: TlvType.Structure } },
                    { tag: { id: 1 }, typeLength: { type: TlvType.Utf8String }, value: "a" },
                    { tag: { id: 2 }, typeLength: { type: TlvType.Utf8String }, value: "b" },
                    { typeLength: { type: TlvType.EndOfContainer } },
                    { typeLength: { type: TlvType.Structure } },
                    { tag: { id: 3 }, typeLength: { type: TlvType.Utf8String }, value: "c" },
                    { tag: { id: 4 }, typeLength: { type: TlvType.Utf8String }, value: "d" },
                    { typeLength: { type: TlvType.EndOfContainer } },
                    { typeLength: { type: TlvType.EndOfContainer } },
                ]),
            ).toEqual([
                { "1": "a", "2": "b" },
                { "3": "c", "4": "d" },
            ]);
        });
    });
});
