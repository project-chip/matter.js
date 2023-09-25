/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Needs to be first import!
import { MinimalOnOffDeviceTestInstance } from "../MinimalOnOffDeviceTestInstance";

import {
    AdministratorCommissioning,
    AdministratorCommissioningCluster,
    BasicAdminCommissioningHandler,
    ClusterServer,
} from "@project-chip/matter.js/cluster";
import { StorageBackendMemory } from "@project-chip/matter.js/storage";

/** Test case "TestSubscribe_AdministratorCommissioning" */
export class TestSubscribe_AdministratorCommissioning extends MinimalOnOffDeviceTestInstance {
    constructor(storage: StorageBackendMemory) {
        super("TestSubscribe_AdministratorCommissioning", "GeneralTestPicsFile.txt", storage);
    }

    override async setupCommissioningServer() {
        const commissioningServer = await super.setupCommissioningServer();

        commissioningServer.addRootClusterServer(
            ClusterServer(
                AdministratorCommissioningCluster.with("Basic"),
                {
                    windowStatus: AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen,
                    adminFabricIndex: null,
                    adminVendorId: null,
                },
                BasicAdminCommissioningHandler(),
            ),
        );

        return commissioningServer;
    }
}
