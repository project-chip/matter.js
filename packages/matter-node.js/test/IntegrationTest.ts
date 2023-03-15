/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import assert from "assert";

import { Time } from "../src/time/Time";
import { TimeFake } from "../src/time/TimeFake";
import { UdpInterface } from "../src/net/UdpInterface";
import { MatterController } from "../src/matter/MatterController";
import { Crypto } from "../src/crypto/Crypto";
import { DEVICE } from "../src/matter/common/DeviceTypes";
import { ClusterServer, InteractionServer } from "../src/matter/interaction/InteractionServer";
import { MdnsBroadcaster } from "../src/matter/mdns/MdnsBroadcaster";
import { MatterDevice } from "../src/matter/MatterDevice";
import { CaseServer } from "../src/matter/session/secure/CaseServer";
import { SecureChannelProtocol as SecureChannelProtocol } from "../src/matter/session/secure/SecureChannelProtocol";
import { PaseServer } from "../src/matter/session/secure/PaseServer";
import { NetworkFake } from "../src/net/fake/NetworkFake";
import { Network } from "../src/net/Network";
import { MdnsScanner } from "../src/matter/mdns/MdnsScanner";
import { OnOffCluster } from "../src/matter/cluster/OnOffCluster";
import { BasicInformationCluster } from "../src/matter/cluster/BasicInformationCluster";
import { GeneralCommissioningCluster, RegulatoryLocationType } from "../src/matter/cluster/GeneralCommissioningCluster";
import {
    OperationalCertStatus,
    OperationalCredentialsCluster
} from "../src/matter/cluster/OperationalCredentialsCluster";
import { GeneralCommissioningClusterHandler } from "../src/matter/cluster/server/GeneralCommissioningServer";
import { OperationalCredentialsClusterHandler } from "../src/matter/cluster/server/OperationalCredentialsServer";
import { ClusterClient } from "../src/matter/interaction/InteractionClient";
import { Level, Logger } from "../src/log/Logger";
import { getPromiseResolver } from "../src/util/Promises";
import { VendorId } from "../src/matter/common/VendorId";
import { NodeId } from "../src/matter/common/NodeId";
import { OnOffClusterHandler } from "../src/matter/cluster/server/OnOffServer";
import { ByteArray } from "@project-chip/matter.js";
import { FabricIndex } from "../src/matter/common/FabricIndex";
import { DescriptorCluster } from "../src/matter/cluster/DescriptorCluster";
import {AttestationCertificateManager} from "../src/matter/certificate/AttestationCertificateManager";
import {CertificationDeclarationManager} from "../src/matter/certificate/CertificationDeclarationManager";

const SERVER_IP = "192.168.200.1";
const SERVER_MAC = "00:B0:D0:63:C2:26";
const CLIENT_IP = "192.168.200.2";
const CLIENT_MAC = "CA:FE:00:00:BE:EF";

const serverNetwork = new NetworkFake(SERVER_MAC, [SERVER_IP]);
const clientNetwork = new NetworkFake(CLIENT_MAC, [CLIENT_IP]);

const deviceName = "Matter end-to-end device";
const deviceType = 257 /* Dimmable bulb */;
const vendorName = "node-matter";
const vendorId = new VendorId(0xFFF1);
const productName = "Matter end-to-end device";
const productId = 0X8001;
const discriminator = 3840;
const setupPin = 20202021;
const matterPort = 5540;

const TIME_START = 1666663000000;
const fakeTime = new TimeFake(TIME_START);

