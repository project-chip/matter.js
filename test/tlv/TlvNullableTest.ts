/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvString } from "../../src/tlv/TlvString.js";
import { TlvNullable } from "../../src/tlv/TlvNullable.js";
import { ByteArray } from "../../src/util/ByteArray.js";

type CodecVector<I, E> = {[valueDescription: string]: { encoded: E, decoded: I }};

const codecVector: CodecVector<string | null, string> = {
    "an 1 byte signed int": { decoded: "a", encoded: "0c0161" },
    "a 2 bytes signed int": { decoded: null, encoded: "14" },
};

describe("TlvNullable", () => {
    const schema = TlvNullable(TlvString());

    describe("encode", () => {
        for (const valueDescription in codecVector) {
            const { encoded, decoded } = codecVector[valueDescription];
            it(`encodes ${valueDescription}`, () => {
                expect(schema.encode(decoded).toHex())
                    .toBe(encoded);
            });
        }
    });

    describe("decode", () => {
        for (const valueDescription in codecVector) {
            const { encoded, decoded } = codecVector[valueDescription];
            it(`decodes ${valueDescription}`, () => {
                expect(schema.decode(ByteArray.fromHex(encoded)))
                    .toBe(decoded);
            });
        }
    });
});
