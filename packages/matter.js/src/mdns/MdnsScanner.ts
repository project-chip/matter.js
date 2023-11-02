/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    DnsCodec,
    DnsMessagePartiallyPreEncoded,
    DnsMessageType,
    DnsQuery,
    DnsRecord,
    DnsRecordClass,
    DnsRecordType,
    MAX_MDNS_MESSAGE_SIZE,
    SrvRecordValue,
} from "../codec/DnsCodec.js";
import { ImplementationError } from "../common/MatterError.js";
import { CommissionableDevice, CommissionableDeviceIdentifiers, Scanner } from "../common/Scanner.js";
import { ServerAddress, ServerAddressIp } from "../common/ServerAddress.js";
import { NodeId } from "../datatype/NodeId.js";
import { VendorId } from "../datatype/VendorId.js";
import { Fabric } from "../fabric/Fabric.js";
import { Logger } from "../log/Logger.js";
import { UdpMulticastServer } from "../net/UdpMulticastServer.js";
import { Time, Timer } from "../time/Time.js";
import { ByteArray } from "../util/ByteArray.js";
import { isIPv6 } from "../util/Ip.js";
import { createPromise } from "../util/Promises.js";
import {
    MATTER_COMMISSION_SERVICE_QNAME,
    MATTER_SERVICE_QNAME,
    getCommissioningModeQname,
    getDeviceInstanceQname,
    getDeviceMatterQname,
    getDeviceTypeQname,
    getLongDiscriminatorQname,
    getShortDiscriminatorQname,
    getVendorQname,
} from "./MdnsConsts.js";
import { MDNS_BROADCAST_IPV4, MDNS_BROADCAST_IPV6, MDNS_BROADCAST_PORT } from "./MdnsServer.js";

const logger = Logger.get("MdnsScanner");

type MatterServerRecordWithExpire = ServerAddressIp & {
    expires: number;
};

type CommissionableDeviceRecordWithExpire = Omit<CommissionableDevice, "addresses"> & {
    expires: number;
    addresses: Map<string, MatterServerRecordWithExpire>; // Override addresses type to include expiration
    instanceId: string; // instance ID
    SD: number; // Additional Field for Short discriminator
    V?: number; // Additional Field for Vendor ID
    P?: number; // Additional Field for Product ID
};

/** The initial number of seconds between two announcements. MDNS specs require 1-2 seconds, so lets use the middle. */
const START_ANNOUNCE_INTERVAL_SECONDS = 1.5;

/**
 * This class implements the Scanner interface for a MDNS scanner via UDP messages in a IP based network.
 * It sends out queries to discover various types of Matter device types and listens for announcements.
 */
export class MdnsScanner implements Scanner {
    static async create(options?: { enableIpv4?: boolean; netInterface?: string }) {
        const { enableIpv4, netInterface } = options ?? {};
        return new MdnsScanner(
            await UdpMulticastServer.create({
                netInterface: netInterface,
                broadcastAddressIpv4: enableIpv4 ? MDNS_BROADCAST_IPV4 : undefined,
                broadcastAddressIpv6: MDNS_BROADCAST_IPV6,
                listeningPort: MDNS_BROADCAST_PORT,
            }),
            enableIpv4,
        );
    }

    private readonly activeAnnounceQueries = new Map<string, { queries: DnsQuery[]; answers: DnsRecord<any>[] }>();
    private queryTimer?: Timer;
    private nextAnnounceIntervalSeconds = START_ANNOUNCE_INTERVAL_SECONDS;

    private readonly operationalDeviceRecords = new Map<string, Map<string, MatterServerRecordWithExpire>>();
    private readonly commissionableDeviceRecords = new Map<string, CommissionableDeviceRecordWithExpire>();
    private readonly recordWaiters = new Map<
        string,
        { resolver: () => void; timer?: Timer; resolveOnUpdatedRecords: boolean }
    >();
    private readonly periodicTimer: Timer;
    private closing = false;

    constructor(
        private readonly multicastServer: UdpMulticastServer,
        private readonly enableIpv4?: boolean,
    ) {
        multicastServer.onMessage((message, remoteIp, netInterface) =>
            this.handleDnsMessage(message, remoteIp, netInterface),
        );
        this.periodicTimer = Time.getPeriodicTimer(60 * 1000 /* 1 mn */, () => this.expire()).start();
    }

