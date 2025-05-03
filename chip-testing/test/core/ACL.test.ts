/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

describe("ACL", () => {
    chip("ACL/*").exclude(
        // test excluded till we adjusted for https://github.com/project-chip/connectedhomeip/pull/38263
        "ACL/2.3",
        "ACL/2.4",
        "ACL/2.5",
        "ACL/2.6",
        "ACL/2.8",

        // Requires ARLs which we don't implement
        "ACL/2.11",
    );
});
