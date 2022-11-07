/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import assert from "assert";
import { BitmapSchema, BitPosition } from "../../src/schema/BitmapSchema";

describe("BitmapSchema", () => {

    const TestBitmapSchema = BitmapSchema({
        /** flag1 jsdoc */
        flag1: BitPosition(2),

        /** flag2 jsdoc */
        flag2: BitPosition(4),
    });

    context("encode", () => {
        it("encodes a bitmap using the schema", () => {
            const result = TestBitmapSchema.encode({
                flag1: true,
                flag2: false,
            });

            assert.strictEqual(result, 4);
        });
    });

    context("decode", () => {
        it("decodes a bitmap using the schema", () => {
            const result = TestBitmapSchema.decode(0x14);

            assert.deepStrictEqual(result, {
                flag1: true,
                flag2: true,
            });
        });
    });
});
