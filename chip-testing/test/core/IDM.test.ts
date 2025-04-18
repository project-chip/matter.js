/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

describe("IDM", () => {
    chip("IDM/*")
        // test excluded till we adjusted for https://github.com/project-chip/connectedhomeip/pull/38263
        .exclude("IDM/1.2");
});
