/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Test_TC_BINFO_1_1 } from "./Test_TC_BINFO_1_1";

import { BasicInformation } from "@project-chip/matter.js/cluster";
import { StorageBackendMemory } from "@project-chip/matter.js/storage";

/**
 * Test case "TC_BINFO_2.1"
 * 11.2.1. [TC-BINFO-2.1] Attributes [DUT-Server]
 */
export class Test_TC_BINFO_2_1 extends Test_TC_BINFO_1_1 {
    constructor(storage: StorageBackendMemory) {
        super(storage, "Test_TC_BINFO_2_1");
    }

    override async handleUserprompt(testDescription: string, userPrompt: string) {
        if (testDescription.includes("TH Saves the CountryCode Information")) {
            return "y\n";
        }
        if (testDescription.includes("Verify that the Location is same as CountryCode value saved from")) {
            const basicInfo = this.commissioningServer?.getRootClusterServer(BasicInformation.Cluster);
            console.log(basicInfo?.getLocationAttribute());
            if (basicInfo?.getLocationAttribute() === "XX") {
                return "y\n";
            }
            return "n\n";
        }
        if (testDescription.includes("Verify ")) {
            return "y\n";
        }
        return super.handleUserprompt(testDescription, userPrompt);
    }
}
