/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

describe("OVENOPSTATE", () => {
    chip("OVENOPSTATE/*").exclude(
        // Exclude because of timing issues with the filesocket/backchannel commands
        "OVENOPSTATE/2.1",
        "OVENOPSTATE/2.2",

        // Excluded because Pause and Resume are unsupported but test python file exists
        // https://github.com/CHIP-Specifications/chip-test-plans/issues/5067
        "OVENOPSTATE/2.3",
    );
});