    /**
     * Sends out one DNS-SD query for all collected announce records and start a timer for the next query with doubled
     * interval, maximum 60min, as per MDNS specs. The already known answers are tried to be sent in the query as long
     * as they fit into a maximum 1500 byte long packet (as defined in MDNS specs), else they are split into more
     * packets and the query is sent as Truncated query.
     * @private
     */
    private async sendQueries() {
        this.queryTimer?.stop();
        const allQueries = Array.from(this.activeAnnounceQueries.values());
        const queries = allQueries.flatMap(({ queries }) => queries);
        const answers = allQueries.flatMap(({ answers }) => answers);

        this.queryTimer = Time.getTimer(this.nextAnnounceIntervalSeconds * 1000, () => this.sendQueries()).start();

        logger.debug(
            `Sending ${queries.length} query records for ${this.activeAnnounceQueries.size} queries with ${answers.length} known answers. Re-Announce in ${this.nextAnnounceIntervalSeconds} seconds`,
        );

        const nextAnnounceInterval = this.nextAnnounceIntervalSeconds * 2;
        this.nextAnnounceIntervalSeconds = Math.min(nextAnnounceInterval, 60 * 60 /* 1 hour */);

        const answersToSend = [...answers];

        const dnsMessageDataToSend = {
            messageType: DnsMessageType.TruncatedQuery,
            transactionId: 0,
            queries,
            authorities: [],
            answers: [],
            additionalRecords: [],
        } as DnsMessagePartiallyPreEncoded;

        const emptyDnsMessage = DnsCodec.encode(dnsMessageDataToSend);
        let dnsMessageSize = emptyDnsMessage.length;

        while (true) {
            if (answersToSend.length > 0) {
                const nextAnswer = answersToSend.shift();
                if (nextAnswer === undefined) {
                    break;
                }

                const nextAnswerEncoded = DnsCodec.encodeRecord(nextAnswer);
                dnsMessageSize += nextAnswerEncoded.length; // Add additional record as long as size is ok

                if (dnsMessageSize > MAX_MDNS_MESSAGE_SIZE) {
                    if (dnsMessageDataToSend.answers.length === 0) {
                        // The first answer is already too big, log at least a warning
                        logger.warn(
                            `MDNS Query with ${JSON.stringify(
                                queries,
                            )} is too big to fit into a single MDNS message. Send anyway, but please report!`,
                        );
                    }
                    // New answer do not fit anymore, send out the message
                    await this.multicastServer.send(DnsCodec.encode(dnsMessageDataToSend));

                    // Reset the message, length counter and included answers to count for next message
                    dnsMessageDataToSend.queries.length = 0;
                    dnsMessageDataToSend.answers.length = 0;
                    dnsMessageSize = emptyDnsMessage.length + nextAnswerEncoded.length;
                }
                dnsMessageDataToSend.answers.push(nextAnswerEncoded);
            } else {
                break;
            }
        }

        await this.multicastServer.send(
            DnsCodec.encode({ ...dnsMessageDataToSend, messageType: DnsMessageType.Query }),
        );
    }

    /**
     * Set new DnsQuery records to the list of active queries to discover devices in the network and start sending them
     * out. When entry already exists the query is overwritten and answers are always added.
     */
    private setQueryRecords(queryId: string, queries: DnsQuery[], answers: DnsRecord<any>[] = []) {
        const activeExistingQuery = this.activeAnnounceQueries.get(queryId);
        if (activeExistingQuery) {
            answers = [...activeExistingQuery.answers, ...answers];
        }
        this.activeAnnounceQueries.set(queryId, { queries, answers });
        logger.debug(`Set ${queries.length} query records for query ${queryId}: ${JSON.stringify(queries)}`);
        this.queryTimer?.stop();
        this.nextAnnounceIntervalSeconds = START_ANNOUNCE_INTERVAL_SECONDS; // Reset query interval
        this.queryTimer = Time.getTimer(0, () => this.sendQueries()).start();
    }

    private getActiveQueryEarlierAnswers() {
        return Array.from(this.activeAnnounceQueries.values()).flatMap(({ answers }) => answers);
    }

    /**
     * Remove a query from the list of active queries because discovery has finished or timed out and stop sending it
     * out. If it was the last query announcing will stop completely.
     */
    private removeQuery(queryId: string) {
        this.activeAnnounceQueries.delete(queryId);
        if (this.activeAnnounceQueries.size === 0) {
            logger.debug(`Removing last query ${queryId} and stopping announce timer`);
            this.queryTimer?.stop();
            this.nextAnnounceIntervalSeconds = START_ANNOUNCE_INTERVAL_SECONDS;
        } else {
            logger.debug(`Removing query ${queryId}`);
        }
    }

