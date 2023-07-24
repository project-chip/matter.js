/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as assert from "assert";

import { Time } from "../../src/time/Time.js";
import { TimeFake } from "../../src/time/TimeFake.js";

Time.get = () => new TimeFake(0);

import { Crypto } from "../../src/crypto/Crypto.js";
Crypto.get = () => ({
    getRandomData: (length: number) => {
        return new Uint8Array(length);
    }
} as Crypto);

import { MatterNode } from "../../src/MatterNode.js";
import { OnOffLightDevice, OnOffPluginUnitDevice } from "../../src/device/OnOffDevices.js";
import { AttributeServer } from "../../src/cluster/server/AttributeServer.js";
import { attributePathToId, ClusterServer } from "../../src/protocol/interaction/InteractionServer.js";
import { InteractionEndpointStructure } from "../../src/protocol/interaction/InteractionEndpointStructure.js";
import { Aggregator } from "../../src/device/Aggregator.js";
import { DeviceTypes } from "../../src/device/DeviceTypes.js";
import { AdminCommissioningHandler } from "../../src/cluster/server/AdminCommissioningServer.js";
import { SecureChannelProtocol } from "../../src/protocol/securechannel/SecureChannelProtocol.js";
import { PaseServer } from "../../src/session/pase/PaseServer.js";
import { CaseServer } from "../../src/session/case/CaseServer.js";
import { BN } from "bn.js";
import { ComposedDevice } from "../../src/device/ComposedDevice.js";
import { GeneralCommissioningClusterHandler } from "../../src/cluster/server/GeneralCommissioningServer.js";
import { AccessControlCluster } from "../../src/cluster/AccessControlCluster.js";
import { GroupKeyManagementCluster } from "../../src/cluster/GroupKeyManagementCluster.js";
import { BootReason, GeneralDiagnosticsCluster } from "../../src/cluster/GeneralDiagnosticsCluster.js";
import { BasicInformationCluster } from "../../src/cluster/BasicInformationCluster.js";
import { VendorId } from "../../src/datatype/VendorId.js";
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
import { StorageBackendMemory, StorageManager } from "../../src/storage/index.js";
import { CommissioningServer } from "../../src/index.js";
import { FabricIndex } from "../../src/datatype/FabricIndex.js";
import { OperationalCredentialsClusterHandler } from "../../src/cluster/server/OperationalCredentialsServer.js";

/** Needed for tests because MatterNode is an abstract class */
class TestNode extends MatterNode {

    public override addEndpoint(endpoint: Endpoint) {
        super.addEndpoint(endpoint);
    }

    override async close() {
        // Do nothing
    }

    getPort() {
        return undefined;
    }

    setMdnsBroadcaster() {
        // Do nothing
    }

    setMdnsScanner() {
        // Do nothing
    }

    async start() {
        return;
    }
}

