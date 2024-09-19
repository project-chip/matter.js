/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { Package } from "../util/package.js";
import { Progress } from "../util/progress.js";
import { Versioner } from "./versioner.js";

export async function main(argv = process.argv) {
    const args = await yargs(hideBin(argv))
        .command("$0 [ver]", "Manipulate monorepo package versions.")
        .option("prefix", { alias: "p", default: ".", type: "string", describe: "specify monorepo directory" })
        .option("set", { alias: "s", type: "boolean", describe: "Sets the release version" })
        .option("apply", { alias: "a", type: "boolean", describe: "Sets package versions to the release version" })
        .option("tag", { alias: "t", type: "boolean", describe: "Adds git tag for release version" })
        .wrap(Math.min(process.stdout.columns, 80))
        .strict().argv;

    const version = args.ver as string | undefined;
    const pkg = new Package({ path: args.prefix });
    const versioner = new Versioner(pkg, version);

    const progress = new Progress();

    progress.startup(`Release ${versioner.version}`, versioner.pkg);
    if (args.set) {
        await progress.run(`Set version to ${progress.emphasize(versioner.version)}`, () => versioner.set());
    }

    if (args.apply) {
        await versioner.apply(progress);
    }

    if (args.tag) {
        await progress.run(`Tagging version ${progress.emphasize(versioner.version)}`, () => versioner.tag());
    }

    progress.shutdown();
}
