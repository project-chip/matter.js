/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

describe("ACL", () => {
    chip("ACL/*").exclude(
        // Requires ARLs which we don't implement
        "ACL/2.11",
    );
});
