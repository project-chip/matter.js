/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

describe("CC", () => {
    chip("CC/*")
        // Excluded because of missing Q quality implementation in ColorControl
        // 3.1 and 9.1 are excluded because of timing issues TODO
        // 10.1 is excluded because of GroupKeyManagement features used in the test
        .exclude("CC/2.2", "CC/3.1", "CC/3.2", "CC/3.3", "CC/4.3", "CC/5.3", "CC/6.3", "CC/7.3", "CC/9.1", "CC/10.1");
});
