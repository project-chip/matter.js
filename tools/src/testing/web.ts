/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import http from "http";
import { chromium, ConsoleMessage } from "playwright";
import { AddressInfo } from "net";
import { ConsoleProxyReporter, Reporter } from "./reporter.js";
import { relative } from "path";
import { build } from "esbuild";
import { stat } from "fs/promises";
import { Package } from "../util/package.js";
import { ignoreError } from "../util/errors.js";
import { TestOptions } from "./options.js";

const libraries = [
    "chai",
    "chai-as-promised",
    "elliptic",
    "bn.js",
    "ansi-colors"
];

export async function testWeb(manual: boolean, files: string[], reporter: Reporter, options: TestOptions = {}) {
    await buildLibraries();

    const server = await new Promise<http.Server>((resolve, reject) => {
        try {
            const server = express()
                .use(express.static(Package.workspace.resolve("node_modules")))
                .use(express.static(Package.workspace.path))
                .get("/", (_, res) => res.send(buildIndex(files)))
                .listen(0, "localhost", () => resolve(server));
        } catch (e) {
            reject(e);
        }
    });

    const addr = server.address() as AddressInfo;
    const url = `http://${addr.address}:${addr.port}/`;

    await new Promise<void>((resolve, reject) => {
        server.on("error", reject);
        server.on("close", resolve);

        if (manual) {
            console.log(`Run tests manually at ${url}`);
        } else {
            testInBrowser(url, reporter, options).then(() => {
                server.close(() => {
                    // Hmm the close event above doesn't fire
                    resolve();
                });
            });
        }
    });

    return true;
}

async function testInBrowser(url: string, reporter: Reporter, options: TestOptions) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    page.on("console", consoleHandler(reporter));
    page.on("pageerror", error => { throw error });
    await page.goto(url);
    await page.evaluate((options) => (globalThis as any).MatterTest.auto(options), options);
    await browser.close();
}

function consoleHandler(reporter: Reporter) {
    return (message: ConsoleMessage) => {
        const type = message.type();
        switch (type) {
            case "log":
            case "debug":
            case "info":
            case "error":
            case "warn":
            case "trace":
                break;

            default:
                return;
        }

        const text = message.text();

        // If it's not an encoded reporter update, write to normal console
        if (type !== "log" || !text.startsWith(ConsoleProxyReporter.FLAG)) {
            console[type](text);
            return;
        }

        // Invoke reporter
        const args: string[] = JSON.parse(text.slice(ConsoleProxyReporter.FLAG.length));
        const method = (reporter as any)[args[0]];
        if (typeof method !== "function") {
            throw new Error(`Invalid encoded reporter update method ${args[0]}`);
        }
        method.call(reporter, ...args.slice(1));
    }
}

function buildIndex(files: string[]) {
    const importMap = JSON.stringify({
        imports: Object.fromEntries(
            libraries.map(name => {
                let path = `/tools/build/lib/${name}`;
                if (!path.endsWith(".js")) {
                    path = `${path}.js`;
                }
                return [ name, path ];
            })
        )
    });

    files = [
        "/tools/dist/esm/testing/logging.js",
        ...files.map(file => `/${relative(Package.workspace.path, file)}`)
    ]
    const imports = files.map(
        file => `import ${JSON.stringify(file)}`
    ).join("\n    ");

    return `<!DOCTYPE html>
<html>
<head>
    <title>Matter.js Web Testing</title>
    <link rel="stylesheet" href="mocha/mocha.css">
</head>
<body>
    <div id="mocha"><h1><a href="javascript:MatterTest.start()">run tests</a></h1></div>
    <script src="mocha/mocha.js"></script>
    <script type="importmap">
    ${importMap}
    </script>
    <script type="module">
    ${imports}
    </script>
</body>
</html>`
}

async function buildLibraries() {
    for (const name of libraries) {
        let path = `build/lib/${name}`;
        if (!path.endsWith(".js")) {
            path = `${path}.js`;
        }
        const outfile = Package.tools.resolve(path);

        if ((await ignoreError("ENOENT", async () => stat(outfile)))?.isFile()) {
            continue;
        }

        await build({
            entryPoints: [ Package.workspace.resolve(`node_modules/${name}`) ],
            bundle: true,
            format: "esm",
            outfile
        });
    }
}
