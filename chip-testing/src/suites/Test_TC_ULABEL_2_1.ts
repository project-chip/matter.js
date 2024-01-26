/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Test_TC_ULABEL_1_1 } from "./Test_TC_ULABEL_1_1.js";

import { StorageBackendMemory } from "@project-chip/matter.js/storage";

/**
 * Test case "TC_ULABEL_2.1"
 * 3.2.1. [TC-ULABEL-2.1] User label cluster read verification [DUT-server]
 */
export class Test_TC_ULABEL_2_1 extends Test_TC_ULABEL_1_1 {
    constructor(storage: StorageBackendMemory) {
        super(storage, "Test_TC_ULABEL_2_1");
    }
}
