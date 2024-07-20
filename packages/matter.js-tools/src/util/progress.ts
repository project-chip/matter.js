/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import colors from "ansi-colors";
import { stderr, stdout } from "process";
import { Package } from "./package.js";

const CLEAR = "\x1b[K";
const SPINNER = "◐◓◑◒"; //"⡜⠔⠢⢣"; //["⚫︎", "⚪︎"]; "⡈⠔⠢⢁";
const SPINNER_INTERVAL = 100;

function packageIdentity(pkg: Package) {
    return `${colors.bold(pkg.json.name)}@${pkg.json.version}`;
}

/**
 * Intercept writes to stderr and stdout so we can ensure our updates appear on different lines from other output.
 */
const writeStatus = (() => {
    let lastStatus: undefined | string;
    let needNewline = false;

    function intercept(stream: NodeJS.WriteStream) {
        const actualWrite = stream.write;
        stream.write = (payload: Uint8Array | string, ...params: any[]) => {
            if (lastStatus) {
                actualWrite.call(stream, "\n");
                lastStatus = undefined;
            }

            if (!payload.length) {
                return true;
            }

            // Require a newline for status updates any time the cursor does not end at the beginning of a line
            needNewline =
                // Update ends in newline
                payload[payload.length - 1] === "\n" &&
                // Update ends in carriage return
                payload[payload.length - 1] !== "\r";

            return actualWrite.call(stream, payload, ...params);
        };
    }

    intercept(stdout);
    intercept(stderr);

    return function writeStatus(text: string, willOverwrite = false) {
        const columns = process.stdout.columns;
        if (willOverwrite && columns !== undefined && text.length > columns - 2) {
            text = text.substring(0, columns - 2) + "…";
        }

        text += willOverwrite ? "\r" : "\n";
        if (text === lastStatus) {
            return;
        }

        if (lastStatus) {
            lastStatus = undefined;
            stdout.write(CLEAR);
        } else if (needNewline && !text.startsWith("\n")) {
            stdout.write("\n");
        }

        stdout.write(text);

        lastStatus = text;
    };
})();

export class Progress {
    status = Progress.Status.Startup;
    #ongoingText?: string;
    #start?: number;
    #spinner = "⧗";
    #spinnerInterval?: ReturnType<typeof setInterval>;

    constructor() {}

    skip(why: string, pkg: Package) {
        stdout.write(colors.dim(`Skip ${packageIdentity(pkg)}: ${why}\n\n`));
    }

    startup(what: string, pkg?: Package) {
        this.status = Progress.Status.Startup;
        if (pkg === undefined) {
            writeStatus(what, true);
        } else {
            writeStatus(`${what} ${packageIdentity(pkg)}`);
        }

        if (process.stdout.isTTY) {
            this.#spinner = SPINNER[0];
            this.#spinnerInterval = setInterval(this.#updateSpinner.bind(this), SPINNER_INTERVAL);
        }
    }

    update(text: string, extra?: string) {
        this.status = Progress.Status.Ongoing;
        let duration;
        if (this.#start === undefined) {
            this.#start = new Date().getTime();
            duration = "";
        } else {
            duration = this.#duration;
        }
        extra = extra === undefined ? "" : ` ${extra}`;
        this.#ongoingText = `${text} ${duration}${extra}`;
        this.#writeOngoing();
    }

    #writeOngoing() {
        if (!this.#ongoingText) {
            return;
        }

        writeStatus(`  ${colors.yellow(this.#spinner)} ${this.#ongoingText}`, true);
    }

    success(text: string) {
        this.status = Progress.Status.Success;
        writeStatus(`  ${colors.green("✔")} ${text} ${this.#duration}`);
        this.#start = this.#ongoingText = undefined;
    }

    failure(text: string) {
        this.status = Progress.Status.Failure;
        writeStatus(`  ${colors.redBright("✗")} ${text} ${this.#duration}`);
        this.#start = this.#ongoingText = undefined;
    }

    info(label: string, value?: any) {
        if (value) {
            label = `${colors.dim(label)} ${value}`;
        }
        writeStatus(`  ${colors.dim("‣")} ${label}`);
    }

    shutdown() {
        if (this.#spinnerInterval) {
            clearInterval(this.#spinnerInterval);
            this.#spinnerInterval = undefined;
        }
        writeStatus("");
    }

    async run(what: string, fn: () => Promise<void>) {
        this.update(what);
        await fn();
        this.success(what);
    }

    get #duration() {
        let ms = this.#start ? new Date().getTime() - this.#start : 0;
        if (ms < 1000) {
            ms = Math.round(ms / 10) / 100;
        } else if (ms < 10000) {
            ms = Math.round(ms / 100) / 10;
        } else {
            ms = Math.trunc(ms / 1000);
        }
        return colors.dim.yellow(`(${ms}s)`);
    }

    #updateSpinner() {
        const slot = this.#start ? Math.floor(new Date().getTime() / SPINNER_INTERVAL) % SPINNER.length : 0;
        this.#spinner = SPINNER[slot];

        this.#writeOngoing();
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
