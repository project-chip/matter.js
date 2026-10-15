/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Abort, ClosedError, Duration, Seconds, TimeoutError } from "@matter/general";
import { CertConfigError, type ChildExit, LineQueue, LogFollower, ManagedChildProcess } from "@matter/testing";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { MatterServerClient } from "./matter-server-client.js";

/** Makes the server leave attribute subscriptions to the cert test instead of subscribing on its own. */
export const DISABLE_AUTO_SUBSCRIPTION_FLAG = "--disable-auto-subscription";

/** The only path the server upgrades to its WebSocket API; a request to any other path is never answered. */
export const WEBSOCKET_PATH = "/ws";

/** The only address the server listens on: its WebSocket API is unauthenticated and can commission and remove nodes. */
const LISTEN_ADDRESS = "127.0.0.1";

/**
 * The variables of this process's environment the server inherits, which a Node process and an entry started through
 * `npx` need. The server reads its own options from the environment too, so a variable set for the test runner, such
 * as `LISTEN_ADDRESS`, must not reach it.
 */
const INHERITED_ENVIRONMENT = ["PATH", "HOME", "TMPDIR", "TMP", "TEMP", "SYSTEMROOT", "USERPROFILE", "APPDATA"];

const DEFAULT_READINESS_TIMEOUT = Seconds(30);
const CONNECT_TIMEOUT = Seconds(5);

/**
 * The line the server logs once a listener accepts WebSocket connections on `/ws`, with the bound port after the last
 * `:` (an IPv6 host is not bracketed). Its wording is a contract of the server: matterjs-server `docs/cli.md`,
 * "Readiness line".
 */
const READINESS_LINE = /Webserver listening on http:\/\/(\S+)/;

