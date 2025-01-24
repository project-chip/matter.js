/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import colors from "ansi-colors";
import { Command } from "commander";
import process from "process";

colors.enabled = process.stdout.isTTY;

export function commander(name: string, description: string) {
    return new Command(name)
        .description(description)
        .allowExcessArguments(false)
        .configureOutput({
            writeOut: str => process.stdout.write(`\n${formatHelp(str)}\n`),
            writeErr: str => process.stderr.write(`\n${colors.red(str)}\n`),
        });
}
function formatHelp(help: string) {
    if (!help.startsWith("Usage: ")) {
        return help;
    }

    help = help.replace(/^Usage: (\S+)/, (_match, name) => `Usage: ${colors.bold(name)}`);
    help = help.replace(/^( {2}.+ {2})/gm, (_match, input: string) =>
        input
            .split(",")
            .map(item => item.replace(/(-*\w+)/, (_match, word) => colors.blue(word)))
            .join(","),
    );
    return help;
}
