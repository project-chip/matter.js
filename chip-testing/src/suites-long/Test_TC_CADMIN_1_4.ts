/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Needs to be first import!
import { MinimalOnOffDeviceTestInstance } from "../MinimalOnOffDeviceTestInstance";

import { StorageBackendMemory } from "@project-chip/matter.js/storage";

/** Test case "Test_TC_CADMIN_1_4" */
export class Test_TC_CADMIN_1_4 extends MinimalOnOffDeviceTestInstance {
    constructor(storage: StorageBackendMemory, overrideTestName?: string) {
        super(overrideTestName ?? "Test_TC_CADMIN_1_4", "GeneralTestPicsFile.txt", storage);
    }

    override async handleUserprompt(userPrompt: string, testDescription: string) {
        if (testDescription.includes("Reset Devices to factory defaults")) {
            return "y\n"; // Already done automatically
        } else if (testDescription.includes("opens a commissioning window")) {
            return "y\n";
        } else if (testDescription.includes("Verify")) {
            return "y\n";
        }
        return super.handleUserprompt(userPrompt, testDescription);
    }
}
