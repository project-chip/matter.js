/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import colors from "ansi-colors";
import { Progress } from "../util/progress.js";

export type Stats = {
    total: number;
    complete: number;
    failures: number;
    duration?: number;
}

export interface Reporter {
    beginRun(name: string, stats: Stats): void;
    beginSuite(name: string, stats: Stats): void;
    beginTest(name: string, stats: Stats): void;
    endRun(stats: Stats): void;
    failTest(name: string, error?: string, logs?: string): void;
}

export type Failure = {
    suite: string;
    test: string;
    error?: string;
    logs?: string;
}

export class ProgressReporter implements Reporter {
    private run = "";
    private suite = "";
    private failures = Array<Failure>();

    constructor(private progress: Progress) {}

    beginRun(name: string): void {
        this.run = name;
    }

    beginSuite(name: string): void {
        this.suite = name;
    }

    beginTest(_name: string, stats: Stats): void {
        this.progress.update(this.summarize(stats, this.suite));
    }

    failTest(name: string, error?: string, logs?: string) {
        this.failures.push({
            suite: this.suite,
            test: name,
            error,
            logs
        })
    }

    endRun(stats: Stats): void {
        if (this.failures.length) {
            this.progress.failure(this.summarize(stats));
            this.dumpFailures();
        } else {
            this.progress.success(this.summarize(stats));
        }
    }

    private summarize(stats: Stats, name?: string) {
        const complete = colors.dim(`${stats.complete}/${stats.total}`);
        const failures = stats.failures
            ? colors.redBright(` ${stats.failures.toString()} failed`)
            : "";
        const extra = name ? ` ${name}`: "";
        return `${colors.bold(this.run)}${extra} ${complete}${failures}`;
    }

    private dumpFailures() {
        for (let i = 0; i < this.failures.length; i++) {
            const failure = this.failures[i];
            const index = colors.redBright(`Failure ${colors.bold((i + 1).toString())} of ${this.failures.length}`);
            process.stdout.write(`\n${index} ${failure.suite} ${colors.bold(failure.test)}\n\n`);

            if (failure.error) {
                process.stdout.write(`  ${failure.error}\n\n`);
            }

            if (failure.logs) {
                process.stdout.write(`  Logs:\n\n    ${failure.logs.replace("\n", "\n    ")}\n\n`);
            }
        }
    }
}
