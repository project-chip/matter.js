/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import colors from "ansi-colors";
import { existsSync } from "fs";
import { glob } from "glob";
import { relative } from "path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { Project } from "../building/build.js";
import { Package } from "../util/package.js";
import { Progress } from "../util/progress.js";
import { testNode } from "./node.js";
import { ProgressReporter } from "./reporter.js";
import { testWeb } from "./web.js";

enum TestType {
    esm = "esm",
    cjs = "cjs",
    web = "web",
}

export async function main(argv = process.argv) {
    const testTypes = new Set<TestType>();

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
            default: "test/**/*Test.ts",
        })
        .option("fgrep", { alias: "f", type: "string", describe: "Only run tests matching this string" })
        .option("grep", { alias: "g", type: "string", describe: "Only run tests matching this regexp" })
        .option("invert", { alias: "i", type: "boolean", describe: "Inverts --grep and --fgrep matches" })
        .option("profile", { type: "boolean", describe: "Write profiling data to build/profiles (node only)" })
        .option("all-logs", { type: "boolean", describe: "Emit log messages in real time" })
        .option("force-exit", { type: "boolean", describe: "Force Node to exit after tests complete" })
        .command("*", "run all supported test types")
        .command("esm", "run tests on node (ES6 modules)", () => testTypes.add(TestType.esm))
        .command("cjs", "run tests on node (CommonJS modules)", () => testTypes.add(TestType.cjs))
        .command("web", "run tests in web browser", () => testTypes.add(TestType.web))
        .command("manual", "start test server and print URL for manual testing", () => {
            testTypes.add(TestType.web);
            manual = true;
        })
        .strict().argv;

    const project = new Project(args.prefix);

    // If no test types are specified explicitly, run all enabled types
    if (!testTypes.size) {
        if (project.pkg.esm) {
            testTypes.add(TestType.esm);
        }
        if (project.pkg.cjs) {
            testTypes.add(TestType.cjs);
        }
        if (args.web) {
            testTypes.add(TestType.web);
        }
    }

    let esmBuilt = false;
    async function buildEsm() {
        if (esmBuilt) {
            return;
        }

        await project.buildSource("esm");
        await project.buildTests("esm");

        esmBuilt = true;
    }

    const progress = project.pkg.start("Testing");
    const reporter = new ProgressReporter(progress);

    const spec = Array.isArray(args.spec) ? args.spec : [args.spec];

    if (testTypes.has(TestType.esm)) {
        await buildEsm();
        await runTests(progress, () => testNode("esm", loadFiles("esm", spec), reporter, args));
    }

    if (testTypes.has(TestType.cjs)) {
        await project.buildSource("cjs");
        await project.buildTests("cjs");
        await runTests(progress, () => testNode("cjs", loadFiles("cjs", spec), reporter, args));
    }

    if (testTypes.has(TestType.web)) {
        await buildEsm();
        await runTests(progress, () => testWeb(manual, loadFiles("esm", spec), reporter, args));
    }

    progress.shutdown();

    if (args.forceExit) {
        process.exit(0);
    }
}

function fatal(message: string) {
    process.stderr.write(colors.bgRedBright.whiteBright(`${message}\n`));
    process.exit(1);
}

async function runTests(progress: Progress, runner: () => Promise<void>) {
    await runner();
    if (progress.status !== Progress.Status.Success) {
        fatal(`Test ${progress.status.toLowerCase()}, aborting`);
    }
}

function loadFiles(format: "esm" | "cjs", specs: string[]) {
    const files = Array<string>();
    files.push(Package.tools.resolve(`dist/esm/testing/global-definitions.js`));

    const config = Package.project.resolve(`build/${format}/test/test.config.js`);
    if (existsSync(config)) {
        files.push(config);
    }

    for (let spec of specs) {
        spec = spec.replace(/\.ts$/, ".js");
        spec = relative(Package.project.path, spec);
        if (!spec.startsWith(".") && !spec.startsWith("build/") && !spec.startsWith("dist/")) {
            spec = `build/${format}/${spec}`;
        }
        files.push(...glob.sync(Package.project.resolve(spec)));
    }

    if (!files.length) {
        fatal(`No files match ${specs.join(", ")}`);
    }

    return files;
}