    /**
     * Returns the list of all targets (IP/port) discovered for a queried operational device record.
     */
    private getOperationalDeviceRecords(deviceMatterQname: string) {
        const recordMap = this.operationalDeviceRecords.get(deviceMatterQname);
        if (recordMap !== undefined) {
            return this.sortServerEntries(Array.from(recordMap.values())).map(({ ip, port }) => ({
                ip,
                port,
                type: "udp",
            })) as ServerAddressIp[];
        }
        return [];
    }

    /**
     * Sort the list of found IP/ports and make sure link-local IPv6 addresses come first, IPv6 next and IPv4 last.
     *
     * @param entries
     */
    private sortServerEntries(entries: MatterServerRecordWithExpire[]) {
        return entries.sort((a, b) => {
            const aIsIPv6 = isIPv6(a.ip);
            const bIsIPv6 = isIPv6(b.ip);

            if (aIsIPv6 && !bIsIPv6) {
                return -1; // IPv6 comes first
            } else if (!aIsIPv6 && bIsIPv6) {
                return 1; // IPv4 comes after IPv6
            } else if (aIsIPv6 && bIsIPv6) {
                if (a.ip.startsWith("fd") && !b.ip.startsWith("fd")) {
                    return -1; // addresses starting with "fd" come before other IPv6 addresses
                } else if (!a.ip.startsWith("fd") && b.ip.startsWith("fd")) {
                    return 1; // addresses starting with "fd" come after other IPv6 addresses
                } else if (a.ip.startsWith("fe80:") && !b.ip.startsWith("fe80:")) {
                    return -1; // link-local IPv6 comes before other global IPv6 addresses
                } else if (!a.ip.startsWith("fe80:") && b.ip.startsWith("fe80:")) {
                    return 1; // link-local IPv6 comes after other global IPv6 addresses
                }
            }
            return 0; // no preference
        });
    }

    /**
     * Registers a deferred promise for a specific queryId together with a timeout and return the promise.
     * The promise will be resolved when the timer runs out latest.
     */
    private async registerWaiterPromise(queryId: string, timeoutSeconds?: number, resolveOnUpdatedRecords = true) {
        const { promise, resolver } = createPromise<void>();
        const timer =
            timeoutSeconds !== undefined
                ? Time.getTimer(timeoutSeconds * 1000, () => this.finishWaiter(queryId, true)).start()
                : undefined;
        this.recordWaiters.set(queryId, { resolver, timer, resolveOnUpdatedRecords });
        logger.debug(
            `Registered waiter for query ${queryId} with ${
                timeoutSeconds !== undefined ? `timeout ${timeoutSeconds} seconds` : "no timeout"
            }${resolveOnUpdatedRecords ? "" : " (not resolving on updated records)"}`,
        );
        return { promise };
    }

    /**
     * Remove a waiter promise for a specific queryId and stop the connected timer. If required also resolve the
     * promise.
     */
    private finishWaiter(queryId: string, resolvePromise: boolean, isUpdatedRecord = false) {
        const waiter = this.recordWaiters.get(queryId);
        if (waiter === undefined) return;
        const { timer, resolver, resolveOnUpdatedRecords } = waiter;
        if (isUpdatedRecord && !resolveOnUpdatedRecords) return;
        logger.debug(`Finishing waiter for query ${queryId}, resolving: ${resolvePromise}`);
        if (timer !== undefined) {
            timer.stop();
        }
        if (resolvePromise) {
            resolver();
        }
        this.recordWaiters.delete(queryId);
    }

    /** Returns weather a waiter promise is registered for a specific queryId. */
    private hasWaiter(queryId: string) {
        return this.recordWaiters.has(queryId);
    }

    private createOperationalMatterQName(operationalId: ByteArray, nodeId: NodeId) {
        const operationalIdString = operationalId.toHex().toUpperCase();
        return getDeviceMatterQname(operationalIdString, NodeId.toHexString(nodeId));
    }

    /**
     * Method to find an operational device (already commissioned) and return a promise with the list of discovered
     * IP/ports or an empty array if not found.
     */
    async findOperationalDevice(
        { operationalId }: Fabric,
        nodeId: NodeId,
        timeoutSeconds?: number,
        ignoreExistingRecords = false,
    ): Promise<ServerAddressIp[]> {
        if (this.closing) {
            throw new ImplementationError("Cannot discover operational device because scanner is closing.");
        }
        const deviceMatterQname = this.createOperationalMatterQName(operationalId, nodeId);

        let storedRecords = ignoreExistingRecords ? [] : this.getOperationalDeviceRecords(deviceMatterQname);
        if (storedRecords.length === 0) {
            const { promise } = await this.registerWaiterPromise(deviceMatterQname, timeoutSeconds);

            this.setQueryRecords(deviceMatterQname, [
                {
                    name: deviceMatterQname,
                    recordClass: DnsRecordClass.IN,
                    recordType: DnsRecordType.SRV,
                },
            ]);

            await promise;
            storedRecords = this.getOperationalDeviceRecords(deviceMatterQname);
            this.removeQuery(deviceMatterQname);
        }
        return storedRecords;
    }

