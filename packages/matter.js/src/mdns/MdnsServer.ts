/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DnsCodec, MessageType, Record, RecordType } from "../codec/DnsCodec.js";
import { Network } from "../net/Network.js";
import { UdpMulticastServer } from "../net/UdpMulticastServer.js";
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
                listeningPort: MDNS_BROADCAST_PORT
            }),
            netInterface,
        );
    }

    private readonly network = Network.get();
    private recordsGenerator: (netInterface: string) => Record<any>[] = () => [];
    private readonly records = new Cache<Record<any>[]>((multicastInterface) => this.recordsGenerator(multicastInterface), 5 * 60 * 1000 /* 5mn */);

    constructor(
        private readonly multicastServer: UdpMulticastServer,
        private readonly netInterface: string | undefined,
    ) {
        multicastServer.onMessage((message, remoteIp, netInterface) => this.handleDnsMessage(message, remoteIp, netInterface));
    }

    private handleDnsMessage(messageBytes: ByteArray, _remoteIp: string, netInterface: string) {
        // This message was on a subnet not supported by this device
        if (netInterface === undefined) return;
        const records = this.records.get(netInterface);

        // No need to process the DNS message if there are no records to serve
        if (records.length === 0) return;

        const message = DnsCodec.decode(messageBytes);
        if (message === undefined) return; // The message cannot be parsed
        const { transactionId, messageType, queries } = message;
        if (messageType !== MessageType.Query) return;

        const answers = queries.flatMap(query => this.queryRecords(query, records));
        if (answers.length === 0) return;

        const additionalRecords = records.filter(record => !answers.includes(record));
        this.multicastServer.send(DnsCodec.encode({ transactionId, answers, additionalRecords }), netInterface).catch(() => {
            // ignore because already catched in UdpMulticastServer
        });
    }

    async announce() {
        await Promise.all(this.getMulticastInterfacesForAnnounce().map(netInterface => {
            const records = this.records.get(netInterface);
            const answers = records.filter(({ recordType }) => recordType === RecordType.PTR);
            const additionalRecords = records.filter(({ recordType }) => recordType !== RecordType.PTR);
            return this.multicastServer.send(DnsCodec.encode({ answers, additionalRecords }), netInterface);
        }));
    }

    setRecordsGenerator(generator: (netInterface: string) => Record<any>[]) {
        this.records.clear();
        this.recordsGenerator = generator;
    }

    close() {
        this.records.close();
        this.multicastServer.close();
    }

    private getMulticastInterfacesForAnnounce() {
        return this.netInterface === undefined ? this.network.getNetInterfaces() : [this.netInterface];
    }

    private queryRecords({ name, recordType }: { name: string, recordType: RecordType }, records: Record<any>[]) {
        if (recordType === RecordType.ANY) {
            return records.filter(record => record.name === name);
        } else {
            return records.filter(record => record.name === name && record.recordType === recordType);
        }
    }
}
