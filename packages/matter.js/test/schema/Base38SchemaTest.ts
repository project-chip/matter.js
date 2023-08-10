/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Base38 } from "../../src/schema/Base38Schema.js";
import { ByteArray } from "../../src/util/ByteArray.js";

const ENCODED = "-MOA57ZU02IT2L2BJ00";
const DECODED = ByteArray.fromHex("88ffa7915040004751dd02");

describe("Base38Schema", () => {
    describe("encode", () => {
        it("encodes a string", () => {
            const result = Base38.encode(DECODED);

            expect(result).toBe(ENCODED);
        });
    });

    describe("decode", () => {
        it("encodes a string", () => {
            const result = Base38.decode(ENCODED);

            expect(result.toHex()).toBe(DECODED.toHex());
        });
    });
});
