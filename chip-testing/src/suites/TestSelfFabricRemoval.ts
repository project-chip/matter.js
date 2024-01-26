/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Needs to be first import!
import { TestCommissioningWindow } from "./TestCommissioningWindow.js";

import { StorageBackendMemory } from "@project-chip/matter.js/storage";

/** Test case "TestSelfFabricRemoval" */
export class TestSelfFabricRemoval extends TestCommissioningWindow {
    constructor(storage: StorageBackendMemory) {
        super(storage, "TestSelfFabricRemoval");
    }
}
