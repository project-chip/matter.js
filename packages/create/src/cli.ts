/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { argv, exit, stderr, stdout } from "process";
import { bold } from "./formatting.js";
import { bigWelcome, error, notice } from "./messages.js";
import { NewProject, ProjectError, TemplateNotFoundError } from "./new-project.js";
import { DEFAULT_TEMPLATE, usage } from "./usage.js";

const PATH_ARG = "--prefix=";

const args = argv.slice(2);

let path = ".";
const pathPos = args.findIndex(arg => arg.startsWith(PATH_ARG));
if (pathPos !== -1) {
    path = args[pathPos].slice(PATH_ARG.length);
    args.splice(pathPos, 1);
}

const noBuildPos = args.findIndex(arg => arg === "--no-build");
const doBuild = noBuildPos === -1;
if (!doBuild) {
    args.splice(noBuildPos, 1);
}

stdout.write("\n");

const option = args[0] ?? DEFAULT_TEMPLATE;

if (option === "help" || option === "--help") {
    await usage();
    exit(0);
}

if (option.startsWith("-")) {
    error(`Invalid argument ${bold(option)}`);
    await usage();
    exit(0);
}

if (args.length > 1) {
    error(`Unexpected argument ${args[1]}`);
    await usage();
    exit(1);
}

await init(option);

async function init(templateName: string) {
    let project;
    try {
        project = await NewProject(templateName, path);
    } catch (e) {
        if (e instanceof TemplateNotFoundError) {
            error(`Invalid template ${bold(templateName)}`);
            await usage();
            exit(1);
        }

        throw e;
    }

    bigWelcome();
    notice(`Creating project from ${bold(project.template.name)} template...`);

    try {
        await project.create();
    } catch (e) {
        if (e instanceof ProjectError) {
            error(e);
            exit(1);
        }
        throw e;
    }

    if (doBuild) {
        notice(`Initializing project...`);

        try {
            project.build();
        } catch (e) {
            stderr.write("\n");
            error("Error building project:", e);

            stdout.write(
                `We couldn't build your new project, but you may be able to using ${bold("npm install")}.\n\n`,
            );
            exit(1);
        }
    }

    const where = project.dest !== "." && project.dest !== process.cwd() ? ` in ${bold(project.dest)}` : "";

    notice(`${bold("Success!")} Run your new app using ${bold("npm run app")}${where}.`);
}
