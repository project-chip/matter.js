/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BasicInformationServer } from "../../src/behavior/definitions/basic-information/BasicInformationServer.js";
import { WindowCoveringServer } from "../../src/behavior/definitions/window-covering/WindowCoveringServer.js";
import { IndexBehavior } from "../../src/behavior/system/index/IndexBehavior.js";
import { AccessControl } from "../../src/cluster/definitions/AccessControlCluster.js";
import { BasicInformation } from "../../src/cluster/definitions/BasicInformationCluster.js";
import { WindowCoveringCluster } from "../../src/cluster/definitions/WindowCoveringCluster.js";
import { Agent } from "../../src/endpoint/Agent.js";
import { Endpoint } from "../../src/endpoint/Endpoint.js";
import { TemperatureSensorDevice } from "../../src/endpoint/definitions/device/TemperatureSensorDevice.js";
import { WindowCoveringDevice } from "../../src/endpoint/definitions/device/WindowCoveringDevice.js";
import { RootEndpoint } from "../../src/endpoint/definitions/system/RootEndpoint.js";
import { MockNode } from "../node/mock-node.js";

const WindowCoveringLiftDevice = WindowCoveringDevice.with(
    WindowCoveringServer.for(WindowCoveringCluster.with("Lift", "PositionAwareLift", "AbsolutePosition")),
);

describe("Endpoint", () => {
    describe("agentType", () => {
        it("supports behaviors", () => {
            // RootEndpoint
            RootEndpoint.behaviors satisfies { index: typeof IndexBehavior };
            RootEndpoint.behaviors satisfies { basicInformation: typeof BasicInformationServer };

            // Agent.Instance
            const agent1 = {} as Agent.Instance<RootEndpoint>;
            agent1.index satisfies IndexBehavior;

            // Endpoint.agentType
            const agent2 = {} as InstanceType<Endpoint<RootEndpoint>["agentType"]>;
            agent2.index satisfies IndexBehavior;
        });
    });

    describe("constructor", () => {
        it("accepts bare endpoint type", async () => {
            const endpoint = new Endpoint(WindowCoveringLiftDevice);
            const node = new MockNode();
            node.parts.add(endpoint);
            await endpoint.construction;
            expect(endpoint.state.windowCovering.endProductType).equals(0);
        });

        it("accepts endpoint type with options", async () => {
            const endpoint = new Endpoint(WindowCoveringLiftDevice, {
                owner: new MockNode(),
                windowCovering: { physicalClosedLimitLift: 100 },
            });
            await endpoint.construction;
            expect(endpoint.state.windowCovering.physicalClosedLimitLift).equals(100);
        });

        it("accepts configuration", async () => {
            const endpoint = new Endpoint({
                type: WindowCoveringLiftDevice,
                owner: new MockNode(),
                windowCovering: { physicalClosedLimitLift: 200 },
            });
            await endpoint.construction;
            expect(endpoint.state.windowCovering.physicalClosedLimitLift).equals(200);
        });
    });

    describe("set", () => {
        it("sets", async () => {
            const node = new MockNode();
            const sensor = await node.add(TemperatureSensorDevice);

            await sensor.set({
                temperatureMeasurement: {
                    measuredValue: 123,
                },
            });

            expect(sensor.state.temperatureMeasurement.measuredValue).equals(123);
        });

        it("deep sets object", async () => {
            const node = new MockNode();
            await node.construction;

            await node.set({
                basicInformation: {
                    productAppearance: {
                        finish: BasicInformation.ProductFinish.Matte,
                        primaryColor: BasicInformation.Color.Red,
                    },
                },
            });

            expect(node.state.basicInformation.productAppearance).deep.equals({
                finish: BasicInformation.ProductFinish.Matte,
                primaryColor: BasicInformation.Color.Red,
            });

            await node.set({
                basicInformation: {
                    productAppearance: {
                        primaryColor: BasicInformation.Color.Aqua,
                    },
                },
            });

            expect(node.state.basicInformation.productAppearance).deep.equals({
                finish: BasicInformation.ProductFinish.Matte,
                primaryColor: BasicInformation.Color.Aqua,
            });
        });

        it("deep sets array", async () => {
            const node = new MockNode();
            await node.construction;

            await node.set({
                accessControl: {
                    acl: [
                        {
                            authMode: AccessControl.AccessControlEntryAuthMode.Pase,
                            fabricIndex: 1,
                            privilege: AccessControl.AccessControlEntryPrivilege.Manage,
                        },
                    ],
                },
            });

            await node.set({
                accessControl: {
                    acl: {
                        1: {
                            authMode: AccessControl.AccessControlEntryAuthMode.Case,
                            fabricIndex: 1,
                            privilege: AccessControl.AccessControlEntryPrivilege.Manage,
                        },
                    },
                },
            });

            await node.set({
                accessControl: {
                    acl: {
                        0: {
                            privilege: AccessControl.AccessControlEntryPrivilege.Administer,
                        },
                    },
                },
            });

            expect(node.state.accessControl.acl).deep.equals([
                {
                    authMode: AccessControl.AccessControlEntryAuthMode.Pase,
                    fabricIndex: 1,
                    privilege: AccessControl.AccessControlEntryPrivilege.Administer,
                    subjects: null,
                    targets: null,
                },
                {
                    authMode: AccessControl.AccessControlEntryAuthMode.Case,
                    fabricIndex: 1,
                    privilege: AccessControl.AccessControlEntryPrivilege.Manage,
                    subjects: null,
                    targets: null,
                },
            ]);
        });
    });
});
