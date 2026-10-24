/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MdnsServer } from "#mdns/MdnsServer.js";
import {
    AAAARecord,
    ARecord,
    createPromise,
    DnsCodec,
    DnsMessage,
    DnsMessageType,
    DnsRecordClass,
    DnsRecordType,
    DnssdNames,
    Instant,
    MdnsSocket,
    Millis,
    MockCrypto,
    MockNetwork,
    Network,
    NetworkError,
    NetworkInterfaceDetails,
    NetworkSimulator,
    PtrRecord,
    Seconds,
    SrvRecord,
    Time,
    TxtRecord,
    UdpSocketOptions,
} from "@matter/general";

const MAC = "02:00:00:00:00:01";
const HOST = "0200000000010000.local";
const OLD = "2001:db8:1::10";
const NEW = "2001:db8:2::10";
const ULA = "fd00::10";
const LINK_LOCAL = "fe80::10";
const IPV4 = "192.0.2.10";

describe("MdnsServer interface addresses", () => {
    before(MockTime.enable);

    let interfaces: Record<string, NetworkInterfaceDetails | undefined>;
    let failRead: boolean;
    let readDelay: (() => Promise<void>) | undefined;
    let sent: Array<{ message: DnsMessage; netInterface?: string; at: number }>;
    let socket: MdnsSocket;
    let network: MutableNetwork;
    let server: MdnsServer;
    let generationCount: number;
    let readCount: number;

    class MutableNetwork extends Network {
        readonly inner = new MockNetwork(new NetworkSimulator(), MAC, [IPV4, LINK_LOCAL]);

        getNetInterfaces() {
            return Object.entries(interfaces)
                .filter(([, details]) => details !== undefined)
                .map(([name]) => ({ name }));
        }

        async getIpMac(name: string) {
            readCount++;
            if (failRead) throw new NetworkError("Interface address read failed");
            const details = interfaces[name];
            const snapshot = details === undefined ? undefined : structuredClone(details);
            await readDelay?.();
            return snapshot;
        }

        createUdpSocket(options: UdpSocketOptions) {
            return this.inner.createUdpSocket(options);
        }

        override close() {
            return this.inner.close();
        }
    }

    const generator: MdnsServer.RecordGenerator = (_intf, addrs, hostname) => {
        generationCount++;
        return [
            PtrRecord("_matter._tcp.local", "test._matter._tcp.local"),
            SrvRecord("test._matter._tcp.local", { priority: 0, weight: 0, port: 5540, target: hostname }),
            TxtRecord("test._matter._tcp.local", ["T=0"]),
            ...addrs.ipV4.map(ip => ARecord(hostname, ip, Seconds(120), true)),
            ...addrs.ipV6.map(ip => AAAARecord(hostname, ip, Seconds(120), true)),
        ];
    };

    async function broadcast() {
        await MockTime.resolve(server.broadcast("test"));
    }

    async function advance(duration: number) {
        await MockTime.advance(duration);
        // Timer callbacks schedule background work; let its microtasks finish before inspecting the packets.
        await MockTime.macrotask;
    }

    async function query(name = HOST, type = DnsRecordType.AAAA, sourceIntf = "fake0") {
        await MockTime.resolve(
            socket.receipt.emit({
                messageType: DnsMessageType.Query,
                transactionId: 0,
                queries: [{ name, recordClass: DnsRecordClass.IN, recordType: type }],
                answers: [],
                authorities: [],
                additionalRecords: [],
                sourceIntf,
                sourceIp: "192.0.2.20",
            }),
        );
    }

    function records(ttlZero: boolean, netInterface?: string) {
        return sent
            .filter(packet => netInterface === undefined || packet.netInterface === netInterface)
            .flatMap(({ message }) => [...message.answers, ...message.additionalRecords])
            .filter(record => (record.ttl === Instant) === ttlZero);
    }

    function addresses(ttlZero = false, netInterface?: string) {
        return [
            ...new Set(
                records(ttlZero, netInterface)
                    .filter(record => record.recordType === DnsRecordType.A || record.recordType === DnsRecordType.AAAA)
                    .map(record => record.value),
            ),
        ].sort();
    }

    beforeEach(async () => {
        interfaces = { fake0: { mac: MAC, ipV4: [IPV4], ipV6: [OLD, ULA, LINK_LOCAL] } };
        failRead = false;
        readDelay = undefined;
        sent = [];
        generationCount = 0;
        readCount = 0;
        network = new MutableNetwork();
        socket = await MdnsSocket.create(network);
        socket.send = async (message, netInterface) => {
            const decoded = DnsCodec.decode(DnsCodec.encode(message));
            if (decoded === undefined) throw new NetworkError("Test response did not decode");
            sent.push({ message: decoded, netInterface, at: Time.nowUs });
        };
        server = new MdnsServer(socket);
        await server.setRecordsGenerator("test", generator);
        await broadcast();
        sent.length = 0;
    });

    afterEach(async () => {
        readDelay = undefined;
        await server.close();
        await socket.close();
        await network.close();
    });

    it("replaces removed addresses before answering active queries", async () => {
        for (let i = 0; i < 16; i++) {
            await advance(Seconds(60));
            await query();
        }
        interfaces.fake0!.ipV6 = [NEW, ULA, LINK_LOCAL];
        sent.length = 0;
        await query();

        expect(addresses(true)).deep.equal([OLD]);
        expect(addresses()).deep.equal([IPV4, NEW, ULA, LINK_LOCAL].sort());
        expect(records(true).every(record => record.flushCache === false)).equal(true);
        expect(records(true).every(record => record.recordType === DnsRecordType.AAAA)).equal(true);
        expect(sent.at(-1)?.message.answers.map(record => record.value)).not.include(OLD);
    });

    it("refreshes address records before PTR and SRV answers", async () => {
        interfaces.fake0!.ipV6 = [NEW, ULA, LINK_LOCAL];
        await query("_matter._tcp.local", DnsRecordType.PTR);
        expect(addresses()).include(NEW).and.not.include(OLD);
        expect(records(false).some(record => record.recordType === DnsRecordType.SRV)).equal(true);
    });

    it("refreshes broadcasts without changing the service identity", async () => {
        interfaces.fake0!.ipV4 = ["192.0.2.11"];
        interfaces.fake0!.ipV6 = [NEW, ULA, LINK_LOCAL];
        await broadcast();
        expect(addresses(true)).deep.equal([IPV4, OLD].sort());
        expect(addresses()).deep.equal(["192.0.2.11", NEW, ULA, LINK_LOCAL].sort());
        expect(records(false).find(record => record.recordType === DnsRecordType.SRV)?.value).deep.equal({
            priority: 0,
            weight: 0,
            port: 5540,
            target: HOST,
        });
        expect(
            records(true).some(record =>
                [DnsRecordType.PTR, DnsRecordType.SRV, DnsRecordType.TXT].includes(record.recordType),
            ),
        ).equal(false);
    });

    it("updates a quiet interface within thirty seconds", async () => {
        interfaces.fake0!.ipV6 = [NEW, ULA, LINK_LOCAL];
        await advance(Seconds(30));
        expect(addresses(true)).deep.equal([OLD]);
        expect(addresses()).deep.equal([IPV4, NEW, ULA, LINK_LOCAL].sort());
        expect(records(false).every(record => record.flushCache)).equal(true);
    });

    it("keeps overlapping prefixes until the old address is removed", async () => {
        interfaces.fake0!.ipV6 = [OLD, NEW, ULA, LINK_LOCAL];
        await query();
        expect(addresses(true)).deep.equal([]);
        expect(addresses()).include(OLD).and.include(NEW);
        interfaces.fake0!.ipV6 = [NEW, ULA, LINK_LOCAL];
        sent.length = 0;
        await query();
        expect(addresses(true)).deep.equal([OLD]);
        expect(addresses()).include(ULA).and.include(LINK_LOCAL).and.not.include(OLD);
    });

    it("retains the old address snapshot across service changes", async () => {
        interfaces.fake0!.ipV6 = [NEW, ULA, LINK_LOCAL];
        await server.setRecordsGenerator("test", generator);
        await query();
        expect(addresses(true)).deep.equal([OLD]);
        expect(addresses()).include(NEW).and.not.include(OLD);
    });

    it("repeats the changed address announcement after one second", async () => {
        interfaces.fake0!.ipV6 = [NEW, ULA, LINK_LOCAL];
        await query();
        const first = sent.find(packet => packet.message.answers.some(record => record.ttl === Instant))!.at;
        const finished = Time.nowUs;
        sent.length = 0;
        await advance(Seconds(1));
        expect(addresses(true)).deep.equal([OLD]);
        expect(addresses()).deep.equal([IPV4, NEW, ULA, LINK_LOCAL].sort());
        expect(sent[0].at)
            .at.least(first + 1000)
            .and.at.most(finished + 1000);
        sent.length = 0;
        await advance(Seconds(2));
        expect(sent).deep.equal([]);
    });

    it("schedules a later pending repetition after an earlier timer fires", async () => {
        interfaces.fake1 = { mac: "02:00:00:00:00:02", ipV4: [], ipV6: ["2001:db8:3::10"] };
        await broadcast();
        interfaces.fake0!.ipV6 = [NEW, ULA, LINK_LOCAL];
        await query();
        await advance(Millis(500));
        interfaces.fake1!.ipV6 = ["2001:db8:4::10"];
        await query(HOST, DnsRecordType.AAAA, "fake1");
        await advance(Millis(500));
        sent.length = 0;
        await advance(Seconds(1));
        expect(addresses(true, "fake1")).deep.equal(["2001:db8:3::10"]);
        expect(addresses(false, "fake1")).include("2001:db8:4::10");
    });

    for (const offset of [-60_000, 60_000]) {
        it(`keeps the repetition interval after a ${offset} ms wall-clock step`, async () => {
            interfaces.fake0!.ipV6 = [NEW, ULA, LINK_LOCAL];
            await query();
            const first = sent.find(packet => packet.message.answers.some(record => record.ttl === Instant))!.at;
            const finished = Time.nowUs;
            sent.length = 0;
            MockTime.stepWallClock(offset);
            try {
                await advance(Millis(100));
                await query();
                expect(addresses(true)).deep.equal([]);
                sent.length = 0;
                await advance(Millis(900));
                expect(addresses(true)).deep.equal([OLD]);
                expect(sent[0].at)
                    .at.least(first + Seconds(1))
                    .and.at.most(finished + Seconds(2));
            } finally {
                MockTime.stepWallClock(-offset);
            }
        });
    }

    it("does not read interface addresses for incoming responses", async () => {
        const before = readCount;
        await socket.receipt.emit({
            messageType: DnsMessageType.Response,
            transactionId: 0,
            queries: [],
            answers: [AAAARecord(HOST, OLD)],
            authorities: [],
            additionalRecords: [],
            sourceIntf: "fake0",
            sourceIp: "192.0.2.20",
        });
        expect(readCount).equal(before);
        expect(sent).deep.equal([]);
    });

    it("ignores address order and duplicates", async () => {
        const previousCount = generationCount;
        interfaces.fake0!.ipV6 = [LINK_LOCAL, ULA, OLD, ULA];
        await advance(Seconds(30));
        expect(sent).deep.equal([]);
        expect(generationCount).equal(previousCount);
    });

    it("withdraws only the affected interface's removed addresses", async () => {
        interfaces.fake1 = { mac: "02:00:00:00:00:02", ipV4: ["192.0.2.30"], ipV6: [OLD, "fe80::30"] };
        await broadcast();
        sent.length = 0;
        interfaces.fake0!.ipV6 = [NEW, ULA, LINK_LOCAL];
        await advance(Seconds(30));
        expect(addresses(true, "fake0")).deep.equal([OLD]);
        expect(addresses(true, "fake1")).deep.equal([]);
        expect(addresses(false, "fake1")).include(OLD);
    });

    it("preserves valid addresses in a shared-link receiver cache", async () => {
        const clientNetwork = new MockNetwork(new NetworkSimulator(), "02:00:00:00:00:03", ["192.0.2.20"]);
        const clientSocket = await MdnsSocket.create(clientNetwork);
        const names = new DnssdNames({ socket: clientSocket, entropy: MockCrypto() });
        const send = socket.send.bind(socket);
        socket.send = async (message, netInterface) => {
            await send(message, netInterface);
            const decoded = sent.at(-1)!.message;
            // Both server interfaces are bridged onto one receiving link.
            await clientSocket.receipt.emit({ ...decoded, sourceIntf: "fake0", sourceIp: IPV4 });
        };
        try {
            interfaces.fake1 = { mac: "02:00:00:00:00:02", ipV4: ["192.0.2.30"], ipV6: [OLD, "fe80::30"] };
            await broadcast();
            await advance(Seconds(2));
            interfaces.fake0!.ipV6 = [NEW, ULA, LINK_LOCAL];
            await query();
            await advance(Seconds(3));
            const cached = () => [...names.get(HOST).records].map(record => record.value);
            expect(cached())
                .include(OLD)
                .and.include(NEW)
                .and.include(ULA)
                .and.include(LINK_LOCAL)
                .and.include("fe80::30");
            for (let i = 0; i < 5; i++) {
                await query();
                await advance(Seconds(2));
                expect(cached()).include(OLD).and.include(NEW).and.include("fe80::30");
            }
            interfaces.fake1!.ipV6 = ["fe80::30"];
            await query(HOST, DnsRecordType.AAAA, "fake1");
            await advance(Seconds(3));
            expect(cached()).not.include(OLD);
            expect(cached()).include(NEW).and.include(ULA).and.include(LINK_LOCAL).and.include("fe80::30");
        } finally {
            await names.close();
            await clientSocket.close();
            await clientNetwork.close();
        }
    });

    it("announces addresses on an added interface during a quiet phase", async () => {
        interfaces.fake1 = { mac: "02:00:00:00:00:02", ipV4: ["192.0.2.30"], ipV6: ["fe80::30"] };
        await advance(Seconds(30));
        expect(addresses(false, "fake1")).deep.equal(["192.0.2.30", "fe80::30"]);
        expect(addresses(true)).deep.equal([]);
    });

    it("withdraws a removed interface without expiring other services", async () => {
        interfaces.fake0 = undefined;
        await advance(Seconds(30));
        expect(addresses(true)).deep.equal([IPV4, OLD, ULA, LINK_LOCAL].sort());
        expect(
            records(true).every(
                record => record.recordType === DnsRecordType.A || record.recordType === DnsRecordType.AAAA,
            ),
        ).equal(true);
        interfaces.fake0 = { mac: MAC, ipV4: [IPV4], ipV6: [NEW, ULA, LINK_LOCAL] };
        sent.length = 0;
        await broadcast();
        expect(records(false).some(record => record.recordType === DnsRecordType.SRV)).equal(true);
        expect(addresses()).include(NEW);
    });

    it("does not interpret a failed address read as address removal", async () => {
        failRead = true;
        await advance(Seconds(30));
        expect(sent).deep.equal([]);
        failRead = false;
        interfaces.fake0!.ipV6 = [NEW, ULA, LINK_LOCAL];
        await query();
        expect(addresses(true)).deep.equal([OLD]);
        expect(addresses()).include(NEW);
    });

    it("retries a failed goodbye while serving the new address records", async () => {
        const send = socket.send.bind(socket);
        let rejectGoodbye = true;
        socket.send = async (message, netInterface, unicastDest) => {
            if (rejectGoodbye && message.answers?.some(record => record.ttl === Instant)) {
                rejectGoodbye = false;
                throw new NetworkError("Test goodbye send failed");
            }
            await send(message, netInterface, unicastDest);
        };
        interfaces.fake0!.ipV6 = [NEW, ULA, LINK_LOCAL];
        await query();
        expect(addresses()).include(NEW).and.not.include(OLD);
        sent.length = 0;
        await advance(Seconds(30));
        expect(addresses(true)).deep.equal([OLD]);
        expect(addresses()).include(NEW);
    });

    for (const failure of ["read", "send"]) {
        it(`continues after a peer ${failure} failure and recovers after both update rounds`, async () => {
            const peerAddress = "fd00::20";
            interfaces.fake1 = { mac: "02:00:00:00:00:02", ipV4: [], ipV6: [peerAddress] };
            interfaces.fake2 = { mac: "02:00:00:00:00:03", ipV4: [], ipV6: [OLD] };
            await broadcast();
            sent.length = 0;
            const read = network.getIpMac.bind(network);
            const send = socket.send.bind(socket);
            let failing = true;
            network.getIpMac = async name => {
                if (failing && failure === "read" && name === "fake1") {
                    throw new NetworkError("Test peer read failed");
                }
                return read(name);
            };
            socket.send = async (message, netInterface, unicastDest) => {
                if (failing && failure === "send" && netInterface === "fake1") {
                    throw new NetworkError("Test peer send failed");
                }
                await send(message, netInterface, unicastDest);
            };

            interfaces.fake0!.ipV6 = [NEW, ULA, LINK_LOCAL];
            await query();
            expect(addresses(true, "fake0")).deep.equal([OLD]);
            expect(addresses(false, "fake2")).deep.equal([OLD]);
            expect(addresses(false, "fake1")).deep.equal([]);
            sent.length = 0;
            await advance(Seconds(1));
            expect(addresses(true, "fake0")).deep.equal([OLD]);
            expect(addresses(false, "fake2")).deep.equal([OLD]);
            sent.length = 0;
            await advance(Seconds(2));
            expect(sent).deep.equal([]);

            failing = false;
            await advance(Seconds(30));
            expect(addresses(false, "fake1")).deep.equal([peerAddress]);
            expect(addresses(true)).deep.equal([]);
            expect(sent.every(packet => packet.netInterface === "fake1")).equal(true);
            await advance(Seconds(1));
            expect(sent).length(2);
            expect(sent[1].at - sent[0].at).equal(Seconds(1));
            sent.length = 0;
            await advance(Seconds(30));
            expect(sent).deep.equal([]);
        });
    }

    it("stops peer repetition after a failed recovery read and retries on the next poll", async () => {
        const peerAddress = "fd00::20";
        interfaces.fake1 = { mac: "02:00:00:00:00:02", ipV4: [], ipV6: [peerAddress] };
        await broadcast();
        const read = network.getIpMac.bind(network);
        let failing = true;
        network.getIpMac = async name => {
            if (failing && name === "fake1") throw new NetworkError("Test recovery read failed");
            return read(name);
        };
        interfaces.fake0!.ipV6 = [NEW, ULA, LINK_LOCAL];
        await query();
        await advance(Seconds(1));
        await advance(Seconds(2));
        sent.length = 0;

        failing = false;
        await advance(Seconds(30));
        expect(sent).length(1);
        expect(addresses(false, "fake1")).deep.equal([peerAddress]);
        sent.length = 0;
        failing = true;
        await advance(Seconds(1));
        expect(sent).deep.equal([]);
        expect([...Time.timers].some(timer => timer.name === "MDNS address repeat")).equal(false);
        const reads = readCount;
        await advance(Seconds(1));
        expect(readCount).equal(reads);

        failing = false;
        await advance(Seconds(30));
        await advance(Seconds(1));
        expect(sent).length(2);
        expect(sent.every(packet => packet.netInterface === "fake1")).equal(true);
        expect(addresses(true)).deep.equal([]);
        expect(sent[1].at - sent[0].at).equal(Seconds(1));
    });

    it("stops later peer reads and repetitions when closing during a failed peer read", async () => {
        interfaces.fake1 = { mac: "02:00:00:00:00:02", ipV4: [], ipV6: [ULA] };
        interfaces.fake2 = { mac: "02:00:00:00:00:03", ipV4: [], ipV6: [OLD] };
        await broadcast();
        sent.length = 0;
        const read = network.getIpMac.bind(network);
        const started = createPromise<void>();
        const release = createPromise<void>();
        const reads = new Array<string>();
        network.getIpMac = async name => {
            reads.push(name);
            if (name === "fake1") {
                started.resolver();
                await release.promise;
                throw new NetworkError("Test peer read failed while closing");
            }
            return read(name);
        };
        interfaces.fake0!.ipV6 = [NEW, ULA, LINK_LOCAL];
        const querying = query();
        await started.promise;
        const closing = server.close();
        const before = sent.length;
        release.resolver();
        await MockTime.resolve(Promise.all([querying, closing]));
        await advance(Seconds(30));
        expect(sent).length(before);
        expect(reads).not.include("fake2");
        expect([...Time.timers].some(timer => timer.name.startsWith("MDNS address"))).equal(false);
    });

    for (const named of [true, false]) {
        it(`expires ${named ? "a named service" : "all services"} while every interface is offline`, async () => {
            const original = interfaces.fake0;
            interfaces.fake0 = undefined;
            await advance(Seconds(30));
            await advance(Seconds(1));
            await MockTime.resolve(server.expireAnnouncements(...(named ? ["test"] : [])));
            interfaces.fake0 = original;
            sent.length = 0;
            await advance(Seconds(30));
            await broadcast();
            await query("_matter._tcp.local", DnsRecordType.PTR);
            expect(records(false)).deep.equal([]);
        });
    }

    const otherGenerator: MdnsServer.RecordGenerator = (_intf, addrs) => [
        SrvRecord("other._matter._tcp.local", { priority: 0, weight: 0, port: 5541, target: HOST }),
        ...addrs.ipV6.map(ip => AAAARecord(HOST, ip, Seconds(120), true)),
    ];

    it("keeps an unexpired service when another service expires offline", async () => {
        await server.setRecordsGenerator("other", otherGenerator);
        await MockTime.resolve(server.broadcast());
        const original = interfaces.fake0;
        interfaces.fake0 = undefined;
        await advance(Seconds(30));
        await advance(Seconds(1));
        await MockTime.resolve(server.expireAnnouncements("test"));
        interfaces.fake0 = original;
        sent.length = 0;
        await MockTime.resolve(server.broadcast());
        const names = records(false).map(record => record.name);
        expect(names).include("other._matter._tcp.local");
        expect(names).not.include("test._matter._tcp.local");
    });

    it("expires a generator that has not produced cached records", async () => {
        await server.setRecordsGenerator("other", otherGenerator);
        await MockTime.resolve(server.expireAnnouncements("other"));
        sent.length = 0;
        await MockTime.resolve(server.broadcast());
        const names = records(false).map(record => record.name);
        expect(names).include("test._matter._tcp.local");
        expect(names).not.include("other._matter._tcp.local");
    });

    it("allows a service to be registered again after offline expiration", async () => {
        const original = interfaces.fake0;
        interfaces.fake0 = undefined;
        await advance(Seconds(30));
        await MockTime.resolve(server.expireAnnouncements("test"));
        await server.setRecordsGenerator("test", generator);
        interfaces.fake0 = original;
        sent.length = 0;
        await broadcast();
        expect(records(false).some(record => record.recordType === DnsRecordType.SRV)).equal(true);
    });

    it("retains a service whose expiration failed while removing a successfully expired service", async () => {
        await server.setRecordsGenerator("other", otherGenerator);
        await MockTime.resolve(server.broadcast());
        const send = socket.send.bind(socket);
        socket.send = async (message, netInterface, unicastDest) => {
            if (message.answers?.some(record => record.name === "other._matter._tcp.local")) {
                throw new NetworkError("Test other expiration failed");
            }
            await send(message, netInterface, unicastDest);
        };
        await MockTime.resolve(server.expireAnnouncements());
        socket.send = send;
        sent.length = 0;
        await MockTime.resolve(server.broadcast());
        const names = records(false).map(record => record.name);
        expect(names).not.include("test._matter._tcp.local");
        expect(names).include("other._matter._tcp.local");
    });

    for (const kind of ["goodbye", "positive", "both"]) {
        it(`announces peers and repeats after an initial ${kind} send failure`, async () => {
            interfaces.fake1 = { mac: "02:00:00:00:00:02", ipV4: [], ipV6: [OLD] };
            await broadcast();
            const send = socket.send.bind(socket);
            const failed = new Set<string>();
            socket.send = async (message, netInterface, unicastDest) => {
                const phase = message.answers?.some(record => record.ttl === Instant) ? "goodbye" : "positive";
                if (netInterface === "fake0" && (kind === phase || kind === "both") && !failed.has(phase)) {
                    failed.add(phase);
                    throw new NetworkError(`Test initial ${phase} failed`);
                }
                await send(message, netInterface, unicastDest);
            };
            interfaces.fake0!.ipV6 = [NEW, ULA, LINK_LOCAL];
            sent.length = 0;
            await advance(Seconds(30));
            expect(addresses(false, "fake1")).deep.equal([OLD]);
            expect([...Time.timers].some(timer => timer.name === "MDNS address repeat")).equal(true);
            sent.length = 0;
            await advance(Seconds(1));
            expect(addresses(true, "fake0")).deep.equal([OLD]);
            expect(addresses(false, "fake0")).include(NEW);
            expect(addresses(false, "fake1")).deep.equal([OLD]);
            await advance(Seconds(1));
            expect([...Time.timers].some(timer => timer.name === "MDNS address repeat")).equal(false);
        });
    }

    for (const kind of ["positive", "goodbye"]) {
        it(`bounds repeated ${kind} failures and recovers on a later poll`, async () => {
            interfaces.fake1 = { mac: "02:00:00:00:00:02", ipV4: [], ipV6: [OLD] };
            await broadcast();
            const send = socket.send.bind(socket);
            let failing = true;
            let failures = 0;
            socket.send = async (message, netInterface, unicastDest) => {
                const goodbye = message.answers?.some(record => record.ttl === Instant);
                if (failing && netInterface === "fake0" && (kind === "goodbye" ? goodbye : !goodbye)) {
                    failures++;
                    throw new NetworkError("Test persistent primary send failure");
                }
                await send(message, netInterface, unicastDest);
            };
            interfaces.fake0!.ipV6 = [NEW, ULA, LINK_LOCAL];
            await advance(Seconds(30));
            await advance(Seconds(1));
            expect(failures).equal(2);
            expect([...Time.timers].some(timer => timer.name === "MDNS address repeat")).equal(false);
            sent.length = 0;
            const reads = readCount;
            await advance(Seconds(2));
            expect(readCount).equal(reads);
            expect(sent).deep.equal([]);
            failing = false;
            await advance(Seconds(60));
            await advance(Seconds(1));
            expect(addresses(true, "fake0")).include(OLD);
            expect(addresses(false, "fake0")).include(NEW);
            expect(addresses(false, "fake1")).include(OLD);
            expect([...Time.timers].some(timer => timer.name === "MDNS address repeat")).equal(false);
        });
    }

    for (const phase of ["positive", "goodbye"]) {
        it(`recovers when only the second primary ${phase} send fails`, async () => {
            const send = socket.send.bind(socket);
            let matching = 0;
            socket.send = async (message, netInterface, unicastDest) => {
                const goodbye = message.answers?.some(record => record.ttl === Instant);
                if (netInterface === "fake0" && (phase === "goodbye" ? goodbye : !goodbye) && ++matching === 2) {
                    throw new NetworkError("Test second primary send failed");
                }
                await send(message, netInterface, unicastDest);
            };
            interfaces.fake0!.ipV6 = [NEW, ULA, LINK_LOCAL];
            await advance(Seconds(30));
            await advance(Seconds(1));
            expect([...Time.timers].some(timer => timer.name === "MDNS address repeat")).equal(false);
            sent.length = 0;
            await advance(Seconds(60));
            await advance(Seconds(1));
            expect(addresses(true)).include(OLD);
            expect(addresses(false)).include(NEW);
            expect([...Time.timers].some(timer => timer.name === "MDNS address repeat")).equal(false);
        });
    }

    it("bounds a failed address read before the second primary update", async () => {
        interfaces.fake0!.ipV6 = [NEW, ULA, LINK_LOCAL];
        await advance(Seconds(30));
        failRead = true;
        await advance(Seconds(1));
        expect([...Time.timers].some(timer => timer.name === "MDNS address repeat")).equal(false);
        const reads = readCount;
        await advance(Seconds(2));
        expect(readCount).equal(reads);
        failRead = false;
        sent.length = 0;
        await advance(Seconds(60));
        await advance(Seconds(1));
        expect(addresses(false)).include(NEW);
        expect([...Time.timers].some(timer => timer.name === "MDNS address repeat")).equal(false);
    });

    it("stops peer announcements when closing during the positive primary send", async () => {
        interfaces.fake1 = { mac: "02:00:00:00:00:02", ipV4: [], ipV6: [OLD] };
        await broadcast();
        const started = createPromise<void>();
        const release = createPromise<void>();
        const send = socket.send.bind(socket);
        socket.send = async (message, netInterface, unicastDest) => {
            if (netInterface === "fake0" && message.answers?.some(record => record.ttl !== Instant)) {
                started.resolver();
                await release.promise;
                throw new NetworkError("Test primary send failed during close");
            }
            await send(message, netInterface, unicastDest);
        };
        interfaces.fake0!.ipV6 = [NEW, ULA, LINK_LOCAL];
        const querying = query();
        await started.promise;
        const closing = server.close();
        const before = sent.length;
        release.resolver();
        await MockTime.resolve(Promise.all([querying, closing]));
        await advance(Seconds(30));
        expect(sent).length(before);
        expect([...Time.timers].some(timer => timer.name.startsWith("MDNS address"))).equal(false);
    });

    it("rebuilds positive records after a failed service expiration", async () => {
        const send = socket.send.bind(socket);
        socket.send = async () => {
            throw new NetworkError("Test expiration send failed");
        };
        await MockTime.resolve(server.expireAnnouncements("test"));
        socket.send = send;
        await query();
        expect(addresses()).include(OLD).and.include(ULA).and.include(LINK_LOCAL);
        expect(records(true)).deep.equal([]);
    });

    it("serializes simultaneous refreshes", async () => {
        interfaces.fake0!.ipV6 = [NEW, ULA, LINK_LOCAL];
        const started = createPromise<void>();
        const release = createPromise<void>();
        readDelay = async () => {
            readDelay = undefined;
            started.resolver();
            await release.promise;
        };
        const first = server.broadcast("test");
        await started.promise;
        const second = server.broadcast("test");
        release.resolver();
        await MockTime.resolve(Promise.all([first, second]));
        expect(records(true).filter(record => record.value === OLD)).length(1);
        expect(addresses()).include(NEW).and.not.include(OLD);
    });

    it("waits for an address read and sends nothing after close begins", async () => {
        const started = createPromise<void>();
        const release = createPromise<void>();
        readDelay = async () => {
            readDelay = undefined;
            started.resolver();
            await release.promise;
        };
        const broadcast = server.broadcast("test");
        await started.promise;
        const closing = server.close();
        release.resolver();
        await MockTime.resolve(Promise.all([broadcast, closing]));
        expect(sent).deep.equal([]);
        expect([...Time.timers].some(timer => timer.name === "MDNS address refresh")).equal(false);
    });

    it("coalesces background refreshes behind a pending network operation", async () => {
        interfaces.fake0!.ipV6 = [NEW, ULA, LINK_LOCAL];
        const started = createPromise<void>();
        const release = createPromise<void>();
        readDelay = async () => {
            readDelay = undefined;
            started.resolver();
            await release.promise;
        };
        const broadcasting = server.broadcast("test");
        await started.promise;
        const before = readCount;
        let completed = false;
        const ticks = MockTime.advance(Seconds(90)).then(() => {
            completed = true;
        });
        try {
            await MockTime.macrotask;
            expect(completed).equal(true);
            expect(readCount).equal(before);
        } finally {
            release.resolver();
            await MockTime.resolve(Promise.all([broadcasting, ticks]));
        }
        await MockTime.macrotask;
        expect(readCount - before).equal(1);
        expect(addresses(true)).deep.equal([OLD]);
        expect(addresses()).include(NEW).and.not.include(OLD);
    });

    it("waits for a background read during close without sending its result", async () => {
        const started = createPromise<void>();
        const release = createPromise<void>();
        readDelay = async () => {
            readDelay = undefined;
            started.resolver();
            await release.promise;
        };
        await advance(Seconds(30));
        await started.promise;
        const closing = server.close();
        release.resolver();
        await MockTime.resolve(closing);
        expect(sent).deep.equal([]);
        expect([...Time.timers].some(timer => timer.name.startsWith("MDNS address"))).equal(false);
    });

    it("does not restart a repetition timer when closing during a send", async () => {
        interfaces.fake0!.ipV6 = [NEW, ULA, LINK_LOCAL];
        const started = createPromise<void>();
        const release = createPromise<void>();
        const send = socket.send.bind(socket);
        socket.send = async (message, netInterface) => {
            await send(message, netInterface);
            started.resolver();
            await release.promise;
        };
        const broadcasting = server.broadcast("test");
        await started.promise;
        const closing = server.close();
        release.resolver();
        await MockTime.resolve(Promise.all([broadcasting, closing]));
        const count = sent.length;
        await advance(Seconds(60));
        expect(sent.length).equal(count);
        expect([...Time.timers].some(timer => timer.name.startsWith("MDNS address"))).equal(false);
    });
});
