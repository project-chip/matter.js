/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Test_TC_ULABEL_1_1Test } from "./Test_TC_ULABEL_1_1";

/**
 * Test case "TC_ULABEL_2.2"
 * 92.3. [TC-ULABEL-2.2] User Label cluster write verification [DUT-server]
 */
export class Test_TC_ULABEL_2_2Test extends Test_TC_ULABEL_1_1Test {
    constructor(storageManager: any) {
        super(storageManager, "Test_TC_ULABEL_2_2");
    }
}
