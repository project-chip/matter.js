/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project } from "@matter/tools";
import { cp, mkdir, readFile, writeFile } from "fs/promises";
import { basename, dirname } from "path";
import { Config, Template } from "./config.js";

/**
 * Install "templates" to dist so we can install without external dependencies.
 */
export async function before({ project }: Project.Context) {
    const examplesPkg = project.pkg.findPackage("@matter/examples");
    const createPkg = project.pkg.findPackage("@matter/create");

    await mkdir(createPkg.resolve("dist/templates"), { recursive: true });

    const readmes = await examplesPkg.glob("src/*/README.md");
    const templates = Array<Template>();
    for (const readme of readmes) {
        const name = basename(dirname(readme));
        const match = (await readFile(readme, "utf-8")).match(/^# (.*)/);
        if (!match) {
            continue;
        }

        const baseLength = examplesPkg.resolve(`src/${name}`).length + 1;
        const sources = await examplesPkg.glob(`src/${name}/**/*.ts`);
        let entrypoint;
        for (const file of sources) {
            const filename = file.slice(baseLength);
            if (!entrypoint && filename.indexOf("/") === -1) {
                entrypoint = filename;
            }
            await cp(file, createPkg.resolve("dist/templates/", name, filename));
        }

        if (!entrypoint) {
            continue;
        }

        templates.push({
            name,
            description: match[1],
            entrypoint,
        });
    }

    // We set the version after build so we don't know actual version.  Juse use placeholder.  We then replace with the
    // "create" package version on init
    const matterJsVersion = "latest";

    const typescriptVersion = project.pkg.findPackage("@matter/tools").json.dependencies.typescript;

    const config: Config = {
        matterJsVersion,
        typescriptVersion,
        templates,
    };

    await writeFile(createPkg.resolve("dist/templates/index.json"), JSON.stringify(config, undefined, 4));
}
