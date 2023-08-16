/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crypto } from "../../src/crypto/Crypto.js";
Crypto.get = () =>
    ({
        getRandomData: (length: number) => {
            return new Uint8Array(length);
        },
    }) as Crypto;

import { BN } from "bn.js";
import { AccessControlCluster } from "../../src/cluster/definitions/AccessControlCluster.js";
import { AdministratorCommissioning } from "../../src/cluster/definitions/AdministratorCommissioningCluster.js";
import { BasicInformationCluster } from "../../src/cluster/definitions/BasicInformationCluster.js";
import { BindingCluster } from "../../src/cluster/definitions/BindingCluster.js";
import { BridgedDeviceBasicInformationCluster } from "../../src/cluster/definitions/BridgedDeviceBasicInformationCluster.js";
import { DescriptorCluster } from "../../src/cluster/definitions/DescriptorCluster.js";
import { FixedLabelCluster } from "../../src/cluster/definitions/FixedLabelCluster.js";
import { GeneralCommissioning } from "../../src/cluster/definitions/GeneralCommissioningCluster.js";
import { GeneralDiagnostics } from "../../src/cluster/definitions/GeneralDiagnosticsCluster.js";
import { GroupKeyManagementCluster } from "../../src/cluster/definitions/GroupKeyManagementCluster.js";
import { GroupsCluster } from "../../src/cluster/definitions/GroupsCluster.js";
import { IdentifyCluster } from "../../src/cluster/definitions/IdentifyCluster.js";
import { NetworkCommissioning } from "../../src/cluster/definitions/NetworkCommissioningCluster.js";
import { OnOffCluster } from "../../src/cluster/definitions/OnOffCluster.js";
import { OperationalCredentialsCluster } from "../../src/cluster/definitions/OperationalCredentialsCluster.js";
import { ScenesCluster } from "../../src/cluster/definitions/ScenesCluster.js";
import { AdministratorCommissioningHandler } from "../../src/cluster/server/AdministratorCommissioningServer.js";
import { AttributeServer } from "../../src/cluster/server/AttributeServer.js";
import { ClusterServer } from "../../src/cluster/server/ClusterServer.js";
import { GeneralCommissioningClusterHandler } from "../../src/cluster/server/GeneralCommissioningServer.js";
import { GroupKeyManagementClusterHandler } from "../../src/cluster/server/GroupKeyManagementServer.js";
import { OperationalCredentialsClusterHandler } from "../../src/cluster/server/OperationalCredentialsServer.js";
import { CommissioningServer } from "../../src/CommissioningServer.js";
import { ImplementationError } from "../../src/common/MatterError.js";
import { DeviceTypeId } from "../../src/datatype/DeviceTypeId.js";
import { EndpointNumber } from "../../src/datatype/EndpointNumber.js";
import { FabricIndex } from "../../src/datatype/FabricIndex.js";
import { VendorId } from "../../src/datatype/VendorId.js";
import { Aggregator } from "../../src/device/Aggregator.js";
import { ComposedDevice } from "../../src/device/ComposedDevice.js";
import { DeviceTypes } from "../../src/device/DeviceTypes.js";
import { Endpoint } from "../../src/device/Endpoint.js";
import { OnOffLightDevice, OnOffPluginUnitDevice } from "../../src/device/OnOffDevices.js";
import { MatterNode } from "../../src/MatterNode.js";
import { InteractionEndpointStructure } from "../../src/protocol/interaction/InteractionEndpointStructure.js";
import { attributePathToId } from "../../src/protocol/interaction/InteractionServer.js";
import { SecureChannelProtocol } from "../../src/protocol/securechannel/SecureChannelProtocol.js";
import { CaseServer } from "../../src/session/case/CaseServer.js";
import { PaseServer } from "../../src/session/pase/PaseServer.js";
import { StorageBackendMemory } from "../../src/storage/StorageBackendMemory.js";
import { StorageManager } from "../../src/storage/StorageManager.js";
import { ByteArray } from "../../src/util/ByteArray.js";

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
                    vendorId: VendorId(1),
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
                        subscriptionsPerFabric: 3,
                    },
                    serialNumber: `node-matter-0000`,
                },
                {},
                {
                    startUp: true,
                },
            ),
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
                    currentFabricIndex: FabricIndex.NO_FABRIC,
                },
                OperationalCredentialsClusterHandler({
                    devicePrivateKey: ByteArray.fromHex("00"),
                    deviceCertificate: ByteArray.fromHex("00"),
                    deviceIntermediateCertificate: ByteArray.fromHex("00"),
                    certificationDeclaration: ByteArray.fromHex("00"),
                }),
            ),
        );
    }

    node.addRootClusterServer(
        ClusterServer(
            GeneralCommissioning.Cluster,
            {
                breadcrumb: BigInt(0),
                basicCommissioningInfo: {
                    failSafeExpiryLengthSeconds: 60 /* 1min */,
                    maxCumulativeFailsafeSeconds: 900 /* Recommended according to Specs */,
                },
                regulatoryConfig: GeneralCommissioning.RegulatoryLocationType.Indoor,
                locationCapability: GeneralCommissioning.RegulatoryLocationType.IndoorOutdoor,
                supportsConcurrentConnection: true,
            },
            GeneralCommissioningClusterHandler(),
        ),
    );

    node.addRootClusterServer(
        ClusterServer(
            NetworkCommissioning.Cluster.with("EthernetNetworkInterface"),
            {
                maxNetworks: 1,
                interfaceEnabled: true,
                lastConnectErrorValue: 0,
                lastNetworkId: ByteArray.fromHex("0000000000000000000000000000000000000000000000000000000000000000"),
                lastNetworkingStatus: NetworkCommissioning.NetworkCommissioningStatus.Success,
                networks: [
                    {
                        networkId: ByteArray.fromHex(
                            "0000000000000000000000000000000000000000000000000000000000000000",
                        ),
                        connected: true,
                    },
                ],
            },
            {},
        ),
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
            {},
            {
                accessControlEntryChanged: true,
                accessControlExtensionChanged: true,
            },
        ),
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
            GroupKeyManagementClusterHandler(),
        ),
    );

    node.addRootClusterServer(
        ClusterServer(
            GeneralDiagnostics.Cluster,
            {
                networkInterfaces: [],
                rebootCount: 0,
                upTime: 0,
                totalOperationalHours: 0,
                bootReason: GeneralDiagnostics.BootReason.Unspecified,
                activeHardwareFaults: [],
                activeRadioFaults: [],
                activeNetworkFaults: [],
                testEventTriggersEnabled: false,
            },
            {
                testEventTrigger: async () => {
                    /* ignore */
                },
            },
            {
                bootReason: true,
            },
        ),
    );

    if (includeAdminCommissioningCluster) {
        node.addRootClusterServer(
            ClusterServer(
                AdministratorCommissioning.Cluster,
                {
                    windowStatus: AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen,
                    adminFabricIndex: null,
                    adminVendorId: null,
                },
                AdministratorCommissioningHandler(
                    new SecureChannelProtocol(new PaseServer(new BN(0), ByteArray.fromHex("00")), new CaseServer()),
                ),
            ),
        );
    }
}

