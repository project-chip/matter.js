/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvBoolean } from "../../src/tlv/TlvBoolean.js";
import { ByteArray } from "../../src/util/ByteArray.js";

type CodecVector<I, E> = {[valueDescription: string]: { encoded: I, decoded: E }};

const testVector: CodecVector<string, boolean> = {
    "true": { encoded: "09", decoded: true },
    "false": { encoded: "08", decoded: false },
};

describe("TlvBoolean", () => {

    describe("encode", () => {
        for (const valueDescription in testVector) {
            const { encoded, decoded } = testVector[valueDescription];
            it(`encodes ${valueDescription}`, () => {
                expect(TlvBoolean.encode(decoded).toHex())
                    .toBe(encoded);
            });
        }
    });

    describe("decode", () => {
        for (const valueDescription in testVector) {
            const { encoded, decoded } = testVector[valueDescription];
            it(`decodes ${valueDescription}`, () => {
                expect(TlvBoolean.decode(ByteArray.fromHex(encoded)))
                    .toBe(decoded);
            });
        }
    });
});
