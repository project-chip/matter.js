/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "@project-chip/matter.js";
import assert from "assert";
import { ReedSolomon } from "../../src/math/ReedSolomon";


describe("ReedSolomon", () => {
    context("computeErrorCorrection", () => {
        it("computes the correct error correction bytes", () => {
            const result = new ReedSolomon().computeErrorCorrection(ByteArray.fromHex("40d2754776173206272696c6c69670ec"), 10);

            assert.equal(result.toHex(), "bc2a90136bafeffd4be0");
        });
    });
});
