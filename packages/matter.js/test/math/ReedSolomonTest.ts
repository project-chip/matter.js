/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "../../src/util/ByteArray.js";
import * as assert from "assert";
import { ReedSolomon } from "../../src/math/ReedSolomon.js";

describe("ReedSolomon", () => {
    describe("computeErrorCorrection", () => {
        it("computes the correct error correction bytes", () => {
            const result = new ReedSolomon().computeErrorCorrection(ByteArray.fromHex("40d2754776173206272696c6c69670ec"), 10);

            assert.equal(result.toHex(), "bc2a90136bafeffd4be0");
        });
    });
});
