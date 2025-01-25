/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Fabric } from "#fabric/Fabric.js";
import {
    Bytes,
    createPromise,
    DnsCodec,
    DnsMessageType,
    MockNetwork,
    MockUdpChannel,
    Network,
    NetworkSimulator,
    UdpChannel,
} from "#general";
import { MdnsBroadcaster } from "#mdns/MdnsBroadcaster.js";
import { MdnsScanner } from "#mdns/MdnsScanner.js";
import { NodeId, VendorId } from "#types";

const SERVER_IPv4 = "192.168.200.1";
const SERVER_IPv6 = "fe80::e777:4f5e:c61e:7314";
const SERVER_MAC = "00:B0:D0:63:C2:26";
const CLIENT_IPv4 = "192.168.200.2";
const CLIENT_IPv6 = "fe80::e777:4f5e:c61e:7315";
const CLIENT_MAC = "CA:FE:00:00:BE:EF";
const PORT = 5540;
const PORT2 = 5541;
const PORT3 = 5542;

const OPERATIONAL_ID = Bytes.fromHex("0000000000000018");
const NODE_ID = NodeId(BigInt(1));

[
    { serverHasIpv4Addresses: true, testIpv4Enabled: true },
    { serverHasIpv4Addresses: true, testIpv4Enabled: false },
    { serverHasIpv4Addresses: false, testIpv4Enabled: false },
].forEach(({ serverHasIpv4Addresses, testIpv4Enabled }) => {
    const serverIps = serverHasIpv4Addresses ? [SERVER_IPv4, SERVER_IPv6] : [SERVER_IPv6];
    const clientIps = testIpv4Enabled ? [CLIENT_IPv4] : [CLIENT_IPv6];
    const simulator = new NetworkSimulator();
    const serverNetwork = new MockNetwork(simulator, SERVER_MAC, serverIps);
    const clientNetwork = new MockNetwork(simulator, CLIENT_MAC, clientIps);

    const IPDnsRecords = [
        {
            flushCache: false,
            name: "00B0D063C2260000.local",
            recordType: 28,
            recordClass: 1,
            ttl: 120,
            value: "fe80::e777:4f5e:c61e:7314",
        },
    ];
    if (testIpv4Enabled && serverHasIpv4Addresses) {
        IPDnsRecords.push({
            flushCache: false,
            name: "00B0D063C2260000.local",
            recordType: 1,
            recordClass: 1,
            ttl: 120,
            value: "192.168.200.1",
        });
    }

    const IPIntegrationResultsPort1 = [{ ip: `${SERVER_IPv6}%fake0`, port: PORT, type: "udp" }];
    const IPIntegrationResultsPort2 = [{ ip: `${SERVER_IPv6}%fake0`, port: PORT2, type: "udp" }];
    if (testIpv4Enabled && serverHasIpv4Addresses) {
        IPIntegrationResultsPort1.push({ ip: SERVER_IPv4, port: PORT, type: "udp" });
        IPIntegrationResultsPort2.push({ ip: SERVER_IPv4, port: PORT2, type: "udp" });
    }

    describe(`MDNS Scanner and Broadcaster ${testIpv4Enabled ? "with" : "without"} IPv4 (and Ipv4 ${
        serverHasIpv4Addresses ? "" : "not "
    }provided)`, () => {
        let broadcaster: MdnsBroadcaster;
        let scanner: MdnsScanner;
        let scannerChannel: UdpChannel;
        let broadcasterChannel: UdpChannel;

        beforeEach(async () => {
            Network.get = () => clientNetwork;
            scanner = await MdnsScanner.create(Network.get(), {
                enableIpv4: testIpv4Enabled,
                netInterface: "fake0",
            });
            scannerChannel = new MockUdpChannel(serverNetwork, {
                listeningPort: 5353,
                listeningAddress: testIpv4Enabled ? "224.0.0.251" : "ff02::fb",
                type: testIpv4Enabled ? "udp4" : "udp6",
            });

            Network.get = () => serverNetwork;
            broadcaster = await MdnsBroadcaster.create(Network.get(), {
                enableIpv4: testIpv4Enabled,
                multicastInterface: "fake0",
            });
            broadcasterChannel = new MockUdpChannel(clientNetwork, {
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
            await scannerChannel.close();
            await broadcasterChannel.close();
        });

        const processRecordExpiry = async (port: number) => {
            const promise = broadcaster.expireAllAnnouncements(port);

            await MockTime.yield3();
            await MockTime.yield3();
            await MockTime.advance(150);
            await MockTime.yield3();
            await MockTime.yield3();
            await MockTime.advance(150);
            await MockTime.yield3();
            await MockTime.yield3();
            await MockTime.advance(150);
            await promise;
        };

        describe("broadcaster", () => {
            it("it broadcasts the device fabric on one port and expires", async () => {
                const { promise, resolver } = createPromise<Uint8Array>();
                const listener = scannerChannel.onData((_netInterface, _peerAddress, _peerPort, data) =>
                    resolver(data),
                );

                await broadcaster.setFabrics(PORT, [{ operationalId: OPERATIONAL_ID, nodeId: NODE_ID } as Fabric], {
                    sessionIdleInterval: 100,
                    sessionActiveInterval: 200,
                });
                await broadcaster.announce(PORT);

                const result = DnsCodec.decode(await promise);

                expect(result).deep.equal({
                    transactionId: 0,
                    messageType: 33792,
                    queries: [],
                    answers: [
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 120,
                            value: "_matter._tcp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 120,
                            value: "_I0000000000000018._sub._matter._tcp.local",
                        },
                        {
                            flushCache: false,
                            name: "_matter._tcp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 120,
                            value: "0000000000000018-0000000000000001._matter._tcp.local",
                        },
                        {
                            flushCache: false,
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
                            flushCache: false,
                            name: "0000000000000018-0000000000000001._matter._tcp.local",
                            recordType: 33,
                            recordClass: 1,
                            ttl: 120,
                            value: { priority: 0, weight: 0, port: PORT, target: "00B0D063C2260000.local" },
                        },
                        {
                            flushCache: false,
                            name: "0000000000000018-0000000000000001._matter._tcp.local",
                            recordType: 16,
                            recordClass: 1,
                            ttl: 120,
                            value: ["SII=100", "SAI=200", "SAT=4000"],
                        },
                        ...IPDnsRecords,
                    ],
                });
                await listener.close();

                const { promise: expiryPromise, resolver: expiryResolver } = createPromise<Uint8Array>();
                const expiryListener = scannerChannel.onData((_netInterface, _peerAddress, _peerPort, data) =>
                    expiryResolver(data),
                );

                // And expire the announcement
                await processRecordExpiry(PORT);

                const expiryResult = DnsCodec.decode(await expiryPromise);

                // Expiry is the same as the announcement result but with ttl = 0
                expect(expiryResult).deep.equal({
                    transactionId: 0,
                    messageType: 33792,
                    queries: [],
                    answers: [
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 0,
                            value: "_matter._tcp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 0,
                            value: "_I0000000000000018._sub._matter._tcp.local",
                        },
                        {
                            flushCache: false,
                            name: "_matter._tcp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 0,
                            value: "0000000000000018-0000000000000001._matter._tcp.local",
                        },
                        {
                            flushCache: false,
                            name: "_I0000000000000018._sub._matter._tcp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 0,
                            value: "0000000000000018-0000000000000001._matter._tcp.local",
                        },
                    ],
                    authorities: [],
                    additionalRecords: [
                        {
                            flushCache: false,
                            name: "0000000000000018-0000000000000001._matter._tcp.local",
                            recordType: 33,
                            recordClass: 1,
                            ttl: 0,
                            value: { priority: 0, weight: 0, port: PORT, target: "00B0D063C2260000.local" },
                        },
                        {
                            flushCache: false,
                            name: "0000000000000018-0000000000000001._matter._tcp.local",
                            recordType: 16,
                            recordClass: 1,
                            ttl: 0,
                            value: ["SII=100", "SAI=200", "SAT=4000"],
                        },
                        ...IPDnsRecords.map(record => ({ ...record, ttl: 0 })),
                    ],
                });
                await expiryListener.close();
            });

            it("it broadcasts the device commissionable info on one port", async () => {
                const { promise, resolver } = createPromise<Uint8Array>();
                const listener = scannerChannel.onData((_netInterface, _peerAddress, _peerPort, data) =>
                    resolver(data),
                );

                await broadcaster.setCommissionMode(PORT, 1, {
                    name: "Test Device",
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
                            flushCache: false,
                            name: "0000000000000000._matterc._udp.local",
                            recordClass: 1,
                            recordType: 33,
                            ttl: 120,
                            value: { port: PORT, priority: 0, target: "00B0D063C2260000.local", weight: 0 },
                        },
                        {
                            flushCache: false,
                            name: "0000000000000000._matterc._udp.local",
                            recordClass: 1,
                            recordType: 16,
                            ttl: 120,
                            value: [
                                "VP=1+32768",
                                "DT=1",
                                "DN=Test Device",
                                "SII=500",
                                "SAI=300",
                                "SAT=4000",
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
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_V1._sub._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_T1._sub._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_S4._sub._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_L1234._sub._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_CM._sub._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_V1._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_T1._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_S4._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_L1234._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterc._udp.local",
                        },
                        {
                            flushCache: false,
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

                await listener.close();

                // And expire the announcement
                await processRecordExpiry(PORT);
            });

            it("it broadcasts the controller commissioner on one port", async () => {
                const { promise, resolver } = createPromise<Uint8Array>();
                const listener = scannerChannel.onData((_netInterface, _peerAddress, _peerPort, data) =>
                    resolver(data),
                );

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
                            flushCache: false,
                            name: "0000000000000000._matterd._udp.local",
                            recordClass: 1,
                            recordType: 33,
                            ttl: 120,
                            value: { port: PORT, priority: 0, target: "00B0D063C2260000.local", weight: 0 },
                        },
                        {
                            flushCache: false,
                            name: "0000000000000000._matterd._udp.local",
                            recordClass: 1,
                            recordType: 16,
                            ttl: 120,
                            value: ["VP=1+32768", "DT=1", "DN=Test Commissioner", "SII=500", "SAI=300", "SAT=4000"],
                        },
                        ...IPDnsRecords,
                    ],
                    answers: [
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_matterd._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_matterd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_V1._sub._matterd._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_V1._sub._matterd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterd._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_T1._sub._matterd._udp.local",
                        },
                        {
                            flushCache: false,
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

                await listener.close();

                // And expire the announcement
                await processRecordExpiry(PORT);
            });

            it("it allows announcements of multiple devices on different ports", async () => {
                const { promise, resolver } = createPromise<void>();
                const dataArr: Uint8Array[] = [];
                const listener = scannerChannel.onData((_netInterface, _peerAddress, _peerPort, data) => {
                    dataArr.push(data);
                    if (dataArr.length === 3) resolver();
                });

                await broadcaster.setFabrics(PORT, [{ operationalId: OPERATIONAL_ID, nodeId: NODE_ID } as Fabric]);
                await broadcaster.setCommissionMode(PORT2, 1, {
                    name: "Test Device",
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
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 120,
                            value: "_matter._tcp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 120,
                            value: "_I0000000000000018._sub._matter._tcp.local",
                        },
                        {
                            flushCache: false,
                            name: "_matter._tcp.local",
                            recordType: 12,
                            recordClass: 1,
                            ttl: 120,
                            value: "0000000000000018-0000000000000001._matter._tcp.local",
                        },
                        {
                            flushCache: false,
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
                            flushCache: false,
                            name: "0000000000000018-0000000000000001._matter._tcp.local",
                            recordType: 33,
                            recordClass: 1,
                            ttl: 120,
                            value: { priority: 0, weight: 0, port: PORT, target: "00B0D063C2260000.local" },
                        },
                        {
                            flushCache: false,
                            name: "0000000000000018-0000000000000001._matter._tcp.local",
                            recordType: 16,
                            recordClass: 1,
                            ttl: 120,
                            value: ["SII=500", "SAI=300", "SAT=4000"],
                        },
                        ...IPDnsRecords,
                    ],
                });

                const result2 = DnsCodec.decode(dataArr[1]);
                expect(result2).deep.equal({
                    additionalRecords: [
                        {
                            flushCache: false,
                            name: "0000000000000000._matterc._udp.local",
                            recordClass: 1,
                            recordType: 33,
                            ttl: 120,
                            value: { port: PORT2, priority: 0, target: "00B0D063C2260000.local", weight: 0 },
                        },
                        {
                            flushCache: false,
                            name: "0000000000000000._matterc._udp.local",
                            recordClass: 1,
                            recordType: 16,
                            ttl: 120,
                            value: [
                                "VP=1+32768",
                                "DT=1",
                                "DN=Test Device",
                                "SII=500",
                                "SAI=300",
                                "SAT=4000",
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
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_V1._sub._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_T1._sub._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_S4._sub._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_L1234._sub._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_CM._sub._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_V1._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_T1._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_S4._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterc._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_L1234._sub._matterc._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterc._udp.local",
                        },
                        {
                            flushCache: false,
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
                            flushCache: false,
                            name: "0000000000000000._matterd._udp.local",
                            recordClass: 1,
                            recordType: 33,
                            ttl: 120,
                            value: { port: PORT3, priority: 0, target: "00B0D063C2260000.local", weight: 0 },
                        },
                        {
                            flushCache: false,
                            name: "0000000000000000._matterd._udp.local",
                            recordClass: 1,
                            recordType: 16,
                            ttl: 120,
                            value: ["VP=1+32768", "DT=1", "DN=Test Commissioner", "SII=500", "SAI=300", "SAT=4000"],
                        },
                        ...IPDnsRecords,
                    ],
                    answers: [
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_matterd._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_matterd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_V1._sub._matterd._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_V1._sub._matterd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "0000000000000000._matterd._udp.local",
                        },
                        {
                            flushCache: false,
                            name: "_services._dns-sd._udp.local",
                            recordClass: 1,
                            recordType: 12,
                            ttl: 120,
                            value: "_T1._sub._matterd._udp.local",
                        },
                        {
                            flushCache: false,
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
                await listener.close();

                // And expire the announcement for all via close
                await processRecordExpiry(PORT);
                await processRecordExpiry(PORT2);
                await processRecordExpiry(PORT3);
            });
        });

        describe("integration", () => {
            it("the client directly returns server record if it has been announced before and records are removed on cancel", async () => {
                let queryReceived = false;
                let dataWereSent = false;
                const listener = scannerChannel.onData((_netInterface, _peerAddress, _peerPort, data) => {
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
                expect(result?.addresses).deep.equal(IPIntegrationResultsPort1);
                await listener.close();

                // Same result when we just get the records
                expect(
                    scanner.getDiscoveredOperationalDevice({ operationalId: OPERATIONAL_ID } as Fabric, NODE_ID)
                        ?.addresses,
                ).deep.equal(IPIntegrationResultsPort1);

                // And expire the announcement
                await processRecordExpiry(PORT);

                // And empty result after expiry
                expect(
                    scanner.getDiscoveredOperationalDevice({ operationalId: OPERATIONAL_ID } as Fabric, NODE_ID),
                ).deep.equal(undefined);
            });

            it("the client queries the server record if it has not been announced before", async () => {
                const sentData = new Array<Uint8Array>();
                const listener = scannerChannel.onData((_netInterface, _peerAddress, _peerPort, data) =>
                    sentData.push(data),
                );

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
                            uniCastResponse: false,
                        },
                    ],
                    transactionId: 0,
                });

                const result = await findPromise;

                expect(result?.addresses).deep.equal(IPIntegrationResultsPort1);
                await listener.close();

                // Same result when we just get the records
                expect(
                    scanner.getDiscoveredOperationalDevice({ operationalId: OPERATIONAL_ID } as Fabric, NODE_ID)
                        ?.addresses,
                ).deep.equal(IPIntegrationResultsPort1);

                // And expire the announcement
                await processRecordExpiry(PORT);

                // And empty result after expiry
                expect(
                    scanner.getDiscoveredOperationalDevice({ operationalId: OPERATIONAL_ID } as Fabric, NODE_ID),
                ).deep.equal(undefined);
            });

            it("the client queries the server record and get correct response also with multiple announced instances", async () => {
                const netData = new Array<Uint8Array>();
                const listener = broadcasterChannel.onData((_netInterface, _peerAddress, _peerPort, data) => {
                    netData.push(data);
                });

                await broadcaster.setCommissionMode(PORT, 1, {
                    name: "Test Device",
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
                await MockTime.yield3(); // Make sure data were queried async
                await MockTime.yield3(); // Make sure data were queried async

                expect(netData.length).equal(2);

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
                            uniCastResponse: false,
                        },
                    ],
                    transactionId: 0,
                });
                const response2 = DnsCodec.decode(netData[1]);
                expect(response2).deep.equal({
                    additionalRecords: [
                        {
                            flushCache: false,
                            name: "0000000000000018-0000000000000001._matter._tcp.local",
                            recordClass: 1,
                            recordType: 16,
                            ttl: 120,
                            value: ["SII=500", "SAI=300", "SAT=4000"],
                        },
                        ...IPDnsRecords,
                    ],
                    answers: [
                        {
                            flushCache: false,
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

                const result = await findPromise;

                expect(result?.addresses).deep.equal(IPIntegrationResultsPort2);

                await listener.close();

                // Same result when we just get the records
                expect(
                    scanner.getDiscoveredOperationalDevice({ operationalId: OPERATIONAL_ID } as Fabric, NODE_ID)
                        ?.addresses,
                ).deep.equal(IPIntegrationResultsPort2);

                // No commissionable devices because never queried
                expect(scanner.getDiscoveredCommissionableDevices({ longDiscriminator: 1234 })).deep.equal([]);

                // And expire the announcement
                await processRecordExpiry(PORT);
                await processRecordExpiry(PORT2);

                // And empty result after expiry
                expect(
                    scanner.getDiscoveredOperationalDevice({ operationalId: OPERATIONAL_ID } as Fabric, NODE_ID),
                ).deep.equal(undefined);
            });

            it("the client queries the server record and get correct response when announced before", async () => {
                let dataWereSent = false;
                let queryReceived = false;
                const listener = scannerChannel.onData((_netInterface, _peerAddress, _peerPort, data) => {
                    dataWereSent = true;
                    const dataDecoded = DnsCodec.decode(data);
                    if (dataDecoded?.messageType === DnsMessageType.Query) {
                        queryReceived = true;
                    }
                });

                await broadcaster.setCommissionMode(PORT, 1, {
                    name: "Test Device",
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
                    10,
                );

                expect(dataWereSent).equal(true);
                expect(queryReceived).equal(false);
                expect(result?.addresses).deep.equal(IPIntegrationResultsPort2);

                await listener.close();

                // Same result when we just get the records
                expect(
                    scanner.getDiscoveredOperationalDevice({ operationalId: OPERATIONAL_ID } as Fabric, NODE_ID)
                        ?.addresses,
                ).deep.equal(IPIntegrationResultsPort2);

                // Also commissionable devices known now
                expect(scanner.getDiscoveredCommissionableDevices({ longDiscriminator: 1234 })).deep.equal([
                    {
                        CM: 1,
                        D: 1234,
                        DN: "Test Device",
                        DT: 1,
                        P: 32768,
                        PH: 33,
                        PI: "",
                        SAI: 300,
                        SD: 4,
                        SII: 500,
                        SAT: 4000,
                        T: 0,
                        ICD: 0,
                        V: 1,
                        VP: "1+32768",
                        addresses: IPIntegrationResultsPort1,
                        deviceIdentifier: "0000000000000000",
                        discoveredAt: undefined,
                        ttl: undefined,
                        instanceId: "0000000000000000",
                    },
                ]);

                // And expire the announcement
                await processRecordExpiry(PORT);
                await processRecordExpiry(PORT2);

                // And removed after expiry
                expect(
                    scanner.getDiscoveredOperationalDevice({ operationalId: OPERATIONAL_ID } as Fabric, NODE_ID),
                ).deep.equal(undefined);

                expect(scanner.getDiscoveredCommissionableDevices({ longDiscriminator: 1234 })).deep.equal([]);
            });
        });
    });
});
