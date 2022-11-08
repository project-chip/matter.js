/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import assert from "assert";
import { BitmapSchema, EnumBits, FlagBit } from "../../../src/util/schema/BitmapSchema";

describe("BitmapSchema", () => {
    const enum EnumTest {
        VALUE_1 = 1,
        VALUE_2 = 2,
    }

    const TestBitmapSchema = BitmapSchema({
        /** flag1 jsdoc */
        flag1: FlagBit(2),

        /** flag2 jsdoc */
        flag2: FlagBit(4),

        /** enum jsdoc */
        enumTest: EnumBits<EnumTest>(5, 2),
    });

    context("encode", () => {
        it("encodes a bitmap using the schema", () => {
            const result = TestBitmapSchema.encode({
                flag1: true,
                flag2: false,
                enumTest: EnumTest.VALUE_2
            });

            assert.strictEqual(result, 0x44);
        });
    });

    context("decode", () => {
        it("decodes a bitmap using the schema", () => {
            const result = TestBitmapSchema.decode(0x34);

            assert.deepStrictEqual(result, {
                flag1: true,
                flag2: true,
                enumTest: EnumTest.VALUE_1,
            });
        });
    });
});
