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
    let identity = colors.bold(pkg.json.name);
    if (pkg.json.version) {
        identity = `${identity}@${pkg.json.version}`;
    }
    return identity;
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
            needNewline = payload[payload.length - 1] !== "\n" && payload[payload.length - 1] !== "\r";

            return actualWrite.call(stream, payload, ...params);
        };
    }

    intercept(stdout);
    intercept(stderr);

    return function writeStatus(text: string, willOverwrite = false) {
        const columns = process.stdout.columns;
        if (willOverwrite && columns !== undefined && text.length > columns - 2) {
            text = filterAnsi(text, columns - 2) + "…";
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
    #refreshInterval?: ReturnType<typeof setInterval>;
    #spinnerPosition = 0;
    #spinnerWindow?: number;

    constructor() {}

    emphasize(text: unknown) {
        return colors.bold(`${text}`);
    }

    deemphasize(text: unknown) {
        return colors.dim(`${text}`);
    }

    skip(why: string, pkg: Package) {
        stdout.write(colors.dim(`Skip ${packageIdentity(pkg)}: ${why}\n\n`));
    }

    startup(what: string, pkgOrOverwrite?: Package | boolean) {
        if (process.stdout.isTTY) {
            this.#updateSpinner();
            this.#refreshInterval = setInterval(this.refresh.bind(this), SPINNER_INTERVAL);
        }

        this.status = Progress.Status.Startup;
        if (pkgOrOverwrite === undefined || typeof pkgOrOverwrite === "boolean") {
            writeStatus(what, pkgOrOverwrite ?? true);
        } else {
            writeStatus(`${what} ${packageIdentity(pkgOrOverwrite)}`);
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
        writeStatus(`  ${colors.green("✓")} ${text} ${this.#duration}`);
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

    warn(text: string) {
        stdout.write(`    ${colors.yellow("Warning:")} ${text}\n`);
    }

    shutdown() {
        if (this.#refreshInterval) {
            clearInterval(this.#refreshInterval);
            this.#refreshInterval = undefined;
        }
        writeStatus("");
    }

    refresh() {
        if (this.#updateSpinner()) {
            this.#writeOngoing();
        }
    }

    #updateSpinner() {
        if (!stdout.isTTY) {
            return false;
        }

        const window = Math.floor(new Date().getTime() / SPINNER_INTERVAL);
        if (this.#spinnerWindow === window) {
            return false;
        }
        this.#spinnerWindow = window;

        this.#spinnerPosition = (this.#spinnerPosition + 1) % SPINNER.length;
        this.#spinner = SPINNER[this.#spinnerPosition];

        return true;
    }

    async run(what: string, fn: () => void | Promise<void>) {
        this.update(what);
        try {
            await fn();
        } catch (e) {
            this.failure(what);
            throw e;
        }
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
}

export namespace Progress {
    export enum Status {
        Startup = "startup",
        Ongoing = "ongoing",
        Success = "success",
        Failure = "failure",
    }
}

// See https://stackoverflow.com/questions/26238553/how-can-i-truncate-a-string-to-a-maximum-length-without-breaking-ansi-escape-cod
// TODO - this function doesn't seem entirely correct, still seems to truncate too much
// Crop the length of lines, ANSI escape code aware
// Always outputs every escape char, regardless of length (so we always end up with a sane state)
// Visible characters are filtered out once length is exceeded
function filterAnsi(str: string, len: number) {
    if (!len || len < 10) return str; // probably not a valid console -- send back the whole line
    let count = 0, // number of visible chars on line so far
        esc = false, // in an escape sequence
        longesc = false; // in a multi-character escape sequence
    let outp = true; // should output this character
    return str
        .split("")
        .filter(function (c) {
            // filter characters...
            if (esc && !longesc && c == "[") longesc = true; // have seen an escape, now '[', start multi-char escape
            if (c == "\x1b") esc = true; // start of escape sequence

            outp = count < len || esc; // if length exceeded, don't output non-escape chars
            if (!esc && !longesc) count++; // if not in escape, count visible char

            if (esc && !longesc && c != "\x1b") esc = false; // out of single char escape
            if (longesc && c != "[" && c >= "@" && c <= "~") {
                esc = false;
                longesc = false;
            } // end of multi-char escape

            return outp; // result for filter
        })
        .join(""); // glue chars back into string
}
