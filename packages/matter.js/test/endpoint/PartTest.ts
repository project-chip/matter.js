/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BasicInformationBehavior } from "../../src/behavior/definitions/basic-information/BasicInformationBehavior.js";
import { BasicInformationServer } from "../../src/behavior/definitions/basic-information/BasicInformationServer.js";
import { WindowCoveringServer } from "../../src/behavior/definitions/window-covering/WindowCoveringServer.js";
import { IndexBehavior } from "../../src/behavior/system/index/IndexBehavior.js";
import { WindowCoveringCluster } from "../../src/cluster/definitions/WindowCoveringCluster.js";
import { Agent } from "../../src/endpoint/Agent.js";
import { Part } from "../../src/endpoint/Part.js";
import { WindowCoveringDevice } from "../../src/endpoint/definitions/device/WindowCoveringDevice.js";
import { RootEndpoint } from "../../src/endpoint/definitions/system/RootEndpoint.js";
import { MockNode } from "../node/mock-node.js";

const WindowCoveringLiftDevice = WindowCoveringDevice.with(
    WindowCoveringServer.for(WindowCoveringCluster.with("Lift", "PositionAwareLift", "AbsolutePosition")),
);

describe("Part", () => {
    describe("agentType", () => {
        it("supports behaviors", () => {
            // RootEndpoint
            RootEndpoint.behaviors satisfies { index: typeof IndexBehavior };
            RootEndpoint.behaviors satisfies { basicInformation: typeof BasicInformationBehavior };
            RootEndpoint.behaviors satisfies { basicInformation: typeof BasicInformationServer };

            // Agent.Instance
            const agent1 = {} as Agent.Instance<RootEndpoint>;
            agent1.index satisfies IndexBehavior;
            agent1.basicInformation satisfies BasicInformationBehavior;

            // Part.agentType
            const agent2 = {} as InstanceType<Part<RootEndpoint>["agentType"]>;
            agent2.index satisfies IndexBehavior;
            agent2.basicInformation satisfies BasicInformationBehavior;
        });
    });

    describe("constructor", () => {
        it("accepts bare endpoint type", async () => {
            const part = new Part(WindowCoveringLiftDevice);
            const node = new MockNode();
            node.parts.add(part);
            await part.construction;
            expect(part.state.windowCovering.endProductType).equals(0);
        });

        it("accepts endpoint type with options", async () => {
            const part = new Part(WindowCoveringLiftDevice, {
                owner: new MockNode(),
                windowCovering: { physicalClosedLimitLift: 100 },
            });
            await part.construction;
            expect(part.state.windowCovering.physicalClosedLimitLift).equals(100);
        });

        it("accepts configuration", async () => {
            const part = new Part({
                type: WindowCoveringLiftDevice,
                owner: new MockNode(),
                windowCovering: { physicalClosedLimitLift: 200 },
            });
            await part.construction;
            expect(part.state.windowCovering.physicalClosedLimitLift).equals(200);
        });
    });
});
