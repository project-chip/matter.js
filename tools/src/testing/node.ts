/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { mkdir, writeFile } from "fs/promises";
import Mocha from "mocha";
import { relative } from "path";
import { Package } from "../util/package.js";
import { adaptReporter, generalSetup } from "./mocha.js";
import { TestOptions } from "./options.js";
import { Reporter } from "./reporter.js";

// Load globals so settings get applied
import "./global-definitions.js";

export async function testNode(format: "cjs" | "esm", files: string[], reporter: Reporter, options: TestOptions = {}) {
    generalSetup(Mocha);

    const mocha = new Mocha({
        inlineDiffs: true,
        reporter: adaptReporter(Mocha, format.toUpperCase(), reporter),
    });

    TestOptions.apply(mocha, options);

    files.forEach(path => {
        path = relative(process.cwd(), path);
        if (path[0] !== ".") {
            path = `./${path}`;
        }
        mocha.addFile(path);
    });

    await mocha.loadFilesAsync();

    const profiler = new Profiler();
    if (options.profile) {
        await profiler.start();
    }

    await new Promise<Mocha.Runner>(resolve => {
        const runner = mocha.run(() => resolve(runner));
    });

    if (options.profile) {
        await profiler.stop();
    }
}

// v8-profiler-next doesn't manage switching node versions well.  Load
// dynamically so it doesn't interfere if it's not built and we're not
// profiling
class Profiler {
    #profiler?: typeof import("v8-profiler-next");

    async start() {
        this.#profiler = await import("v8-profiler-next");
        this.#profiler.setGenerateType(1);
        this.#profiler.startProfiling();
    }

    async stop() {
        if (!this.#profiler) {
            return;
        }

        const profile = this.#profiler.stopProfiling();

        const result = await new Promise<string>((accept, reject) =>
            profile.export((error, result) => {
                if (error) {
                    reject(error);
                } else if (!result) {
                    reject(new Error("No profile error or result"));
                } else {
                    accept(result);
                }
            }),
        );

        await mkdir(Package.project.resolve("build/profiles"), { recursive: true });
        await writeFile(`build/profiles/test-${new Date().toISOString().slice(0, 19)}.cpuprofile`, result);

        this.#profiler = undefined;
    }
}
