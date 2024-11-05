/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterServer } from "#cluster/server/ClusterServer.js";
import { asClusterServerInternal } from "#cluster/server/ClusterServerTypes.js";
import {
    AdministratorCommissioningCluster,
    BasicInformationCluster,
    BindingCluster,
    GroupsCluster,
    Identify,
    IdentifyCluster,
    WindowCovering,
} from "#clusters";
import { DeviceTypes } from "#device/DeviceTypes.js";
import { Endpoint } from "#device/Endpoint.js";
import { ImplementationError, LogLevel, Logger, StorageBackendMemory, StorageManager, SyncStorage } from "#general";
import { Specification } from "#model";
import { AttributeServer, ClusterDatasource, Fabric, FixedAttributeServer } from "#protocol";
import { AttributeId, Cluster, ClusterExtend, CommandId, EndpointNumber, FabricIndex, VendorId } from "#types";

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
                    specificationVersion: Specification.SPECIFICATION_VERSION,
                    maxPathsPerInvoke: 1,
                },
                {},
                {
                    startUp: true,
                },
            );

            // TS ignore to allow a check, remove to test typing)

            expect(basic.attributes.softwareVersion.getLocal()).equal(1);
            expect(basic.attributes.softwareVersion.isFixed).ok;
            expect(basic.getSoftwareVersionAttribute()).equal(1);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic.attributes.softwareVersion.setLocal).undefined;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic.setSoftwareVersionAttribute).undefined;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic.subscribeSoftwareVersionAttribute).undefined;

            // Now we set this Cluster into Endpoint and retrieve it again and verify it is the same
            const endpoint = new Endpoint([DeviceTypes.ON_OFF_LIGHT], { endpointId: EndpointNumber(1) });
            endpoint.addClusterServer(basic);

            const basic2 = endpoint.getClusterServer(BasicInformationCluster);
            expect(basic2).ok;

            expect(basic2?.attributes.softwareVersion.getLocal()).equal(1);
            expect(basic2?.attributes.softwareVersion.isFixed).ok;
            expect(basic2?.getSoftwareVersionAttribute()).equal(1);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic2.attributes.softwareVersion.setLocal).undefined;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic2.setSoftwareVersionAttribute).undefined;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic2.subscribeSoftwareVersionAttribute).undefined;
        });

        it("Normal Attribute have set and get", async () => {
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
                    specificationVersion: Specification.SPECIFICATION_VERSION,
                    maxPathsPerInvoke: 1,
                },
                {},
                {
                    startUp: true,
                },
            );

            expect(basic.attributes.nodeLabel.getLocal()).equal("");
            expect(basic.attributes.nodeLabel.isFixed).not.ok;
            expect(basic.getNodeLabelAttribute()).equal("");
            basic.attributes.nodeLabel.setLocal("new");
            basic.setNodeLabelAttribute("new 2");
            expect(typeof basic.subscribeNodeLabelAttribute === "function").ok;
            expect(basic.getNodeLabelAttribute()).equal("new 2");

            // Now we set this Cluster into Endpoint and retrieve it again and verify it is the same
            const endpoint = new Endpoint([DeviceTypes.ON_OFF_LIGHT], { endpointId: EndpointNumber(1) });
            endpoint.addClusterServer(basic);

            const basic2 = endpoint.getClusterServer(BasicInformationCluster);
            expect(basic2).ok;

            expect(basic2?.attributes.nodeLabel.getLocal()).equal("new 2");
            expect(basic2?.attributes.nodeLabel instanceof AttributeServer).ok;
            expect(basic2?.getNodeLabelAttribute()).equal("new 2");
            basic2?.attributes.nodeLabel.setLocal("new");
            basic2?.setNodeLabelAttribute("new");
            expect(typeof basic2?.subscribeNodeLabelAttribute === "function").ok;
            expect(basic2?.getNodeLabelAttribute()).equal("new");
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
                    specificationVersion: Specification.SPECIFICATION_VERSION,
                    maxPathsPerInvoke: 1,
                },
                {},
                {
                    startUp: true,
                },
            );

            // TS ignore to allow a check, remove to test typing)

            // guard needed because as per types optional are potentially undefined
            expect(basic.attributes.manufacturingDate?.getLocal()).equal("12345678");
            expect(
                basic.attributes.manufacturingDate instanceof FixedAttributeServer &&
                    basic.attributes.manufacturingDate.isFixed,
            ).ok;
            // guard needed because as per types optional are potentially undefined
            expect(basic.getManufacturingDateAttribute?.()).equal("12345678");
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic.attributes.manufacturingDate.setLocal).undefined;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic.setManufacturingDateAttribute).undefined;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic.subscribeManufacturingDateAttribute).undefined;

            // Now we set this Cluster into Endpoint and retrieve it again and verify it is the same
            const endpoint = new Endpoint([DeviceTypes.ON_OFF_LIGHT], { endpointId: EndpointNumber(1) });
            endpoint.addClusterServer(basic);

            const basic2 = endpoint.getClusterServer(BasicInformationCluster);
            expect(basic2).ok;

            // guard needed because as per types optional are potentially undefined
            expect(basic2?.attributes.manufacturingDate?.getLocal()).equal("12345678");
            expect(
                basic2?.attributes.manufacturingDate instanceof FixedAttributeServer &&
                    basic2.attributes.manufacturingDate.isFixed,
            ).ok;
            // guard needed because as per types optional are potentially undefined
            expect(basic2?.getManufacturingDateAttribute?.()).equal("12345678");
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic2.attributes.manufacturingDate.setLocal).undefined;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic2.setManufacturingDateAttribute).undefined;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic2.subscribeManufacturingDateAttribute).undefined;
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
                    specificationVersion: Specification.SPECIFICATION_VERSION,
                    maxPathsPerInvoke: 1,
                },
                {},
                {
                    startUp: true,
                },
            );

            // guard needed because as per types optional are potentially undefined
            expect(basic.attributes.reachable?.getLocal()).equal(true);
            expect(basic.attributes.reachable instanceof AttributeServer).ok;
            // guard needed because as per types optional are potentially undefined
            expect(basic.getReachableAttribute?.()).equal(true);
            basic.attributes.reachable?.setLocal(false);
            expect(typeof basic.subscribeReachableAttribute === "function").ok;
            basic.setReachableAttribute(true);

            // Now we set this Cluster into Endpoint and retrieve it again and verify it is the same
            const endpoint = new Endpoint([DeviceTypes.ON_OFF_LIGHT], { endpointId: EndpointNumber(1) });
            endpoint.addClusterServer(basic);

            const basic2 = endpoint.getClusterServer(BasicInformationCluster);
            expect(basic2).ok;

            // guard needed because as per types optional are potentially undefined
            expect(basic2?.attributes.reachable?.getLocal()).equal(true);
            expect(basic2?.attributes.reachable instanceof AttributeServer).ok;
            // guard needed because as per types optional are potentially undefined
            expect(basic2?.getReachableAttribute?.()).equal(true);
            basic2?.attributes.reachable?.setLocal(false);
            expect(typeof basic2?.subscribeReachableAttribute === "function").ok;
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
                    specificationVersion: Specification.SPECIFICATION_VERSION,
                    maxPathsPerInvoke: 1,
                },
                {},
                {
                    startUp: true,
                },
            );

            // guard needed because as per types optional are potentially undefined
            expect(basic.attributes.serialNumber).undefined;
            // guard needed because as per types optional are potentially undefined
            expect(basic.getSerialNumberAttribute?.()).undefined;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic.setSerialNumberAttribute).undefined;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic.subscribeSerialNumberAttribute).undefined;

            // Now we set this Cluster into Endpoint and retrieve it again and verify it is the same
            const endpoint = new Endpoint([DeviceTypes.ON_OFF_LIGHT], { endpointId: EndpointNumber(1) });
            endpoint.addClusterServer(basic);

            const basic2 = endpoint.getClusterServer(BasicInformationCluster);
            expect(basic2).ok;

            // guard needed because as per types optional are potentially undefined
            expect(basic2?.attributes.serialNumber).undefined;
            // guard needed because as per types optional are potentially undefined
            expect(basic2?.getSerialNumberAttribute?.()).undefined;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic2.setSerialNumberAttribute).undefined;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(basic2.subscribeSerialNumberAttribute).undefined;
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
                    specificationVersion: Specification.SPECIFICATION_VERSION,
                    maxPathsPerInvoke: 1,
                },
                {},
                {
                    startUp: true,
                },
            );

            expect(basic.attributes.localConfigDisabled).undefined;
            // guard needed because as per types optional are potentially undefined
            expect(basic.getLocalConfigDisabledAttribute?.()).undefined;
            expect(() => basic.setLocalConfigDisabledAttribute(true)).throw(
                ImplementationError,
                "Attribute localConfigDisabled is optional and not initialized. To use it please initialize it first.",
            );
            expect(() =>
                basic.subscribeLocalConfigDisabledAttribute(() => {
                    /* ignore */
                }),
            ).throw(
                ImplementationError,
                "Attribute localConfigDisabled is optional and not initialized. To use it please initialize it first.",
            );

            // Now we set this Cluster into Endpoint and retrieve it again and verify it is the same
            const endpoint = new Endpoint([DeviceTypes.ON_OFF_LIGHT], { endpointId: EndpointNumber(1) });
            endpoint.addClusterServer(basic);

            const basic2 = endpoint.getClusterServer(BasicInformationCluster);
            expect(basic2).ok;

            expect(basic2?.attributes.localConfigDisabled).undefined;
            // guard needed because as per types optional are potentially undefined
            expect(basic2?.getLocalConfigDisabledAttribute?.()).undefined;
            expect(() => basic2?.setLocalConfigDisabledAttribute(true)).throw(
                ImplementationError,
                "Attribute localConfigDisabled is optional and not initialized. To use it please initialize it first.",
            );
            expect(() =>
                basic2?.subscribeLocalConfigDisabledAttribute(() => {
                    /* ignore */
                }),
            ).throw(
                ImplementationError,
                "Attribute localConfigDisabled is optional and not initialized. To use it please initialize it first.",
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
                    expect(cluster.id).equal(BindingCluster.id);
                    expect(name).equal("binding");
                    return [];
                },
                setScopedClusterDataValue<T>(
                    cluster: Cluster<any, any, any, any, any>,
                    clusterDataKey: string,
                    value: T,
                ) {
                    setScopedClusterDataValueCalledCounter++;
                    expect(cluster.id).equal(BindingCluster.id);
                    expect(clusterDataKey).equal("binding");
                    expect(value).deep.equal({ value: [{ fabricIndex: FabricIndex(1) }] });
                },
            } as Fabric;

            expect(binding.attributes.binding.getLocalForFabric(fabric)).deep.equal([]);
            binding.attributes.binding.setLocalForFabric([{ fabricIndex: FabricIndex(1) }], fabric);
            expect(binding.getBindingAttribute(fabric)).deep.equal([]);
            binding.setBindingAttribute([{ fabricIndex: FabricIndex(1) }], fabric);

            expect(getScopedClusterDataValueCalledCounter).equal(4);
            expect(setScopedClusterDataValueCalledCounter).equal(2);
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
            expect(server).exist;
            // as any is trick because these attributes are not officially exposed by typings
            expect((server.attributes as any).featureMap.get()).deep.equal({});
            expect((server.attributes as any).attributeList.get()).deep.equal([
                AttributeId(0),
                AttributeId(1),
                AttributeId(2),
                AttributeId(65528),
                AttributeId(65529),
                AttributeId(65531),
                AttributeId(65532),
                AttributeId(65533),
            ]);
            expect((server.attributes as any).acceptedCommandList.get()).deep.equal([CommandId(0), CommandId(2)]);
            expect((server.attributes as any).generatedCommandList.get()).deep.equal([]);
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
            expect(server).ok;
            // as any is trick because these attributes are not officially exposed by typings
            expect((server.attributes as any).featureMap.get()).deep.equal({});
            expect((server.attributes as any).attributeList.get()).deep.equal([
                AttributeId(0),
                AttributeId(1),
                AttributeId(65528),
                AttributeId(65529),
                AttributeId(65531),
                AttributeId(65532),
                AttributeId(65533),
            ]);
            expect((server.attributes as any).acceptedCommandList.get()).deep.equal([CommandId(0), CommandId(0x40)]);
            expect((server.attributes as any).generatedCommandList.get()).deep.equal([]);
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
            expect(server).ok;
            // as any is trick because these attributes are not officially exposed by typings
            expect((server.attributes as any).featureMap.get()).deep.equal({});
            expect((server.attributes as any).attributeList.get()).deep.equal([
                AttributeId(0),
                AttributeId(1),
                AttributeId(65528),
                AttributeId(65529),
                AttributeId(65531),
                AttributeId(65532),
                AttributeId(65533),
            ]);
            expect((server.attributes as any).acceptedCommandList.get()).deep.equal([CommandId(0), CommandId(0x40)]);
            expect((server.attributes as any).generatedCommandList.get()).deep.equal([]);
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
            expect(server).ok;
            // as any is trick because these attributes are not officially exposed by typings
            expect((server.attributes as any).featureMap.get()).deep.equal({});
            expect((server.attributes as any).attributeList.get()).deep.equal([
                AttributeId(0),
                AttributeId(1),
                AttributeId(65528),
                AttributeId(65529),
                AttributeId(65531),
                AttributeId(65532),
                AttributeId(65533),
            ]);
            expect((server.attributes as any).acceptedCommandList.get()).deep.equal([CommandId(0)]);
            expect((server.attributes as any).generatedCommandList.get()).deep.equal([]);
        });

        it("Verify init/destroy is called on ClusterServer when defined", async () => {
            let initCalled = false;
            let destroyCalled = false;
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
                    initializeClusterServer: async () => {
                        initCalled = true;
                    },
                    destroyClusterServer: async () => {
                        destroyCalled = true;
                    },
                },
            );
            expect(server).ok;

            asClusterServerInternal(server)._assignToEndpoint({} as any);
            expect(initCalled).false;

            const testStorage = new StorageBackendMemory();
            const testStorageManager = new StorageManager(testStorage);
            await testStorageManager.initialize();
            let version = 1;
            asClusterServerInternal(server).datasource = {
                get version() {
                    return version;
                },
                increaseVersion() {
                    return ++version;
                },
                changed() {},
                get fabrics() {
                    return [];
                },
            } as ClusterDatasource<SyncStorage>;
            expect(initCalled).true;

            asClusterServerInternal(server)._close();
            expect(destroyCalled).true;
        });

        it("Verify not used init/destroy are not making issues", () => {
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
            expect(server).ok;

            asClusterServerInternal(server)._assignToEndpoint({} as any);
            asClusterServerInternal(server)._close();
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
            expect(server).ok;
            // as any is trick because these attributes are not officially exposed by typings
            expect((server.attributes as any).featureMap.get()).deep.equal({ groupNames: true });
            expect((server.attributes as any).attributeList.get()).deep.equal([
                AttributeId(0),
                AttributeId(65528),
                AttributeId(65529),
                AttributeId(65531),
                AttributeId(65532),
                AttributeId(65533),
            ]);
            expect((server.attributes as any).acceptedCommandList.get()).deep.equal([
                CommandId(0),
                CommandId(1),
                CommandId(2),
                CommandId(3),
                CommandId(4),
                CommandId(5),
            ]);
            expect((server.attributes as any).generatedCommandList.get()).deep.equal([
                CommandId(0),
                CommandId(1),
                CommandId(2),
                CommandId(3),
            ]);
        });

        it("Missing Conditionals Log warnings", () => {
            const messages = Logger.capture(() => {
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

            expect(messages).deep.equal([
                {
                    level: LogLevel.DEBUG,
                    message:
                        'xxxx-xx-xx xx:xx:xx.xxx DEBUG ClusterServer InitialAttributeValue for "WindowCovering/currentPositionLiftPercentage" is optional by supportedFeatures: {"lift":true,"positionAwareLift":true} and is not set!',
                },
                {
                    level: LogLevel.WARN,
                    message:
                        'xxxx-xx-xx xx:xx:xx.xxx WARN ClusterServer InitialAttributeValue for "WindowCovering/currentPositionTiltPercent100ths" is provided but it\'s neither optional or mandatory for supportedFeatures: {"lift":true,"positionAwareLift":true} but is set!',
                },
                {
                    level: LogLevel.WARN,
                    message:
                        'xxxx-xx-xx xx:xx:xx.xxx WARN ClusterServer Command "WindowCovering/goToLiftPercentage" is REQUIRED by supportedFeatures: {"lift":true,"positionAwareLift":true} but is not set!',
                },
            ]);
        });
    });

    describe("check supported methods on server", () => {
        it("attributes and events returned correctly", async () => {
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
                    specificationVersion: Specification.SPECIFICATION_VERSION,
                    maxPathsPerInvoke: 1,
                },
                {},
                {
                    startUp: true,
                },
            );

            expect(basic.isAttributeSupported(BasicInformationCluster.attributes.vendorName.id)).equal(true);
            expect(basic.isAttributeSupportedByName("vendorName")).equal(true);
            expect(basic.isAttributeSupported(BasicInformationCluster.attributes.softwareVersionString.id)).equal(true);
            expect(basic.isAttributeSupportedByName("softwareVersionString")).equal(true);
            expect(basic.isAttributeSupported(BasicInformationCluster.attributes.reachable.id)).equal(false);
            expect(basic.isAttributeSupportedByName("reachable")).equal(false);

            expect(basic.isEventSupported(BasicInformationCluster.events.startUp.id)).equal(true);
            expect(basic.isEventSupportedByName("startUp")).equal(true);
            expect(basic.isEventSupported(BasicInformationCluster.events.reachableChanged.id)).equal(false);
            expect(basic.isEventSupportedByName("reachableChanged")).equal(false);
        });

        it("Commands returned correctly", async () => {
            const identifyServer = ClusterServer(
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

            expect(identifyServer.isAttributeSupported(IdentifyCluster.attributes.identifyTime.id)).equal(true);
            expect(identifyServer.isAttributeSupportedByName("identifyType")).equal(true);
            expect(identifyServer.isAttributeSupported(IdentifyCluster.attributes.identifyType.id)).equal(true);
            expect(identifyServer.isAttributeSupportedByName("identifyTime")).equal(true);
            expect(identifyServer.isCommandSupported(IdentifyCluster.commands.identify.requestId)).equal(true);
            expect(identifyServer.isCommandSupportedByName("identify")).equal(true);
        });
    });
});
