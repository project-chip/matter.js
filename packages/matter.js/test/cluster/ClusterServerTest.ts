/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Time } from "../../src/time/Time.js";
import { TimeFake } from "../../src/time/TimeFake.js";
import * as assert from "assert";
import { AdminCommissioningCluster } from "../../src/cluster/AdminCommissioningCluster.js";
import { GroupsCluster } from "../../src/cluster/GroupsCluster.js";
import { AttributeId } from "../../src/datatype/AttributeId.js";
import { CommandId } from "../../src/datatype/CommandId.js";
import { FabricIndex } from "../../src/datatype/FabricIndex.js";
import { ClusterServer } from "../../src/protocol/interaction/InteractionServer.js";
import {
    AttributeServer, BasicInformationCluster, BindingCluster, Cluster, ClusterExtend, FixedAttributeServer,
    IdentifyCluster, IdentifyType
} from "../../src/cluster/index.js";
import { VendorId } from "../../src/datatype/index.js";
import { DeviceTypes, Endpoint } from "../../src/device/index.js";
import { Fabric } from "../../src/fabric/index.js";
import {
    WindowCoveringClusterSchema, WindowCoveringEndProductType, WindowCoveringOperationalStatusEnum,
    WindowCoveringType
} from "../../src/cluster/schema/WindowCovering.js";
import { Level, Logger } from "../../src/log/index.js";

