/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Test_TC_ULABEL_1_1 } from "./Test_TC_ULABEL_1_1";

import { StorageBackendMemory } from "@project-chip/matter.js/storage";

/**
 * Test case "TC_ULABEL_2.4"
 * 92.5. [TC-ULABEL-2.4] User Label cluster empty entry verification [DUT-server]
 */
export class Test_TC_ULABEL_2_4 extends Test_TC_ULABEL_1_1 {
    constructor(storage: StorageBackendMemory) {
        super(storage, "Test_TC_ULABEL_2_4");
    }
}
