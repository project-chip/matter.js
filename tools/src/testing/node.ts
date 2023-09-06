/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import Mocha from "mocha";
import { glob } from "glob";
import { Package } from "../util/package.js";
import { relative } from "path";
import { Reporter } from "./reporter.js";
import "./logging.js";
import colors from "ansi-colors";

const RUNNER = Mocha.Runner.constants;

function createReporter(title: string, reporter: Reporter) {
    class MochaReporter extends Mocha.reporters.Base {
        private logs = Array<string>();

        constructor(runner: Mocha.Runner) {
            super(runner);

            runner.once(RUNNER.EVENT_RUN_BEGIN, () => {
                MatterLoggerSink = (_, message) => {
                    this.logs.push(message);
                }
                reporter.beginRun(title, this.translatedStats);
            })

            runner.on(RUNNER.EVENT_SUITE_BEGIN, (suite) => {
                reporter.beginSuite(suite.titlePath().join("/"), this.translatedStats);
            })

            runner.on(RUNNER.EVENT_TEST_BEGIN, (test) => {
                this.logs = (test as any).logs = [];
                reporter.beginTest(test.title, this.translatedStats);
            })

            runner.on(RUNNER.EVENT_TEST_FAIL, (test, error) => {
                const logs = (test as any).logs as string[];
                reporter.failTest(
                    test.title,
                    formatError(error),
                    logs.length ? logs.join("\n") : undefined
                );
            })

            runner.once(RUNNER.EVENT_RUN_END, () => {
                MatterLoggerSink = undefined;
                reporter.endRun(this.translatedStats);
            })
        }

        get translatedStats() {
            return {
                total: this.runner.total,
                complete: this.stats.tests,
                failures: this.stats.failures,
                duration: this.stats.duration
            }
        }
    }

    return MochaReporter;
}

export async function testNode(format: "cjs" | "esm", reporter: Reporter) {
    const mocha = new Mocha({
        inlineDiffs: true,
        reporter: createReporter(format.toUpperCase(), reporter)
    });

    function addFile(path: string) {
        path = relative(process.cwd(), path);
        if (path[0] !== ".") {
            path = `./${path}`;
        }
        mocha.addFile(path);
    }
     
    addFile(Package.tools.resolve(`dist/esm/testing/global-definitions.js`));

    glob.sync(Package.project.resolve(`build/${format}/test/**/*Test.js`)).forEach(addFile);

    await mocha.loadFilesAsync();

    const runner = await new Promise<Mocha.Runner>((resolve) => {
        const runner = mocha.run(() => resolve(runner));
    });

    return !runner.stats?.failures;
}

// Ugh would prefer to use Mocha's standard epilogue but they don't offer any
// good way to inject our log messages.  At least they export their diff method
function formatError(error: any) {
    let message: string;
    let stack = "";
    let diff = "";

    if (error === undefined || error === null) {
        message = `Error is ${error}`;
    } else if (error.stack) {
        const index = error.stack.indexOf("\n");
        if (index !== -1) {
            message = error.stack.slice(0, index);
            stack = colors.dim(error.stack.slice(index));
        } else {
            message = error.stack;
        }
    } else if (error.message) {
        message = error.message;
    } else {
        message = error.toString();
    }

    if (error.expected && error.actual) {
        diff = Mocha.reporters.Base.generateDiff(error.actual.toString(), error.expected.toString());
        diff = `\n${diff}`;
    }

    return `${message}${diff}${stack}`
}
