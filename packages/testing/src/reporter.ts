/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
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
    beginStep(name: string): void;
    failTest(name: string, detail: FailureDetail): void;
    endRun(stats?: Stats): void;
    failRun(detail: FailureDetail): void;
}

export interface Failure {
    suite: string[];
    test: string;
    step?: string;
    detail: FailureDetail;
}

export abstract class ProgressReporter implements Reporter {
    #run = "";
    #suite = Array<string>();
    #test?: string;
    #step?: string;
    #stats?: Stats;
    #failures = Array<Failure>();
    #lastTitle?: string;

    constructor(private progress: Progress) {}

    beginRun(name: string, stats: Stats | undefined, supportsSuites = true): void {
        this.#run = name;
        this.#suite = [];
        this.#failures = [];
        if (!supportsSuites) {
            this.progress.update(this.#summarize(stats));
        }
    }

    beginSuite(name: string[]): void {
        this.#suite = name;
    }

    beginTest(name: string, stats?: Stats): void {
        this.#test = name;
        this.#stats = stats;
        this.#step = undefined;

        // If not a TTY, only update once per suite to keep the line count down for e.g. GH action logs
        const title = process.stdout.isTTY ? this.#formatName(this.#suite, name) : this.#suite[0];
        this.#updateTitle(title);
    }

    beginStep(name: string): void {
        this.#step = name;

        if (process.stdout.isTTY && this.#test) {
            const title = this.#formatName(this.#suite, this.#test, name);
            this.#updateTitle(title);
        }
    }

    #updateTitle(title: string) {
        if (title === this.#lastTitle) {
            return;
        }
        this.#lastTitle = title;
        this.progress.update(this.#summarize(this.#stats), title);
    }

    failTest(name: string, detail: FailureDetail) {
        this.#failures.push({
            suite: this.#suite,
            test: name,
            step: this.#step,
            detail,
        });
    }

    abstract failRun(detail: FailureDetail): void;

    endRun(stats?: Stats): void {
        if (this.#failures.length) {
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

        return `${colors.bold(this.#run)}${statStr}`;
    }

    #dumpFailures() {
        for (let i = 0; i < this.#failures.length; i++) {
            const failure = this.#failures[i];
            const index = `Failure ${colors.bold((i + 1).toString())} of ${this.#failures.length}`;
            process.stdout.write(`\n${index} ${this.#formatName(failure.suite, failure.test, failure.step)}\n\n`);

            FailureDetail.dump(failure.detail, "  ");
        }
    }

    #formatName(suite: string[], test: string, step?: string) {
        const breadcrumb = [...suite, test];
        if (step) {
            breadcrumb.push(step);
        }
        breadcrumb[breadcrumb.length - 1] = colors.bold(breadcrumb[breadcrumb.length - 1]);
        return breadcrumb.join(" ➡ ");
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

    beginStep(name: string) {
        proxy("beginStep", name);
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
