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
    OnOffCluster, BasicInformationCluster, OperationalCertStatus,
    OperationalCredentialsCluster, DescriptorCluster,
} from "@project-chip/matter.js/cluster";
import { VendorId, FabricIndex } from "@project-chip/matter.js/datatype";

import { MdnsBroadcaster, MdnsScanner } from "@project-chip/matter.js/mdns";
import { Network, NetworkFake } from "@project-chip/matter.js/net";
import { Level, Logger } from "@project-chip/matter.js/log";
import { getPromiseResolver } from "@project-chip/matter.js/util";
import { StorageManager, StorageBackendMemory } from "@project-chip/matter.js/storage";
import { FabricJsonObject } from "@project-chip/matter.js/fabric";
import { Matter, CommissionableMatterNode, PairableMatterNode } from "@project-chip/matter.js";
import { OnOffLightDevice } from "@project-chip/matter.js/device";

const SERVER_IP = "192.168.200.1";
const SERVER_MAC = "00:B0:D0:63:C2:26";
const CLIENT_IP = "192.168.200.2";
const CLIENT_MAC = "CA:FE:00:00:BE:EF";

const serverNetwork = new NetworkFake(SERVER_MAC, [SERVER_IP]);
const clientNetwork = new NetworkFake(CLIENT_MAC, [CLIENT_IP]);

const deviceName = "Matter end-to-end device";
const deviceType = 257 /* Dimmable bulb */;
const vendorName = "matter-node.js";
const vendorId = new VendorId(0xFFF1);
const productName = "Matter end-to-end device";
const productId = 0X8001;
const discriminator = 3840;
const setupPin = 20202021;
const matterPort = 5540;

const TIME_START = 1666663000000;
const fakeTime = new TimeFake(TIME_START);

const fakeControllerStorage = new StorageBackendMemory();
const fakeServerStorage = new StorageBackendMemory();

