/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BleNode } from "@project-chip/matter-node-ble.js/ble";
import { createFileLogger } from "@project-chip/matter-node.js/log";
import { Ble } from "@project-chip/matter.js/ble";
import { Format, Level, Logger } from "@project-chip/matter.js/log";
import { singleton } from "@project-chip/matter.js/util";
import yargs from "yargs/yargs";
import { MatterNode } from "./MatterNode.js";
import { Shell } from "./shell/Shell";

const PROMPT = "matter-node> ";
const logger = Logger.get("Shell");
if (process.stdin?.isTTY) Logger.format = Format.ANSI;

let theNode: MatterNode;

export function setLogLevel(identifier: string, level: string): void {
    let logLevel = Level.INFO;
    switch (level) {
        case "fatal":
            logLevel = Level.FATAL;
            break;
        case "error":
            logLevel = Level.ERROR;
            break;
        case "warn":
            logLevel = Level.WARN;
            break;
        case "debug":
            logLevel = Level.DEBUG;
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
                if (theNode.Store.has("LogFile")) {
                    const storedLogFileName = await theNode.Store.get<string>("LogFile");
                    if (storedLogFileName !== undefined) {
                        Logger.addLogger("file", await createFileLogger(storedLogFileName), {
                            defaultLogLevel: await theNode.Store.get<Level>("LoglevelFile", Level.DEBUG),
                            logFormat: Format.PLAIN,
                        });
                    }
                }
                setLogLevel("default", await theNode.Store.get<string>("LogLevel", "info"));

                const theShell = new Shell(theNode, PROMPT);

                if (bleHciId !== undefined) {
                    await theNode.Store.set("BleHciId", bleHciId);
                }

                if (ble) {
                    const hciId = await theNode.Store.get<number>("BleHciId", 0);
                    // Initialize Ble
                    Ble.get = singleton(
                        () =>
                            new BleNode({
                                hciId,
                            }),
                    );
                }

                console.log(`Started Node #${nodeNum} (Type: ${nodeType}) ${ble ? "with" : "without"} BLE`);
                theShell.start();
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
