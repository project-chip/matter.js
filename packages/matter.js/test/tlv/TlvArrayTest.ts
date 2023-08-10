/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvAny } from "../../src/tlv/TlvAny.js";
import { ArrayAsChunked, ArraySchema, TlvArray } from "../../src/tlv/TlvArray.js";
import { TlvNullable } from "../../src/tlv/TlvNullable.js";
import { TlvString } from "../../src/tlv/TlvString.js";
import { ByteArray } from "../../src/util/ByteArray.js";

type TestVector<I, E> = { [testName: string]: { input: I; out: E } };

const validateTestVector: TestVector<string[], boolean> = {
    "validates an array with an acceptable length": { input: ["a", "b"], out: false },
    "throws an error if the array is too short": { input: ["a"], out: true },
    "throws an error if the array is too long": { input: ["a", "b", "c", "d", "e"], out: true },
};

describe("TlvArray", () => {
    const schema = TlvArray(TlvString);

    describe("encode", () => {
        it("encodes an array", () => {
            const result = schema.encode(["a", "b", "c"]);

            expect(result.toHex()).toBe("160c01610c01620c016318");
        });

        it("encodes an array to chunks", () => {
            const result = schema.encodeAsChunkedArray(["a", "b", "c"]);

            expect(TlvAny.encode(result[0].element).toHex()).toBe("1618");
            expect(new ArraySchema(TlvString).decodeTlv(result[0].element)).toEqual([]);
            expect(result[0].listIndex).toBe(undefined);
            expect(TlvAny.encode(result[1].element).toHex()).toBe("0c0161");
            expect(TlvString.decodeTlv(result[1].element)).toBe("a");
            expect(result[1].listIndex).toBe(null);
            expect(TlvAny.encode(result[2].element).toHex()).toBe("0c0162");
            expect(TlvString.decodeTlv(result[2].element)).toBe("b");
            expect(result[2].listIndex).toBe(null);
            expect(TlvAny.encode(result[3].element).toHex()).toBe("0c0163");
            expect(TlvString.decodeTlv(result[3].element)).toBe("c");
            expect(result[3].listIndex).toBe(null);
        });
    });

    describe("decode", () => {
        it("decodes an array", () => {
            const result = schema.decode(ByteArray.fromHex("160c01610c01620c016318"));

            expect(result).toEqual(["a", "b", "c"]);
        });
    });

    describe("decode chunked array", () => {
        it("decodes an encoded array from chunks", () => {
            const encoded = schema.encodeAsChunkedArray(["a", "b", "c"]);

            const decoded = schema.decodeFromChunkedArray(encoded, ["d"]);
            expect(decoded).toEqual(["a", "b", "c"]);
        });

        it("decodes an encoded array from chunks with adding values", () => {
            const encoded: ArrayAsChunked = [
                { element: TlvString.encodeTlv("a"), listIndex: 1 },
                { element: TlvString.encodeTlv("b"), listIndex: 2 },
                { element: TlvString.encodeTlv("c"), listIndex: 3 },
            ];

            const decoded = schema.decodeFromChunkedArray(encoded, ["d"]);
            expect(decoded).toEqual(["d", "a", "b", "c"]);
        });

        it("decodes an encoded array from chunks with removing values", () => {
            const encoded: ArrayAsChunked = [
                { element: TlvString.encodeTlv("a"), listIndex: 1 },
                { element: TlvNullable(TlvString).encodeTlv(null), listIndex: 0 },
                { element: TlvString.encodeTlv("c"), listIndex: 2 },
            ];

            const decoded = schema.decodeFromChunkedArray(encoded, ["d"]);
            expect(decoded).toEqual(["a", undefined, "c"]);
        });

        it("decodes an encoded array from chunks with overwriting values", () => {
            const encoded: ArrayAsChunked = [
                { element: TlvString.encodeTlv("a"), listIndex: 0 },
                { element: TlvString.encodeTlv("c"), listIndex: null },
            ];

            const decoded = schema.decodeFromChunkedArray(encoded, ["a2", "b"]);
            expect(decoded).toEqual(["a", "b", "c"]);
        });
    });

    describe("decode an self encoded tlv object", () => {
        it("decodes an array", () => {
            const schema = TlvArray(TlvString);

            const data = ["a", "b"];

            const encoded = schema.encodeTlv(data);
            const decoded = schema.decodeTlv(encoded);

            expect(decoded).toEqual(data);
        });
    });

    describe("validate", () => {
        const schema = TlvArray(TlvString, { minLength: 2, maxLength: 4 });

        for (const testName in validateTestVector) {
            const { input, out: throwException } = validateTestVector[testName];
            it(testName, () => {
                const test = () => schema.validate(input);
                if (throwException) {
                    expect(test).toThrow();
                } else {
                    expect(test).not.toThrow();
                }
            });
        }
    });
});