describe("New Integration", () => {
    let matterServer: Matter;
    let matterClient: Matter;
    let pairableNode: PairableMatterNode;
    let onOffLightDeviceServer: OnOffLightDevice;

    beforeAll(async () => {
        Logger.defaultLogLevel = Level.DEBUG;
        Time.get = () => fakeTime;
        Network.get = () => clientNetwork;

        const controllerStorageManager = new StorageManager(fakeControllerStorage);
        await controllerStorageManager.initialize();

        matterClient = new Matter(controllerStorageManager);
        pairableNode = new PairableMatterNode({
            ip: SERVER_IP,
            port: matterPort,
            disableIpv4: false,
            discriminator,
            passcode: setupPin,
            listeningAddressIpv4: "1.2.3.4",
            listeningAddressIpv6: CLIENT_IP,
            delayedPairing: true
        });
        matterClient.addPairableNode(pairableNode);

        Network.get = () => serverNetwork;

        const serverStorageManager = new StorageManager(fakeServerStorage);
        await serverStorageManager.initialize();

        matterServer = new Matter(serverStorageManager);

        const commissionableNode = new CommissionableMatterNode({
            port: matterPort,
            disableIpv4: true,
            listeningAddressIpv6: SERVER_IP,
            deviceName,
            deviceType,
            passcode: setupPin,
            discriminator,
            basicInformation: {
                vendorName,
                vendorId,
                productName,
                productId,
            },
            delayedAnnouncement: true, // delay because we need to override Mdns classes
        });

        onOffLightDeviceServer = new OnOffLightDevice();
        commissionableNode.addDevice(onOffLightDeviceServer);

        matterServer.addCommissionableNode(commissionableNode);

        // override the mdns scanner to avoid the client to try to resolve the server's address
        commissionableNode.setMdnsScanner(await MdnsScanner.create(SERVER_IP));
        commissionableNode.setMdnsBroadcaster(await MdnsBroadcaster.create(matterPort, SERVER_IP));
        await commissionableNode.advertise();

        assert.ok(onOffLightDeviceServer.getClusterServer(OnOffCluster));
    });

    describe("commission", () => {
        it("the client commissions a new device", async () => {
            // override the mdns scanner to avoid the client to try to resolve the server's address
            pairableNode.setMdnsScanner(await MdnsScanner.create(CLIENT_IP));
            await pairableNode.connect();

            Network.get = () => { throw new Error("Network should not be requested post starting") };

            assert.ok(pairableNode.getFabric().nodeId.id);
        }, 60 * 1000 /* 1mn timeout */);

        it("the session is resumed if it has been established previously", async () => {
            const client = await pairableNode.createInteractionClient();
            assert.ok(client);
        });
    });


    describe("read attributes", () => {
        it("read one specific attribute including schema parsing", async () => {
            const descriptorCluster = pairableNode.getRootClusterClient(BasicInformationCluster);
            assert.ok(descriptorCluster);
            descriptorCluster.bindToInteractionClient(await pairableNode.createInteractionClient());

            assert.equal(await descriptorCluster.attributes.softwareVersionString.get(), "v1");
        });

        it("read one specific attribute including schema parsing", async () => {
            const onoffEndpoint = pairableNode.getDevices().find(endpoint => endpoint.id === 1);
            assert.ok(onoffEndpoint);
            const onoffCluster = onoffEndpoint.getClusterClient(OnOffCluster);
            assert.ok(onoffCluster);
            onoffCluster.bindToInteractionClient(await pairableNode.createInteractionClient());

            assert.equal(await onoffCluster.attributes.onOff.get(), false);
        });

        it("read all attributes", async () => {
            const client = await pairableNode.createInteractionClient();
            const response = await client.getAllAttributes();

            assert.ok(response);
        });

        it("read multiple attributes", async () => {
            const client = await pairableNode.createInteractionClient();
            const response = await client.getMultipleAttributes([
                { clusterId: DescriptorCluster.id }, // * /DescriptorCluster/ *
                { endpointId: 0, clusterId: BasicInformationCluster.id }, // 0/BasicInformationCluster/ *
                { endpointId: 1, clusterId: OnOffCluster.id, attributeId: OnOffCluster.attributes.onOff.id }, // 1/OnOffCluster/onOff
                { endpointId: 2 }, // 2 / * /* - will be discarded in results!
            ]);

            assert.equal(response.length, 29);
            assert.equal(response.filter(({
                path: {
                    endpointId,
                    clusterId
                }
            }) => endpointId === 0 && clusterId === DescriptorCluster.id).length, 6);
            assert.equal(response.filter(({
                path: {
                    endpointId,
                    clusterId
                }
            }) => endpointId === 1 && clusterId === DescriptorCluster.id).length, 6);

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
                }, value: [{ id: 29 }, { id: 40 }, { id: 62 }, { id: 48 }, { id: 49 }, { id: 31 }, { id: 63 }, { id: 51 }, { id: 60 }], version: 1
            })

            assert.equal(response.filter(({
                path: {
                    endpointId,
                    clusterId
                }
            }) => endpointId === 0 && clusterId === BasicInformationCluster.id).length, 16);
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
            const basicInfoCluster = pairableNode.getRootClusterClient(BasicInformationCluster);
            assert.ok(basicInfoCluster);
            basicInfoCluster.bindToInteractionClient(await pairableNode.createInteractionClient());

            await basicInfoCluster.attributes.nodeLabel.set("testLabel");

            assert.equal(await basicInfoCluster.attributes.nodeLabel.get(), "testLabel");
        });

        it("write one attribute with error", async () => {
            const basicInfoCluster = pairableNode.getRootClusterClient(BasicInformationCluster);
            assert.ok(basicInfoCluster);
            basicInfoCluster.bindToInteractionClient(await pairableNode.createInteractionClient());

            await assert.rejects(async () => await basicInfoCluster.attributes.location.set("XXX"), {
                message: "String is too long: 3, max 2."
            });
        });

        it("write multiple attributes", async () => {
            const client = await pairableNode.createInteractionClient();

            const response = await client.setMultipleAttributes([
                { endpointId: 0, clusterId: BasicInformationCluster.id, attribute: BasicInformationCluster.attributes.nodeLabel, value: "testLabel2" },
                { endpointId: 0, clusterId: BasicInformationCluster.id, attribute: BasicInformationCluster.attributes.location, value: "GB" },
            ]);

            assert.equal(Array.isArray(response), true);
            assert.equal(response.length, 0);

            const basicInfoCluster = pairableNode.getRootClusterClient(BasicInformationCluster);
            assert.ok(basicInfoCluster);
            assert.equal(await basicInfoCluster.attributes.nodeLabel.get(), "testLabel2");
            assert.equal(await basicInfoCluster.attributes.location.get(), "GB");
        });

        it("write multiple attributes with partial errors", async () => {
            const client = await pairableNode.createInteractionClient();

            const response = await client.setMultipleAttributes([
                { endpointId: 0, clusterId: BasicInformationCluster.id, attribute: BasicInformationCluster.attributes.nodeLabel, value: "testLabel3" },
                { endpointId: 0, clusterId: BasicInformationCluster.id, attribute: BasicInformationCluster.attributes.location, value: "XXX" },
            ]);

            assert.equal(response.length, 1);
            assert.equal(response[0].path.attributeId, BasicInformationCluster.attributes.location.id);
            assert.equal(response[0].status, 135 /* StatusCode.ConstraintError */);

            const basicInfoCluster = pairableNode.getRootClusterClient(BasicInformationCluster);
            assert.ok(basicInfoCluster);

            assert.equal(await basicInfoCluster.attributes.nodeLabel.get(), "testLabel3");
            assert.equal(await basicInfoCluster.attributes.location.get(), "GB");
        });

    });

    describe("subscribe attributes", () => {
        it("subscription of one attribute sends updates when the value changes", async () => {
            const onoffEndpoint = pairableNode.getDevices().find(endpoint => endpoint.id === 1);
            assert.ok(onoffEndpoint);
            const onOffClient = onoffEndpoint.getClusterClient(OnOffCluster);
            assert.ok(onOffClient);
            onOffClient.bindToInteractionClient(await pairableNode.createInteractionClient());

            assert.ok(onOffLightDeviceServer);
            const startTime = Time.nowMs();

            // Await initial Data
            const { promise: firstPromise, resolver: firstResolver } = await getPromiseResolver<{ value: boolean, time: number }>();
            let callback = (value: boolean) => firstResolver({ value, time: Time.nowMs() });

            onOffClient.attributes.onOff.addListener(value => callback(value));
            await onOffClient.attributes.onOff.subscribe(0, 5);

            await fakeTime.advanceTime(0);
            const firstReport = await firstPromise;
            assert.deepEqual(firstReport, { value: false, time: startTime });

            // Await update Report on value change
            const { promise: updatePromise, resolver: updateResolver } = await getPromiseResolver<{ value: boolean, time: number }>();
            callback = (value: boolean) => updateResolver({ value, time: Time.nowMs() });

            await fakeTime.advanceTime(2 * 1000);
            await onOffLightDeviceServer.onOff(true);
            const updateReport = await updatePromise;

            assert.deepEqual(updateReport, { value: true, time: startTime + 2 * 1000 });

            // Await update Report on value change without in between update
            const { promise: lastPromise, resolver: lastResolver } = await getPromiseResolver<{ value: boolean, time: number }>();
            callback = (value: boolean) => lastResolver({ value, time: Time.nowMs() });

            // Verify that no update comes in after max cycle time 1h
            await fakeTime.advanceTime(60 * 60 * 1000);

            // ... but on next change immediately then
            await fakeTime.advanceTime(2 * 1000);
            await onOffLightDeviceServer.onOff(false);
            const lastReport = await lastPromise;

            assert.deepEqual(lastReport, { value: false, time: startTime + (60 * 60 + 4) * 1000 });
        });
    });

    describe("storage", () => {
        it("server storage has fabric fields stored correctly stringified", async () => {
            const storedFabrics = fakeServerStorage.get("FabricManager", "fabrics");
            assert.ok(Array.isArray(storedFabrics));
            assert.equal(storedFabrics.length, 1);
            const firstFabric = storedFabrics[0] as FabricJsonObject;
            assert.equal(typeof firstFabric, "object");
            assert.equal(firstFabric.fabricIndex, 1);
            assert.equal(firstFabric.fabricId, 1);

            assert.equal(fakeServerStorage.get("FabricManager", "nextFabricIndex"), 2);

            const onOffValue = fakeServerStorage.get<{ value: any, version: number }>("Cluster-1-6", "onOff");
            assert.ok(typeof onOffValue === "object");
            assert.equal(onOffValue.version, 2);
            assert.equal(onOffValue.value, false);

            const storedServerResumptionRecords = fakeServerStorage.get("SessionManager", "resumptionRecords");
            assert.ok(Array.isArray(storedServerResumptionRecords));
            assert.equal(storedServerResumptionRecords.length, 1);

            assert.equal(fakeControllerStorage.get("RootCertificateManager", "rootCertId"), BigInt(0));
            assert.equal(fakeControllerStorage.get("MatterController", "fabricCommissioned"), true);

            const storedControllerResumptionRecords = fakeServerStorage.get("SessionManager", "resumptionRecords");
            assert.ok(Array.isArray(storedControllerResumptionRecords));
            assert.equal(storedControllerResumptionRecords.length, 1);

            const storedControllerFabrics = fakeControllerStorage.get("MatterController", "fabric");
            assert.ok(typeof storedControllerFabrics === "object");
        });
    });

    describe("remove Fabric", () => {
        it("try to remove invalid fabric", async () => {
            const operationalCredentialsCluster = pairableNode.getRootClusterClient(OperationalCredentialsCluster);
            assert.ok(operationalCredentialsCluster);
            operationalCredentialsCluster.bindToInteractionClient(await pairableNode.createInteractionClient());

            const result = await operationalCredentialsCluster.commands.removeFabric({ fabricIndex: new FabricIndex(250) });
            assert.equal(result.status, OperationalCertStatus.InvalidFabricIndex);
            assert.equal(result.fabricIndex, undefined);
            assert.equal(result.debugText, undefined);
        });

        it("read and remove fabric", async () => {
            const operationalCredentialsCluster = pairableNode.getRootClusterClient(OperationalCredentialsCluster);
            assert.ok(operationalCredentialsCluster);
            operationalCredentialsCluster.bindToInteractionClient(await pairableNode.createInteractionClient());

            const fabricIndex = await operationalCredentialsCluster.attributes.currentFabricIndex.get();
            assert.ok(fabricIndex);
            assert.equal(fabricIndex.index, 1);

            const result = await operationalCredentialsCluster.commands.removeFabric({ fabricIndex });
            assert.equal(result.status, OperationalCertStatus.Success);
            assert.equal(result.fabricIndex, undefined);
            assert.equal(result.debugText, undefined);
        });
    });

    afterAll(async () => {
        await matterServer.close();
        await matterClient.close();
        await fakeControllerStorage.close();
        await fakeServerStorage.close();
    });
});
