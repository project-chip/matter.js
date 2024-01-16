/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ActionContext } from "../../src/behavior/ActionContext.js";
import { DescriptorServer } from "../../src/behavior/definitions/descriptor/DescriptorServer.js";
import { AccessLevel } from "../../src/cluster/Cluster.js";
import { FabricIndex } from "../../src/datatype/FabricIndex.js";
import { MutableEndpoint } from "../../src/endpoint/type/MutableEndpoint.js";
import type { Fabric } from "../../src/fabric/Fabric.js";

class MockFabricImplementation {
    fabricIndex;

    constructor(id = 1) {
        this.fabricIndex = id;
    }

    addRemoveCallback() {}
}

export const MockFabric = MockFabricImplementation as unknown as new (id?: number) => Fabric;

export const MockEndpoint = MutableEndpoint({
    name: "MyEndpoint",
    deviceType: 1,
    deviceRevision: 1,
}).with(DescriptorServer);

export class MockContext implements ActionContext {
    accessLevel = AccessLevel.Operate;
    declare associatedFabric?: FabricIndex;

    constructor(options?: ActionContext) {
        Object.assign(this, options);

        if (!this.associatedFabric) {
            this.associatedFabric = FabricIndex(1);
        }
    }
}
