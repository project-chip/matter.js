/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DnsCodec, DnsMessageType } from "../../src/codec/DnsCodec.js";
import { NodeId } from "../../src/datatype/NodeId.js";
import { VendorId } from "../../src/datatype/VendorId.js";
import { Fabric } from "../../src/fabric/Fabric.js";
import { MdnsBroadcaster } from "../../src/mdns/MdnsBroadcaster.js";
import { MdnsScanner } from "../../src/mdns/MdnsScanner.js";
import { NetworkFake } from "../../src/net/fake/NetworkFake.js";
import { FAKE_INTERFACE_NAME } from "../../src/net/fake/SimulatedNetwork.js";
import { UdpChannelFake } from "../../src/net/fake/UdpChannelFake.js";
import { Network } from "../../src/net/Network.js";
import { UdpChannel } from "../../src/net/UdpChannel.js";
import { ByteArray } from "../../src/util/ByteArray.js";
import { createPromise } from "../../src/util/Promises.js";

const SERVER_IPv4 = "192.168.200.1";
const SERVER_IPv6 = "fe80::e777:4f5e:c61e:7314";
const SERVER_MAC = "00:B0:D0:63:C2:26";
const CLIENT_IPv4 = "192.168.200.2";
const CLIENT_IPv6 = "fe80::e777:4f5e:c61e:7315";
const CLIENT_MAC = "CA:FE:00:00:BE:EF";
const PORT = 5540;
const PORT2 = 5541;
const PORT3 = 5542;

const OPERATIONAL_ID = ByteArray.fromHex("0000000000000018");
const NODE_ID = NodeId(BigInt(1));

