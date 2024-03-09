/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as assert from "assert";

import { CommissioningController, CommissioningServer, MatterServer } from "@project-chip/matter.js";
import {
    AccessControl,
    AdministratorCommissioning,
    BasicInformation,
    ClusterServer,
    Descriptor,
    GeneralCommissioning,
    GeneralDiagnostics,
    Groups,
    Identify,
    NetworkCommissioning,
    OnOffCluster,
    OperationalCredentials,
} from "@project-chip/matter.js/cluster";
import {
    CaseAuthenticatedTag,
    ClusterId,
    DeviceTypeId,
    EndpointNumber,
    FabricId,
    FabricIndex,
    GroupId,
    NodeId,
    VendorId,
} from "@project-chip/matter.js/datatype";
import { NodeStateInformation, OnOffLightDevice } from "@project-chip/matter.js/device";
import { Fabric, FabricBuilder, FabricJsonObject } from "@project-chip/matter.js/fabric";
import {
    DecodedEventData,
    INTERACTION_MODEL_REVISION,
    InteractionClientMessenger,
} from "@project-chip/matter.js/interaction";
import { MdnsBroadcaster, MdnsScanner } from "@project-chip/matter.js/mdns";
import { Network, NetworkFake } from "@project-chip/matter.js/net";
import { ManualPairingCodeCodec } from "@project-chip/matter.js/schema";
import { StorageBackendMemory, StorageManager } from "@project-chip/matter.js/storage";
import { Time } from "@project-chip/matter.js/time";
import { ByteArray, createPromise, singleton } from "@project-chip/matter.js/util";
import { TimeNode } from "../src/time/TimeNode.js";

const SERVER_IPv6 = "fdce:7c65:b2dd:7d46:923f:8a53:eb6c:cafe";
//const SERVER_IPv4 = "192.168.200.1";
const SERVER_MAC = "00:B0:D0:63:C2:26";
const CLIENT_IPv6 = "fdce:7c65:b2dd:7d46:923f:8a53:eb6c:beef";
//const CLIENT_IPv4 = "192.168.200.2";
const CLIENT_MAC = "CA:FE:00:00:BE:EF";

const serverNetwork = new NetworkFake(SERVER_MAC, [SERVER_IPv6]);
const clientNetwork = new NetworkFake(CLIENT_MAC, [CLIENT_IPv6]);

const deviceName = "Matter end-to-end device";
const deviceType = DeviceTypeId(257); /* Dimmable bulb */
const vendorName = "matter-node.js";
const vendorId = VendorId(0xfff1);
const productName = "Matter end-to-end device";
const productId = 0x8001;
const longDiscriminator = 3840;
const setupPin = 20202021;
const setupPin2 = 20202022;
const matterPort = 5540;
const matterPort2 = 5541;

const TIME_START = 1666663000000;

const fakeControllerStorage = new StorageBackendMemory();
const fakeServerStorage = new StorageBackendMemory();

// NOTE - this suite is designed to run sequentially start-to-finish; you can't
// run individual steps

