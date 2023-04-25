/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "../../src/util/ByteArray.js";
import { BitField, BitFieldEnum, BitFlag, BitmapSchema, ByteArrayBitmapSchema } from "../../src/schema/BitmapSchema.js";

describe("BitmapSchema", () => {
    const enum EnumTest {
        VALUE_1 = 1,
        VALUE_2 = 2,
    }

    const TestBitmapSchema = BitmapSchema({
        /** flag1 jsdoc */
        flag1: BitFlag(2),

        /** flag2 jsdoc */
        flag2: BitFlag(4),

        /** enum jsdoc */
        enumTest: BitFieldEnum<EnumTest>(5, 2),

        /** number jsdoc */
        numberTest: BitField(7, 2),
    });

    describe("encode", () => {
        it("encodes a bitmap using the schema", () => {
            const result = TestBitmapSchema.encode({
                flag1: true,
                flag2: false,
                enumTest: EnumTest.VALUE_2,
                numberTest: 1,
            });

            expect(result).toBe(0xC4);
        });
    });

    describe("decode", () => {
        it("decodes a bitmap using the schema", () => {
            const result = TestBitmapSchema.decode(0xB4);

            expect(result).toEqual({
                flag1: true,
                flag2: true,
                enumTest: EnumTest.VALUE_1,
                numberTest: 1,
            });
        });
    });
});

describe("ByteArrayBitmapSchema", () => {
    const TestByteArrayBitmapSchema = ByteArrayBitmapSchema({
        /** flag1 jsdoc */
        flag1: BitFlag(0),

        /** number jsdoc */
        number: BitField(1, 14),

        /** flag2 jsdoc */
        flag2: BitFlag(15),
    });

    describe("encode", () => {
        it("encodes a bitmap using the schema", () => {
            const result = TestByteArrayBitmapSchema.encode({
                flag1: true,
                flag2: true,
                number: 0X2000,
            });

            expect(result.toHex()).toBe("01c0");
        });
    });

    describe("decode", () => {
        it("decodes a bitmap using the schema", () => {
            const result = TestByteArrayBitmapSchema.decode(ByteArray.fromHex("01c0"));

            expect(result).toEqual({
                flag1: true,
                flag2: true,
                number: 0X2000,
            });
        });
    });
});
