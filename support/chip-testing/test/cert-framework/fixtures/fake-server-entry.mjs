/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Stand-in for the matterjs-server entry point. Plain JavaScript because the child process is plain Node and
// cannot load the TypeScript fake server.
import { existsSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { WebSocketServer } from "ws";

const args = process.argv.slice(2);
console.log(`fake-server args: ${JSON.stringify(args)}`);

// The test reads the pid and storage path from here, also when start() fails and no log is reachable
const reportFile = process.env.FAKE_SERVER_REPORT;

// Renamed into place so a reader never sees a partly written file
function writeReport(report) {
    const temporary = `${reportFile}.${process.pid}.tmp`;
    writeFileSync(temporary, JSON.stringify(report));
    renameSync(temporary, reportFile);
}
const storageIndex = args.indexOf("--storage-path");
const storagePath = storageIndex === -1 ? undefined : args[storageIndex + 1];

const certContext = loadCertContext();

if (reportFile) {
    writeReport({ pid: process.pid, storagePath, environment: Object.keys(process.env), certContext });
}
runServer();

/** Logs what the real server logs for a cert-context.json in its storage, or refuses it as the real server does. */
function loadCertContext() {
    const path = storagePath === undefined ? undefined : join(storagePath, "cert-context.json");
    if (path === undefined || !existsSync(path)) {
        return undefined;
    }
    const content = JSON.parse(readFileSync(path, "utf8"));
    if (args.includes("--cert-context-refuse")) {
        console.log(
            `2026-10-16 06:46:37.222 FATAL MatterServer Server failed to start Invalid group key configuration ${path}: ` +
                "keySets[0].groupKeySetId must not be 0, which is the fabric IPK",
        );
        console.log("  at Parser.fail (certContext.js:65:11)");
        if (args.includes("--cert-context-slow-exit")) {
            // The real server awaits its shutdown after a failed start before it exits
            setInterval(() => {}, 1 << 30);
            return content;
        }
        process.exit(1);
    }
    if (!args.includes("--cert-context-ignore")) {
        const extra = args.includes("--cert-context-miscount") ? 1 : 0;
        const loadedFrom = args.includes("--cert-context-other-path") ? "/elsewhere/cert-context.json" : path;
        console.log(
            `2026-10-16 06:46:44.840 NOTICE GroupKeyConfig Loaded group key configuration from ${loadedFrom}: ` +
                `${content.keySets.length + extra} key sets, ${content.groupKeyMap.length} groups`,
        );
    }
    if (args.includes("--cert-context-install-fail")) {
        // The real server installs the file after it read it, and awaits its shutdown after a failed start
        console.log(
            "2026-10-16 06:46:45.001 FATAL MatterServer Server failed to start Cannot install group key configuration: " +
                "storage closed",
        );
        setInterval(() => {}, 1 << 30);
    }
    return content;
}

function runServer() {
    if (args.includes("--ignore-sigterm")) {
        process.on("SIGTERM", () => console.log("fake-server ignoring SIGTERM"));
    }

    if (args.includes("--exit-early")) {
        console.error("fake-server failing on purpose");
        process.exit(3);
    }

    if (args.includes("--never-listen")) {
        // Alive, but the port is never opened
        console.log("fake-server not listening");
        setInterval(() => {}, 1 << 30);
    } else {
        const portIndex = args.indexOf("--port");
        if (portIndex === -1) {
            console.error("fake-server needs --port");
            process.exit(2);
        }

        const serverInfo = {
            fabric_id: 1,
            compressed_fabric_id: 2,
            schema_version: 14,
            min_supported_schema_version: 11,
            sdk_version: "fake-server-entry",
            wifi_credentials_set: false,
            thread_credentials_set: false,
            bluetooth_enabled: false,
        };

        // The real server upgrades only this path, so a client connecting anywhere else must fail here too
        const server = new WebSocketServer({ host: "127.0.0.1", port: Number(args[portIndex + 1]), path: "/ws" });
        server.on("connection", socket => socket.send(JSON.stringify(serverInfo)));
        // The readiness line the real server logs once /ws accepts connections, with the port it bound, colored as the
        // real server logs it even into a pipe
        server.on("listening", () =>
            console.log(
                `\x1b[2mINFO \x1b[0;1;90mWebServer \x1b[0;32mWebserver listening on http://127.0.0.1:${server.address().port}\x1b[0m`,
            ),
        );
    }
}