    cancelOperationalDeviceDiscovery(fabric: Fabric, nodeId: NodeId) {
        const deviceMatterQname = this.createOperationalMatterQName(fabric.operationalId, nodeId);
        this.finishWaiter(deviceMatterQname, true);
    }

    cancelCommissionableDeviceDiscovery(identifier: CommissionableDeviceIdentifiers) {
        const queryId = this.buildCommissionableQueryIdentifier(identifier);
        this.finishWaiter(queryId, true);
    }

    getDiscoveredOperationalDevices({ operationalId }: Fabric, nodeId: NodeId) {
        return this.getOperationalDeviceRecords(this.createOperationalMatterQName(operationalId, nodeId));
    }

    /**
     * Returns the metadata and list of all target addresses (IP/port) discovered for a queried commissionable device
     * record.
     */
    private getCommissionableDeviceRecords(identifier: CommissionableDeviceIdentifiers) {
        const storedRecords = Array.from(this.commissionableDeviceRecords.values());

        const foundRecords = new Array<CommissionableDeviceRecordWithExpire>();
        if ("instanceId" in identifier) {
            foundRecords.push(...storedRecords.filter(({ instanceId }) => instanceId === identifier.instanceId));
        } else if ("longDiscriminator" in identifier) {
            foundRecords.push(...storedRecords.filter(({ D }) => D === identifier.longDiscriminator));
        } else if ("shortDiscriminator" in identifier) {
            foundRecords.push(...storedRecords.filter(({ SD }) => SD === identifier.shortDiscriminator));
        } else if ("vendorId" in identifier) {
            foundRecords.push(...storedRecords.filter(({ V }) => V === identifier.vendorId));
        } else if ("deviceType" in identifier) {
            foundRecords.push(...storedRecords.filter(({ DT }) => DT === identifier.deviceType));
        } else if ("productId" in identifier) {
            foundRecords.push(...storedRecords.filter(({ P }) => P === identifier.productId));
        } else if (Object.keys(identifier).length === 0) {
            foundRecords.push(...storedRecords.filter(({ CM }) => CM === 1 || CM === 2));
        }

        return foundRecords.map(record => {
            return {
                ...record,
                addresses: this.sortServerEntries(Array.from(record.addresses.values())).map(({ ip, port }) => ({
                    ip,
                    port,
                    type: "udp",
                })) as ServerAddressIp[],
                expires: undefined,
            };
        });
    }

    /**
     * Builds an identifier string for commissionable queries based on the given identifier object.
     * Some identifiers are identical to the official DNS-SD identifiers, others are custom.
     */
    private buildCommissionableQueryIdentifier(identifier: CommissionableDeviceIdentifiers) {
        if ("instanceId" in identifier) {
            return getDeviceInstanceQname(identifier.instanceId);
        } else if ("longDiscriminator" in identifier) {
            return getLongDiscriminatorQname(identifier.longDiscriminator);
        } else if ("shortDiscriminator" in identifier) {
            return getShortDiscriminatorQname(identifier.shortDiscriminator);
        } else if ("vendorId" in identifier) {
            return getVendorQname(identifier.vendorId);
        } else if ("deviceType" in identifier) {
            return getDeviceTypeQname(identifier.deviceType);
        } else if ("productId" in identifier) {
            // Custom identifier because normally productId is only included in TXT record
            return `_P${identifier.productId}`;
        } else if (Object.keys(identifier).length === 0) {
            return getCommissioningModeQname();
        }
        throw new ImplementationError(`Invalid commissionable device identifier : ${JSON.stringify(identifier)}`); // Should neven happen
    }

    private extractInstanceId(instanceName: string) {
        const instanceNameSeparator = instanceName.indexOf(".");
        if (instanceNameSeparator !== -1) {
            return instanceName.substring(0, instanceNameSeparator);
        }
        return instanceName;
    }

