/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Needs to be first import!
import { MinimalOnOffDeviceTestInstance } from "../MinimalOnOffDeviceTestInstance.js";

import { StorageBackendMemory } from "@project-chip/matter.js/storage";

/** Test case "TestCommandsById" */
export class TestCommandsById extends MinimalOnOffDeviceTestInstance {
    constructor(storage: StorageBackendMemory) {
        super("TestCommandsById", "GeneralTestPicsFile.txt", storage);
    }
}
