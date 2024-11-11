/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Can't import Mocha in the browser so just import type here
import type MochaType from "mocha";
import { FailureDetail } from "./failure-detail.js";
import { Boot } from "./mocks/boot.js";
import { LoggerHooks } from "./mocks/logging.js";
import { TestOptions } from "./options.js";
import { ConsoleProxyReporter, Reporter } from "./reporter.js";
import { wtf } from "./util/wtf.js";

export function generalSetup(mocha: MochaType) {
    const Base = (mocha.constructor as typeof MochaType).reporters.Base;

    // White text, 16-bit and 256-bit green background
    Base.colors["diff added inline"] = "97;42;48;5;22" as any;

    // White text, 16-bit and 256-bit red background
    Base.colors["diff removed inline"] = "97;41;48;5;52" as any;

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
        const actual = mocha.suite[hook] as (this: any, fn: Mocha.Func) => any;
        mocha.suite[hook] = function (this: any, fn: Mocha.Func) {
            return actual.call(this, async function (this: any, ...args: any) {
                return await onlyLogFailure(() => fn.apply(this, args));
            });
        } as any;
    }

    filterLogs("beforeAll");
    filterLogs("afterAll");
    filterLogs("beforeEach");
    filterLogs("afterEach");

    for (const suite of mocha.suite.suites) {
        suite.beforeAll(beforeEachFile);

        // Move our beforeAll hook so it runs before the suite's beforeAll hooks
        const hooks = (suite as any)._beforeAll as unknown[];
        const myHook = hooks.pop();
        hooks.unshift(myHook);
    }

    mocha.suite.afterEach(() => {
        for (const hook of LoggerHooks.afterEach) {
            hook(mocha);
        }
    });

    FailureDetail.diff = Base.generateDiff.bind(Base);
}

// Reset mocks before each file.  Suites could conceivably have callbacks that occur across tests.  If individual tests
// need a reset the suite needs to handle itself.
function beforeEachFile() {
    Boot.reboot();
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
                reporter.failTest(test.title, FailureDetail(error, logs));
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

    return MochaReporter;
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
