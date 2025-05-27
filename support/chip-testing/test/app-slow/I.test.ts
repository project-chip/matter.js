/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

describe("I", () => {
    chip("I/*").exclude(
        // This is Matter 1.5, although it's complaining about events caused by our timer which we probably shouldn't
        // emit anyway
        "I/2.4",
    );
});
