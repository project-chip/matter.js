/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvString } from "../../src/tlv/TlvString.js";
import { TlvNullable } from "../../src/tlv/TlvNullable.js";
import { ByteArray } from "../../src/util/ByteArray.js";

describe("TlvNullable", () => {
    const schema = TlvNullable(TlvString());

    describe("encode", () => {
        it("encodes a non-null value", () => {
            const result = schema.encode("a");

            expect(result.toHex()).toBe("0c0161");
        });

        it("encodes a null value", () => {
            const result = schema.encode(null);

            expect(result.toHex()).toBe("14");
        });
    });

    describe("decode", () => {
        it("decodes a non-null value", () => {
            const result = schema.decode(ByteArray.fromHex("0c0161"));

            expect(result).toEqual("a");
        });

        it("decodes a null value", () => {
            const result = schema.decode(ByteArray.fromHex("14"));

            expect(result).toEqual(null);
        });
    });
});
