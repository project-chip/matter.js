/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as assert from "assert";
import { DnsCodec } from "../../src/codec/DnsCodec.js";
import { UdpChannelFake } from "../../src/net/fake/UdpChannelFake.js";
import { UdpChannel } from "../../src/net/UdpChannel.js";
import { MdnsBroadcaster } from "../../src/mdns/MdnsBroadcaster.js";
import { getPromiseResolver } from "../../src/util/Promises.js";
import { NetworkFake } from "../../src/net/fake/NetworkFake.js";
import { Network } from "../../src/net/Network.js";
import { MdnsScanner } from "../../src/mdns/MdnsScanner.js";
import { Fabric } from "../../src/fabric/Fabric.js";
import { NodeId } from "../../src/datatype/NodeId.js";
import { ByteArray } from "../../src/util/ByteArray.js";
import { FAKE_INTERFACE_NAME } from "../../src/net/fake/SimulatedNetwork.js";
import { Time } from "../../src/time/Time.js";
import { TimeFake } from "../../src/time/TimeFake.js";

Time.get = () => new TimeFake(0);

const SERVER_IPv4 = "192.168.200.1";
const SERVER_IPv6 = "fe80::e777:4f5e:c61e:7314";
const SERVER_MAC = "00:B0:D0:63:C2:26";
const CLIENT_IP = "192.168.200.2";
const CLIENT_MAC = "CA:FE:00:00:BE:EF";

const serverNetwork = new NetworkFake(SERVER_MAC, [SERVER_IPv4, SERVER_IPv6]);
const clientNetwork = new NetworkFake(CLIENT_MAC, [CLIENT_IP]);

const OPERATIONAL_ID = ByteArray.fromHex("0000000000000018")
const NODE_ID = new NodeId(BigInt(1));

describe("MDNS", () => {
    let broadcaster: MdnsBroadcaster;
    let scanner: MdnsScanner;
    let channel: UdpChannel;

    beforeEach(async () => {
        Network.get = () => clientNetwork;
        scanner = await MdnsScanner.create(FAKE_INTERFACE_NAME);
        channel = await UdpChannelFake.create(serverNetwork, { listeningPort: 5353, listeningAddress: "224.0.0.251", type: "udp4" });

        Network.get = () => serverNetwork;
        broadcaster = await MdnsBroadcaster.create(5540, FAKE_INTERFACE_NAME);

        Network.get = () => { throw new Error("Network should not be requested post creation") };
    });

    afterEach(() => {
        broadcaster.close();
        scanner.close();
        channel.close();
    });

    describe("broadcaster", () => {
        it("it broadcasts the device fabric", async () => {
            const { promise, resolver } = await getPromiseResolver<ByteArray>();
            channel.onData((_netInterface, _peerAddress, _peerPort, data) => resolver(data));

            broadcaster.setFabrics([{ operationalId: OPERATIONAL_ID, nodeId: NODE_ID } as Fabric]);
            broadcaster.announce();

            const result = DnsCodec.decode(await promise);

            assert.deepEqual(result, {
                transactionId: 0,
                messageType: 33792,
                queries: [],
                answers: [
                    { name: '_services._dns-sd._udp.local', recordType: 12, recordClass: 1, ttl: 120, value: '_matter._tcp.local' },
                    { name: '_services._dns-sd._udp.local', recordType: 12, recordClass: 1, ttl: 120, value: '_I0000000000000018._sub._matter._tcp.local' },
                    { name: '_matter._tcp.local', recordType: 12, recordClass: 1, ttl: 120, value: '0000000000000018-0000000000000001._matter._tcp.local' },
                    { name: '_I0000000000000018._sub._matter._tcp.local', recordType: 12, recordClass: 1, ttl: 120, value: '0000000000000018-0000000000000001._matter._tcp.local' },
                ],
                authorities: [],
                additionalRecords: [
                    { name: '0000000000000018-0000000000000001._matter._tcp.local', recordType: 33, recordClass: 1, ttl: 120, value: { priority: 0, weight: 0, port: 5540, target: '00B0D063C2260000.local' } },
                    { name: '0000000000000018-0000000000000001._matter._tcp.local', recordType: 16, recordClass: 1, ttl: 120, value: ["SII=5000", "SAI=300", "T=1"] },
                    { name: '00B0D063C2260000.local', recordType: 1, recordClass: 1, ttl: 120, value: '192.168.200.1' },
                    { name: '00B0D063C2260000.local', recordType: 28, recordClass: 1, ttl: 120, value: 'fe80::::e777:4f5e:c61e:7314' },
                ]
            });
        });
    });

    describe("integration", () => {
        it("the client returns server record if it has been announced", async () => {
            broadcaster.setFabrics([{ operationalId: OPERATIONAL_ID, nodeId: NODE_ID } as Fabric]);
            broadcaster.announce();

            const result = await scanner.findDevice({ operationalId: OPERATIONAL_ID } as Fabric, NODE_ID);

            assert.deepEqual(result, { ip: SERVER_IPv4, port: 5540 });
        });

        it("the client asks for the server record if it has not been announced", async () => {
            broadcaster.setFabrics([{ operationalId: OPERATIONAL_ID, nodeId: NODE_ID } as Fabric]);

            const result = await scanner.findDevice({ operationalId: OPERATIONAL_ID } as Fabric, NODE_ID);

            assert.deepEqual(result, { ip: SERVER_IPv4, port: 5540 });
        });
    });
});
