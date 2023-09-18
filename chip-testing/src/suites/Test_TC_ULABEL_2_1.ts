/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Test_TC_ULABEL_1_1Test } from "./Test_TC_ULABEL_1_1";

/**
 * Test case "TC_ULABEL_2.1"
 * 3.2.1. [TC-ULABEL-2.1] User label cluster read verification [DUT-server]
 */
export class Test_TC_ULABEL_2_1Test extends Test_TC_ULABEL_1_1Test {
    constructor(storageManager: any) {
        super(storageManager, "Test_TC_ULABEL_2_1");
    }
}
