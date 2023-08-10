/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvNullable } from "../../src/tlv/TlvNullable.js";
import { TlvString } from "../../src/tlv/TlvString.js";
import { ByteArray } from "../../src/util/ByteArray.js";

type CodecVector<I, E> = { [valueDescription: string]: { encoded: E; decoded: I } };

const codecVector: CodecVector<string | null, string> = {
    "a non-null value": { decoded: "a", encoded: "0c0161" },
    "a null value": { decoded: null, encoded: "14" },
};

describe("TlvNullable", () => {
    const schema = TlvNullable(TlvString);

    describe("encode", () => {
        for (const valueDescription in codecVector) {
            const { encoded, decoded } = codecVector[valueDescription];
            it(`encodes ${valueDescription}`, () => {
                expect(schema.encode(decoded).toHex()).toBe(encoded);
            });
        }
    });

    describe("decode", () => {
        for (const valueDescription in codecVector) {
            const { encoded, decoded } = codecVector[valueDescription];
            it(`decodes ${valueDescription}`, () => {
                expect(schema.decode(ByteArray.fromHex(encoded))).toBe(decoded);
            });
        }
    });
});
