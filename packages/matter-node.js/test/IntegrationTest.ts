/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Time } from "../src/time/Time";
import { TimeFake } from "../src/time/TimeFake";

Time.get = () => new TimeFake(0);

import { Crypto } from "../src/crypto/Crypto";
import { CryptoNode } from "../src/crypto/CryptoNode";

Crypto.get = () => new CryptoNode();

import * as assert from "assert";
import { UdpInterface } from "../src/net/UdpInterface";
import { MatterController } from "../src/matter/MatterController";
import { MatterDevice } from "../src/matter/MatterDevice";
import {
    OnOffCluster, BasicInformationCluster, GeneralCommissioningCluster, RegulatoryLocationType, OperationalCertStatus,
    OperationalCredentialsCluster, VendorId, FabricIndex, DescriptorCluster, ClusterId, AccessControlCluster,
    GroupsCluster, GroupId,
} from "@project-chip/matter.js";
import { DEVICE } from "../src/matter/common/DeviceTypes";
import { ClusterServer, InteractionServer } from "../src/matter/interaction/InteractionServer";
import { MdnsBroadcaster } from "../src/matter/mdns/MdnsBroadcaster";
import { CaseServer } from "../src/matter/session/secure/CaseServer";
import { SecureChannelProtocol as SecureChannelProtocol } from "../src/matter/session/secure/SecureChannelProtocol";
import { PaseServer } from "../src/matter/session/secure/PaseServer";
import { NetworkFake } from "../src/net/fake/NetworkFake";
import { Network } from "../src/net/Network";
import { MdnsScanner } from "../src/matter/mdns/MdnsScanner";
import { GeneralCommissioningClusterHandler } from "../src/matter/cluster/server/GeneralCommissioningServer";
import { OperationalCredentialsClusterHandler } from "../src/matter/cluster/server/OperationalCredentialsServer";
import { ClusterClient } from "../src/matter/interaction/InteractionClient";
import { Level, Logger } from "../src/log/Logger";
import { getPromiseResolver } from "../src/util/Promises";
import { OnOffClusterHandler } from "../src/matter/cluster/server/OnOffServer";
import { AttestationCertificateManager } from "../src/matter/certificate/AttestationCertificateManager";
import { CertificationDeclarationManager } from "../src/matter/certificate/CertificationDeclarationManager";
import { StorageBackendMemory } from "../src/storage/StorageBackendMemory";
import { StorageManager } from "../src/storage/StorageManager";
import { FabricJsonObject } from "../src/matter/fabric/Fabric";
import { StatusResponseError } from "../src/matter/interaction/InteractionMessenger";
import { GroupsClusterHandler } from "../src/matter/cluster/server/GroupsServer";

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

