/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Package, Progress } from "#tools";
import colors from "ansi-colors";
import debug from "debug";
import { relative } from "path";
import { chip } from "./chip/chip.js";
import { FailureDetail } from "./failure-detail.js";
import { testNodejs } from "./nodejs.js";
import { TestOptions } from "./options.js";
import { ProgressReporter, Reporter } from "./reporter.js";
import { listSupportFiles } from "./util/files.js";
import { testWeb } from "./web.js";

export class TestRunner {
    readonly reporter: Reporter;
    private spec = Array<string>();

    constructor(
        readonly pkg: Package,
        readonly progress: Progress,
        readonly options: TestOptions,
    ) {
        chip.runner = this;

        this.reporter = new (class extends ProgressReporter {
            constructor() {
                super(progress);
            }
            override failRun(detail: FailureDetail) {
                process.stdout.write("\n");
                FailureDetail.dump(detail);
                process.exit(1);
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
        await this.run(this.progress, () => testNodejs(this, format));
    }

    async runWeb(manual = false) {
        await this.run(this.progress, () => testWeb(this, manual));
    }

    async loadFiles(format: "esm" | "cjs") {
        const tests = [];
        for (let spec of this.spec) {
            spec = spec.replace(/\.ts$/, ".js");
            spec = relative(this.pkg.path, spec);
            if (!spec.startsWith(".") && !spec.startsWith("build/") && !spec.startsWith("dist/")) {
                spec = `build/${format}/${spec}`;
            }

            tests.push(...(await this.pkg.glob(spec)));
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

function fatal(message: string) {
    process.stderr.write(colors.redBright(`\n${message}\n\n`));
    process.exit(1);
}
