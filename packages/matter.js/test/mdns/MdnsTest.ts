/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DnsCodec, DnsMessageType } from "../../src/codec/DnsCodec.js";
import { Crypto } from "../../src/crypto/Crypto.js";
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
import { Time } from "../../src/time/Time.js";
import { TimeFake } from "../../src/time/TimeFake.js";
import { ByteArray } from "../../src/util/ByteArray.js";
import { getPromiseResolver } from "../../src/util/Promises.js";
import { singleton } from "../../src/util/Singleton.js";

Time.get = singleton(() => new TimeFake(0));

Crypto.get = () =>
    ({
        getRandomData: (length: number) => {
            return new Uint8Array(length);
        },
    }) as Crypto;

const SERVER_IPv4 = "192.168.200.1";
const SERVER_IPv6 = "fe80::e777:4f5e:c61e:7314";
const SERVER_MAC = "00:B0:D0:63:C2:26";
const CLIENT_IP = "192.168.200.2";
const CLIENT_MAC = "CA:FE:00:00:BE:EF";
const PORT = 5540;
const PORT2 = 5541;
const PORT3 = 5542;

const serverNetwork = new NetworkFake(SERVER_MAC, [SERVER_IPv4, SERVER_IPv6]);
const clientNetwork = new NetworkFake(CLIENT_MAC, [CLIENT_IP]);

const OPERATIONAL_ID = ByteArray.fromHex("0000000000000018");
const NODE_ID = NodeId(BigInt(1));

