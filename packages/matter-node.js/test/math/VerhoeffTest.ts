/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import assert from "assert";
import { Verhoeff } from "../../src/math/Verhoeff";


describe("Verhoeff", () => {
    context("computeChecksum", () => {
        it("encodes a string", () => {
            const result = new Verhoeff().computeChecksum("236");

            assert.equal(result, 3);
        });
    });
});
