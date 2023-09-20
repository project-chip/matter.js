/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import colors from "ansi-colors";
import { stdout } from "process";
import { Package } from "./package.js";

// eslint-disable-next-line @typescript-eslint/unbound-method
const actualWrite = process.stdout.write;

const FRONT = "\x1b[G";
const CLEAR = "\x1b[K";

export class Progress {
    status = Progress.Status.Startup;
    private start?: number;
    private lastLine?: string;

    constructor() {}

    startup(what: string, pkg: Package) {
        this.status = Progress.Status.Startup;
        this.write(`${what} ${colors.bold(pkg.json.name)}@${pkg.json.version}\n`);
    }

    update(text: string, extra?: string) {
        this.status = Progress.Status.Ongoing;
        let duration;
        if (this.start === undefined) {
            this.start = new Date().getTime();
            duration = "";
        } else {
            duration = this.duration;
        }
        extra = extra === undefined ? "" : ` ${extra}`;
        this.write(`${CLEAR}  ${colors.yellow("⧗")} ${text} ${duration}${extra}${FRONT}`);
        stdout.write("\r");
    }

    success(text: string) {
        this.status = Progress.Status.Success;
        this.write(`${CLEAR}  ${colors.green("✔")} ${text} ${this.duration}\n`);
        delete this.start;
    }

    failure(text: string) {
        this.status = Progress.Status.Failure;
        this.write(`${CLEAR}  ${colors.redBright("✗")} ${text} ${this.duration}\n`);
        delete this.start;
    }

    shutdown() {
        stdout.write("\n");
    }

    protected write(text: string) {
        if (this.lastLine === text) {
            return;
        }
        actualWrite.call(process.stdout, (this.lastLine = text));
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

export namespace Progress {
    export enum Status {
        Startup = "startup",
        Ongoing = "ongoing",
        Success = "success",
        Failure = "failure",
    }
}
