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
    private start?: number;

    constructor(public writer = write) {}

    startup(what: string, pkg: Package) {
        write(`${what} ${colors.bold(pkg.json.name)}@${pkg.json.version}\n`);
    }

    update(text: string, extra?: string) {
        let duration;
        if (this.start === undefined) {
            this.start = new Date().getTime();
            duration = "";
        } else {
            duration = this.duration;
        }
        extra = extra === undefined ? "" : ` ${extra}`;
        stdout.clearLine(0);
        write(`  ${colors.yellow("⧗")} ${text} ${duration}${extra}`);
        stdout.cursorTo(0);
    }

    success(text: string) {
        stdout.clearLine(0);
        write(`  ${colors.green("✔")} ${text} ${this.duration}\n`);
        delete this.start;
    }

    failure(text: string) {
        stdout.clearLine(0);
        write(`  ${colors.redBright("✗")} ${text} ${this.duration}\n`);
        delete this.start;
    }

    private get duration() {
        let ms = this.start ? new Date().getTime() - this.start : 0;
        if (ms < 1000) {
            ms = Math.round(ms / 10) / 100;
        } else if (ms < 10000) {
            ms = Math.round(ms / 100) / 10;
        } else {
            ms = Math.trunc(ms / 1000);
        }
        return colors.dim.yellow(`(${ms}s)`);
    }
}
