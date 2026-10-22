/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    ClosedError,
    describeList,
    Diagnostic,
    DnsMessageType,
    DnsMessageTypeFlag,
    DnsRecord,
    DnsRecordType,
    Instant,
    isDeepEqual,
    Lifetime,
    Logger,
    MatterAggregateError,
    MdnsSocket,
    Millis,
    Mutex,
    NetworkInterfaceDetails,
    ObserverGroup,
    Seconds,
    Time,
    Timer,
    Timestamp,
} from "@matter/general";

const logger = Logger.get("MdnsServer");

const RESPONDER_NAMES_OWNER = "mdns-responder";

/** RFC 6762 §7.3 - Window for duplicate question suppression (999ms per python-zeroconf) */
export const QUESTION_SUPPRESSION_WINDOW = Millis(999);

export class MdnsServer {
    #lifetime: Lifetime;
    #observers = new ObserverGroup();
    #recordsGenerator = new Map<string, MdnsServer.RecordGenerator>();
    readonly #records = new Map<string, MdnsServer.InterfaceRecords>();
    readonly #addresses = new Map<string, NetworkInterfaceDetails | undefined>();
    readonly #recordVersions = new Map<string, number>();
    #recordVersion = 0;
    readonly #pendingAddressUpdates = new Map<
        string,
        { removed: DnsRecord[]; current: DnsRecord[]; remaining: number; nextSend: Timestamp }
    >();
    readonly #updates = new Mutex(this);
    readonly #addressRefresh: Timer;
    readonly #addressRepeat: Timer;
    #refreshTask?: Promise<void>;
    // Union of advertised names across interfaces, fed to the socket so it keeps queries for our records (notably
    // bare-hostname A/AAAA queries, which carry no service-type label) before decoding.  Reset when records change.
    readonly #responderNames = new Set<string>();
    #hostname?: string;
    readonly #recordLastSentAsMulticastAnswer = new Map<string, number>();
    readonly #truncatedQueryCache = new Map<string, { message: MdnsSocket.Message; timer: Timer }>();
    /** RFC 6762 §7.3 - Tracks recently answered queries for duplicate suppression */
    readonly #recentlyAnsweredQueries = new Map<
        string,
        {
            knownAnswerHashes: Set<string>;
            timestamp: Timestamp;
        }
    >();

    readonly #socket: MdnsSocket;

