/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { FixedLabel } from "@project-chip/matter.js/cluster";
import { Test_TC_FLABEL_1_1Test } from "./Test_TC_FLABEL_1_1";

/**
 * Test case "TC_FLABEL_2.1"
 * 98.2.1. [TC-FLABEL-2.1] Fixed Label cluster [DUT-server]
 */
export class Test_TC_FLABEL_2_1Test extends Test_TC_FLABEL_1_1Test {
    constructor(storageManager: any) {
        super(storageManager, "Test_TC_FLABEL_2_1");
    }

    override async handleUserprompt(userPrompt: string, testDescription: string) {
        if (testDescription.includes("TH reads LabelList from the DUT")) {
            const fixedLabelCluster = this.onOffDevice.getClusterServer(FixedLabel.Cluster);
            const labelList = fixedLabelCluster?.getLabelListAttribute();
            if (
                labelList !== undefined &&
                labelList.length === 1 &&
                labelList[0].label === "foo" &&
                labelList[0].value === "bar2"
            ) {
                return "y\n";
            }
            return "n\n";
        }
        return super.handleUserprompt(userPrompt, testDescription);
    }
}
