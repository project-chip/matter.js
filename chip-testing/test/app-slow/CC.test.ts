/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

describe("CC", () => {
    chip("CC/*")
        // Excluded because of missing Q quality implementation in ColorControl
        .exclude("CC/3.2", "CC/3.3", "CC/4.3", "CC/5.3", "CC/6.3", "CC/7.3");
});