    constructor(socket: MdnsSocket, lifetime = Lifetime.process) {
        this.#socket = socket;
        this.#lifetime = lifetime.join("mdns server");
        // A quiet network must also withdraw addresses after an interface is renumbered.
        this.#addressRefresh = Time.getPeriodicTimer("MDNS address refresh", Seconds(30), () =>
            this.#scheduleAddressRefresh(),
        ).start();
        this.#addressRefresh.utility = true;
        this.#addressRepeat = Time.getPeriodicTimer("MDNS address repeat", Seconds(1), () =>
            this.#scheduleAddressRefresh(),
        );
        this.#addressRepeat.utility = true;
        this.#observers.on(this.#socket.receipt, this.#handleMessage.bind(this));
    }

    get network() {
        return this.#socket.network;
    }

    get supportsIpv4() {
        return this.#socket.supportsIpv4;
    }

    buildDnsRecordKey(record: DnsRecord<any>, netInterface?: string, unicastTarget?: string) {
        return `${record.name.toLowerCase()}-${record.recordClass}-${record.recordType}-${netInterface}-${unicastTarget}`;
    }

    async #handleMessage(incomingMessage: MdnsSocket.Message) {
        using _processing = this.#lifetime.join("processing message");
        try {
            using _lock = await this.#updates.lock();
            if (this.#lifetime.isClosing) return;
            await this.#respond(incomingMessage);
        } catch (error) {
            if (this.#lifetime.isClosing) {
                logger.debug("Ignoring mDNS query while closing", error);
            } else {
                logger.warn(`Failed to answer mDNS query on ${incomingMessage.sourceIntf}`, error);
            }
        }
    }

    async #respond(incomingMessage: MdnsSocket.Message) {
        const message = this.#prepareMessage(incomingMessage);
        if (message === undefined) {
            return;
        }
        const { byService, ownedNames } = await this.#recordsForInterface(incomingMessage.sourceIntf);

        // Ignore if we have no records for interface
        if (byService.size === 0) {
            return;
        }

        const { sourceIntf, sourceIp, transactionId, queries, answers: knownAnswers } = message;

        // Skip unrelated LAN traffic; run after #prepareMessage so TC continuations are first merged.
        if (!queries.some(q => ownedNames.has(q.name.toLowerCase()))) {
            return;
        }

        let sentPreviousPacket = false;
        for (const portRecords of byService.values()) {
            let answers = queries.flatMap(query => this.#queryRecords(query, portRecords));
            if (answers.length === 0) continue;

            // Only send additional records if the query is not for A or AAAA records
            let additionalRecords =
                queries.find(
                    query => query.recordType !== DnsRecordType.A && query.recordType !== DnsRecordType.AAAA,
                ) !== undefined
                    ? portRecords.filter(record => !answers.includes(record) && record.recordType !== DnsRecordType.PTR)
                    : [];
            if (knownAnswers.length > 0) {
                for (const knownAnswersRecord of knownAnswers) {
                    answers = answers.filter(record => !this.#suppressedByKnownAnswer(record, knownAnswersRecord));
                    if (answers.length === 0) break; // Nothing to send
                }
                if (answers.length === 0) continue; // Nothing to send
                if (additionalRecords.length > 0) {
                    for (const knownAnswersRecord of knownAnswers) {
                        additionalRecords = additionalRecords.filter(
                            record => !this.#suppressedByKnownAnswer(record, knownAnswersRecord),
                        );
                    }
                }
            }

            const now = Time.nowMs;
            let uniCastResponse = queries.filter(query => !query.uniCastResponse).length === 0;
            const answersTimeSinceLastSent = answers.map(answer => ({
                timeSinceLastMultiCast: Millis(
                    now - (this.#recordLastSentAsMulticastAnswer.get(this.buildDnsRecordKey(answer, sourceIntf)) ?? 0),
                ),
                ttl: answer.ttl,
            }));
            if (
                uniCastResponse &&
                answersTimeSinceLastSent.some(({ timeSinceLastMultiCast, ttl }) => timeSinceLastMultiCast > ttl / 4)
            ) {
                // If the query is for unicast response, still send as multicast if they were last sent as multicast longer then 1/4 of their ttl
                uniCastResponse = false;
            }
            if (!uniCastResponse) {
                answers = answers.filter(
                    // The last time sent as multicast was more than 900 ms ago
                    (_, index) => answersTimeSinceLastSent[index].timeSinceLastMultiCast >= Millis(900),
                );
                if (answers.length === 0) continue; // Nothing to send

                // RFC 6762 §7.3 - Check for duplicate question suppression
                if (this.#shouldSuppressResponse(queries, knownAnswers, sourceIntf, answers)) {
                    continue; // Another responder already answered
                }

                answers.forEach(answer =>
                    this.#recordLastSentAsMulticastAnswer.set(this.buildDnsRecordKey(answer, sourceIntf), now),
                );
            }

            if (sentPreviousPacket) {
                await Time.sleep("MDNS delay", Millis(20 + Math.floor(Math.random() * 100)));
            }
            if (this.#lifetime.isClosing) return;
            await this.#socket
                .send(
                    {
                        messageType: DnsMessageType.Response,
                        transactionId,
                        answers: this.#sendableAddressRecords(
                            sourceIntf,
                            sendable(answers, portRecords, uniCastResponse),
                        ),
                        additionalRecords: this.#sendableAddressRecords(
                            sourceIntf,
                            sendable(additionalRecords, portRecords, uniCastResponse),
                        ),
                    },
                    sourceIntf,
                    uniCastResponse ? sourceIp : undefined,
                )
                .catch(error => {
                    logger.warn(`Failed to send mDNS response to ${sourceIp}`, error);
                });
            sentPreviousPacket = true;
        }
    }

    async #announceRecordsForInterface(netInterface: string, records: DnsRecord<any>[]) {
        if (this.#lifetime.isClosing) return;
        // RFC 6762 §8.3: announcements carry all records in the answer section
        await this.#socket.send(
            {
                messageType: DnsMessageType.Response,
                answers: this.#sendableAddressRecords(netInterface, records),
            },
            netInterface,
        );
    }

    #sendableAddressRecords(netInterface: string, records: DnsRecord[]) {
        // An interface's subset cannot flush the host RRset when another interface may share the receiving link.
        const otherAddresses = [...this.#records]
            .filter(([name]) => name !== netInterface)
            .flatMap(([, records]) => addressRecords(records));
        return records.map(record =>
            record.flushCache &&
            (record.recordType === DnsRecordType.A || record.recordType === DnsRecordType.AAAA) &&
            otherAddresses.some(
                other =>
                    sameName(record.name, other.name) &&
                    record.recordType === other.recordType &&
                    record.recordClass === other.recordClass,
            )
                ? { ...record, flushCache: false }
                : record,
        );
    }

    #assertOpen() {
        if (this.#lifetime.isClosing) {
            throw new ClosedError("MDNS server is closing");
        }
    }

    async #recordsForInterface(netInterface: string, publish = true) {
        const addrs = copyAddresses(await this.network.getIpMac(netInterface));
        this.#assertOpen();
        const previous = this.#records.get(netInterface);
        if (
            previous !== undefined &&
            this.#recordVersions.get(netInterface) === this.#recordVersion &&
            isDeepEqual(addressSnapshot(addrs), addressSnapshot(this.#addresses.get(netInterface)))
        ) {
            if (publish) await this.#publishAddressUpdate(netInterface);
            return previous;
        }

        const byService = new Map<string, DnsRecord[]>();
        const ownedNames = new Set<string>();
        if (addrs !== undefined) {
            const hostname = this.#hostname ?? hostnameForMac(addrs.mac);
            for (const [service, generator] of this.#recordsGenerator) {
                const records = generator(netInterface, addrs, hostname);
                byService.set(service, records);
                for (const record of records) {
                    ownedNames.add(record.name.toLowerCase());
                }
            }
        }
        const current = { byService, ownedNames };
        this.#records.set(netInterface, current);
        this.#addresses.set(netInterface, addrs);
        this.#recordVersions.set(netInterface, this.#recordVersion);
        this.#registerResponderNames(ownedNames);

        if (previous !== undefined) {
            const currentAddresses = addressRecords(current);
            const removed = uniqueRecords([
                ...(this.#pendingAddressUpdates.get(netInterface)?.removed ?? []),
                ...addressRecords(previous),
            ]).filter(record => !currentAddresses.some(current => sameRecord(record, current)));
            const previousAddresses = addressRecords(previous);
            if (
                removed.length ||
                this.#pendingAddressUpdates.has(netInterface) ||
                currentAddresses.some(record => !previousAddresses.some(previous => sameRecord(record, previous)))
            ) {
                this.#pendingAddressUpdates.set(netInterface, {
                    removed,
                    current: currentAddresses,
                    remaining: 2,
                    nextSend: Time.nowMs,
                });
            }
            for (const records of previous.byService.values()) {
                for (const record of records) {
                    this.#recordLastSentAsMulticastAnswer.delete(this.buildDnsRecordKey(record, netInterface));
                }
            }
            this.#recentlyAnsweredQueries.clear();
            if (publish) await this.#publishAddressUpdate(netInterface);
        }
        return current;
    }

    async #publishAddressUpdate(netInterface: string) {
        const update = this.#pendingAddressUpdates.get(netInterface);
        if (update === undefined) return;
        if (Time.nowMs < update.nextSend) {
            if (!this.#addressRepeat.isRunning) this.#addressRepeat.start();
            return;
        }
        try {
            if (update.removed.length) {
                // A goodbye withdraws only this RDATA, never the remaining addresses in the shared RRset.
                await this.#announceRecordsForInterface(
                    netInterface,
                    update.removed.map(record => ({ ...record, ttl: Instant, flushCache: false })),
                );
            }
            if (update.current.length) {
                await this.#announceRecordsForInterface(netInterface, update.current);
            }
            // Bridged interfaces may share a receiver cache; rescue addresses still valid on another interface.
            for (const otherInterface of this.#records.keys()) {
                if (otherInterface === netInterface) continue;
                const otherRecords = await this.#recordsForInterface(otherInterface, false);
                const otherAddresses = addressRecords(otherRecords);
                if (otherAddresses.length) {
                    await this.#announceRecordsForInterface(otherInterface, otherAddresses);
                }
            }
            this.#assertOpen();
            update.remaining--;
            if (update.remaining === 0) {
                this.#pendingAddressUpdates.delete(netInterface);
            } else {
                update.nextSend = Timestamp(Time.nowMs + Seconds(1));
                if (!this.#addressRepeat.isRunning) this.#addressRepeat.start();
            }
        } catch (error) {
            logger.warn(`Failed to announce changed mDNS addresses on ${netInterface}`, error);
        }
    }

    #scheduleAddressRefresh() {
        // A pending network operation may span several timer ticks; queue only one refresh behind it.
        if (this.#refreshTask || this.#lifetime.isClosing) return;
        this.#refreshTask = this.#refreshAddresses().finally(() => {
            this.#refreshTask = undefined;
        });
    }

    async #refreshAddresses() {
        try {
            using _lock = await this.#updates.lock();
            if (this.#lifetime.isClosing) return;
            if (!this.#recordsGenerator.size) {
                this.#addressRepeat.stop();
                this.#pendingAddressUpdates.clear();
                return;
            }
            const interfaces = new Set([
                ...this.#records.keys(),
                ...(await this.#getMulticastInterfacesForAnnounce()).map(({ name }) => name),
            ]);
            for (const netInterface of interfaces) {
                try {
                    const isNew = !this.#records.has(netInterface);
                    const records = await this.#recordsForInterface(netInterface);
                    if (isNew) {
                        const addresses = addressRecords(records);
                        if (addresses.length) {
                            this.#pendingAddressUpdates.set(netInterface, {
                                removed: [],
                                current: addresses,
                                remaining: 2,
                                nextSend: Time.nowMs,
                            });
                            await this.#publishAddressUpdate(netInterface);
                        }
                    }
                } catch (error) {
                    if (this.#lifetime.isClosing) return;
                    logger.warn(`Failed to refresh mDNS addresses on ${netInterface}`, error);
                }
            }
            if (!this.#pendingAddressUpdates.size) this.#addressRepeat.stop();
        } catch (error) {
            if (this.#lifetime.isClosing) {
                logger.debug("Stopped mDNS address refresh while closing", error);
            } else {
                logger.warn("Failed to refresh mDNS interface addresses", error);
            }
        }
    }

    async broadcast(...services: string[]) {
        using _broadcasting = this.#lifetime.join("broadcasting", Diagnostic.strong(describeList("and", ...services)));
        try {
            using _lock = await this.#updates.lock();
            this.#assertOpen();
            const errors = new Array<unknown>();
            // Refreshing one interface can also refresh its peers for a shared-link announcement.
            for (const { name: netInterface } of await this.#getMulticastInterfacesForAnnounce()) {
                try {
                    const { byService } = await this.#recordsForInterface(netInterface);
                    let sentPreviousPacket = false;
                    for (const [service, serviceRecords] of byService) {
                        if (services.length && !services.includes(service)) continue;

                        if (sentPreviousPacket) {
                            await Time.sleep("MDNS delay", Millis(20 + Math.floor(Math.random() * 100)));
                        }
                        await this.#announceRecordsForInterface(netInterface, serviceRecords);
                        sentPreviousPacket = true;
                    }
                } catch (error) {
                    errors.push(error);
                }
            }
            if (errors.length) throw new MatterAggregateError(errors, "Error announcing MDNS messages");
        } catch (error) {
            if (this.#lifetime.isClosing) {
                logger.debug("Error announcing MDNS messages while closing", error);
            } else {
                logger.error("Error announcing MDNS messages", error);
            }
        }
    }

    async expireAnnouncements(...services: string[]) {
        using _expiring = this.#lifetime.join("expiring", Diagnostic.strong(describeList("and", ...services)));
        try {
            using _lock = await this.#updates.lock();
            this.#assertOpen();
            try {
                await MatterAggregateError.allSettled(
                    [...this.#records].map(async ([netInterface, { byService }]) => {
                        let sentPreviousPacket = false;
                        for (const [service, serviceRecords] of byService) {
                            if (services.length && !services.includes(service)) continue;

                            // Set TTL to Instant for all records to expire them
                            serviceRecords.forEach(record => {
                                record.ttl = Instant;
                            });

                            if (sentPreviousPacket) {
                                await Time.sleep("MDNS delay", Millis(20 + Math.floor(Math.random() * 100)));
                            }
                            await this.#announceRecordsForInterface(netInterface, serviceRecords);
                            this.#recordsGenerator.delete(service);
                            sentPreviousPacket = true;
                        }
                    }),
                    "Error happened when expiring MDNS announcements",
                );
            } finally {
                if (!this.#lifetime.isClosing) await this.#resetServices();
            }
        } catch (error) {
            if (this.#lifetime.isClosing) {
                logger.debug("Error happened when expiring MDNS announcements while closing", error);
            } else {
                logger.warn("Error happened when expiring MDNS announcements", error);
            }
        }
    }

    async setRecordsGenerator(service: string, generator: MdnsServer.RecordGenerator) {
        using _lock = await this.#updates.lock();
        this.#assertOpen();
        this.#recordsGenerator.set(service, generator);
        await this.#resetServices();
    }

    async #resetServices() {
        await this.#chooseHostname();
        this.#recordVersion++;
        this.#recordLastSentAsMulticastAnswer.clear();
        this.#recentlyAnsweredQueries.clear();
        // Reset the accumulator but leave the prior footprints registered until the cache rebuilds and replaces them:
        // an empty registration here would open a window where queries for our own hostname get dropped, while stale
        // footprints only ever cause a harmless extra decode.
        this.#responderNames.clear();
    }

    // Accumulate the union of advertised names across interfaces; re-register only when it grows.  Stale entries from a
    // vanished interface are at worst extra keeps and are cleared on the next #resetServices.
    #registerResponderNames(ownedNames: Iterable<string>) {
        let changed = false;
        for (const name of ownedNames) {
            if (!this.#responderNames.has(name)) {
                this.#responderNames.add(name);
                changed = true;
            }
        }
        if (changed) {
            this.#socket.registerRelevantNames(RESPONDER_NAMES_OWNER, this.#responderNames);
        }
    }

    async close() {
        using _closing = this.#lifetime.closing();
        this.#addressRefresh.stop();
        this.#addressRepeat.stop();
        this.#observers.close();
        await this.#updates.close();
        await this.#refreshTask;
        this.#socket.unregisterRelevantNames(RESPONDER_NAMES_OWNER);
        this.#records.clear();
        this.#addresses.clear();
        this.#recordVersions.clear();
        this.#pendingAddressUpdates.clear();
        for (const { timer } of this.#truncatedQueryCache.values()) {
            timer.stop();
        }
        this.#truncatedQueryCache.clear();
        this.#recordLastSentAsMulticastAnswer.clear();
        this.#recentlyAnsweredQueries.clear();
    }

    /**
     * Chooses the target host name of every interface: the current one while an interface still carries its MAC,
     * otherwise the first interface with addresses and a non-zero MAC.
     *
     * A querier that hears us on several interfaces must see one host per instance, so the name may not follow the
     * interface; the Matter specification permits one host name across interfaces (Core, "Host Name Construction").
     */
    async #chooseHostname() {
        try {
            const candidates = new Array<string>();
            for (const { name } of await this.#getMulticastInterfacesForAnnounce()) {
                let details;
                try {
                    details = await this.network.getIpMac(name);
                } catch (error) {
                    logger.debug(`Interface ${name} skipped for the mDNS host name`, error);
                    continue;
                }
                if (details?.ipV4.length || details?.ipV6.length) {
                    if (/[1-9a-f]/i.test(details.mac)) {
                        candidates.push(hostnameForMac(details.mac));
                    }
                }
            }
            if (this.#hostname === undefined || !candidates.includes(this.#hostname)) {
                this.#hostname = candidates[0];
            }
        } catch (error) {
            logger.warn("Cannot list network interfaces to choose the mDNS host name", error);
        }
    }

    #getMulticastInterfacesForAnnounce() {
        const { netInterface } = this.#socket;
        return netInterface === undefined ? this.network.getNetInterfaces() : [{ name: netInterface }];
    }

    /**
     * Whether a querier's known answer already carries {@link record}.
     *
     * A record is identified by its name, type, class and value; the cache-flush bit is framing, meaningful only in a
     * response.  A known answer suppresses only while more than half its lifetime remains.
     *
     * @see {@link https://www.rfc-editor.org/rfc/rfc6762#section-7.1} RFC 6762 §7.1
     */
    #suppressedByKnownAnswer(record: DnsRecord<any>, knownAnswer: DnsRecord<any>): boolean {
        // Cheapest discriminators first: this runs once per (answer, known answer) pair on every inbound query
        return (
            record.recordType === knownAnswer.recordType &&
            record.recordClass === knownAnswer.recordClass &&
            knownAnswer.ttl > record.ttl / 2 &&
            sameName(record.name, knownAnswer.name) &&
            isDeepEqual(record.value, knownAnswer.value)
        );
    }

    #queryRecords({ name, recordType }: { name: string; recordType: DnsRecordType }, records: DnsRecord<any>[]) {
        // DNS names are case-insensitive per RFC 6762 §16 / RFC 1035 §2.3.3.
        const queryName = name.toLowerCase();
        if (recordType === DnsRecordType.ANY) {
            return records.filter(record => record.name.toLowerCase() === queryName);
        } else {
            return records.filter(
                record => record.name.toLowerCase() === queryName && record.recordType === recordType,
            );
        }
    }

    /**
     * RFC 6762 §7.3 - Checks if we should suppress a response because another responder
     * has recently answered the same question with answers that cover what we'd send.
     * Also, lazily cleans up expired entries from the cache.
     */
    #shouldSuppressResponse(
        queries: { name: string; recordType: DnsRecordType }[],
        knownAnswers: DnsRecord<any>[],
        sourceIntf: string,
        answers: DnsRecord<any>[],
    ): boolean {
        const now = Time.nowMs;

        // Clean up expired entries
        for (const [key, entry] of this.#recentlyAnsweredQueries) {
            if (now - entry.timestamp >= QUESTION_SUPPRESSION_WINDOW) {
                this.#recentlyAnsweredQueries.delete(key);
            }
        }

        // Build query signature; names lower-cased per RFC 6762 §16.
        const queryKey =
            queries
                .map(q => `${q.name.toLowerCase()}-${q.recordType}`)
                .sort()
                .join("|") + `-${sourceIntf}`;

        const cached = this.#recentlyAnsweredQueries.get(queryKey);

        if (cached && now - cached.timestamp < QUESTION_SUPPRESSION_WINDOW) {
            // Check if all our answers are already in the known answers from the cached response
            const answerHashes = answers.map(a => this.buildDnsRecordKey(a, sourceIntf));
            const allAnswersKnown = answerHashes.every(h => cached.knownAnswerHashes.has(h));

            if (allAnswersKnown) {
                return true; // Suppress - another responder already answered with our records
            }
        }

        // Record that we're answering this question
        const knownAnswerHashes = new Set<string>();
        for (const answer of knownAnswers) {
            knownAnswerHashes.add(this.buildDnsRecordKey(answer, sourceIntf));
        }
        // Also add our answers to the known set
        for (const answer of answers) {
            knownAnswerHashes.add(this.buildDnsRecordKey(answer, sourceIntf));
        }

        this.#recentlyAnsweredQueries.set(queryKey, {
            knownAnswerHashes,
            timestamp: now,
        });

        return false;
    }

    async #processTruncatedQuery(key: string) {
        const { message, timer } = this.#truncatedQueryCache.get(key) ?? {};
        this.#truncatedQueryCache.delete(key);
        timer?.stop();
        if (message) {
            if (message.queries.length === 0) {
                // Should not happen but ignore if it does
                return;
            }
            message.messageType &= ~DnsMessageTypeFlag.TC; // Clear TC flag
            await this.#handleMessage(message);
        }
    }

    /**
     * Delays processing of truncated messages to allow combining multiple parts or combines them if possible
     */
    #prepareMessage(newMessage: MdnsSocket.Message): MdnsSocket.Message | undefined {
        const { messageType, transactionId, sourceIntf, sourceIp } = newMessage;

        if (!DnsMessageType.isQuery(messageType)) {
            // We are only interested in queries
            return;
        }

        const key = `${transactionId}-${sourceIntf}-${sourceIp}`;
        const { message: existingMessage, timer } = this.#truncatedQueryCache.get(key) ?? {};
        this.#truncatedQueryCache.delete(key);
        timer?.stop();

        const message = existingMessage
            ? {
                  ...existingMessage,
                  queries: [...existingMessage.queries, ...newMessage.queries],
                  answers: [...existingMessage.answers, ...newMessage.answers],
                  additionalRecords: [...existingMessage.additionalRecords, ...newMessage.additionalRecords],
                  messageType: newMessage.messageType, // Keep TC flag as is from the latest message
              }
            : newMessage;

        // Message was not truncated, or we have now received all details, process it
        if ((messageType & DnsMessageTypeFlag.TC) === 0) {
            if (message.queries.length === 0) {
                // Should not happen but ignore if it does
                return;
            }
            return message;
        }

        // We have stored a new or updated truncated message - store and wait for next part
        // Delay should be max 400-500ms as per RFC 6762 section 7.2
        this.#truncatedQueryCache.set(key, {
            message,
            timer: Time.getTimer(`Truncated MDNS message ${key}`, Millis(400 + Math.floor(Math.random() * 100)), () =>
                this.#processTruncatedQuery(key),
            ).start(),
        });
    }
}

