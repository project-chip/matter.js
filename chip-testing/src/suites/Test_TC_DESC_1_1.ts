/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Needs to be first import!
import { MinimalOnOffDeviceTestInstance } from "../MinimalOnOffDeviceTestInstance";

import { StorageBackendMemory } from "@project-chip/matter.js/storage";

/** Test case "Test_TC_DESC_1_1" */
export class Test_TC_DESC_1_1 extends MinimalOnOffDeviceTestInstance {
    constructor(storage: StorageBackendMemory) {
        super("Test_TC_DESC_1_1", "GeneralTestPicsFile.txt", storage);
    }

    override async handleUserprompt(userPrompt: string, testDescription: string) {
        if (testDescription.includes("Read the global attribute")) {
            return "y\n";
        }
        return super.handleUserprompt(userPrompt, testDescription);
    }
}
