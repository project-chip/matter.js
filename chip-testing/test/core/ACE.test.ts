/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

describe("ACE", () => {
    chip("ACE/*").exclude(
        // Our group management server is too limited to pass this test
        "ACE/1.6",
    );
});
