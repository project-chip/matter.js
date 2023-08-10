/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Verhoeff } from "../../src/math/Verhoeff.js";

describe("Verhoeff", () => {
    describe("computeChecksum", () => {
        it("encodes a string", () => {
            const result = new Verhoeff().computeChecksum("236");

            expect(result).toBe(3);
        });
    });
});
