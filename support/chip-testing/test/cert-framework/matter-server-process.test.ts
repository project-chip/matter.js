/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClosedError, Millis, Seconds } from "@matter/general";
import { CertConfigError } from "@matter/testing";
import { expect } from "chai";
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import {
    DISABLE_AUTO_SUBSCRIPTION_FLAG,
    MatterServerProcess,
    type MatterServerProcessOptions,
    plainLogLine,
    readinessPortOf,
} from "../../src/matter-server/matter-server-process.js";
import { waitFor } from "./fake-chip-tool.js";

const ENTRY = fileURLToPath(new URL("./fixtures/fake-server-entry.mjs", import.meta.url));
const CJS_ENTRY = fileURLToPath(new URL("./fixtures/fake-server-entry.cjs", import.meta.url));
const EXIT_OWNER = fileURLToPath(new URL("./fixtures/exit-owner.mjs", import.meta.url));
const PROCESS_MODULE = new URL("../../src/matter-server/matter-server-process.js", import.meta.url).href;
interface Report {
    pid: number;
    storagePath: string;
    environment: string[];
}

const ARGS_PREFIX = "fake-server args: ";

function withFlag(flag: string) {
    return `${process.execPath} ${ENTRY} ${flag}`;
}

async function argsFromLog(server: MatterServerProcess): Promise<string[]> {
    const find = () => server.log.lines.find(({ text }) => text.startsWith(ARGS_PREFIX));
    await waitFor(() => find() !== undefined, "args line in log");
    const line = find();
    expect(line).not.undefined;
    return JSON.parse((line?.text ?? "").slice(ARGS_PREFIX.length));
}

function storageOf(args: string[]) {
    return args[args.indexOf("--storage-path") + 1];
}

function isAlive(pid: number) {
    try {
        process.kill(pid, 0);
        return true;
    } catch {
        return false;
    }
}

async function rejectionOf(promise: Promise<unknown>) {
    try {
        await promise;
    } catch (e) {
        return e;
    }
    expect.fail("expected a rejection");
}

