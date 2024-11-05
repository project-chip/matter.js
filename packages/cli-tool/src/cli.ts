/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { repl } from "#repl.js";
import { commander } from "#tools";
import "@matter/nodejs";
import colors from "ansi-colors";
import { stdout } from "process";

export async function main(argv: string[]) {
    colors.enabled = stdout.isTTY;

    commander("matter", "Interact with the local Matter environment.").parse(argv);

    // TODO - REPL is enough for testing but need proper CLI

    await repl();
}
