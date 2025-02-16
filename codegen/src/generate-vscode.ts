/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Graph, Package } from "@matter/tools";
import { basename } from "node:path";

const LAUNCH_TEMPLATE = {
    version: "0.2.0",
    configurations: Array<LaunchConfig>(),

    inputs: [
        {
            id: "testFile",
            type: "command",
            command: "extension.commandvariable.transform",
            args: {
                text: "${file}",
                find: "/src/(.*)\\.([a-z]+)",
                replace: "/test/$1Test.$2",
            },
        },
    ],
};

const CONFIG_TEMPLATE = {
    type: "node",
    request: "launch",
    skipFiles: ["<node_internals>/**"],

    // Never gotten it to work without this as of VS Code 1.94.2
    console: "integratedTerminal",

    internalConsoleOptions: "neverOpen",

    // Doesn't seem to work as of VS Code 1.94.2 so we just set the runtimeArgs ourselves
    //sourceMaps: true,

    runtimeArgs: ["--enable-source-maps"],
    outFiles: ["${workspaceFolder}/**/dist/esm/**/*.js", "${workspaceFolder}/**/build/esm/**/*.js"],
    presentation: { clear: true },
};

export type LaunchOptions = {
    name: string;
    program: string;
    cwd?: string;
    args?: string[];
    runtimeArgs?: string[];
};

export type LaunchConfig = LaunchOptions & typeof CONFIG_TEMPLATE;

const launchJson = { ...LAUNCH_TEMPLATE };

// Generate launches that are not project specific
addTest({ name: "All tests" });
addTest({ name: "Test current file", args: ["--spec", "${input:testFile}", "--all-logs", "esm"] });
addRun({ name: "Run current file", args: ["${file}"] });

// Generate tool launchers
addRun({ name: "Run shell", cwd: Package.workspace.relative("packages/nodejs-shell"), args: ["dist/cjs/app.js"] });
addRun({ name: "Run CLI tool", cwd: Package.workspace.relative("packages/cli-tool"), args: ["bin/matter.js"] });

// Generate launches for each project that has tests
const graph = await Graph.load();
for (const node of graph.nodes) {
    if (node.pkg.hasTests) {
        const name = node.pkg.name;
        addTest({
            name: `Test ${name}`,
            cwd: Package.workspace.relative(node.pkg.path),
        });
    }
}

// Generate launches for each example
for (const example of await Package.workspace.glob("packages/examples/src/*/*.ts")) {
    const name = basename(example, ".ts");
    if (name === "main" || name.startsWith("example")) {
        continue;
    }
    addRun({
        name: `Run ${basename(example, ".ts")}`,
        args: [Package.workspace.relative(example)],
    });
}

// Generate launches for each code generator
for (const generator of await Package.workspace.glob("codegen/src/generate-*.ts")) {
    const config = {
        name: `Generate ${basename(generator, ".ts").replace(/^generate-/, "")}`,
        args: [Package.workspace.relative(generator)],
    };

    if (generator.endsWith("/generate-spec.ts")) {
        (config as Record<string, unknown>).env = { NODE_OPTIONS: "--max-old-space-size=6144" };
    }

    addRun(config);
}

await Package.workspace.writeJson(".vscode/launch.json", launchJson);

function add(launch: LaunchOptions) {
    if (launch.runtimeArgs) {
        launch = { ...launch, runtimeArgs: [...CONFIG_TEMPLATE.runtimeArgs, ...launch.runtimeArgs] };
    }

    const config = {
        ...CONFIG_TEMPLATE,
        ...launch,
        program: `\${workspaceFolder}/${launch.program}`,
    };

    if (config.cwd) {
        config.cwd = `\${workspaceFolder}/${launch.cwd}`;
    }

    launchJson.configurations.push(config);
}

function injectClear<T extends { args?: string[] }>(options: T): T {
    options.args = ["--clear", ...(options.args ?? [])];
    return options;
}

function addTest(options: Partial<LaunchOptions> & { name: string }) {
    injectClear(options);

    add({
        ...options,
        program: "node_modules/.bin/matter-test",
    });
}

function addRun(options: Partial<LaunchOptions> & { name: string; args: string[] }) {
    injectClear(options);

    const result: LaunchOptions = {
        ...options,
        program: "node_modules/.bin/matter-run",
    };

    delete (result as any).file;

    add(result);
}