export namespace MdnsServer {
    export interface RecordGenerator {
        (intf: string, addrs: NetworkInterfaceDetails, hostname: string): DnsRecord[];
    }

    export interface InterfaceRecords {
        byService: Map<string, DnsRecord<any>[]>;

        /** Lower-cased names of records we own on this interface - used to fast-reject unrelated LAN queries. */
        ownedNames: Set<string>;
    }
}

function hostnameForMac(mac: string) {
    return `${mac.replace(/:/g, "").toUpperCase()}0000.local`;
}

function copyAddresses(addrs: NetworkInterfaceDetails | undefined) {
    if (addrs === undefined) return;
    return { mac: addrs.mac, ipV4: [...addrs.ipV4], ipV6: [...addrs.ipV6] };
}

function addressSnapshot(addrs: NetworkInterfaceDetails | undefined) {
    if (addrs === undefined) return;
    return {
        mac: addrs.mac,
        ipV4: [...new Set(addrs.ipV4)].sort(),
        ipV6: [...new Set(addrs.ipV6)].sort(),
    };
}

function sameRecord(left: DnsRecord, right: DnsRecord) {
    return (
        sameName(left.name, right.name) &&
        left.recordType === right.recordType &&
        left.recordClass === right.recordClass &&
        isDeepEqual(left.value, right.value)
    );
}

