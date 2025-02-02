/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Must load first to shim crypto on node 18
import "./util/node-shims.js";

import "./global-definitions.js";

import { Graph, Package, Project, ProjectBuilder } from "#tools";
import { clear } from "console";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { chip } from "./chip/chip.js";
import { defaultDescriptor, inspect } from "./inspect.js";
import { TestRunner } from "./runner.js";

enum TestType {
    esm = "esm",
    cjs = "cjs",
    web = "web",
}

Error.stackTraceLimit = 50;

export async function main(argv = process.argv) {
    const testTypes = new Set<TestType>();

    let ls = false;
    let manual = false;

    const args = await yargs(hideBin(argv))
        .usage("Runs tests in packages adhering to matter.js standards.")
        .option("prefix", {
            alias: "p",
            default: ".",
            type: "string",
            describe: "specify directory of package to test",
        })
        .option("web", {
            alias: "w",
            default: false,
            type: "boolean",
            describe: "enable web tests in default test mode",
        })
        .option("spec", {
            type: "array",
            string: true,
            describe: "One or more paths of tests to run",
            default: "./test/**/*{.test,Test}.ts",
        })
        .option("all-logs", { type: "boolean", describe: "Emit log messages in real time" })
        .option("debug", { type: "boolean", describe: "Enable Mocha debugging" })
        .option("environment", { alias: "e", type: "string", describe: "Select named test environment" })
        .option("fgrep", { alias: "f", type: "string", describe: "Only run tests matching this string" })
        .option("force-exit", { type: "boolean", describe: "Force Node to exit after tests complete" })
        .option("grep", { alias: "g", type: "string", describe: "Only run tests matching this regexp" })
        .option("invert", { alias: "i", type: "boolean", describe: "Inverts --grep and --fgrep matches" })
        .option("profile", { type: "boolean", describe: "Write profiling data to build/profiles (node only)" })
        .option("wtf", { type: "boolean", describe: "Enlist wtfnode to detect test leaks" })
        .option("trace-unhandled", { type: "boolean", describe: "Detail unhandled rejections with trace-unhandled" })
        .option("clear", { type: "boolean", describe: "Clear terminal before testing" })
        .command("*", "run all supported test types")
        .command("esm", "run tests on node (ES6 modules)", () => testTypes.add(TestType.esm))
        .command("cjs", "run tests on node (CommonJS modules)", () => testTypes.add(TestType.cjs))
        .command("web", "run tests in web browser", () => testTypes.add(TestType.web))
        .command("inspect", "lists details about defined tests", () => (ls = true))
        .command("manual", "start web test server and print URL for manual testing", () => {
            testTypes.add(TestType.web);
            manual = true;
        })
        .strict().argv;

    // If spec specified and prefix is default, use the spec file to locate the package
    let packageLocation = args.prefix;
    if (packageLocation === "." && args.spec) {
        const firstSpec = Array.isArray(args.spec) ? args.spec[0] : args.spec;
        packageLocation = firstSpec;
    }

    const builder = new ProjectBuilder();
    const pkg = new Package({ path: packageLocation });

    // If the location is a workspace, test all packages with test
    if (pkg.isWorkspace) {
        const graph = await Graph.load(pkg);
        await graph.build(builder, false);

        if (args.clear) {
            clear();
        }

        for (const node of graph.nodes) {
            if (!node.pkg.hasTests || node.pkg.json.matter?.test === false) {
                continue;
            }

            await test(node.pkg, true);
        }
    } else {
        const graph = await Graph.forProject(pkg.path);
        if (graph) {
            await graph.build(builder, false);
        } else {
            await builder.build(new Project(pkg));
        }

        if (args.clear) {
            clear();
        }

        await test(pkg, false);
    }

    await chip.close();

    async function test(pkg: Package, detectWeb: boolean) {
        process.chdir(pkg.path);

        if (ls) {
            const progress = pkg.start("Inspecting");
            const runner = new TestRunner(pkg, progress, args);
            inspect(await defaultDescriptor(runner));
            progress.shutdown();
            return;
        }

        // If no test types are specified explicitly, run all enabled types
        const thisTestTypes = new Set(testTypes);
        if (!thisTestTypes.size) {
            if (pkg.supportsEsm) {
                thisTestTypes.add(TestType.esm);
            }
            if (pkg.supportsCjs) {
                thisTestTypes.add(TestType.cjs);
            }
            if (args.web && (!detectWeb || supportsWebTests(pkg))) {
                thisTestTypes.add(TestType.web);
            }
        }

        const progress = pkg.start("Testing");
        const runner = new TestRunner(pkg, progress, args);

        if (thisTestTypes.has(TestType.esm)) {
            await runner.runNode("esm");
        }

        if (thisTestTypes.has(TestType.cjs)) {
            await runner.runNode("cjs");
        }

        if (thisTestTypes.has(TestType.web)) {
            await runner.runWeb(manual);
        }

        progress.shutdown();

        if (args.forceExit) {
            process.exit(0);
        }
    }
}

function supportsWebTests(pkg: Package) {
    const testScript = pkg.json?.scripts?.test;
    if (typeof testScript !== "string") {
        return false;
    }
    return testScript.split(" ").includes("-w");
}
