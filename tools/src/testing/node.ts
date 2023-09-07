/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import Mocha from "mocha";
import { relative } from "path";
import { Reporter } from "./reporter.js";
import "./logging.js";
import { adaptReporter, applyOptions } from "./mocha.js";
import { TestOptions } from "./options.js";
import v8Profiler from "v8-profiler-next";
import { mkdir, writeFile } from "fs/promises";
import { Package } from "../util/package.js";

export async function testNode(format: "cjs" | "esm", files: string[], reporter: Reporter, options: TestOptions = {}) {
    const mocha = new Mocha({
        inlineDiffs: true,
        reporter: adaptReporter(Mocha, format.toUpperCase(), reporter)
    });

    applyOptions(mocha, options);

    files.forEach(path => {
        path = relative(process.cwd(), path);
        if (path[0] !== ".") {
            path = `./${path}`;
        }
        mocha.addFile(path);
    });

    await mocha.loadFilesAsync();

    if (options.profile) {
        startProfiling();
    }

    const runner = await new Promise<Mocha.Runner>((resolve) => {
        const runner = mocha.run(() => resolve(runner));
    });

    if (options.profile) {
        await stopProfiling();
    }

    return !runner.stats?.failures;
}

function startProfiling() {
    v8Profiler.setGenerateType(1);
    v8Profiler.startProfiling();
}

async function stopProfiling() {
    const profile = v8Profiler.stopProfiling();

    const result = await new Promise<string>((accept, reject) =>
        profile.export((error, result) => {
            if (error) {
                reject(error);
            } else if (!result) {
                reject(new Error("No profile error or result"))
            } else {
                accept(result);
            }
        })
    );

    await mkdir(Package.project.resolve("build/profiles"), { recursive: true });
    await writeFile(`build/profiles/test-${new Date().toISOString().slice(0, 19)}.cpuprofile`, result);
}
