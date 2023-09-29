/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DnsCodec, DnsMessageType, DnsRecord, DnsRecordType } from "../codec/DnsCodec.js";
import { Logger } from "../log/Logger.js";
import { Network } from "../net/Network.js";
import { UdpMulticastServer } from "../net/UdpMulticastServer.js";
import { Time } from "../time/Time.js";
import { ByteArray } from "../util/ByteArray.js";
import { Cache } from "../util/Cache.js";

const logger = Logger.get("MdnsServer");

export const MDNS_BROADCAST_IPV4 = "224.0.0.251";
export const MDNS_BROADCAST_IPV6 = "ff02::fb";
export const MDNS_BROADCAST_PORT = 5353;

export enum AnnouncementType {
    Commissionable,
    Operative,
}

export class MdnsServer {
    static async create(options?: { enableIpv4?: boolean; netInterface?: string }) {
        const { enableIpv4 = true, netInterface } = options ?? {};
        return new MdnsServer(
            await UdpMulticastServer.create({
                netInterface: netInterface,
                broadcastAddressIpv4: enableIpv4 ? MDNS_BROADCAST_IPV4 : undefined,
                broadcastAddressIpv6: MDNS_BROADCAST_IPV6,
                listeningPort: MDNS_BROADCAST_PORT,
            }),
            netInterface,
        );
    }

    private readonly network = Network.get();
    private recordsGenerator = new Map<string, (netInterface: string) => DnsRecord<any>[]>();
    private readonly records = new Cache<Map<string, DnsRecord<any>[]>>(
        (multicastInterface: string) => {
            const portTypeMap = new Map<string, DnsRecord<any>[]>();
            for (const [announceTypePort, generator] of this.recordsGenerator) {
                portTypeMap.set(announceTypePort, generator(multicastInterface));
            }
            return portTypeMap;
        },
        15 * 60 * 1000 /* 15mn - also matches maximum commissioning window time. */,
    );

    constructor(
        private readonly multicastServer: UdpMulticastServer,
        private readonly netInterface: string | undefined,
    ) {
        multicastServer.onMessage(
            (message, remoteIp, netInterface) => void this.handleDnsMessage(message, remoteIp, netInterface),
        );
    }

    buildTypePortKey(type: AnnouncementType, port: number) {
        return `${port}-${type}`;
    }

    isKeyForPort(key: string, port: number) {
        return key.startsWith(`${port}-`);
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

    private async announceRecordsForInterface(netInterface: string, records: DnsRecord<any>[]) {
        const answers = records.filter(({ recordType }) => recordType === DnsRecordType.PTR);
        const additionalRecords = records.filter(({ recordType }) => recordType !== DnsRecordType.PTR);

        await this.multicastServer.send(
            DnsCodec.encode({
                messageType: DnsMessageType.Response,
                answers,
                additionalRecords,
            }),
            netInterface,
        );
    }

    async announce(announcedNetPort?: number) {
        await Promise.all(
            this.getMulticastInterfacesForAnnounce().map(async netInterface => {
                const records = this.records.get(netInterface);
                for (const [portType, portTypeRecords] of records) {
                    if (announcedNetPort !== undefined && !this.isKeyForPort(portType, announcedNetPort)) continue;

                    // TODO: try to combine the messages to avoid sending multiple messages but keep under 1500 bytes per message
                    await this.announceRecordsForInterface(netInterface, portTypeRecords);
                    await Time.sleep(20 + Math.floor(Math.random() * 100)); // as per DNS-SD spec wait 20-120ms before sending more packets
                }
            }),
        );
    }

    async expireAnnouncements(announcedNetPort?: number, type?: AnnouncementType) {
        await Promise.all(
            this.records.keys().map(async netInterface => {
                const records = this.records.get(netInterface);
                for (const [portType, portTypeRecords] of records) {
                    if (announcedNetPort !== undefined && !this.isKeyForPort(portType, announcedNetPort)) continue;
                    if (
                        announcedNetPort !== undefined &&
                        type !== undefined &&
                        portType !== this.buildTypePortKey(type, announcedNetPort)
                    )
                        continue;
                    let instanceName: string | undefined;
                    portTypeRecords.forEach(record => {
                        record.ttl = 0;
                        if (instanceName === undefined && record.recordType === DnsRecordType.TXT) {
                            instanceName = record.name;
                        }
                    });
                    logger.debug(
                        `Expiring records`,
                        Logger.dict({
                            instanceName,
                            port: announcedNetPort,
                            netInterface,
                        }),
                    );

                    // TODO: try to combine the messages to avoid sending multiple messages but keep under 1500 bytes per message
                    await this.announceRecordsForInterface(netInterface, portTypeRecords);
                    this.recordsGenerator.delete(portType);
                    await Time.sleep(20 + Math.floor(Math.random() * 100)); // as per DNS-SD spec wait 20-120ms before sending more packets
                }
            }),
        );
        await this.records.clear();
    }

    async setRecordsGenerator(
        hostPort: number,
        type: AnnouncementType,
        generator: (netInterface: string) => DnsRecord<any>[],
    ) {
        await this.records.clear();
        this.recordsGenerator.set(this.buildTypePortKey(type, hostPort), generator);
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
