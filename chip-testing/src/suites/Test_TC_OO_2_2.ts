/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Needs to be first import!
import { MinimalOnOffDeviceTestInstance } from "../MinimalOnOffDeviceTestInstance.js";

import { StorageBackendMemory } from "@project-chip/matter.js/storage";

/** Test case "Test_TC_OO_2_2" */
export class Test_TC_OO_2_2 extends MinimalOnOffDeviceTestInstance {
    constructor(storage: StorageBackendMemory) {
        super("Test_TC_OO_2_2", "GeneralTestPicsFile.txt", storage);
    }

    override async handleUserprompt(testDescription: string, userPrompt: string) {
        if (testDescription.includes("set OnOff attribute manually to on")) {
            if (this.onOffDevice !== undefined) {
                this.onOffDevice.setOnOff(true);
                return "y\n";
            } else {
                return "n\n";
            }
        } else if (testDescription.includes("set OnOff attribute manually to off")) {
            if (this.onOffDevice !== undefined) {
                this.onOffDevice.setOnOff(false);
                return "y\n";
            } else {
                return "n\n";
            }
        }
        return super.handleUserprompt(testDescription, userPrompt);
    }
}
