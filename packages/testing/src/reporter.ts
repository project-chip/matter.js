/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Progress } from "#tools";
import colors from "ansi-colors";
import { FailureDetail } from "./failure-detail.js";

export type Stats = {
    total: number;
    complete: number;
    failures: number;
};

export interface Reporter {
    beginRun(name: string, stats?: Stats, supportsSuites?: boolean): void;
    beginSuite(name: string[], stats?: Stats): void;
    beginTest(name: string, stats?: Stats): void;
    failTest(name: string, detail: FailureDetail): void;
    endRun(stats?: Stats): void;
    failRun(detail: FailureDetail): void;
}

export interface Failure {
    suite: string[];
    test: string;
    detail: FailureDetail;
}

export abstract class ProgressReporter implements Reporter {
    private run = "";
    private suite = Array<string>();
    private failures = Array<Failure>();
    private lastTitle?: string;

    constructor(private progress: Progress) {}

    beginRun(name: string, stats: Stats | undefined, supportsSuites = true): void {
        this.run = name;
        this.suite = [];
        this.failures = [];
        if (!supportsSuites) {
            this.progress.update(this.#summarize(stats));
        }
    }

    beginSuite(name: string[]): void {
        this.suite = name;
    }

    beginTest(name: string, stats?: Stats): void {
        // If not a TTY, only update once per suite to keep the line count down for e.g. GH action logs
        const title = process.stdout.isTTY ? this.#formatName(this.suite, name) : this.suite[0];
        if (this.lastTitle !== title) {
            this.lastTitle = title;
            this.progress.update(this.#summarize(stats), title);
        }
    }

    failTest(name: string, detail: FailureDetail) {
        this.failures.push({
            suite: this.suite,
            test: name,
            detail,
        });
    }

    abstract failRun(detail: FailureDetail): void;

    endRun(stats?: Stats): void {
        if (this.failures.length) {
            this.progress.failure(this.#summarize(stats));
            this.#dumpFailures();
        } else if (stats && !stats.complete) {
            this.progress.failure("No tests found");
        } else {
            this.progress.success(this.#summarize(stats));
        }
    }

    #summarize(stats?: Stats) {
        let statStr;
        if (stats) {
            const complete = colors.dim(`${stats.complete}/${stats.total}`);
            const failures = stats.failures ? colors.redBright(` ${stats.failures.toString()} failed`) : "";
            statStr = ` ${complete}${failures}`;
        } else {
            statStr = "";
        }

        return `${colors.bold(this.run)}${statStr}`;
    }

    #dumpFailures() {
        for (let i = 0; i < this.failures.length; i++) {
            const failure = this.failures[i];
            const index = `Failure ${colors.bold((i + 1).toString())} of ${this.failures.length}`;
            process.stdout.write(`\n${index} ${this.#formatName(failure.suite, failure.test)}\n\n`);

            FailureDetail.dump(failure.detail, "  ");
        }
    }

    #formatName(suite: string[], test: string) {
        return `${suite.join(" ➡ ")} ➡ ${colors.bold(test)}`;
    }
}

const actualConsole = console;
const actualLog = actualConsole.log;

function proxy(...args: any[]) {
    actualLog.call(actualConsole, `${ConsoleProxyReporter.FLAG}${JSON.stringify(args)}`);
}

export class ConsoleProxyReporter implements Reporter {
    static FLAG = "<<REPORT>> ";

    beginRun(name: string, stats?: Stats) {
        proxy("beginRun", name, stats);
    }

    beginSuite(name: string[], stats?: Stats) {
        proxy("beginSuite", name, stats);
    }

    beginTest(name: string, stats?: Stats) {
        proxy("beginTest", name, stats);
    }

    endRun(stats?: Stats) {
        proxy("endRun", stats);
    }

    failTest(name: string, detail: FailureDetail) {
        proxy("failTest", name, detail);
    }

    failRun(detail: FailureDetail) {
        proxy("failRun", detail);
    }
}
