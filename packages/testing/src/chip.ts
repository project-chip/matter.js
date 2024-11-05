/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Package } from "#tools";
import { parse } from "path";
import { PicsFile } from "./chip/pics-file.js";
import { type TestRunner } from "./runner.js";
import { Docker } from "./util/docker.js";

/**
 * Path configuration.
 */
namespace Constants {
    export const chip = "/connectedhomeip";
    export const chipTool = `${chip}/scripts/tests/chipyaml/chiptool.py`;
    export const yamlTests = `${chip}/src/app/tests/suites/certification`;
    export const pythonTests = `${chip}/src/python_testing`;
    export const python = ["/usr/bin/env", "-S", "python3", "-B"];
    export const pythonRunner = `${chip}/scripts/tests/run_python_test.py`;

    export const pics = "/matter.js/packages/tools/build/pics.properties";
    export const chipPics = "/connectedhomeip/src/app/tests/suites/certification/ci-pics-values";
    export const buildTimeout = 600_000;
    export const defaultTimeout = 60_000;
    export const dockerBuildPath = "chip";
    export const dockerName = "matterjs-chip";
}

/**
 * Internal state.
 */
const State = {
    configured: false,
    options: undefined as Chip.Options | undefined,
    docker: undefined as Docker | undefined,
    yamlTests: Array<string>(),
    pythonTests: Array<string>(),
};

/**
 * Internal configuration management.
 */
const Config = {
    set options(options: Chip.Options) {
        State.options = options;
    },

    get runner() {
        const runner = State.options?.runner;

        if (runner === undefined) {
            throw new Error("No test runner configured");
        }

        return runner;
    },

    async docker() {
        if (State.docker) {
            return State.docker;
        }

        const docker = new Docker();

        const { progress } = Config.runner;

        await progress.run(`Build ${progress.emphasize("CHIP image")}`, () =>
            docker.buildImage(Constants.dockerName, Package.tools.resolve(Constants.dockerBuildPath)),
        );

        State.docker = docker;

        return docker;
    },
};

/**
 * CHIP testing controller.  "CHIP tests" are official tests implemented in the connectedhomeip repository.
 */
export const Chip = {
    /**
     * Configure CHIP testing.  Invoke prior to use of other methods.
     */
    set config(config: Chip.Options) {
        Config.options = config;
    },

    /**
     * Initialize.  This must run before defining tests to enable test definition via globs.
     */
    async initialize() {
        await initialize();
    },

    /**
     * Define YAML tests.  This is a declarative CHIP test defined in a YAML file.
     */
    yaml(testee: Chip.Testee, includeGlob: string, excludeGlob?: string) {
        let tests = filterWithGlob(State.yamlTests, includeGlob);
        if (excludeGlob !== undefined) {
            tests = filterWithGlob(tests, excludeGlob, true);
        }

        if (tests.length === 0) {
            throw new Error(`YAML test glob ${includeGlob} matched no tests`);
        }

        for (const file of tests) {
            implementTest(testee, {
                name: parse(file).base,

                command: [Constants.pythonRunner, file],

                // TODO - complete argument set
                args: {
                    "--pics-file": Constants.pics,
                    "--discriminator": "1234",
                    "--passcode": "20202021",
                },
            });
        }
    },

    /**
     * Define a "python" test.  This is a CHIP test implemented as a python script.
     */
    python(testee: Chip.Testee, tester: Chip.TestSelection, excludeGlob?: string) {
        if (typeof tester === "string") {
            tester = {
                name: tester,
            };
        } else {
            tester = { ...tester };
        }

        // TODO - complete arguments
        tester.args = {
            "--commissioning-method": "on-network",
            "--PICS": Constants.pics,
            "--discriminator": "1234",
            "--passcode": "20202021",
            ...tester.args,
        };

        let files = filterWithGlob(State.pythonTests, tester.name, false);
        if (excludeGlob !== undefined) {
            files = filterWithGlob(files, excludeGlob, true);
        }

        if (files.length === 0) {
            throw new Error(`Python test glob ${tester.name} matched no tests`);
        }

        for (const file of files) {
            const name = parse(file).name;
            implementTest(testee, { ...tester, name, command: [file] });
        }
    },
};

let containerInitializerInstalled = false;

function implementTest(testee: Chip.Testee, tester: Chip.Tester) {
    if (!containerInitializerInstalled) {
        containerInitializerInstalled = true;
        before(async function () {
            this.timeout(Constants.buildTimeout);
            await initialize();
        });
    }

    it(tester.description ?? tester.name, async () => {
        await testee.setup();
        await testee.start();

        try {
            await invokeTester(tester);
        } finally {
            try {
                await testee.stop();
            } catch (e) {
                console.warn("Error stopping test subject", e);
            }
        }
    }).timeout(tester.timeout ?? Constants.defaultTimeout);
}

async function invokeTester(tester: Chip.Tester) {
    const docker = await Config.docker();

    const args = Array<string>();
    if (tester.command) {
        args.push(...tester.command);
    }
    if (tester.args) {
        args.push(...Object.entries(tester.args).flat());
    }

    // TODO - define docker network to match CHIP's testing infrastructure
    const output = docker.run(Constants.dockerName, {
        args,
        env: tester.environment,
        binds: {
            [Package.workspace.path]: "/matter.js",
        },
        network: "host",
    });

    await translateTestOutput(Config.runner, output);
}

export namespace Chip {
    /**
     * The test subject.
     */
    export interface Testee {
        setup(): Promise<void>;
        start(): Promise<void>;
        stop(): Promise<void>;
    }

    /**
     * The test implementation.
     */
    export type TestSelection = Tester | string;

