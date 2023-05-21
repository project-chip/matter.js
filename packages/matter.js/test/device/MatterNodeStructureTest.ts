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
import { DeviceTypes } from "../../src/device/DeviceTypes.js";
import { AdminCommissioningHandler } from "../../src/cluster/server/AdminCommissioningServer.js";
import { SecureChannelProtocol } from "../../src/protocol/securechannel/SecureChannelProtocol.js";
import { PaseServer } from "../../src/session/pase/PaseServer.js";
import { CaseServer } from "../../src/session/case/CaseServer.js";
import { BN } from "bn.js";
import { ComposedDevice } from "../../src/device/ComposedDevice.js";
import { OperationalCredentialsClusterHandler } from "../../src/cluster/server/OperationalCredentialsServer.js";
import { GeneralCommissioningClusterHandler } from "../../src/cluster/server/GeneralCommissioningServer.js";
import { NetworkCommissioningClusterHandler } from "../../src/cluster/server/NetworkCommissioningServer.js";
import { AccessControlCluster } from "../../src/cluster/AccessControlCluster.js";
import { GroupKeyManagementCluster } from "../../src/cluster/GroupKeyManagementCluster.js";
import { BootReason, GeneralDiagnosticsCluster } from "../../src/cluster/GeneralDiagnosticsCluster.js";
import { BasicInformationCluster } from "../../src/cluster/BasicInformationCluster.js";
import { VendorId } from "../../src/datatype/VendorId.js";
import { FabricIndex } from "../../src/datatype/FabricIndex.js";
import { ByteArray } from "../../src/util/ByteArray.js";
import { GeneralCommissioningCluster, RegulatoryLocationType } from "../../src/cluster/GeneralCommissioningCluster.js";
import { EthernetNetworkCommissioningCluster, NetworkCommissioningStatus } from "../../src/cluster/NetworkCommissioningCluster.js";
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
import { Endpoint } from "../../src/device/Endpoint.js";
import { BindingCluster } from "../../src/cluster/BindingCluster.js";

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
    node.addRootClusterServer(ClusterServer(
        BasicInformationCluster,
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
        ClusterServer(
            OperationalCredentialsCluster,
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
        ClusterServer(
            GeneralCommissioningCluster,
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
        ClusterServer(
            EthernetNetworkCommissioningCluster,
            {
                maxNetworks: 1,
                interfaceEnabled: true,
                lastConnectErrorValue: 0,
                lastNetworkId: ByteArray.fromHex("0000000000000000000000000000000000000000000000000000000000000000"),
                lastNetworkingStatus: NetworkCommissioningStatus.Success,
                networks: [{ networkId: ByteArray.fromHex("0000000000000000000000000000000000000000000000000000000000000000"), connected: true }],
            },
            NetworkCommissioningClusterHandler()
        )
    );

    node.addRootClusterServer(
        ClusterServer(
            AccessControlCluster,
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
        ClusterServer(
            GroupKeyManagementCluster,
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
        ClusterServer(
            GeneralDiagnosticsCluster,
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
            ClusterServer(
                AdminCommissioningCluster,
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
            assert.equal(endpoints.get(0)?.getAllClusterServers().length, 9);
            assert.ok(endpoints.get(0)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(BasicInformationCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(OperationalCredentialsCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(GeneralCommissioningCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(EthernetNetworkCommissioningCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(AccessControlCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(AdminCommissioningCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(GroupKeyManagementCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(GeneralCommissioningCluster));

            assert.equal(attributePaths.length, 101);
            assert.equal(commandPaths.length, 18);
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
            assert.equal(endpoints.get(0)?.getAllClusterServers().length, 9);
            assert.ok(endpoints.get(0)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(BasicInformationCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(OperationalCredentialsCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(GeneralCommissioningCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(EthernetNetworkCommissioningCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(AccessControlCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(AdminCommissioningCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(GroupKeyManagementCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(GeneralCommissioningCluster));

            assert.equal(endpoints.get(1)?.getAllClusterServers().length, 6);
            assert.ok(endpoints.get(1)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(1)?.hasClusterServer(IdentifyCluster));
            assert.ok(endpoints.get(1)?.hasClusterServer(GroupsCluster));
            assert.ok(endpoints.get(1)?.hasClusterServer(ScenesCluster));
            assert.ok(endpoints.get(1)?.hasClusterServer(OnOffCluster));
            assert.ok(endpoints.get(1)?.hasClusterServer(BindingCluster));

            const rootPartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({
                endpointId: 0,
                clusterId: DescriptorCluster.id,
                attributeId: DescriptorCluster.attributes.partsList.id
            }));
            assert.deepEqual(rootPartsListAttribute?.getLocal(), [new EndpointNumber(1)]);

            assert.equal(attributePaths.length, 146);
            assert.equal(commandPaths.length, 38);
        });
    });

    describe("Composed Devices Endpoint structure", () => {
        it("One composed device withs two Light endpoints", () => {
            const node = new TestNode();
            addRequiredRootClusters(node);

            const composedDevice = new ComposedDevice([DeviceTypes.ON_OFF_LIGHT]);

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
            assert.equal(endpoints.get(0)?.getAllClusterServers().length, 9);
            assert.ok(endpoints.get(0)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(BasicInformationCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(OperationalCredentialsCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(GeneralCommissioningCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(EthernetNetworkCommissioningCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(AccessControlCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(AdminCommissioningCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(GroupKeyManagementCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(GeneralCommissioningCluster));

            assert.equal(endpoints.get(1)?.getAllClusterServers().length, 1);
            assert.ok(endpoints.get(1)?.hasClusterServer(DescriptorCluster));

            assert.equal(endpoints.get(2)?.getAllClusterServers().length, 6);
            assert.ok(endpoints.get(2)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(2)?.hasClusterServer(IdentifyCluster));
            assert.ok(endpoints.get(2)?.hasClusterServer(GroupsCluster));
            assert.ok(endpoints.get(2)?.hasClusterServer(ScenesCluster));
            assert.ok(endpoints.get(2)?.hasClusterServer(OnOffCluster));
            assert.ok(endpoints.get(2)?.hasClusterServer(BindingCluster));

            assert.equal(endpoints.get(3)?.getAllClusterServers().length, 6);
            assert.ok(endpoints.get(3)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(3)?.hasClusterServer(IdentifyCluster));
            assert.ok(endpoints.get(3)?.hasClusterServer(GroupsCluster));
            assert.ok(endpoints.get(3)?.hasClusterServer(ScenesCluster));
            assert.ok(endpoints.get(3)?.hasClusterServer(OnOffCluster));
            assert.ok(endpoints.get(3)?.hasClusterServer(BindingCluster));

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

            assert.equal(attributePaths.length, 200);
            assert.equal(commandPaths.length, 58);
        });
    });

    describe("Aggregator/Bridged Endpoint structures", () => {
        it("Aggregator Structure with one Light endpoint and defined endpoint IDs", () => {
            const node = new TestNode();
            addRequiredRootClusters(node);

            const aggregator = new Aggregator([], 1);

            const onoffLightDevice = new OnOffLightDevice(undefined, 11);
            onoffLightDevice.addClusterServer(ClusterServer(BridgedDeviceBasicInformationCluster, {
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
            assert.equal(endpoints.get(0)?.getAllClusterServers().length, 9);
            assert.ok(endpoints.get(0)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(BasicInformationCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(OperationalCredentialsCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(GeneralCommissioningCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(EthernetNetworkCommissioningCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(AccessControlCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(AdminCommissioningCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(GroupKeyManagementCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(GeneralCommissioningCluster));

            assert.equal(endpoints.get(1)?.getAllClusterServers().length, 1);
            assert.ok(endpoints.get(1)?.hasClusterServer(DescriptorCluster));

            assert.equal(endpoints.get(11)?.getAllClusterServers().length, 7);
            assert.ok(endpoints.get(11)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(11)?.hasClusterServer(IdentifyCluster));
            assert.ok(endpoints.get(11)?.hasClusterServer(GroupsCluster));
            assert.ok(endpoints.get(11)?.hasClusterServer(ScenesCluster));
            assert.ok(endpoints.get(11)?.hasClusterServer(OnOffCluster));
            assert.ok(endpoints.get(11)?.hasClusterServer(BridgedDeviceBasicInformationCluster));
            assert.ok(endpoints.get(11)?.hasClusterServer(BindingCluster));

            const rootPartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 0, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(rootPartsListAttribute?.getLocal(), [new EndpointNumber(1), new EndpointNumber(11)]);


            const aggregatorPartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 1, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(aggregatorPartsListAttribute?.getLocal(), [new EndpointNumber(11)]);

            const aggregatorDeviceTypeListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 1, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.deviceTypeList.id }));
            assert.deepEqual(aggregatorDeviceTypeListAttribute?.getLocal(), [{ deviceType: new DeviceTypeId(DeviceTypes.AGGREGATOR.code), revision: 1 }]);


            const devicePartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 11, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(devicePartsListAttribute?.getLocal(), []);

            const deviceTypeListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 11, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.deviceTypeList.id }));
            assert.deepEqual(deviceTypeListAttribute?.getLocal(), [{ deviceType: new DeviceTypeId(DeviceTypes.ON_OFF_LIGHT.code), revision: 2 }, { deviceType: new DeviceTypeId(DeviceTypes.BRIDGED_NODE.code), revision: 1 }]);

            assert.equal(attributePaths.length, 162);
            assert.equal(commandPaths.length, 38);
        });

        it("Device Structure with one aggregator and two Light endpoints and defined endpoint IDs", () => {
            const node = new TestNode();
            addRequiredRootClusters(node);

            const aggregator = new Aggregator([], 1);

            const onoffLightDevice11 = new OnOffLightDevice(undefined, 11);
            const onoffLightDevice12 = new OnOffLightDevice(undefined, 12);

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
            assert.equal(endpoints.get(0)?.getAllClusterServers().length, 9);
            assert.ok(endpoints.get(0)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(BasicInformationCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(OperationalCredentialsCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(GeneralCommissioningCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(EthernetNetworkCommissioningCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(AccessControlCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(AdminCommissioningCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(GroupKeyManagementCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(GeneralCommissioningCluster));

            assert.equal(endpoints.get(1)?.getAllClusterServers().length, 1);
            assert.ok(endpoints.get(1)?.hasClusterServer(DescriptorCluster));

            assert.equal(endpoints.get(11)?.getAllClusterServers().length, 7);
            assert.ok(endpoints.get(11)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(11)?.hasClusterServer(IdentifyCluster));
            assert.ok(endpoints.get(11)?.hasClusterServer(GroupsCluster));
            assert.ok(endpoints.get(11)?.hasClusterServer(ScenesCluster));
            assert.ok(endpoints.get(11)?.hasClusterServer(BridgedDeviceBasicInformationCluster));
            assert.ok(endpoints.get(11)?.hasClusterServer(OnOffCluster));
            assert.ok(endpoints.get(11)?.hasClusterServer(BindingCluster));

            assert.equal(endpoints.get(12)?.getAllClusterServers().length, 7);
            assert.ok(endpoints.get(12)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(12)?.hasClusterServer(IdentifyCluster));
            assert.ok(endpoints.get(12)?.hasClusterServer(GroupsCluster));
            assert.ok(endpoints.get(12)?.hasClusterServer(ScenesCluster));
            assert.ok(endpoints.get(12)?.hasClusterServer(BridgedDeviceBasicInformationCluster));
            assert.ok(endpoints.get(12)?.hasClusterServer(OnOffCluster));
            assert.ok(endpoints.get(12)?.hasClusterServer(BindingCluster));

            const rootPartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 0, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(rootPartsListAttribute?.getLocal(), [new EndpointNumber(1), new EndpointNumber(11), new EndpointNumber(12)]);

            const aggregatorPartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 1, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(aggregatorPartsListAttribute?.getLocal(), [new EndpointNumber(11), new EndpointNumber(12)]);

            const aggregatorDeviceTypeListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 1, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.deviceTypeList.id }));
            assert.deepEqual(aggregatorDeviceTypeListAttribute?.getLocal(), [{ deviceType: new DeviceTypeId(DeviceTypes.AGGREGATOR.code), revision: 1 }]);


            const devicePartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 11, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(devicePartsListAttribute?.getLocal(), []);

            const deviceTypeListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 11, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.deviceTypeList.id }));
            assert.deepEqual(deviceTypeListAttribute?.getLocal(), [{ deviceType: new DeviceTypeId(DeviceTypes.ON_OFF_LIGHT.code), revision: 2 }, { deviceType: new DeviceTypeId(DeviceTypes.BRIDGED_NODE.code), revision: 1 }]);

            assert.equal(attributePaths.length, 214);
            assert.equal(commandPaths.length, 58);
        });

        it("Device Structure with two aggregators and two Light endpoints and defined endpoint IDs", () => {
            const node = new TestNode();
            addRequiredRootClusters(node);


            const aggregator1 = new Aggregator([], 1);
            aggregator1.addClusterServer(ClusterServer(
                FixedLabelCluster,
                {
                    labelList: [{ label: "bridge", value: "Type A" }]
                },
                {}
            ));

            const onoffLightDevice11 = new OnOffLightDevice(undefined, 11);
            const onoffLightDevice12 = new OnOffLightDevice(undefined, 12);

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
            aggregator2.addClusterServer(ClusterServer(
                FixedLabelCluster,
                {
                    labelList: [{ label: "bridge", value: "Type B" }]
                },
                {}
            ));

            const onoffLightDevice21 = new OnOffLightDevice(undefined, 21);
            const onoffLightDevice22 = new OnOffLightDevice(undefined, 22);

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
            assert.equal(endpoints.get(0)?.getAllClusterServers().length, 9);
            assert.ok(endpoints.get(0)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(BasicInformationCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(OperationalCredentialsCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(GeneralCommissioningCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(EthernetNetworkCommissioningCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(AccessControlCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(AdminCommissioningCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(GroupKeyManagementCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(GeneralCommissioningCluster));

            assert.equal(endpoints.get(1)?.getAllClusterServers().length, 2);
            assert.ok(endpoints.get(1)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(1)?.hasClusterServer(FixedLabelCluster));

            assert.equal(endpoints.get(11)?.getAllClusterServers().length, 7);
            assert.ok(endpoints.get(11)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(11)?.hasClusterServer(IdentifyCluster));
            assert.ok(endpoints.get(11)?.hasClusterServer(GroupsCluster));
            assert.ok(endpoints.get(11)?.hasClusterServer(ScenesCluster));
            assert.ok(endpoints.get(11)?.hasClusterServer(BridgedDeviceBasicInformationCluster));
            assert.ok(endpoints.get(11)?.hasClusterServer(OnOffCluster));
            assert.ok(endpoints.get(11)?.hasClusterServer(BindingCluster));

            assert.equal(endpoints.get(12)?.getAllClusterServers().length, 7);
            assert.ok(endpoints.get(12)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(12)?.hasClusterServer(IdentifyCluster));
            assert.ok(endpoints.get(12)?.hasClusterServer(GroupsCluster));
            assert.ok(endpoints.get(12)?.hasClusterServer(ScenesCluster));
            assert.ok(endpoints.get(12)?.hasClusterServer(BridgedDeviceBasicInformationCluster));
            assert.ok(endpoints.get(12)?.hasClusterServer(OnOffCluster));
            assert.ok(endpoints.get(12)?.hasClusterServer(BindingCluster));

            assert.equal(endpoints.get(2)?.getAllClusterServers().length, 2);
            assert.ok(endpoints.get(2)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(2)?.hasClusterServer(FixedLabelCluster));

            assert.equal(endpoints.get(21)?.getAllClusterServers().length, 7);
            assert.ok(endpoints.get(21)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(21)?.hasClusterServer(IdentifyCluster));
            assert.ok(endpoints.get(21)?.hasClusterServer(GroupsCluster));
            assert.ok(endpoints.get(21)?.hasClusterServer(ScenesCluster));
            assert.ok(endpoints.get(21)?.hasClusterServer(BridgedDeviceBasicInformationCluster));
            assert.ok(endpoints.get(21)?.hasClusterServer(OnOffCluster));
            assert.ok(endpoints.get(21)?.hasClusterServer(BindingCluster));

            assert.equal(endpoints.get(22)?.getAllClusterServers().length, 7);
            assert.ok(endpoints.get(22)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(22)?.hasClusterServer(IdentifyCluster));
            assert.ok(endpoints.get(22)?.hasClusterServer(GroupsCluster));
            assert.ok(endpoints.get(22)?.hasClusterServer(ScenesCluster));
            assert.ok(endpoints.get(22)?.hasClusterServer(BridgedDeviceBasicInformationCluster));
            assert.ok(endpoints.get(22)?.hasClusterServer(OnOffCluster));
            assert.ok(endpoints.get(22)?.hasClusterServer(BindingCluster));

            const aggregator1PartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 1, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(aggregator1PartsListAttribute?.getLocal(), [new EndpointNumber(11), new EndpointNumber(12)]);

            const aggregator2PartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 2, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(aggregator2PartsListAttribute?.getLocal(), [new EndpointNumber(21), new EndpointNumber(22)]);

            const rootPartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 0, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(rootPartsListAttribute?.getLocal(), [new EndpointNumber(1), new EndpointNumber(11), new EndpointNumber(12), new EndpointNumber(2), new EndpointNumber(21), new EndpointNumber(22)]);

            assert.equal(attributePaths.length, 339);
            assert.equal(commandPaths.length, 98);
        });

        it("Device Structure with two aggregators and two Light endpoints and all auto-assigned endpoint IDs", () => {
            const node = new TestNode();
            addRequiredRootClusters(node);

            const aggregator1 = new Aggregator();
            aggregator1.addClusterServer(ClusterServer(
                FixedLabelCluster, {
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
            aggregator2.addClusterServer(ClusterServer(
                FixedLabelCluster, {
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
            assert.equal(endpoints.get(0)?.getAllClusterServers().length, 9);
            assert.ok(endpoints.get(0)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(BasicInformationCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(OperationalCredentialsCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(GeneralCommissioningCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(EthernetNetworkCommissioningCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(AccessControlCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(AdminCommissioningCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(GroupKeyManagementCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(GeneralCommissioningCluster));

            assert.equal(endpoints.get(1)?.getAllClusterServers().length, 2);
            assert.ok(endpoints.get(1)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(1)?.hasClusterServer(FixedLabelCluster));

            assert.equal(endpoints.get(2)?.getAllClusterServers().length, 7);
            assert.ok(endpoints.get(2)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(2)?.hasClusterServer(IdentifyCluster));
            assert.ok(endpoints.get(2)?.hasClusterServer(GroupsCluster));
            assert.ok(endpoints.get(2)?.hasClusterServer(ScenesCluster));
            assert.ok(endpoints.get(2)?.hasClusterServer(BridgedDeviceBasicInformationCluster));
            assert.ok(endpoints.get(2)?.hasClusterServer(OnOffCluster));
            assert.ok(endpoints.get(2)?.hasClusterServer(BindingCluster));

            assert.equal(endpoints.get(3)?.getAllClusterServers().length, 7);
            assert.ok(endpoints.get(3)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(3)?.hasClusterServer(IdentifyCluster));
            assert.ok(endpoints.get(3)?.hasClusterServer(GroupsCluster));
            assert.ok(endpoints.get(3)?.hasClusterServer(ScenesCluster));
            assert.ok(endpoints.get(3)?.hasClusterServer(BridgedDeviceBasicInformationCluster));
            assert.ok(endpoints.get(3)?.hasClusterServer(OnOffCluster));
            assert.ok(endpoints.get(3)?.hasClusterServer(BindingCluster));

            assert.equal(endpoints.get(4)?.getAllClusterServers().length, 2);
            assert.ok(endpoints.get(4)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(4)?.hasClusterServer(FixedLabelCluster));

            assert.equal(endpoints.get(5)?.getAllClusterServers().length, 7);
            assert.ok(endpoints.get(5)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(5)?.hasClusterServer(IdentifyCluster));
            assert.ok(endpoints.get(5)?.hasClusterServer(GroupsCluster));
            assert.ok(endpoints.get(5)?.hasClusterServer(ScenesCluster));
            assert.ok(endpoints.get(5)?.hasClusterServer(BridgedDeviceBasicInformationCluster));
            assert.ok(endpoints.get(5)?.hasClusterServer(OnOffCluster));
            assert.ok(endpoints.get(5)?.hasClusterServer(BindingCluster));

            assert.equal(endpoints.get(6)?.getAllClusterServers().length, 7);
            assert.ok(endpoints.get(6)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(6)?.hasClusterServer(IdentifyCluster));
            assert.ok(endpoints.get(6)?.hasClusterServer(GroupsCluster));
            assert.ok(endpoints.get(6)?.hasClusterServer(ScenesCluster));
            assert.ok(endpoints.get(6)?.hasClusterServer(BridgedDeviceBasicInformationCluster));
            assert.ok(endpoints.get(6)?.hasClusterServer(OnOffCluster));
            assert.ok(endpoints.get(6)?.hasClusterServer(BindingCluster));

            const aggregator1PartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 1, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(aggregator1PartsListAttribute?.getLocal(), [new EndpointNumber(2), new EndpointNumber(3)]);

            const aggregator2PartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 4, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(aggregator2PartsListAttribute?.getLocal(), [new EndpointNumber(5), new EndpointNumber(6)]);

            const rootPartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 0, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(rootPartsListAttribute?.getLocal(), [new EndpointNumber(1), new EndpointNumber(2), new EndpointNumber(3), new EndpointNumber(4), new EndpointNumber(5), new EndpointNumber(6)]);

            assert.equal(attributePaths.length, 339);
            assert.equal(commandPaths.length, 98);
        });

        it("Device Structure with two aggregators and two Light endpoints and all partly autoassigned endpoint IDs", () => {
            const node = new TestNode();
            addRequiredRootClusters(node);

            const aggregator1 = new Aggregator([], 37);
            aggregator1.addClusterServer(ClusterServer(
                FixedLabelCluster,
                {
                    labelList: [{ label: "bridge", value: "Type A" }]
                },
                {}
            ));

            const onoffLightDevice11 = new OnOffLightDevice(undefined, 3);
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
            aggregator2.addClusterServer(ClusterServer(
                FixedLabelCluster,
                {
                    labelList: [{ label: "bridge", value: "Type B" }]
                },
                {}
            ));

            const onoffLightDevice21 = new OnOffLightDevice();
            const onoffLightDevice22 = new OnOffLightDevice(undefined, 18);

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
            assert.equal(endpoints.get(0)?.getAllClusterServers().length, 9);
            assert.ok(endpoints.get(0)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(BasicInformationCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(OperationalCredentialsCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(GeneralCommissioningCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(EthernetNetworkCommissioningCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(AccessControlCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(AdminCommissioningCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(GroupKeyManagementCluster));
            assert.ok(endpoints.get(0)?.hasClusterServer(GeneralCommissioningCluster));

            assert.equal(endpoints.get(37)?.getAllClusterServers().length, 2);
            assert.ok(endpoints.get(37)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(37)?.hasClusterServer(FixedLabelCluster));

            assert.equal(endpoints.get(3)?.getAllClusterServers().length, 7);
            assert.ok(endpoints.get(3)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(3)?.hasClusterServer(IdentifyCluster));
            assert.ok(endpoints.get(3)?.hasClusterServer(GroupsCluster));
            assert.ok(endpoints.get(3)?.hasClusterServer(ScenesCluster));
            assert.ok(endpoints.get(3)?.hasClusterServer(BridgedDeviceBasicInformationCluster));
            assert.ok(endpoints.get(3)?.hasClusterServer(OnOffCluster));
            assert.ok(endpoints.get(3)?.hasClusterServer(BindingCluster));

            assert.equal(endpoints.get(38)?.getAllClusterServers().length, 7);
            assert.ok(endpoints.get(38)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(38)?.hasClusterServer(IdentifyCluster));
            assert.ok(endpoints.get(38)?.hasClusterServer(GroupsCluster));
            assert.ok(endpoints.get(38)?.hasClusterServer(ScenesCluster));
            assert.ok(endpoints.get(38)?.hasClusterServer(BridgedDeviceBasicInformationCluster));
            assert.ok(endpoints.get(38)?.hasClusterServer(OnOffCluster));
            assert.ok(endpoints.get(38)?.hasClusterServer(BindingCluster));

            assert.equal(endpoints.get(39)?.getAllClusterServers().length, 2);
            assert.ok(endpoints.get(39)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(39)?.hasClusterServer(FixedLabelCluster));

            assert.equal(endpoints.get(40)?.getAllClusterServers().length, 7);
            assert.ok(endpoints.get(40)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(40)?.hasClusterServer(IdentifyCluster));
            assert.ok(endpoints.get(40)?.hasClusterServer(GroupsCluster));
            assert.ok(endpoints.get(40)?.hasClusterServer(ScenesCluster));
            assert.ok(endpoints.get(40)?.hasClusterServer(BridgedDeviceBasicInformationCluster));
            assert.ok(endpoints.get(40)?.hasClusterServer(OnOffCluster));
            assert.ok(endpoints.get(40)?.hasClusterServer(BindingCluster));

            assert.equal(endpoints.get(18)?.getAllClusterServers().length, 7);
            assert.ok(endpoints.get(18)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(18)?.hasClusterServer(IdentifyCluster));
            assert.ok(endpoints.get(18)?.hasClusterServer(GroupsCluster));
            assert.ok(endpoints.get(18)?.hasClusterServer(ScenesCluster));
            assert.ok(endpoints.get(18)?.hasClusterServer(BridgedDeviceBasicInformationCluster));
            assert.ok(endpoints.get(18)?.hasClusterServer(OnOffCluster));
            assert.ok(endpoints.get(18)?.hasClusterServer(BindingCluster));

            const aggregator1PartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 37, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(aggregator1PartsListAttribute?.getLocal(), [new EndpointNumber(3), new EndpointNumber(38)]);

            const aggregator2PartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 39, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(aggregator2PartsListAttribute?.getLocal(), [new EndpointNumber(40), new EndpointNumber(18)]);

            const rootPartsListAttribute: AttributeServer<EndpointNumber[]> | undefined = attributes.get(attributePathToId({ endpointId: 0, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id }));
            assert.deepEqual(rootPartsListAttribute?.getLocal(), [new EndpointNumber(37), new EndpointNumber(3), new EndpointNumber(38), new EndpointNumber(39), new EndpointNumber(40), new EndpointNumber(18)]);

            assert.equal(attributePaths.length, 339);
            assert.equal(commandPaths.length, 98);
        });

    });
});
