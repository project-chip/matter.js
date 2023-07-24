/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as assert from "assert";

import { Time, TimeFake } from "@project-chip/matter.js/time";
import { Crypto } from "@project-chip/matter.js/crypto";
import { CryptoNode } from "../src/crypto/CryptoNode";

Crypto.get = () => new CryptoNode();

import {
    OnOffCluster, BasicInformationCluster, OperationalCertStatus, OperationalCredentialsCluster, DescriptorCluster,
    IdentifyCluster, GroupsCluster, AccessControlCluster, ScenesCluster, GeneralCommissioningCluster,
    RegulatoryLocationType, NetworkCommissioningStatus,
    WifiAndEthernetAndThreadNetworkCommissioningCluster
} from "@project-chip/matter.js/cluster";
import { VendorId, FabricIndex, GroupId, ClusterId } from "@project-chip/matter.js/datatype";

import { MdnsBroadcaster, MdnsScanner } from "@project-chip/matter.js/mdns";
import { Network, NetworkFake } from "@project-chip/matter.js/net";
import { Level, Logger } from "@project-chip/matter.js/log";
import { getPromiseResolver, ByteArray } from "@project-chip/matter.js/util";
import { StorageManager, StorageBackendMemory } from "@project-chip/matter.js/storage";
import { FabricJsonObject } from "@project-chip/matter.js/fabric";
import { MatterServer, CommissioningServer, CommissioningController } from "@project-chip/matter.js";
import { OnOffLightDevice } from "@project-chip/matter.js/device";
import { InteractionClient, ClusterServer } from "@project-chip/matter.js/interaction";

const SERVER_IPv6 = "fdce:7c65:b2dd:7d46:923f:8a53:eb6c:cafe";
const SERVER_IPv4 = "192.168.200.1";
const SERVER_MAC = "00:B0:D0:63:C2:26";
const CLIENT_IPv6 = "fdce:7c65:b2dd:7d46:923f:8a53:eb6c:beef";
const CLIENT_IPv4 = "192.168.200.2";
const CLIENT_MAC = "CA:FE:00:00:BE:EF";

const serverNetwork = new NetworkFake(SERVER_MAC, [SERVER_IPv6, SERVER_IPv4]);
const clientNetwork = new NetworkFake(CLIENT_MAC, [CLIENT_IPv6, CLIENT_IPv4]);

const deviceName = "Matter end-to-end device";
const deviceType = 257 /* Dimmable bulb */;
const vendorName = "matter-node.js";
const vendorId = new VendorId(0xFFF1);
const productName = "Matter end-to-end device";
const productId = 0X8001;
const longDiscriminator = 3840;
const setupPin = 20202021;
const matterPort = 5540;

const TIME_START = 1666663000000;
const fakeTime = new TimeFake(TIME_START);

const fakeControllerStorage = new StorageBackendMemory();
const fakeServerStorage = new StorageBackendMemory();