describe("Integration", () => {
    var server: MatterDevice;
    var onOffServer: ClusterServer<any, any, any, any>;
    var client: MatterController;

    before(async () => {
        Logger.defaultLogLevel = Level.DEBUG;
        Time.get = () => fakeTime;
        Network.get = () => clientNetwork;
        client = await MatterController.create(
            await MdnsScanner.create(CLIENT_IP),
            await UdpInterface.create(5540, "udp4", CLIENT_IP),
            await UdpInterface.create(5540, "udp6", CLIENT_IP),
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
        server = new MatterDevice(deviceName, deviceType, vendorId, productId, discriminator)
            .addNetInterface(await UdpInterface.create(matterPort, "udp6", SERVER_IP))
            .addBroadcaster(await MdnsBroadcaster.create())
            .addProtocolHandler(new SecureChannelProtocol(
                    await PaseServer.fromPin(setupPin, { iterations: 1000, salt: Crypto.getRandomData(32) }),
                    new CaseServer(),
                ))
            .addProtocolHandler(new InteractionServer()
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
                        commissioningInfo: {
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
                ])
                .addEndpoint(0x01, DEVICE.ON_OFF_LIGHT, [ onOffServer ])
            );
        server.start();

        Network.get = () => { throw new Error("Network should not be requested post creation") };
    });

    context("commission", () => {
        it("the client commissions a new device", async () => {
            const nodeId = await client.commission(SERVER_IP, matterPort, discriminator, setupPin);

            assert.equal(nodeId.id, BigInt(1));
        });

        it("the session is resumed if it has been established previously", async () => {
            await client.connect(new NodeId(BigInt(1)));

            assert.ok(true);
        });
    });


    context("attributes", () => {
        it("get one specific attribute including schema parsing", async () => {
            const descriptorCluster = ClusterClient(await client.connect(new NodeId(BigInt(1))), 0, BasicInformationCluster);

            assert.equal(await descriptorCluster.getSoftwareVersionString(), "v1");
        });

        it("get all attributes", async () => {
            await (await client.connect(new NodeId(BigInt(1)))).getAllAttributes();

            assert.ok(true);
        });
    });

    context("subscription", () => {
        it("subscription sends updates when the value changes", async () => {
            const interactionClient = await client.connect(new NodeId(BigInt(1)));
            const onOffClient = ClusterClient(interactionClient, 1, OnOffCluster);
            const startTime = Time.nowMs();

            // Await initial Datareport
            const { promise: firstPromise, resolver: firstResolver } = await getPromiseResolver<{value: boolean, version: number, time: number}>();
            let callback = (value: boolean, version: number) => firstResolver({ value, version, time: Time.nowMs() });

            await onOffClient.subscribeOnOff((value, version) => callback(value, version), 0, 5);

            await fakeTime.advanceTime(0);
            const firstReport = await firstPromise;
            assert.deepEqual(firstReport, { value: false, version: 0, time: startTime});

            // Await update Report on value change
            const { promise: updatePromise, resolver: updateResolver } = await getPromiseResolver<{value: boolean, version: number, time: number}>();
            callback = (value: boolean, version: number) => updateResolver({ value, version, time: Time.nowMs() });

            await fakeTime.advanceTime(2 * 1000);
            onOffServer.attributes.onOff.set(true);
            const updateReport = await updatePromise;

            assert.deepEqual(updateReport, { value: true, version: 1, time: startTime + 2 * 1000});

            // Await update Report on value change without in between update
            const { promise: lastPromise, resolver: lastResolver } = await getPromiseResolver<{value: boolean, version: number, time: number}>();
            callback = (value: boolean, version: number) => lastResolver({ value, version, time: Time.nowMs() });

            // Verify that no update comes in after max cycle time 1h
            await fakeTime.advanceTime(60 * 60 * 1000);

            // ... but on next change immediately then
            await fakeTime.advanceTime(2 * 1000);
            onOffServer.attributes.onOff.set(false);
            const lastReport = await lastPromise;

            assert.deepEqual(lastReport, { value: false, version: 2, time: startTime + (60 * 60 + 4) * 1000});
        });
    });

    context("remove Fabric", () => {
        it("try to remove invalid fabric", async () => {
            const operationalCredentialsCluster = ClusterClient(await client.connect(new NodeId(BigInt(1))), 0, OperationalCredentialsCluster);

            const result = await operationalCredentialsCluster.removeFabric({ fabricIndex: new FabricIndex(250) });
            assert.equal(result.status, OperationalCertStatus.InvalidFabricIndex);
            assert.equal(result.fabricIndex, undefined);
            assert.equal(result.debugText, undefined);
        });

        it("read and remove fabric", async () => {
            const operationalCredentialsCluster = ClusterClient(await client.connect(new NodeId(BigInt(1))), 0, OperationalCredentialsCluster);

            const fabricIndex = await operationalCredentialsCluster.getCurrentFabricIndex();
            assert.equal(fabricIndex.index, 1);

            const result = await operationalCredentialsCluster.removeFabric({ fabricIndex });
            assert.equal(result.status, OperationalCertStatus.Success);
            assert.equal(result.fabricIndex, undefined);
            assert.equal(result.debugText, undefined);
        });
    });

    after(() => {
        server.stop();
        client.close();
    });
});