    /**
     * Configuration required from testing program.
     */
    export interface Options {
        runner: TestRunner;
    }

    /**
     * Details of how to run a specific test.
     */
    export interface Tester {
        name: string;
        description?: string;
        command?: string[];
        args?: Record<string, string>;
        timeout?: number;
        environment?: Record<string, string>;
    }
}

export type Chip = typeof Chip;

/**
 * Strip ANSI escape codes from a string.
 */
function deansify(text: string) {
    // Credit to https://stackoverflow.com/questions/25245716/remove-all-ansi-colors-styles-from-strings
    // eslint-disable-next-line no-control-regex
    return text.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, "");
}

// TODO - can simplify because we've removed two layers of CHIP extraction.
//
// TODO - Adaptation to support both python and yaml tests
async function translateTestOutput(runner: TestRunner, output: AsyncIterable<string>) {
    let testCount = 0;

    let capture = Array<string>();

    let partial: string | undefined;

    /**
     * Extract failure details from the test runner's output sphaghetti.
     */
    function reportFailures() {
        let testName: undefined | string;
        let testLogs: undefined | string[];
        for (const line of capture) {
            const subtestBoundary = deansify(line).match(/\*{5} (Test Step \d+|Test Failure) : (.*)/);
            if (subtestBoundary) {
                if (subtestBoundary[1] === "Test Failure") {
                    if (testName === undefined) {
                        continue;
                    }
                    runner.reporter.failTest(testName, {
                        message: subtestBoundary[2],
                        logs: testLogs?.join("\n"),
                    });
                } else {
                    testName = subtestBoundary[2];
                    testLogs = [];
                }
            } else if (testLogs) {
                // Extract matter.js logs
                const appOut = line.match(/^.* APP {2}OUT {2}: (.*)$/);
                if (appOut) {
                    testLogs.push(appOut[1]);
                    continue;
                }

                // Extract diagnostics from the test framework
                const testOut = line.match(/(\d{4}-\d\d-\d\d) .*(\d\d:\d\d:\d\d\.\d\d\d) - TEST OUT {2}: (.*)$/);
                if (testOut) {
                    if (deansify(testOut[3]).match(/^(?:✗ \d+.\d+ms$|\s+\d+\. Running )/)) {
                        continue;
                    }

                    const date = testOut[1];
                    const time = testOut[2];
                    const message = testOut[3].replace("\t\t    ", "").replace(/\t/g, "  ");

                    // Test suite logs date and time of report plus time of log message.  We only care about the second
                    // time so ignore the first
                    testLogs.push(`CHIP ${date} ${time} ${message}`);
                    continue;
                }

                // We don't recognize the line; pass as-is
                testLogs.push(line);
            }
        }
    }

    /**
     * Process test suite output.
     *
     * Unfortunately run_test_suite.py hides most output unless the test crashes so we can't count subtests reliably
     * without PR or replacing with our own thing.  The individual test runners do report this though so we can report
     * per-test information from failure output.
     */
    function processLine(line: string) {
        // Inject the message into our log stream
        MockLogger.injectExternalMessage("CHIP", line);

        line = line.trim();
        const plain = deansify(line);
        const testBoundary = plain.match(
            /^\d{4}-\d\d-\d\d \d\d:\d\d:\d\d\.\d{3} [A-Z ]{7} ([a-zA-Z0-9_]+)\s+- (Starting test|(?:Completed|FAILED) in \d+\.\d+ seconds)$/,
        );

        if (testBoundary) {
            if (testBoundary[2].startsWith("Start")) {
                testCount++;
                capture = [];
                runner.reporter.beginRun(testBoundary[1], undefined, false);
            } else if (testBoundary[2].startsWith("Completed")) {
                runner.reporter.endRun();
            } else {
                reportFailures();
                runner.reporter.endRun();
            }
        }

        capture.push(line);
    }

    for await (const chunk of output) {
        const lines = chunk.split("\n");
        if (partial) {
            lines[0] = partial + lines[0];
        }

        partial = lines.pop();

        for (const line of lines) {
            processLine(line);
        }
    }

    if (partial !== undefined) {
        processLine(partial);
    }
}

async function initialize() {
    if (State.configured) {
        return;
    }

    await Config.docker();
    await configurePics();
    await configureYaml();
    await configurePython();

    State.configured = true;
}

async function configurePics() {
    const docker = await Config.docker();
    const ciPics = await docker.readFileFromImage(Constants.dockerName, Constants.chipPics);
    const pics = new PicsFile(ciPics, true);

    const overrides = new PicsFile(Package.tools.resolve("src/testing/chip/pics.properties"));
    pics.patch(overrides);

    pics.save(Package.tools.resolve("build/pics.properties"));
}

async function configureYaml() {
    const docker = await Config.docker();

    const tests = await docker.resolveGlobFromImage(Constants.dockerName, `${Constants.yamlTests}/Test_*.yaml`);

    State.yamlTests.push(...tests);
}

async function configurePython() {
    const docker = await Config.docker();

    const tests = (await docker.resolveGlobFromImage(Constants.dockerName, `${Constants.pythonTests}/*.py`)).filter(
        name => name.match(/(?:TC_|Test)[^/]\.py$/),
    );

    State.pythonTests.push(...tests);
}

function filterWithGlob(list: string[], glob: string, invert = false) {
    const globPattern = glob.replace(/\*/g, "[^\\/]+");
    const pattern = new RegExp(`^.*/(?:Test_TC_|TC|Test)${globPattern}\\.(?:py|yaml)$`);
    return list.filter(s => !!s.match(pattern) === !invert);
}
