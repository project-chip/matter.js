/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Needs to be first import!
import { MinimalOnOffDeviceTestInstance } from "../MinimalOnOffDeviceTestInstance.js";

import { StorageBackendMemory } from "@project-chip/matter.js/storage";

/** Test case "Test_TC_CADMIN_1_16" */
export class Test_TC_CADMIN_1_16 extends MinimalOnOffDeviceTestInstance {
    constructor(storage: StorageBackendMemory, overrideTestName?: string) {
        super(overrideTestName ?? "Test_TC_CADMIN_1_16", "GeneralTestPicsFile.txt", storage);
    }

    override async handleUserprompt(testDescription: string, userPrompt: string) {
        if (testDescription.includes("Step 8b:")) {
            return "y\n";
        }
        return super.handleUserprompt(testDescription, userPrompt);
    }
}
