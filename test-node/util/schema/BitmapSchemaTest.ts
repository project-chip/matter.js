/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import assert from "assert";
import { BitField, BitFieldEnum, BitFlag, BitmapSchema } from "../../../src/util/schema/BitmapSchema";

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

            assert.strictEqual(result, 0xC4);
        });
    });

    describe("decode", () => {
        it("decodes a bitmap using the schema", () => {
            const result = TestBitmapSchema.decode(0xB4);

            assert.deepStrictEqual(result, {
                flag1: true,
                flag2: true,
                enumTest: EnumTest.VALUE_1,
                numberTest: 1,
            });
        });
    });
});
