/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { execSync } from "child_process";
import { cp, mkdir, readdir, writeFile } from "fs/promises";
import { basename, resolve } from "path";
import { Config, Template, TEMPLATE_DIR } from "./config.js";

const PACKAGE_JSON = {
    dependencies: {} as Record<string, string>,
    devDependencies: {
        typescript: "*",
        "@types/node": "*",
    },
    name: "matter-app",
    version: "0.1.0",
    type: "module",
    scripts: {
        prepare: "tsc",
        build: "tsc",
        app: "node --enable-source-maps dist/index.js",
        test: 'echo "Error: no test specified" && exit 1',
        clean: "node -e 'fs.rmSync(\"dist\", { recursive: true, force: true })'",
    },
};

const TSCONFIG = {
    compilerOptions: {
        strict: true,
        target: "es2022",
        module: "node16",
        moduleResolution: "node16",
        noImplicitAny: true,
        noImplicitOverride: true,
        outDir: "./dist",
        skipLibCheck: true,
    },
    include: ["./src/**/*.ts"],
};

const VS_CODE_LAUNCH = {
    version: "0.2.0",
    configurations: [
        {
            type: "node",
            request: "launch",
            name: "Launch Program",
            skipFiles: ["<node_internals>/**"],
            program: "${workspaceFolder}/dist/SensorDeviceNode.js",

            // Never gotten it to work without this
            console: "integratedTerminal",

            // Doesn't seem to work
            //sourceMaps: true,

            env: {
                NODE_OPTIONS: "--enable-source-maps",
            },
            preLaunchTask: "tsc: build - tsconfig.json",
            outFiles: ["${workspaceFolder}/dist/**/*.js"],
        },
    ],
};

const GITIGNORE = "node_modules/\ndist/\n";

export class TemplateNotFoundError extends Error {}

export interface NewProject {
    template: Template;
    source: string;
    dest: string;

    create(): Promise<void>;
    build(): void;
}

export async function NewProject(name: string, dest: string): Promise<NewProject> {
    const template = (await Config()).templates.find(template => template.name === name);

    if (template === undefined) {
        throw new TemplateNotFoundError(`"${name}" is not a valid template name`);
    }

    return {
        template,
        source: resolve(TEMPLATE_DIR, template.name),
        dest,
        create,
        build,
    };
}

export class ProjectError extends Error {}

export async function create(this: NewProject) {
    try {
        await mkdir(this.dest, { recursive: true });
    } catch (e) {
        throw new ProjectError(`Could not create "${this.dest}": ${e}`);
    }

    const existingFiles = await readdir(this.dest);
    if (existingFiles.length) {
        throw new ProjectError(
            `Files exist in "${this.dest}". Please run in an empty directory or specify new directory with "--prefix=" option`,
        );
    }

    await createPackageJson(this);
    await createTsconfig(this);
    await createGitignore(this);
    await createVsCodeProject(this);
    await installSources(this);
}

async function createPackageJson(project: NewProject) {
    const pkg = PACKAGE_JSON;

    const config = await Config();

    const entrypoint = `dist/${project.template.entrypoint.replace(/\.ts$/, ".js")}`;
    pkg.scripts.app = `node --enable-source-maps ${entrypoint}`;

    pkg.dependencies = project.template.dependencies;
    pkg.devDependencies["typescript"] = config.typescriptVersion;
    pkg.devDependencies["@types/node"] = config.nodeTypesVersion;

    (pkg as any).description = project.template.description;

    let author, authorEmail;
    try {
        for (const line of execSync("git config --list", { encoding: "utf-8" }).split("\n")) {
            if (line.startsWith("user.name=")) {
                author = line.replace(/^[^=]=/, "");
            } else if (line.startsWith("user.email=")) {
                authorEmail = line.replace(/^[^=]=/, "");
            }
        }
    } catch (e) {
        // Non-fatal error if git isn't available; we just don't set the author
    }

    if (authorEmail) {
        if (author) {
            author = `${author} <${authorEmail}>`;
        } else {
            author = `<${authorEmail}>`;
        }
    }

    if (author) {
        (pkg as any).author = author;
    }

    await writeFile(resolve(project.dest, "package.json"), JSON.stringify(pkg, undefined, 4));
}

async function createTsconfig(project: NewProject) {
    await writeFile(resolve(project.dest, "tsconfig.json"), JSON.stringify(TSCONFIG, undefined, 4));
}

async function createGitignore(project: NewProject) {
    await writeFile(resolve(project.dest, ".gitignore"), GITIGNORE);
}

async function createVsCodeProject(project: NewProject) {
    const root = resolve(project.dest, ".vscode");
    await mkdir(root);
    await writeFile(resolve(root, "launch.json"), JSON.stringify(VS_CODE_LAUNCH, undefined, 4));
}

async function installSources(project: NewProject) {
    await cp(project.source, resolve(project.dest, "src"), {
        recursive: true,
        filter: source => basename(source).indexOf(".") === -1 || source.endsWith(".ts"),
    });
}

function build(this: NewProject) {
    execSync(`npm install --silent`, { stdio: "inherit", cwd: this.dest });
}