function addRequiredRootClusters(node: MatterNode, includeAdminCommissioningCluster = true) {
    if (node instanceof TestNode) {
        node.addRootClusterServer(
            ClusterServer(
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
                {},
                {
                    startUp: true
                }
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
    }

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
            GeneralCommissioningClusterHandler()
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
            {}
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
            {}, {
            accessControlEntryChanged: true,
            accessControlExtensionChanged: true,
        }
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
            },
            {
                bootReason: true,
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

            assert.throws(() => node.getRootEndpoint().verifyRequiredClusters(), {
                message: "Device type MA-rootdevice (0x16) requires cluster server AdministratorCommissioning(0x3c) but it is not present on endpoint 0"
            });

        });

        it("Just root Endpoint", () => {
            const node = new CommissioningServer({
                port: 5540,
                deviceName: "Test Device",
                deviceType: 0x16,
                passcode: 123,
                discriminator: 1234,
                basicInformation: {
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
                certificates: {
                    devicePrivateKey: ByteArray.fromHex("00"),
                    deviceCertificate: ByteArray.fromHex("00"),
                    deviceIntermediateCertificate: ByteArray.fromHex("00"),
                    certificationDeclaration: ByteArray.fromHex("00"),
                }
            });
            addRequiredRootClusters(node);

            const rootEndpoint = node.getRootEndpoint();
            rootEndpoint.updatePartsList();
            const endpointStructure = new InteractionEndpointStructure();
            endpointStructure.initializeFromEndpoint(rootEndpoint);
            const {
                endpoints,
                attributes,
                attributePaths,
                commandPaths,
                eventPaths,
            } = endpointStructure;

            const rootPartsListAttribute = attributes.get(attributePathToId({
                endpointId: 0,
                clusterId: DescriptorCluster.id,
                attributeId: DescriptorCluster.attributes.partsList.id
            })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(rootPartsListAttribute?.getLocal(), []);

            const rootPartsListAttribute2 = endpointStructure.getAttributes([{
                endpointId: 0,
                clusterId: DescriptorCluster.id,
                attributeId: DescriptorCluster.attributes.partsList.id
            }]);
            assert.equal(rootPartsListAttribute2.length, 1);
            assert.equal(rootPartsListAttribute, rootPartsListAttribute2[0].attribute);

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

            assert.equal(attributePaths.length, 110);
            assert.equal(commandPaths.length, 18);
            assert.equal(eventPaths.length, 4);
        });

        it("One device with one Light endpoints - no unique id, use index", async () => {
            const testStorage = new StorageBackendMemory();
            const testStorageManager = new StorageManager(testStorage);
            await testStorageManager.initialize();
            const testStorageContext = testStorageManager.createContext("TestContext");
            const endpointStorage = testStorageContext.createContext("EndpointStructure");

            const node = new CommissioningServer({
                port: 5540,
                deviceName: "Test Device",
                deviceType: 0x16,
                passcode: 123,
                discriminator: 1234,
                basicInformation: {
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
                certificates: {
                    devicePrivateKey: ByteArray.fromHex("00"),
                    deviceCertificate: ByteArray.fromHex("00"),
                    deviceIntermediateCertificate: ByteArray.fromHex("00"),
                    certificationDeclaration: ByteArray.fromHex("00"),
                }
            });
            node.setStorage(testStorageContext);
            addRequiredRootClusters(node);

            const onoffLightDevice = new OnOffLightDevice();

            node.addDevice(onoffLightDevice);

            node.assignEndpointIds();
            assert.equal(node.getNextEndpointId(false), 2);

            const rootEndpoint = node.getRootEndpoint();
            rootEndpoint.updatePartsList();
            const endpointStructure = new InteractionEndpointStructure();
            endpointStructure.initializeFromEndpoint(rootEndpoint);
            const {
                endpoints,
                attributes,
                attributePaths,
                commandPaths,
                eventPaths,
            } = endpointStructure;

            assert.equal(endpointStorage.get("serial_node-matter-0000-index_0"), 1);

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

            const rootPartsListAttribute = attributes.get(attributePathToId({
                endpointId: 0,
                clusterId: DescriptorCluster.id,
                attributeId: DescriptorCluster.attributes.partsList.id
            })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(rootPartsListAttribute?.getLocal(), [new EndpointNumber(1)]);

            assert.equal(attributePaths.length, 161);
            assert.equal(commandPaths.length, 38);
            assert.equal(eventPaths.length, 4);
        });

        it("One device with one Light endpoints - with uniqueid", async () => {
            const testStorage = new StorageBackendMemory();
            const testStorageManager = new StorageManager(testStorage);
            await testStorageManager.initialize();
            const testStorageContext = testStorageManager.createContext("TestContext");
            const endpointStorage = testStorageContext.createContext("EndpointStructure");

            const node = new CommissioningServer({
                port: 5540,
                deviceName: "Test Device",
                deviceType: 0x16,
                passcode: 123,
                discriminator: 1234,
                basicInformation: {
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
                certificates: {
                    devicePrivateKey: ByteArray.fromHex("00"),
                    deviceCertificate: ByteArray.fromHex("00"),
                    deviceIntermediateCertificate: ByteArray.fromHex("00"),
                    certificationDeclaration: ByteArray.fromHex("00"),
                }
            });
            node.setStorage(testStorageContext);
            addRequiredRootClusters(node);

            const onoffLightDevice = new OnOffLightDevice(undefined, { uniqueStorageKey: "test-unique-id" });

            node.addDevice(onoffLightDevice);

            node.assignEndpointIds();
            assert.equal(node.getNextEndpointId(false), 2);

            const rootEndpoint = node.getRootEndpoint();
            rootEndpoint.updatePartsList();
            const endpointStructure = new InteractionEndpointStructure();
            endpointStructure.initializeFromEndpoint(rootEndpoint);
            const {
                endpoints,
                attributes,
                attributePaths,
                commandPaths,
                eventPaths,
            } = endpointStructure;

            assert.equal(endpointStorage.get("serial_node-matter-0000-custom_test-unique-id"), 1);

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

            const rootPartsListAttribute = attributes.get(attributePathToId({
                endpointId: 0,
                clusterId: DescriptorCluster.id,
                attributeId: DescriptorCluster.attributes.partsList.id
            })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(rootPartsListAttribute?.getLocal(), [new EndpointNumber(1)]);

            assert.equal(attributePaths.length, 161);
            assert.equal(commandPaths.length, 38);
            assert.equal(eventPaths.length, 4);
        });

        it("One device with one Light endpoints - no uniqueid, use index, from storage", async () => {
            const testStorage = new StorageBackendMemory();
            const testStorageManager = new StorageManager(testStorage);
            await testStorageManager.initialize();
            const testStorageContext = testStorageManager.createContext("TestContext");
            const endpointStorage = testStorageContext.createContext("EndpointStructure");
            endpointStorage.set("serial_node-matter-0000-index_0", 10)

            const node = new CommissioningServer({
                port: 5540,
                deviceName: "Test Device",
                deviceType: 0x16,
                passcode: 123,
                discriminator: 1234,
                basicInformation: {
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
                certificates: {
                    devicePrivateKey: ByteArray.fromHex("00"),
                    deviceCertificate: ByteArray.fromHex("00"),
                    deviceIntermediateCertificate: ByteArray.fromHex("00"),
                    certificationDeclaration: ByteArray.fromHex("00"),
                }
            });
            node.setStorage(testStorageContext);
            addRequiredRootClusters(node);

            const onoffLightDevice = new OnOffLightDevice();

            node.addDevice(onoffLightDevice);

            node.assignEndpointIds();
            assert.equal(node.getNextEndpointId(false), 11);

            const rootEndpoint = node.getRootEndpoint();
            rootEndpoint.updatePartsList();
            const endpointStructure = new InteractionEndpointStructure();
            endpointStructure.initializeFromEndpoint(rootEndpoint);
            const {
                endpoints,
                attributes,
                attributePaths,
                commandPaths,
                eventPaths,
            } = endpointStructure;

            assert.equal(endpointStorage.get("serial_node-matter-0000-index_0"), 10);

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

            assert.equal(endpoints.get(10)?.getAllClusterServers().length, 6);
            assert.ok(endpoints.get(10)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(10)?.hasClusterServer(IdentifyCluster));
            assert.ok(endpoints.get(10)?.hasClusterServer(GroupsCluster));
            assert.ok(endpoints.get(10)?.hasClusterServer(ScenesCluster));
            assert.ok(endpoints.get(10)?.hasClusterServer(OnOffCluster));
            assert.ok(endpoints.get(10)?.hasClusterServer(BindingCluster));

            const rootPartsListAttribute = attributes.get(attributePathToId({
                endpointId: 0,
                clusterId: DescriptorCluster.id,
                attributeId: DescriptorCluster.attributes.partsList.id
            })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(rootPartsListAttribute?.getLocal(), [new EndpointNumber(10)]);

            assert.equal(attributePaths.length, 161);
            assert.equal(commandPaths.length, 38);
            assert.equal(eventPaths.length, 4);
        });

        it("One device with one Light endpoints - with uniqueid, from storage", async () => {
            const testStorage = new StorageBackendMemory();
            const testStorageManager = new StorageManager(testStorage);
            await testStorageManager.initialize();
            const testStorageContext = testStorageManager.createContext("TestContext");
            const endpointStorage = testStorageContext.createContext("EndpointStructure");
            endpointStorage.set("serial_node-matter-0000-custom_test-unique-id", 10)

            const node = new CommissioningServer({
                port: 5540,
                deviceName: "Test Device",
                deviceType: 0x16,
                passcode: 123,
                discriminator: 1234,
                basicInformation: {
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
                certificates: {
                    devicePrivateKey: ByteArray.fromHex("00"),
                    deviceCertificate: ByteArray.fromHex("00"),
                    deviceIntermediateCertificate: ByteArray.fromHex("00"),
                    certificationDeclaration: ByteArray.fromHex("00"),
                }
            });
            node.setStorage(testStorageContext);
            addRequiredRootClusters(node);

            const onoffLightDevice = new OnOffLightDevice(undefined, { uniqueStorageKey: "test-unique-id" });

            node.addDevice(onoffLightDevice);

            node.assignEndpointIds();
            assert.equal(node.getNextEndpointId(false), 11);

            const rootEndpoint = node.getRootEndpoint();
            rootEndpoint.updatePartsList();
            const endpointStructure = new InteractionEndpointStructure();
            endpointStructure.initializeFromEndpoint(rootEndpoint);
            const {
                endpoints,
                attributes,
                attributePaths,
                commandPaths,
                eventPaths,
            } = endpointStructure;

            assert.equal(endpointStorage.get("serial_node-matter-0000-custom_test-unique-id"), 10);

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

            assert.equal(endpoints.get(10)?.getAllClusterServers().length, 6);
            assert.ok(endpoints.get(10)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(10)?.hasClusterServer(IdentifyCluster));
            assert.ok(endpoints.get(10)?.hasClusterServer(GroupsCluster));
            assert.ok(endpoints.get(10)?.hasClusterServer(ScenesCluster));
            assert.ok(endpoints.get(10)?.hasClusterServer(OnOffCluster));
            assert.ok(endpoints.get(10)?.hasClusterServer(BindingCluster));

            const rootPartsListAttribute = attributes.get(attributePathToId({
                endpointId: 0,
                clusterId: DescriptorCluster.id,
                attributeId: DescriptorCluster.attributes.partsList.id
            })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(rootPartsListAttribute?.getLocal(), [new EndpointNumber(10)]);

            assert.equal(attributePaths.length, 161);
            assert.equal(commandPaths.length, 38);
            assert.equal(eventPaths.length, 4);
        });
    });

    describe("Aggregator/Bridged Endpoint structures", () => {
        it("Aggregator Structure with one Light endpoint and defined endpoint IDs", () => {
            const node = new TestNode();
            addRequiredRootClusters(node);

            const aggregator = new Aggregator([], { endpointId: 1 });

            const onoffLightDevice = new OnOffLightDevice(undefined, { endpointId: 11 });
            onoffLightDevice.addClusterServer(ClusterServer(BridgedDeviceBasicInformationCluster, {
                nodeLabel: "Socket 1",
                reachable: true
            }, {}, {
                reachableChanged: true
            }))

            aggregator.addBridgedDevice(onoffLightDevice);
            node.addEndpoint(aggregator);

            const rootEndpoint = node.getRootEndpoint();
            rootEndpoint.updatePartsList();
            const endpointStructure = new InteractionEndpointStructure();
            endpointStructure.initializeFromEndpoint(rootEndpoint);
            const {
                endpoints,
                attributes,
                attributePaths,
                commandPaths,
                eventPaths,
            } = endpointStructure;

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

            const rootPartsListAttribute = attributes.get(attributePathToId({ endpointId: 0, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(rootPartsListAttribute?.getLocal(), [new EndpointNumber(1), new EndpointNumber(11)]);


            const aggregatorPartsListAttribute = attributes.get(attributePathToId({ endpointId: 1, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(aggregatorPartsListAttribute?.getLocal(), [new EndpointNumber(11)]);

            const aggregatorDeviceTypeListAttribute = attributes.get(attributePathToId({ endpointId: 1, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.deviceTypeList.id })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(aggregatorDeviceTypeListAttribute?.getLocal(), [{ deviceType: new DeviceTypeId(DeviceTypes.AGGREGATOR.code), revision: 1 }]);


            const devicePartsListAttribute = attributes.get(attributePathToId({ endpointId: 11, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(devicePartsListAttribute?.getLocal(), []);

            const deviceTypeListAttribute = attributes.get(attributePathToId({ endpointId: 11, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.deviceTypeList.id })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(deviceTypeListAttribute?.getLocal(), [{ deviceType: new DeviceTypeId(DeviceTypes.ON_OFF_LIGHT.code), revision: 2 }, { deviceType: new DeviceTypeId(DeviceTypes.BRIDGED_NODE.code), revision: 1 }]);

            assert.equal(attributePaths.length, 179);
            assert.equal(commandPaths.length, 38);
            assert.equal(eventPaths.length, 5);
        });

        it("Device Structure with one aggregator and two Light endpoints and defined endpoint IDs", () => {
            const node = new TestNode();
            addRequiredRootClusters(node);

            const aggregator = new Aggregator([], { endpointId: 1 });

            const onoffLightDevice11 = new OnOffLightDevice(undefined, { endpointId: 11 });
            const onoffLightDevice12 = new OnOffLightDevice(undefined, { endpointId: 12 });

            aggregator.addBridgedDevice(onoffLightDevice11, {
                nodeLabel: "Socket 1",
                reachable: true
            });
            aggregator.addBridgedDevice(onoffLightDevice12, {
                nodeLabel: "Socket 2",
                reachable: true
            });
            node.addEndpoint(aggregator);

            const rootEndpoint = node.getRootEndpoint();
            rootEndpoint.updatePartsList();
            const endpointStructure = new InteractionEndpointStructure();
            endpointStructure.initializeFromEndpoint(rootEndpoint);
            const {
                endpoints,
                attributes,
                attributePaths,
                commandPaths,
                eventPaths,
            } = endpointStructure;

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

            const rootPartsListAttribute = attributes.get(attributePathToId({ endpointId: 0, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(rootPartsListAttribute?.getLocal(), [new EndpointNumber(1), new EndpointNumber(11), new EndpointNumber(12)]);

            const aggregatorPartsListAttribute = attributes.get(attributePathToId({ endpointId: 1, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(aggregatorPartsListAttribute?.getLocal(), [new EndpointNumber(11), new EndpointNumber(12)]);

            const aggregatorDeviceTypeListAttribute = attributes.get(attributePathToId({ endpointId: 1, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.deviceTypeList.id })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(aggregatorDeviceTypeListAttribute?.getLocal(), [{ deviceType: new DeviceTypeId(DeviceTypes.AGGREGATOR.code), revision: 1 }]);


            const devicePartsListAttribute = attributes.get(attributePathToId({ endpointId: 11, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(devicePartsListAttribute?.getLocal(), []);

            const deviceTypeListAttribute = attributes.get(attributePathToId({ endpointId: 11, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.deviceTypeList.id })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(deviceTypeListAttribute?.getLocal(), [{ deviceType: new DeviceTypeId(DeviceTypes.ON_OFF_LIGHT.code), revision: 2 }, { deviceType: new DeviceTypeId(DeviceTypes.BRIDGED_NODE.code), revision: 1 }]);

            assert.equal(attributePaths.length, 238);
            assert.equal(commandPaths.length, 58);
            assert.equal(eventPaths.length, 6);
        });

        it("Device Structure with two aggregators and two Light endpoints and defined endpoint IDs", () => {
            const node = new TestNode();
            addRequiredRootClusters(node);

            const aggregator1 = new Aggregator([], { endpointId: 1 });
            aggregator1.addClusterServer(ClusterServer(
                FixedLabelCluster,
                {
                    labelList: [{ label: "bridge", value: "Type A" }]
                },
                {}
            ));

            const onoffLightDevice11 = new OnOffLightDevice(undefined, { endpointId: 11 });
            const onoffLightDevice12 = new OnOffLightDevice(undefined, { endpointId: 12 });

            aggregator1.addBridgedDevice(onoffLightDevice11, {
                nodeLabel: "Socket 1-1",
                reachable: true
            });
            aggregator1.addBridgedDevice(onoffLightDevice12, {
                nodeLabel: "Socket 1-2",
                reachable: true
            });
            node.addEndpoint(aggregator1);

            const aggregator2 = new Aggregator([], { endpointId: 2 });
            aggregator2.addClusterServer(ClusterServer(
                FixedLabelCluster,
                {
                    labelList: [{ label: "bridge", value: "Type B" }]
                },
                {}
            ));

            const onoffLightDevice21 = new OnOffLightDevice(undefined, { endpointId: 21 });
            const onoffLightDevice22 = new OnOffLightDevice(undefined, { endpointId: 22 });

            aggregator2.addBridgedDevice(onoffLightDevice21, {
                nodeLabel: "Socket 2-1",
                reachable: true
            });
            aggregator2.addBridgedDevice(onoffLightDevice22, {
                nodeLabel: "Socket 2-2",
                reachable: true
            });
            node.addEndpoint(aggregator2);

            const rootEndpoint = node.getRootEndpoint();
            rootEndpoint.updatePartsList();
            const endpointStructure = new InteractionEndpointStructure();
            endpointStructure.initializeFromEndpoint(rootEndpoint);
            const {
                endpoints,
                attributes,
                attributePaths,
                commandPaths,
                eventPaths,
            } = endpointStructure;

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

            const aggregator1PartsListAttribute = attributes.get(attributePathToId({ endpointId: 1, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(aggregator1PartsListAttribute?.getLocal(), [new EndpointNumber(11), new EndpointNumber(12)]);

            const aggregator2PartsListAttribute = attributes.get(attributePathToId({ endpointId: 2, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(aggregator2PartsListAttribute?.getLocal(), [new EndpointNumber(21), new EndpointNumber(22)]);

            const rootPartsListAttribute = attributes.get(attributePathToId({ endpointId: 0, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(rootPartsListAttribute?.getLocal(), [new EndpointNumber(1), new EndpointNumber(11), new EndpointNumber(12), new EndpointNumber(2), new EndpointNumber(21), new EndpointNumber(22)]);

            assert.equal(attributePaths.length, 380);
            assert.equal(commandPaths.length, 98);
            assert.equal(eventPaths.length, 8);
        });

        it("Device Structure with two aggregators and two Light endpoints and all auto-assigned endpoint IDs", async () => {
            const testStorage = new StorageBackendMemory();
            const testStorageManager = new StorageManager(testStorage);
            await testStorageManager.initialize();
            const testStorageContext = testStorageManager.createContext("TestContext");

            const node = new CommissioningServer({
                port: 5540,
                deviceName: "Test Device",
                deviceType: 0x16,
                passcode: 123,
                discriminator: 1234,
                basicInformation: {
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
                certificates: {
                    devicePrivateKey: ByteArray.fromHex("00"),
                    deviceCertificate: ByteArray.fromHex("00"),
                    deviceIntermediateCertificate: ByteArray.fromHex("00"),
                    certificationDeclaration: ByteArray.fromHex("00"),
                }
            });
            node.setStorage(testStorageContext);
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
            node.addDevice(aggregator1);

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
            node.addDevice(aggregator2);

            node.assignEndpointIds();
            assert.equal(node.getNextEndpointId(false), 7);

            const rootEndpoint = node.getRootEndpoint();
            rootEndpoint.updatePartsList();
            const endpointStructure = new InteractionEndpointStructure();
            endpointStructure.initializeFromEndpoint(rootEndpoint);
            const {
                endpoints,
                attributes,
                attributePaths,
                commandPaths,
                eventPaths,
            } = endpointStructure;

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

            const aggregator1PartsListAttribute = attributes.get(attributePathToId({ endpointId: 1, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(aggregator1PartsListAttribute?.getLocal(), [new EndpointNumber(2), new EndpointNumber(3)]);

            const aggregator2PartsListAttribute = attributes.get(attributePathToId({ endpointId: 4, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(aggregator2PartsListAttribute?.getLocal(), [new EndpointNumber(5), new EndpointNumber(6)]);

            const rootPartsListAttribute = attributes.get(attributePathToId({ endpointId: 0, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(rootPartsListAttribute?.getLocal(), [new EndpointNumber(1), new EndpointNumber(2), new EndpointNumber(3), new EndpointNumber(4), new EndpointNumber(5), new EndpointNumber(6)]);

            assert.equal(attributePaths.length, 380);
            assert.equal(commandPaths.length, 98);
            assert.equal(eventPaths.length, 8);
        });

        it("Device Structure with two aggregators and three Light/Composed endpoints and all partly auto-assigned endpoint IDs", async () => {
            const testStorage = new StorageBackendMemory();
            const testStorageManager = new StorageManager(testStorage);
            await testStorageManager.initialize();
            const testStorageContext = testStorageManager.createContext("TestContext");
            const endpointStorage = testStorageContext.createContext("EndpointStructure");

            const node = new CommissioningServer({
                port: 5540,
                deviceName: "Test Device",
                deviceType: 0x16,
                passcode: 123,
                discriminator: 1234,
                basicInformation: {
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
                certificates: {
                    devicePrivateKey: ByteArray.fromHex("00"),
                    deviceCertificate: ByteArray.fromHex("00"),
                    deviceIntermediateCertificate: ByteArray.fromHex("00"),
                    certificationDeclaration: ByteArray.fromHex("00"),
                }
            });
            node.setStorage(testStorageContext);
            addRequiredRootClusters(node);

            const aggregator1 = new Aggregator([], { endpointId: 37 });
            aggregator1.addClusterServer(ClusterServer(
                FixedLabelCluster,
                {
                    labelList: [{ label: "bridge", value: "Type A" }]
                },
                {}
            ));

            const onoffLightDevice11 = new OnOffLightDevice(undefined, { endpointId: 3 });
            const onoffLightDevice12 = new OnOffLightDevice();

            aggregator1.addBridgedDevice(onoffLightDevice11, {
                nodeLabel: "Socket 1-1",
                reachable: true
            });
            aggregator1.addBridgedDevice(onoffLightDevice12, {
                nodeLabel: "Socket 1-2",
                reachable: true
            });
            node.addDevice(aggregator1);

            const aggregator2 = new Aggregator();
            aggregator2.addClusterServer(ClusterServer(
                FixedLabelCluster,
                {
                    labelList: [{ label: "bridge", value: "Type B" }]
                },
                {}
            ));

            const onoffLightDevice21 = new OnOffLightDevice();
            const onoffLightDevice22 = new OnOffLightDevice(undefined, { endpointId: 18 });

            aggregator2.addBridgedDevice(onoffLightDevice21, {
                nodeLabel: "Socket 2-1",
                serialNumber: "12345678",
                reachable: true
            });
            aggregator2.addBridgedDevice(onoffLightDevice22, {
                nodeLabel: "Socket 2-2",
                reachable: true
            });

            const composedDevice = new ComposedDevice(DeviceTypes.ON_OFF_LIGHT, [
                new OnOffLightDevice(undefined, { uniqueStorageKey: "COMPOSED.SUB1" }),
                new OnOffPluginUnitDevice()
            ]);
            aggregator2.addBridgedDevice(composedDevice, {
                nodeLabel: "Composed 2-3",
                uniqueId: "COMPOSED2",
                reachable: true
            });

            node.addDevice(aggregator2);

            node.assignEndpointIds();
            assert.equal(node.getNextEndpointId(false), 44);

            const rootEndpoint = node.getRootEndpoint();
            rootEndpoint.updatePartsList();
            const endpointStructure = new InteractionEndpointStructure();
            endpointStructure.initializeFromEndpoint(rootEndpoint);
            const {
                endpoints,
                attributes,
                attributePaths,
                commandPaths,
                eventPaths,
            } = endpointStructure;

            assert.equal(endpoints.size, 10);
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

            assert.equal(endpoints.get(41)?.getAllClusterServers().length, 2);
            assert.ok(endpoints.get(41)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(41)?.hasClusterServer(BridgedDeviceBasicInformationCluster));

            assert.equal(endpoints.get(42)?.getAllClusterServers().length, 6);
            assert.ok(endpoints.get(42)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(42)?.hasClusterServer(IdentifyCluster));
            assert.ok(endpoints.get(42)?.hasClusterServer(GroupsCluster));
            assert.ok(endpoints.get(42)?.hasClusterServer(ScenesCluster));
            assert.ok(endpoints.get(42)?.hasClusterServer(OnOffCluster));
            assert.ok(endpoints.get(42)?.hasClusterServer(BindingCluster));

            assert.equal(endpoints.get(43)?.getAllClusterServers().length, 6);
            assert.ok(endpoints.get(43)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(43)?.hasClusterServer(IdentifyCluster));
            assert.ok(endpoints.get(43)?.hasClusterServer(GroupsCluster));
            assert.ok(endpoints.get(43)?.hasClusterServer(ScenesCluster));
            assert.ok(endpoints.get(43)?.hasClusterServer(OnOffCluster));
            assert.ok(endpoints.get(43)?.hasClusterServer(BindingCluster));

            const aggregator1PartsListAttribute = attributes.get(attributePathToId({ endpointId: 37, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(aggregator1PartsListAttribute?.getLocal(), [new EndpointNumber(3), new EndpointNumber(38)]);

            const aggregator2PartsListAttribute = attributes.get(attributePathToId({ endpointId: 39, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(aggregator2PartsListAttribute?.getLocal(), [new EndpointNumber(40), new EndpointNumber(18), new EndpointNumber(41), new EndpointNumber(42), new EndpointNumber(43)]);

            const aggregator2PartsListAttribute2 = attributes.get(attributePathToId({ endpointId: 41, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(aggregator2PartsListAttribute2?.getLocal(), [new EndpointNumber(42), new EndpointNumber(43),]);

            const rootPartsListAttribute = attributes.get(attributePathToId({ endpointId: 0, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(rootPartsListAttribute?.getLocal(), [new EndpointNumber(37), new EndpointNumber(3), new EndpointNumber(38), new EndpointNumber(39), new EndpointNumber(40), new EndpointNumber(18), new EndpointNumber(41), new EndpointNumber(42), new EndpointNumber(43)]);

            assert.equal(endpointStorage.get("serial_node-matter-0000-index_0-index_1"), 38);
            assert.equal(endpointStorage.get("serial_node-matter-0000-index_1-unique_COMPOSED2-custom_COMPOSED.SUB1"), 42);
            assert.equal(endpointStorage.get("serial_node-matter-0000-index_1-unique_COMPOSED2-index_1"), 43);

            assert.equal(attributePaths.length, 502);
            assert.equal(commandPaths.length, 138);
            assert.equal(eventPaths.length, 9);
        });

        it("Device Structure with two aggregators and three Light/Composed endpoints and all partly auto-assigned endpoint IDs and removing adding devices", async () => {
            const testStorage = new StorageBackendMemory();
            const testStorageManager = new StorageManager(testStorage);
            await testStorageManager.initialize();
            const testStorageContext = testStorageManager.createContext("TestContext");
            const endpointStorage = testStorageContext.createContext("EndpointStructure");
            endpointStorage.set("serial_node-matter-0000-index_0-custom_3333", 3);

            const node = new CommissioningServer({
                port: 5540,
                deviceName: "Test Device",
                deviceType: 0x16,
                passcode: 123,
                discriminator: 1234,
                basicInformation: {
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
                certificates: {
                    devicePrivateKey: ByteArray.fromHex("00"),
                    deviceCertificate: ByteArray.fromHex("00"),
                    deviceIntermediateCertificate: ByteArray.fromHex("00"),
                    certificationDeclaration: ByteArray.fromHex("00"),
                }
            });
            node.setStorage(testStorageContext);
            addRequiredRootClusters(node);

            const aggregator1 = new Aggregator([], { endpointId: 37 });
            aggregator1.addClusterServer(ClusterServer(
                FixedLabelCluster,
                {
                    labelList: [{ label: "bridge", value: "Type A" }]
                },
                {}
            ));

            const onoffLightDevice11 = new OnOffLightDevice(undefined, { uniqueStorageKey: "3333" });
            const onoffLightDevice12 = new OnOffLightDevice();

            aggregator1.addBridgedDevice(onoffLightDevice11, {
                nodeLabel: "Socket 1-1",
                reachable: true
            });
            aggregator1.addBridgedDevice(onoffLightDevice12, {
                nodeLabel: "Socket 1-2",
                reachable: true
            });
            node.addDevice(aggregator1);

            const aggregator2 = new Aggregator();
            aggregator2.addClusterServer(ClusterServer(
                FixedLabelCluster,
                {
                    labelList: [{ label: "bridge", value: "Type B" }]
                },
                {}
            ));

            const onoffLightDevice21 = new OnOffLightDevice();
            const onoffLightDevice22 = new OnOffLightDevice(undefined, { endpointId: 18 });

            aggregator2.addBridgedDevice(onoffLightDevice21, {
                nodeLabel: "Socket 2-1",
                serialNumber: "12345678",
                reachable: true
            });
            aggregator2.addBridgedDevice(onoffLightDevice22, {
                nodeLabel: "Socket 2-2",
                reachable: true
            });

            const composedDevice = new ComposedDevice(DeviceTypes.ON_OFF_LIGHT, [
                new OnOffLightDevice(undefined, { uniqueStorageKey: "COMPOSED.SUB1" }),
                new OnOffPluginUnitDevice()
            ]);
            aggregator2.addBridgedDevice(composedDevice, {
                nodeLabel: "Composed 2-3",
                uniqueId: "COMPOSED2",
                reachable: true
            });

            node.addDevice(aggregator2);

            node.assignEndpointIds();
            assert.equal(node.getNextEndpointId(false), 44);

            const rootEndpoint = node.getRootEndpoint();
            rootEndpoint.updatePartsList();
            const endpointStructure = new InteractionEndpointStructure();
            endpointStructure.initializeFromEndpoint(rootEndpoint);
            const {
                endpoints,
                attributes,
                attributePaths,
                commandPaths,
                eventPaths,
            } = endpointStructure;

            assert.equal(endpoints.size, 10);
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

            assert.equal(endpoints.get(41)?.getAllClusterServers().length, 2);
            assert.ok(endpoints.get(41)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(41)?.hasClusterServer(BridgedDeviceBasicInformationCluster));

            assert.equal(endpoints.get(42)?.getAllClusterServers().length, 6);
            assert.ok(endpoints.get(42)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(42)?.hasClusterServer(IdentifyCluster));
            assert.ok(endpoints.get(42)?.hasClusterServer(GroupsCluster));
            assert.ok(endpoints.get(42)?.hasClusterServer(ScenesCluster));
            assert.ok(endpoints.get(42)?.hasClusterServer(OnOffCluster));
            assert.ok(endpoints.get(42)?.hasClusterServer(BindingCluster));

            assert.equal(endpoints.get(43)?.getAllClusterServers().length, 6);
            assert.ok(endpoints.get(43)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints.get(43)?.hasClusterServer(IdentifyCluster));
            assert.ok(endpoints.get(43)?.hasClusterServer(GroupsCluster));
            assert.ok(endpoints.get(43)?.hasClusterServer(ScenesCluster));
            assert.ok(endpoints.get(43)?.hasClusterServer(OnOffCluster));
            assert.ok(endpoints.get(43)?.hasClusterServer(BindingCluster));

            const aggregator1PartsListAttribute = attributes.get(attributePathToId({ endpointId: 37, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(aggregator1PartsListAttribute?.getLocal(), [new EndpointNumber(3), new EndpointNumber(38)]);

            const aggregator2PartsListAttribute = attributes.get(attributePathToId({ endpointId: 39, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(aggregator2PartsListAttribute?.getLocal(), [new EndpointNumber(40), new EndpointNumber(18), new EndpointNumber(41), new EndpointNumber(42), new EndpointNumber(43)]);

            const aggregator2PartsListAttribute2 = attributes.get(attributePathToId({ endpointId: 41, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(aggregator2PartsListAttribute2?.getLocal(), [new EndpointNumber(42), new EndpointNumber(43),]);

            const rootPartsListAttribute = attributes.get(attributePathToId({ endpointId: 0, clusterId: DescriptorCluster.id, attributeId: DescriptorCluster.attributes.partsList.id })) as AttributeServer<EndpointNumber[]>;
            assert.deepEqual(rootPartsListAttribute?.getLocal(), [new EndpointNumber(37), new EndpointNumber(3), new EndpointNumber(38), new EndpointNumber(39), new EndpointNumber(40), new EndpointNumber(18), new EndpointNumber(41), new EndpointNumber(42), new EndpointNumber(43)]);

            assert.equal(endpointStorage.get("serial_node-matter-0000-index_0-index_1"), 38);
            assert.equal(endpointStorage.get("serial_node-matter-0000-index_1-unique_COMPOSED2-custom_COMPOSED.SUB1"), 42);
            assert.equal(endpointStorage.get("serial_node-matter-0000-index_1-unique_COMPOSED2-index_1"), 43);

            assert.equal(attributePaths.length, 502);
            assert.equal(commandPaths.length, 138);
            assert.equal(eventPaths.length, 9);

            let structureChangeCounter = 0;
            rootEndpoint.setStructureChangedCallback(() => {
                structureChangeCounter++;

                node.assignEndpointIds();
                rootEndpoint.updatePartsList();
            });

            // Add another device
            const onoffLightDevice13 = new OnOffLightDevice();
            aggregator1.addBridgedDevice(onoffLightDevice13, {
                nodeLabel: "Socket 1-1",
                reachable: true
            });
            assert.equal(structureChangeCounter, 1);
            assert.equal(endpointStorage.get("serial_node-matter-0000-index_0-index_2"), 44);

            // And remove one
            aggregator1.removeBridgedDevice(onoffLightDevice11);

            assert.equal(node.getNextEndpointId(false), 45);
            assert.equal(structureChangeCounter, 2);

            const endpointStructure2 = new InteractionEndpointStructure();
            endpointStructure2.initializeFromEndpoint(rootEndpoint);
            const {
                endpoints: endpoints2,
            } = endpointStructure2;

            assert.equal(endpoints2.size, 10);
            assert.equal(endpoints2.has(3), false);

            assert.equal(endpoints2.get(44)?.getAllClusterServers().length, 7);
            assert.ok(endpoints2.get(44)?.hasClusterServer(DescriptorCluster));
            assert.ok(endpoints2.get(44)?.hasClusterServer(IdentifyCluster));
            assert.ok(endpoints2.get(44)?.hasClusterServer(GroupsCluster));
            assert.ok(endpoints2.get(44)?.hasClusterServer(ScenesCluster));
            assert.ok(endpoints2.get(44)?.hasClusterServer(OnOffCluster));
            assert.ok(endpoints2.get(44)?.hasClusterServer(BindingCluster));
            assert.ok(endpoints2.get(44)?.hasClusterServer(BridgedDeviceBasicInformationCluster));

            // Add the removed back and verify it gets same endpointID as before
            const onoffLightDevice11New = new OnOffLightDevice(undefined, { uniqueStorageKey: "3333" });
            aggregator1.addBridgedDevice(onoffLightDevice11New, {
                nodeLabel: "Socket 1-1 NEW",
                reachable: true
            });

            assert.equal(node.getNextEndpointId(false), 45);
            assert.equal(structureChangeCounter, 3);

            const endpointStructure3 = new InteractionEndpointStructure();
            endpointStructure3.initializeFromEndpoint(rootEndpoint);
            const {
                endpoints: endpoints3,
            } = endpointStructure3;

            assert.equal(endpoints3.size, 11);
            assert.equal(endpoints3.get(3)?.getAllClusterServers().length, 7);
        });
    });
});
