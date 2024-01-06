/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InvocationContext } from "../../src/behavior/InvocationContext.js";
import { DescriptorServer } from "../../src/behavior/definitions/descriptor/DescriptorServer.js";
import { AccessLevel } from "../../src/cluster/Cluster.js";
import { FabricIndex } from "../../src/datatype/FabricIndex.js";
import { MutableEndpoint } from "../../src/endpoint/type/MutableEndpoint.js";
import type { Fabric } from "../../src/fabric/Fabric.js";
import { PartStore } from "../../src/endpoint/storage/PartStore.js";
import { Val } from "../../src/behavior/state/managed/Val.js";

class MockFabricImplementation {
    fabricIndex;

    constructor(id = 1) {
        this.fabricIndex = id;
    }

    addRemoveCallback() {}
}

export const MockFabric = MockFabricImplementation as unknown as new (id?: number) => Fabric;

export class MockPartStore implements PartStore {
    initialValues: Record<string, Val.Struct> = {};
    
    async set(_values: Record<string, Val.Struct>): Promise<void> {
        // No tests for this yet
    }
    
    async delete(): Promise<void> {
        // No tests for this yet
    }

    storeForBehavior() {
        return {
            set() {
                // No test for this yet
                return Promise.resolve();
            }
        }
    }
}

export const MockEndpoint = MutableEndpoint({
    name: "MyEndpoint",
    deviceType: 1,
    deviceRevision: 1,
}).with(DescriptorServer);

export class MockContext implements InvocationContext {
    accessLevel = AccessLevel.Operate;
    declare associatedFabric?: FabricIndex;

    constructor(options?: InvocationContext) {
        Object.assign(this, options);

        if (!this.associatedFabric) {
            this.associatedFabric = FabricIndex(1);
        }
    }
}
