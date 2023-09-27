/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Needs to be first import!
import { Test_TC_ULABEL_1_1 } from "./Test_TC_ULABEL_1_1.js";

import { ClusterServer, UserLabelCluster } from "@project-chip/matter.js/cluster";
import { StorageBackendMemory } from "@project-chip/matter.js/storage";

/** Test case "TestUserLabelCluster" */
export class TestUserLabelCluster extends Test_TC_ULABEL_1_1 {
    constructor(storage: StorageBackendMemory, name?: string) {
        super(storage, name ?? "TestUserLabelCluster");
    }

    override async setupCommissioningServer() {
        const commissioningServer = await super.setupCommissioningServer();
        commissioningServer.addRootClusterServer(
            ClusterServer(
                UserLabelCluster,
                {
                    labelList: [],
                },
                {},
            ),
        );
        return commissioningServer;
    }
}
