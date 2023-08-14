/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crypto } from "../../src/crypto/Crypto.js";
Crypto.get = () =>
    ({
        // make Random data deterministic
        getRandomData: (length: number) => {
            return new Uint8Array(length);
        },
    }) as Crypto;

import { Cluster, ClusterExtend } from "../../src/cluster/Cluster.js";
import { AdministratorCommissioningCluster } from "../../src/cluster/definitions/AdministratorCommissioningCluster.js";
import { BasicInformationCluster } from "../../src/cluster/definitions/BasicInformationCluster.js";
import { BindingCluster } from "../../src/cluster/definitions/BindingCluster.js";
import { GroupsCluster } from "../../src/cluster/definitions/GroupsCluster.js";
import { Identify, IdentifyCluster } from "../../src/cluster/definitions/IdentifyCluster.js";
import { WindowCovering } from "../../src/cluster/definitions/WindowCoveringCluster.js";
import { AttributeServer, FixedAttributeServer } from "../../src/cluster/server/AttributeServer.js";
import { ClusterServer } from "../../src/cluster/server/ClusterServer.js";
import { ImplementationError } from "../../src/common/MatterError.js";
import { AttributeId } from "../../src/datatype/AttributeId.js";
import { CommandId } from "../../src/datatype/CommandId.js";
import { EndpointNumber } from "../../src/datatype/EndpointNumber.js";
import { FabricIndex } from "../../src/datatype/FabricIndex.js";
import { VendorId } from "../../src/datatype/VendorId.js";
import { DeviceTypes } from "../../src/device/DeviceTypes.js";
import { Endpoint } from "../../src/device/Endpoint.js";
import { Fabric } from "../../src/fabric/Fabric.js";
import { Level } from "../../src/log/Logger.js";

