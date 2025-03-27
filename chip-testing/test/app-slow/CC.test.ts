/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

describe("CC", () => {
    chip("CC/*").exclude(
        // Pending full Q support for CC
        "CC/2.2",
        "CC/3.1",
        "CC/9.1",

        // Requires groups
        "CC/10.1",
    );
});