    /**
     * Check all options for a query identifier and return the most relevant one with an active query
     */
    private findCommissionableQueryIdentifier(instanceName: string, record: CommissionableDeviceRecordWithExpire) {
        if (this.closing) {
            throw new ImplementationError("Cannot discover commissionable device because scanner is closing.");
        }
        const instanceQueryId = this.buildCommissionableQueryIdentifier({
            instanceId: this.extractInstanceId(instanceName),
        });
        if (this.activeAnnounceQueries.has(instanceQueryId)) {
            return instanceQueryId;
        }

        const longDiscriminatorQueryId = this.buildCommissionableQueryIdentifier({ longDiscriminator: record.D });
        if (this.activeAnnounceQueries.has(longDiscriminatorQueryId)) {
            return longDiscriminatorQueryId;
        }

        const shortDiscriminatorQueryId = this.buildCommissionableQueryIdentifier({ shortDiscriminator: record.SD });
        if (this.activeAnnounceQueries.has(shortDiscriminatorQueryId)) {
            return shortDiscriminatorQueryId;
        }

        if (record.V !== undefined) {
            const vendorIdQueryId = this.buildCommissionableQueryIdentifier({ vendorId: VendorId(record.V) });
            if (this.activeAnnounceQueries.has(vendorIdQueryId)) {
                return vendorIdQueryId;
            }
        }

        if (record.DT !== undefined) {
            const deviceTypeQueryId = this.buildCommissionableQueryIdentifier({ deviceType: record.DT });
            if (this.activeAnnounceQueries.has(deviceTypeQueryId)) {
                return deviceTypeQueryId;
            }
        }

        if (record.P !== undefined) {
            const productIdQueryId = this.buildCommissionableQueryIdentifier({ productId: record.P });
            if (this.activeAnnounceQueries.has(productIdQueryId)) {
                return productIdQueryId;
            }
        }

        const commissioningModeQueryId = this.buildCommissionableQueryIdentifier({});
        if (this.activeAnnounceQueries.has(commissioningModeQueryId)) {
            return commissioningModeQueryId;
        }

        return undefined;
    }

    private getCommissionableQueryRecords(identifier: CommissionableDeviceIdentifiers) {
        const queries = new Array<DnsQuery>();

        queries.push({
            name: MATTER_COMMISSION_SERVICE_QNAME,
            recordClass: DnsRecordClass.IN,
            recordType: DnsRecordType.PTR,
        });

        if ("instanceId" in identifier) {
            queries.push({
                name: getDeviceInstanceQname(identifier.instanceId),
                recordClass: DnsRecordClass.IN,
                recordType: DnsRecordType.PTR,
            });
        } else if ("longDiscriminator" in identifier) {
            queries.push({
                name: getLongDiscriminatorQname(identifier.longDiscriminator),
                recordClass: DnsRecordClass.IN,
                recordType: DnsRecordType.PTR,
            });
        } else if ("shortDiscriminator" in identifier) {
            queries.push({
                name: getShortDiscriminatorQname(identifier.shortDiscriminator),
                recordClass: DnsRecordClass.IN,
                recordType: DnsRecordType.PTR,
            });
        } else if ("vendorId" in identifier) {
            queries.push({
                name: getVendorQname(identifier.vendorId),
                recordClass: DnsRecordClass.IN,
                recordType: DnsRecordType.PTR,
            });
        } else if ("deviceType" in identifier) {
            queries.push({
                name: getDeviceTypeQname(identifier.deviceType),
                recordClass: DnsRecordClass.IN,
                recordType: DnsRecordType.PTR,
            });
        } else {
            // Other queries just scan for commissionable devices
            queries.push({
                name: getCommissioningModeQname(),
                recordClass: DnsRecordClass.IN,
                recordType: DnsRecordType.PTR,
            });
        }

        return queries;
    }

    /**
     * Discovers commissionable devices based on a defined identifier for ma maximal given timeout, but returns the
     * first found entries. If already a discovered device matches in the cache the query it is returned directly and
     * no query is triggered. If no record exists a query is sent out and the promise gets fulfilled as soon as at least
     * one device is found. If no device is discovered in the defined timeframe an empty array is returned. When the
     * promise got fulfilled no more queries are send out, but more device entries might be added when discovered later.
     * These can be requested by the getCommissionableDevices method.
     */
    async findCommissionableDevices(
        identifier: CommissionableDeviceIdentifiers,
        timeoutSeconds = 5,
        ignoreExistingRecords = false,
    ): Promise<CommissionableDevice[]> {
        let storedRecords = ignoreExistingRecords ? [] : this.getCommissionableDeviceRecords(identifier);
        if (storedRecords.length === 0) {
            const queryId = this.buildCommissionableQueryIdentifier(identifier);
            const { promise } = await this.registerWaiterPromise(queryId, timeoutSeconds);

            this.setQueryRecords(queryId, this.getCommissionableQueryRecords(identifier));

            await promise;
            storedRecords = this.getCommissionableDeviceRecords(identifier);
            this.removeQuery(queryId);
        }

        return storedRecords;
    }