describe("MatterServerProcess", () => {
    let server: MatterServerProcess | undefined;
    let reportDir: string;
    let reportFile: string;
    let abandon: AbortController;
    let starts: Promise<MatterServerProcess>[];

    /** A start the test leaves behind, on its own timeout among others, is aborted in afterEach and its child stopped. */
    function start(options: MatterServerProcessOptions) {
        const starting = MatterServerProcess.start({
            signal: abandon.signal,
            env: { FAKE_SERVER_REPORT: reportFile },
            ...options,
        });
        starts.push(starting);
        return starting;
    }

    beforeEach(async () => {
        abandon = new AbortController();
        starts = [];
        reportDir = await mkdtemp(join(tmpdir(), "fake-server-report-"));
        reportFile = join(reportDir, "report.json");
    });

    afterEach(async () => {
        abandon.abort();
        // Each test checks the outcome of its own starts; closing is idempotent
        for (const outcome of await Promise.allSettled(starts)) {
            if (outcome.status === "fulfilled") {
                await outcome.value.close();
            }
        }
        await server?.close();
        server = undefined;
        await rm(reportDir, { recursive: true, force: true });
    });

    async function readReport(): Promise<Report> {
        await waitFor(() => existsSync(reportFile), "fixture report");
        const parsed: Report = JSON.parse(await readFile(reportFile, "utf8"));
        return parsed;
    }

    async function expectCleanedUp(report: Report) {
        expect(isAlive(report.pid), "child still alive").false;
        expect(existsSync(report.storagePath), "storage still present").false;
    }

    it("starts, connects and exposes stdout as log", async () => {
        server = await start({ entry: ENTRY, role: "dut-controller", primaryInterface: "en9" });

        expect(server.client.serverInfo.sdk_version).equals("fake-server-entry");
        await waitFor(
            () => !!server?.log.lines.some(({ text }) => text.includes("Webserver listening on")),
            "readiness line",
        );

        const args = await argsFromLog(server);
        expect(args).includes(DISABLE_AUTO_SUBSCRIPTION_FLAG);
        expect(args).includes("--enable-test-net-dcl");
        expect(args).includes("--dcl-offline");
        expect(args[args.indexOf("--log-level") + 1]).equals("debug");
        expect(args[args.indexOf("--primary-interface") + 1]).equals("en9");
        expect(args[args.indexOf("--port") + 1]).equals("0");
        expect(args[args.indexOf("--listen-address") + 1]).equals("127.0.0.1");
        expect(existsSync(storageOf(args))).true;
    });

    it("passes the server only the variables it needs of this process's environment", async () => {
        const previous = process.env.LISTEN_ADDRESS;
        process.env.LISTEN_ADDRESS = "0.0.0.0";
        try {
            server = await start({ entry: ENTRY, role: "dut" });
        } finally {
            if (previous === undefined) {
                delete process.env.LISTEN_ADDRESS;
            } else {
                process.env.LISTEN_ADDRESS = previous;
            }
        }

        const { environment } = await readReport();
        expect(environment).not.includes("LISTEN_ADDRESS");
        expect(environment).includes("PATH");
        expect(environment).includes("FAKE_SERVER_REPORT");
    });

    it("runs a command line that ends in a script path as a command line", async () => {
        server = await start({ entry: `${process.execPath} ${ENTRY}`, role: "dut" });

        expect(server.client.serverInfo.sdk_version).equals("fake-server-entry");
    });

    it("runs a .cjs file with the current Node", async () => {
        server = await start({ entry: CJS_ENTRY, role: "dut" });

        expect(server.client.serverInfo.sdk_version).equals("fake-server-entry");
    });

    it("rejects an empty entry", async () => {
        expect(await rejectionOf(start({ entry: "  ", role: "dut" }))).instanceOf(CertConfigError);
    });

    it("omits --primary-interface when none is given", async () => {
        server = await start({ entry: ENTRY, role: "dut-controller" });

        expect(await argsFromLog(server)).not.includes("--primary-interface");
    });

    it("rejects with the last log lines when the child exits early", async () => {
        const error = await rejectionOf(start({ entry: withFlag("--exit-early"), role: "dut" }));

        expect(error).instanceOf(CertConfigError);
        const message = error instanceof Error ? error.message : "";
        expect(message).contains("exit code 3");
        expect(message).contains("fake-server failing on purpose");
        expect(message).contains(ARGS_PREFIX);
    });

    it("kills the child and removes storage on close", async () => {
        server = await start({ entry: ENTRY, role: "dut" });
        const storage = storageOf(await argsFromLog(server));
        expect(existsSync(storage)).true;

        const started = Date.now();
        await server.close();
        await server.close();
        // The child honors SIGTERM; waiting for the SIGKILL fallback would mean close never signalled it
        expect(Date.now() - started).lessThan(3_000);

        expect(existsSync(storage)).false;
        server = undefined;
    });

    it("shares one shutdown between repeated close calls", async () => {
        server = await start({ entry: ENTRY, role: "dut" });
        const clientClose = server.client.close.bind(server.client);
        let clientCloses = 0;
        server.client.close = () => {
            clientCloses++;
            return clientClose();
        };

        const first = server.close();
        const second = server.close();
        expect(second).equals(first);
        await first;
        await server.close();

        expect(clientCloses).equals(1);
        server = undefined;
    });

    it("closes the websocket client when it closes", async () => {
        server = await start({ entry: ENTRY, role: "dut" });
        const { client } = server;
        const clientClose = client.close.bind(client);
        let clientCloses = 0;
        client.close = () => {
            clientCloses++;
            return clientClose();
        };

        await server.close();

        expect(clientCloses).equals(1);
        expect(await rejectionOf(client.command("ping"))).instanceOf(ClosedError);
        server = undefined;
    });

    it("kills a child that ignores SIGTERM once the exit grace has passed", async () => {
        server = await start({
            entry: withFlag("--ignore-sigterm"),
            role: "dut",
            exitGrace: Millis(300),
        });
        const report = await readReport();

        const started = Date.now();
        await server.close();
        const elapsed = Date.now() - started;
        server = undefined;

        // Killed by the fallback: not before the grace elapsed, and well before any default grace
        expect(elapsed).greaterThanOrEqual(250);
        expect(elapsed).lessThan(3_000);
        await expectCleanedUp(report);
    });

    it("removes storage after a failed start", async () => {
        await rejectionOf(start({ entry: withFlag("--exit-early"), role: "dut" }));

        const report = await readReport();
        expect(existsSync(report.storagePath)).false;
    });

    it("rejects when the signal is already aborted", async () => {
        const controller = new AbortController();
        controller.abort();

        const error = await rejectionOf(
            start({ entry: withFlag("--never-listen"), role: "dut", signal: controller.signal }),
        );

        expect(error).instanceOf(ClosedError);
    });

    it("rejects with ClosedError before creating storage when the signal is already aborted", async () => {
        const controller = new AbortController();
        controller.abort();
        const tmp = process.env.TMPDIR;
        process.env.TMPDIR = join(reportDir, "missing");
        try {
            const error = await rejectionOf(start({ entry: ENTRY, role: "dut", signal: controller.signal }));
            expect(error).instanceOf(ClosedError);
        } finally {
            if (tmp === undefined) {
                delete process.env.TMPDIR;
            } else {
                process.env.TMPDIR = tmp;
            }
        }
    });

    it("stops the child and removes storage when aborted while waiting for readiness", async () => {
        const controller = new AbortController();
        const starting = start({
            entry: withFlag("--never-listen"),
            role: "dut",
            signal: controller.signal,
        });
        const outcome = rejectionOf(starting);

        const report = await readReport();
        controller.abort();

        expect(await outcome).instanceOf(ClosedError);
        await expectCleanedUp(report);
    });

    it("stops the child and removes storage when readiness times out", async () => {
        const error = await rejectionOf(
            start({
                entry: withFlag("--never-listen"),
                role: "dut",
                readinessTimeout: Seconds(1),
            }),
        );

        expect(error).instanceOf(CertConfigError);
        const message = error instanceof Error ? error.message : "";
        expect(message).contains("did not become ready within");
        expect(message).contains("fake-server not listening");
        await expectCleanedUp(await readReport());
    });

    it("kills its child when the owning process exits without closing it", async () => {
        const owner = spawn(process.execPath, [EXIT_OWNER, PROCESS_MODULE, ENTRY], {
            stdio: "ignore",
            env: { ...process.env, FAKE_SERVER_REPORT: reportFile },
        });
        const code = await new Promise<number | null>(resolve => owner.once("exit", resolve));
        const { pid, storagePath } = await readReport();
        try {
            expect(code).equals(0);
            await waitFor(() => !isAlive(pid), "child killed");
        } finally {
            if (isAlive(pid)) {
                process.kill(pid, "SIGKILL");
            }
            await rm(storagePath, { recursive: true, force: true });
        }
    });

    it("holds one exit listener while children live and none once they ended", async () => {
        const listeners = process.listenerCount("exit");
        server = await start({ entry: ENTRY, role: "dut" });
        const second = await start({ entry: ENTRY, role: "dut" });
        expect(process.listenerCount("exit")).equals(listeners + 1);

        await second.close();
        expect(process.listenerCount("exit")).equals(listeners + 1);
        await server.close();
        server = undefined;
        expect(process.listenerCount("exit")).equals(listeners);
    });
});

describe("plainLogLine", () => {
    it("removes the color codes of a server log line", () => {
        expect(plainLogLine("\x1b[0;32mWebserver listening on http://127.0.0.1:51032\x1b[0m")).equals(
            "Webserver listening on http://127.0.0.1:51032",
        );
    });
});

describe("readinessPortOf", () => {
    it("reads the port after the last colon, for an IPv4 and an unbracketed IPv6 host", () => {
        expect(readinessPortOf("2026-10-11 INFO WebServer Webserver listening on http://0.0.0.0:5580")).equals(5580);
        expect(readinessPortOf("Webserver listening on http://::1:54321")).equals(54321);
    });

    it("answers nothing for any other line, a unix socket listener or a port that is no port", () => {
        expect(readinessPortOf("Webserver listening")).undefined;
        expect(readinessPortOf("Webserver listening on unix socket /tmp/matter.sock")).undefined;
        expect(readinessPortOf("Webserver listening on http://127.0.0.1:0")).undefined;
        expect(readinessPortOf("Webserver listening on http://127.0.0.1:70000")).undefined;
        expect(readinessPortOf("Webserver listening on http://127.0.0.1:ws")).undefined;
    });
});
