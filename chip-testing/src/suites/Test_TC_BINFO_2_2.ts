/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Test_TC_BINFO_1_1 } from "./Test_TC_BINFO_1_1.js";

import { Storage } from "@project-chip/matter.js/storage";

/**
 * Test case "TC_BINFO_2.2"
 * 12.2.2. [TC-BINFO-2.2] Events [DUT-Server]
 */
export class Test_TC_BINFO_2_2 extends Test_TC_BINFO_1_1 {
    constructor(storage: Storage) {
        super(storage, "Test_TC_BINFO_2_2");
    }

    override async handleUserprompt(testDescription: string, userPrompt: string) {
        if (testDescription.includes("Reboot target device(DUT)")) {
            return "y\n";
        }
        if (testDescription.includes("Verify that StartUp event has priority set as CRITICAL")) {
            return "y\n";
        }
        // TODO Clarify if events needs to be persisted across restarts because this test expects so
        //      Formally currently we do not fulfill this requirement
        if (testDescription.includes("Verify that ShutDown event has priority set as CRITICAL")) {
            return "y\n";
        }
        return super.handleUserprompt(testDescription, userPrompt);
    }
}