    /**
     * Discovers commissionable devices based on a defined identifier and returns the first found entries. If already a
     * @param identifier
     * @param callback
     * @param timeoutSeconds
     */
    async findCommissionableDevicesContinuously(
        identifier: CommissionableDeviceIdentifiers,
        callback: (device: CommissionableDevice) => void,
        timeoutSeconds = 900,
    ): Promise<CommissionableDevice[]> {
        const discoveredDevices = new Set<string>();

        const discoveryEndTime = Time.nowMs() + timeoutSeconds * 1000;
        const queryId = this.buildCommissionableQueryIdentifier(identifier);
        this.setQueryRecords(queryId, this.getCommissionableQueryRecords(identifier));

        while (true) {
            this.getCommissionableDeviceRecords(identifier).forEach(device => {
                const { deviceIdentifier } = device;
                if (!discoveredDevices.has(deviceIdentifier)) {
                    discoveredDevices.add(deviceIdentifier);
                    callback(device);
                }
            });

            const remainingTime = Math.ceil((discoveryEndTime - Time.nowMs()) / 1000);
            if (remainingTime <= 0) {
                break;
            }
            const { promise } = await this.registerWaiterPromise(queryId, remainingTime, false);
            await promise;
        }
        return this.getCommissionableDeviceRecords(identifier);
    }

    getDiscoveredCommissionableDevices(identifier: CommissionableDeviceIdentifiers) {
        return this.getCommissionableDeviceRecords(identifier);
    }

    /**
     * Close all connects, end all timers and resolve all pending promises.
     */
    async close() {
        this.closing = true;
        this.periodicTimer.stop();
        this.queryTimer?.stop();
        await this.multicastServer.close();
        // Resolve all pending promises where logic waits for the response (aka: has a timer)
        [...this.recordWaiters.keys()].forEach(queryId =>
            this.finishWaiter(queryId, !!this.recordWaiters.get(queryId)?.timer),
        );
    }

    /**
     * Main method to handle all incoming DNS messages.
     * It will parse the message and check if it contains relevant discovery records.
     */
    private handleDnsMessage(messageBytes: ByteArray, _remoteIp: string, netInterface: string) {
        if (this.closing) return;
        const message = DnsCodec.decode(messageBytes);
        if (message === undefined) return; // The message cannot be parsed
        if (message.messageType !== DnsMessageType.Response && message.messageType !== DnsMessageType.TruncatedResponse)
            return;

        const answers = [...message.answers, ...message.additionalRecords];

        // Check if we got operational discovery records and handle them
        if (this.handleOperationalSrvRecord(answers, this.getActiveQueryEarlierAnswers(), netInterface)) return;

        // Else check if we got commissionable discovery records and handle them
        this.handleCommissionableRecords(answers, this.getActiveQueryEarlierAnswers(), netInterface);
    }

    private handleIpRecords(
        answers: DnsRecord<any>[],
        target: string,
        netInterface: string,
    ): { value: string; ttl: number }[] {
        const ipRecords = answers.filter(
            ({ name, recordType }) =>
                ((recordType === DnsRecordType.A && this.enableIpv4) || recordType === DnsRecordType.AAAA) &&
                name === target,
        );
        return (ipRecords as DnsRecord<string>[]).map(({ value, ttl }) => ({
            value: value.startsWith("fe80::") ? `${value}%${netInterface}` : value,
            ttl,
        }));
    }

