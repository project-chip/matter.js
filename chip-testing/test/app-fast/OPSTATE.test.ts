/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

describe("OPSTATE", () => {
    chip("OPSTATE/*")
        // Exclude because of timing issues with the filesocket/backchannel commands
        .exclude("OPSTATE/2.1", "OPSTATE/2.2", "OPSTATE/2.3");
});
