/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { mkdir, writeFile } from "fs/promises";
import Mocha from "mocha";
import { relative } from "path";
import { adaptReporter, generalSetup } from "./mocha.js";
import { TestOptions } from "./options.js";
import type { TestRunner } from "./runner.js";

// Load globals so settings get applied
import "./global-definitions.js";

export async function testNode(runner: TestRunner, format: "cjs" | "esm") {
    // Grr Mocha (as of 10.2.0) classifies certain unhandled rejections as "mocha".  For others, it uninstalls its
    // unhandled rejection handler and re-emits the "unhandledRejection" event.  But since it already handled the event,
    // Node knows nothing about this and the event disappears silently.
    //
    // So we must add our own unhandledRejection handler, but only process exceptions if Mocha's handler is not
    // installed, because the code that Mocha uses to determine if an error is a "mocha" error is not exported.
    process.on("unhandledRejection", e => {
        if (process.listenerCount("unhandledRejection") === 1) {
            let message: string, stack: string | undefined;
            if (e instanceof Error) {
                ({ message, stack } = e);
            } else {
                message = `${e}`;
            }
            runner.reporter.failRun(`Unhandled rejection (ignored by Mocha): ${message}`, stack);
        }
    });

    generalSetup(Mocha);

    const mocha = new Mocha({
        inlineDiffs: true,
        reporter: adaptReporter(Mocha, format.toUpperCase(), runner.reporter),
    });

    TestOptions.apply(mocha, runner.options);

    const files = runner.loadFiles(format);
    files.forEach(path => {
        path = relative(process.cwd(), path);
        if (path[0] !== ".") {
            path = `./${path}`;
        }
        mocha.addFile(path);
    });

    await mocha.loadFilesAsync();

    const profiler = new Profiler();
    if (runner.options.profile) {
        await profiler.start();
    }

    await new Promise<Mocha.Runner>(resolve => {
        const runner = mocha.run(() => resolve(runner));
    });

    if (runner.options.profile) {
        await profiler.stop(runner.pkg.resolve("build/profiles"));
    }
}

// We use string concatenation to prevent TS from trying to find profiler
// library types.  It doesn't build on all platforms we support and doesn't
// provide type declarations when it doesn't build
//
// This interface acts as a replacement for proper types
export interface Profilerish {
    setGenerateType(value: number): void;
    startProfiling(): void;
    stopProfiling(): {
        export(callback: (error: any, result: string) => any): void;
    };
}

// v8-profiler-next doesn't manage switching node versions well.  Load
// dynamically so it doesn't interfere if it's not built and we're not
// profiling
class Profiler {
    #profiler?: Profilerish;

    async start() {
        this.#profiler = (await import("" + "v8-profiler-next")).default as Profilerish;
        this.#profiler.setGenerateType(1);
        this.#profiler.startProfiling();
    }

    async stop(outputDir: string) {
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

        await mkdir(outputDir, { recursive: true });
        await writeFile(`${outputDir}/test-${new Date().toISOString().slice(0, 19)}.cpuprofile`, result);

        this.#profiler = undefined;
    }
}
