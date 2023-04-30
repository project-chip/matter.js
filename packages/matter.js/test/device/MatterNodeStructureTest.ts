/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as assert from "assert";

import { Time } from "../../src/time/Time.js";
import { TimeFake } from "../../src/time/TimeFake.js";

Time.get = () => new TimeFake(0);

import { MatterNode } from "../../src/MatterNode.js";
import { OnOffLightDevice } from "../../src/device/OnOffDevices.js";
import { AttributeServer } from "../../src/cluster/server/AttributeServer.js";
import { attributePathToId, ClusterServer } from "../../src/protocol/interaction/InteractionServer.js";
import { Aggregator } from "../../src/device/Aggregator.js";
import { DEVICE } from "../../src/common/DeviceTypes.js";
import { AdminCommissioningHandler } from "../../src/cluster/server/AdminCommissioningServer.js";
import { SecureChannelProtocol } from "../../src/protocol/securechannel/SecureChannelProtocol.js";
import { PaseServer } from "../../src/session/pase/PaseServer.js";
import { CaseServer } from "../../src/session/case/CaseServer.js";
import { BN } from "bn.js";
import { ComposedDevice } from "../../src/device/ComposedDevice.js";
import { OperationalCredentialsClusterHandler } from "../../src/cluster/server/OperationalCredentialsServer.js";
import { GeneralCommissioningClusterHandler } from "../../src/cluster/server/GeneralCommissioningServer.js";
import { NetworkCommissioningHandler } from "../../src/cluster/server/NetworkCommissioningServer.js";
import { AccessControlCluster } from "../../src/cluster/AccessControlCluster.js";
import { GroupKeyManagementCluster } from "../../src/cluster/GroupKeyManagementCluster.js";
import { BootReason, GeneralDiagnosticsCluster } from "../../src/cluster/GeneralDiagnosticsCluster.js";
import { BasicInformationCluster } from "../../src/cluster/BasicInformationCluster.js";
import { VendorId } from "../../src/datatype/VendorId.js";
import { FabricIndex } from "../../src/datatype/FabricIndex.js";
import { ByteArray } from "../../src/util/ByteArray.js";
import { GeneralCommissioningCluster, RegulatoryLocationType } from "../../src/cluster/GeneralCommissioningCluster.js";
import { NetworkCommissioningCluster, NetworkCommissioningStatus } from "../../src/cluster/NetworkCommissioningCluster.js";
import { AdminCommissioningCluster, CommissioningWindowStatus } from "../../src/cluster/AdminCommissioningCluster.js";
import { EndpointNumber } from "../../src/datatype/EndpointNumber.js";
import { DescriptorCluster } from "../../src/cluster/DescriptorCluster.js";
import { OperationalCredentialsCluster } from "../../src/cluster/OperationalCredentialsCluster.js";
import { IdentifyCluster } from "../../src/cluster/IdentifyCluster.js";
import { GroupsCluster } from "../../src/cluster/GroupsCluster.js";
import { ScenesCluster } from "../../src/cluster/ScenesCluster.js";
import { OnOffCluster } from "../../src/cluster/OnOffCluster.js";
import { BridgedDeviceBasicInformationCluster } from "../../src/cluster/BridgedDeviceBasicInformationCluster.js";
import { DeviceTypeId } from "../../src/datatype/DeviceTypeId.js";
import { FixedLabelCluster } from "../../src/cluster/LabelCluster.js";
import { GroupKeyManagementClusterHandler } from "../../src/cluster/server/GroupKeyManagementServer.js";
import { Endpoint } from "../../src/device/index.js";

/** Needed for tests because MatterNode is an abstract class */
class TestNode extends MatterNode {
    public override addEndpoint(endpoint: Endpoint) {
        super.addEndpoint(endpoint);
    }

    async close() {
        // Do nothing
    }
}

