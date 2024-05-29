/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { deansify } from "@project-chip/matter.js/util";
import Docker from "dockerode";
import { readdir } from "fs/promises";
import { Writable } from "stream";
import { Package } from "../util/package.js";
import {
    DOCKER_BUILD_PATH,
    DOCKER_NAME,
    NamedEnvironments,
    TestEnvironment,
    TestEnvironmentVariables,
} from "./chip/chip-config.js";
import { type TestRunner } from "./runner.js";

export async function testChip(runner: TestRunner, environment: TestEnvironment) {
    // This may be customized via environment variables
    const docker = new Docker();

    // Configure tests based on environment definition
    if (typeof environment !== "object") {
        environment = NamedEnvironments[environment];
        if (environment === undefined) {
            throw new Error(`There is no predefined environment named ${environment}`);
        }
    }

    runner.progress.startup("Testing CHIP");
    await runner.progress.run("Build test image", () => buildImage(docker));
    await runTests(runner, docker, environment);
}

async function buildImage(docker: Docker) {
    const dockerPath = Package.tools.resolve(DOCKER_BUILD_PATH);
    const files = await readdir(dockerPath);

    const stream = await docker.buildImage(
        {
            context: dockerPath,
            src: files,
        },
        {
            t: DOCKER_NAME,
        },
    );

    await new Promise((resolve, reject) => {
        docker.modem.followProgress(stream, (error, result) => (error ? reject(error) : resolve(result)));
    });
}

async function runTests(runner: TestRunner, docker: Docker, environment: TestEnvironmentVariables) {
    try {
        const container = docker.getContainer(DOCKER_NAME);
        await container.remove();
    } catch (e) {
        if ((e as { reason?: string }).reason !== "no such container") {
            throw e;
        }
    }

    const output = OutputProcessor(runner);

    const Env = Object.entries(environment).map(([key, value]) => {
        if (Array.isArray(value)) {
            value = value.join(",");
        }
        return `${key}=${value}`;
    });

    await docker.run(DOCKER_NAME, [], output.collector, {
        Env,
        HostConfig: { Binds: [`${Package.workspace.path}:/matter.js`], Privileged: true },
    });
}

function OutputProcessor(runner: TestRunner) {
    let testCount = 0;
    const collector = new Writable();
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

        if (runner.options.allLogs) {
            console.log(line);
        }

        capture.push(line);
    }

    collector._write = (chunk, _encoding, done) => {
        chunk = chunk.toString();

        const lines = chunk.split("\n");
        if (partial) {
            lines[0] = partial + lines[0];
        }

        partial = lines.pop();

        for (const line of lines) {
            processLine(line);
        }
        done();
    };

    collector._final = done => {
        if (partial !== undefined) {
            processLine(partial);
        }

        // If we didn't notice any tests assume something calamitous occurred and dump all output
        if (!testCount) {
            console.log(capture.join(""));
        }

        done();
    };

    return {
        collector: collector,
    };
}
