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
};

export interface Reporter {
    beginRun(name: string, stats: Stats): void;
    beginSuite(name: string[], stats: Stats): void;
    beginTest(name: string, stats: Stats): void;
    endRun(stats: Stats): void;
    failTest(name: string, detail: FailureDetail): void;
}

export type FailureDetail = {
    message: string;
    diff?: string;
    stack?: string;
    logs?: string;
};

export type Failure = {
    suite: string[];
    test: string;
    detail: FailureDetail;
};

export class ProgressReporter implements Reporter {
    private run = "";
    private suite = Array<string>();
    private failures = Array<Failure>();
    private lastTitle?: string;

    constructor(private progress: Progress) {}

    beginRun(name: string): void {
        this.run = name;
    }

    beginSuite(name: string[]): void {
        this.suite = name;
    }

    beginTest(_name: string, stats: Stats): void {
        // Only update once per suite to keep the line count down in GH action
        // logs
        const title = this.suite[0];
        if (this.lastTitle !== title) {
            this.lastTitle = title;
            this.progress.update(this.summarize(stats), title);
        }
    }

    failTest(name: string, detail: FailureDetail) {
        this.failures.push({
            suite: this.suite,
            test: name,
            detail,
        });
    }

    endRun(stats: Stats): void {
        if (this.failures.length) {
            this.progress.failure(this.summarize(stats));
            this.dumpFailures();
        } else if (!stats.complete) {
            this.progress.failure("No tests found");
        } else {
            this.progress.success(this.summarize(stats));
        }
    }

    private summarize(stats: Stats) {
        const complete = colors.dim(`${stats.complete}/${stats.total}`);
        const failures = stats.failures ? colors.redBright(` ${stats.failures.toString()} failed`) : "";
        return `${colors.bold(this.run)} ${complete}${failures}`;
    }

    private dumpFailures() {
        for (let i = 0; i < this.failures.length; i++) {
            const failure = this.failures[i];
            const index = colors.redBright(`Failure ${colors.bold((i + 1).toString())} of ${this.failures.length}`);
            process.stdout.write(`\n${index} ${failure.suite.join(" ➡ ")} ➡ ${colors.bold(failure.test)}\n\n`);

            process.stdout.write(`  ${failure.detail.message}\n\n`);

            if (failure.detail.diff) {
                process.stdout.write(`      ${failure.detail.diff.replace(/\n/gm, "\n      ")}\n\n`);
            }

            if (failure.detail.stack) {
                process.stdout.write(`  ${colors.dim(failure.detail.stack.replace(/\n/gm, "\n  "))}\n\n`);
            }

            if (failure.detail.logs) {
                process.stdout.write(`  ${failure.detail.logs.replace(/\n/gm, "\n  ")}\n\n`);
            }
        }
    }
}

const actualConsole = console;
// eslint-disable-next-line @typescript-eslint/unbound-method
const actualLog = actualConsole.log;

function proxy(...args: any[]) {
    actualLog.call(actualConsole, `${ConsoleProxyReporter.FLAG}${JSON.stringify(args)}`);
}

export class ConsoleProxyReporter implements Reporter {
    static FLAG = "<<REPORT>> ";

    beginRun(name: string, stats: Stats) {
        proxy("beginRun", name, stats);
    }

    beginSuite(name: string[], stats: Stats) {
        proxy("beginSuite", name, stats);
    }

    beginTest(name: string, stats: Stats) {
        proxy("beginTest", name, stats);
    }

    endRun(stats: Stats) {
        proxy("endRun", stats);
    }

    failTest(name: string, detail: FailureDetail) {
        proxy("failTest", name, detail);
    }
}