describe("Integration", () => {
    let server: MatterDevice;
    let onOffServer: ClusterServer<any, any, any, any>;
    let client: MatterController;

    beforeAll(async () => {
        Logger.defaultLogLevel = Level.DEBUG;
        Time.get = () => fakeTime;
        Network.get = () => clientNetwork;

        const controllerStorageManager = new StorageManager(fakeControllerStorage);
        await controllerStorageManager.initialize();

        client = await MatterController.create(
            await MdnsScanner.create(CLIENT_IP),
            await UdpInterface.create(5540, "udp4", CLIENT_IP),
            await UdpInterface.create(5540, "udp6", CLIENT_IP),
            controllerStorageManager
        );

        Network.get = () => serverNetwork;

        const paa = new AttestationCertificateManager(vendorId);
        const { keyPair: dacKeyPair, dac } = paa.getDACert(productId)
        const certificationDeclaration = CertificationDeclarationManager.generate(vendorId, productId);

        onOffServer = new ClusterServer(
            OnOffCluster,
            { lightingLevelControl: false },
            { onOff: false },
            OnOffClusterHandler()
        );

        const serverStorageManager = new StorageManager(fakeServerStorage);
        await serverStorageManager.initialize();

        server = new MatterDevice(deviceName, deviceType, vendorId, productId, discriminator, serverStorageManager)
            .addNetInterface(await UdpInterface.create(matterPort, "udp6", SERVER_IP))
            .addBroadcaster(await MdnsBroadcaster.create(matterPort))
            .addProtocolHandler(new SecureChannelProtocol(
                await PaseServer.fromPin(setupPin, { iterations: 1000, salt: Crypto.get().getRandomData(32) }),
                new CaseServer(),
            ))
            .addProtocolHandler(new InteractionServer(serverStorageManager)
                .addEndpoint(0x00, DEVICE.ROOT, [
                    new ClusterServer(BasicInformationCluster, {}, {
                        dataModelRevision: 1,
                        vendorName,
                        vendorId,
                        productName,
                        productId,
                        nodeLabel: "",
                        hardwareVersion: 0,
                        hardwareVersionString: "0",
                        location: "US",
                        localConfigDisabled: false,
                        softwareVersion: 1,
                        softwareVersionString: "v1",
                        capabilityMinima: {
                            caseSessionsPerFabric: 100,
                            subscriptionsPerFabric: 100,
                        },
                    }, {}),
                    new ClusterServer(GeneralCommissioningCluster, {}, {
                        breadcrumb: BigInt(0),
                        basicCommissioningInfo: {
                            failSafeExpiryLengthSeconds: 60 /* 1min */,
                            maxCumulativeFailsafeSeconds: 60 * 60 /* 1h */,
                        },
                        regulatoryConfig: RegulatoryLocationType.Indoor,
                        locationCapability: RegulatoryLocationType.IndoorOutdoor,
                        supportsConcurrentConnections: true,
                    }, GeneralCommissioningClusterHandler),
                    new ClusterServer(OperationalCredentialsCluster, {}, {
                        nocs: [],
                        fabrics: [],
                        supportedFabrics: 254,
                        commissionedFabrics: 0,
                        trustedRootCertificates: [],
                        currentFabricIndex: FabricIndex.NO_FABRIC,
                    },
                        OperationalCredentialsClusterHandler({
                            devicePrivateKey: dacKeyPair.privateKey,
                            deviceCertificate: dac,
                            deviceIntermediateCertificate: paa.getPAICert(),
                            certificationDeclaration,
                        })),
                    new ClusterServer(AccessControlCluster,
                        {},
                        {
                            acl: [],
                            extension: [],
                            subjectsPerAccessControlEntry: 4,
                            targetsPerAccessControlEntry: 4,
                            accessControlEntriesPerFabric: 3
                        },
                        {},
                    ),
                    new ClusterServer(GroupsCluster, {
                        groupNames: true
                    }, {
                        nameSupport: { groupNames: true }
                    },
                        GroupsClusterHandler(0x00)),
                ])
                .addEndpoint(0x01, DEVICE.ON_OFF_LIGHT, [onOffServer])
            );
        await server.start();

        Network.get = () => { throw new Error("Network should not be requested post creation") };
    });

    describe("commission", () => {
        it("the client commissions a new device", async () => {
            const nodeId = await client.commission(SERVER_IP, matterPort, discriminator, setupPin);

            assert.equal(nodeId.id, client.getFabric().nodeId.id);
        }, 60 * 1000 /* 1mn timeout */);

        it("the session is resumed if it has been established previously", async () => {
            await client.connect(client.getFabric().nodeId);

            assert.ok(true);
        });
    });

    describe("read attributes", () => {
        it("read one specific attribute including schema parsing", async () => {
            const descriptorCluster = ClusterClient(await client.connect(client.getFabric().nodeId), 0, BasicInformationCluster);

            assert.equal(await descriptorCluster.getSoftwareVersionString(), "v1");
        });

        it("read all attributes", async () => {
            await (await client.connect(client.getFabric().nodeId)).getAllAttributes();

            assert.ok(true);
        });

        it("read multiple attributes", async () => {
            const response = await (await client.connect(client.getFabric().nodeId)).getMultipleAttributes([
                { clusterId: DescriptorCluster.id }, // */DescriptorCluster/*
                { endpointId: 0, clusterId: BasicInformationCluster.id }, // 0/BasicInformationCluster/*
                { endpointId: 1, clusterId: OnOffCluster.id, attributeId: OnOffCluster.attributes.onOff.id }, // 1/OnOffCluster/onOff
                { endpointId: 2 }, // 2/*/* - will be discarded in results!
            ]);

            assert.equal(response.length, 28);
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
                }, value: [new ClusterId(40), new ClusterId(48), new ClusterId(62), new ClusterId(31), new ClusterId(4), new ClusterId(29)], version: 1
            })

            assert.equal(response.filter(({
                path: {
                    endpointId,
                    clusterId
                }
            }) => endpointId === 0 && clusterId === BasicInformationCluster.id).length, 15);
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
                    attributeName: "softwareVersionString",
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
                    attributeName: "onOff",
                }, value: false, version: 0
            });

        });

    });

    describe("write attributes", () => {

        it("write one attribute", async () => {
            const descriptorCluster = ClusterClient(await client.connect(client.getFabric().nodeId), 0, BasicInformationCluster);

            await descriptorCluster.setNodeLabel("testLabel");

            assert.equal(await descriptorCluster.getNodeLabel(), "testLabel");
        });

        it("write one attribute with error", async () => {
            const descriptorCluster = ClusterClient(await client.connect(client.getFabric().nodeId), 0, BasicInformationCluster);

            await assert.rejects(async () => await descriptorCluster.setLocation("XXX"), new StatusResponseError("Error setting attribute 0/40/6", 135 /* StatusCode.ConstraintError */)); // TODO Replace with correct statuscode Enum
        });

        it("write multiple attributes", async () => {
            const interactionClient = await client.connect(client.getFabric().nodeId);

            const response = await interactionClient.setMultipleAttributes([
                { endpointId: 0, clusterId: BasicInformationCluster.id, attribute: BasicInformationCluster.attributes.nodeLabel, value: "testLabel2" },
                { endpointId: 0, clusterId: BasicInformationCluster.id, attribute: BasicInformationCluster.attributes.location, value: "GB" },
            ]);

            assert.equal(Array.isArray(response), true);
            assert.equal(response.length, 0);

            const descriptorCluster = ClusterClient(interactionClient, 0, BasicInformationCluster);
            assert.equal(await descriptorCluster.getNodeLabel(), "testLabel2");
            assert.equal(await descriptorCluster.getLocation(), "GB");
        });

        it("write multiple attributes with partial errors", async () => {
            const interactionClient = await client.connect(client.getFabric().nodeId);
            const descriptorCluster = ClusterClient(interactionClient, 0, BasicInformationCluster);

            const response = await interactionClient.setMultipleAttributes([
                { endpointId: 0, clusterId: BasicInformationCluster.id, attribute: BasicInformationCluster.attributes.nodeLabel, value: "testLabel3" },
                { endpointId: 0, clusterId: BasicInformationCluster.id, attribute: BasicInformationCluster.attributes.location, value: "XXX" },
            ]);

            assert.equal(response.length, 1);
            assert.equal(response[0].path.attributeId, BasicInformationCluster.attributes.location.id);
            assert.equal(response[0].status, 135 /* StatusCode.ConstraintError */);
            assert.equal(await descriptorCluster.getNodeLabel(), "testLabel3");
            assert.equal(await descriptorCluster.getLocation(), "GB");
        });

    });

    describe("subscribe attributes", () => {
        it("subscription of one attribute sends updates when the value changes", async () => {
            const interactionClient = await client.connect(client.getFabric().nodeId);
            const onOffClient = ClusterClient(interactionClient, 1, OnOffCluster);
            const startTime = Time.nowMs();

            // Await initial Data
            const { promise: firstPromise, resolver: firstResolver } = await getPromiseResolver<{ value: boolean, version: number, time: number }>();
            let callback = (value: boolean, version: number) => firstResolver({ value, version, time: Time.nowMs() });

            await onOffClient.subscribeOnOff((value, version) => callback(value, version), 0, 5);

            await fakeTime.advanceTime(0);
            const firstReport = await firstPromise;
            assert.deepEqual(firstReport, { value: false, version: 0, time: startTime });

            // Await update Report on value change
            const { promise: updatePromise, resolver: updateResolver } = await getPromiseResolver<{ value: boolean, version: number, time: number }>();
            callback = (value: boolean, version: number) => updateResolver({ value, version, time: Time.nowMs() });

            await fakeTime.advanceTime(2 * 1000);
            onOffServer.attributes.onOff.set(true);
            const updateReport = await updatePromise;

            assert.deepEqual(updateReport, { value: true, version: 1, time: startTime + 2 * 1000 });

            // Await update Report on value change without in between update
            const { promise: lastPromise, resolver: lastResolver } = await getPromiseResolver<{ value: boolean, version: number, time: number }>();
            callback = (value: boolean, version: number) => lastResolver({ value, version, time: Time.nowMs() });

            // Verify that no update comes in after max cycle time 1h
            await fakeTime.advanceTime(60 * 60 * 1000);

            // ... but on next change immediately then
            await fakeTime.advanceTime(2 * 1000);
            onOffServer.attributes.onOff.set(false);
            const lastReport = await lastPromise;

            assert.deepEqual(lastReport, { value: false, version: 2, time: startTime + (60 * 60 + 4) * 1000 });
        });
    });

    describe("Access Control server fabric scoped attribute storage", () => {
        it("set empty acl", async () => {
            console.log("SET ACL");
            const accessControlCluster = ClusterClient(await client.connect(client.getFabric().nodeId), 0, AccessControlCluster);
            await accessControlCluster.setAcl([]);

            const acl = await accessControlCluster.getAcl();
            assert.ok(Array.isArray(acl));
            assert.equal(acl.length, 0);
        });
    });

    describe("Groups server fabric scoped storage", () => {
        it("set a group name", async () => {
            const groupsCluster = ClusterClient(await client.connect(client.getFabric().nodeId), 0, GroupsCluster);
            await groupsCluster.addGroup({ groupId: new GroupId(1), groupName: "Group 1" });
        });
    });

    describe("storage", () => {
        it("server storage has fabric fields stored correctly stringified", async () => {
            // TODO: In fact testing wrong because the storage mixed server and client keys, will get issues for more fancy tests
            const storedFabrics = fakeServerStorage.get("FabricManager", "fabrics");
            assert.ok(Array.isArray(storedFabrics));
            assert.equal(storedFabrics.length, 1);
            const firstFabric = storedFabrics[0] as FabricJsonObject;
            assert.equal(typeof firstFabric, "object");
            assert.equal(firstFabric.fabricIndex, 1);
            assert.equal(firstFabric.fabricId, 1);
            assert.ok(firstFabric.scopedClusterData);
            assert.equal(firstFabric.scopedClusterData.size, 1);
            const groupsClusterEndpointMap = firstFabric.scopedClusterData.get(GroupsCluster.id);
            assert.ok(groupsClusterEndpointMap);
            assert.equal(groupsClusterEndpointMap.size, 1);
            const groupsClusterData = groupsClusterEndpointMap.get("0");
            assert.ok(groupsClusterData instanceof Map);
            assert.equal(groupsClusterData.get(1), "Group 1");

            assert.equal(fakeServerStorage.get("FabricManager", "nextFabricIndex"), 2);

            const onoffValue = fakeServerStorage.get<{ value: any, version: number }>("Cluster-1-6", "onOff");
            assert.ok(typeof onoffValue === "object");
            assert.equal(onoffValue.version, 2);
            assert.equal(onoffValue.value, false);

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
            const operationalCredentialsCluster = ClusterClient(await client.connect(client.getFabric().nodeId), 0, OperationalCredentialsCluster);

            const result = await operationalCredentialsCluster.removeFabric({ fabricIndex: new FabricIndex(250) });
            assert.equal(result.status, OperationalCertStatus.InvalidFabricIndex);
            assert.equal(result.fabricIndex, undefined);
            assert.equal(result.debugText, undefined);
        });

        it("read and remove fabric", async () => {
            const operationalCredentialsCluster = ClusterClient(await client.connect(client.getFabric().nodeId), 0, OperationalCredentialsCluster);

            const fabricIndex = await operationalCredentialsCluster.getCurrentFabricIndex();
            assert.equal(fabricIndex.index, 1);

            const result = await operationalCredentialsCluster.removeFabric({ fabricIndex });
            assert.equal(result.status, OperationalCertStatus.Success);
            assert.equal(result.fabricIndex, undefined);
            assert.equal(result.debugText, undefined);
        });
    });

    afterAll(async () => {
        await server.stop();
        client.close();
        await fakeControllerStorage.close();
        await fakeServerStorage.close();
    });
});
