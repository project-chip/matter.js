/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import Mocha from "mocha";
import { relative } from "path";
import { Reporter } from "./reporter.js";
import "./logging.js";
import { adaptReporter } from "./mocha.js";

export async function testNode(format: "cjs" | "esm", files: string[], reporter: Reporter) {
    const mocha = new Mocha({
        inlineDiffs: true,
        reporter: adaptReporter(Mocha, format.toUpperCase(), reporter)
    });

    files.forEach(path => {
        path = relative(process.cwd(), path);
        if (path[0] !== ".") {
            path = `./${path}`;
        }
        mocha.addFile(path);
    });

    await mocha.loadFilesAsync();

    const runner = await new Promise<Mocha.Runner>((resolve) => {
        const runner = mocha.run(() => resolve(runner));
    });

    return !runner.stats?.failures;
}