    private handleOperationalSrvRecord(
        answers: DnsRecord<any>[],
        formerAnswers: DnsRecord<any>[],
        netInterface: string,
    ) {
        // Does the message contain data for an operational service we already know?
        let operationalSrvRecord = answers.find(
            ({ name, recordType }) => recordType === DnsRecordType.SRV && name.endsWith(MATTER_SERVICE_QNAME),
        );
        if (operationalSrvRecord === undefined) {
            operationalSrvRecord = formerAnswers.find(
                ({ name, recordType }) => recordType === DnsRecordType.SRV && name.endsWith(MATTER_SERVICE_QNAME),
            );
            if (operationalSrvRecord === undefined) return false;
        }

        const {
            name: matterName,
            ttl,
            value: { target, port },
        } = operationalSrvRecord;

        // we got an expiry info, so we can remove the record if we know it already and are done
        if (ttl === 0) {
            if (this.operationalDeviceRecords.has(matterName)) {
                logger.debug(
                    `Removing operational device ${matterName} from cache on interface ${netInterface} because of ttl=0`,
                );
                this.operationalDeviceRecords.delete(matterName);
            }
            return true;
        }

        const ips = this.handleIpRecords([...answers, ...formerAnswers], target, netInterface);
        const recordExists = this.operationalDeviceRecords.has(matterName);
        const storedRecords =
            this.operationalDeviceRecords.get(matterName) ?? new Map<string, MatterServerRecordWithExpire>();
        if (ips.length > 0) {
            for (const { value: ip, ttl } of ips) {
                if (ttl === 0) {
                    logger.debug(
                        `Removing IP ${ip} for operational device ${matterName} from cache on interface ${netInterface} because of ttl=0`,
                    );
                    storedRecords.delete(ip);
                    continue;
                }
                const matterServer = storedRecords.get(ip) ?? { ip, port, type: "udp", expires: 0 };
                matterServer.expires = Time.nowMs() + ttl * 1000;

                storedRecords.set(matterServer.ip, matterServer);
            }
            if (!this.operationalDeviceRecords.has(matterName)) {
                logger.debug(`Added operational device ${matterName} to cache on interface ${netInterface}.`);
            }
            this.operationalDeviceRecords.set(matterName, storedRecords);
        }

        if (storedRecords.size === 0 && this.hasWaiter(matterName)) {
            // We have no or no more (because expired) IPs, and we are interested in this particular service name, request them
            const queries = [{ name: target, recordClass: DnsRecordClass.IN, recordType: DnsRecordType.AAAA }];
            if (this.enableIpv4) {
                queries.push({ name: target, recordClass: DnsRecordClass.IN, recordType: DnsRecordType.A });
            }
            logger.debug(`Requesting IP addresses for operational device ${matterName} on interface ${netInterface}.`);
            this.setQueryRecords(matterName, queries, answers);
        } else if (storedRecords.size > 0) {
            this.finishWaiter(matterName, true, recordExists);
        }
        return true;
    }