describe("MDNS Scanner and Broadcaster", () => {
    let broadcaster: MdnsBroadcaster;
    let scanner: MdnsScanner;
    let scannerChannel: UdpChannel;
    let broadcasterChannel: UdpChannel;

    beforeEach(async () => {
        Network.get = () => clientNetwork;
        scanner = await MdnsScanner.create(FAKE_INTERFACE_NAME);
        scannerChannel = await UdpChannelFake.create(serverNetwork, {
            listeningPort: 5353,
            listeningAddress: "224.0.0.251",
            type: "udp4",
        });

        Network.get = () => serverNetwork;
        broadcaster = await MdnsBroadcaster.create(FAKE_INTERFACE_NAME);
        broadcasterChannel = await UdpChannelFake.create(clientNetwork, {
            listeningPort: 5353,
            listeningAddress: "224.0.0.251",
            type: "udp4",
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
            const { promise, resolver } = await getPromiseResolver<ByteArray>();
            scannerChannel.onData((_netInterface, _peerAddress, _peerPort, data) => resolver(data));

            await broadcaster.setFabrics(PORT, [{ operationalId: OPERATIONAL_ID, nodeId: NODE_ID } as Fabric], {
                sleepIdleInterval: 100,
                sleepActiveInterval: 200,
            });
            await broadcaster.announce(PORT);

            const result = DnsCodec.decode(await promise);

            expect(result).toEqual({
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
                    { name: "00B0D063C2260000.local", recordType: 1, recordClass: 1, ttl: 120, value: "192.168.200.1" },
                    {
                        name: "00B0D063C2260000.local",
                        recordType: 28,
                        recordClass: 1,
                        ttl: 120,
                        value: "fe80::e777:4f5e:c61e:7314",
                    },
                ],
            });
        });

        it("it broadcasts the device commissionable info on one port", async () => {
            const { promise, resolver } = await getPromiseResolver<ByteArray>();
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

            expect(result).toEqual({
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
                    { name: "00B0D063C2260000.local", recordClass: 1, recordType: 1, ttl: 120, value: "192.168.200.1" },
                    {
                        name: "00B0D063C2260000.local",
                        recordClass: 1,
                        recordType: 28,
                        ttl: 120,
                        value: "fe80::e777:4f5e:c61e:7314",
                    },
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
            const { promise, resolver } = await getPromiseResolver<ByteArray>();
            scannerChannel.onData((_netInterface, _peerAddress, _peerPort, data) => resolver(data));

            await broadcaster.setCommissionerInfo(PORT, {
                deviceName: "Test Commissioner",
                deviceType: 1,
                vendorId: VendorId(1),
                productId: 0x8000,
            });
            await broadcaster.announce(PORT);

            const result = DnsCodec.decode(await promise);

            expect(result).toEqual({
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
                    { name: "00B0D063C2260000.local", recordClass: 1, recordType: 1, ttl: 120, value: "192.168.200.1" },
                    {
                        name: "00B0D063C2260000.local",
                        recordClass: 1,
                        recordType: 28,
                        ttl: 120,
                        value: "fe80::e777:4f5e:c61e:7314",
                    },
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
            const { promise, resolver } = await getPromiseResolver<void>();
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
            expect(result1).toEqual({
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
                    { name: "00B0D063C2260000.local", recordType: 1, recordClass: 1, ttl: 120, value: "192.168.200.1" },
                    {
                        name: "00B0D063C2260000.local",
                        recordType: 28,
                        recordClass: 1,
                        ttl: 120,
                        value: "fe80::e777:4f5e:c61e:7314",
                    },
                ],
            });

            const result2 = DnsCodec.decode(dataArr[1]);
            expect(result2).toEqual({
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
                    { name: "00B0D063C2260000.local", recordClass: 1, recordType: 1, ttl: 120, value: "192.168.200.1" },
                    {
                        name: "00B0D063C2260000.local",
                        recordClass: 1,
                        recordType: 28,
                        ttl: 120,
                        value: "fe80::e777:4f5e:c61e:7314",
                    },
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
            expect(result3).toEqual({
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
                    { name: "00B0D063C2260000.local", recordClass: 1, recordType: 1, ttl: 120, value: "192.168.200.1" },
                    {
                        name: "00B0D063C2260000.local",
                        recordClass: 1,
                        recordType: 28,
                        ttl: 120,
                        value: "fe80::e777:4f5e:c61e:7314",
                    },
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
            const fakeTime = Time.get() as TimeFake;
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

            await fakeTime.yield(); // Make sure data were broadcasted async
            await fakeTime.yield(); // Make sure data were received and processed async

            const result = await scanner.findOperationalDevice({ operationalId: OPERATIONAL_ID } as Fabric, NODE_ID, 1);

            expect(dataWereSent).toBe(true);
            expect(queryReceived).toBe(false);
            expect(result).toEqual([
                { ip: `${SERVER_IPv6}%fakeInterface`, port: PORT, type: "udp" },
                { ip: SERVER_IPv4, port: PORT, type: "udp" },
            ]);
        });

        it("the client queries the server record if it has not been announced before", async () => {
            const fakeTime = Time.get() as TimeFake;
            const sentData = new Array<ByteArray>();
            scannerChannel.onData((_netInterface, _peerAddress, _peerPort, data) => sentData.push(data));

            await broadcaster.setFabrics(PORT, [{ operationalId: OPERATIONAL_ID, nodeId: NODE_ID } as Fabric]);

            const findPromise = scanner.findOperationalDevice({ operationalId: OPERATIONAL_ID } as Fabric, NODE_ID);

            await fakeTime.yield(); // make sure responding promise is created
            await fakeTime.advanceTime(1); // Trigger timer to send query (0ms timer)
            await fakeTime.yield(); // make sure responding promise is created

            expect(DnsCodec.decode(sentData[0])).toEqual({
                additionalRecords: [],
                answers: [],
                authorities: [],
                messageType: 0,
                queries: [
                    { name: "0000000000000018-0000000000000001._matter._tcp.local", recordClass: 1, recordType: 33 },
                ],
                transactionId: 0,
            });

            const result = await findPromise;

            expect(result).toEqual([
                { ip: `${SERVER_IPv6}%fakeInterface`, port: PORT, type: "udp" },
                { ip: SERVER_IPv4, port: PORT, type: "udp" },
            ]);
        });

        it("the client queries the server record and get correct response also with multiple announced instances", async () => {
            const fakeTime = Time.get() as TimeFake;
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

            await fakeTime.yield(); // make sure responding promise is created
            await fakeTime.advanceTime(1); // Trigger timer to send query (0ms timer)
            await fakeTime.yield(); // Make sure data were queried async

            expect(netData.length).toBe(3);

            const query = DnsCodec.decode(netData[0]);
            expect(query).toEqual({
                additionalRecords: [],
                answers: [],
                authorities: [],
                messageType: 0,
                queries: [
                    { name: "0000000000000018-0000000000000001._matter._tcp.local", recordClass: 1, recordType: 33 },
                ],
                transactionId: 0,
            });
            const response2 = DnsCodec.decode(netData[1]);
            expect(response2).toEqual({
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
                    { name: "00B0D063C2260000.local", recordClass: 1, recordType: 1, ttl: 120, value: "192.168.200.1" },
                    {
                        name: "00B0D063C2260000.local",
                        recordClass: 1,
                        recordType: 28,
                        ttl: 120,
                        value: "fe80::e777:4f5e:c61e:7314",
                    },
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

            const response = DnsCodec.decode(netData[2]);
            expect(response).toEqual({
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
                    { name: "00B0D063C2260000.local", recordClass: 1, recordType: 1, ttl: 120, value: "192.168.200.1" },
                    {
                        name: "00B0D063C2260000.local",
                        recordClass: 1,
                        recordType: 28,
                        ttl: 120,
                        value: "fe80::e777:4f5e:c61e:7314",
                    },
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
            const result = await findPromise;

            expect(result).toEqual([
                { ip: `${SERVER_IPv6}%fakeInterface`, port: PORT2, type: "udp" },
                { ip: SERVER_IPv4, port: PORT2, type: "udp" },
            ]);
        });

        it("the client queries the server record and get correct response when announced before", async () => {
            const fakeTime = Time.get() as TimeFake;
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

            await fakeTime.yield();
            await fakeTime.yield();

            const result = await scanner.findOperationalDevice({ operationalId: OPERATIONAL_ID } as Fabric, NODE_ID);

            expect(dataWereSent).toBe(true);
            expect(queryReceived).toBe(false);
            expect(result).toEqual([
                { ip: `${SERVER_IPv6}%fakeInterface`, port: PORT2, type: "udp" },
                { ip: SERVER_IPv4, port: PORT2, type: "udp" },
            ]);
        });
    });
});
