/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { WindowCoveringServer } from "../../../../src/behavior/definitions/window-covering/WindowCoveringServer.js";
import { WindowCovering } from "../../../../src/cluster/definitions/WindowCoveringCluster.js";
import { MockEndpoint } from "../../../endpoint/mock-endpoint.js";

async function createTiltBlindLift() {
    return MockEndpoint.createWith(
        WindowCoveringServer.with("Lift", "Tilt", "PositionAwareLift", "PositionAwareTilt").set({ type: WindowCovering.WindowCoveringType.TiltBlindLift }),
    );
}

describe("WindowCoveringServer", () => {
    it("emits operationalStatus change events when target position changes", async () => {
        const device = await createTiltBlindLift();

        const events = device.captureEvents(WindowCoveringServer, {
            names: ["operationalStatus$Changing", "operationalStatus$Changed"],
        });

        await device.act(async agent => {
            await agent.windowCovering.upOrOpen();
        });

        await device.act(async agent => {
            await agent.windowCovering.downOrClose();
        });

        expect(events).deep.equals([
            { name: "operationalStatus$Changing", newValue: { global: 1, lift: 1, tilt: 1 }, oldValue: {} },
            {
                name: "operationalStatus$Changing",
                newValue: { global: 1, lift: 1, tilt: 1 },
                oldValue: { lift: 1, tilt: 1 },
            },
            { name: "operationalStatus$Changed", newValue: { global: 1, lift: 1, tilt: 1 }, oldValue: {} },
            {
                name: "operationalStatus$Changing",
                newValue: { global: 2, lift: 2, tilt: 2 },
                oldValue: { global: 1, lift: 1, tilt: 1 },
            },
            {
                name: "operationalStatus$Changing",
                newValue: { global: 2, lift: 2, tilt: 2 },
                oldValue: { global: 1, lift: 2, tilt: 2 },
            },
            {
                name: "operationalStatus$Changed",
                newValue: { global: 2, lift: 2, tilt: 2 },
                oldValue: { global: 1, lift: 1, tilt: 1 },
            },
        ]);
    });
});
