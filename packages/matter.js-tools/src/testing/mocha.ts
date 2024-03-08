/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Can't import Mocha in the browser so just import type here
import type MochaType from "mocha";
import { wtf } from "../util/wtf.js";
import { TestOptions } from "./options.js";
import { ConsoleProxyReporter, FailureDetail, Reporter } from "./reporter.js";

export function generalSetup(Mocha: typeof MochaType) {
    // White text, 16-bit and 256-bit green background
    Mocha.reporters.Base.colors["diff added inline"] = "97;42;48;5;22" as any;

    // White text, 16-bit and 256-bit red background
    Mocha.reporters.Base.colors["diff removed inline"] = "97;41;48;5;52" as any;

    // Some of our test suites have setup/teardown logic that logs profusely. Hide these logs unless something goes
    // wrong
    async function onlyLogFailure(fn: () => any) {
        if (!MatterHooks) {
            throw new Error("Matter hooks not loaded");
        }

        const logs = Array<string>();
        const existingSink = MatterHooks.loggerSink;
        try {
            MatterHooks.loggerSink = (_, message) => {
                logs.push(message);
            };
            return await fn();
        } catch (e) {
            process.stdout.write(logs.join("\n"));
            throw e;
        } finally {
            MatterHooks.loggerSink = existingSink;
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

    // Reset mocks before each suite.  Suites could conceivably have callbacks that occur across tests.  If individual
    // tests need a reset the suite needs to handle itself.
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
                if ((test as any).type === "hook") {
                    const { message, stack } = parseError(error);
                    reporter.failRun(`Aborting due to error in ${test.title}: ${message}`, stack);
                    throw error;
                }
                const logs = (test as any).logs as string[];
                reporter.failTest(test.title, translateError(error, logs));
                wtf.dump();
            });

            runner.once(RUNNER.EVENT_RUN_END, () => {
                if (!MatterHooks) {
                    throw new Error("Matter hooks not loaded");
                }
                MatterHooks.loggerSink = undefined;
                reporter.endRun(this.translatedStats);
                wtf.dump();
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
        let diff: string | undefined;

        const { message, stack } = parseError(error);

        if (error.expected && error.actual) {
            diff = Mocha.reporters.Base.generateDiff(error.actual.toString(), error.expected.toString());
            diff = diff.trim().replace(/^ {6}/gms, "");
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

function parseError(error: Error) {
    let message, stack;

    if (error === undefined || error === null) {
        message = `(error is ${error})`;
    } else {
        message = error.message;
    }

    if (error.stack) {
        let lines = error.stack.trim().split("\n");
        if (!message) {
            message = lines[0];
        }
        lines = lines.filter(line => line.match(/:\d+:\d+\)?/));
        if (lines.length) {
            stack = lines.map(line => line.trim()).join("\n");
        }
    } else if (error.message) {
        message = error.message;
    } else {
        message = error.toString();
    }

    message = message.trim().replace(/Error: /, "");

    if (message.endsWith(":")) {
        message = message.slice(0, message.length - 1);
    }

    return { message, stack };
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

        // Start Mocha, proxying reporting through console to Playwright and completing once Mocha has finished
        auto: async function (options: TestOptions) {
            TestOptions.apply(mocha, options);
            mocha.reporter(adaptReporter(Mocha, "Web", new ConsoleProxyReporter()));
            return new Promise<void>(accept => {
                const runner = this.start();
                runner.on("end", accept);
            });
        },
    };
}
