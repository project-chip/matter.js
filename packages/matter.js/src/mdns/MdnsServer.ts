/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DnsCodec, DnsMessageType, DnsRecord, DnsRecordType } from "../codec/DnsCodec.js";
import { Network } from "../net/Network.js";
import { UdpMulticastServer } from "../net/UdpMulticastServer.js";
import { Time } from "../time/Time.js";
import { ByteArray } from "../util/ByteArray.js";
import { Cache } from "../util/Cache.js";

export const MDNS_BROADCAST_IPV4 = "224.0.0.251";
export const MDNS_BROADCAST_IPV6 = "ff02::fb";
export const MDNS_BROADCAST_PORT = 5353;

export class MdnsServer {
    static async create(netInterface?: string) {
        return new MdnsServer(
            await UdpMulticastServer.create({
                netInterface: netInterface,
                broadcastAddressIpv4: MDNS_BROADCAST_IPV4,
                broadcastAddressIpv6: MDNS_BROADCAST_IPV6,
                listeningPort: MDNS_BROADCAST_PORT,
            }),
            netInterface,
        );
    }

    private readonly network = Network.get();
    private recordsGenerator = new Map<number, (netInterface: string) => DnsRecord<any>[]>();
    private readonly records = new Cache<Map<number, DnsRecord<any>[]>>(
        (multicastInterface: string) => {
            const portMap = new Map<number, DnsRecord<any>[]>();
            for (const [hostPort, generator] of this.recordsGenerator) {
                portMap.set(hostPort, generator(multicastInterface));
            }
            return portMap;
        },
        15 * 60 * 1000 /* 15mn */,
    );

    constructor(
        private readonly multicastServer: UdpMulticastServer,
        private readonly netInterface: string | undefined,
    ) {
        multicastServer.onMessage(
            (message, remoteIp, netInterface) => void this.handleDnsMessage(message, remoteIp, netInterface),
        );
    }

    private async handleDnsMessage(messageBytes: ByteArray, _remoteIp: string, netInterface: string) {
        // This message was on a subnet not supported by this device
        if (netInterface === undefined) return;
        const records = this.records.get(netInterface);

        // No need to process the DNS message if there are no records to serve
        if (records.size === 0) return;

        const message = DnsCodec.decode(messageBytes);
        if (message === undefined) return; // The message cannot be parsed
        const { transactionId, messageType, queries } = message;
        if (messageType !== DnsMessageType.Query && messageType !== DnsMessageType.TruncatedQuery) return;
        for (const portRecords of records.values()) {
            const answers = queries.flatMap(query => this.queryRecords(query, portRecords));
            if (answers.length === 0) continue;

            const additionalRecords = portRecords.filter(record => !answers.includes(record));

            // TODO: try to combine the messages to avoid sending multiple messages but keep under 1500 bytes per message
            this.multicastServer
                .send(
                    DnsCodec.encode({
                        messageType: DnsMessageType.Response,
                        transactionId,
                        answers,
                        additionalRecords,
                    }),
                    netInterface,
                )
                .catch(() => {
                    // ignore because already caught in UdpMulticastServer
                });
            await Time.sleep(20 + Math.floor(Math.random() * 100)); // as per DNS-SD spec wait 20-120ms before sending more packets
        }
    }

    async announce(announcedNetPort?: number) {
        await Promise.all(
            this.getMulticastInterfacesForAnnounce().map(async netInterface => {
                const records = this.records.get(netInterface);
                for (const [port, portRecords] of records) {
                    if (announcedNetPort !== undefined && announcedNetPort !== port) continue;
                    const answers = portRecords.filter(({ recordType }) => recordType === DnsRecordType.PTR);
                    const additionalRecords = portRecords.filter(({ recordType }) => recordType !== DnsRecordType.PTR);

                    // TODO: try to combine the messages to avoid sending multiple messages but keep under 1500 bytes per message
                    await this.multicastServer.send(
                        DnsCodec.encode({
                            messageType: DnsMessageType.Response,
                            answers,
                            additionalRecords,
                        }),
                        netInterface,
                    );
                    await Time.sleep(20 + Math.floor(Math.random() * 100)); // as per DNS-SD spec wait 20-120ms before sending more packets
                }
            }),
        );
    }

    async setRecordsGenerator(hostPort: number, generator: (netInterface: string) => DnsRecord<any>[]) {
        await this.records.clear();
        this.recordsGenerator.set(hostPort, generator);
    }

    async close() {
        await this.records.close();
        await this.multicastServer.close();
    }

    private getMulticastInterfacesForAnnounce() {
        return this.netInterface === undefined ? this.network.getNetInterfaces() : [this.netInterface];
    }

    private queryRecords({ name, recordType }: { name: string; recordType: DnsRecordType }, records: DnsRecord<any>[]) {
        if (recordType === DnsRecordType.ANY) {
            return records.filter(record => record.name === name);
        } else {
            return records.filter(record => record.name === name && record.recordType === recordType);
        }
    }
}
