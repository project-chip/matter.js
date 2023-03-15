/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DnsCodec, MessageType, Record, RecordClass, RecordType, SrvRecordValue } from "../../codec/DnsCodec";
import { UdpMulticastServer } from "../../net/UdpMulticastServer";
import { MDNS_BROADCAST_IPV4, MDNS_BROADCAST_IPV6, MDNS_BROADCAST_PORT } from "../../net/MdnsServer";
import { getDeviceMatterQname, MATTER_SERVICE_QNAME } from "./MdnsConsts";
import { getPromiseResolver } from "../../util/Promises";
import { MatterServer, Scanner } from "../common/Scanner";
import { Fabric } from "../fabric/Fabric";
import { Time, Timer } from "../../time/Time";
import { NodeId } from "../common/NodeId";
import { ByteArray } from "@project-chip/matter.js";

type MatterServerRecordWithExpire = MatterServer & { expires: number };

export class MdnsScanner implements Scanner {
    static async create(netInterface?: string) {
        return new MdnsScanner(await UdpMulticastServer.create({
            netInterface: netInterface,
            broadcastAddressIpv4: MDNS_BROADCAST_IPV4,
            broadcastAddressIpv6: MDNS_BROADCAST_IPV6,
            listeningPort: MDNS_BROADCAST_PORT,
        }));
    }

    private readonly matterDeviceRecords = new Map<string, MatterServerRecordWithExpire>();
    private readonly recordWaiters = new Map<string, (record: MatterServer | undefined) => void>();
    private readonly periodicTimer: Timer;

    constructor(
        private readonly multicastServer: UdpMulticastServer,
    ) {
        multicastServer.onMessage((message, remoteIp) => this.handleDnsMessage(message, remoteIp));
        this.periodicTimer = Time.getPeriodicTimer(60 * 1000 /* 1 mn */, () => this.expire()).start();
    }

    async findDevice({operationalId}: Fabric, nodeId: NodeId): Promise<MatterServer | undefined> {
        const operationalIdString = operationalId.toHex().toUpperCase();
        const deviceMatterQname = getDeviceMatterQname(operationalIdString, nodeId.toString());

        const record = this.matterDeviceRecords.get(deviceMatterQname);
        if (record !== undefined) return { ip: record.ip, port: record.port };

        const { promise, resolver } = await getPromiseResolver<MatterServer | undefined>();
        const timer = Time.getTimer(5 * 1000 /* 5 s*/, () => {
            this.recordWaiters.delete(deviceMatterQname);
            resolver(undefined);
        }).start();
        this.recordWaiters.set(deviceMatterQname, resolver);
        this.multicastServer.send(DnsCodec.encode({ queries: [{ name: deviceMatterQname, recordClass: RecordClass.IN, recordType: RecordType.SRV }]}));
        const result = await promise;
        timer.stop();
        return result;
    }

    close() {
        this.multicastServer.close();
        this.periodicTimer.stop();
        [...this.recordWaiters.values()].forEach(waiter => waiter(undefined));
    }

    private handleDnsMessage(messageBytes: ByteArray, remoteIp: string) {
        const message = DnsCodec.decode(messageBytes);
        if (message === undefined) return; // The message cannot be parsed
        if (message.messageType !== MessageType.Response) return;

        const answers = [...message.answers, ...message.additionalRecords];
        const srvRecord = answers.find(({ name, recordType }) => recordType === RecordType.SRV && name.endsWith(MATTER_SERVICE_QNAME));
        if (srvRecord === undefined) return;
        const { name: matterName, ttl, value: { target, port: matterPort } } = (srvRecord as Record<SrvRecordValue>);
        const aRecord = answers.find(({ name, recordType }) => recordType === RecordType.A && name === target);
        if (aRecord === undefined) return;
        const matterIp = (aRecord as Record<string>).value;
        const record = { ip: matterIp, port: matterPort, expires: Date.now() + ttl * 1000 };
        this.matterDeviceRecords.set(matterName, record);

        const waiter = this.recordWaiters.get(matterName);
        if (waiter === undefined) return;
        waiter({ ip: matterIp, port: matterPort });
        this.recordWaiters.delete(matterName);
    }

    private expire() {
        const now = Date.now();
        [...this.matterDeviceRecords.entries()].forEach(([key, {expires}]) => {
            if (now < expires) return;
            this.matterDeviceRecords.delete(key);
        });
    }
}
