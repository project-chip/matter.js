/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "@project-chip/matter.js";
import assert from "assert";
import { Base38 } from "../../src/codec/Base38";

const ENCODED = "-MOA57ZU02IT2L2BJ00";
const DECODED = ByteArray.fromHex("88ffa7915040004751dd02");

describe("Base38", () => {
    context("encode", () => {
        it("encodes a string", () => {
            const result = Base38.encode(DECODED);

            assert.equal(result, ENCODED);
        });
    });

    context("decode", () => {
        it("encodes a string", () => {
            const result = Base38.decode(ENCODED);

            assert.equal(result.toHex(), DECODED.toHex());
        });
    });
});
 