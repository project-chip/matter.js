/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "../../src/util/ByteArray.js";

describe("ByteArray", () => {
    describe("fromHex", () => {
        it("decodes the hex string", () => {
            const result = ByteArray.fromHex("1234");

            expect(result).toEqual(ByteArray.of(0x12, 0x34));
        });

        it("decodes an empty array", () => {
            const result = ByteArray.fromHex("");

            expect(result).toEqual(new ByteArray(0));
        });
    });

    describe("fromString", () => {
        it("get the bytes of a string", () => {
            const result = ByteArray.fromString("0");

            expect(result).toEqual(ByteArray.of(0x30));
        });
    });

    describe("toHex", () => {
        it("encodes the bytes as a hex string", () => {
            const result = ByteArray.of(0x12, 0x34).toHex();

            expect(result).toBe("1234");
        });

        it("encodes an empty array", () => {
            const result = new ByteArray(0).toHex();

            expect(result).toBe("");
        });
    });

    describe("concat", () => {
        it("concats two ByteArrays", () => {
            const result = ByteArray.concat(ByteArray.of(0x12), ByteArray.of(0x34));

            expect(result).toEqual(ByteArray.of(0x12, 0x34));
        });
    });
});