function addRequiredRootClusters(node: MatterNode, includeAdminCommissioningCluster = true) {
    node.addRootClusterServer(
        new ClusterServer(
            BasicInformationCluster,
            {},
            {
                dataModelRevision: 1,
                vendorName: "vendor",
                vendorId: new VendorId(1),
                productName: "product",
                productId: 2,
                nodeLabel: "",
                hardwareVersion: 0,
                hardwareVersionString: "0",
                location: "US",
                localConfigDisabled: false,
                softwareVersion: 1,
                softwareVersionString: "v1",
                capabilityMinima: {
                    caseSessionsPerFabric: 3,
                    subscriptionsPerFabric: 3
                },
                serialNumber: `node-matter-0000`
            },
            {}
        )
    );

    node.addRootClusterServer(
        new ClusterServer(
            OperationalCredentialsCluster,
            {},
            {
                nocs: [],
                fabrics: [],
                supportedFabrics: 254,
                commissionedFabrics: 0,
                trustedRootCertificates: [],
                currentFabricIndex: FabricIndex.NO_FABRIC
            },
            OperationalCredentialsClusterHandler({
                devicePrivateKey: ByteArray.fromHex("00"),
                deviceCertificate: ByteArray.fromHex("00"),
                deviceIntermediateCertificate: ByteArray.fromHex("00"),
                certificationDeclaration: ByteArray.fromHex("00"),
            })
        )
    );

    node.addRootClusterServer(
        new ClusterServer(
            GeneralCommissioningCluster,
            {},
            {
                breadcrumb: BigInt(0),
                basicCommissioningInfo: {
                    failSafeExpiryLengthSeconds: 60 /* 1min */,
                    maxCumulativeFailsafeSeconds: 900 /* Recommended according to Specs */
                },
                regulatoryConfig: RegulatoryLocationType.Indoor,
                locationCapability: RegulatoryLocationType.IndoorOutdoor,
                supportsConcurrentConnections: true
            },
            GeneralCommissioningClusterHandler
        )
    );

    node.addRootClusterServer(
        new ClusterServer(
            NetworkCommissioningCluster,
            {
                wifi: false,
                thread: false,
                ethernet: true
            },
            {
                maxNetworks: 1,
                connectMaxTimeSeconds: 20,
                interfaceEnabled: true,
                lastConnectErrorValue: 0,
                lastNetworkId: ByteArray.fromHex("0000000000000000000000000000000000000000000000000000000000000000"),
                lastNetworkingStatus: NetworkCommissioningStatus.Success,
                networks: [{ networkId: ByteArray.fromHex("0000000000000000000000000000000000000000000000000000000000000000"), connected: true }],
                scanMaxTimeSeconds: 5
            },
            NetworkCommissioningHandler()
        )
    );

    node.addRootClusterServer(
        new ClusterServer(
            AccessControlCluster,
            {},
            {
                acl: [],
                extension: [],
                subjectsPerAccessControlEntry: 4,
                targetsPerAccessControlEntry: 4,
                accessControlEntriesPerFabric: 4,
            },
            {}
        )
    );

    node.addRootClusterServer(
        new ClusterServer(
            GroupKeyManagementCluster,
            {
                cacheAndSync: false,
            },
            {
                groupKeyMap: [],
                groupTable: [],
                maxGroupsPerFabric: 254,
                maxGroupKeysPerFabric: 254,
            },
            GroupKeyManagementClusterHandler()
        )
    );

    node.addRootClusterServer(
        new ClusterServer(
            GeneralDiagnosticsCluster,
            {},
            {
                networkInterfaces: [],
                rebootCount: 0,
                upTime: 0,
                totalOperationalHours: 0,
                bootReason: BootReason.Unspecified,
                activeHardwareFaults: [],
                activeRadioFaults: [],
                activeNetworkFaults: [],
                testEventTriggersEnabled: false
            },
            {
                testEventTrigger: async () => { /* ignore */ }
            }
        )
    );

    if (includeAdminCommissioningCluster) {
        node.addRootClusterServer(
            new ClusterServer(
                AdminCommissioningCluster,
                {
                    basic: true
                },
                {
                    windowStatus: CommissioningWindowStatus.WindowNotOpen,
                    adminFabricIndex: null,
                    adminVendorId: null
                },
                AdminCommissioningHandler(new SecureChannelProtocol(
                    new PaseServer(new BN(0), ByteArray.fromHex("00")),
                    new CaseServer()
                ))
            )
        );
    }
}

