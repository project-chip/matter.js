/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceAreaServer } from "#behaviors/service-area";
import { RvcOperationalState } from "#clusters/rvc-operational-state";
import { RvcRunMode } from "#clusters/rvc-run-mode";
import { RoboticVacuumCleanerDevice } from "#devices/robotic-vacuum-cleaner";
import { Endpoint } from "#endpoint/Endpoint.js";
import { MockServerNode } from "../../node/mock-server-node.js";

const DeviceType = RoboticVacuumCleanerDevice.with(ServiceAreaServer.with("Maps", "SelectWhileRunning"));

async function createNode(options?: Endpoint.Options<typeof DeviceType>) {
    const node = await MockServerNode.create();
    if (!options) {
        options = {};
    }

    const rvcRunMode = options.rvcRunMode ?? {};
    options.rvcRunMode = {
        supportedModes: [
            {
                label: "Idle",
                mode: 0,
                modeTags: [{ value: RvcRunMode.ModeTag.Idle }],
            },
            {
                label: "Cleaning",
                mode: 1,
                modeTags: [{ value: RvcRunMode.ModeTag.Cleaning }],
            },
        ],
        currentMode: 0,
        ...rvcRunMode,
    };

    const rvcOperationalState = options.rvcOperationalState ?? {};
    options.rvcOperationalState = {
        operationalStateList: [{ operationalStateId: RvcOperationalState.OperationalState.Error }],
        operationalState: RvcOperationalState.OperationalState.Error,
        ...rvcOperationalState,
    };

    const endpoint = await node.add(DeviceType, options);

    return { node, endpoint };
}

describe("ServiceAreaServer", () => {
    it("allows undefined estimatedEndTime", async () => {
        await createNode({
            serviceArea: {
                estimatedEndTime: undefined,
            },
        });
    });

    it("allows empty estimatedEndTime", async () => {
        await createNode();
    });
});
