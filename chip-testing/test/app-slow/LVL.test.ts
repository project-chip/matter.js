/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

describe("LVL", () => {
    chip("LVL/*").exclude(
        // TODO - requires group management features
        "LVL/9.1",

        // TODO - 2.3 fails due to too many remaining time reports; we need to add mechanism to Behavior to filter
        // change reports as required by the specification
        "LVL/2.3",
    );
});
