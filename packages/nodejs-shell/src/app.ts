#!/usr/bin/env node
/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LogFormat, LogLevel, Logger, singleton } from "@matter/general";
import { createFileLogger } from "@matter/nodejs";
import { NodeJsBle } from "@matter/nodejs-ble";
import { Ble } from "@matter/protocol";
import yargs from "yargs/yargs";
import { MatterNode } from "./MatterNode.js";
import { Shell } from "./shell/Shell";

const PROMPT = "matter> ";
const logger = Logger.get("Shell");
if (process.stdin?.isTTY) Logger.format = LogFormat.ANSI;

let theNode: MatterNode;

export function setLogLevel(identifier: string, level: string): void {
    let logLevel = LogLevel.INFO;
    switch (level) {
        case "fatal":
            logLevel = LogLevel.FATAL;
            break;
        case "error":
            logLevel = LogLevel.ERROR;
            break;
        case "warn":
            logLevel = LogLevel.WARN;
            break;
        case "debug":
            logLevel = LogLevel.DEBUG;
            break;
    }
    Logger.setDefaultLoglevelForLogger(identifier, logLevel);
}

/**
 * @file Top level application for Matter Node.
 */
async function main() {
    const yargsInstance = yargs(process.argv.slice(2))
        .command(
            "* [node-num] [node-type]",
            "Matter Node Shell",
            yargs => {
                return yargs
                    .positional("node-num", {
                        describe: "Node number for storage",
                        default: 0,
                        type: "number",
                    })
                    .positional("node-type", {
                        describe: "Type of the node",
                        choices: ["controller"],
                        default: "controller",
                        type: "string",
                    })
                    .options({
                        ble: {
                            description: "Enable BLE support.",
                            type: "boolean",
                        },
                        bleHciId: {
                            description:
                                "HCI ID of the BLE adapter to use. The provided value will be persisted for future runs.",
                            type: "number",
                            default: 0,
                        },
                        factoryReset: {
                            description: "Factory-Reset storage of this node.",
                            default: false,
                            type: "boolean",
                        },
                        netInterface: {
                            description: "Network interface to use for MDNS announcements and scanning.",
                            type: "string",
                            default: undefined,
                        },
                        logfile: {
                            description:
                                "Logfile to use to log to. By Default debug loglevel is logged to the file. The provided value will be persisted for future runs.",
                            type: "string",
                            default: undefined,
                        },
                    });
            },
            async argv => {
                if (argv.help) return;

                const { nodeNum, ble, bleHciId, nodeType, factoryReset, netInterface, logfile } = argv;

                theNode = new MatterNode(nodeNum, netInterface);
                await theNode.initialize(factoryReset);

                if (logfile !== undefined) {
                    await theNode.Store.set("LogFile", logfile);
                }
                if (await theNode.Store.has("LogFile")) {
                    const storedLogFileName = await theNode.Store.get<string>("LogFile");
                    if (storedLogFileName !== undefined) {
                        Logger.addLogger("file", await createFileLogger(storedLogFileName), {
                            defaultLogLevel: await theNode.Store.get<LogLevel>("LoglevelFile", LogLevel.DEBUG),
                            logFormat: LogFormat.PLAIN,
                        });
                    }
                }
                setLogLevel("default", await theNode.Store.get<string>("LogLevel", "info"));

                const theShell = new Shell(theNode, nodeNum, PROMPT);

                if (bleHciId !== undefined) {
                    await theNode.Store.set("BleHciId", bleHciId);
                }

                if (ble) {
                    const hciId = await theNode.Store.get<number>("BleHciId", 0);
                    // Initialize Ble
                    Ble.get = singleton(
                        () =>
                            new NodeJsBle({
                                hciId,
                            }),
                    );
                }

                console.log(`Started Node #${nodeNum} (Type: ${nodeType}) ${ble ? "with" : "without"} BLE`);
                theShell.start(theNode.storageLocation);
            },
        )
        .version(false)
        .scriptName("shell");
    await yargsInstance.wrap(yargsInstance.terminalWidth()).parseAsync();
}

process.on("message", function (message) {
    console.log(`Message to shell.ts: ${message}`);

    switch (message) {
        case "exit":
            exit().catch(error => logger.error(error));
    }
});

export async function exit(code = 0) {
    await theNode?.close();
    process.exit(code);
}

process.on("SIGINT", () => {
    // Pragmatic way to make sure the storage is correctly closed before the process ends.
    exit().catch(error => logger.error(error));
});

main().catch(error => logger.error(error));
