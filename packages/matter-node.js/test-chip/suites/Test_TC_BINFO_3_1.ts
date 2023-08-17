/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Test_TC_BINFO_1_1Test } from "./Test_TC_BINFO_1_1";

/**
 * Test case "TC_BINFO_3.1"
 * 12.3.3. [TC-BINFO-3.1] Appearance Attribute DUT as Server
 *
 * In fact here all tests are "user prompt checks" and also disabled, so nothing happens here right now
 */
export class Test_TC_BINFO_3_1Test extends Test_TC_BINFO_1_1Test {
    constructor(storageManager: any) {
        super(storageManager, "Test_TC_BINFO_3_1");
    }

    override async handleUserprompt(_userPrompt: string, testDescription: string) {
        return super.handleUserprompt(_userPrompt, testDescription);
    }
}