describe("ClusterServer structure", () => {
    describe("correct attribute servers are used and exposed", () => {
        it("FixedAttribute has get but no set", async () => {
            const basic = ClusterServer(BasicInformationCluster,
                {
                    dataModelRevision: 1,
                    vendorName: "test",
                    vendorId: new VendorId(0),
                    productName: "test",
                    productId: 1,
                    nodeLabel: "",
                    location: "DE",
                    hardwareVersion: 1,
                    hardwareVersionString: "1",
                    softwareVersion: 1,
                    softwareVersionString: "1",
                    capabilityMinima: {
                        caseSessionsPerFabric: 3,
                        subscriptionsPerFabric: 3,
                    },
                }, {}, {
                startUp: true
            });

            // TS ignore to allow a check, remove to test typing)

            assert.equal(basic.attributes.softwareVersion.getLocal(), 1);
            assert.ok(basic.attributes.softwareVersion instanceof FixedAttributeServer);
            assert.equal(basic.getSoftwareVersionAttribute(), 1);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            assert.equal(basic.attributes.softwareVersion.setLocal, undefined);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            assert.equal(basic.setSoftwareVersionAttribute, undefined)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            assert.equal(basic.subscribeSoftwareVersionAttribute, undefined)

            // Now we set this Cluster into Endpoint and retrieve it again and verify it is the same
            const endpoint = new Endpoint([DeviceTypes.ON_OFF_LIGHT], 1);
            endpoint.addClusterServer(basic);

            const basic2 = endpoint.getClusterServer(BasicInformationCluster);
            assert.ok(basic2);

            assert.equal(basic2.attributes.softwareVersion.getLocal(), 1);
            assert.ok(basic2.attributes.softwareVersion instanceof FixedAttributeServer);
            assert.equal(basic2.getSoftwareVersionAttribute(), 1);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            assert.equal(basic2.attributes.softwareVersion.setLocal, undefined);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            assert.equal(basic2.setSoftwareVersionAttribute, undefined)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            assert.equal(basic2.subscribeSoftwareVersionAttribute, undefined)
        });

        it("Normal Attribute has set and get", async () => {
            const basic = ClusterServer(BasicInformationCluster,
                {
                    dataModelRevision: 1,
                    vendorName: "test",
                    vendorId: new VendorId(0),
                    productName: "test",
                    productId: 1,
                    nodeLabel: "",
                    location: "DE",
                    hardwareVersion: 1,
                    hardwareVersionString: "1",
                    softwareVersion: 1,
                    softwareVersionString: "1",
                    capabilityMinima: {
                        caseSessionsPerFabric: 3,
                        subscriptionsPerFabric: 3,
                    },
                }, {}, {
                startUp: true
            });

            assert.equal(basic.attributes.nodeLabel.getLocal(), "");
            assert.ok(basic.attributes.nodeLabel instanceof AttributeServer);
            assert.equal(basic.getNodeLabelAttribute(), "");
            basic.attributes.nodeLabel.setLocal("new");
            basic.setNodeLabelAttribute("new 2");
            assert.ok(typeof basic.subscribeNodeLabelAttribute === "function");
            assert.equal(basic.getNodeLabelAttribute(), "new 2");

            // Now we set this Cluster into Endpoint and retrieve it again and verify it is the same
            const endpoint = new Endpoint([DeviceTypes.ON_OFF_LIGHT], 1);
            endpoint.addClusterServer(basic);

            const basic2 = endpoint.getClusterServer(BasicInformationCluster);
            assert.ok(basic2);

            assert.equal(basic2.attributes.nodeLabel.getLocal(), "new 2");
            assert.ok(basic2.attributes.nodeLabel instanceof AttributeServer);
            assert.equal(basic2.getNodeLabelAttribute(), "new 2");
            basic2.attributes.nodeLabel.setLocal("new");
            basic2.setNodeLabelAttribute("new");
            assert.ok(typeof basic2.subscribeNodeLabelAttribute === "function");
            assert.equal(basic2.getNodeLabelAttribute(), "new");
        });

        it("Optional existing fixed attribute, hast also get and no set, but potentially undefined", async () => {
            const basic = ClusterServer(BasicInformationCluster,
                {
                    dataModelRevision: 1,
                    vendorName: "test",
                    vendorId: new VendorId(0),
                    productName: "test",
                    productId: 1,
                    nodeLabel: "",
                    location: "DE",
                    hardwareVersion: 1,
                    hardwareVersionString: "1",
                    softwareVersion: 1,
                    softwareVersionString: "1",
                    capabilityMinima: {
                        caseSessionsPerFabric: 3,
                        subscriptionsPerFabric: 3,
                    },
                    manufacturingDate: "12345678"
                }, {}, {
                startUp: true
            });

            // TS ignore to allow a check, remove to test typing)

            // guard needed because as per types optional are potentially undefined
            assert.equal(basic.attributes.manufacturingDate?.getLocal(), "12345678");
            assert.ok(basic.attributes.manufacturingDate instanceof FixedAttributeServer);
            // guard needed because as per types optional are potentially undefined
            assert.equal(basic.getManufacturingDateAttribute?.(), "12345678");
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            assert.equal(basic.attributes.manufacturingDate.setLocal, undefined);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            assert.equal(basic.setManufacturingDateAttribute, undefined)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            assert.equal(basic.subscribeManufacturingDateAttribute, undefined)

            // Now we set this Cluster into Endpoint and retrieve it again and verify it is the same
            const endpoint = new Endpoint([DeviceTypes.ON_OFF_LIGHT], 1);
            endpoint.addClusterServer(basic);

            const basic2 = endpoint.getClusterServer(BasicInformationCluster);
            assert.ok(basic2);

            // guard needed because as per types optional are potentially undefined
            assert.equal(basic2.attributes.manufacturingDate?.getLocal(), "12345678");
            assert.ok(basic2.attributes.manufacturingDate instanceof FixedAttributeServer);
            // guard needed because as per types optional are potentially undefined
            assert.equal(basic2.getManufacturingDateAttribute?.(), "12345678");
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            assert.equal(basic2.attributes.manufacturingDate.setLocal, undefined);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            assert.equal(basic2.setManufacturingDateAttribute, undefined)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            assert.equal(basic2.subscribeManufacturingDateAttribute, undefined)
        });

        it("Existing optional attribute has get and set, but potentially undefined", async () => {
            const basic = ClusterServer(BasicInformationCluster,
                {
                    dataModelRevision: 1,
                    vendorName: "test",
                    vendorId: new VendorId(0),
                    productName: "test",
                    productId: 1,
                    nodeLabel: "",
                    location: "DE",
                    hardwareVersion: 1,
                    hardwareVersionString: "1",
                    softwareVersion: 1,
                    softwareVersionString: "1",
                    capabilityMinima: {
                        caseSessionsPerFabric: 3,
                        subscriptionsPerFabric: 3,
                    },
                    reachable: true
                }, {}, {
                startUp: true
            });

            // guard needed because as per types optional are potentially undefined
            assert.equal(basic.attributes.reachable?.getLocal(), true);
            assert.ok(basic.attributes.reachable instanceof AttributeServer);
            // guard needed because as per types optional are potentially undefined
            assert.equal(basic.getReachableAttribute?.(), true);
            basic.attributes.reachable.setLocal(false);
            assert.ok(typeof basic.subscribeReachableAttribute === "function");
            basic.setReachableAttribute(true);

            // Now we set this Cluster into Endpoint and retrieve it again and verify it is the same
            const endpoint = new Endpoint([DeviceTypes.ON_OFF_LIGHT], 1);
            endpoint.addClusterServer(basic);

            const basic2 = endpoint.getClusterServer(BasicInformationCluster);
            assert.ok(basic2);

            // guard needed because as per types optional are potentially undefined
            assert.equal(basic2.attributes.reachable?.getLocal(), true);
            assert.ok(basic2.attributes.reachable instanceof AttributeServer);
            // guard needed because as per types optional are potentially undefined
            assert.equal(basic2.getReachableAttribute?.(), true);
            basic2.attributes.reachable.setLocal(false);
            assert.ok(typeof basic2.subscribeReachableAttribute === "function");
            basic2.setReachableAttribute(true);
        });

        it("Optional non-existing fixed attribute returns undefined but do not exist in named object", async () => {
            const basic = ClusterServer(BasicInformationCluster,
                {
                    dataModelRevision: 1,
                    vendorName: "test",
                    vendorId: new VendorId(0),
                    productName: "test",
                    productId: 1,
                    nodeLabel: "",
                    location: "DE",
                    hardwareVersion: 1,
                    hardwareVersionString: "1",
                    softwareVersion: 1,
                    softwareVersionString: "1",
                    capabilityMinima: {
                        caseSessionsPerFabric: 3,
                        subscriptionsPerFabric: 3,
                    },
                }, {}, {
                startUp: true
            });

            // guard needed because as per types optional are potentially undefined
            assert.equal(basic.attributes.serialNumber, undefined);
            // guard needed because as per types optional are potentially undefined
            assert.equal(basic.getSerialNumberAttribute?.(), undefined);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            assert.equal(basic.setSerialNumberAttribute, undefined);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            assert.equal(basic.subscribeSerialNumberAttribute, undefined);

            // Now we set this Cluster into Endpoint and retrieve it again and verify it is the same
            const endpoint = new Endpoint([DeviceTypes.ON_OFF_LIGHT], 1);
            endpoint.addClusterServer(basic);

            const basic2 = endpoint.getClusterServer(BasicInformationCluster);
            assert.ok(basic2);

            // guard needed because as per types optional are potentially undefined
            assert.equal(basic2.attributes.serialNumber, undefined);
            // guard needed because as per types optional are potentially undefined
            assert.equal(basic2.getSerialNumberAttribute?.(), undefined);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            assert.equal(basic2.setSerialNumberAttribute, undefined)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            assert.equal(basic2.subscribeSerialNumberAttribute, undefined);
        });

        it("Optional non-existing attribute returns undefined but do not exist in named object", async () => {
            const basic = ClusterServer(BasicInformationCluster,
                {
                    dataModelRevision: 1,
                    vendorName: "test",
                    vendorId: new VendorId(0),
                    productName: "test",
                    productId: 1,
                    nodeLabel: "",
                    location: "DE",
                    hardwareVersion: 1,
                    hardwareVersionString: "1",
                    softwareVersion: 1,
                    softwareVersionString: "1",
                    capabilityMinima: {
                        caseSessionsPerFabric: 3,
                        subscriptionsPerFabric: 3,
                    },
                }, {}, {
                startUp: true
            });

            assert.equal(basic.attributes.localConfigDisabled, undefined);
            // guard needed because as per types optional are potentially undefined
            assert.equal(basic.getLocalConfigDisabledAttribute?.(), undefined);
            assert.throws(() => basic.setLocalConfigDisabledAttribute(true), {
                message: "Attribute localConfigDisabled is optional and not initialized. To use it please initialize it first."
            });
            assert.throws(() => basic.subscribeLocalConfigDisabledAttribute(() => { /* ignore */ }), {
                message: "Attribute localConfigDisabled is optional and not initialized. To use it please initialize it first."
            });

            // Now we set this Cluster into Endpoint and retrieve it again and verify it is the same
            const endpoint = new Endpoint([DeviceTypes.ON_OFF_LIGHT], 1);
            endpoint.addClusterServer(basic);

            const basic2 = endpoint.getClusterServer(BasicInformationCluster);
            assert.ok(basic2);

            assert.equal(basic2.attributes.localConfigDisabled, undefined);
            // guard needed because as per types optional are potentially undefined
            assert.equal(basic2.getLocalConfigDisabledAttribute?.(), undefined);
            assert.throws(() => basic2.setLocalConfigDisabledAttribute(true), {
                message: "Attribute localConfigDisabled is optional and not initialized. To use it please initialize it first."
            });
            assert.throws(() => basic2.subscribeLocalConfigDisabledAttribute(() => { /* ignore */ }), {
                message: "Attribute localConfigDisabled is optional and not initialized. To use it please initialize it first."
            });
        });

        it("Fabric scoped attribute servers call fabric methods", () => {
            const binding = ClusterServer(BindingCluster, {
                bindingList: []
            }, {});

            let getScopedClusterDataValueCalledCounter = 0;
            let setScopedClusterDataValueCalledCounter = 0;

            const fabric = {
                getScopedClusterDataValue: (cluster: Cluster<any, any, any, any, any>, name: string) => {
                    getScopedClusterDataValueCalledCounter++;
                    assert.equal(cluster.id, BindingCluster.id);
                    assert.equal(name, "bindingList");
                    return [];
                },
                setScopedClusterDataValue<T>(cluster: Cluster<any, any, any, any, any>, clusterDataKey: string, value: T) {
                    setScopedClusterDataValueCalledCounter++;
                    assert.equal(cluster.id, BindingCluster.id);
                    assert.equal(clusterDataKey, "bindingList");
                    assert.deepEqual(value, { value: [{}], version: 1 });
                }
            } as Fabric;

            assert.deepEqual(binding.attributes.bindingList.getLocal(fabric), []);
            binding.attributes.bindingList.setLocal([{}], fabric);
            assert.deepEqual(binding.getBindingListAttribute(fabric), []);
            binding.setBindingListAttribute([{}], fabric);

            assert.equal(getScopedClusterDataValueCalledCounter, 4);
            assert.equal(setScopedClusterDataValueCalledCounter, 2);
        });
    });

    describe("check Server and global attributes", () => {
        it("AdminCommissioningCluster without optional commands", () => {
            const server = ClusterServer(
                AdminCommissioningCluster,
                {
                    windowStatus: 0,
                    adminFabricIndex: new FabricIndex(1),
                    adminVendorId: null
                },
                {
                    openCommissioningWindow: async () => { /* dummy */ },
                    revokeCommissioning: async () => { /* dummy */ },
                }
            );
            assert.ok(server);
            // as any is trick because these attributes are not officially exposed by typings
            assert.deepEqual((server.attributes as any).featureMap.get(), { basic: false });
            assert.deepEqual((server.attributes as any).attributeList.get(), [new AttributeId(0), new AttributeId(1), new AttributeId(2), new AttributeId(65533), new AttributeId(65532), new AttributeId(65531), new AttributeId(65530), new AttributeId(65529), new AttributeId(65528)]);
            assert.deepEqual((server.attributes as any).acceptedCommandList.get(), [new CommandId(0), new CommandId(2)]);
            assert.deepEqual((server.attributes as any).generatedCommandList.get(), []);
            assert.deepEqual((server.attributes as any).eventList.get(), []);
        });

        it("IdentifyCluster including optional commands", () => {
            const server = ClusterServer(
                IdentifyCluster,
                {
                    identifyTime: 100,
                    identifyType: IdentifyType.None
                },
                {
                    identify: async () => { /* dummy */ },
                    triggerEffect: async () => { /* dummy */ },
                }
            );
            assert.ok(server);
            // as any is trick because these attributes are not officially exposed by typings
            assert.deepEqual((server.attributes as any).featureMap.get(), {});
            assert.deepEqual((server.attributes as any).attributeList.get(), [new AttributeId(0), new AttributeId(1), new AttributeId(65533), new AttributeId(65532), new AttributeId(65531), new AttributeId(65530), new AttributeId(65529), new AttributeId(65528)]);
            assert.deepEqual((server.attributes as any).acceptedCommandList.get(), [new CommandId(0), new CommandId(0x40)]);
            assert.deepEqual((server.attributes as any).generatedCommandList.get(), []);
            assert.deepEqual((server.attributes as any).eventList.get(), []);
        });

        it("IdentifyCluster including optional commands", () => {
            const server = ClusterServer(
                IdentifyCluster,
                {
                    identifyTime: 100,
                    identifyType: IdentifyType.None
                },
                {
                    identify: async () => { /* dummy */ },
                    triggerEffect: async () => { /* dummy */ },
                }
            );
            assert.ok(server);
            // as any is trick because these attributes are not officially exposed by typings
            assert.deepEqual((server.attributes as any).featureMap.get(), {});
            assert.deepEqual((server.attributes as any).attributeList.get(), [new AttributeId(0), new AttributeId(1), new AttributeId(65533), new AttributeId(65532), new AttributeId(65531), new AttributeId(65530), new AttributeId(65529), new AttributeId(65528)]);
            assert.deepEqual((server.attributes as any).acceptedCommandList.get(), [new CommandId(0), new CommandId(0x40)]);
            assert.deepEqual((server.attributes as any).generatedCommandList.get(), []);
            assert.deepEqual((server.attributes as any).eventList.get(), []);
        });

        it("IdentifyCluster without optional commands", () => {
            const server = ClusterServer(
                IdentifyCluster,
                {
                    identifyTime: 100,
                    identifyType: IdentifyType.None
                },
                {
                    identify: async () => { /* dummy */ },
                }
            );
            assert.ok(server);
            // as any is trick because these attributes are not officially exposed by typings
            assert.deepEqual((server.attributes as any).featureMap.get(), {});
            assert.deepEqual((server.attributes as any).attributeList.get(), [new AttributeId(0), new AttributeId(1), new AttributeId(65533), new AttributeId(65532), new AttributeId(65531), new AttributeId(65530), new AttributeId(65529), new AttributeId(65528)]);
            assert.deepEqual((server.attributes as any).acceptedCommandList.get(), [new CommandId(0)]);
            assert.deepEqual((server.attributes as any).generatedCommandList.get(), []);
        });

        it("GroupsCluster", () => {
            const server = ClusterServer(
                GroupsCluster,
                {
                    nameSupport: { groupNames: true },
                },
                {
                    addGroup: async () => { throw new Error("not implemented"); },
                    addGroupIfIdentifying: async () => { /* dummy */ },
                    getGroupMembership: async () => { throw new Error("not implemented"); },
                    removeAllGroups: async () => { /* dummy */ },
                    removeGroup: async () => { throw new Error("not implemented"); },
                    viewGroup: async () => { throw new Error("not implemented"); },
                }
            );
            assert.ok(server);
            // as any is trick because these attributes are not officially exposed by typings
            assert.deepEqual((server.attributes as any).featureMap.get(), {});
            assert.deepEqual((server.attributes as any).attributeList.get(), [new AttributeId(0), new AttributeId(65533), new AttributeId(65532), new AttributeId(65531), new AttributeId(65530), new AttributeId(65529), new AttributeId(65528)]);
            assert.deepEqual((server.attributes as any).acceptedCommandList.get(), [new CommandId(0), new CommandId(1), new CommandId(2), new CommandId(3), new CommandId(4), new CommandId(5)]);
            assert.deepEqual((server.attributes as any).generatedCommandList.get(), [new CommandId(0), new CommandId(1), new CommandId(2), new CommandId(3)]);
            assert.deepEqual((server.attributes as any).eventList.get(), []);
        });

        it("Missing Conditionals Log warnings", () => {
            const fakeTime = new TimeFake(0);
            Time.get = () => fakeTime;
            const fakeLogSink = new Array<{ level: Level, log: string }>();
            Logger.log = (level, log) => fakeLogSink.push({ level, log });

            const TestCluster = ClusterExtend(WindowCoveringClusterSchema, {
                supportedFeatures: {
                    lift: true,
                    positionAwareLift: true,
                }
            });
            ClusterServer(
                TestCluster,
                {
                    type: WindowCoveringType.RollerShade,
                    configStatus: {
                        liftPositionAware: false,
                        operational: false,
                        liftEncoderControlled: false,
                        liftMovementReversed: false,
                        tiltPositionAware: false,
                        tiltEncoderControlled: false,
                    },
                    operationalStatus: {
                        coveringStatus: WindowCoveringOperationalStatusEnum.Stopped,
                        liftStatus: WindowCoveringOperationalStatusEnum.Stopped,
                        tiltStatus: WindowCoveringOperationalStatusEnum.Stopped,
                    },
                    endProductType: WindowCoveringEndProductType.RollerShade,
                    mode: {
                        motorDirectionReversed: false,
                        calibrationMode: false,
                        maintenanceMode: false,
                        ledFeedback: false,
                    },
                    numberOfActuationsLift: 0,
                    targetPositionLiftPercent100ths: 0,
                    currentPositionLiftPercent100ths: 0,
                    installedOpenLimitLift: 0,
                    // installedClosedLimitLift: 0, // Should be existing but not set
                    currentPositionTiltPercent100ths: 0, // Should not be there because not valid for feature-combination
                },
                {
                    upOrOpen: async () => { /* dummy */ },
                    downOrClose: async () => { /* dummy */ },
                    stopMotion: async () => { /* dummy */ }
                    // gotoLiftValue: async () => { /* dummy */ }, // Should be existing but not set
                }
            );

            // TODO: Find out how to set TZ=UTC when executing single tests locally

            assert.deepEqual(fakeLogSink, [
                { level: Level.DEBUG, log: '1970-01-01 00:00:00.000 DEBUG InteractionProtocol InitialAttributeValue for "WindowCovering/physicalClosedLimitLift" is optional by supportedFeatures: {"lift":true,"positionAwareLift":true} and is not set!' },
                { level: Level.DEBUG, log: '1970-01-01 00:00:00.000 DEBUG InteractionProtocol InitialAttributeValue for "WindowCovering/currentPositionLift" is optional by supportedFeatures: {"lift":true,"positionAwareLift":true} and is not set!' },
                { level: Level.DEBUG, log: '1970-01-01 00:00:00.000 DEBUG InteractionProtocol InitialAttributeValue for "WindowCovering/currentPositionLiftPercentage" is optional by supportedFeatures: {"lift":true,"positionAwareLift":true} and is not set!' },
                { level: Level.WARN, log: '1970-01-01 00:00:00.000 WARN InteractionProtocol InitialAttributeValue for "WindowCovering/currentPositionTiltPercent100ths" is provided but it\'s neither optional or mandatory for supportedFeatures: {"lift":true,"positionAwareLift":true} but is set!' },
                { level: Level.WARN, log: '1970-01-01 00:00:00.000 WARN InteractionProtocol InitialAttributeValue for "WindowCovering/installedClosedLimitLift" is REQUIRED by supportedFeatures: {"lift":true,"positionAwareLift":true} but is not set!' },
                { level: Level.WARN, log: '1970-01-01 00:00:00.000 WARN InteractionProtocol Command "WindowCovering/goToLiftPercent" is REQUIRED by supportedFeatures: {"lift":true,"positionAwareLift":true} but is not set!' }
            ]);
        });
    });
});
