/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

describe("CNET", () => {
    chip("CNET/*")
        // Wifi Commissioning required, but no check to skip when not relevant
        .exclude("CNET/4.9");
});
