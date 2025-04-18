/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

describe("ACE", () => {
    chip("ACE/*").exclude(
        // test excluded till we adjusted for https://github.com/project-chip/connectedhomeip/pull/38263
        "ACE/1.2",
        "ACE/1.3",
        // Our group management server is too limited to pass this test
        "ACE/1.6",
    );
});
