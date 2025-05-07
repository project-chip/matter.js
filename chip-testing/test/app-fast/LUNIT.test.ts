/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

describe("LUNIT", () => {
    chip("LUNIT/*")
        // Matter 1.5 testing newly added attribute
        .exclude("LUNIT/3.1");
});