describe("Integration Test", () => {
    let matterServer: MatterServer;
    let matterClient: MatterServer;
    let commissioningController: CommissioningController;
    let commissioningController2: CommissioningController;
    let commissioningServer: CommissioningServer;
    let commissioningServer2: CommissioningServer;
    let onOffLightDeviceServer: OnOffLightDevice;
    let serverMdnsScanner: MdnsScanner;
    let clientMdnsScanner: MdnsScanner;
    let mdnsBroadcaster: MdnsBroadcaster;
    const commissioningChangedCallsServer = new Array<{ fabricIndex: FabricIndex; time: number }>();
    const commissioningChangedCallsServer2 = new Array<{ fabricIndex: FabricIndex; time: number }>();
    const sessionChangedCallsServer = new Array<{ fabricIndex: FabricIndex; time: number }>();
    const sessionChangedCallsServer2 = new Array<{ fabricIndex: FabricIndex; time: number }>();
    const nodeStateChangesController1Node1 = new Array<{
        nodeId: NodeId;
        nodeState: NodeStateInformation;
        time: number;
    }>();
    const nodeStateChangesController1Node2 = new Array<{
        nodeId: NodeId;
        nodeState: NodeStateInformation;
        time: number;
    }>();
    const nodeStateChangesController2Node1 = new Array<{
        nodeId: NodeId;
        nodeState: NodeStateInformation;
        time: number;
    }>();

    before(async () => {
        MockTime.reset(TIME_START);

        Network.get = () => clientNetwork;

        const matterServerStorageManager = new StorageManager(fakeControllerStorage);
        await matterServerStorageManager.initialize();

        matterClient = new MatterServer(matterServerStorageManager, { disableIpv4: true });
        commissioningController = new CommissioningController({
            listeningAddressIpv6: CLIENT_IPv6,
            autoConnect: false,
            autoSubscribe: false,
            caseAuthenticatedTags: [CaseAuthenticatedTag(0x12345678), CaseAuthenticatedTag(0x56781234)],
        });
        await matterClient.addCommissioningController(commissioningController);

        Network.get = () => serverNetwork;

        const serverStorageManager = new StorageManager(fakeServerStorage);
        await serverStorageManager.initialize();

        matterServer = new MatterServer(serverStorageManager, { disableIpv4: true });

        commissioningServer = new CommissioningServer({
            listeningAddressIpv6: SERVER_IPv6,
            deviceName,
            deviceType,
            passcode: setupPin,
            discriminator: longDiscriminator,
            basicInformation: {
                vendorName,
                vendorId,
                productName,
                productId,
                partNumber: "123456",
                nodeLabel: "",
                location: "US",
                reachable: true,
            },
            delayedAnnouncement: true, // delay because we need to override Mdns classes
            commissioningChangedCallback: (fabricIndex: FabricIndex) =>
                commissioningChangedCallsServer.push({ fabricIndex, time: MockTime.nowMs() }),
            activeSessionsChangedCallback: (fabricIndex: FabricIndex) =>
                sessionChangedCallsServer.push({ fabricIndex, time: MockTime.nowMs() }),
        });
        assert.equal(commissioningServer.getPort(), undefined);

        onOffLightDeviceServer = new OnOffLightDevice();
        commissioningServer.addDevice(onOffLightDeviceServer);

        const netCluster = NetworkCommissioning.Cluster.with(NetworkCommissioning.Feature.WiFiNetworkInterface);
        // Override NetworkCommissioning Cluster for now unless configurable
        commissioningServer.addRootClusterServer(
            ClusterServer(
                netCluster,
                {
                    maxNetworks: 1,
                    interfaceEnabled: true,
                    lastConnectErrorValue: 0,
                    lastNetworkId: ByteArray.fromHex(
                        "0000000000000000000000000000000000000000000000000000000000000000",
                    ),
                    lastNetworkingStatus: NetworkCommissioning.NetworkCommissioningStatus.Success,
                    networks: [
                        {
                            networkId: ByteArray.fromHex(
                                "0000000000000000000000000000000000000000000000000000000000000000",
                            ),
                            connected: true,
                        },
                    ],
                    scanMaxTimeSeconds: 30,
                    connectMaxTimeSeconds: 60,
                },
                {
                    scanNetworks: async function () {
                        throw new Error("Not implemented");
                    },

                    removeNetwork: async function () {
                        throw new Error("Not implemented");
                    },

                    connectNetwork: async function () {
                        throw new Error("Not implemented");
                    },

                    reorderNetwork: async function () {
                        throw new Error("Not implemented");
                    },

                    addOrUpdateWiFiNetwork: async function () {
                        throw new Error("Not implemented");
                    },
                },
            ),
        );

        await matterServer.addCommissioningServer(commissioningServer);
        assert.equal(commissioningServer.getPort(), matterPort);

        // override the mdns scanner to avoid the client to try to resolve the server's address
        serverMdnsScanner = await MdnsScanner.create(Network.get(), { enableIpv4: false, netInterface: SERVER_IPv6 });
        commissioningServer.setMdnsScanner(serverMdnsScanner);
        mdnsBroadcaster = await MdnsBroadcaster.create(Network.get(), {
            enableIpv4: false,
            multicastInterface: SERVER_IPv6,
        });
        commissioningServer.setMdnsBroadcaster(mdnsBroadcaster);
        await commissioningServer.advertise();

        assert.ok(onOffLightDeviceServer.getClusterServer(OnOffCluster));
    });

    afterEach(async () => {
        await MockTime.yield3();
        await MockTime.yield3();
        await MockTime.yield3();
        await MockTime.yield3();
    });

    describe("Check Server API", () => {
        it("Access cluster servers via api", async () => {
            const basicInfoCluster = commissioningServer.getRootClusterServer(BasicInformation.Cluster);
            assert.ok(basicInfoCluster);

            // check API access for a Mandatory field with both APIs, get and set
            const v1_objApi = basicInfoCluster.attributes.softwareVersionString.getLocal();
            assert.equal(v1_objApi, "v1");

            // check API access for an existing optional field with both APIs, get and set
            assert.ok(basicInfoCluster.attributes.nodeLabel);
            const nodeLabel_objApi = basicInfoCluster.attributes.nodeLabel.getLocal();
            assert.equal(nodeLabel_objApi, "");
            basicInfoCluster.attributes.nodeLabel.setLocal("234567");
            const nodeLabel_accessorApi = basicInfoCluster.getNodeLabelAttribute();
            assert.equal(nodeLabel_accessorApi, "234567");
            basicInfoCluster.setNodeLabelAttribute("345678");
            const nodeLabel_accessorApi2 = basicInfoCluster.getNodeLabelAttribute();
            assert.equal(nodeLabel_accessorApi2, "345678");

            // check API access for an optional field with both APIs
            assert.equal(basicInfoCluster.attributes.manufacturingDate, undefined);
            const manufactoringDate_accessorApi = basicInfoCluster.getManufacturingDateAttribute?.();
            assert.equal(manufactoringDate_accessorApi, undefined);
        });
    });

    describe("commission", () => {
        it("the client commissions a new device", async () => {
            // override the mdns scanner to avoid the client to try to resolve the server's address
            clientMdnsScanner = await MdnsScanner.create(Network.get(), {
                enableIpv4: false,
                netInterface: CLIENT_IPv6,
            });
            commissioningController.setMdnsScanner(clientMdnsScanner);

            // During commissioning too much magic happens, MockTime do not work in this case
            // So use normal Time implementation and Reset for the following tests
            const mockTimeInstance = Time.get();
            Time.get = singleton(() => new TimeNode());

            assert.equal(commissioningChangedCallsServer.length, 0);
            assert.equal(sessionChangedCallsServer.length, 0);

            let commissionedCaseAuthenticatedTags: CaseAuthenticatedTag[] | undefined;
            // Catch the CASE Authenticated tags commissioned on the Fabric on the device
            MockTime.interceptOnce(FabricBuilder.prototype, "setOperationalCert", data => {
                assert.ok(data.resolve);
                commissionedCaseAuthenticatedTags = (data.resolve as Fabric).caseAuthenticatedTags;
            });

            await commissioningController.start();
            const node = await commissioningController.commissionNode({
                discovery: {
                    knownAddress: { ip: SERVER_IPv6, port: matterPort, type: "udp" },
                    identifierData: { longDiscriminator },
                },
                commissioning: {
                    regulatoryLocation: GeneralCommissioning.RegulatoryLocationType.Indoor,
                    regulatoryCountryCode: "DE",
                },
                passcode: setupPin,
                stateInformationCallback: (nodeId: NodeId, nodeState: NodeStateInformation) =>
                    nodeStateChangesController1Node1.push({ nodeId, nodeState, time: MockTime.nowMs() }),
            });

            Time.get = () => mockTimeInstance;

            Network.get = () => {
                throw new Error("Network should not be requested post starting");
            };

            assert.deepEqual(commissioningController.getCommissionedNodes(), [node.nodeId]);
            assert.equal(commissioningChangedCallsServer.length, 1);
            assert.equal(commissioningChangedCallsServer[0].fabricIndex, FabricIndex(1));
            assert.equal(sessionChangedCallsServer.length, 1);
            assert.equal(sessionChangedCallsServer[0].fabricIndex, FabricIndex(1));
            const sessionInfo = commissioningServer.getActiveSessionInformation();
            assert.equal(sessionInfo.length, 1);
            assert.ok(sessionInfo[0].fabric);
            assert.equal(sessionInfo[0].fabric.fabricIndex, FabricIndex(1));
            assert.equal(sessionInfo[0].nodeId, node.nodeId);

            assert.equal(nodeStateChangesController1Node1.length, 1);
            assert.equal(nodeStateChangesController1Node1[0].nodeId, node.nodeId);
            assert.equal(nodeStateChangesController1Node1[0].nodeState, NodeStateInformation.Connected);

            assert.deepEqual(commissionedCaseAuthenticatedTags, [
                CaseAuthenticatedTag(0x12345678),
                CaseAuthenticatedTag(0x56781234),
            ]);
        });

        it("We can connect to the new commissioned device", async () => {
            const nodeId = commissioningController.getCommissionedNodes()[0];

            await commissioningController.connectNode(nodeId);

            assert.equal(commissioningChangedCallsServer.length, 1);
            assert.equal(sessionChangedCallsServer.length, 1);
            assert.equal(sessionChangedCallsServer[0].fabricIndex, FabricIndex(1));
            const sessionInfo = commissioningServer.getActiveSessionInformation();
            assert.equal(sessionInfo.length, 1);
            assert.ok(sessionInfo[0].fabric);
            assert.equal(sessionInfo[0].fabric.fabricIndex, FabricIndex(1));
            assert.equal(sessionInfo[0].numberOfActiveSubscriptions, 0);

            assert.deepEqual(nodeStateChangesController1Node1.length, 1); // no new entry, stay connected
        });

        it("Subscribe to all Attributes and bind updates to them", async () => {
            const nodeId = commissioningController.getCommissionedNodes()[0];
            const node = commissioningController.getConnectedNode(nodeId);
            assert.ok(node);
            const data = await node.subscribeAllAttributesAndEvents({ ignoreInitialTriggers: true });

            assert.equal(Array.isArray(data.attributeReports), true);
            assert.equal(Array.isArray(data.eventReports), true);

            assert.equal(commissioningChangedCallsServer.length, 1);
            assert.equal(sessionChangedCallsServer.length, 2);
            assert.equal(sessionChangedCallsServer[1].fabricIndex, FabricIndex(1));
            const sessionInfo = commissioningServer.getActiveSessionInformation();
            assert.equal(sessionInfo.length, 1);
            assert.ok(sessionInfo[0].fabric);
            assert.equal(sessionInfo[0].fabric.fabricIndex, FabricIndex(1));
            assert.equal(sessionInfo[0].numberOfActiveSubscriptions, 1);
        });

        it("Verify that commissioning changed the Regulatory Config/Location values", async () => {
            const nodeId = commissioningController.getCommissionedNodes()[0];
            const node = commissioningController.getConnectedNode(nodeId);
            assert.ok(node);
            const generalCommissioningCluster = node.getRootClusterClient(GeneralCommissioning.Cluster);
            assert.equal(
                await generalCommissioningCluster?.getRegulatoryConfigAttribute(),
                GeneralCommissioning.RegulatoryLocationType.Indoor,
            );

            const basicInfoCluster = node.getRootClusterClient(BasicInformation.Cluster);
            assert.equal(await basicInfoCluster?.getLocationAttribute(), "DE");
        });
    });

    describe("Check Timed transactions", () => {
        describe("Timed Invokes", () => {
            it("Timed interaction expired", async () => {
                const nodeId = commissioningController.getCommissionedNodes()[0];
                const node = commissioningController.getConnectedNode(nodeId);
                assert.ok(node);
                const adminCommissioningCluster = node.getRootClusterClient(AdministratorCommissioning.Cluster);
                assert.ok(adminCommissioningCluster);
                MockTime.interceptOnce(InteractionClientMessenger.prototype, "sendTimedRequest", async () =>
                    MockTime.advance(10),
                );
                const promise = adminCommissioningCluster.openCommissioningWindow(
                    {
                        salt: new ByteArray(32),
                        commissioningTimeout: 10,
                        discriminator: 0,
                        iterations: 1000,
                        pakePasscodeVerifier: new ByteArray(97),
                    },
                    { timedRequestTimeoutMs: 1 },
                );
                await assert.rejects(async () => await promise, {
                    message: "(148) Received error status: 148", // Timeout expired
                });
            });

            it("Custom timed interaction with short timeout expired", async () => {
                const nodeId = commissioningController.getCommissionedNodes()[0];
                const node = commissioningController.getConnectedNode(nodeId);
                assert.ok(node);
                const onoffEndpoint = node.getDevices().find(endpoint => endpoint.number === 1);
                assert.ok(onoffEndpoint);
                const onoffCluster = onoffEndpoint.getClusterClient(OnOffCluster);
                assert.ok(onoffCluster);

                MockTime.interceptOnce(InteractionClientMessenger.prototype, "sendTimedRequest", async () =>
                    MockTime.advance(10),
                );
                const promise = onoffCluster.toggle(undefined, { timedRequestTimeoutMs: 1 });
                await assert.rejects(async () => await promise, {
                    message: "(148) Received error status: 148", // Timeout expired
                });
            });

            it("Custom timed interaction with default timeout works", async () => {
                const nodeId = commissioningController.getCommissionedNodes()[0];
                const node = commissioningController.getConnectedNode(nodeId);
                assert.ok(node);
                const onoffEndpoint = node.getDevices().find(endpoint => endpoint.number === 1);
                assert.ok(onoffEndpoint);
                const onoffCluster = onoffEndpoint.getClusterClient(OnOffCluster);
                assert.ok(onoffCluster);

                MockTime.interceptOnce(InteractionClientMessenger.prototype, "sendTimedRequest", async () =>
                    MockTime.advance(5000),
                );
                await onoffCluster.off(undefined, { asTimedRequest: true });
            });

            it("Timed invoke ok", async () => {
                const nodeId = commissioningController.getCommissionedNodes()[0];
                const node = commissioningController.getConnectedNode(nodeId);
                assert.ok(node);
                const adminCommissioningCluster = node.getRootClusterClient(AdministratorCommissioning.Cluster);
                assert.ok(adminCommissioningCluster);
                await adminCommissioningCluster.openCommissioningWindow(
                    {
                        salt: new ByteArray(32),
                        commissioningTimeout: 180,
                        discriminator: 0,
                        iterations: 1000,
                        pakePasscodeVerifier: new ByteArray(97),
                    },
                    { timedRequestTimeoutMs: 5000 },
                );
            });
        });
    });

    describe("read attributes", () => {
        it("read one specific attribute including schema parsing", async () => {
            const nodeId = commissioningController.getCommissionedNodes()[0];
            const node = commissioningController.getConnectedNode(nodeId);
            assert.ok(node);
            const basicInfoCluster = node.getRootClusterClient(BasicInformation.Cluster);
            assert.ok(basicInfoCluster);

            // Access a Mandatory field with both APIs
            const v1_objApi = await basicInfoCluster.attributes.softwareVersionString.get();
            assert.equal(v1_objApi, "v1");
            const v1_accessorApi = await basicInfoCluster.getSoftwareVersionStringAttribute();
            assert.equal(v1_accessorApi, "v1");

            // Access an existing optional field with both APIs
            const partNumber_objApi = await basicInfoCluster.attributes.partNumber.get();
            assert.equal(partNumber_objApi, "123456");
            const partNumber_accessorApi = await basicInfoCluster.getPartNumberAttribute();
            assert.equal(partNumber_accessorApi, "123456");

            // Access an not existing optional field with both APIs
            const manufactoringDate_objApi = await basicInfoCluster.attributes.manufacturingDate.get();
            assert.equal(manufactoringDate_objApi, undefined);
            const manufactoringDate_accessorApi = await basicInfoCluster.getManufacturingDateAttribute();
            assert.equal(manufactoringDate_accessorApi, undefined);
        });

        it("read one specific attribute including schema parsing", async () => {
            const nodeId = commissioningController.getCommissionedNodes()[0];
            const node = commissioningController.getConnectedNode(nodeId);
            assert.ok(node);
            const onoffEndpoint = node.getDevices().find(endpoint => endpoint.number === 1);
            assert.ok(onoffEndpoint);
            const onoffCluster = onoffEndpoint.getClusterClient(OnOffCluster);
            assert.ok(onoffCluster);

            assert.equal(await onoffCluster.attributes.onOff.get(), false);
        });

        it("read all attributes and events", async () => {
            const nodeId = commissioningController.getCommissionedNodes()[0];
            const node = commissioningController.getConnectedNode(nodeId);
            assert.ok(node);
            const response = await (await node.getInteractionClient()).getAllAttributesAndEvents();
            assert.ok(response);
            assert.ok(response.attributeReports.length);
            assert.ok(response.eventReports.length);
        });

        it("read multiple attributes", async () => {
            const nodeId = commissioningController.getCommissionedNodes()[0];
            const node = commissioningController.getConnectedNode(nodeId);
            assert.ok(node);

            const response = await (
                await node.getInteractionClient()
            ).getMultipleAttributes({
                attributes: [
                    { clusterId: Descriptor.Cluster.id }, // * /DescriptorCluster/ *
                    { endpointId: EndpointNumber(0), clusterId: BasicInformation.Cluster.id }, // 0/BasicInformationCluster/ *
                    {
                        endpointId: EndpointNumber(1),
                        clusterId: OnOffCluster.id,
                        attributeId: OnOffCluster.attributes.onOff.id,
                    }, // 1/OnOffCluster/onOff
                    { endpointId: EndpointNumber(2) }, // 2 / * /* - will be discarded in results!
                ],
            });

            assert.equal(response.length, 43);
            assert.equal(
                response.filter(
                    ({ path: { endpointId, clusterId } }) => endpointId === 0 && clusterId === Descriptor.Cluster.id,
                ).length,
                10,
            );
            assert.equal(
                response.filter(
                    ({ path: { endpointId, clusterId } }) => endpointId === 1 && clusterId === Descriptor.Cluster.id,
                ).length,
                10,
            );

            const descriptorServerListData = response.find(
                ({ path: { endpointId, clusterId, attributeId } }) =>
                    endpointId === 0 &&
                    clusterId === Descriptor.Cluster.id &&
                    attributeId === Descriptor.Cluster.attributes.serverList.id,
            );
            assert.deepEqual(descriptorServerListData?.path, {
                nodeId: undefined,
                endpointId: 0,
                clusterId: Descriptor.Cluster.id,
                attributeId: Descriptor.Cluster.attributes.serverList.id,
                attributeName: "serverList",
            });
            assert.deepEqual(descriptorServerListData?.value, [
                ClusterId(29),
                ClusterId(31),
                ClusterId(40),
                ClusterId(48),
                ClusterId(49),
                ClusterId(51),
                ClusterId(60),
                ClusterId(62),
                ClusterId(63),
            ]);
            assert.equal(
                response.filter(
                    ({ path: { endpointId, clusterId } }) =>
                        endpointId === 0 && clusterId === BasicInformation.Cluster.id,
                ).length,
                22,
            );
            const softwareVersionStringData = response.find(
                ({ path: { endpointId, clusterId, attributeId } }) =>
                    endpointId === 0 &&
                    clusterId === BasicInformation.Cluster.id &&
                    attributeId === BasicInformation.Cluster.attributes.softwareVersionString.id,
            );
            assert.deepEqual(softwareVersionStringData?.path, {
                nodeId: undefined,
                endpointId: 0,
                clusterId: BasicInformation.Cluster.id,
                attributeId: BasicInformation.Cluster.attributes.softwareVersionString.id,
                attributeName: "softwareVersionString",
            });
            assert.deepEqual(softwareVersionStringData?.value, "v1");
            const nodeLabelData = response.find(
                ({ path: { endpointId, clusterId, attributeId } }) =>
                    endpointId === 0 &&
                    clusterId === BasicInformation.Cluster.id &&
                    attributeId === BasicInformation.Cluster.attributes.nodeLabel.id,
            );
            assert.deepEqual(nodeLabelData?.path, {
                nodeId: undefined,
                endpointId: 0,
                clusterId: BasicInformation.Cluster.id,
                attributeId: BasicInformation.Cluster.attributes.nodeLabel.id,
                attributeName: "nodeLabel",
            });
            assert.deepEqual(nodeLabelData?.value, "345678");

            const onOffData = response.find(
                ({ path: { endpointId, clusterId, attributeId } }) =>
                    endpointId === 1 &&
                    clusterId === OnOffCluster.id &&
                    attributeId === OnOffCluster.attributes.onOff.id,
            );
            assert.deepEqual(onOffData?.path, {
                nodeId: undefined,
                endpointId: 1,
                clusterId: OnOffCluster.id,
                attributeId: OnOffCluster.attributes.onOff.id,
                attributeName: "onOff",
            });
            assert.deepEqual(onOffData?.value, false);
        });

        it("read events", async () => {
            const nodeId = commissioningController.getCommissionedNodes()[0];
            const node = commissioningController.getConnectedNode(nodeId);
            assert.ok(node);
            const response = await (
                await node.getInteractionClient()
            ).getMultipleEvents({
                events: [
                    { clusterId: BasicInformation.Cluster.id }, // * /BasicInformationCluster/ *
                    {
                        endpointId: EndpointNumber(0),
                        clusterId: GeneralDiagnostics.Cluster.id,
                        eventId: GeneralDiagnostics.Cluster.events.bootReason.id,
                    }, // 0/GeneralDiagnosticsCluster/bootReason
                    { endpointId: EndpointNumber(2) }, // 2 / * /* - will be discarded in results!
                    {
                        endpointId: EndpointNumber(100),
                        clusterId: GeneralDiagnostics.Cluster.id,
                        eventId: GeneralDiagnostics.Cluster.events.bootReason.id,
                    }, // invalid endpoint
                ],
            });

            assert.equal(response.length, 2); // Error one is not returned currently
            assert.equal(
                response.filter(
                    ({ path: { endpointId, clusterId } }) =>
                        endpointId === 0 && clusterId === BasicInformation.Cluster.id,
                ).length,
                1,
            );

            const startUpEventData = response.find(
                ({ path: { endpointId, clusterId, eventId } }) =>
                    endpointId === 0 &&
                    clusterId === BasicInformation.Cluster.id &&
                    eventId === BasicInformation.Cluster.events.startUp.id,
            );

            assert.deepEqual(startUpEventData?.events, [
                {
                    eventNumber: 1,
                    epochTimestamp: TIME_START,
                    priority: BasicInformation.Cluster.events.startUp.priority,
                    data: {
                        softwareVersion: 1,
                    },
                    path: undefined,
                },
            ]);

            const bootReasonEventData = response.find(
                ({ path: { endpointId, clusterId, eventId } }) =>
                    endpointId === 0 &&
                    clusterId === GeneralDiagnostics.Cluster.id &&
                    eventId === GeneralDiagnostics.Cluster.events.bootReason.id,
            );
            assert.deepEqual(bootReasonEventData?.events, [
                {
                    eventNumber: 2,
                    epochTimestamp: TIME_START,
                    priority: BasicInformation.Cluster.events.startUp.priority,
                    data: {
                        bootReason: GeneralDiagnostics.BootReason.Unspecified,
                    },
                    path: undefined,
                },
            ]);
        });
    });

    describe("write attributes", () => {
        it("write one attribute", async () => {
            const nodeId = commissioningController.getCommissionedNodes()[0];
            const node = commissioningController.getConnectedNode(nodeId);
            assert.ok(node);
            const basicInfoCluster = node.getRootClusterClient(BasicInformation.Cluster);
            assert.ok(basicInfoCluster);

            await basicInfoCluster.attributes.nodeLabel.set("testLabel");

            // Local value because not yet updated from subscription
            assert.equal(await basicInfoCluster.attributes.nodeLabel.get(), "345678");
            // Request remotely
            assert.equal(await basicInfoCluster.attributes.nodeLabel.get(true), "testLabel");

            // Await initial Data
            const { promise, resolver } = createPromise<string>();
            const callback = (value: string) => resolver(value);

            basicInfoCluster.attributes.nodeLabel.addListener(callback);

            await MockTime.advance(60);
            await MockTime.advance(60);
            await promise;

            // Local value because not yet updated from subscription
            assert.equal(await basicInfoCluster.attributes.nodeLabel.get(), "testLabel");
        });

        it("write one attribute with error", async () => {
            const nodeId = commissioningController.getCommissionedNodes()[0];
            const node = commissioningController.getConnectedNode(nodeId);
            assert.ok(node);
            const basicInfoCluster = node.getRootClusterClient(BasicInformation.Cluster);
            assert.ok(basicInfoCluster);

            await assert.rejects(async () => await basicInfoCluster.attributes.location.set("XXX"), {
                message: "(Validation/135) String is too long: 3, max 2.",
            });
        });

        it("write multiple attributes", async () => {
            const nodeId = commissioningController.getCommissionedNodes()[0];
            const node = commissioningController.getConnectedNode(nodeId);
            assert.ok(node);
            const client = await node.getInteractionClient(); // We can also use a new Interaction clint

            const response = await client.setMultipleAttributes({
                attributes: [
                    {
                        endpointId: EndpointNumber(0),
                        clusterId: BasicInformation.Cluster.id,
                        attribute: BasicInformation.Cluster.attributes.nodeLabel,
                        value: "testLabel2",
                    },
                    {
                        endpointId: EndpointNumber(0),
                        clusterId: BasicInformation.Cluster.id,
                        attribute: BasicInformation.Cluster.attributes.location,
                        value: "GB",
                    },
                ],
            });

            assert.equal(Array.isArray(response), true);
            assert.equal(response.length, 0);

            const basicInfoCluster = node.getRootClusterClient(BasicInformation.Cluster);
            assert.ok(basicInfoCluster);
            assert.equal(await basicInfoCluster.attributes.nodeLabel.get(true), "testLabel2");
            assert.equal(await basicInfoCluster.getLocationAttribute(true), "GB");
        });

        it("write multiple attributes with partial errors", async () => {
            const nodeId = commissioningController.getCommissionedNodes()[0];
            const node = commissioningController.getConnectedNode(nodeId);
            assert.ok(node);
            const response = await (
                await node.getInteractionClient()
            ).setMultipleAttributes({
                attributes: [
                    {
                        endpointId: EndpointNumber(0),
                        clusterId: BasicInformation.Cluster.id,
                        attribute: BasicInformation.Cluster.attributes.nodeLabel,
                        value: "testLabel3",
                    },
                    {
                        endpointId: EndpointNumber(0),
                        clusterId: BasicInformation.Cluster.id,
                        attribute: BasicInformation.Cluster.attributes.location,
                        value: "XXX",
                    },
                ],
            });

            assert.equal(response.length, 1);
            assert.equal(response[0].path.attributeId, BasicInformation.Cluster.attributes.location.id);
            assert.equal(response[0].status, 135 /* StatusCode.ConstraintError */);

            const basicInfoCluster = node.getRootClusterClient(BasicInformation.Cluster);
            assert.ok(basicInfoCluster);

            assert.equal(await basicInfoCluster.attributes.nodeLabel.get(true), "testLabel3");
            assert.equal(await basicInfoCluster.attributes.location.get(true), "GB");
        });

        it("write multiple attributes with partial errors and suppressed response", async () => {
            const nodeId = commissioningController.getCommissionedNodes()[0];
            const node = commissioningController.getConnectedNode(nodeId);
            assert.ok(node);
            const response = await (
                await node.getInteractionClient()
            ).setMultipleAttributes({
                attributes: [
                    {
                        endpointId: EndpointNumber(0),
                        clusterId: BasicInformation.Cluster.id,
                        attribute: BasicInformation.Cluster.attributes.nodeLabel,
                        value: "testLabel4",
                    },
                    {
                        endpointId: EndpointNumber(0),
                        clusterId: BasicInformation.Cluster.id,
                        attribute: BasicInformation.Cluster.attributes.location,
                        value: "XXX",
                    },
                ],
                suppressResponse: true,
            });

            assert.equal(response.length, 0);

            const basicInfoCluster = node.getRootClusterClient(BasicInformation.Cluster);
            assert.ok(basicInfoCluster);

            assert.equal(await basicInfoCluster.attributes.nodeLabel.get(true), "testLabel4");
            assert.equal(await basicInfoCluster.attributes.location.get(true), "GB");
        });
    });

    describe("Groups server fabric scoped storage", () => {
        it("add a group", async () => {
            const nodeId = commissioningController.getCommissionedNodes()[0];
            const node = commissioningController.getConnectedNode(nodeId);
            assert.ok(node);
            const onoffEndpoint = node.getDevices().find(endpoint => endpoint.number === 1);
            assert.ok(onoffEndpoint);
            const groupsCluster = onoffEndpoint.getClusterClient(Groups.Cluster);
            assert.ok(groupsCluster);
            await groupsCluster.commands.addGroup({ groupId: GroupId(1), groupName: "Group 1" });
        });
    });

    describe("subscriptions", () => {
        it("additional subscription of one attribute sends updates when the value changes", async () => {
            assert.ok(onOffLightDeviceServer);
            const startTime = Time.nowMs();

            // Await initial Data
            const { promise: firstPromise, resolver: firstResolver } = createPromise<{
                value: boolean;
                time: number;
            }>();
            let callback = (value: boolean) => firstResolver({ value, time: Time.nowMs() });

            const nodeId = commissioningController.getCommissionedNodes()[0];
            const node = commissioningController.getConnectedNode(nodeId);
            assert.ok(node);
            await (
                await node.getInteractionClient()
            ).subscribeAttribute({
                endpointId: EndpointNumber(1),
                clusterId: OnOffCluster.id,
                attribute: OnOffCluster.attributes.onOff,
                minIntervalFloorSeconds: 0,
                maxIntervalCeilingSeconds: 5,
                listener: value => callback(value),
            });

            const firstReport = await firstPromise;
            assert.deepEqual(firstReport, { value: false, time: startTime });

            // Await update Report on value change
            const { promise: updatePromise, resolver: updateResolver } = createPromise<{
                value: boolean;
                time: number;
            }>();
            callback = (value: boolean) => updateResolver({ value, time: Time.nowMs() });

            await MockTime.advance(2 * 1000);
            onOffLightDeviceServer.setOnOff(true);
            await MockTime.advance(100);
            const updateReport = await updatePromise;

            assert.deepEqual(updateReport, { value: true, time: startTime + 2 * 1000 + 100 });

            // Await update Report on value change without in between update
            const { promise: lastPromise, resolver: lastResolver } = createPromise<{
                value: boolean;
                time: number;
            }>();
            callback = (value: boolean) => lastResolver({ value, time: Time.nowMs() });

            // Verify that no update comes in after doubled max interval requested
            await MockTime.advance(10 * 1000);

            // ... but on next change immediately (means immediately + 50ms, so wait 100ms) then
            onOffLightDeviceServer.setOnOff(false);
            await MockTime.advance(100);
            const lastReport = await lastPromise;

            assert.deepEqual(lastReport, { value: false, time: startTime + (10 + 2) * 1000 + 200 });

            assert.equal(commissioningChangedCallsServer.length, 1);
            assert.equal(sessionChangedCallsServer.length, 3);
            assert.equal(sessionChangedCallsServer[2].fabricIndex, FabricIndex(1));
            const sessionInfo = commissioningServer.getActiveSessionInformation();
            assert.equal(sessionInfo.length, 1);
            assert.ok(sessionInfo[0].fabric);
            assert.equal(sessionInfo[0].numberOfActiveSubscriptions, 2);
        });

        it("another additional subscription of one attribute with known data version only sends updates when the value changes", async () => {
            const nodeId = commissioningController.getCommissionedNodes()[0];
            const node = commissioningController.getConnectedNode(nodeId);
            assert.ok(node);
            const onoffEndpoint = node.getDevices().find(endpoint => endpoint.number === 1);
            assert.ok(onoffEndpoint);
            const onOffClient = onoffEndpoint.getClusterClient(OnOffCluster);
            assert.ok(onOffClient);

            // gather the current data version
            const response = await (
                await node.getInteractionClient()
            ).getMultipleAttributes({
                attributes: [
                    {
                        endpointId: EndpointNumber(1),
                        clusterId: OnOffCluster.id,
                        attributeId: OnOffCluster.attributes.onOff.id,
                    }, // 1/OnOffCluster/onOff
                ],
            });
            expect(response.length).to.equal(1);
            const dataVersion = response[0].version;

            assert.ok(onOffLightDeviceServer);
            const startTime = Time.nowMs();

            const pushedUpdates = Array<{
                value: boolean;
                time: number;
            }>();

            const { promise: updatePromise, resolver: updateResolver } = createPromise<void>();

            await onOffClient.subscribeOnOffAttribute(
                value => {
                    pushedUpdates.push({ value, time: Time.nowMs() });
                    updateResolver();
                },
                0,
                5,
                dataVersion,
            );

            assert.deepEqual(pushedUpdates, []);

            await MockTime.advance(2 * 1000);
            onOffLightDeviceServer.setOnOff(true);
            await MockTime.advance(100);

            await updatePromise;

            assert.deepEqual(pushedUpdates, [{ value: true, time: startTime + 2 * 1000 + 100 }]);
        });

        /*
        TODO Re-enable when Scenes are updated with Matter 1.3
        it("one more subscribe an attribute with getter that needs endpoint", async () => {
            const nodeId = commissioningController.getCommissionedNodes()[0];
            const node = commissioningController.getConnectedNode(nodeId);
            assert.ok(node);
            const onoffEndpoint = node.getDevices().find(endpoint => endpoint.number === 1);
            assert.ok(onoffEndpoint);
            const scenesClient = onoffEndpoint.getClusterClient(Scenes.Cluster);
            assert.ok(scenesClient);

            const scenesServer = onOffLightDeviceServer.getClusterServer(Scenes.Cluster);
            assert.ok(scenesServer);

            const startTime = Time.nowMs();

            // Await initial Data
            const { promise: firstPromise, resolver: firstResolver } = createPromise<{
                value: number;
                time: number;
            }>();
            let callback = (value: number) => firstResolver({ value, time: Time.nowMs() });

            //onOffClient.attributes.onOff.addValueSetListener(value => callback(value));
            //await onOffClient.attributes.onOff.subscribe(0, 5);
            await scenesClient.subscribeSceneCountAttribute(value => callback(value), 0, 5);

            const firstReport = await firstPromise;
            assert.deepEqual(firstReport, { value: 0, time: startTime });

            // Await update Report on value change
            const { promise: updatePromise, resolver: updateResolver } = createPromise<{
                value: number;
                time: number;
            }>();
            callback = (value: number) => updateResolver({ value, time: Time.nowMs() });

            await MockTime.advance(2 * 1000);
            await scenesClient.addScene({
                groupId: GroupId(1),
                sceneId: 1,
                transitionTime: 0,
                sceneName: "Test",
                extensionFieldSets: [],
            });
            await MockTime.advance(100);
            const updateReport = await updatePromise;

            assert.deepEqual(updateReport, { value: 1, time: startTime + 2 * 1000 + 100 });
        });*/

        it("subscription of an event sends initial data", async () => {
            const nodeId = commissioningController.getCommissionedNodes()[0];
            const node = commissioningController.getConnectedNode(nodeId);
            assert.ok(node);
            const basicInformationClient = node.getRootClusterClient(BasicInformation.Cluster);
            assert.ok(basicInformationClient);

            const basicInformationServer = commissioningServer.getRootClusterServer(BasicInformation.Cluster);
            assert.ok(basicInformationServer);

            const startTime = Time.nowMs();

            // Await initial Data
            const { promise: firstPromise, resolver: firstResolver } = createPromise<{
                value: DecodedEventData<any>;
                time: number;
            }>();
            const callback = (value: DecodedEventData<any>) => firstResolver({ value, time: Time.nowMs() });

            await basicInformationClient.subscribeStartUpEvent(event => callback(event), 0, 5, true);

            await MockTime.yield(); // needed to finish internal processing to receive Statuscode

            const firstReport = await firstPromise;

            assert.deepEqual(firstReport, {
                value: {
                    eventNumber: 1,
                    priority: 2,
                    epochTimestamp: BigInt(TIME_START), // Triggered directly
                    data: {
                        softwareVersion: 1,
                    },
                    path: undefined,
                },
                time: startTime,
            });
        });

        it("subscription of one event sends updates when event got triggered via auto-wiring", async () => {
            const nodeId = commissioningController.getCommissionedNodes()[0];
            const node = commissioningController.getConnectedNode(nodeId);
            assert.ok(node);
            const basicInformationClient = node.getRootClusterClient(BasicInformation.Cluster);
            assert.ok(basicInformationClient);

            const startTime = Time.nowMs();

            let initialDataReceived = false;
            let callback = (_value: DecodedEventData<any>) => {
                initialDataReceived = true;
            };

            await basicInformationClient.subscribeReachableChangedEvent(event => callback(event), 0, 5, true);

            await MockTime.yield(); // needed to finish internal processing to receive Statuscode

            assert.equal(initialDataReceived, false); // we never had a reachability change event, so no data received

            // Await update Report on value change
            const { promise: updatePromise, resolver: updateResolver } = createPromise<{
                value: DecodedEventData<any>;
                time: number;
            }>();
            callback = (value: DecodedEventData<any>) => updateResolver({ value, time: Time.nowMs() });

            await MockTime.advance(200);
            commissioningServer.setReachability(false);
            await MockTime.advance(100);
            await MockTime.advance(1);

            const updateReport = await updatePromise;
            assert.deepEqual(updateReport, {
                value: {
                    eventNumber: 3,
                    priority: 1,
                    epochTimestamp: BigInt(startTime + 200), // Triggered directly
                    data: {
                        reachableNewValue: false,
                    },
                    path: undefined,
                },
                time: startTime + 200 + 101,
            });

            // Await update Report on value change
            const { promise: updatePromise2, resolver: updateResolver2 } = createPromise<{
                value: DecodedEventData<any>;
                time: number;
            }>();
            callback = (value: DecodedEventData<any>) => updateResolver2({ value, time: Time.nowMs() });

            const updateReport2 = await updatePromise2;
            assert.deepEqual(updateReport2, {
                value: {
                    eventNumber: 3,
                    priority: 1,
                    epochTimestamp: BigInt(startTime + 200), // Triggered directly
                    data: {
                        reachableNewValue: false,
                    },
                    path: undefined,
                },
                time: startTime + 200 + 101,
            });
        });

        it("Check callback info", async () => {
            assert.equal(commissioningChangedCallsServer.length, 1);
            assert.ok(sessionChangedCallsServer.length >= 6); // not 100% accurate because of MockTime and not 100% finished responses and stuff like that
            assert.equal(sessionChangedCallsServer[sessionChangedCallsServer.length - 1].fabricIndex, FabricIndex(1));
            const sessionInfo = commissioningServer.getActiveSessionInformation();
            assert.equal(sessionInfo.length, 1);
            assert.ok(sessionInfo[0].fabric);
            assert.ok(sessionInfo[0].numberOfActiveSubscriptions >= 5);
        });
    });

    describe("Access Control server fabric scoped attribute storage", () => {
        it("set empty acl", async () => {
            const nodeId = commissioningController.getCommissionedNodes()[0];
            const node = commissioningController.getConnectedNode(nodeId);
            assert.ok(node);
            const accessControlCluster = node.getRootClusterClient(AccessControl.Cluster);
            assert.ok(accessControlCluster);
            await accessControlCluster.attributes.acl.set([]);
            await accessControlCluster.setAclAttribute([]);

            const acl = await accessControlCluster.attributes.acl.get();
            const acl2 = await accessControlCluster.getAclAttribute();

            assert.ok(Array.isArray(acl));
            assert.ok(Array.isArray(acl2));
            assert.equal(acl.length, 0);
            assert.equal(acl2.length, 0);
        });
    });

    describe("Command Handler test", () => {
        it("Trigger identify command and trigger command handler", async () => {
            const nodeId = commissioningController.getCommissionedNodes()[0];
            const node = commissioningController.getConnectedNode(nodeId);
            assert.ok(node);
            const onoffEndpoint = node.getDevices().find(endpoint => endpoint.number === 1);
            assert.ok(onoffEndpoint);
            const identifyClient = onoffEndpoint.getClusterClient(Identify.Cluster);
            assert.ok(identifyClient);

            const { promise: firstPromise, resolver: firstResolver } = createPromise<number>();
            onOffLightDeviceServer.addCommandHandler("identify", async ({ request: { identifyTime } }) =>
                firstResolver(identifyTime),
            );

            await identifyClient.commands.identify({ identifyTime: 5 });

            const result = await firstPromise;
            assert.equal(result, 5);
        });
    });

    describe("initial storage check", () => {
        it("server storage has fabric fields stored correctly stringified", async () => {
            const storedFabrics = fakeServerStorage.get(["0", "FabricManager"], "fabrics");
            assert.ok(Array.isArray(storedFabrics));
            assert.equal(storedFabrics.length, 1);
            const firstFabric = storedFabrics[0] as FabricJsonObject;
            assert.equal(typeof firstFabric, "object");
            assert.equal(firstFabric.fabricIndex, 1);
            assert.equal(firstFabric.fabricId, 1);

            const groupsClusterEndpointMap = firstFabric.scopedClusterData.get(Groups.Cluster.id);
            assert.ok(groupsClusterEndpointMap);
            assert.equal(groupsClusterEndpointMap.size, 1);
            const groupsClusterData = groupsClusterEndpointMap.get("1");
            assert.ok(groupsClusterData instanceof Map);
            assert.equal(groupsClusterData.get(1), "Group 1");

            assert.equal(fakeServerStorage.get(["0", "FabricManager"], "nextFabricIndex"), 2);

            const onOffValue = fakeServerStorage.get<any>(["0", "Cluster-1-6"], "onOff");
            assert.equal(onOffValue, true);

            const storedServerResumptionRecords = fakeServerStorage.get(["0", "SessionManager"], "resumptionRecords");
            assert.ok(Array.isArray(storedServerResumptionRecords));
            assert.equal(storedServerResumptionRecords.length, 1);

            const storedControllerResumptionRecords = fakeServerStorage.get(
                ["0", "SessionManager"],
                "resumptionRecords",
            );
            assert.ok(Array.isArray(storedControllerResumptionRecords));
            assert.equal(storedControllerResumptionRecords.length, 1);
        });

        it("controller storage is as expected", async () => {
            assert.equal(fakeControllerStorage.get(["0", "RootCertificateManager"], "rootCertId"), BigInt(0));
            const nodeData = fakeControllerStorage.get<[NodeId, any][]>(["0", "MatterController"], "commissionedNodes");
            assert.ok(nodeData);
            assert.equal(nodeData.length, 1);

            // Remove variable fields before compare
            expect(nodeData[0][1].discoveryData.expires).to.be.an("number");
            delete nodeData[0][1].discoveryData.expires;
            expect(nodeData[0][1].discoveryData.deviceIdentifier).to.be.an("string");
            delete nodeData[0][1].discoveryData.deviceIdentifier;
            expect(nodeData[0][1].basicInformationData.serialNumber).to.be.an("string");
            delete nodeData[0][1].basicInformationData.serialNumber;

            assert.deepEqual(nodeData[0][1], {
                basicInformationData: {
                    capabilityMinima: {
                        caseSessionsPerFabric: 3,
                        subscriptionsPerFabric: 3,
                    },
                    dataModelRevision: 16,
                    hardwareVersion: 0,
                    hardwareVersionString: "0",
                    localConfigDisabled: false,
                    location: "DE",
                    nodeLabel: "345678",
                    partNumber: "123456",
                    productId: 32769,
                    productName: "Matter end-to-end device",
                    reachable: true,
                    softwareVersion: 1,
                    softwareVersionString: "v1",
                    vendorId: 65521,
                    vendorName: "matter-node.js",
                },
                discoveryData: {
                    ICD: 0,
                    SAI: 300,
                    SAT: 4000,
                    SII: 500,
                    T: 0,
                    addresses: [
                        {
                            ip: SERVER_IPv6,
                            port: matterPort,
                            type: "udp",
                        },
                    ],
                },
                operationalServerAddress: {
                    ip: SERVER_IPv6,
                    port: matterPort,
                    type: "udp",
                },
            });

            const storedControllerFabric = fakeControllerStorage.get<FabricJsonObject>(
                ["0", "MatterController"],
                "fabric",
            );
            assert.ok(typeof storedControllerFabric === "object");
            assert.equal(storedControllerFabric.fabricId, FabricId(1));
            assert.equal(storedControllerFabric.fabricIndex, FabricIndex(1));
        });
    });

    describe("pair a second node", () => {
        it("start second server", async () => {
            Network.get = () => serverNetwork;

            commissioningServer2 = new CommissioningServer({
                listeningAddressIpv6: SERVER_IPv6,
                deviceName: `${deviceName} 2`,
                deviceType,
                passcode: setupPin2,
                discriminator: longDiscriminator,
                basicInformation: {
                    vendorName,
                    vendorId,
                    productName,
                    productId,
                    partNumber: "123456",
                    nodeLabel: "",
                    location: "US",
                    reachable: true,
                },
                delayedAnnouncement: true, // delay because we need to override Mdns classes
                commissioningChangedCallback: (fabricIndex: FabricIndex) =>
                    commissioningChangedCallsServer2.push({ fabricIndex, time: MockTime.nowMs() }),
                activeSessionsChangedCallback: (fabricIndex: FabricIndex) =>
                    sessionChangedCallsServer2.push({ fabricIndex, time: MockTime.nowMs() }),
            });

            onOffLightDeviceServer = new OnOffLightDevice();
            commissioningServer2.addDevice(onOffLightDeviceServer);

            await matterServer.addCommissioningServer(commissioningServer2, { uniqueStorageKey: "second" });
            assert.equal(commissioningServer2.getPort(), matterPort2);

            commissioningServer2.setMdnsScanner(serverMdnsScanner);
            commissioningServer2.setMdnsBroadcaster(mdnsBroadcaster);

            await assert.doesNotReject(async () => commissioningServer2.advertise());

            assert.equal(commissioningChangedCallsServer2.length, 0);
            assert.equal(sessionChangedCallsServer2.length, 0);
        });

        it("the client commissions the second device", async () => {
            // During commissioning too much magic happens, MockTime do not work in this case
            // So use normal Time implementation and Reset for the following tests
            const mockTimeInstance = Time.get();
            Time.get = singleton(() => new TimeNode());

            const existingNodes = commissioningController.getCommissionedNodes();

            const node = await commissioningController.commissionNode({
                discovery: {
                    knownAddress: { ip: SERVER_IPv6, port: matterPort2, type: "udp" },
                    identifierData: { longDiscriminator },
                },
                commissioning: {
                    regulatoryLocation: GeneralCommissioning.RegulatoryLocationType.Indoor,
                    regulatoryCountryCode: "DE",
                },
                passcode: setupPin2,
                stateInformationCallback: (nodeId: NodeId, nodeState: NodeStateInformation) =>
                    nodeStateChangesController1Node2.push({ nodeId, nodeState, time: MockTime.nowMs() }),
            });

            Time.get = () => mockTimeInstance;

            assert.deepEqual(commissioningController.getCommissionedNodes(), [...existingNodes, node.nodeId]);

            assert.equal(commissioningChangedCallsServer2.length, 1);
            assert.equal(sessionChangedCallsServer2.length, 1);
            assert.equal(sessionChangedCallsServer2[0].fabricIndex, FabricIndex(1));
            const sessionInfo = commissioningServer2.getActiveSessionInformation();
            assert.equal(sessionInfo.length, 1);
            assert.ok(sessionInfo[0].fabric);
            assert.equal(sessionInfo[0].numberOfActiveSubscriptions, 0);

            assert.equal(nodeStateChangesController1Node2.length, 1);
            assert.equal(nodeStateChangesController1Node2[0].nodeId, node.nodeId);
            assert.equal(nodeStateChangesController1Node2[0].nodeState, NodeStateInformation.Connected);
        });

        it("We can connect to the new commissioned device", async () => {
            const nodeId = commissioningController.getCommissionedNodes()[1];

            await commissioningController.connectNode(nodeId);

            assert.equal(commissioningChangedCallsServer2.length, 1);
            assert.equal(sessionChangedCallsServer2.length, 1);
            assert.equal(sessionChangedCallsServer2[0].fabricIndex, FabricIndex(1));
            const sessionInfo = commissioningServer2.getActiveSessionInformation();
            assert.equal(sessionInfo.length, 1);
            assert.ok(sessionInfo[0].fabric);
            assert.equal(sessionInfo[0].numberOfActiveSubscriptions, 0);

            assert.equal(nodeStateChangesController1Node2[0].nodeState, NodeStateInformation.Connected);
        });

        it("Subscribe to all Attributes and bind updates to them for second device", async () => {
            const nodeId = commissioningController.getCommissionedNodes()[1];
            const node = commissioningController.getConnectedNode(nodeId);
            assert.ok(node);
            const data = await node.subscribeAllAttributesAndEvents({ ignoreInitialTriggers: true });

            assert.equal(Array.isArray(data.attributeReports), true);
            assert.equal(Array.isArray(data.eventReports), true);

            assert.equal(commissioningChangedCallsServer2.length, 1);
            assert.equal(sessionChangedCallsServer2.length, 2);
            assert.equal(sessionChangedCallsServer2[0].fabricIndex, FabricIndex(1));
            const sessionInfo = commissioningServer2.getActiveSessionInformation();
            assert.equal(sessionInfo.length, 1);
            assert.ok(sessionInfo[0].fabric);
            assert.equal(sessionInfo[0].numberOfActiveSubscriptions, 1);
        });

        it("controller storage is updated for second device", async () => {
            const nodeData = fakeControllerStorage.get<[NodeId, any][]>(["0", "MatterController"], "commissionedNodes");
            assert.ok(nodeData);
            assert.equal(nodeData.length, 2);

            assert.deepEqual(nodeData[0][1], {
                basicInformationData: {
                    capabilityMinima: {
                        caseSessionsPerFabric: 3,
                        subscriptionsPerFabric: 3,
                    },
                    dataModelRevision: 16,
                    hardwareVersion: 0,
                    hardwareVersionString: "0",
                    localConfigDisabled: false,
                    location: "DE",
                    nodeLabel: "345678",
                    partNumber: "123456",
                    productId: 32769,
                    productName: "Matter end-to-end device",
                    reachable: true,
                    softwareVersion: 1,
                    softwareVersionString: "v1",
                    vendorId: 65521,
                    vendorName: "matter-node.js",
                },
                discoveryData: {
                    ICD: 0,
                    SAI: 300,
                    SAT: 4000,
                    SII: 500,
                    T: 0,
                    addresses: [
                        {
                            ip: SERVER_IPv6,
                            port: matterPort,
                            type: "udp",
                        },
                    ],
                },
                operationalServerAddress: {
                    ip: SERVER_IPv6,
                    port: matterPort,
                    type: "udp",
                },
            });

            // Remove variable fields before compare
            expect(nodeData[1][1].discoveryData.expires).to.be.an("number");
            delete nodeData[1][1].discoveryData.expires;
            expect(nodeData[1][1].discoveryData.deviceIdentifier).to.be.an("string");
            delete nodeData[1][1].discoveryData.deviceIdentifier;
            expect(nodeData[1][1].basicInformationData.serialNumber).to.be.an("string");
            delete nodeData[1][1].basicInformationData.serialNumber;

            assert.deepEqual(nodeData[1][1], {
                basicInformationData: {
                    capabilityMinima: {
                        caseSessionsPerFabric: 3,
                        subscriptionsPerFabric: 3,
                    },
                    dataModelRevision: 16,
                    hardwareVersion: 0,
                    hardwareVersionString: "0",
                    localConfigDisabled: false,
                    location: "US",
                    nodeLabel: "",
                    partNumber: "123456",
                    productId: 32769,
                    productName: "Matter end-to-end device",
                    reachable: true,
                    softwareVersion: 1,
                    softwareVersionString: "v1",
                    vendorId: 65521,
                    vendorName: "matter-node.js",
                },
                discoveryData: {
                    ICD: 0,
                    SAI: 300,
                    SAT: 4000,
                    SII: 500,
                    T: 0,
                    addresses: [
                        {
                            ip: SERVER_IPv6,
                            port: matterPort2,
                            type: "udp",
                        },
                    ],
                },
                operationalServerAddress: {
                    ip: SERVER_IPv6,
                    port: matterPort2,
                    type: "udp",
                },
            });
        });

        it("write one attribute on second device and check if updated", async () => {
            const nodeId = commissioningController.getCommissionedNodes()[1];
            const node = commissioningController.getConnectedNode(nodeId);
            assert.ok(node);
            const basicInfoCluster = node.getRootClusterClient(BasicInformation.Cluster);
            assert.ok(basicInfoCluster);

            await basicInfoCluster.attributes.nodeLabel.set("testLabel-second");

            // Local value because not yet updated from subscription
            assert.equal(await basicInfoCluster.attributes.nodeLabel.get(), "");
            // Request remotely
            assert.equal(await basicInfoCluster.attributes.nodeLabel.get(true), "testLabel-second");

            // Await initial Data
            const { promise, resolver } = createPromise<string>();
            const callback = (value: string) => resolver(value);

            basicInfoCluster.attributes.nodeLabel.addListener(callback);

            await MockTime.advance(60);
            await MockTime.advance(60);
            await promise;

            // Local value because not yet updated from subscription
            assert.equal(await basicInfoCluster.attributes.nodeLabel.get(), "testLabel-second");

            // Verify that first device is still on old value
            const firstNodeId = commissioningController.getCommissionedNodes()[0];
            const firstNode = commissioningController.getConnectedNode(firstNodeId);
            assert.ok(firstNode);
            const firstBasicInfoCluster = firstNode.getRootClusterClient(BasicInformation.Cluster);
            assert.ok(firstBasicInfoCluster);
            // Request remotely
            assert.equal(await firstBasicInfoCluster.attributes.nodeLabel.get(true), "testLabel4");
            // Request locally
            assert.equal(await firstBasicInfoCluster.attributes.nodeLabel.get(), "testLabel4");
        });
    });

    describe("Additional commissioning tests", () => {
        let mockTimeInstance: Time;
        let shortDiscriminator: number | undefined;
        let passcode: number;

        before(() => {
            // During commissioning too much magic happens, MockTime do not work in this case
            // So use normal Time implementation and Reset for the following tests
            mockTimeInstance = Time.get();
            Time.get = singleton(() => new TimeNode());
        });

        it("try to open a basic commissioning window which is not supported", async () => {
            const nodeId = commissioningController.getCommissionedNodes()[0];
            const node = commissioningController.getConnectedNode(nodeId);
            assert.ok(node);

            await assert.rejects(async () => await node.openBasicCommissioningWindow(), {
                message: `AdministratorCommissioningCluster for node ${node.nodeId} does not support basic commissioning.`,
            });
        });

        it("open an enhanced commissioning window and store values", async () => {
            const nodeId = commissioningController.getCommissionedNodes()[0];
            const node = commissioningController.getConnectedNode(nodeId);
            assert.ok(node);

            const commissioningData = await node.openEnhancedCommissioningWindow();
            assert.ok(commissioningData);
            assert.ok(commissioningData.manualPairingCode);

            const pairingCodeCodec = ManualPairingCodeCodec.decode(commissioningData.manualPairingCode);
            assert.ok(pairingCodeCodec);
            assert.notEqual(pairingCodeCodec.shortDiscriminator, undefined);
            shortDiscriminator = pairingCodeCodec.shortDiscriminator;
            passcode = pairingCodeCodec.passcode;
            assert.notEqual(shortDiscriminator, undefined);
            assert.ok(passcode);
        });

        it("try to connect this controller to the device (again)", async () => {
            await assert.rejects(
                async () =>
                    await commissioningController.commissionNode({
                        discovery: {
                            knownAddress: { ip: SERVER_IPv6, port: matterPort, type: "udp" },
                            identifierData: { shortDiscriminator: shortDiscriminator! },
                        },
                        commissioning: {
                            regulatoryLocation: GeneralCommissioning.RegulatoryLocationType.Indoor,
                            regulatoryCountryCode: "DE",
                        },
                        passcode,
                    }),
            ); // We can not check the real exception because text is dynamic

            assert.equal(commissioningChangedCallsServer2.length, 1);
            assert.equal(commissioningChangedCallsServer.length, 1);
        });

        it("connect this device to a new controller", async () => {
            Network.get = () => clientNetwork;

            commissioningController2 = new CommissioningController({
                listeningAddressIpv6: CLIENT_IPv6,
                autoConnect: false,
                autoSubscribe: false,
                adminFabricId: FabricId(1000),
                adminFabricIndex: FabricIndex(1001),
                adminVendorId: VendorId(0x1234),
            });
            await matterClient.addCommissioningController(commissioningController2, {
                uniqueStorageKey: "another-second",
            });
            commissioningController2.setMdnsScanner(clientMdnsScanner);

            Network.get = () => serverNetwork;

            await commissioningController2.start();
            await assert.doesNotReject(
                async () =>
                    await commissioningController2.commissionNode({
                        discovery: {
                            knownAddress: { ip: SERVER_IPv6, port: matterPort, type: "udp" },
                            identifierData: { shortDiscriminator: shortDiscriminator! },
                        },
                        commissioning: {
                            regulatoryLocation: GeneralCommissioning.RegulatoryLocationType.Indoor,
                            regulatoryCountryCode: "DE",
                        },
                        passcode,
                        stateInformationCallback: (nodeId: NodeId, nodeState: NodeStateInformation) =>
                            nodeStateChangesController2Node1.push({ nodeId, nodeState, time: MockTime.nowMs() }),
                    }),
            );

            assert.equal(commissioningChangedCallsServer.length, 2);
            assert.ok(sessionChangedCallsServer.length >= 7);
            assert.equal(sessionChangedCallsServer[sessionChangedCallsServer.length - 1].fabricIndex, FabricIndex(2));
            const sessionInfo = commissioningServer.getActiveSessionInformation();
            assert.equal(sessionInfo.length, 2);
            assert.ok(sessionInfo[1].fabric);
            assert.equal(sessionInfo[1].numberOfActiveSubscriptions, 0);
            assert.equal(commissioningChangedCallsServer2.length, 1);

            assert.equal(nodeStateChangesController2Node1.length, 1);
            assert.equal(nodeStateChangesController2Node1[0].nodeState, NodeStateInformation.Connected);
        }).timeout(10_000);

        it("verify that the server storage got updated", async () => {
            const storedFabrics = fakeServerStorage.get(["0", "FabricManager"], "fabrics");
            assert.ok(Array.isArray(storedFabrics));
            assert.equal(storedFabrics.length, 2);
            const firstFabric = storedFabrics[0] as FabricJsonObject;
            assert.equal(typeof firstFabric, "object");
            assert.equal(firstFabric.fabricIndex, 1);
            assert.equal(firstFabric.fabricId, 1);
            const secondFabric = storedFabrics[1] as FabricJsonObject;
            assert.equal(typeof secondFabric, "object");
            assert.equal(secondFabric.fabricIndex, 2);
            assert.equal(secondFabric.fabricId, 1000);
            assert.equal(secondFabric.rootVendorId, 0x1234);

            assert.equal(fakeServerStorage.get(["0", "FabricManager"], "nextFabricIndex"), 3);

            const storedServerResumptionRecords = fakeServerStorage.get(["0", "SessionManager"], "resumptionRecords");
            assert.ok(Array.isArray(storedServerResumptionRecords));
            assert.equal(storedServerResumptionRecords.length, 2);

            const storedControllerResumptionRecords = fakeServerStorage.get(
                ["0", "SessionManager"],
                "resumptionRecords",
            );
            assert.ok(Array.isArray(storedControllerResumptionRecords));
            assert.equal(storedControllerResumptionRecords.length, 2);

            const storedControllerResumptionRecords2 = fakeServerStorage.get(
                ["second", "SessionManager"],
                "resumptionRecords",
            );
            assert.ok(Array.isArray(storedControllerResumptionRecords2));
            assert.equal(storedControllerResumptionRecords2.length, 1);
        });

        it("verify that the controller storage got updated", async () => {
            const nodeData = fakeControllerStorage.get<[NodeId, any][]>(["0", "MatterController"], "commissionedNodes");
            assert.ok(nodeData);
            assert.equal(nodeData.length, 2);
            assert.deepEqual(nodeData[0][1], {
                basicInformationData: {
                    capabilityMinima: {
                        caseSessionsPerFabric: 3,
                        subscriptionsPerFabric: 3,
                    },
                    dataModelRevision: 16,
                    hardwareVersion: 0,
                    hardwareVersionString: "0",
                    localConfigDisabled: false,
                    location: "DE",
                    nodeLabel: "345678",
                    partNumber: "123456",
                    productId: 32769,
                    productName: "Matter end-to-end device",
                    reachable: true,
                    softwareVersion: 1,
                    softwareVersionString: "v1",
                    vendorId: 65521,
                    vendorName: "matter-node.js",
                },
                discoveryData: {
                    ICD: 0,
                    SAI: 300,
                    SAT: 4000,
                    SII: 500,
                    T: 0,
                    addresses: [
                        {
                            ip: SERVER_IPv6,
                            port: matterPort,
                            type: "udp",
                        },
                    ],
                },
                operationalServerAddress: {
                    ip: "fdce:7c65:b2dd:7d46:923f:8a53:eb6c:cafe",
                    port: matterPort,
                    type: "udp",
                },
            });
            assert.deepEqual(nodeData[1][1], {
                basicInformationData: {
                    capabilityMinima: {
                        caseSessionsPerFabric: 3,
                        subscriptionsPerFabric: 3,
                    },
                    dataModelRevision: 16,
                    hardwareVersion: 0,
                    hardwareVersionString: "0",
                    localConfigDisabled: false,
                    location: "US",
                    nodeLabel: "",
                    partNumber: "123456",
                    productId: 32769,
                    productName: "Matter end-to-end device",
                    reachable: true,
                    softwareVersion: 1,
                    softwareVersionString: "v1",
                    vendorId: 65521,
                    vendorName: "matter-node.js",
                },
                discoveryData: {
                    ICD: 0,
                    SAI: 300,
                    SAT: 4000,
                    SII: 500,
                    T: 0,
                    addresses: [
                        {
                            ip: SERVER_IPv6,
                            port: matterPort2,
                            type: "udp",
                        },
                    ],
                },
                operationalServerAddress: {
                    ip: "fdce:7c65:b2dd:7d46:923f:8a53:eb6c:cafe",
                    port: matterPort2,
                    type: "udp",
                },
            });

            const nodeData2 = fakeControllerStorage.get<[NodeId, any][]>(
                ["another-second", "MatterController"],
                "commissionedNodes",
            );
            assert.ok(nodeData2);
            assert.equal(nodeData2.length, 1);

            // Remove variable fields before compare
            expect(nodeData2[0][1].discoveryData.expires).to.be.an("number");
            delete nodeData2[0][1].discoveryData.expires;
            expect(nodeData2[0][1].discoveryData.deviceIdentifier).to.be.an("string");
            delete nodeData2[0][1].discoveryData.deviceIdentifier;
            expect(nodeData2[0][1].basicInformationData.serialNumber).to.be.an("string");
            delete nodeData2[0][1].basicInformationData.serialNumber;

            assert.deepEqual(nodeData2[0][1], {
                basicInformationData: {
                    capabilityMinima: {
                        caseSessionsPerFabric: 3,
                        subscriptionsPerFabric: 3,
                    },
                    dataModelRevision: 16,
                    hardwareVersion: 0,
                    hardwareVersionString: "0",
                    localConfigDisabled: false,
                    location: "DE",
                    nodeLabel: "testLabel4",
                    partNumber: "123456",
                    productId: 32769,
                    productName: "Matter end-to-end device",
                    reachable: false,
                    softwareVersion: 1,
                    softwareVersionString: "v1",
                    vendorId: 65521,
                    vendorName: "matter-node.js",
                },
                discoveryData: {
                    addresses: [
                        {
                            ip: SERVER_IPv6,
                            port: matterPort,
                            type: "udp",
                        },
                    ],
                },
                operationalServerAddress: {
                    ip: "fdce:7c65:b2dd:7d46:923f:8a53:eb6c:cafe",
                    port: matterPort,
                    type: "udp",
                },
            });

            const storedControllerFabrics = fakeControllerStorage.get<FabricJsonObject>(
                ["another-second", "MatterController"],
                "fabric",
            );
            assert.ok(typeof storedControllerFabrics === "object");
            assert.equal(storedControllerFabrics.fabricIndex, FabricIndex(1001));
        });

        after(() => {
            Time.get = () => mockTimeInstance;
        });
    });

    describe("Do some interactions with the second controller", () => {
        it("read events", async () => {
            const nodeId = commissioningController2.getCommissionedNodes()[0];
            const node = commissioningController2.getConnectedNode(nodeId);
            assert.ok(node);

            let checked = false;
            MockTime.interceptOnce(InteractionClientMessenger.prototype, "sendReadRequest", async ({ resolve }) => {
                assert.ok(resolve);
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                assert.equal(resolve.interactionModelRevision, INTERACTION_MODEL_REVISION);
                checked = true;
            });

            const response = await (
                await node.getInteractionClient()
            ).getMultipleEvents({
                events: [
                    { clusterId: BasicInformation.Cluster.id }, // * /BasicInformationCluster/ *
                    {
                        endpointId: EndpointNumber(0),
                        clusterId: GeneralDiagnostics.Cluster.id,
                        eventId: GeneralDiagnostics.Cluster.events.bootReason.id,
                    }, // 0/GeneralDiagnosticsCluster/bootReason
                    { endpointId: EndpointNumber(2) }, // 2 / * /* - will be discarded in results!
                    {
                        endpointId: EndpointNumber(100),
                        clusterId: GeneralDiagnostics.Cluster.id,
                        eventId: GeneralDiagnostics.Cluster.events.bootReason.id,
                    }, // invalid endpoint
                ],
            });

            assert.equal(checked, true);

            assert.equal(response.length, 3); // Error one is not returned currently
            assert.equal(
                response.filter(
                    ({ path: { endpointId, clusterId } }) =>
                        endpointId === 0 && clusterId === BasicInformation.Cluster.id,
                ).length,
                2,
            );

            const startUpEventData = response.find(
                ({ path: { endpointId, clusterId, eventId } }) =>
                    endpointId === 0 &&
                    clusterId === BasicInformation.Cluster.id &&
                    eventId === BasicInformation.Cluster.events.startUp.id,
            );

            assert.deepEqual(startUpEventData?.events, [
                {
                    eventNumber: 1,
                    epochTimestamp: TIME_START,
                    priority: BasicInformation.Cluster.events.startUp.priority,
                    data: {
                        softwareVersion: 1,
                    },
                    path: undefined,
                },
            ]);

            const bootReasonEventData = response.find(
                ({ path: { endpointId, clusterId, eventId } }) =>
                    endpointId === 0 &&
                    clusterId === GeneralDiagnostics.Cluster.id &&
                    eventId === GeneralDiagnostics.Cluster.events.bootReason.id,
            );
            assert.deepEqual(bootReasonEventData?.events, [
                {
                    eventNumber: 2,
                    epochTimestamp: TIME_START,
                    priority: BasicInformation.Cluster.events.startUp.priority,
                    data: {
                        bootReason: GeneralDiagnostics.BootReason.Unspecified,
                    },
                    path: undefined,
                },
            ]);
        });
    });

    describe("remove one Fabric", () => {
        it("try to remove invalid fabric", async () => {
            const nodeId = commissioningController.getCommissionedNodes()[0];
            const node = commissioningController.getConnectedNode(nodeId);
            assert.ok(node);
            const operationalCredentialsCluster = node.getRootClusterClient(OperationalCredentials.Cluster);
            assert.ok(operationalCredentialsCluster);

            const result = await operationalCredentialsCluster.commands.removeFabric({ fabricIndex: FabricIndex(250) });
            assert.equal(result.statusCode, OperationalCredentials.NodeOperationalCertStatus.InvalidFabricIndex);
            assert.equal(result.fabricIndex, undefined);
            assert.equal(result.debugText, "Fabric 250 not found");
        });

        it("read and remove first node by removing fabric from device", async () => {
            const nodeId = commissioningController.getCommissionedNodes()[0];
            const secondNodeId = commissioningController.getCommissionedNodes()[1];
            const node = commissioningController.getConnectedNode(nodeId);
            assert.ok(node);
            await assert.doesNotReject(async () => await node.decommission());

            assert.equal(commissioningController.getCommissionedNodes().length, 1);
            assert.equal(commissioningController.getCommissionedNodes()[0], secondNodeId);

            assert.equal(commissioningChangedCallsServer.length, 3);
            assert.equal(commissioningChangedCallsServer[2].fabricIndex, FabricIndex(1));
            assert.equal(commissioningChangedCallsServer2.length, 1);

            assert.equal(nodeStateChangesController1Node1.length, 3);
            assert.equal(nodeStateChangesController1Node1[1].nodeState, NodeStateInformation.Disconnected);
            assert.equal(nodeStateChangesController1Node1[2].nodeState, NodeStateInformation.Decommissioned);
        });

        it("read and remove second node by removing fabric from device unplanned and doing factory reset", async () => {
            // We remove the node ourselves (should not be done that way), but for testing we do
            const nodeId = commissioningController.getCommissionedNodes()[0];
            const node = commissioningController.getConnectedNode(nodeId);
            assert.ok(node);
            const operationalCredentialsCluster = node.getRootClusterClient(OperationalCredentials.Cluster);
            assert.ok(operationalCredentialsCluster);

            const fabricIndex = await operationalCredentialsCluster.attributes.currentFabricIndex.get();
            assert.ok(fabricIndex);
            assert.equal(fabricIndex, 1);

            // For next test we need to use the real Time implementation
            const mockTimeInstance = Time.get();
            Time.get = singleton(() => new TimeNode());

            const result = await operationalCredentialsCluster.commands.removeFabric({ fabricIndex });
            assert.equal(result.statusCode, OperationalCredentials.NodeOperationalCertStatus.Ok);
            assert.deepEqual(result.fabricIndex, fabricIndex);

            let i;
            for (i = 0; i < 20; i++) {
                if (commissioningChangedCallsServer2.length === 1) {
                    await new Promise(resolve => setTimeout(resolve, 1000));
                } else {
                    break;
                }
            }
            assert.ok(i !== 0);
            assert.equal(commissioningChangedCallsServer2.length, 2);

            assert.equal(commissioningController.getCommissionedNodes().length, 1);

            // Try to remove node now will throw an error
            await assert.rejects(async () => await node.decommission());

            await assert.doesNotReject(async () => await commissioningController.removeNode(nodeId, false));

            Time.get = () => mockTimeInstance;

            assert.equal(commissioningController.getCommissionedNodes().length, 0);
            assert.equal(commissioningChangedCallsServer2.length, 2);
            assert.equal(commissioningChangedCallsServer2[1].fabricIndex, FabricIndex(1));

            assert.equal(nodeStateChangesController1Node2.length, 3);
            assert.equal(nodeStateChangesController1Node2[1].nodeState, NodeStateInformation.Reconnecting);
            assert.equal(nodeStateChangesController1Node2[2].nodeState, NodeStateInformation.Disconnected);
        }).timeout(30_000);

        it("controller storage is updated for removed nodes", async () => {
            const nodeData = fakeControllerStorage.get<[NodeId, any][]>(["0", "MatterController"], "commissionedNodes");
            assert.ok(nodeData);
            assert.equal(nodeData.length, 0);
        });

        it("server storage is updated for removed nodes", async () => {
            const storedFabrics = fakeServerStorage.get(["0", "FabricManager"], "fabrics");
            assert.ok(Array.isArray(storedFabrics));
            assert.equal(storedFabrics.length, 1);
            const firstFabric = storedFabrics[0] as FabricJsonObject;
            assert.equal(typeof firstFabric, "object");
            assert.equal(firstFabric.fabricIndex, 2);
            assert.equal(firstFabric.fabricId, 1000);
            assert.equal(firstFabric.rootVendorId, 0x1234);

            assert.equal(fakeServerStorage.get(["0", "FabricManager"], "nextFabricIndex"), 3);
        });
    });

    after(async () => {
        await MockTime.advance(10_000); // To finish all exchanges

        // TODO: Change that again to MockTime
        // For closing all down we need to use the real Time implementation
        const mockTimeInstance = Time.get();
        Time.get = singleton(() => new TimeNode());

        await matterServer.close();
        await matterClient.close();
        await fakeControllerStorage.close();
        await fakeServerStorage.close();

        Time.get = () => mockTimeInstance;
    });
});
