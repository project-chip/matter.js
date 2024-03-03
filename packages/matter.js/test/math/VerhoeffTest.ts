/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Verhoeff } from "../../src/math/Verhoeff.js";

describe("Verhoeff", () => {
    describe("computeChecksum", () => {
        it("encodes a string", () => {
            const result = new Verhoeff().computeChecksum("236");

            expect(result).equal(3);
        });
    });
});
