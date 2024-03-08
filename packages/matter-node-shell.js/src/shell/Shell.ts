/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "@project-chip/matter.js/common";
import { commandlineParser } from "@project-chip/matter.js/util";
import readline from "readline";
import type { Argv } from "yargs";
import yargs from "yargs/yargs";
import { MatterNode } from "../MatterNode.js";
import { exit } from "../app";
import cmdAttributes from "./cmd_cluster-attributes";
import cmdCommands from "./cmd_cluster-commands";
import cmdEvents from "./cmd_cluster-events";
import cmdCommission from "./cmd_commission.js";
import cmdConfig from "./cmd_config.js";
import cmdDiscover from "./cmd_discover.js";
import cmdIdentify from "./cmd_identify.js";
import cmdNodes from "./cmd_nodes.js";
import cmdSession from "./cmd_session.js";
import cmdSubscribe from "./cmd_subscribe.js";

function exitCommand() {
    return {
        command: "exit",
        describe: "Exit",
        builder: {},
        handler: async () => {
            console.log("Goodbye.");
            await exit();
        },
    };
}

/**
 * Class to process and dispatch shell commands.
 */
export class Shell {
    configExecPassthrough = false;
    readline?: readline.Interface;
    yargsInstance?: Argv;

    /**
     * Construct a new Shell object.
     *
     * @param {MatterNode} theNode MatterNode object to use for all commands.
     * @param {string} prompt Prompt string to use for each command line.
     */
    constructor(
        public theNode: MatterNode,
        public prompt: string,
    ) {}

    start() {
        this.readline = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: true,
            prompt: this.prompt,
        });
        this.readline
            .on("line", cmd => {
                this.onReadLine(cmd.trim()).catch(e => {
                    process.stderr.write(`Read error: ${e}\n`);
                    process.exit(1);
                });
            })
            .on("close", () => {
                exit()
                    .then(() => process.exit(0))
                    .catch(e => {
                        process.stderr.write(`Close error: ${e}\n`);
                        process.exit(1);
                    });
            });

        this.readline.prompt();
    }

    /**
     * Method to process a line of raw cli text input.
     *
     * @param {string} line
     */
    async onReadLine(line: string) {
        if (line) {
            let args;
            try {
                args = commandlineParser(line);
            } catch (error) {
                process.stderr.write(`Error happened during command parsing: ${error}\n`);
                return;
            }
            const yargsInstance = yargs(args)
                .command([
                    cmdCommission(this.theNode),
                    cmdConfig(this.theNode),
                    cmdSession(this.theNode),
                    cmdNodes(this.theNode),
                    cmdSubscribe(this.theNode),
                    cmdIdentify(this.theNode),
                    cmdDiscover(this.theNode),
                    cmdAttributes(this.theNode),
                    cmdEvents(this.theNode),
                    cmdCommands(this.theNode),
                    exitCommand(),
                ])
                .command({
                    command: "*",
                    handler: argv => {
                        argv.unhandled = true;
                    },
                })
                .exitProcess(false)
                .version(false)
                .help("help")
                .scriptName("")
                .strictCommands(false)
                .strictOptions(false)
                .fail(false)
                .strict(false);
            try {
                const argv = await yargsInstance.wrap(yargsInstance.terminalWidth()).parseAsync();

                if (argv.unhandled) {
                    process.stderr.write(`Unknown command: ${line}\n`);
                    yargsInstance.showHelp();
                } else {
                    console.log("Done.");
                }
            } catch (error) {
                process.stderr.write(`Error happened during command: ${error}\n`);
                if (error instanceof Error && error.stack) {
                    process.stderr.write(error.stack.toString());
                    process.stderr.write("\n");
                }
                if (!(error instanceof MatterError)) {
                    yargsInstance.showHelp();
                }
            }
        }
        this.readline?.prompt();
    }
}