    private handleCommissionableRecords(
        answers: DnsRecord<any>[],
        formerAnswers: DnsRecord<any>[],
        netInterface: string,
    ) {
        // Does the message contain a SRV record for an operational service we are interested in?
        let commissionableRecords = answers.filter(({ name }) => name.endsWith(MATTER_COMMISSION_SERVICE_QNAME));
        if (!commissionableRecords.length) {
            commissionableRecords = formerAnswers.filter(({ name }) => name.endsWith(MATTER_COMMISSION_SERVICE_QNAME));
            if (!commissionableRecords.length) return;
        }

        const queryMissingDataForInstances = new Set<string>();

        // First process the TXT records
        const txtRecords = commissionableRecords.filter(({ recordType }) => recordType === DnsRecordType.TXT);
        for (const record of txtRecords) {
            const { name, ttl } = record;
            if (ttl === 0) {
                if (this.commissionableDeviceRecords.has(name)) {
                    logger.debug(
                        `Removing commissionable device ${name} from cache on interface ${netInterface} because of ttl=0`,
                    );
                    this.commissionableDeviceRecords.delete(name);
                }
                continue;
            }
            const parsedRecord = this.parseCommissionableTxtRecord(record);
            if (parsedRecord === undefined) continue;
            parsedRecord.instanceId = this.extractInstanceId(name);
            parsedRecord.deviceIdentifier = parsedRecord.instanceId;
            if (parsedRecord.D !== undefined && parsedRecord.SD === undefined) {
                parsedRecord.SD = (parsedRecord.D >> 8) & 0x0f;
            }
            if (parsedRecord.VP !== undefined) {
                const VpValueArr = parsedRecord.VP.split("+");
                parsedRecord.V = VpValueArr[0] !== undefined ? parseInt(VpValueArr[0]) : undefined;
                parsedRecord.P = VpValueArr[1] !== undefined ? parseInt(VpValueArr[1]) : undefined;
            }

            const storedRecord = this.commissionableDeviceRecords.get(name);
            if (storedRecord === undefined) {
                queryMissingDataForInstances.add(name);

                logger.debug(
                    `Found commissionable device ${name} with discriminator ${parsedRecord.D}/${parsedRecord.SD} ...`,
                );
            } else {
                parsedRecord.addresses = storedRecord.addresses;
            }
            this.commissionableDeviceRecords.set(name, parsedRecord);
        }

        // We got SRV records for the instance ID, so we know the host name now and can collect the IP addresses
        const srvRecords = commissionableRecords.filter(({ recordType }) => recordType === DnsRecordType.SRV);
        for (const record of srvRecords) {
            const storedRecord = this.commissionableDeviceRecords.get(record.name);
            if (storedRecord === undefined) continue;
            const {
                value: { target, port },
                ttl,
            } = record as DnsRecord<SrvRecordValue>;
            if (ttl === 0) {
                logger.debug(
                    `Removing commissionable device ${record.name} from cache on interface ${netInterface} because of ttl=0`,
                );
                this.commissionableDeviceRecords.delete(record.name);
                continue;
            }

            const recordExisting = storedRecord.addresses.size > 0;

            const ips = this.handleIpRecords([...answers, ...formerAnswers], target, netInterface);
            if (ips.length > 0) {
                for (const { value: ip, ttl } of ips) {
                    if (ttl === 0) {
                        logger.debug(
                            `Removing IP ${ip} for commissionable device ${record.name} from cache on interface ${netInterface} because of ttl=0`,
                        );
                        storedRecord.addresses.delete(ip);
                        continue;
                    }
                    const matterServer = storedRecord.addresses.get(ip) ?? { ip, port, type: "udp", expires: 0 };
                    matterServer.expires = Time.nowMs() + ttl * 1000;

                    storedRecord.addresses.set(ip, matterServer);
                }
            }
            this.commissionableDeviceRecords.set(record.name, storedRecord);
            if (storedRecord.addresses.size === 0) {
                const queryId = this.findCommissionableQueryIdentifier("", storedRecord);
                if (queryId === undefined) continue;
                // We have no or no more (because expired) IPs and we are interested in such a service name, request them
                const queries = [{ name: target, recordClass: DnsRecordClass.IN, recordType: DnsRecordType.AAAA }];
                if (this.enableIpv4) {
                    queries.push({ name: target, recordClass: DnsRecordClass.IN, recordType: DnsRecordType.A });
                }
                logger.debug(
                    `Requesting IP addresses for commissionable device ${record.name} on interface ${netInterface}.`,
                );
                this.setQueryRecords(queryId, queries, answers);
            }
            if (storedRecord.addresses.size === 0) continue;

            const queryId = this.findCommissionableQueryIdentifier(record.name, storedRecord);
            if (queryId === undefined) continue;

            queryMissingDataForInstances.delete(record.name); // No need to query anymore, we have anything we need
            this.finishWaiter(queryId, true, recordExisting);
        }

        // We have to query for the SRV records for the missing commissionable devices where we only had TXT records
        if (queryMissingDataForInstances.size !== 0) {
            for (const name of Array.from(queryMissingDataForInstances.values())) {
                const storedRecord = this.commissionableDeviceRecords.get(name);
                if (storedRecord === undefined) continue;
                const queryId = this.findCommissionableQueryIdentifier("", storedRecord);
                if (queryId === undefined) continue;
                logger.debug(`Requesting more records for commissionable device ${name} on interface ${netInterface}.`);
                this.setQueryRecords(
                    queryId,
                    [{ name, recordClass: DnsRecordClass.IN, recordType: DnsRecordType.ANY }],
                    answers,
                );
            }
        }
    }

    private parseCommissionableTxtRecord(record: DnsRecord<any>): CommissionableDeviceRecordWithExpire | undefined {
        const { value, ttl } = record as DnsRecord<string[]>;
        if (!Array.isArray(value)) return undefined;
        const result = {
            addresses: new Map<string, ServerAddress>(),
            expires: Time.nowMs() + ttl * 1000,
        } as any;
        for (const item of value) {
            const [key, value] = item.split("=");
            if (key === undefined || value === undefined) continue;
            if (["SII", "SAI", "T", "D", "CM", "DT", "PH"].includes(key)) {
                const intValue = parseInt(value);
                if (isNaN(intValue)) continue;
                result[key] = intValue;
            } else if (["VP", "DN", "RI", "PI"].includes(key)) {
                result[key] = value;
            }
        }
        if (result.D === undefined || result.CM === undefined) return undefined; // Required data fields need to be existing
        return result as CommissionableDeviceRecordWithExpire;
    }

    private expire() {
        const now = Time.nowMs();
        [...this.operationalDeviceRecords.entries()].forEach(([_, recordMap]) =>
            [...recordMap.entries()].forEach(([key, { expires }]) => {
                if (now < expires) return;
                recordMap.delete(key);
            }),
        );
        [...this.commissionableDeviceRecords.entries()].forEach(([recordKey, { addresses, expires }]) => {
            if (now < expires) {
                // Entry still ok but check addresses for expiry
                [...addresses.entries()].forEach(([key, { expires }]) => {
                    if (now < expires) return;
                    addresses.delete(key);
                });
            }
            if (now >= expires || addresses.size === 0) {
                this.commissionableDeviceRecords.delete(recordKey);
            }
        });
    }
}
