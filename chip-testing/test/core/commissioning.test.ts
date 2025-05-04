/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { edit } from "@matter/testing";

describe("commissioning", () => {
    // Revert operational credentials to matter < 1.5
    before(async () => {
        await chip
            .testFor("OperationalCredentialsCluster")
            .edit(edit.sed("s/value: 2$/value: 1/", "s/minValue: 5/minValue: 4/"));
    });

    chip(
        "AddNewFabricFromExistingFabric",
        "ArmFailSafe",
        "CommissionerNodeId",
        "CommissioningWindow",
        "FabricRemovalWhileSubscribed",
        "GeneralCommissioning",
        "MultiAdmin",
        "OperationalCredentialsCluster",
        "SelfFabricRemoval",
    );
});