function uniqueRecords(records: DnsRecord[]) {
    return records.filter((record, index) => !records.slice(0, index).some(other => sameRecord(record, other)));
}

function addressRecords(records: MdnsServer.InterfaceRecords) {
    return uniqueRecords(
        [...records.byService.values()]
            .flat()
            .filter(record => record.recordType === DnsRecordType.A || record.recordType === DnsRecordType.AAAA),
    );
}

/**
 * Prepares records for the wire, clearing the cache-flush bit wherever we cannot honor what it claims.
 *
 * The bit says the receiver may drop everything else it holds for the name and type, which is only true if this
 * response carries that whole set — suppression and rate limiting both remove records before we get here.  A legacy
 * resolver, which we cannot distinguish because the source port does not reach us, must never see the bit at all, so
 * a unicast response omits it.
 *
 * @see {@link https://www.rfc-editor.org/rfc/rfc6762#section-10.2} RFC 6762 §10.2
 * @see {@link https://www.rfc-editor.org/rfc/rfc6762#section-6.7} RFC 6762 §6.7
 */
function sendable(sent: DnsRecord<any>[], complete: DnsRecord<any>[], isUnicast: boolean) {
    if (isUnicast) {
        return sent.map(record => (record.flushCache ? { ...record, flushCache: false } : record));
    }

    if (!sent.some(record => record.flushCache)) {
        return sent;
    }

    const sentSizes = setSizes(sent);
    const completeSizes = setSizes(complete);

    return sent.map(record =>
        record.flushCache && (sentSizes.get(setKeyOf(record)) ?? 0) < (completeSizes.get(setKeyOf(record)) ?? 0)
            ? { ...record, flushCache: false }
            : record,
    );
}

/** Identifies the record set a record belongs to: RFC 6762 scopes the cache-flush bit to one name, type and class. */
function setKeyOf(record: DnsRecord<any>) {
    return `${record.recordType}-${record.recordClass}-${record.name.toLowerCase()}`;
}

function setSizes(records: DnsRecord<any>[]) {
    const sizes = new Map<string, number>();
    for (const record of records) {
        const key = setKeyOf(record);
        sizes.set(key, (sizes.get(key) ?? 0) + 1);
    }
    return sizes;
}

/** DNS names are case-insensitive (RFC 6762 §16), but they rarely differ in case, so try the cheap comparison first. */
function sameName(a: string, b: string) {
    return a === b || a.toLowerCase() === b.toLowerCase();
}
