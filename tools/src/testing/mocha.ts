/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Can't import Mocha in the browser so just import type here
import type MochaType from "mocha";
import { TestOptions } from "./options.js";
import { ConsoleProxyReporter, FailureDetail, Reporter } from "./reporter.js";

export function adaptReporter(Mocha: typeof MochaType, title: string, reporter: Reporter) {
    const RUNNER = Mocha.Runner.constants;

    let logs = Array<string>();

    class MochaReporter extends Mocha.reporters.Base {
        constructor(runner: Mocha.Runner) {
            super(runner);

            runner.once(RUNNER.EVENT_RUN_BEGIN, () => {
                MatterLoggerSink = (_, message) => {
                    logs.push(message);
                };
                reporter.beginRun(title, this.translatedStats);
            });

            runner.on(RUNNER.EVENT_SUITE_BEGIN, suite => {
                reporter.beginSuite(suite.titlePath(), this.translatedStats);
            });

            runner.on(RUNNER.EVENT_TEST_BEGIN, test => {
                logs = (test as any).logs = [];
                reporter.beginTest(test.title, this.translatedStats);
            });

            runner.on(RUNNER.EVENT_TEST_FAIL, (test, error) => {
                const logs = (test as any).logs as string[];
                reporter.failTest(test.title, translateError(error, logs));
            });

            runner.once(RUNNER.EVENT_RUN_END, () => {
                MatterLoggerSink = undefined;
                reporter.endRun(this.translatedStats);
            });
        }

        get translatedStats() {
            return {
                total: this.runner.total,
                complete: this.stats.tests,
                failures: this.stats.failures,
            };
        }
    }

    function translateError(error: any, logs: string[]) {
        let message: string;
        let stack: string | undefined;
        let diff: string | undefined;

        if (error === undefined || error === null) {
            message = `(error is ${error})`;
        } else if (error.stack) {
            const index = error.stack.indexOf("\n");
            if (index !== -1) {
                message = error.stack.slice(0, index);
                stack = error.stack
                    .slice(index + 1)
                    .trim()
                    .replace(/\n\s+/gm, "\n");
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
            diff = diff.trim().replace(/\n[ \t]+/gm, "\n");
        }

        const result = { message } as FailureDetail;
        if (diff) {
            result.diff = diff;
        }
        if (stack) {
            result.stack = stack;
        }
        if (logs.length) {
            result.logs = logs.join("\n");
        }
        return result;
    }

    return MochaReporter;
}

export function applyOptions(mocha: Mocha, options: TestOptions) {
    if (options.grep) {
        mocha.grep(options.grep);
    }
    if (options.fgrep) {
        mocha.fgrep(options.fgrep);
    }
    if (options.invert) {
        mocha.invert();
    }
}

export function browserSetup(mocha: BrowserMocha) {
    mocha.setup("bdd");

    (globalThis as any).MatterTest = {
        // Starts Mocha (called by clicking link)
        start: () => {
            const root = document.querySelector("#mocha");
            if (root) {
                root.innerHTML = "";
            }
            return mocha.run();
        },

        // Start Mocha, proxying reporting through console to Playwright and
        // completing once Mocha has finished
        auto: async function (options: TestOptions) {
            applyOptions(mocha, options);
            mocha.reporter(adaptReporter(Mocha, "Web", new ConsoleProxyReporter()));
            return new Promise<void>(accept => {
                const runner = this.start();
                runner.on("end", accept);
            });
        },
    };
}
