/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Can't import Mocha in the browser so just import type here
import type MochaType from "mocha";
import { TestOptions } from "./options.js";
import { ConsoleProxyReporter, FailureDetail, Reporter } from "./reporter.js";

let emitLogsOnFailure = true;

export function generalSetup(Mocha: typeof MochaType) {
    // White text, 16-bit and 256-bit green background
    Mocha.reporters.Base.colors["diff added inline"] = "97;42;48;5;22" as any;

    // White text, 16-bit and 256-bit red background
    Mocha.reporters.Base.colors["diff removed inline"] = "97;41;48;5;52" as any;

    // Some of our test suites have setup/teardown logic that logs profusely.
    // Hide these logs unless something goes wrong
    async function onlyLogFailure(fn: () => any) {
        if (!MatterHooks) {
            throw new Error("Matter hooks not loaded");
        }

        const logs = Array<string>();
        const existingSink = MatterHooks.loggerSink;
        try {
            if (emitLogsOnFailure) {
                MatterHooks.loggerSink = (_, message) => {
                    logs.push(message);
                };
            }
            return await fn();
        } catch (e) {
            process.stdout.write(logs.join("\n"));
            throw e;
        } finally {
            if (emitLogsOnFailure) {
                MatterHooks.loggerSink = existingSink;
            }
        }
    }

    function filterLogs(hook: "beforeAll" | "afterAll" | "beforeEach" | "afterEach") {
        const actual = Mocha.Suite.prototype[hook] as (this: any, fn: Mocha.Func) => any;
        Mocha.Suite.prototype[hook] = function (this: any, fn: Mocha.Func) {
            return actual.call(this, async function (this: any, ...args: any) {
                return await onlyLogFailure(() => fn.apply(this, args));
            });
        } as any;
    }

    filterLogs("beforeAll");
    filterLogs("afterAll");
    filterLogs("beforeEach");
    filterLogs("afterEach");

    // Reset mocks before each suite.  Suites could conceivably have callbacks
    // that occur across tests.  If individual tests need a reset the suite
    // needs to handle itself.
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const actualBeforeAll = Mocha.Suite.prototype.beforeAll;
    Mocha.Suite.prototype.beforeAll = function (this: Mocha.Context, ...args: any) {
        MockTime.reset();
        return actualBeforeAll.apply(this, args);
    };
}

export function adaptReporter(Mocha: typeof MochaType, title: string, reporter: Reporter) {
    const RUNNER = Mocha.Runner.constants;

    let logs = Array<string>();

    class MochaReporter extends Mocha.reporters.Base {
        constructor(runner: Mocha.Runner) {
            super(runner);

            runner.once(RUNNER.EVENT_RUN_BEGIN, () => {
                if (!MatterHooks) {
                    throw new Error("Matter hooks not loaded");
                }
                MatterHooks.loggerSink = (_, message) => {
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
                if (!MatterHooks) {
                    throw new Error("Matter hooks not loaded");
                }
                MatterHooks.loggerSink = undefined;
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

                    // Node's assert helpfully puts entire objects in the
                    // message and thus in the stack.  We do diffs ourselves,
                    // we just want the stack.  This does a rough cleanup
                    .replace(/.*?\n {4}at/s, "    at")

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

        if (message.endsWith(":")) {
            message = message.slice(0, message.length - 1);
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
    emitLogsOnFailure = !options.allLogs;
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
