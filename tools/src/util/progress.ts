/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Package } from "./package.js";
import { stdout } from "process";
import colors from "ansi-colors";

const actualWrite = process.stdout.write;

function write(text: string) {
    actualWrite.call(process.stdout, text);
}

export class Progress {
    constructor(public writer = write) {}

    startup(what: string, pkg: Package) {
        write(`${what} ${colors.bold(pkg.json.name)} v${pkg.json.version}\n`);
    }

    update(text: string) {
        stdout.clearLine(0);
        write(`  ${colors.yellow("⧗")} ${text}`);
        stdout.cursorTo(0);
    }

    success(text: string) {
        stdout.clearLine(0);
        write(`  ${colors.green("✔")} ${text}\n`);
    }

    failure(text: string) {
        stdout.clearLine(0);
        write(`  ${colors.redBright("✗")} ${text}\n`);
    }
}