describe("ClusterServer structure", () => {
    describe("correct attribute servers are used and exposed", () => {
        it("FixedAttribute has get but no set", async () => {
            const basic = ClusterServer(
                BasicInformationCluster,
                {
                    dataModelRevision: 1,
                    vendorName: "test",
                    vendorId: VendorId(0),
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
                },
                {},
                {
                    startUp: true,
                },
            );

            // TS ignore to allow a check, remove to test typing)

            expect(basic.attributes.softwareVersion.getLocal()).toBe(1);
            expect(basic.attributes.softwareVersion.isFixed).toBeTruthy();
            expect(basic.getSoftwareVersionAttribute()).toBe(1);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic.attributes.softwareVersion.setLocal).not.toBeDefined();
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic.setSoftwareVersionAttribute).not.toBeDefined();
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic.subscribeSoftwareVersionAttribute).not.toBeDefined();

            // Now we set this Cluster into Endpoint and retrieve it again and verify it is the same
            const endpoint = new Endpoint([DeviceTypes.ON_OFF_LIGHT], { endpointId: EndpointNumber(1) });
            endpoint.addClusterServer(basic);

            const basic2 = endpoint.getClusterServer(BasicInformationCluster);
            expect(basic2).toBeTruthy();

            expect(basic2?.attributes.softwareVersion.getLocal()).toBe(1);
            expect(basic2?.attributes.softwareVersion.isFixed).toBeTruthy();
            expect(basic2?.getSoftwareVersionAttribute()).toBe(1);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic2.attributes.softwareVersion.setLocal).not.toBeDefined();
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic2.setSoftwareVersionAttribute).not.toBeDefined();
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic2.subscribeSoftwareVersionAttribute).not.toBeDefined();
        });

        it("Normal Attribute has set and get", async () => {
            const basic = ClusterServer(
                BasicInformationCluster,
                {
                    dataModelRevision: 1,
                    vendorName: "test",
                    vendorId: VendorId(0),
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
                },
                {},
                {
                    startUp: true,
                },
            );

            expect(basic.attributes.nodeLabel.getLocal()).toBe("");
            expect(basic.attributes.nodeLabel.isFixed).not.toBeTruthy();
            expect(basic.getNodeLabelAttribute()).toBe("");
            basic.attributes.nodeLabel.setLocal("new");
            basic.setNodeLabelAttribute("new 2");
            expect(typeof basic.subscribeNodeLabelAttribute === "function").toBeTruthy();
            expect(basic.getNodeLabelAttribute()).toBe("new 2");

            // Now we set this Cluster into Endpoint and retrieve it again and verify it is the same
            const endpoint = new Endpoint([DeviceTypes.ON_OFF_LIGHT], { endpointId: EndpointNumber(1) });
            endpoint.addClusterServer(basic);

            const basic2 = endpoint.getClusterServer(BasicInformationCluster);
            expect(basic2).toBeTruthy();

            expect(basic2?.attributes.nodeLabel.getLocal()).toBe("new 2");
            expect(basic2?.attributes.nodeLabel instanceof AttributeServer).toBeTruthy();
            expect(basic2?.getNodeLabelAttribute()).toBe("new 2");
            basic2?.attributes.nodeLabel.setLocal("new");
            basic2?.setNodeLabelAttribute("new");
            expect(typeof basic2?.subscribeNodeLabelAttribute === "function").toBeTruthy();
            expect(basic2?.getNodeLabelAttribute()).toBe("new");
        });

        it("Optional existing fixed attribute, hast also get and no set, but potentially undefined", async () => {
            const basic = ClusterServer(
                BasicInformationCluster,
                {
                    dataModelRevision: 1,
                    vendorName: "test",
                    vendorId: VendorId(0),
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
                    manufacturingDate: "12345678",
                },
                {},
                {
                    startUp: true,
                },
            );

            // TS ignore to allow a check, remove to test typing)

            // guard needed because as per types optional are potentially undefined
            expect(basic.attributes.manufacturingDate?.getLocal()).toBe("12345678");
            expect(
                basic.attributes.manufacturingDate instanceof FixedAttributeServer &&
                    basic.attributes.manufacturingDate.isFixed,
            ).toBeTruthy();
            // guard needed because as per types optional are potentially undefined
            expect(basic.getManufacturingDateAttribute?.()).toBe("12345678");
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic.attributes.manufacturingDate.setLocal).not.toBeDefined();
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic.setManufacturingDateAttribute).not.toBeDefined();
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic.subscribeManufacturingDateAttribute).not.toBeDefined();

            // Now we set this Cluster into Endpoint and retrieve it again and verify it is the same
            const endpoint = new Endpoint([DeviceTypes.ON_OFF_LIGHT], { endpointId: EndpointNumber(1) });
            endpoint.addClusterServer(basic);

            const basic2 = endpoint.getClusterServer(BasicInformationCluster);
            expect(basic2).toBeTruthy();

            // guard needed because as per types optional are potentially undefined
            expect(basic2?.attributes.manufacturingDate?.getLocal()).toBe("12345678");
            expect(
                basic2?.attributes.manufacturingDate instanceof FixedAttributeServer &&
                    basic2.attributes.manufacturingDate.isFixed,
            ).toBeTruthy();
            // guard needed because as per types optional are potentially undefined
            expect(basic2?.getManufacturingDateAttribute?.()).toBe("12345678");
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic2.attributes.manufacturingDate.setLocal).not.toBeDefined();
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic2.setManufacturingDateAttribute).not.toBeDefined();
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic2.subscribeManufacturingDateAttribute).not.toBeDefined();
        });

        it("Existing optional attribute has get and set, but potentially undefined", async () => {
            const basic = ClusterServer(
                BasicInformationCluster,
                {
                    dataModelRevision: 1,
                    vendorName: "test",
                    vendorId: VendorId(0),
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
                    reachable: true,
                },
                {},
                {
                    startUp: true,
                },
            );

            // guard needed because as per types optional are potentially undefined
            expect(basic.attributes.reachable?.getLocal()).toBe(true);
            expect(basic.attributes.reachable instanceof AttributeServer).toBeTruthy();
            // guard needed because as per types optional are potentially undefined
            expect(basic.getReachableAttribute?.()).toBe(true);
            basic.attributes.reachable?.setLocal(false);
            expect(typeof basic.subscribeReachableAttribute === "function").toBeTruthy();
            basic.setReachableAttribute(true);

            // Now we set this Cluster into Endpoint and retrieve it again and verify it is the same
            const endpoint = new Endpoint([DeviceTypes.ON_OFF_LIGHT], { endpointId: EndpointNumber(1) });
            endpoint.addClusterServer(basic);

            const basic2 = endpoint.getClusterServer(BasicInformationCluster);
            expect(basic2).toBeTruthy();

            // guard needed because as per types optional are potentially undefined
            expect(basic2?.attributes.reachable?.getLocal()).toBe(true);
            expect(basic2?.attributes.reachable instanceof AttributeServer).toBeTruthy();
            // guard needed because as per types optional are potentially undefined
            expect(basic2?.getReachableAttribute?.()).toBe(true);
            basic2?.attributes.reachable?.setLocal(false);
            expect(typeof basic2?.subscribeReachableAttribute === "function").toBeTruthy();
            basic2?.setReachableAttribute(true);
        });

        it("Optional non-existing fixed attribute returns undefined but do not exist in named object", async () => {
            const basic = ClusterServer(
                BasicInformationCluster,
                {
                    dataModelRevision: 1,
                    vendorName: "test",
                    vendorId: VendorId(0),
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
                },
                {},
                {
                    startUp: true,
                },
            );

            // guard needed because as per types optional are potentially undefined
            expect(basic.attributes.serialNumber).not.toBeDefined();
            // guard needed because as per types optional are potentially undefined
            expect(basic.getSerialNumberAttribute?.()).not.toBeDefined();
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic.setSerialNumberAttribute).not.toBeDefined();
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic.subscribeSerialNumberAttribute).not.toBeDefined();

            // Now we set this Cluster into Endpoint and retrieve it again and verify it is the same
            const endpoint = new Endpoint([DeviceTypes.ON_OFF_LIGHT], { endpointId: EndpointNumber(1) });
            endpoint.addClusterServer(basic);

            const basic2 = endpoint.getClusterServer(BasicInformationCluster);
            expect(basic2).toBeTruthy();

            // guard needed because as per types optional are potentially undefined
            expect(basic2?.attributes.serialNumber).not.toBeDefined();
            // guard needed because as per types optional are potentially undefined
            expect(basic2?.getSerialNumberAttribute?.()).not.toBeDefined();
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic2.setSerialNumberAttribute).not.toBeDefined();
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic2.subscribeSerialNumberAttribute).not.toBeDefined();
        });

        it("Optional non-existing attribute returns undefined but do not exist in named object", async () => {
            const basic = ClusterServer(
                BasicInformationCluster,
                {
                    dataModelRevision: 1,
                    vendorName: "test",
                    vendorId: VendorId(0),
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
                },
                {},
                {
                    startUp: true,
                },
            );

            expect(basic.attributes.localConfigDisabled).not.toBeDefined();
            // guard needed because as per types optional are potentially undefined
            expect(basic.getLocalConfigDisabledAttribute?.()).not.toBeDefined();
            expect(() => basic.setLocalConfigDisabledAttribute(true)).toThrow(
                new ImplementationError(
                    "Attribute localConfigDisabled is optional and not initialized. To use it please initialize it first.",
                ),
            );
            expect(() =>
                basic.subscribeLocalConfigDisabledAttribute(() => {
                    /* ignore */
                }),
            ).toThrow(
                new ImplementationError(
                    "Attribute localConfigDisabled is optional and not initialized. To use it please initialize it first.",
                ),
            );

            // Now we set this Cluster into Endpoint and retrieve it again and verify it is the same
            const endpoint = new Endpoint([DeviceTypes.ON_OFF_LIGHT], { endpointId: EndpointNumber(1) });
            endpoint.addClusterServer(basic);

            const basic2 = endpoint.getClusterServer(BasicInformationCluster);
            expect(basic2).toBeTruthy();

            expect(basic2?.attributes.localConfigDisabled).not.toBeDefined();
            // guard needed because as per types optional are potentially undefined
            expect(basic2?.getLocalConfigDisabledAttribute?.()).not.toBeDefined();
            expect(() => basic2?.setLocalConfigDisabledAttribute(true)).toThrow(
                new ImplementationError(
                    "Attribute localConfigDisabled is optional and not initialized. To use it please initialize it first.",
                ),
            );
            expect(
                () =>
                    basic2?.subscribeLocalConfigDisabledAttribute(() => {
                        /* ignore */
                    }),
            ).toThrow(
                new ImplementationError(
                    "Attribute localConfigDisabled is optional and not initialized. To use it please initialize it first.",
                ),
            );
        });

        it("Fabric scoped attribute servers call fabric methods", () => {
            const binding = ClusterServer(
                BindingCluster,
                {
                    binding: [],
                },
                {},
            );

            let getScopedClusterDataValueCalledCounter = 0;
            let setScopedClusterDataValueCalledCounter = 0;

            const fabric = {
                getScopedClusterDataValue: (cluster: Cluster<any, any, any, any, any>, name: string) => {
                    getScopedClusterDataValueCalledCounter++;
                    expect(cluster.id).toBe(BindingCluster.id);
                    expect(name).toBe("binding");
                    return [];
                },
                setScopedClusterDataValue<T>(
                    cluster: Cluster<any, any, any, any, any>,
                    clusterDataKey: string,
                    value: T,
                ) {
                    setScopedClusterDataValueCalledCounter++;
                    expect(cluster.id).toBe(BindingCluster.id);
                    expect(clusterDataKey).toBe("binding");
                    expect(value).toEqual({ value: [{ fabricIndex: FabricIndex(1) }] });
                },
            } as Fabric;

            expect(binding.attributes.binding.getLocalForFabric(fabric)).toEqual([]);
            binding.attributes.binding.setLocalForFabric([{ fabricIndex: FabricIndex(1) }], fabric);
            expect(binding.getBindingAttribute(fabric)).toEqual([]);
            binding.setBindingAttribute([{ fabricIndex: FabricIndex(1) }], fabric);

            expect(getScopedClusterDataValueCalledCounter).toBe(4);
            expect(setScopedClusterDataValueCalledCounter).toBe(2);
        });
    });

    describe("check Server and global attributes", () => {
        it("AdminCommissioningCluster without optional commands", () => {
            const server = ClusterServer(
                AdministratorCommissioningCluster,
                {
                    windowStatus: 0,
                    adminFabricIndex: FabricIndex(1),
                    adminVendorId: null,
                },
                {
                    openCommissioningWindow: async () => {
                        /* dummy */
                    },
                    revokeCommissioning: async () => {
                        /* dummy */
                    },
                },
            );
            expect(server).toBeDefined();
            // as any is trick because these attributes are not officially exposed by typings
            expect((server.attributes as any).featureMap.get()).toEqual({});
            expect((server.attributes as any).attributeList.get()).toEqual([
                AttributeId(0),
                AttributeId(1),
                AttributeId(2),
                AttributeId(65528),
                AttributeId(65529),
                AttributeId(65530),
                AttributeId(65531),
                AttributeId(65532),
                AttributeId(65533),
            ]);
            expect((server.attributes as any).acceptedCommandList.get()).toEqual([CommandId(0), CommandId(2)]);
            expect((server.attributes as any).generatedCommandList.get()).toEqual([]);
            expect((server.attributes as any).eventList.get()).toEqual([]);
        });

        it("IdentifyCluster including optional commands", () => {
            const server = ClusterServer(
                IdentifyCluster,
                {
                    identifyTime: 100,
                    identifyType: Identify.IdentifyType.None,
                },
                {
                    identify: async () => {
                        /* dummy */
                    },
                    triggerEffect: async () => {
                        /* dummy */
                    },
                },
            );
            expect(server).toBeTruthy();
            // as any is trick because these attributes are not officially exposed by typings
            expect((server.attributes as any).featureMap.get()).toEqual({});
            expect((server.attributes as any).attributeList.get()).toEqual([
                AttributeId(0),
                AttributeId(1),
                AttributeId(65528),
                AttributeId(65529),
                AttributeId(65530),
                AttributeId(65531),
                AttributeId(65532),
                AttributeId(65533),
            ]);
            expect((server.attributes as any).acceptedCommandList.get()).toEqual([CommandId(0), CommandId(0x40)]);
            expect((server.attributes as any).generatedCommandList.get()).toEqual([]);
            expect((server.attributes as any).eventList.get()).toEqual([]);
        });

        it("IdentifyCluster including optional commands", () => {
            const server = ClusterServer(
                IdentifyCluster,
                {
                    identifyTime: 100,
                    identifyType: Identify.IdentifyType.None,
                },
                {
                    identify: async () => {
                        /* dummy */
                    },
                    triggerEffect: async () => {
                        /* dummy */
                    },
                },
            );
            expect(server).toBeTruthy();
            // as any is trick because these attributes are not officially exposed by typings
            expect((server.attributes as any).featureMap.get()).toEqual({});
            expect((server.attributes as any).attributeList.get()).toEqual([
                AttributeId(0),
                AttributeId(1),
                AttributeId(65528),
                AttributeId(65529),
                AttributeId(65530),
                AttributeId(65531),
                AttributeId(65532),
                AttributeId(65533),
            ]);
            expect((server.attributes as any).acceptedCommandList.get()).toEqual([CommandId(0), CommandId(0x40)]);
            expect((server.attributes as any).generatedCommandList.get()).toEqual([]);
            expect((server.attributes as any).eventList.get()).toEqual([]);
        });

        it("IdentifyCluster without optional commands", () => {
            const server = ClusterServer(
                IdentifyCluster,
                {
                    identifyTime: 100,
                    identifyType: Identify.IdentifyType.None,
                },
                {
                    identify: async () => {
                        /* dummy */
                    },
                },
            );
            expect(server).toBeTruthy();
            // as any is trick because these attributes are not officially exposed by typings
            expect((server.attributes as any).featureMap.get()).toEqual({});
            expect((server.attributes as any).attributeList.get()).toEqual([
                AttributeId(0),
                AttributeId(1),
                AttributeId(65528),
                AttributeId(65529),
                AttributeId(65530),
                AttributeId(65531),
                AttributeId(65532),
                AttributeId(65533),
            ]);
            expect((server.attributes as any).acceptedCommandList.get()).toEqual([CommandId(0)]);
            expect((server.attributes as any).generatedCommandList.get()).toEqual([]);
        });

        it("GroupsCluster", () => {
            const server = ClusterServer(
                GroupsCluster,
                {
                    nameSupport: { nameSupport: true },
                },
                {
                    addGroup: async () => {
                        throw new Error("not implemented");
                    },
                    addGroupIfIdentifying: async () => {
                        /* dummy */
                    },
                    getGroupMembership: async () => {
                        throw new Error("not implemented");
                    },
                    removeAllGroups: async () => {
                        /* dummy */
                    },
                    removeGroup: async () => {
                        throw new Error("not implemented");
                    },
                    viewGroup: async () => {
                        throw new Error("not implemented");
                    },
                },
            );
            expect(server).toBeTruthy();
            // as any is trick because these attributes are not officially exposed by typings
            expect((server.attributes as any).featureMap.get()).toEqual({ groupNames: true });
            expect((server.attributes as any).attributeList.get()).toEqual([
                AttributeId(0),
                AttributeId(65528),
                AttributeId(65529),
                AttributeId(65530),
                AttributeId(65531),
                AttributeId(65532),
                AttributeId(65533),
            ]);
            expect((server.attributes as any).acceptedCommandList.get()).toEqual([
                CommandId(0),
                CommandId(1),
                CommandId(2),
                CommandId(3),
                CommandId(4),
                CommandId(5),
            ]);
            expect((server.attributes as any).generatedCommandList.get()).toEqual([
                CommandId(0),
                CommandId(1),
                CommandId(2),
                CommandId(3),
            ]);
            expect((server.attributes as any).eventList.get()).toEqual([]);
        });

        it("Missing Conditionals Log warnings", () => {
            const messages = captureLogs(() => {
                const TestCluster = ClusterExtend(WindowCovering.Complete, {
                    supportedFeatures: {
                        lift: true,
                        positionAwareLift: true,
                    },
                });
                ClusterServer(
                    TestCluster,
                    {
                        type: WindowCovering.WindowCoveringType.Rollershade,
                        configStatus: {
                            liftPositionAware: false,
                            onlineReserved: false,
                            operational: false,
                            liftEncoderControlled: false,
                            liftMovementReversed: false,
                            tiltPositionAware: false,
                            tiltEncoderControlled: false,
                        },
                        operationalStatus: {
                            global: WindowCovering.MovementStatus.Stopped,
                            lift: WindowCovering.MovementStatus.Stopped,
                            tilt: WindowCovering.MovementStatus.Stopped,
                        },
                        endProductType: WindowCovering.EndProductType.RollerShade,
                        mode: {
                            motorDirectionReversed: false,
                            calibrationMode: false,
                            maintenanceMode: false,
                            ledFeedback: false,
                        },
                        numberOfActuationsLift: 0,
                        targetPositionLiftPercent100ths: 0,
                        currentPositionLiftPercent100ths: 0,
                        currentPositionTiltPercent100ths: 0, // Should not be there because not valid for feature-combination
                    },
                    {
                        upOrOpen: async () => {
                            /* dummy */
                        },
                        downOrClose: async () => {
                            /* dummy */
                        },
                        stopMotion: async () => {
                            /* dummy */
                        },
                        // gotoLiftValue: async () => { /* dummy */ }, // Should be existing but not set
                    },
                );
            });

            expect(messages).toEqual([
                {
                    level: Level.DEBUG,
                    message:
                        'xxxx-xx-xx xx:xx:xx.xxx DEBUG ClusterServer InitialAttributeValue for "WindowCovering/currentPositionLiftPercentage" is optional by supportedFeatures: {"lift":true,"positionAwareLift":true} and is not set!',
                },
                {
                    level: Level.WARN,
                    message:
                        'xxxx-xx-xx xx:xx:xx.xxx WARN ClusterServer InitialAttributeValue for "WindowCovering/currentPositionTiltPercent100ths" is provided but it\'s neither optional or mandatory for supportedFeatures: {"lift":true,"positionAwareLift":true} but is set!',
                },
                {
                    level: Level.WARN,
                    message:
                        'xxxx-xx-xx xx:xx:xx.xxx WARN ClusterServer Command "WindowCovering/goToLiftPercentage" is REQUIRED by supportedFeatures: {"lift":true,"positionAwareLift":true} but is not set!',
                },
            ]);
        });
    });
});
