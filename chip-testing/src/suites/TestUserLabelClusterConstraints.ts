/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Needs to be first import!
import { TestUserLabelCluster } from "./TestUserLabelCluster.js";

import { StorageBackendMemory } from "@project-chip/matter.js/storage";

/** Test case "TestUserLabelClusterConstraints" */
export class TestUserLabelClusterConstraints extends TestUserLabelCluster {
    constructor(storage: StorageBackendMemory) {
        super(storage, "TestUserLabelClusterConstraints");
    }
}