describe("Integration Test", () => {
    let matterServer: MatterServer;
    let matterClient: MatterServer;
    let commissioningController: CommissioningController;
    let commissioningServer: CommissioningServer;
    let onOffLightDeviceServer: OnOffLightDevice;
    let defaultInteractionClient: InteractionClient;

    beforeAll(async () => {
        Logger.defaultLogLevel = Level.DEBUG;
        Time.get = () => fakeTime;
        Network.get = () => clientNetwork;

        const controllerStorageManager = new StorageManager(fakeControllerStorage);
        await controllerStorageManager.initialize();

        matterClient = new MatterServer(controllerStorageManager);
        commissioningController = new CommissioningController({
            serverAddress: { ip: SERVER_IPv6, port: matterPort, type: "udp" },
            disableIpv4: true,
            longDiscriminator,
            passcode: setupPin,
            listeningAddressIpv4: "1.2.3.4",
            listeningAddressIpv6: CLIENT_IPv6,
            delayedPairing: true,
            commissioningOptions: {
                regulatoryLocation: RegulatoryLocationType.Indoor,
                regulatoryCountryCode: "DE"
            }
        });
        matterClient.addCommissioningController(commissioningController);

        Network.get = () => serverNetwork;

        const serverStorageManager = new StorageManager(fakeServerStorage);
        await serverStorageManager.initialize();

        matterServer = new MatterServer(serverStorageManager);

        commissioningServer = new CommissioningServer({
            port: matterPort,
            disableIpv4: true,
            listeningAddressIpv6: SERVER_IPv6,
            listeningAddressIpv4: SERVER_IPv4,
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
            },
            delayedAnnouncement: true, // delay because we need to override Mdns classes
        });

        onOffLightDeviceServer = new OnOffLightDevice();
        commissioningServer.addDevice(onOffLightDeviceServer);

        // Override NetworkCommissioning Cluster for now unless configurable
        commissioningServer.addRootClusterServer(
            ClusterServer(
                WifiAndEthernetAndThreadNetworkCommissioningCluster,
                {
                    maxNetworks: 1,
                    interfaceEnabled: true,
                    lastConnectErrorValue: 0,
                    lastNetworkId: ByteArray.fromHex("0000000000000000000000000000000000000000000000000000000000000000"),
                    lastNetworkingStatus: NetworkCommissioningStatus.Success,
                    networks: [{ networkId: ByteArray.fromHex("0000000000000000000000000000000000000000000000000000000000000000"), connected: true }],
                },
                {
                    scanNetworks: async function() {
                        throw new Error("Not implemented");
                    },

                    removeNetwork: async function() {
                        throw new Error("Not implemented");
                    },

                    connectNetwork: async function() {
                        throw new Error("Not implemented");
                    },

                    reorderNetwork: async function() {
                        throw new Error("Not implemented");
                    },

                    addOrUpdateWiFiNetwork: async function() {
                        throw new Error("Not implemented");
                    },

                    addOrUpdateThreadNetwork: async function() {
                        throw new Error("Not implemented");
                    }
                }
            )
        );


        matterServer.addCommissioningServer(commissioningServer);

        // override the mdns scanner to avoid the client to try to resolve the server's address
        commissioningServer.setMdnsScanner(await MdnsScanner.create(SERVER_IPv6));
        commissioningServer.setMdnsBroadcaster(await MdnsBroadcaster.create(SERVER_IPv6));
        await commissioningServer.advertise();

        assert.ok(onOffLightDeviceServer.getClusterServer(OnOffCluster));
    });

    describe("Check Server API", () => {
        it("Access cluster servers via api", async () => {
            const basicInfoCluster = commissioningServer.getRootClusterServer(BasicInformationCluster);
            assert.ok(basicInfoCluster);

            // check API access for a Mandatory field with both APIs, get and set
            const v1_objApi = basicInfoCluster.attributes.softwareVersionString.get();
            assert.equal(v1_objApi, "v1");

            // check API access for an existing optional field with both APIs, get and set
            assert.ok(basicInfoCluster.attributes.nodeLabel);
            const nodeLabel_objApi = basicInfoCluster.attributes.nodeLabel.get();
            assert.equal(nodeLabel_objApi, "");
            basicInfoCluster.attributes.nodeLabel.set("234567");
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
            commissioningController.setMdnsScanner(await MdnsScanner.create(CLIENT_IPv6));
            await commissioningController.connect();

            Network.get = () => { throw new Error("Network should not be requested post starting") };

            assert.ok(commissioningController.getFabric().nodeId.id);
        }, 60 * 1000 /* 1mn timeout */);

        it("the session is resumed if it has been established previously", async () => {
            defaultInteractionClient = await commissioningController.createInteractionClient();
            assert.ok(defaultInteractionClient);
        });

        it("Verify that commissioning changed the Regulatory Config/Location values", async () => {
            const generalCommissioningCluster = commissioningController.getRootClusterClient(GeneralCommissioningCluster);
            assert.equal(await generalCommissioningCluster?.getRegulatoryConfigAttribute(), RegulatoryLocationType.Indoor);

            const basicInfoCluster = commissioningController.getRootClusterClient(BasicInformationCluster);
            assert.equal(await basicInfoCluster?.getLocationAttribute(), "DE");
        });

    });


    describe("read attributes", () => {
        it("read one specific attribute including schema parsing", async () => {
            const basicInfoCluster = commissioningController.getRootClusterClient(BasicInformationCluster);
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
            const onoffEndpoint = commissioningController.getDevices().find(endpoint => endpoint.id === 1);
            assert.ok(onoffEndpoint);
            const onoffCluster = onoffEndpoint.getClusterClient(OnOffCluster);
            assert.ok(onoffCluster);

            assert.equal(await onoffCluster.attributes.onOff.get(), false);
        });

        it("read all attributes", async () => {
            const response = await defaultInteractionClient.getAllAttributes();

            assert.ok(response);
        });

        it("read multiple attributes", async () => {
            const response = await defaultInteractionClient.getMultipleAttributes([
                { clusterId: DescriptorCluster.id }, // * /DescriptorCluster/ *
                { endpointId: 0, clusterId: BasicInformationCluster.id }, // 0/BasicInformationCluster/ *
                { endpointId: 1, clusterId: OnOffCluster.id, attributeId: OnOffCluster.attributes.onOff.id }, // 1/OnOffCluster/onOff
                { endpointId: 2 }, // 2 / * /* - will be discarded in results!
            ]);

            assert.equal(response.length, 42);
            assert.equal(response.filter(({
                path: {
                    endpointId,
                    clusterId
                }
            }) => endpointId === 0 && clusterId === DescriptorCluster.id).length, 10);
            assert.equal(response.filter(({
                path: {
                    endpointId,
                    clusterId
                }
            }) => endpointId === 1 && clusterId === DescriptorCluster.id).length, 10);

            const descriptorServerListData = response.find(({
                path: {
                    endpointId,
                    clusterId,
                    attributeId
                }
            }) => endpointId === 0 && clusterId === DescriptorCluster.id && attributeId === DescriptorCluster.attributes.serverList.id);
            assert.deepEqual(descriptorServerListData, {
                path: {
                    nodeId: undefined,
                    endpointId: 0,
                    clusterId: DescriptorCluster.id,
                    attributeId: DescriptorCluster.attributes.serverList.id,
                    attributeName: "serverList"
                }, value: [new ClusterId(29), new ClusterId(40), new ClusterId(62), new ClusterId(48), new ClusterId(49), new ClusterId(31), new ClusterId(63), new ClusterId(51), new ClusterId(60)], version: 9
            })

            assert.equal(response.filter(({
                path: {
                    endpointId,
                    clusterId
                }
            }) => endpointId === 0 && clusterId === BasicInformationCluster.id).length, 21);
            const softwareVersionStringData = response.find(({
                path: {
                    endpointId,
                    clusterId,
                    attributeId
                }
            }) => endpointId === 0 && clusterId === BasicInformationCluster.id && attributeId === BasicInformationCluster.attributes.softwareVersionString.id);
            assert.deepEqual(softwareVersionStringData, {
                path: {
                    nodeId: undefined,
                    endpointId: 0,
                    clusterId: BasicInformationCluster.id,
                    attributeId: BasicInformationCluster.attributes.softwareVersionString.id,
                    attributeName: "softwareVersionString"
                }, value: "v1", version: 0
            });
            const nodeLabelData = response.find(({
                path: {
                    endpointId,
                    clusterId,
                    attributeId
                }
            }) => endpointId === 0 && clusterId === BasicInformationCluster.id && attributeId === BasicInformationCluster.attributes.nodeLabel.id);
            assert.deepEqual(nodeLabelData, {
                path: {
                    nodeId: undefined,
                    endpointId: 0,
                    clusterId: BasicInformationCluster.id,
                    attributeId: BasicInformationCluster.attributes.nodeLabel.id,
                    attributeName: "nodeLabel"
                }, value: "345678", version: 2
            });

            const onOffData = response.find(({
                path: {
                    endpointId,
                    clusterId,
                    attributeId
                }
            }) => endpointId === 1 && clusterId === OnOffCluster.id && attributeId === OnOffCluster.attributes.onOff.id)
            assert.deepEqual(onOffData, {
                path: {
                    nodeId: undefined,
                    endpointId: 1,
                    clusterId: OnOffCluster.id,
                    attributeId: OnOffCluster.attributes.onOff.id,
                    attributeName: "onOff"
                }, value: false, version: 0
            });

        });

    });

    describe("write attributes", () => {

        it("write one attribute", async () => {
            const basicInfoCluster = commissioningController.getRootClusterClient(BasicInformationCluster);
            assert.ok(basicInfoCluster);

            await basicInfoCluster.attributes.nodeLabel.set("testLabel");

            assert.equal(await basicInfoCluster.attributes.nodeLabel.get(), "testLabel");
        });

        it("write one attribute with error", async () => {
            const basicInfoCluster = commissioningController.getRootClusterClient(BasicInformationCluster);
            assert.ok(basicInfoCluster);

            await assert.rejects(async () => await basicInfoCluster.attributes.location.set("XXX"), {
                message: "String is too long: 3, max 2."
            });
        });

        it("write multiple attributes", async () => {
            const client = await commissioningController.createInteractionClient(); // We can also use a new Interaction clint

            const response = await client.setMultipleAttributes([
                { endpointId: 0, clusterId: BasicInformationCluster.id, attribute: BasicInformationCluster.attributes.nodeLabel, value: "testLabel2" },
                { endpointId: 0, clusterId: BasicInformationCluster.id, attribute: BasicInformationCluster.attributes.location, value: "GB" },
            ]);

            assert.equal(Array.isArray(response), true);
            assert.equal(response.length, 0);

            const basicInfoCluster = commissioningController.getRootClusterClient(BasicInformationCluster, client);
            assert.ok(basicInfoCluster);
            assert.equal(await basicInfoCluster.attributes.nodeLabel.get(), "testLabel2");
            assert.equal(await basicInfoCluster.getLocationAttribute(), "GB");
        });

        it("write multiple attributes with partial errors", async () => {
            const response = await defaultInteractionClient.setMultipleAttributes([
                { endpointId: 0, clusterId: BasicInformationCluster.id, attribute: BasicInformationCluster.attributes.nodeLabel, value: "testLabel3" },
                { endpointId: 0, clusterId: BasicInformationCluster.id, attribute: BasicInformationCluster.attributes.location, value: "XXX" },
            ]);

            assert.equal(response.length, 1);
            assert.equal(response[0].path.attributeId, BasicInformationCluster.attributes.location.id);
            assert.equal(response[0].status, 135 /* StatusCode.ConstraintError */);

            const basicInfoCluster = commissioningController.getRootClusterClient(BasicInformationCluster, defaultInteractionClient);
            assert.ok(basicInfoCluster);

            assert.equal(await basicInfoCluster.attributes.nodeLabel.get(), "testLabel3");
            assert.equal(await basicInfoCluster.attributes.location.get(), "GB");
        });

    });

    describe("Groups server fabric scoped storage", () => {
        it("add a group", async () => {
            const onoffEndpoint = commissioningController.getDevices().find(endpoint => endpoint.id === 1);
            assert.ok(onoffEndpoint);
            const groupsCluster = onoffEndpoint.getClusterClient(GroupsCluster, defaultInteractionClient);
            assert.ok(groupsCluster);
            await groupsCluster.commands.addGroup({ groupId: new GroupId(1), groupName: "Group 1" });
        });
    });

    describe("subscribe attributes", () => {
        it("subscription of one attribute sends updates when the value changes", async () => {
            const onoffEndpoint = commissioningController.getDevices().find(endpoint => endpoint.id === 1);
            assert.ok(onoffEndpoint);
            const onOffClient = onoffEndpoint.getClusterClient(OnOffCluster, await commissioningController.createInteractionClient());
            assert.ok(onOffClient);

            assert.ok(onOffLightDeviceServer);
            const startTime = Time.nowMs();

            // Await initial Data
            const { promise: firstPromise, resolver: firstResolver } = await getPromiseResolver<{ value: boolean, time: number }>();
            let callback = (value: boolean) => firstResolver({ value, time: Time.nowMs() });

            //onOffClient.attributes.onOff.addListener(value => callback(value));
            //await onOffClient.attributes.onOff.subscribe(0, 5);
            await onOffClient.subscribeOnOffAttribute(value => callback(value), 0, 5);

            await fakeTime.advanceTime(0);
            const firstReport = await firstPromise;
            assert.deepEqual(firstReport, { value: false, time: startTime });

            // Await update Report on value change
            const { promise: updatePromise, resolver: updateResolver } = await getPromiseResolver<{ value: boolean, time: number }>();
            callback = (value: boolean) => updateResolver({ value, time: Time.nowMs() });

            await fakeTime.advanceTime(2 * 1000);
            await onOffLightDeviceServer.onOff(true);
            await fakeTime.advanceTime(100);
            const updateReport = await updatePromise;

            assert.deepEqual(updateReport, { value: true, time: startTime + 2 * 1000 + 100 });

            // Await update Report on value change without in between update
            const { promise: lastPromise, resolver: lastResolver } = await getPromiseResolver<{ value: boolean, time: number }>();
            callback = (value: boolean) => lastResolver({ value, time: Time.nowMs() });

            // Verify that no update comes in after max cycle time 1h
            await fakeTime.advanceTime(60 * 60 * 1000);

            // ... but on next change immediately (means immediately + 50ms, so wait 100ms) then
            await fakeTime.advanceTime(2 * 1000);
            await onOffLightDeviceServer.onOff(false);
            await fakeTime.advanceTime(100);
            const lastReport = await lastPromise;

            assert.deepEqual(lastReport, { value: false, time: startTime + (60 * 60 + 4) * 1000 + 200 });
        });

        it("subscribe an attribute with getter that needs endpoint", async () => {
            const onoffEndpoint = commissioningController.getDevices().find(endpoint => endpoint.id === 1);
            assert.ok(onoffEndpoint);
            const scenesClient = onoffEndpoint.getClusterClient(ScenesCluster, await commissioningController.createInteractionClient());
            assert.ok(scenesClient);

            const scenesServer = onOffLightDeviceServer.getClusterServer(ScenesCluster);
            assert.ok(scenesServer);

            const startTime = Time.nowMs();

            // Await initial Data
            const { promise: firstPromise, resolver: firstResolver } = await getPromiseResolver<{ value: number, time: number }>();
            const callback = (value: number) => firstResolver({ value, time: Time.nowMs() });

            //onOffClient.attributes.onOff.addListener(value => callback(value));
            //await onOffClient.attributes.onOff.subscribe(0, 5);
            await scenesClient.subscribeSceneCountAttribute(value => callback(value), 0, 5);

            await fakeTime.advanceTime(0);
            const firstReport = await firstPromise;
            assert.deepEqual(firstReport, { value: 0, time: startTime });

            /* Will be added later when we clean up getter subscriptions
            // Await update Report on value change
            const { promise: updatePromise, resolver: updateResolver } = await getPromiseResolver<{ value: boolean, time: number }>();
            callback = (value: boolean) => updateResolver({ value, time: Time.nowMs() });

            await fakeTime.advanceTime(2 * 1000);
            await scenesClient.addScene({groupID: new GroupId(1), sceneId: 1, transitionTime: 0, sceneName: "Test", extensionFieldSets: []});
            const updateReport = await updatePromise;

            assert.deepEqual(updateReport, { value: true, time: startTime + 2 * 1000 });
            */
        });
    });

    describe("Access Control server fabric scoped attribute storage", () => {
        it("set empty acl", async () => {
            const accessControlCluster = commissioningController.getRootClusterClient(AccessControlCluster, defaultInteractionClient);
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
            const onoffEndpoint = commissioningController.getDevices().find(endpoint => endpoint.id === 1);
            assert.ok(onoffEndpoint);
            const identifyClient = onoffEndpoint.getClusterClient(IdentifyCluster, defaultInteractionClient);
            assert.ok(identifyClient);

            const { promise: firstPromise, resolver: firstResolver } = await getPromiseResolver<number>();
            onOffLightDeviceServer.addCommandHandler("identify", async ({ request: { identifyTime } }) => firstResolver(identifyTime));

            await identifyClient.commands.identify({ identifyTime: 5 });

            const result = await firstPromise;
            assert.equal(result, 5)
        });
    });

    describe("storage", () => {
        it("server storage has fabric fields stored correctly stringified", async () => {
            const storedFabrics = fakeServerStorage.get(["0", "FabricManager"], "fabrics");
            assert.ok(Array.isArray(storedFabrics));
            assert.equal(storedFabrics.length, 1);
            const firstFabric = storedFabrics[0] as FabricJsonObject;
            assert.equal(typeof firstFabric, "object");
            assert.equal(firstFabric.fabricIndex, 1);
            assert.equal(firstFabric.fabricId, 1);

            const groupsClusterEndpointMap = firstFabric.scopedClusterData.get(GroupsCluster.id);
            assert.ok(groupsClusterEndpointMap);
            assert.equal(groupsClusterEndpointMap.size, 1);
            const groupsClusterData = groupsClusterEndpointMap.get("1");
            assert.ok(groupsClusterData instanceof Map);
            assert.equal(groupsClusterData.get(1), "Group 1");

            assert.equal(fakeServerStorage.get(["0", "FabricManager"], "nextFabricIndex"), 2);

            const onOffValue = fakeServerStorage.get<{ value: any, version: number }>(["0", "Cluster-1-6"], "onOff");
            assert.ok(typeof onOffValue === "object");
            assert.equal(onOffValue.version, 2);
            assert.equal(onOffValue.value, false);

            const storedServerResumptionRecords = fakeServerStorage.get(["0", "SessionManager"], "resumptionRecords");
            assert.ok(Array.isArray(storedServerResumptionRecords));
            assert.equal(storedServerResumptionRecords.length, 1);

            assert.equal(fakeControllerStorage.get(["0", "RootCertificateManager"], "rootCertId"), BigInt(0));
            assert.equal(fakeControllerStorage.get(["0", "MatterController"], "fabricCommissioned"), true);

            const storedControllerResumptionRecords = fakeServerStorage.get(["0", "SessionManager"], "resumptionRecords");
            assert.ok(Array.isArray(storedControllerResumptionRecords));
            assert.equal(storedControllerResumptionRecords.length, 1);

            const storedControllerFabrics = fakeControllerStorage.get(["0", "MatterController"], "fabric");
            assert.ok(typeof storedControllerFabrics === "object");
        });
    });

    describe("remove Fabric", () => {
        it("try to remove invalid fabric", async () => {
            const operationalCredentialsCluster = commissioningController.getRootClusterClient(OperationalCredentialsCluster, defaultInteractionClient);
            assert.ok(operationalCredentialsCluster);

            const result = await operationalCredentialsCluster.commands.removeFabric({ fabricIndex: new FabricIndex(250) });
            assert.equal(result.status, OperationalCertStatus.InvalidFabricIndex);
            assert.equal(result.fabricIndex, undefined);
            assert.equal(result.debugText, "Fabric 250 not found");
        });

        it("read and remove fabric", async () => {
            const operationalCredentialsCluster = commissioningController.getRootClusterClient(OperationalCredentialsCluster, defaultInteractionClient);
            assert.ok(operationalCredentialsCluster);

            const fabricIndex = await operationalCredentialsCluster.attributes.currentFabricIndex.get();
            assert.ok(fabricIndex);
            assert.equal(fabricIndex.index, 1);

            const result = await operationalCredentialsCluster.commands.removeFabric({ fabricIndex });
            assert.equal(result.status, OperationalCertStatus.Success);
            assert.deepEqual(result.fabricIndex, fabricIndex);
            assert.equal(result.debugText, "Fabric removed");
        });
    });

    afterAll(async () => {
        await matterServer.close();
        await matterClient.close();
        await fakeControllerStorage.close();
        await fakeServerStorage.close();
    });
});