describe("Endpoint Structures", () => {

    describe("Simple Endpoint structure", () => {
        it("Root Endpoint with missing required cluster throws exception", () => {
            const node = new TestNode();
            addRequiredRootClusters(node, false);

            assert.throws(() => node.getRootEndpoint().getStructure(), {
                message: "Device type MA-rootdevice (0x16) requires cluster server 0x3c but it is not present on endpoint 0"
            });

        });

        it("Just root Endpoint", () => {
            const node = new TestNode();
            addRequiredRootClusters(node);

            const {
                endpoints,
                attributes,
                attributePaths,
                commandPaths
            } = node.getRootEndpoint().getStructure();

            const rootPartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({
                endpointId: 0,
                clusterId: DescriptorCluster.id,
                attributeId: DescriptorCluster.attributes.partsList.id
            }));
            assert.deepEqual(rootPartsListAttribute?.getLocal(), []);

            assert.equal(endpoints.size, 1);
            assert.equal(endpoints.get(0)?.clusters.size, 9);
            assert.ok(endpoints.get(0)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(BasicInformationCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(OperationalCredentialsCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(GeneralCommissioningCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(NetworkCommissioningCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(AccessControlCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(AdminCommissioningCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(GroupKeyManagementCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(GeneralCommissioningCluster.id));

            assert.equal(attributePaths.length, 76);
            assert.equal(commandPaths.length, 23);
        });

        it("One device withs Light endpoints", () => {
            const node = new TestNode();
            addRequiredRootClusters(node);

            const onoffLightDevice = new OnOffLightDevice();

            node.addEndpoint(onoffLightDevice);

            assert.equal(node.getRootEndpoint().ensureEndpointIds(1), 2);

            const {
                endpoints,
                attributes,
                attributePaths,
                commandPaths
            } = node.getRootEndpoint().getStructure();

            assert.equal(endpoints.size, 2);
            assert.equal(endpoints.get(0)?.clusters.size, 9);
            assert.ok(endpoints.get(0)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(BasicInformationCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(OperationalCredentialsCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(GeneralCommissioningCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(NetworkCommissioningCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(AccessControlCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(AdminCommissioningCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(GroupKeyManagementCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(GeneralCommissioningCluster.id));

            assert.equal(endpoints.get(1)?.clusters.size, 5);
            assert.ok(endpoints.get(1)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(1)?.clusters.has(IdentifyCluster.id));
            assert.ok(endpoints.get(1)?.clusters.has(GroupsCluster.id));
            assert.ok(endpoints.get(1)?.clusters.has(ScenesCluster.id));
            assert.ok(endpoints.get(1)?.clusters.has(OnOffCluster.id));

            const rootPartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({
                endpointId: 0,
                clusterId: DescriptorCluster.id,
                attributeId: DescriptorCluster.attributes.partsList.id
            }));
            assert.deepEqual(rootPartsListAttribute?.getLocal(), [new EndpointNumber(1)]);

            assert.equal(attributePaths.length, 100);
            assert.equal(commandPaths.length, 33);
        });
    });

    describe("Composed Devices Endpoint structure", () => {
        it("One composed device withs two Light endpoints", () => {
            const node = new TestNode();
            addRequiredRootClusters(node);

            const composedDevice = new ComposedDevice([DEVICE.ON_OFF_LIGHT]);

            const onoffLightDevice1 = new OnOffLightDevice();
            const onoffLightDevice2 = new OnOffLightDevice();
            composedDevice.addDevice(onoffLightDevice1);
            composedDevice.addDevice(onoffLightDevice2);

            node.addEndpoint(composedDevice);

            assert.equal(node.getRootEndpoint().ensureEndpointIds(1), 4);

            const {
                endpoints,
                attributes,
                attributePaths,
                commandPaths
            } = node.getRootEndpoint().getStructure();

            assert.equal(endpoints.size, 4);
            assert.equal(endpoints.get(0)?.clusters.size, 9);
            assert.ok(endpoints.get(0)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(BasicInformationCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(OperationalCredentialsCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(GeneralCommissioningCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(NetworkCommissioningCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(AccessControlCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(AdminCommissioningCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(GroupKeyManagementCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(GeneralCommissioningCluster.id));

            assert.equal(endpoints.get(1)?.clusters.size, 1);
            assert.ok(endpoints.get(1)?.clusters.has(DescriptorCluster.id));

            assert.equal(endpoints.get(2)?.clusters.size, 5);
            assert.ok(endpoints.get(2)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(2)?.clusters.has(IdentifyCluster.id));
            assert.ok(endpoints.get(2)?.clusters.has(GroupsCluster.id));
            assert.ok(endpoints.get(2)?.clusters.has(ScenesCluster.id));
            assert.ok(endpoints.get(2)?.clusters.has(OnOffCluster.id));

            assert.equal(endpoints.get(3)?.clusters.size, 5);
            assert.ok(endpoints.get(3)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(3)?.clusters.has(IdentifyCluster.id));
            assert.ok(endpoints.get(3)?.clusters.has(GroupsCluster.id));
            assert.ok(endpoints.get(3)?.clusters.has(ScenesCluster.id));
            assert.ok(endpoints.get(3)?.clusters.has(OnOffCluster.id));

            const rootPartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({
                endpointId: 0,
                clusterId: DescriptorCluster.id,
                attributeId: DescriptorCluster.attributes.partsList.id
            }));
            assert.deepEqual(rootPartsListAttribute?.getLocal(), [new EndpointNumber(1), new EndpointNumber(2), new EndpointNumber(3)]);

            const composedPartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({
                endpointId: 1,
                clusterId: DescriptorCluster.id,
                attributeId: DescriptorCluster.attributes.partsList.id
            }));
            assert.deepEqual(composedPartsListAttribute?.getLocal(), [new EndpointNumber(2), new EndpointNumber(3)]);

            assert.equal(attributePaths.length, 130);
            assert.equal(commandPaths.length, 43);
        });
    });

    describe("Aggregator/Bridged Endpoint structures", () => {
        it("Aggregator Structure with one Light endpoint and defined endpoint IDs", () => {
            const node = new TestNode();
            addRequiredRootClusters(node);

            const aggregator = new Aggregator([], 1);

            const onoffLightDevice = new OnOffLightDevice(11);
            onoffLightDevice.addClusterServer(new ClusterServer(BridgedDeviceBasicInformationCluster, {}, {
                nodeLabel: "Socket 1",
                reachable: true
            }, {}))

            aggregator.addBridgedDevice(onoffLightDevice);
            node.addEndpoint(aggregator);

            const {
                endpoints,
                attributes,
                attributePaths,
                commandPaths
            } = node.getRootEndpoint().getStructure();

            assert.equal(endpoints.size, 3);
            assert.equal(endpoints.get(0)?.clusters.size, 9);
            assert.ok(endpoints.get(0)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(BasicInformationCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(OperationalCredentialsCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(GeneralCommissioningCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(NetworkCommissioningCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(AccessControlCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(AdminCommissioningCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(GroupKeyManagementCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(GeneralCommissioningCluster.id));

            assert.equal(endpoints.get(1)?.clusters.size, 1);
            assert.ok(endpoints.get(1)?.clusters.has(DescriptorCluster.id));

            assert.equal(endpoints.get(11)?.clusters.size, 6);
            assert.ok(endpoints.get(11)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(11)?.clusters.has(IdentifyCluster.id));
            assert.ok(endpoints.get(11)?.clusters.has(GroupsCluster.id));
            assert.ok(endpoints.get(11)?.clusters.has(ScenesCluster.id));
            assert.ok(endpoints.get(11)?.clusters.has(OnOffCluster.id));
            assert.ok(endpoints.get(11)?.clusters.has(BridgedDeviceBasicInformationCluster.id));

            const rootPartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 0, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(rootPartsListAttribute?.getLocal(), [new EndpointNumber(1), new EndpointNumber(11)]);


            const aggregatorPartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 1, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(aggregatorPartsListAttribute?.getLocal(), [new EndpointNumber(11)]);

            const aggregatorDeviceTypeListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 1, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.deviceTypeList.id }));
            assert.deepEqual(aggregatorDeviceTypeListAttribute?.getLocal(), [{ deviceType: new DeviceTypeId(DEVICE.AGGREGATOR.code), revision: 1 }]);


            const devicePartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 11, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(devicePartsListAttribute?.getLocal(), []);

            const deviceTypeListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 11, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.deviceTypeList.id }));
            assert.deepEqual(deviceTypeListAttribute?.getLocal(), [{ deviceType: new DeviceTypeId(DEVICE.ON_OFF_LIGHT.code), revision: 2 }, { deviceType: new DeviceTypeId(DEVICE.BRIDGED_NODE.code), revision: 1 }]);

            assert.equal(attributePaths.length, 110);
            assert.equal(commandPaths.length, 33);
        });

        it("Device Structure with one aggregator and two Light endpoints and defined endpoint IDs", () => {
            const node = new TestNode();
            addRequiredRootClusters(node);

            const aggregator = new Aggregator([], 1);

            const onoffLightDevice11 = new OnOffLightDevice(11);
            const onoffLightDevice12 = new OnOffLightDevice(12);

            aggregator.addBridgedDevice(onoffLightDevice11, {
                nodeLabel: "Socket 1",
                reachable: true
            });
            aggregator.addBridgedDevice(onoffLightDevice12, {
                nodeLabel: "Socket 2",
                reachable: true
            });
            node.addEndpoint(aggregator);

            const { endpoints, attributes, attributePaths, commandPaths } = node.getRootEndpoint().getStructure();

            assert.equal(endpoints.size, 4);
            assert.equal(endpoints.get(0)?.clusters.size, 9);
            assert.ok(endpoints.get(0)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(BasicInformationCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(OperationalCredentialsCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(GeneralCommissioningCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(NetworkCommissioningCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(AccessControlCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(AdminCommissioningCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(GroupKeyManagementCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(GeneralCommissioningCluster.id));

            assert.equal(endpoints.get(1)?.clusters.size, 1);
            assert.ok(endpoints.get(1)?.clusters.has(DescriptorCluster.id));

            assert.equal(endpoints.get(11)?.clusters.size, 6);
            assert.ok(endpoints.get(11)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(11)?.clusters.has(IdentifyCluster.id));
            assert.ok(endpoints.get(11)?.clusters.has(GroupsCluster.id));
            assert.ok(endpoints.get(11)?.clusters.has(ScenesCluster.id));
            assert.ok(endpoints.get(11)?.clusters.has(BridgedDeviceBasicInformationCluster.id));
            assert.ok(endpoints.get(11)?.clusters.has(OnOffCluster.id));

            assert.equal(endpoints.get(12)?.clusters.size, 6);
            assert.ok(endpoints.get(12)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(12)?.clusters.has(IdentifyCluster.id));
            assert.ok(endpoints.get(12)?.clusters.has(GroupsCluster.id));
            assert.ok(endpoints.get(12)?.clusters.has(ScenesCluster.id));
            assert.ok(endpoints.get(12)?.clusters.has(BridgedDeviceBasicInformationCluster.id));
            assert.ok(endpoints.get(12)?.clusters.has(OnOffCluster.id));

            const rootPartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 0, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(rootPartsListAttribute?.getLocal(), [new EndpointNumber(1), new EndpointNumber(11), new EndpointNumber(12)]);

            const aggregatorPartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 1, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(aggregatorPartsListAttribute?.getLocal(), [new EndpointNumber(11), new EndpointNumber(12)]);

            const aggregatorDeviceTypeListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 1, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.deviceTypeList.id }));
            assert.deepEqual(aggregatorDeviceTypeListAttribute?.getLocal(), [{ deviceType: new DeviceTypeId(DEVICE.AGGREGATOR.code), revision: 1 }]);


            const devicePartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 11, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(devicePartsListAttribute?.getLocal(), []);

            const deviceTypeListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 11, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.deviceTypeList.id }));
            assert.deepEqual(deviceTypeListAttribute?.getLocal(), [{ deviceType: new DeviceTypeId(DEVICE.ON_OFF_LIGHT.code), revision: 2 }, { deviceType: new DeviceTypeId(DEVICE.BRIDGED_NODE.code), revision: 1 }]);

            assert.equal(attributePaths.length, 138);
            assert.equal(commandPaths.length, 43);
        });

        it("Device Structure with two aggregators and two Light endpoints and defined endpoint IDs", () => {
            const node = new TestNode();
            addRequiredRootClusters(node);


            const aggregator1 = new Aggregator([], 1);
            aggregator1.addClusterServer(new ClusterServer(
                FixedLabelCluster,
                {},
                {
                    labelList: [{ label: "bridge", value: "Type A" }]
                },
                {}
            ));

            const onoffLightDevice11 = new OnOffLightDevice(11);
            const onoffLightDevice12 = new OnOffLightDevice(12);

            aggregator1.addBridgedDevice(onoffLightDevice11, {
                nodeLabel: "Socket 1-1",
                reachable: true
            });
            aggregator1.addBridgedDevice(onoffLightDevice12, {
                nodeLabel: "Socket 1-2",
                reachable: true
            });
            node.addEndpoint(aggregator1);

            const aggregator2 = new Aggregator([], 2);
            aggregator2.addClusterServer(new ClusterServer(
                FixedLabelCluster,
                {},
                {
                    labelList: [{ label: "bridge", value: "Type B" }]
                },
                {}
            ));

            const onoffLightDevice21 = new OnOffLightDevice(21);
            const onoffLightDevice22 = new OnOffLightDevice(22);

            aggregator2.addBridgedDevice(onoffLightDevice21, {
                nodeLabel: "Socket 2-1",
                reachable: true
            });
            aggregator2.addBridgedDevice(onoffLightDevice22, {
                nodeLabel: "Socket 2-2",
                reachable: true
            });
            node.addEndpoint(aggregator2);

            const { endpoints, attributes, attributePaths, commandPaths } = node.getRootEndpoint().getStructure();

            assert.equal(endpoints.size, 7);
            assert.equal(endpoints.get(0)?.clusters.size, 9);
            assert.ok(endpoints.get(0)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(BasicInformationCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(OperationalCredentialsCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(GeneralCommissioningCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(NetworkCommissioningCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(AccessControlCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(AdminCommissioningCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(GroupKeyManagementCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(GeneralCommissioningCluster.id));

            assert.equal(endpoints.get(1)?.clusters.size, 2);
            assert.ok(endpoints.get(1)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(1)?.clusters.has(FixedLabelCluster.id));

            assert.equal(endpoints.get(11)?.clusters.size, 6);
            assert.ok(endpoints.get(11)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(11)?.clusters.has(IdentifyCluster.id));
            assert.ok(endpoints.get(11)?.clusters.has(GroupsCluster.id));
            assert.ok(endpoints.get(11)?.clusters.has(ScenesCluster.id));
            assert.ok(endpoints.get(11)?.clusters.has(BridgedDeviceBasicInformationCluster.id));
            assert.ok(endpoints.get(11)?.clusters.has(OnOffCluster.id));

            assert.equal(endpoints.get(12)?.clusters.size, 6);
            assert.ok(endpoints.get(12)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(12)?.clusters.has(IdentifyCluster.id));
            assert.ok(endpoints.get(12)?.clusters.has(GroupsCluster.id));
            assert.ok(endpoints.get(12)?.clusters.has(ScenesCluster.id));
            assert.ok(endpoints.get(12)?.clusters.has(BridgedDeviceBasicInformationCluster.id));
            assert.ok(endpoints.get(12)?.clusters.has(OnOffCluster.id));

            assert.equal(endpoints.get(2)?.clusters.size, 2);
            assert.ok(endpoints.get(2)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(2)?.clusters.has(FixedLabelCluster.id));

            assert.equal(endpoints.get(21)?.clusters.size, 6);
            assert.ok(endpoints.get(21)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(21)?.clusters.has(IdentifyCluster.id));
            assert.ok(endpoints.get(21)?.clusters.has(GroupsCluster.id));
            assert.ok(endpoints.get(21)?.clusters.has(ScenesCluster.id));
            assert.ok(endpoints.get(21)?.clusters.has(BridgedDeviceBasicInformationCluster.id));
            assert.ok(endpoints.get(21)?.clusters.has(OnOffCluster.id));

            assert.equal(endpoints.get(22)?.clusters.size, 6);
            assert.ok(endpoints.get(22)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(22)?.clusters.has(IdentifyCluster.id));
            assert.ok(endpoints.get(22)?.clusters.has(GroupsCluster.id));
            assert.ok(endpoints.get(22)?.clusters.has(ScenesCluster.id));
            assert.ok(endpoints.get(22)?.clusters.has(BridgedDeviceBasicInformationCluster.id));
            assert.ok(endpoints.get(22)?.clusters.has(OnOffCluster.id));

            const aggregator1PartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 1, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(aggregator1PartsListAttribute?.getLocal(), [new EndpointNumber(11), new EndpointNumber(12)]);

            const aggregator2PartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 2, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(aggregator2PartsListAttribute?.getLocal(), [new EndpointNumber(21), new EndpointNumber(22)]);

            const rootPartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 0, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(rootPartsListAttribute?.getLocal(), [new EndpointNumber(1), new EndpointNumber(11), new EndpointNumber(12), new EndpointNumber(2), new EndpointNumber(21), new EndpointNumber(22)]);

            assert.equal(attributePaths.length, 206);
            assert.equal(commandPaths.length, 63);
        });

        it("Device Structure with two aggregators and two Light endpoints and all auto-assigned endpoint IDs", () => {
            const node = new TestNode();
            addRequiredRootClusters(node);

            const aggregator1 = new Aggregator();
            aggregator1.addClusterServer(new ClusterServer(
                FixedLabelCluster, {}, {
                labelList: [{ label: "bridge", value: "Type A" }]
            }, {}
            ));

            const onoffLightDevice11 = new OnOffLightDevice();
            const onoffLightDevice12 = new OnOffLightDevice();

            aggregator1.addBridgedDevice(onoffLightDevice11, {
                nodeLabel: "Socket 1-1",
                reachable: true
            });
            aggregator1.addBridgedDevice(onoffLightDevice12, {
                nodeLabel: "Socket 1-2",
                reachable: true
            });
            node.addEndpoint(aggregator1);

            const aggregator2 = new Aggregator();
            aggregator2.addClusterServer(new ClusterServer(
                FixedLabelCluster, {}, {
                labelList: [{ label: "bridge", value: "Type B" }]
            }, {}
            ));

            const onoffLightDevice21 = new OnOffLightDevice();
            const onoffLightDevice22 = new OnOffLightDevice();

            aggregator2.addBridgedDevice(onoffLightDevice21, {
                nodeLabel: "Socket 2-1",
                reachable: true
            });
            aggregator2.addBridgedDevice(onoffLightDevice22, {
                nodeLabel: "Socket 2-2",
                reachable: true
            });
            node.addEndpoint(aggregator2);

            assert.equal(node.getRootEndpoint().ensureEndpointIds(1), 7);

            const { endpoints, attributes, attributePaths, commandPaths } = node.getRootEndpoint().getStructure();

            assert.equal(endpoints.size, 7);
            assert.equal(endpoints.get(0)?.clusters.size, 9);
            assert.ok(endpoints.get(0)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(BasicInformationCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(OperationalCredentialsCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(GeneralCommissioningCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(NetworkCommissioningCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(AccessControlCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(AdminCommissioningCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(GroupKeyManagementCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(GeneralCommissioningCluster.id));

            assert.equal(endpoints.get(1)?.clusters.size, 2);
            assert.ok(endpoints.get(1)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(1)?.clusters.has(FixedLabelCluster.id));

            assert.equal(endpoints.get(2)?.clusters.size, 6);
            assert.ok(endpoints.get(2)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(2)?.clusters.has(IdentifyCluster.id));
            assert.ok(endpoints.get(2)?.clusters.has(GroupsCluster.id));
            assert.ok(endpoints.get(2)?.clusters.has(ScenesCluster.id));
            assert.ok(endpoints.get(2)?.clusters.has(BridgedDeviceBasicInformationCluster.id));
            assert.ok(endpoints.get(2)?.clusters.has(OnOffCluster.id));

            assert.equal(endpoints.get(3)?.clusters.size, 6);
            assert.ok(endpoints.get(3)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(3)?.clusters.has(IdentifyCluster.id));
            assert.ok(endpoints.get(3)?.clusters.has(GroupsCluster.id));
            assert.ok(endpoints.get(3)?.clusters.has(ScenesCluster.id));
            assert.ok(endpoints.get(3)?.clusters.has(BridgedDeviceBasicInformationCluster.id));
            assert.ok(endpoints.get(3)?.clusters.has(OnOffCluster.id));

            assert.equal(endpoints.get(4)?.clusters.size, 2);
            assert.ok(endpoints.get(4)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(4)?.clusters.has(FixedLabelCluster.id));

            assert.equal(endpoints.get(5)?.clusters.size, 6);
            assert.ok(endpoints.get(5)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(5)?.clusters.has(IdentifyCluster.id));
            assert.ok(endpoints.get(5)?.clusters.has(GroupsCluster.id));
            assert.ok(endpoints.get(5)?.clusters.has(ScenesCluster.id));
            assert.ok(endpoints.get(5)?.clusters.has(BridgedDeviceBasicInformationCluster.id));
            assert.ok(endpoints.get(5)?.clusters.has(OnOffCluster.id));

            assert.equal(endpoints.get(6)?.clusters.size, 6);
            assert.ok(endpoints.get(6)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(6)?.clusters.has(IdentifyCluster.id));
            assert.ok(endpoints.get(6)?.clusters.has(GroupsCluster.id));
            assert.ok(endpoints.get(6)?.clusters.has(ScenesCluster.id));
            assert.ok(endpoints.get(6)?.clusters.has(BridgedDeviceBasicInformationCluster.id));
            assert.ok(endpoints.get(6)?.clusters.has(OnOffCluster.id));

            const aggregator1PartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 1, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(aggregator1PartsListAttribute?.getLocal(), [new EndpointNumber(2), new EndpointNumber(3)]);

            const aggregator2PartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 4, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(aggregator2PartsListAttribute?.getLocal(), [new EndpointNumber(5), new EndpointNumber(6)]);

            const rootPartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 0, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(rootPartsListAttribute?.getLocal(), [new EndpointNumber(1), new EndpointNumber(2), new EndpointNumber(3), new EndpointNumber(4), new EndpointNumber(5), new EndpointNumber(6)]);

            assert.equal(attributePaths.length, 206);
            assert.equal(commandPaths.length, 63);
        });

        it("Device Structure with two aggregators and two Light endpoints and all partly autoassigned endpoint IDs", () => {
            const node = new TestNode();
            addRequiredRootClusters(node);

            const aggregator1 = new Aggregator([], 37);
            aggregator1.addClusterServer(new ClusterServer(
                FixedLabelCluster,
                {},
                {
                    labelList: [{ label: "bridge", value: "Type A" }]
                },
                {}
            ));

            const onoffLightDevice11 = new OnOffLightDevice(3);
            const onoffLightDevice12 = new OnOffLightDevice();

            aggregator1.addBridgedDevice(onoffLightDevice11, {
                nodeLabel: "Socket 1-1",
                reachable: true
            });
            aggregator1.addBridgedDevice(onoffLightDevice12, {
                nodeLabel: "Socket 1-2",
                reachable: true
            });
            node.addEndpoint(aggregator1);

            const aggregator2 = new Aggregator();
            aggregator2.addClusterServer(new ClusterServer(
                FixedLabelCluster,
                {},
                {
                    labelList: [{ label: "bridge", value: "Type B" }]
                },
                {}
            ));

            const onoffLightDevice21 = new OnOffLightDevice();
            const onoffLightDevice22 = new OnOffLightDevice(18);

            aggregator2.addBridgedDevice(onoffLightDevice21, {
                nodeLabel: "Socket 2-1",
                reachable: true
            });
            aggregator2.addBridgedDevice(onoffLightDevice22, {
                nodeLabel: "Socket 2-2",
                reachable: true
            });
            node.addEndpoint(aggregator2);

            assert.equal(node.getRootEndpoint().findHighestEndpointId(), 37);
            assert.equal(node.getRootEndpoint().ensureEndpointIds(38), 41);

            const { endpoints, attributes, attributePaths, commandPaths } = node.getRootEndpoint().getStructure();

            assert.equal(endpoints.size, 7);
            assert.equal(endpoints.get(0)?.clusters.size, 9);
            assert.ok(endpoints.get(0)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(BasicInformationCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(OperationalCredentialsCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(GeneralCommissioningCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(NetworkCommissioningCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(AccessControlCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(AdminCommissioningCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(GroupKeyManagementCluster.id));
            assert.ok(endpoints.get(0)?.clusters.has(GeneralCommissioningCluster.id));

            assert.equal(endpoints.get(37)?.clusters.size, 2);
            assert.ok(endpoints.get(37)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(37)?.clusters.has(FixedLabelCluster.id));

            assert.equal(endpoints.get(3)?.clusters.size, 6);
            assert.ok(endpoints.get(3)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(3)?.clusters.has(IdentifyCluster.id));
            assert.ok(endpoints.get(3)?.clusters.has(GroupsCluster.id));
            assert.ok(endpoints.get(3)?.clusters.has(ScenesCluster.id));
            assert.ok(endpoints.get(3)?.clusters.has(BridgedDeviceBasicInformationCluster.id));
            assert.ok(endpoints.get(3)?.clusters.has(OnOffCluster.id));

            assert.equal(endpoints.get(38)?.clusters.size, 6);
            assert.ok(endpoints.get(38)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(38)?.clusters.has(IdentifyCluster.id));
            assert.ok(endpoints.get(38)?.clusters.has(GroupsCluster.id));
            assert.ok(endpoints.get(38)?.clusters.has(ScenesCluster.id));
            assert.ok(endpoints.get(38)?.clusters.has(BridgedDeviceBasicInformationCluster.id));
            assert.ok(endpoints.get(38)?.clusters.has(OnOffCluster.id));

            assert.equal(endpoints.get(39)?.clusters.size, 2);
            assert.ok(endpoints.get(39)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(39)?.clusters.has(FixedLabelCluster.id));

            assert.equal(endpoints.get(40)?.clusters.size, 6);
            assert.ok(endpoints.get(40)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(40)?.clusters.has(IdentifyCluster.id));
            assert.ok(endpoints.get(40)?.clusters.has(GroupsCluster.id));
            assert.ok(endpoints.get(40)?.clusters.has(ScenesCluster.id));
            assert.ok(endpoints.get(40)?.clusters.has(BridgedDeviceBasicInformationCluster.id));
            assert.ok(endpoints.get(40)?.clusters.has(OnOffCluster.id));

            assert.equal(endpoints.get(18)?.clusters.size, 6);
            assert.ok(endpoints.get(18)?.clusters.has(DescriptorCluster.id));
            assert.ok(endpoints.get(18)?.clusters.has(IdentifyCluster.id));
            assert.ok(endpoints.get(18)?.clusters.has(GroupsCluster.id));
            assert.ok(endpoints.get(18)?.clusters.has(ScenesCluster.id));
            assert.ok(endpoints.get(18)?.clusters.has(BridgedDeviceBasicInformationCluster.id));
            assert.ok(endpoints.get(18)?.clusters.has(OnOffCluster.id));

            const aggregator1PartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 37, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(aggregator1PartsListAttribute?.getLocal(), [new EndpointNumber(3), new EndpointNumber(38)]);

            const aggregator2PartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 39, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(aggregator2PartsListAttribute?.getLocal(), [new EndpointNumber(40), new EndpointNumber(18)]);

            const rootPartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 0, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(rootPartsListAttribute?.getLocal(), [new EndpointNumber(37), new EndpointNumber(3), new EndpointNumber(38), new EndpointNumber(39), new EndpointNumber(40), new EndpointNumber(18)]);

            assert.equal(attributePaths.length, 206);
            assert.equal(commandPaths.length, 63);
        });
    });
});