[false, true].forEach(testIpv4Enabled => {
    const serverIps = testIpv4Enabled ? [SERVER_IPv4, SERVER_IPv6] : [SERVER_IPv6];
    const clientIps = testIpv4Enabled ? [CLIENT_IPv4] : [CLIENT_IPv6];
    const serverNetwork = new NetworkFake(SERVER_MAC, serverIps);
    const clientNetwork = new NetworkFake(CLIENT_MAC, clientIps);

    const IPDnsRecords = [
        {
            name: "00B0D063C2260000.local",
            recordType: 28,
            recordClass: 1,
            ttl: 120,
            value: "fe80::e777:4f5e:c61e:7314",
        },
    ];
    if (testIpv4Enabled) {
        IPDnsRecords.unshift({
            name: "00B0D063C2260000.local",
            recordType: 1,
            recordClass: 1,
            ttl: 120,
            value: "192.168.200.1",
        });
    }

    const IPIntegrationResultsPort1 = [{ ip: `${SERVER_IPv6}%fakeInterface`, port: PORT, type: "udp" }];
    const IPIntegrationResultsPort2 = [{ ip: `${SERVER_IPv6}%fakeInterface`, port: PORT2, type: "udp" }];
    if (testIpv4Enabled) {
        IPIntegrationResultsPort1.push({ ip: SERVER_IPv4, port: PORT, type: "udp" });
        IPIntegrationResultsPort2.push({ ip: SERVER_IPv4, port: PORT2, type: "udp" });
    }

    describe(`MDNS Scanner and Broadcaster ${testIpv4Enabled ? "with" : "without"} IPv4`, () => {
        let broadcaster: MdnsBroadcaster;
        let scanner: MdnsScanner;
        let scannerChannel: UdpChannel;
        let broadcasterChannel: UdpChannel;

        beforeEach(async () => {
            Network.get = () => clientNetwork;
            scanner = await MdnsScanner.create({ enableIpv4: testIpv4Enabled, netInterface: FAKE_INTERFACE_NAME });
            scannerChannel = await UdpChannelFake.create(serverNetwork, {
                listeningPort: 5353,
                listeningAddress: testIpv4Enabled ? "224.0.0.251" : "ff02::fb",
                type: testIpv4Enabled ? "udp4" : "udp6",
            });

            Network.get = () => serverNetwork;
            broadcaster = await MdnsBroadcaster.create({
                enableIpv4: testIpv4Enabled,
                multicastInterface: FAKE_INTERFACE_NAME,
            });
            broadcasterChannel = await UdpChannelFake.create(clientNetwork, {
                listeningPort: 5353,
                listeningAddress: testIpv4Enabled ? "224.0.0.251" : "ff02::fb",
                type: testIpv4Enabled ? "udp4" : "udp6",
            });

            Network.get = () => {
                throw new Error("Network should not be requested post creation");
            };
        });

        afterEach(async () => {
            await broadcaster.close();
            await scanner.close();
            scannerChannel.close();
        });

        describe("broadcaster", () => {
            it("it broadcasts the device fabric on one port", async () => {
                const { promise, resolver } = createPromise<ByteArray>();
                scannerChannel.onData((_netInterface, _peerAddress, _peerPort, data) => resolver(data));

                await broadcaster.setFabrics(PORT, [{ operationalId: OPERATIONAL_ID, nodeId: NODE_ID } as Fabric], {
                    sleepIdleInterval: 100,
                    sleepActiveInterval: 200,
                });
                await broadcaster.announce(PORT);

                const result = DnsCodec.decode(await promise);

                expect(result).deep.equal({
                    transactionId: 0,
                    messageType: 33792,
                    queries: [],
                    answers: [
                        {
                            name: "_services._dns-sd._udp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 120,
                            value: "_matter._tcp.local",
                        },
                        {
                            name: "_services._dns-sd._udp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 120,
                            value: "_I0000000000000018._sub._matter._tcp.local",
                        },
                        {
                            name: "_matter._tcp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 120,
                            value: "0000000000000018-0000000000000001._matter._tcp.local",
                        },
                        {
                            name: "_I0000000000000018._sub._matter._tcp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 120,
                            value: "0000000000000018-0000000000000001._matter._tcp.local",
                        },
                    ],
                    authorities: [],
                    additionalRecords: [
                        {
                            name: "0000000000000018-0000000000000001._matter._tcp.local",
                            recordType: 33,
                            recordClass: 1,
                            ttl: 120,
                            value: { priority: 0, weight: 0, port: PORT, target: "00B0D063C2260000.local" },
                        },
                        {
                            name: "0000000000000018-0000000000000001._matter._tcp.local",
                            recordType: 16,
                            recordClass: 1,
                            ttl: 120,
                            value: ["SII=100", "SAI=200", "T=0"],
                        },
                        ...IPDnsRecords,
                    ],
                });
            });

            it("it broadcasts the device commissionable info on one port", async () => {
                const { promise, resolver } = createPromise<ByteArray>();
                scannerChannel.onData((_netInterface, _peerAddress, _peerPort, data) => resolver(data));

                await broadcaster.setCommissionMode(PORT, 1, {
                    deviceName: "Test Device",
                    deviceType: 1,
                    vendorId: VendorId(1),
                    productId: 0x8000,
                    discriminator: 1234,
                });
                await broadcaster.announce(PORT);

                const result = DnsCodec.decode(await promise);

                expect(result).deep.equal({
                    additionalRecords: [
                        {
                            name: "0000000000000000._matterc._udp.local",
                            recordClass: 1,
                            recordType: 33,
                            ttl: 120,
                            value: { port: PORT, priority: 0, target: "00B0D063C2260000.local", weight: 0 },
                        },
                        {
                            name: "0000000000000000._matterc._udp.local",
                            recordClass: 1,
                            recordType: 16,
                            ttl: 120,
                            value: [
                                "VP=1+32768",
                                "DT=1",
                                "DN=Test Device",
                                "SII=5000",
                                "SAI=300",
                                "T=0",
                                "D=1234",
                                "CM=1",
                                "PH=33",
                                "PI=",
                            ],
                        },
                        ...IPDnsRecords,
                    ],
                    answers: [
                        {
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_matterc._udp.local",
                        },
                        {
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_V1._sub._matterc._udp.local",
                        },
                        {
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_T1._sub._matterc._udp.local",
                        },
                        {
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_S4._sub._matterc._udp.local",
                        },
                        {
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_L1234._sub._matterc._udp.local",
                        },
                        {
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_CM._sub._matterc._udp.local",
                        },
                        {
                            name: "_matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterc._udp.local",
                        },
                        {
                            name: "_V1._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterc._udp.local",
                        },
                        {
                            name: "_T1._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterc._udp.local",
                        },
                        {
                            name: "_S4._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterc._udp.local",
                        },
                        {
                            name: "_L1234._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterc._udp.local",
                        },
                        {
                            name: "_CM._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterc._udp.local",
                        },
                    ],
                    authorities: [],
                    messageType: 33792,
                    queries: [],
                    transactionId: 0,
                });
            });

            it("it broadcasts the controller commissioner on one port", async () => {
                const { promise, resolver } = createPromise<ByteArray>();
                scannerChannel.onData((_netInterface, _peerAddress, _peerPort, data) => resolver(data));

                await broadcaster.setCommissionerInfo(PORT, {
                    deviceName: "Test Commissioner",
                    deviceType: 1,
                    vendorId: VendorId(1),
                    productId: 0x8000,
                });
                await broadcaster.announce(PORT);

                const result = DnsCodec.decode(await promise);

                expect(result).deep.equal({
                    additionalRecords: [
                        {
                            name: "0000000000000000._matterd._udp.local",
                            recordClass: 1,
                            recordType: 33,
                            ttl: 120,
                            value: { port: PORT, priority: 0, target: "00B0D063C2260000.local", weight: 0 },
                        },
                        {
                            name: "0000000000000000._matterd._udp.local",
                            recordClass: 1,
                            recordType: 16,
                            ttl: 120,
                            value: ["VP=1+32768", "DT=1", "DN=Test Commissioner", "SII=5000", "SAI=300", "T=0"],
                        },
                        ...IPDnsRecords,
                    ],
                    answers: [
                        {
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_matterd._udp.local",
                        },
                        {
                            name: "_matterd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_V1._sub._matterd._udp.local",
                        },
                        {
                            name: "_V1._sub._matterd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterd._udp.local",
                        },
                        {
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_T1._sub._matterd._udp.local",
                        },
                        {
                            name: "_T1._sub._matterd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterd._udp.local",
                        },
                    ],
                    authorities: [],
                    messageType: 33792,
                    queries: [],
                    transactionId: 0,
                });
            });

            it("it allows announcements of multiple devices on different ports", async () => {
                const { promise, resolver } = createPromise<void>();
                const dataArr: ByteArray[] = [];
                scannerChannel.onData((_netInterface, _peerAddress, _peerPort, data) => {
                    dataArr.push(data);
                    if (dataArr.length === 3) resolver();
                });

                await broadcaster.setFabrics(PORT, [{ operationalId: OPERATIONAL_ID, nodeId: NODE_ID } as Fabric]);
                await broadcaster.setCommissionMode(PORT2, 1, {
                    deviceName: "Test Device",
                    deviceType: 1,
                    vendorId: VendorId(1),
                    productId: 0x8000,
                    discriminator: 1234,
                });
                await broadcaster.setCommissionerInfo(PORT3, {
                    deviceName: "Test Commissioner",
                    deviceType: 1,
                    vendorId: VendorId(1),
                    productId: 0x8000,
                });
                await broadcaster.announce(PORT);
                await broadcaster.announce(PORT2);
                await broadcaster.announce(PORT3);

                await promise;

                const result1 = DnsCodec.decode(dataArr[0]);
                expect(result1).deep.equal({
                    transactionId: 0,
                    messageType: 33792,
                    queries: [],
                    answers: [
                        {
                            name: "_services._dns-sd._udp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 120,
                            value: "_matter._tcp.local",
                        },
                        {
                            name: "_services._dns-sd._udp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 120,
                            value: "_I0000000000000018._sub._matter._tcp.local",
                        },
                        {
                            name: "_matter._tcp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 120,
                            value: "0000000000000018-0000000000000001._matter._tcp.local",
                        },
                        {
                            name: "_I0000000000000018._sub._matter._tcp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 120,
                            value: "0000000000000018-0000000000000001._matter._tcp.local",
                        },
                    ],
                    authorities: [],
                    additionalRecords: [
                        {
                            name: "0000000000000018-0000000000000001._matter._tcp.local",
                            recordType: 33,
                            recordClass: 1,
                            ttl: 120,
                            value: { priority: 0, weight: 0, port: PORT, target: "00B0D063C2260000.local" },
                        },
                        {
                            name: "0000000000000018-0000000000000001._matter._tcp.local",
                            recordType: 16,
                            recordClass: 1,
                            ttl: 120,
                            value: ["SII=5000", "SAI=300", "T=0"],
                        },
                        ...IPDnsRecords,
                    ],
                });

                const result2 = DnsCodec.decode(dataArr[1]);
                expect(result2).deep.equal({
                    additionalRecords: [
                        {
                            name: "0000000000000000._matterc._udp.local",
                            recordClass: 1,
                            recordType: 33,
                            ttl: 120,
                            value: { port: PORT2, priority: 0, target: "00B0D063C2260000.local", weight: 0 },
                        },
                        {
                            name: "0000000000000000._matterc._udp.local",
                            recordClass: 1,
                            recordType: 16,
                            ttl: 120,
                            value: [
                                "VP=1+32768",
                                "DT=1",
                                "DN=Test Device",
                                "SII=5000",
                                "SAI=300",
                                "T=0",
                                "D=1234",
                                "CM=1",
                                "PH=33",
                                "PI=",
                            ],
                        },
                        ...IPDnsRecords,
                    ],
                    answers: [
                        {
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_matterc._udp.local",
                        },
                        {
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_V1._sub._matterc._udp.local",
                        },
                        {
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_T1._sub._matterc._udp.local",
                        },
                        {
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_S4._sub._matterc._udp.local",
                        },
                        {
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_L1234._sub._matterc._udp.local",
                        },
                        {
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_CM._sub._matterc._udp.local",
                        },
                        {
                            name: "_matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterc._udp.local",
                        },
                        {
                            name: "_V1._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterc._udp.local",
                        },
                        {
                            name: "_T1._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterc._udp.local",
                        },
                        {
                            name: "_S4._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterc._udp.local",
                        },
                        {
                            name: "_L1234._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterc._udp.local",
                        },
                        {
                            name: "_CM._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterc._udp.local",
                        },
                    ],
                    authorities: [],
                    messageType: 33792,
                    queries: [],
                    transactionId: 0,
                });

                const result3 = DnsCodec.decode(dataArr[2]);
                expect(result3).deep.equal({
                    additionalRecords: [
                        {
                            name: "0000000000000000._matterd._udp.local",
                            recordClass: 1,
                            recordType: 33,
                            ttl: 120,
                            value: { port: PORT3, priority: 0, target: "00B0D063C2260000.local", weight: 0 },
                        },
                        {
                            name: "0000000000000000._matterd._udp.local",
                            recordClass: 1,
                            recordType: 16,
                            ttl: 120,
                            value: ["VP=1+32768", "DT=1", "DN=Test Commissioner", "SII=5000", "SAI=300", "T=0"],
                        },
                        ...IPDnsRecords,
                    ],
                    answers: [
                        {
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_matterd._udp.local",
                        },
                        {
                            name: "_matterd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_V1._sub._matterd._udp.local",
                        },
                        {
                            name: "_V1._sub._matterd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterd._udp.local",
                        },
                        {
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_T1._sub._matterd._udp.local",
                        },
                        {
                            name: "_T1._sub._matterd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterd._udp.local",
                        },
                    ],
                    authorities: [],
                    messageType: 33792,
                    queries: [],
                    transactionId: 0,
                });
            });
        });

        describe("integration", () => {
            it("the client directly returns server record if it has been announced before", async () => {
                let queryReceived = false;
                let dataWereSent = false;
                scannerChannel.onData((_netInterface, _peerAddress, _peerPort, data) => {
                    dataWereSent = true;
                    const dataDecoded = DnsCodec.decode(data);
                    if (dataDecoded?.messageType === DnsMessageType.Query) {
                        queryReceived = true;
                    }
                });
                await broadcaster.setFabrics(PORT, [{ operationalId: OPERATIONAL_ID, nodeId: NODE_ID } as Fabric]);
                await broadcaster.announce(PORT);

                await MockTime.yield3(); // Make sure data were broadcasted async
                await MockTime.yield3(); // Make sure data were received and processed async

                const result = await scanner.findOperationalDevice(
                    { operationalId: OPERATIONAL_ID } as Fabric,
                    NODE_ID,
                    1,
                );

                expect(dataWereSent).equal(true);
                expect(queryReceived).equal(false);
                expect(result).deep.equal(IPIntegrationResultsPort1);
            });

            it("the client queries the server record if it has not been announced before", async () => {
                const sentData = new Array<ByteArray>();
                scannerChannel.onData((_netInterface, _peerAddress, _peerPort, data) => sentData.push(data));

                await broadcaster.setFabrics(PORT, [{ operationalId: OPERATIONAL_ID, nodeId: NODE_ID } as Fabric]);

                const findPromise = scanner.findOperationalDevice({ operationalId: OPERATIONAL_ID } as Fabric, NODE_ID);

                await MockTime.yield3(); // make sure responding promise is created
                await MockTime.advance(1); // Trigger timer to send query (0ms timer)
                await MockTime.yield3(); // make sure responding promise is created

                expect(DnsCodec.decode(sentData[0])).deep.equal({
                    additionalRecords: [],
                    answers: [],
                    authorities: [],
                    messageType: 0,
                    queries: [
                        {
                            name: "0000000000000018-0000000000000001._matter._tcp.local",
                            recordClass: 1,
                            recordType: 33,
                        },
                    ],
                    transactionId: 0,
                });

                const result = await findPromise;

                expect(result).deep.equal(IPIntegrationResultsPort1);
            });

            it("the client queries the server record and get correct response also with multiple announced instances", async () => {
                const netData = new Array<ByteArray>();
                broadcasterChannel.onData((_netInterface, _peerAddress, _peerPort, data) => {
                    netData.push(data);
                });

                await broadcaster.setCommissionMode(PORT, 1, {
                    deviceName: "Test Device",
                    deviceType: 1,
                    vendorId: VendorId(1),
                    productId: 0x8000,
                    discriminator: 1234,
                });
                await broadcaster.setFabrics(PORT2, [{ operationalId: OPERATIONAL_ID, nodeId: NODE_ID } as Fabric]);

                const findPromise = scanner.findOperationalDevice({ operationalId: OPERATIONAL_ID } as Fabric, NODE_ID);

                await MockTime.yield3(); // make sure responding promise is created
                await MockTime.advance(1); // Trigger timer to send query (0ms timer)
                await MockTime.yield3(); // Make sure data were queried async

                expect(netData.length).equal(testIpv4Enabled ? 3 : 2);

                const query = DnsCodec.decode(netData[0]);
                expect(query).deep.equal({
                    additionalRecords: [],
                    answers: [],
                    authorities: [],
                    messageType: 0,
                    queries: [
                        {
                            name: "0000000000000018-0000000000000001._matter._tcp.local",
                            recordClass: 1,
                            recordType: 33,
                        },
                    ],
                    transactionId: 0,
                });
                const response2 = DnsCodec.decode(netData[1]);
                expect(response2).deep.equal({
                    additionalRecords: [
                        {
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_matter._tcp.local",
                        },
                        {
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_I0000000000000018._sub._matter._tcp.local",
                        },
                        {
                            name: "_matter._tcp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000018-0000000000000001._matter._tcp.local",
                        },
                        {
                            name: "_I0000000000000018._sub._matter._tcp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000018-0000000000000001._matter._tcp.local",
                        },
                        {
                            name: "0000000000000018-0000000000000001._matter._tcp.local",
                            recordClass: 1,
                            recordType: 16,
                            ttl: 120,
                            value: ["SII=5000", "SAI=300", "T=0"],
                        },
                        ...IPDnsRecords,
                    ],
                    answers: [
                        {
                            name: "0000000000000018-0000000000000001._matter._tcp.local",
                            recordClass: 1,
                            recordType: 33,
                            ttl: 120,
                            value: { port: PORT2, priority: 0, target: "00B0D063C2260000.local", weight: 0 },
                        },
                    ],
                    authorities: [],
                    messageType: 33792,
                    queries: [],
                    transactionId: 0,
                });

                if (testIpv4Enabled) {
                    const response = DnsCodec.decode(netData[2]);
                    expect(response).deep.equal({
                        additionalRecords: [
                            {
                                name: "_services._dns-sd._udp.local",
                                recordClass: 1,
                                recordType: 12,
                                ttl: 120,
                                value: "_matter._tcp.local",
                            },
                            {
                                name: "_services._dns-sd._udp.local",
                                recordClass: 1,
                                recordType: 12,
                                ttl: 120,
                                value: "_I0000000000000018._sub._matter._tcp.local",
                            },
                            {
                                name: "_matter._tcp.local",
                                recordClass: 1,
                                recordType: 12,
                                ttl: 120,
                                value: "0000000000000018-0000000000000001._matter._tcp.local",
                            },
                            {
                                name: "_I0000000000000018._sub._matter._tcp.local",
                                recordClass: 1,
                                recordType: 12,
                                ttl: 120,
                                value: "0000000000000018-0000000000000001._matter._tcp.local",
                            },
                            {
                                name: "0000000000000018-0000000000000001._matter._tcp.local",
                                recordClass: 1,
                                recordType: 16,
                                ttl: 120,
                                value: ["SII=5000", "SAI=300", "T=0"],
                            },
                            ...IPDnsRecords,
                        ],
                        answers: [
                            {
                                name: "0000000000000018-0000000000000001._matter._tcp.local",
                                recordClass: 1,
                                recordType: 33,
                                ttl: 120,
                                value: { port: PORT2, priority: 0, target: "00B0D063C2260000.local", weight: 0 },
                            },
                        ],
                        authorities: [],
                        messageType: 33792,
                        queries: [],
                        transactionId: 0,
                    });
                }
                const result = await findPromise;

                expect(result).deep.equal(IPIntegrationResultsPort2);
            });

            it("the client queries the server record and get correct response when announced before", async () => {
                let dataWereSent = false;
                let queryReceived = false;
                scannerChannel.onData((_netInterface, _peerAddress, _peerPort, data) => {
                    dataWereSent = true;
                    const dataDecoded = DnsCodec.decode(data);
                    if (dataDecoded?.messageType === DnsMessageType.Query) {
                        queryReceived = true;
                    }
                });

                await broadcaster.setCommissionMode(PORT, 1, {
                    deviceName: "Test Device",
                    deviceType: 1,
                    vendorId: VendorId(1),
                    productId: 0x8000,
                    discriminator: 1234,
                });
                await broadcaster.setFabrics(PORT2, [{ operationalId: OPERATIONAL_ID, nodeId: NODE_ID } as Fabric]);

                await broadcaster.announce(PORT);
                await broadcaster.announce(PORT2);

                await MockTime.yield3();
                await MockTime.yield3();

                const result = await scanner.findOperationalDevice(
                    { operationalId: OPERATIONAL_ID } as Fabric,
                    NODE_ID,
                );

                expect(dataWereSent).equal(true);
                expect(queryReceived).equal(false);
                expect(result).deep.equal(IPIntegrationResultsPort2);
            });
        });
    });
});
