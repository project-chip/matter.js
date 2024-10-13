/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { repl } from "#repl.js";
import colors from "ansi-colors";
import { stdout } from "process";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export async function main(argv: string[]) {
    colors.enabled = stdout.isTTY;

    await yargs(hideBin(argv)).usage("Interact with the local Matter environment.").strict().argv;

    // TODO - REPL is enough for testing but need proper CLI

    await repl();
}
