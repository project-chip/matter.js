/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

describe("CC", () => {
    chip("CC/*").exclude(
        // Requires groups
        "CC/10.1",

        // has weird too exact expectations on transition results
        "CC/9.1",
        "CC/9.2",
        "CC/9.3",
    );
});
