/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { BasicInformation } from "@project-chip/matter.js/cluster";
import { Test_TC_BINFO_1_1Test } from "./Test_TC_BINFO_1_1";

/**
 * Test case "TC_BINFO_2.1"
 * 11.2.1. [TC-BINFO-2.1] Attributes [DUT-Server]
 */
export class Test_TC_BINFO_2_1Test extends Test_TC_BINFO_1_1Test {
    constructor(storageManager: any) {
        super(storageManager, "Test_TC_BINFO_2_1");
    }

    override async handleUserprompt(userPrompt: string, testDescription: string) {
        if (testDescription.includes("TH Saves the CountryCode Information")) {
            return "y\n";
        }
        if (testDescription.includes("Verify that VendorID matches the value assigned to this manufacturer")) {
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
        if (testDescription.includes("Verify that the SoftwareVersion is not displayed to the end-user")) {
            return "y\n";
        }
        if (testDescription.includes("Verify if the first 8 characters specify date according to ISO 8601")) {
            return "y\n";
        }
        if (testDescription.includes("Verify that it specifies a link to a specific web page")) {
            return "y\n";
        }
        if (testDescription.includes("Verify that it does not include the name of the vendor")) {
            return "y\n";
        }
        return super.handleUserprompt(userPrompt, testDescription);
    }
}
