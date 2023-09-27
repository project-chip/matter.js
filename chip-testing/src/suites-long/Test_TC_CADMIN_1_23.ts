/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Needs to be first import!
import { Test_TC_CADMIN_1_4 } from "./Test_TC_CADMIN_1_4";

import { StorageBackendMemory } from "@project-chip/matter.js/storage";

/** Test case "Test_TC_CADMIN_1_23" */
export class Test_TC_CADMIN_1_23 extends Test_TC_CADMIN_1_4 {
    constructor(storage: StorageBackendMemory, overrideTestName?: string) {
        super(storage, overrideTestName ?? "Test_TC_CADMIN_1_23");
    }
}
