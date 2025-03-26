/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

describe("CGEN", () => {
    chip("CGEN/*")
        // Exclude CGEN test that require T&C support TODO check PICS
        .exclude("CGEN/2.5", "CGEN/2.6", "CGEN/2.7", "CGEN/2.8", "CGEN/2.9", "CGEN/2.10", "CGEN/2.11");
});
