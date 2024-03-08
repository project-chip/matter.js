/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import colors from "ansi-colors";
import debug from "debug";
import { glob } from "glob";
import { relative } from "path";
import { Package } from "../util/package.js";
import { Progress } from "../util/progress.js";
import { listSupportFiles } from "./files.js";
import { testNode } from "./node.js";
import { TestOptions } from "./options.js";
import { ProgressReporter, Reporter } from "./reporter.js";
import { testWeb } from "./web.js";

export class TestRunner {
    readonly reporter: Reporter;
    private spec = Array<string>();

    constructor(
        readonly pkg: Package,
        readonly progress: Progress,
        readonly options: TestOptions,
    ) {
        this.reporter = new (class extends ProgressReporter {
            constructor() {
                super(progress);
            }
            override failRun(message: string, stack?: string) {
                fatal(message, stack);
            }
        })();

        if (options.spec === undefined) {
            this.spec = ["test/**/*Test.ts"];
        } else if (Array.isArray(options.spec)) {
            this.spec = options.spec;
        } else {
            this.spec = [options.spec];
        }

        if (options.debug) {
            debug.enable("mocha:*");
        }
    }

    async runNode(format: "esm" | "cjs" = "esm") {
        await this.run(this.progress, () => testNode(this, format));
    }

    async runWeb(manual = false) {
        await this.run(this.progress, () => testWeb(this, manual));
    }

    loadFiles(format: "esm" | "cjs") {
        const tests = [];
        for (let spec of this.spec) {
            spec = spec.replace(/\.ts$/, ".js");
            spec = relative(this.pkg.path, spec);
            if (!spec.startsWith(".") && !spec.startsWith("build/") && !spec.startsWith("dist/")) {
                spec = `build/${format}/${spec}`;
            }
            spec = this.pkg.resolve(spec);

            // Glob only understands forward-slash as separator because reasons
            spec = spec.replace(/\\/g, "/");

            tests.push(...glob.sync(spec));
        }

        if (!tests.length) {
            fatal(`No files match ${this.spec.join(", ")}`);
        }

        return [...listSupportFiles(format), ...tests];
    }

    private async run(progress: Progress, runner: () => Promise<void>) {
        await runner();
        if (progress.status !== Progress.Status.Success) {
            fatal(`Test ${progress.status.toLowerCase()}, aborting`);
        }
    }
}

function fatal(message: string, stack?: string) {
    process.stderr.write(colors.redBright(`\n\n${message}\n\n`));
    if (stack) {
        stack = stack.replace(/^ {4}/gms, "");
        process.stderr.write(`${stack}\n\n`);
    }
    process.exit(1);
}
