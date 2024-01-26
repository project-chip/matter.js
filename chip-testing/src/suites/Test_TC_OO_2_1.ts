/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Needs to be first import!
import { MinimalOnOffDeviceTestInstance } from "../MinimalOnOffDeviceTestInstance.js";

import { StorageBackendMemory } from "@project-chip/matter.js/storage";

/** Test case "Test_TC_OO_2_1" */
export class Test_TC_OO_2_1 extends MinimalOnOffDeviceTestInstance {
    constructor(storage: StorageBackendMemory) {
        super("Test_TC_OO_2_1", "GeneralTestPicsFile.txt", storage);
    }
}