describe("Endpoint Structures", () => {
    describe("Simple Endpoint structure", () => {
        it("Root Endpoint with missing required cluster throws exception", () => {
            const node = new TestNode();
            addRequiredRootClusters(node, false);

            expect(() => node.getRootEndpoint().verifyRequiredClusters()).toThrow(
                new ImplementationError(
                    "Device type MA-rootdevice (0x16) requires cluster server AdministratorCommissioning(0x3c) but it is not present on endpoint 0",
                ),
            );
        });

        it("Just root Endpoint", () => {
            const node = new CommissioningServer({
                port: 5540,
                deviceName: "Test Device",
                deviceType: DeviceTypeId(0x16),
                passcode: 123,
                discriminator: 1234,
                basicInformation: {
                    dataModelRevision: 1,
                    vendorName: "vendor",
                    vendorId: VendorId(1),
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
                        subscriptionsPerFabric: 3,
                    },
                    serialNumber: `node-matter-0000`,
                },
                certificates: {
                    devicePrivateKey: ByteArray.fromHex("00"),
                    deviceCertificate: ByteArray.fromHex("00"),
                    deviceIntermediateCertificate: ByteArray.fromHex("00"),
                    certificationDeclaration: ByteArray.fromHex("00"),
                },
            });
            addRequiredRootClusters(node);

            const rootEndpoint = node.getRootEndpoint();
            rootEndpoint.updatePartsList();
            const endpointStructure = new InteractionEndpointStructure();
            endpointStructure.initializeFromEndpoint(rootEndpoint);
            const { endpoints, attributes, attributePaths, commandPaths, eventPaths } = endpointStructure;

            const rootPartsListAttribute = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(0),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.partsList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(rootPartsListAttribute?.getLocal()).toEqual([]);

            const rootPartsListAttribute2 = endpointStructure.getAttributes([
                {
                    endpointId: EndpointNumber(0),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.partsList.id,
                },
            ]);
            expect(rootPartsListAttribute2.length).toBe(1);
            expect(rootPartsListAttribute).toBe(rootPartsListAttribute2[0].attribute);

            expect(endpoints.size).toBe(1);
            expect(endpoints.get(EndpointNumber(0))?.getAllClusterServers().length).toBe(9);
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(BasicInformationCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(OperationalCredentialsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GeneralCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(NetworkCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(AccessControlCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(AdministratorCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GroupKeyManagementCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GeneralCommissioning.Cluster)).toBeTruthy();

            expect(attributePaths.length).toBe(110);
            expect(commandPaths.length).toBe(18);
            expect(eventPaths.length).toBe(6);

            const basicInformationCluster = rootEndpoint.getClusterServer(BasicInformationCluster);
            expect(basicInformationCluster).toBeDefined();
            expect((basicInformationCluster?.attributes as any).attributeList.get().length).toBe(20);
            expect((basicInformationCluster?.attributes as any).eventList.get().length).toBe(3);
            expect((basicInformationCluster?.attributes as any).generatedCommandList.get().length).toBe(0);
            expect((basicInformationCluster?.attributes as any).acceptedCommandList.get().length).toBe(0);

            const generalCommissioningCluster = rootEndpoint.getClusterServer(GeneralCommissioning.Cluster);
            expect(generalCommissioningCluster).toBeDefined();
            expect((generalCommissioningCluster?.attributes as any).attributeList.get().length).toBe(11);
            expect((generalCommissioningCluster?.attributes as any).eventList.get().length).toBe(0);
            expect((generalCommissioningCluster?.attributes as any).generatedCommandList.get().length).toBe(3);
            expect((generalCommissioningCluster?.attributes as any).acceptedCommandList.get().length).toBe(3);
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
                deviceType: DeviceTypeId(0x16),
                passcode: 123,
                discriminator: 1234,
                basicInformation: {
                    dataModelRevision: 1,
                    vendorName: "vendor",
                    vendorId: VendorId(1),
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
                        subscriptionsPerFabric: 3,
                    },
                    serialNumber: `node-matter-0000`,
                },
                certificates: {
                    devicePrivateKey: ByteArray.fromHex("00"),
                    deviceCertificate: ByteArray.fromHex("00"),
                    deviceIntermediateCertificate: ByteArray.fromHex("00"),
                    certificationDeclaration: ByteArray.fromHex("00"),
                },
            });
            node.setStorage(testStorageContext);
            addRequiredRootClusters(node);

            const onoffLightDevice = new OnOffLightDevice();

            node.addDevice(onoffLightDevice);

            node.assignEndpointIds();
            expect(node.getNextEndpointId(false)).toBe(2);

            const rootEndpoint = node.getRootEndpoint();
            rootEndpoint.updatePartsList();
            const endpointStructure = new InteractionEndpointStructure();
            endpointStructure.initializeFromEndpoint(rootEndpoint);
            const { endpoints, attributes, attributePaths, commandPaths, eventPaths } = endpointStructure;

            expect(endpointStorage.get("serial_node-matter-0000-index_0")).toBe(1);

            expect(endpoints.size).toBe(2);
            expect(endpoints.get(EndpointNumber(0))?.getAllClusterServers().length).toBe(9);
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(BasicInformationCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(OperationalCredentialsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GeneralCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(NetworkCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(AccessControlCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(AdministratorCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GroupKeyManagementCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GeneralCommissioning.Cluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(1))?.getAllClusterServers().length).toBe(6);
            expect(endpoints.get(EndpointNumber(1))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(1))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(1))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(1))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(1))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(1))?.hasClusterServer(BindingCluster)).toBeTruthy();

            const rootPartsListAttribute = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(0),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.partsList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(rootPartsListAttribute?.getLocal()).toEqual([EndpointNumber(1)]);

            expect(attributePaths.length).toBe(161);
            expect(commandPaths.length).toBe(38);
            expect(eventPaths.length).toBe(6);
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
                deviceType: DeviceTypeId(0x16),
                passcode: 123,
                discriminator: 1234,
                basicInformation: {
                    dataModelRevision: 1,
                    vendorName: "vendor",
                    vendorId: VendorId(1),
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
                        subscriptionsPerFabric: 3,
                    },
                    serialNumber: `node-matter-0000`,
                },
                certificates: {
                    devicePrivateKey: ByteArray.fromHex("00"),
                    deviceCertificate: ByteArray.fromHex("00"),
                    deviceIntermediateCertificate: ByteArray.fromHex("00"),
                    certificationDeclaration: ByteArray.fromHex("00"),
                },
            });
            node.setStorage(testStorageContext);
            addRequiredRootClusters(node);

            const onoffLightDevice = new OnOffLightDevice(undefined, { uniqueStorageKey: "test-unique-id" });

            node.addDevice(onoffLightDevice);

            node.assignEndpointIds();
            expect(node.getNextEndpointId(false)).toBe(2);

            const rootEndpoint = node.getRootEndpoint();
            rootEndpoint.updatePartsList();
            const endpointStructure = new InteractionEndpointStructure();
            endpointStructure.initializeFromEndpoint(rootEndpoint);
            const { endpoints, attributes, attributePaths, commandPaths, eventPaths } = endpointStructure;

            expect(endpointStorage.get("serial_node-matter-0000-custom_test-unique-id")).toBe(1);

            expect(endpoints.size).toBe(2);
            expect(endpoints.get(EndpointNumber(0))?.getAllClusterServers().length).toBe(9);
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(BasicInformationCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(OperationalCredentialsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GeneralCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(NetworkCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(AccessControlCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(AdministratorCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GroupKeyManagementCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GeneralCommissioning.Cluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(1))?.getAllClusterServers().length).toBe(6);
            expect(endpoints.get(EndpointNumber(1))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(1))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(1))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(1))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(1))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(1))?.hasClusterServer(BindingCluster)).toBeTruthy();

            const rootPartsListAttribute = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(0),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.partsList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(rootPartsListAttribute?.getLocal()).toEqual([EndpointNumber(1)]);

            expect(attributePaths.length).toBe(161);
            expect(commandPaths.length).toBe(38);
            expect(eventPaths.length).toBe(6);
        });

        it("One device with one Light endpoints - no uniqueid, use index, from storage", async () => {
            const testStorage = new StorageBackendMemory();
            const testStorageManager = new StorageManager(testStorage);
            await testStorageManager.initialize();
            const testStorageContext = testStorageManager.createContext("TestContext");
            const endpointStorage = testStorageContext.createContext("EndpointStructure");
            endpointStorage.set("serial_node-matter-0000-index_0", 10);

            const node = new CommissioningServer({
                port: 5540,
                deviceName: "Test Device",
                deviceType: DeviceTypeId(0x16),
                passcode: 123,
                discriminator: 1234,
                basicInformation: {
                    dataModelRevision: 1,
                    vendorName: "vendor",
                    vendorId: VendorId(1),
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
                        subscriptionsPerFabric: 3,
                    },
                    serialNumber: `node-matter-0000`,
                },
                certificates: {
                    devicePrivateKey: ByteArray.fromHex("00"),
                    deviceCertificate: ByteArray.fromHex("00"),
                    deviceIntermediateCertificate: ByteArray.fromHex("00"),
                    certificationDeclaration: ByteArray.fromHex("00"),
                },
            });
            node.setStorage(testStorageContext);
            addRequiredRootClusters(node);

            const onoffLightDevice = new OnOffLightDevice();

            node.addDevice(onoffLightDevice);

            node.assignEndpointIds();
            expect(node.getNextEndpointId(false)).toBe(11);

            const rootEndpoint = node.getRootEndpoint();
            rootEndpoint.updatePartsList();
            const endpointStructure = new InteractionEndpointStructure();
            endpointStructure.initializeFromEndpoint(rootEndpoint);
            const { endpoints, attributes, attributePaths, commandPaths, eventPaths } = endpointStructure;

            expect(endpointStorage.get("serial_node-matter-0000-index_0")).toBe(10);

            expect(endpoints.size).toBe(2);
            expect(endpoints.get(EndpointNumber(0))?.getAllClusterServers().length).toBe(9);
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(BasicInformationCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(OperationalCredentialsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GeneralCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(NetworkCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(AccessControlCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(AdministratorCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GroupKeyManagementCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GeneralCommissioning.Cluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(10))?.getAllClusterServers().length).toBe(6);
            expect(endpoints.get(EndpointNumber(10))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(10))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(10))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(10))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(10))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(10))?.hasClusterServer(BindingCluster)).toBeTruthy();

            const rootPartsListAttribute = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(0),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.partsList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(rootPartsListAttribute?.getLocal()).toEqual([EndpointNumber(10)]);

            expect(attributePaths.length).toBe(161);
            expect(commandPaths.length).toBe(38);
            expect(eventPaths.length).toBe(6);
        });

        it("One device with one Light endpoints - with uniqueid, from storage", async () => {
            const testStorage = new StorageBackendMemory();
            const testStorageManager = new StorageManager(testStorage);
            await testStorageManager.initialize();
            const testStorageContext = testStorageManager.createContext("TestContext");
            const endpointStorage = testStorageContext.createContext("EndpointStructure");
            endpointStorage.set("serial_node-matter-0000-custom_test-unique-id", 10);

            const node = new CommissioningServer({
                port: 5540,
                deviceName: "Test Device",
                deviceType: DeviceTypeId(0x16),
                passcode: 123,
                discriminator: 1234,
                basicInformation: {
                    dataModelRevision: 1,
                    vendorName: "vendor",
                    vendorId: VendorId(1),
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
                        subscriptionsPerFabric: 3,
                    },
                    serialNumber: `node-matter-0000`,
                },
                certificates: {
                    devicePrivateKey: ByteArray.fromHex("00"),
                    deviceCertificate: ByteArray.fromHex("00"),
                    deviceIntermediateCertificate: ByteArray.fromHex("00"),
                    certificationDeclaration: ByteArray.fromHex("00"),
                },
            });
            node.setStorage(testStorageContext);
            addRequiredRootClusters(node);

            const onoffLightDevice = new OnOffLightDevice(undefined, { uniqueStorageKey: "test-unique-id" });

            node.addDevice(onoffLightDevice);

            node.assignEndpointIds();
            expect(node.getNextEndpointId(false)).toBe(11);

            const rootEndpoint = node.getRootEndpoint();
            rootEndpoint.updatePartsList();
            const endpointStructure = new InteractionEndpointStructure();
            endpointStructure.initializeFromEndpoint(rootEndpoint);
            const { endpoints, attributes, attributePaths, commandPaths, eventPaths } = endpointStructure;

            expect(endpointStorage.get("serial_node-matter-0000-custom_test-unique-id")).toBe(10);

            expect(endpoints.size).toBe(2);
            expect(endpoints.get(EndpointNumber(0))?.getAllClusterServers().length).toBe(9);
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(BasicInformationCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(OperationalCredentialsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GeneralCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(NetworkCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(AccessControlCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(AdministratorCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GroupKeyManagementCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GeneralCommissioning.Cluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(10))?.getAllClusterServers().length).toBe(6);
            expect(endpoints.get(EndpointNumber(10))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(10))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(10))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(10))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(10))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(10))?.hasClusterServer(BindingCluster)).toBeTruthy();

            const rootPartsListAttribute = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(0),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.partsList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(rootPartsListAttribute?.getLocal()).toEqual([EndpointNumber(10)]);

            expect(attributePaths.length).toBe(161);
            expect(commandPaths.length).toBe(38);
            expect(eventPaths.length).toBe(6);
        });
    });

    describe("Aggregator/Bridged Endpoint structures", () => {
        it("Aggregator Structure with one Light endpoint and defined endpoint IDs", () => {
            const node = new TestNode();
            addRequiredRootClusters(node);

            const aggregator = new Aggregator([], { endpointId: EndpointNumber(1) });

            const onoffLightDevice = new OnOffLightDevice(undefined, { endpointId: EndpointNumber(11) });
            onoffLightDevice.addClusterServer(
                ClusterServer(
                    BridgedDeviceBasicInformationCluster,
                    {
                        nodeLabel: "Socket 1",
                        reachable: true,
                    },
                    {},
                    {
                        reachableChanged: true,
                    },
                ),
            );

            aggregator.addBridgedDevice(onoffLightDevice);
            node.addEndpoint(aggregator);

            const rootEndpoint = node.getRootEndpoint();
            rootEndpoint.updatePartsList();
            const endpointStructure = new InteractionEndpointStructure();
            endpointStructure.initializeFromEndpoint(rootEndpoint);
            const { endpoints, attributes, attributePaths, commandPaths, eventPaths } = endpointStructure;

            expect(endpoints.size).toBe(3);
            expect(endpoints.get(EndpointNumber(0))?.getAllClusterServers().length).toBe(9);
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(BasicInformationCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(OperationalCredentialsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GeneralCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(NetworkCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(AccessControlCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(AdministratorCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GroupKeyManagementCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GeneralCommissioning.Cluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(1))?.getAllClusterServers().length).toBe(1);
            expect(endpoints.get(EndpointNumber(1))?.hasClusterServer(DescriptorCluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(11))?.getAllClusterServers().length).toBe(7);
            expect(endpoints.get(EndpointNumber(11))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(11))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(11))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(11))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(11))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(
                endpoints.get(EndpointNumber(11))?.hasClusterServer(BridgedDeviceBasicInformationCluster),
            ).toBeTruthy();
            expect(endpoints.get(EndpointNumber(11))?.hasClusterServer(BindingCluster)).toBeTruthy();

            const rootPartsListAttribute = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(0),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.partsList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(rootPartsListAttribute?.getLocal()).toEqual([EndpointNumber(1), EndpointNumber(11)]);

            const aggregatorPartsListAttribute = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(1),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.partsList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(aggregatorPartsListAttribute?.getLocal()).toEqual([EndpointNumber(11)]);

            const aggregatorDeviceTypeListAttribute = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(1),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.deviceTypeList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(aggregatorDeviceTypeListAttribute?.getLocal()).toEqual([
                {
                    deviceType: DeviceTypeId(DeviceTypes.AGGREGATOR.code),
                    revision: 1,
                },
            ]);

            const devicePartsListAttribute = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(11),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.partsList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(devicePartsListAttribute?.getLocal()).toEqual([]);

            const deviceTypeListAttribute = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(11),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.deviceTypeList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(deviceTypeListAttribute?.getLocal()).toEqual([
                {
                    deviceType: DeviceTypeId(DeviceTypes.ON_OFF_LIGHT.code),
                    revision: 2,
                },
                {
                    deviceType: DeviceTypeId(DeviceTypes.BRIDGED_NODE.code),
                    revision: 1,
                },
            ]);

            expect(attributePaths.length).toBe(179);
            expect(commandPaths.length).toBe(38);
            expect(eventPaths.length).toBe(5);
        });

        it("Device Structure with one aggregator and two Light endpoints and defined endpoint IDs", () => {
            const node = new TestNode();
            addRequiredRootClusters(node);

            const aggregator = new Aggregator([], { endpointId: EndpointNumber(1) });

            const onoffLightDevice11 = new OnOffLightDevice(undefined, { endpointId: EndpointNumber(11) });
            const onoffLightDevice12 = new OnOffLightDevice(undefined, { endpointId: EndpointNumber(12) });

            aggregator.addBridgedDevice(onoffLightDevice11, {
                nodeLabel: "Socket 1",
                reachable: true,
            });
            aggregator.addBridgedDevice(onoffLightDevice12, {
                nodeLabel: "Socket 2",
                reachable: true,
            });
            node.addEndpoint(aggregator);

            const rootEndpoint = node.getRootEndpoint();
            rootEndpoint.updatePartsList();
            const endpointStructure = new InteractionEndpointStructure();
            endpointStructure.initializeFromEndpoint(rootEndpoint);
            const { endpoints, attributes, attributePaths, commandPaths, eventPaths } = endpointStructure;

            expect(endpoints.size).toBe(4);
            expect(endpoints.get(EndpointNumber(0))?.getAllClusterServers().length).toBe(9);
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(BasicInformationCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(OperationalCredentialsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GeneralCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(NetworkCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(AccessControlCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(AdministratorCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GroupKeyManagementCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GeneralCommissioning.Cluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(1))?.getAllClusterServers().length).toBe(1);
            expect(endpoints.get(EndpointNumber(1))?.hasClusterServer(DescriptorCluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(11))?.getAllClusterServers().length).toBe(7);
            expect(endpoints.get(EndpointNumber(11))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(11))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(11))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(11))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(
                endpoints.get(EndpointNumber(11))?.hasClusterServer(BridgedDeviceBasicInformationCluster),
            ).toBeTruthy();
            expect(endpoints.get(EndpointNumber(11))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(11))?.hasClusterServer(BindingCluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(12))?.getAllClusterServers().length).toBe(7);
            expect(endpoints.get(EndpointNumber(12))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(12))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(12))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(12))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(
                endpoints.get(EndpointNumber(12))?.hasClusterServer(BridgedDeviceBasicInformationCluster),
            ).toBeTruthy();
            expect(endpoints.get(EndpointNumber(12))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(12))?.hasClusterServer(BindingCluster)).toBeTruthy();

            const rootPartsListAttribute = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(0),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.partsList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(rootPartsListAttribute?.getLocal()).toEqual([
                EndpointNumber(1),
                EndpointNumber(11),
                EndpointNumber(12),
            ]);

            const aggregatorPartsListAttribute = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(1),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.partsList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(aggregatorPartsListAttribute?.getLocal()).toEqual([EndpointNumber(11), EndpointNumber(12)]);

            const aggregatorDeviceTypeListAttribute = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(1),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.deviceTypeList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(aggregatorDeviceTypeListAttribute?.getLocal()).toEqual([
                {
                    deviceType: DeviceTypeId(DeviceTypes.AGGREGATOR.code),
                    revision: 1,
                },
            ]);

            const devicePartsListAttribute = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(11),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.partsList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(devicePartsListAttribute?.getLocal()).toEqual([]);

            const deviceTypeListAttribute = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(11),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.deviceTypeList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(deviceTypeListAttribute?.getLocal()).toEqual([
                {
                    deviceType: DeviceTypeId(DeviceTypes.ON_OFF_LIGHT.code),
                    revision: 2,
                },
                {
                    deviceType: DeviceTypeId(DeviceTypes.BRIDGED_NODE.code),
                    revision: 1,
                },
            ]);

            expect(attributePaths.length).toBe(238);
            expect(commandPaths.length).toBe(58);
            expect(eventPaths.length).toBe(6);
        });

        it("Device Structure with two aggregators and two Light endpoints and defined endpoint IDs", () => {
            const node = new TestNode();
            addRequiredRootClusters(node);

            const aggregator1 = new Aggregator([], { endpointId: EndpointNumber(1) });
            aggregator1.addClusterServer(
                ClusterServer(
                    FixedLabelCluster,
                    {
                        labelList: [{ label: "bridge", value: "Type A" }],
                    },
                    {},
                ),
            );

            const onoffLightDevice11 = new OnOffLightDevice(undefined, { endpointId: EndpointNumber(11) });
            const onoffLightDevice12 = new OnOffLightDevice(undefined, { endpointId: EndpointNumber(12) });

            aggregator1.addBridgedDevice(onoffLightDevice11, {
                nodeLabel: "Socket 1-1",
                reachable: true,
            });
            aggregator1.addBridgedDevice(onoffLightDevice12, {
                nodeLabel: "Socket 1-2",
                reachable: true,
            });
            node.addEndpoint(aggregator1);

            const aggregator2 = new Aggregator([], { endpointId: EndpointNumber(2) });
            aggregator2.addClusterServer(
                ClusterServer(
                    FixedLabelCluster,
                    {
                        labelList: [{ label: "bridge", value: "Type B" }],
                    },
                    {},
                ),
            );

            const onoffLightDevice21 = new OnOffLightDevice(undefined, { endpointId: EndpointNumber(21) });
            const onoffLightDevice22 = new OnOffLightDevice(undefined, { endpointId: EndpointNumber(22) });

            aggregator2.addBridgedDevice(onoffLightDevice21, {
                nodeLabel: "Socket 2-1",
                reachable: true,
            });
            aggregator2.addBridgedDevice(onoffLightDevice22, {
                nodeLabel: "Socket 2-2",
                reachable: true,
            });
            node.addEndpoint(aggregator2);

            const rootEndpoint = node.getRootEndpoint();
            rootEndpoint.updatePartsList();
            const endpointStructure = new InteractionEndpointStructure();
            endpointStructure.initializeFromEndpoint(rootEndpoint);
            const { endpoints, attributes, attributePaths, commandPaths, eventPaths } = endpointStructure;

            expect(endpoints.size).toBe(7);
            expect(endpoints.get(EndpointNumber(0))?.getAllClusterServers().length).toBe(9);
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(BasicInformationCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(OperationalCredentialsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GeneralCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(NetworkCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(AccessControlCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(AdministratorCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GroupKeyManagementCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GeneralCommissioning.Cluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(1))?.getAllClusterServers().length).toBe(2);
            expect(endpoints.get(EndpointNumber(1))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(1))?.hasClusterServer(FixedLabelCluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(11))?.getAllClusterServers().length).toBe(7);
            expect(endpoints.get(EndpointNumber(11))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(11))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(11))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(11))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(
                endpoints.get(EndpointNumber(11))?.hasClusterServer(BridgedDeviceBasicInformationCluster),
            ).toBeTruthy();
            expect(endpoints.get(EndpointNumber(11))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(11))?.hasClusterServer(BindingCluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(12))?.getAllClusterServers().length).toBe(7);
            expect(endpoints.get(EndpointNumber(12))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(12))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(12))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(12))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(
                endpoints.get(EndpointNumber(12))?.hasClusterServer(BridgedDeviceBasicInformationCluster),
            ).toBeTruthy();
            expect(endpoints.get(EndpointNumber(12))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(12))?.hasClusterServer(BindingCluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(2))?.getAllClusterServers().length).toBe(2);
            expect(endpoints.get(EndpointNumber(2))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(2))?.hasClusterServer(FixedLabelCluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(21))?.getAllClusterServers().length).toBe(7);
            expect(endpoints.get(EndpointNumber(21))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(21))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(21))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(21))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(
                endpoints.get(EndpointNumber(21))?.hasClusterServer(BridgedDeviceBasicInformationCluster),
            ).toBeTruthy();
            expect(endpoints.get(EndpointNumber(21))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(21))?.hasClusterServer(BindingCluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(22))?.getAllClusterServers().length).toBe(7);
            expect(endpoints.get(EndpointNumber(22))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(22))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(22))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(22))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(
                endpoints.get(EndpointNumber(22))?.hasClusterServer(BridgedDeviceBasicInformationCluster),
            ).toBeTruthy();
            expect(endpoints.get(EndpointNumber(22))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(22))?.hasClusterServer(BindingCluster)).toBeTruthy();

            const aggregator1PartsListAttribute = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(1),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.partsList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(aggregator1PartsListAttribute?.getLocal()).toEqual([EndpointNumber(11), EndpointNumber(12)]);

            const aggregator2PartsListAttribute = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(2),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.partsList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(aggregator2PartsListAttribute?.getLocal()).toEqual([EndpointNumber(21), EndpointNumber(22)]);

            const rootPartsListAttribute = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(0),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.partsList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(rootPartsListAttribute?.getLocal()).toEqual([
                EndpointNumber(1),
                EndpointNumber(11),
                EndpointNumber(12),
                EndpointNumber(2),
                EndpointNumber(21),
                EndpointNumber(22),
            ]);

            expect(attributePaths.length).toBe(380);
            expect(commandPaths.length).toBe(98);
            expect(eventPaths.length).toBe(8);
        });

        it("Device Structure with two aggregators and two Light endpoints and all auto-assigned endpoint IDs", async () => {
            const testStorage = new StorageBackendMemory();
            const testStorageManager = new StorageManager(testStorage);
            await testStorageManager.initialize();
            const testStorageContext = testStorageManager.createContext("TestContext");

            const node = new CommissioningServer({
                port: 5540,
                deviceName: "Test Device",
                deviceType: DeviceTypeId(0x16),
                passcode: 123,
                discriminator: 1234,
                basicInformation: {
                    dataModelRevision: 1,
                    vendorName: "vendor",
                    vendorId: VendorId(1),
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
                        subscriptionsPerFabric: 3,
                    },
                    serialNumber: `node-matter-0000`,
                },
                certificates: {
                    devicePrivateKey: ByteArray.fromHex("00"),
                    deviceCertificate: ByteArray.fromHex("00"),
                    deviceIntermediateCertificate: ByteArray.fromHex("00"),
                    certificationDeclaration: ByteArray.fromHex("00"),
                },
            });
            node.setStorage(testStorageContext);
            addRequiredRootClusters(node);

            const aggregator1 = new Aggregator();
            aggregator1.addClusterServer(
                ClusterServer(
                    FixedLabelCluster,
                    {
                        labelList: [{ label: "bridge", value: "Type A" }],
                    },
                    {},
                ),
            );

            const onoffLightDevice11 = new OnOffLightDevice();
            const onoffLightDevice12 = new OnOffLightDevice();

            aggregator1.addBridgedDevice(onoffLightDevice11, {
                nodeLabel: "Socket 1-1",
                reachable: true,
            });
            aggregator1.addBridgedDevice(onoffLightDevice12, {
                nodeLabel: "Socket 1-2",
                reachable: true,
            });
            node.addDevice(aggregator1);

            const aggregator2 = new Aggregator();
            aggregator2.addClusterServer(
                ClusterServer(
                    FixedLabelCluster,
                    {
                        labelList: [{ label: "bridge", value: "Type B" }],
                    },
                    {},
                ),
            );

            const onoffLightDevice21 = new OnOffLightDevice();
            const onoffLightDevice22 = new OnOffLightDevice();

            aggregator2.addBridgedDevice(onoffLightDevice21, {
                nodeLabel: "Socket 2-1",
                reachable: true,
            });
            aggregator2.addBridgedDevice(onoffLightDevice22, {
                nodeLabel: "Socket 2-2",
                reachable: true,
            });
            node.addDevice(aggregator2);

            node.assignEndpointIds();
            expect(node.getNextEndpointId(false)).toBe(7);

            const rootEndpoint = node.getRootEndpoint();
            rootEndpoint.updatePartsList();
            const endpointStructure = new InteractionEndpointStructure();
            endpointStructure.initializeFromEndpoint(rootEndpoint);
            const { endpoints, attributes, attributePaths, commandPaths, eventPaths } = endpointStructure;

            expect(endpoints.size).toBe(7);
            expect(endpoints.get(EndpointNumber(0))?.getAllClusterServers().length).toBe(9);
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(BasicInformationCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(OperationalCredentialsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GeneralCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(NetworkCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(AccessControlCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(AdministratorCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GroupKeyManagementCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GeneralCommissioning.Cluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(1))?.getAllClusterServers().length).toBe(2);
            expect(endpoints.get(EndpointNumber(1))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(1))?.hasClusterServer(FixedLabelCluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(2))?.getAllClusterServers().length).toBe(7);
            expect(endpoints.get(EndpointNumber(2))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(2))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(2))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(2))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(
                endpoints.get(EndpointNumber(2))?.hasClusterServer(BridgedDeviceBasicInformationCluster),
            ).toBeTruthy();
            expect(endpoints.get(EndpointNumber(2))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(2))?.hasClusterServer(BindingCluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(3))?.getAllClusterServers().length).toBe(7);
            expect(endpoints.get(EndpointNumber(3))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(3))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(3))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(3))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(
                endpoints.get(EndpointNumber(3))?.hasClusterServer(BridgedDeviceBasicInformationCluster),
            ).toBeTruthy();
            expect(endpoints.get(EndpointNumber(3))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(3))?.hasClusterServer(BindingCluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(4))?.getAllClusterServers().length).toBe(2);
            expect(endpoints.get(EndpointNumber(4))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(4))?.hasClusterServer(FixedLabelCluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(5))?.getAllClusterServers().length).toBe(7);
            expect(endpoints.get(EndpointNumber(5))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(5))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(5))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(5))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(
                endpoints.get(EndpointNumber(5))?.hasClusterServer(BridgedDeviceBasicInformationCluster),
            ).toBeTruthy();
            expect(endpoints.get(EndpointNumber(5))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(5))?.hasClusterServer(BindingCluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(6))?.getAllClusterServers().length).toBe(7);
            expect(endpoints.get(EndpointNumber(6))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(6))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(6))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(6))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(
                endpoints.get(EndpointNumber(6))?.hasClusterServer(BridgedDeviceBasicInformationCluster),
            ).toBeTruthy();
            expect(endpoints.get(EndpointNumber(6))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(6))?.hasClusterServer(BindingCluster)).toBeTruthy();

            const aggregator1PartsListAttribute = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(1),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.partsList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(aggregator1PartsListAttribute?.getLocal()).toEqual([EndpointNumber(2), EndpointNumber(3)]);

            const aggregator2PartsListAttribute = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(4),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.partsList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(aggregator2PartsListAttribute?.getLocal()).toEqual([EndpointNumber(5), EndpointNumber(6)]);

            const rootPartsListAttribute = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(0),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.partsList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(rootPartsListAttribute?.getLocal()).toEqual([
                EndpointNumber(1),
                EndpointNumber(2),
                EndpointNumber(3),
                EndpointNumber(4),
                EndpointNumber(5),
                EndpointNumber(6),
            ]);

            expect(attributePaths.length).toBe(380);
            expect(commandPaths.length).toBe(98);
            expect(eventPaths.length).toBe(10);
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
                deviceType: DeviceTypeId(0x16),
                passcode: 123,
                discriminator: 1234,
                basicInformation: {
                    dataModelRevision: 1,
                    vendorName: "vendor",
                    vendorId: VendorId(1),
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
                        subscriptionsPerFabric: 3,
                    },
                    serialNumber: `node-matter-0000`,
                },
                certificates: {
                    devicePrivateKey: ByteArray.fromHex("00"),
                    deviceCertificate: ByteArray.fromHex("00"),
                    deviceIntermediateCertificate: ByteArray.fromHex("00"),
                    certificationDeclaration: ByteArray.fromHex("00"),
                },
            });
            node.setStorage(testStorageContext);
            addRequiredRootClusters(node);

            const aggregator1 = new Aggregator([], { endpointId: EndpointNumber(37) });
            aggregator1.addClusterServer(
                ClusterServer(
                    FixedLabelCluster,
                    {
                        labelList: [{ label: "bridge", value: "Type A" }],
                    },
                    {},
                ),
            );

            const onoffLightDevice11 = new OnOffLightDevice(undefined, { endpointId: EndpointNumber(3) });
            const onoffLightDevice12 = new OnOffLightDevice();

            aggregator1.addBridgedDevice(onoffLightDevice11, {
                nodeLabel: "Socket 1-1",
                reachable: true,
            });
            aggregator1.addBridgedDevice(onoffLightDevice12, {
                nodeLabel: "Socket 1-2",
                reachable: true,
            });
            node.addDevice(aggregator1);

            const aggregator2 = new Aggregator();
            aggregator2.addClusterServer(
                ClusterServer(
                    FixedLabelCluster,
                    {
                        labelList: [{ label: "bridge", value: "Type B" }],
                    },
                    {},
                ),
            );

            const onoffLightDevice21 = new OnOffLightDevice();
            const onoffLightDevice22 = new OnOffLightDevice(undefined, { endpointId: EndpointNumber(18) });

            aggregator2.addBridgedDevice(onoffLightDevice21, {
                nodeLabel: "Socket 2-1",
                serialNumber: "12345678",
                reachable: true,
            });
            aggregator2.addBridgedDevice(onoffLightDevice22, {
                nodeLabel: "Socket 2-2",
                reachable: true,
            });

            const composedDevice = new ComposedDevice(DeviceTypes.ON_OFF_LIGHT, [
                new OnOffLightDevice(undefined, { uniqueStorageKey: "COMPOSED.SUB1" }),
                new OnOffPluginUnitDevice(),
            ]);
            aggregator2.addBridgedDevice(composedDevice, {
                nodeLabel: "Composed 2-3",
                uniqueId: "COMPOSED2",
                reachable: true,
            });

            node.addDevice(aggregator2);

            node.assignEndpointIds();
            expect(node.getNextEndpointId(false)).toBe(44);

            const rootEndpoint = node.getRootEndpoint();
            rootEndpoint.updatePartsList();
            const endpointStructure = new InteractionEndpointStructure();
            endpointStructure.initializeFromEndpoint(rootEndpoint);
            const { endpoints, attributes, attributePaths, commandPaths, eventPaths } = endpointStructure;

            expect(endpoints.size).toBe(10);
            expect(endpoints.get(EndpointNumber(0))?.getAllClusterServers().length).toBe(9);
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(BasicInformationCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(OperationalCredentialsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GeneralCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(NetworkCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(AccessControlCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(AdministratorCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GroupKeyManagementCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GeneralCommissioning.Cluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(37))?.getAllClusterServers().length).toBe(2);
            expect(endpoints.get(EndpointNumber(37))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(37))?.hasClusterServer(FixedLabelCluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(3))?.getAllClusterServers().length).toBe(7);
            expect(endpoints.get(EndpointNumber(3))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(3))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(3))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(3))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(
                endpoints.get(EndpointNumber(3))?.hasClusterServer(BridgedDeviceBasicInformationCluster),
            ).toBeTruthy();
            expect(endpoints.get(EndpointNumber(3))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(3))?.hasClusterServer(BindingCluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(38))?.getAllClusterServers().length).toBe(7);
            expect(endpoints.get(EndpointNumber(38))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(38))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(38))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(38))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(
                endpoints.get(EndpointNumber(38))?.hasClusterServer(BridgedDeviceBasicInformationCluster),
            ).toBeTruthy();
            expect(endpoints.get(EndpointNumber(38))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(38))?.hasClusterServer(BindingCluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(39))?.getAllClusterServers().length).toBe(2);
            expect(endpoints.get(EndpointNumber(39))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(39))?.hasClusterServer(FixedLabelCluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(40))?.getAllClusterServers().length).toBe(7);
            expect(endpoints.get(EndpointNumber(40))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(40))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(40))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(40))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(
                endpoints.get(EndpointNumber(40))?.hasClusterServer(BridgedDeviceBasicInformationCluster),
            ).toBeTruthy();
            expect(endpoints.get(EndpointNumber(40))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(40))?.hasClusterServer(BindingCluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(18))?.getAllClusterServers().length).toBe(7);
            expect(endpoints.get(EndpointNumber(18))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(18))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(18))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(18))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(
                endpoints.get(EndpointNumber(18))?.hasClusterServer(BridgedDeviceBasicInformationCluster),
            ).toBeTruthy();
            expect(endpoints.get(EndpointNumber(18))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(18))?.hasClusterServer(BindingCluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(41))?.getAllClusterServers().length).toBe(2);
            expect(endpoints.get(EndpointNumber(41))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(
                endpoints.get(EndpointNumber(41))?.hasClusterServer(BridgedDeviceBasicInformationCluster),
            ).toBeTruthy();

            expect(endpoints.get(EndpointNumber(42))?.getAllClusterServers().length).toBe(6);
            expect(endpoints.get(EndpointNumber(42))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(42))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(42))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(42))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(42))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(42))?.hasClusterServer(BindingCluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(43))?.getAllClusterServers().length).toBe(6);
            expect(endpoints.get(EndpointNumber(43))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(43))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(43))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(43))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(43))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(43))?.hasClusterServer(BindingCluster)).toBeTruthy();

            const aggregator1PartsListAttribute = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(37),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.partsList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(aggregator1PartsListAttribute?.getLocal()).toEqual([EndpointNumber(3), EndpointNumber(38)]);

            const aggregator2PartsListAttribute = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(39),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.partsList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(aggregator2PartsListAttribute?.getLocal()).toEqual([
                EndpointNumber(40),
                EndpointNumber(18),
                EndpointNumber(41),
                EndpointNumber(42),
                EndpointNumber(43),
            ]);

            const aggregator2PartsListAttribute2 = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(41),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.partsList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(aggregator2PartsListAttribute2?.getLocal()).toEqual([EndpointNumber(42), EndpointNumber(43)]);

            const rootPartsListAttribute = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(0),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.partsList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(rootPartsListAttribute?.getLocal()).toEqual([
                EndpointNumber(37),
                EndpointNumber(3),
                EndpointNumber(38),
                EndpointNumber(39),
                EndpointNumber(40),
                EndpointNumber(18),
                EndpointNumber(41),
                EndpointNumber(42),
                EndpointNumber(43),
            ]);

            expect(endpointStorage.get("serial_node-matter-0000-index_0-index_1")).toBe(38);
            expect(endpointStorage.get("serial_node-matter-0000-index_1-unique_COMPOSED2-custom_COMPOSED.SUB1")).toBe(
                42,
            );
            expect(endpointStorage.get("serial_node-matter-0000-index_1-unique_COMPOSED2-index_1")).toBe(43);

            expect(attributePaths.length).toBe(502);
            expect(commandPaths.length).toBe(138);
            expect(eventPaths.length).toBe(11);
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
                deviceType: DeviceTypeId(0x16),
                passcode: 123,
                discriminator: 1234,
                basicInformation: {
                    dataModelRevision: 1,
                    vendorName: "vendor",
                    vendorId: VendorId(1),
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
                        subscriptionsPerFabric: 3,
                    },
                    serialNumber: `node-matter-0000`,
                },
                certificates: {
                    devicePrivateKey: ByteArray.fromHex("00"),
                    deviceCertificate: ByteArray.fromHex("00"),
                    deviceIntermediateCertificate: ByteArray.fromHex("00"),
                    certificationDeclaration: ByteArray.fromHex("00"),
                },
            });
            node.setStorage(testStorageContext);
            addRequiredRootClusters(node);

            const aggregator1 = new Aggregator([], { endpointId: EndpointNumber(37) });
            aggregator1.addClusterServer(
                ClusterServer(
                    FixedLabelCluster,
                    {
                        labelList: [{ label: "bridge", value: "Type A" }],
                    },
                    {},
                ),
            );

            const onoffLightDevice11 = new OnOffLightDevice(undefined, { uniqueStorageKey: "3333" });
            const onoffLightDevice12 = new OnOffLightDevice();

            aggregator1.addBridgedDevice(onoffLightDevice11, {
                nodeLabel: "Socket 1-1",
                reachable: true,
            });
            aggregator1.addBridgedDevice(onoffLightDevice12, {
                nodeLabel: "Socket 1-2",
                reachable: true,
            });
            node.addDevice(aggregator1);

            const aggregator2 = new Aggregator();
            aggregator2.addClusterServer(
                ClusterServer(
                    FixedLabelCluster,
                    {
                        labelList: [{ label: "bridge", value: "Type B" }],
                    },
                    {},
                ),
            );

            const onoffLightDevice21 = new OnOffLightDevice();
            const onoffLightDevice22 = new OnOffLightDevice(undefined, { endpointId: EndpointNumber(18) });

            aggregator2.addBridgedDevice(onoffLightDevice21, {
                nodeLabel: "Socket 2-1",
                serialNumber: "12345678",
                reachable: true,
            });
            aggregator2.addBridgedDevice(onoffLightDevice22, {
                nodeLabel: "Socket 2-2",
                reachable: true,
            });

            const composedDevice = new ComposedDevice(DeviceTypes.ON_OFF_LIGHT, [
                new OnOffLightDevice(undefined, { uniqueStorageKey: "COMPOSED.SUB1" }),
                new OnOffPluginUnitDevice(),
            ]);
            aggregator2.addBridgedDevice(composedDevice, {
                nodeLabel: "Composed 2-3",
                uniqueId: "COMPOSED2",
                reachable: true,
            });

            node.addDevice(aggregator2);

            node.assignEndpointIds();
            expect(node.getNextEndpointId(false)).toBe(44);

            const rootEndpoint = node.getRootEndpoint();
            rootEndpoint.updatePartsList();
            const endpointStructure = new InteractionEndpointStructure();
            endpointStructure.initializeFromEndpoint(rootEndpoint);
            const { endpoints, attributes, attributePaths, commandPaths, eventPaths } = endpointStructure;

            expect(endpoints.size).toBe(10);
            expect(endpoints.get(EndpointNumber(0))?.getAllClusterServers().length).toBe(9);
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(BasicInformationCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(OperationalCredentialsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GeneralCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(NetworkCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(AccessControlCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(AdministratorCommissioning.Cluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GroupKeyManagementCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(0))?.hasClusterServer(GeneralCommissioning.Cluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(37))?.getAllClusterServers().length).toBe(2);
            expect(endpoints.get(EndpointNumber(37))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(37))?.hasClusterServer(FixedLabelCluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(3))?.getAllClusterServers().length).toBe(7);
            expect(endpoints.get(EndpointNumber(3))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(3))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(3))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(3))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(
                endpoints.get(EndpointNumber(3))?.hasClusterServer(BridgedDeviceBasicInformationCluster),
            ).toBeTruthy();
            expect(endpoints.get(EndpointNumber(3))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(3))?.hasClusterServer(BindingCluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(38))?.getAllClusterServers().length).toBe(7);
            expect(endpoints.get(EndpointNumber(38))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(38))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(38))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(38))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(
                endpoints.get(EndpointNumber(38))?.hasClusterServer(BridgedDeviceBasicInformationCluster),
            ).toBeTruthy();
            expect(endpoints.get(EndpointNumber(38))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(38))?.hasClusterServer(BindingCluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(39))?.getAllClusterServers().length).toBe(2);
            expect(endpoints.get(EndpointNumber(39))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(39))?.hasClusterServer(FixedLabelCluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(40))?.getAllClusterServers().length).toBe(7);
            expect(endpoints.get(EndpointNumber(40))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(40))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(40))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(40))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(
                endpoints.get(EndpointNumber(40))?.hasClusterServer(BridgedDeviceBasicInformationCluster),
            ).toBeTruthy();
            expect(endpoints.get(EndpointNumber(40))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(40))?.hasClusterServer(BindingCluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(18))?.getAllClusterServers().length).toBe(7);
            expect(endpoints.get(EndpointNumber(18))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(18))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(18))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(18))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(
                endpoints.get(EndpointNumber(18))?.hasClusterServer(BridgedDeviceBasicInformationCluster),
            ).toBeTruthy();
            expect(endpoints.get(EndpointNumber(18))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(18))?.hasClusterServer(BindingCluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(41))?.getAllClusterServers().length).toBe(2);
            expect(endpoints.get(EndpointNumber(41))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(
                endpoints.get(EndpointNumber(41))?.hasClusterServer(BridgedDeviceBasicInformationCluster),
            ).toBeTruthy();

            expect(endpoints.get(EndpointNumber(42))?.getAllClusterServers().length).toBe(6);
            expect(endpoints.get(EndpointNumber(42))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(42))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(42))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(42))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(42))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(42))?.hasClusterServer(BindingCluster)).toBeTruthy();

            expect(endpoints.get(EndpointNumber(43))?.getAllClusterServers().length).toBe(6);
            expect(endpoints.get(EndpointNumber(43))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(43))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(43))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(43))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(43))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(endpoints.get(EndpointNumber(43))?.hasClusterServer(BindingCluster)).toBeTruthy();

            const aggregator1PartsListAttribute = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(37),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.partsList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(aggregator1PartsListAttribute?.getLocal()).toEqual([EndpointNumber(3), EndpointNumber(38)]);

            const aggregator2PartsListAttribute = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(39),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.partsList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(aggregator2PartsListAttribute?.getLocal()).toEqual([
                EndpointNumber(40),
                EndpointNumber(18),
                EndpointNumber(41),
                EndpointNumber(42),
                EndpointNumber(43),
            ]);

            const aggregator2PartsListAttribute2 = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(41),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.partsList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(aggregator2PartsListAttribute2?.getLocal()).toEqual([EndpointNumber(42), EndpointNumber(43)]);

            const rootPartsListAttribute = attributes.get(
                attributePathToId({
                    endpointId: EndpointNumber(0),
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.partsList.id,
                }),
            ) as AttributeServer<EndpointNumber[]>;
            expect(rootPartsListAttribute?.getLocal()).toEqual([
                EndpointNumber(37),
                EndpointNumber(3),
                EndpointNumber(38),
                EndpointNumber(39),
                EndpointNumber(40),
                EndpointNumber(18),
                EndpointNumber(41),
                EndpointNumber(42),
                EndpointNumber(43),
            ]);

            expect(endpointStorage.get("serial_node-matter-0000-index_0-index_1")).toBe(38);
            expect(endpointStorage.get("serial_node-matter-0000-index_1-unique_COMPOSED2-custom_COMPOSED.SUB1")).toBe(
                42,
            );
            expect(endpointStorage.get("serial_node-matter-0000-index_1-unique_COMPOSED2-index_1")).toBe(43);

            expect(attributePaths.length).toBe(502);
            expect(commandPaths.length).toBe(138);
            expect(eventPaths.length).toBe(11);

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
                reachable: true,
            });
            expect(structureChangeCounter).toBe(1);
            expect(endpointStorage.get("serial_node-matter-0000-index_0-index_2")).toBe(44);

            // And remove one
            aggregator1.removeBridgedDevice(onoffLightDevice11);

            expect(node.getNextEndpointId(false)).toBe(45);
            expect(structureChangeCounter).toBe(2);

            const endpointStructure2 = new InteractionEndpointStructure();
            endpointStructure2.initializeFromEndpoint(rootEndpoint);
            const { endpoints: endpoints2 } = endpointStructure2;

            expect(endpoints2.size).toBe(10);
            expect(endpoints2.has(EndpointNumber(3))).toBe(false);

            expect(endpoints2.get(EndpointNumber(44))?.getAllClusterServers().length).toBe(7);
            expect(endpoints2.get(EndpointNumber(44))?.hasClusterServer(DescriptorCluster)).toBeTruthy();
            expect(endpoints2.get(EndpointNumber(44))?.hasClusterServer(IdentifyCluster)).toBeTruthy();
            expect(endpoints2.get(EndpointNumber(44))?.hasClusterServer(GroupsCluster)).toBeTruthy();
            expect(endpoints2.get(EndpointNumber(44))?.hasClusterServer(ScenesCluster)).toBeTruthy();
            expect(endpoints2.get(EndpointNumber(44))?.hasClusterServer(OnOffCluster)).toBeTruthy();
            expect(endpoints2.get(EndpointNumber(44))?.hasClusterServer(BindingCluster)).toBeTruthy();
            expect(
                endpoints2.get(EndpointNumber(44))?.hasClusterServer(BridgedDeviceBasicInformationCluster),
            ).toBeTruthy();

            // Add the removed back and verify it gets same endpointID as before
            const onoffLightDevice11New = new OnOffLightDevice(undefined, { uniqueStorageKey: "3333" });
            aggregator1.addBridgedDevice(onoffLightDevice11New, {
                nodeLabel: "Socket 1-1 NEW",
                reachable: true,
            });

            expect(node.getNextEndpointId(false)).toBe(45);
            expect(structureChangeCounter).toBe(3);

            const endpointStructure3 = new InteractionEndpointStructure();
            endpointStructure3.initializeFromEndpoint(rootEndpoint);
            const { endpoints: endpoints3 } = endpointStructure3;

            expect(endpoints3.size).toBe(11);
            expect(endpoints3.get(EndpointNumber(3))?.getAllClusterServers().length).toBe(7);
        });
    });
});