/** Color codes the server may put into its console log, which would end up in the port and in recorded lines. */
// eslint-disable-next-line no-control-regex
const SGR_SEQUENCE = /\x1b\[[0-9;]*m/g;

/** A server log line without color codes. */
export function plainLogLine(line: string) {
    return line.replace(SGR_SEQUENCE, "");
}

/** The port a readiness line names, or `undefined` for any other line. */
export function readinessPortOf(line: string): number | undefined {
    const address = READINESS_LINE.exec(line)?.[1];
    if (address === undefined) {
        return undefined;
    }
    const port = Number(address.slice(address.lastIndexOf(":") + 1));
    return Number.isInteger(port) && port > 0 && port <= 0xffff ? port : undefined;
}
const EXIT_GRACE = Seconds(5);
const FAILURE_LOG_LINES = 50;

export interface MatterServerProcessOptions {
    /**
     * `MATTER_CERT_SERVER_ENTRY`: a `.js`/`.mjs`/`.cjs` file run with the current Node, or a command line split on whitespace
     * (so a path containing a space is not accepted).
     * A command line must exec the server directly: a wrapper such as `npx` may not forward SIGTERM, which leaves the
     * server running after {@link MatterServerProcess.close}.
     */
    entry: string;

    /** Names the log follower. */
    role: string;

    primaryInterface?: string;

    /** Aborts waiting for readiness; the child is stopped then. */
    signal?: AbortSignal;

    /** How long to wait for the server to accept connections. Defaults to 30 s. */
    readinessTimeout?: Duration;

    /** How long the child gets to exit after SIGTERM before it is killed. Defaults to 5 s. */
    exitGrace?: Duration;

    /** Variables the server gets in addition to the few it inherits from this process. */
    env?: Record<string, string>;
}

/**
 * A matterjs-server child process with a connected {@link MatterServerClient}.
 */
export class MatterServerProcess {
    readonly client: MatterServerClient;
    readonly log: LogFollower;
    readonly entry: string;
    readonly httpUrl: string;

    readonly #child: ManagedChildProcess;
    readonly #storagePath: string;
    readonly #lines: LineQueue;
    #closing?: Promise<void>;

    private constructor(
        child: ManagedChildProcess,
        client: MatterServerClient,
        lines: LineQueue,
        log: LogFollower,
        storagePath: string,
        entry: string,
        httpUrl: string,
    ) {
        this.entry = entry;
        this.httpUrl = httpUrl;
        this.#child = child;
        this.client = client;
        this.#lines = lines;
        this.log = log;
        this.#storagePath = storagePath;
    }

    static async start(options: MatterServerProcessOptions): Promise<MatterServerProcess> {
        const {
            entry,
            role,
            primaryInterface,
            signal,
            readinessTimeout = DEFAULT_READINESS_TIMEOUT,
            exitGrace = EXIT_GRACE,
            env,
        } = options;

        if (signal?.aborted) {
            throw new ClosedError("Starting matterjs-server was aborted before it began", { cause: signal.reason });
        }

        const storagePath = await mkdtemp(join(tmpdir(), "matter-cert-server-"));
        const lines = new LineQueue();
        let child: ManagedChildProcess | undefined;

        try {
            const [command, ...entryArgs] = commandFor(entry);
            const args = [
                ...entryArgs,
                DISABLE_AUTO_SUBSCRIPTION_FLAG,
                "--enable-test-net-dcl",
                "--dcl-offline",
                "--log-level",
                "debug",
                "--storage-path",
                storagePath,
                "--listen-address",
                LISTEN_ADDRESS,
                "--port",
                "0",
            ];
            if (primaryInterface !== undefined) {
                args.push("--primary-interface", primaryInterface);
            }

            const recent = new Array<string>();
            let announce = (_port: number) => {};
            const listening = new Promise<number>(resolve => (announce = resolve));
            child = ManagedChildProcess.spawn(command, args, {
                env: { ...inheritedEnvironment(), ...env },
                stopGraceMs: exitGrace,
                onLine: raw => {
                    const line = plainLogLine(raw);
                    recent.push(line);
                    if (recent.length > FAILURE_LOG_LINES) {
                        recent.shift();
                    }
                    lines.push(line);
                    const port = readinessPortOf(line);
                    if (port !== undefined) {
                        announce(port);
                    }
                },
            });

            const port = await readyPort(listening, child, command, recent, readinessTimeout, signal);
            const client = await MatterServerClient.connect(
                `ws://${LISTEN_ADDRESS}:${port}${WEBSOCKET_PATH}`,
                signal,
                CONNECT_TIMEOUT,
            );

            const log = new LogFollower(lines.follow(), role);
            return new MatterServerProcess(
                child,
                client,
                lines,
                log,
                storagePath,
                entry,
                `http://${LISTEN_ADDRESS}:${port}`,
            );
        } catch (error) {
            await child?.stop();
            lines.close();
            await rm(storagePath, { recursive: true, force: true });
            throw error;
        }
    }

    /** Stop the server and remove its storage. Safe to call more than once. */
    close(): Promise<void> {
        this.#closing ??= this.#close();
        return this.#closing;
    }

    async #close() {
        try {
            await this.client.close();
        } finally {
            try {
                await this.#child.stop();
            } finally {
                this.#lines.close();
                await rm(this.#storagePath, { recursive: true, force: true });
            }
        }
    }
}

function inheritedEnvironment() {
    const inherited: Record<string, string> = {};
    for (const name of INHERITED_ENVIRONMENT) {
        const value = process.env[name];
        if (value !== undefined) {
            inherited[name] = value;
        }
    }
    return inherited;
}

/** A single token ending in a script extension is a file for the current Node; anything with whitespace is a command line. */
function commandFor(entry: string): string[] {
    const parts = entry.split(/\s+/).filter(part => part.length > 0);
    if (parts.length === 0) {
        throw new CertConfigError("MATTER_CERT_SERVER_ENTRY is empty");
    }
    if (parts.length === 1 && /\.[cm]?js$/.test(parts[0])) {
        return [process.execPath, parts[0]];
    }
    return parts;
}

/** The port the server's readiness line names, once it logged one; fails when the server exits or takes too long. */
async function readyPort(
    listening: Promise<number>,
    child: ManagedChildProcess,
    command: string,
    recent: string[],
    timeout: Duration,
    signal: AbortSignal | undefined,
): Promise<number> {
    const lastLines = () => `Last ${FAILURE_LOG_LINES} log lines:\n${recent.join("\n")}`;
    using abort = new Abort({
        abort: signal,
        timeout,
        timeoutHandler() {
            this.abort(new TimeoutError(`matterjs-server did not become ready within ${Duration.format(timeout)}`));
        },
    });
    const outcome = await abort.race<number | ChildExit>(listening, child.exited);
    if (typeof outcome === "number") {
        return outcome;
    }
    if (outcome !== undefined) {
        throw new CertConfigError(
            `matterjs-server exited before it was ready (${describeExit(outcome, command)}). ${lastLines()}`,
        );
    }
    if (signal?.aborted) {
        throw new ClosedError("Waiting for matterjs-server to become ready was aborted", { cause: signal.reason });
    }
    throw new CertConfigError(`${abort.reason.message}. ${lastLines()}`, { cause: abort.reason });
}

function describeExit({ code, signal, error }: ChildExit, command: string) {
    if (error !== undefined) {
        return `${command} could not be started: ${error.message}`;
    }
    return `exit code ${code ?? "none"}${signal ? ` (signal ${signal})` : ""}`;
}
