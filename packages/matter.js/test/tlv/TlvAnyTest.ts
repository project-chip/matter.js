/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvAny } from "../../src/tlv/TlvAny.js";
import { TlvType } from "../../src/tlv/TlvCodec.js";
import { ByteArray } from "../../src/util/ByteArray.js";

type CodecVector<I, E> = { [valueDescription: string]: { encoded: I, decoded: E } };

const testVector: CodecVector<string, any> = {
    "null": { encoded: "14", decoded: [{ tag: undefined, typeLength: { type: TlvType.Null }, value: null }] },
    "array": {
        encoded: "1618", decoded: [
            {
                tag: undefined,
                typeLength: {
                    type: TlvType.Array
                }
            },
            {
                tag: undefined,
                typeLength: {
                    type: TlvType.EndOfContainer
                }
            }
        ]
    },
};

describe("TlvAny", () => {

    describe("encode", () => {
        for (const valueDescription in testVector) {
            const { encoded, decoded } = testVector[valueDescription];
            it(`encodes ${valueDescription}`, () => {
                expect(TlvAny.encode(decoded).toHex())
                    .toBe(encoded);
            });
        }
    });

    describe("decode", () => {
        for (const valueDescription in testVector) {
            const { encoded, decoded } = testVector[valueDescription];
            it(`decodes ${valueDescription}`, () => {
                expect(TlvAny.decode(ByteArray.fromHex(encoded)))
                    .toEqual(decoded);
            });
        }
    });

    describe("validation", () => {
        it("throws an error if the value is not a boolean", () => {
            expect(() => TlvAny.validate("a" as any))
                .toThrowError("Expected TlvStream, got string.");
        });

        it("does not throw an error if the value is a boolean", () => {
            expect(TlvAny.validate([{ typeLength: { type: TlvType.Null } }])).toBe(undefined);
        });
    });
});
