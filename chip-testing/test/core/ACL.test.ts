/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

describe("ACL", () => {
    chip("ACL/*")
        // test excluded till we adjusted for https://github.com/project-chip/connectedhomeip/pull/38263
        .exclude("ACL/2.3", "ACL/2.4", "ACL/2.5", "ACL/2.6", "ACL/2.8");
});
