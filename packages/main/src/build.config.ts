/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { generateSubmoduleProxy, TsFile } from "@matter.js/codegen";
import { Graph, Project } from "@matter.js/tools";

/**
 * Generate proxies to re-export key submodules of dependencies.
 */
export async function before({ project, progress }: Project.Context) {
    await progress.run(`Generate ${progress.emphasize(`submodule proxies`)}`, async () => {
        const graph = await Graph.load(project.pkg);

        const types = graph.get("@matter.js/types");
        const node = graph.get("@matter.js/node");

        // Cluster definitions
        const clusters = await types.pkg.glob("src/clusters/*.ts");
        generateSubmoduleProxy(
            "@matter.js/types/clusters",
            clusters,
            project.pkg.resolve(`build/src/clusters`),
            generator,
        );

        // Behaviors
        const behaviors = await node.pkg.glob("src/behaviors/*");
        generateSubmoduleProxy(
            "@matter.js/node/behaviors",
            behaviors,
            project.pkg.resolve(`build/src/behaviors`),
            generator,
        );

        // Device endpoint types
        const devices = await node.pkg.glob("src/devices/*");
        generateSubmoduleProxy("@matter.js/node/devices", devices, project.pkg.resolve(`build/src/devices`), generator);

        // System endpoint types
        const endpoints = await node.pkg.glob("src/endpoints/*");
        generateSubmoduleProxy(
            "@matter.js/node/endpoints",
            endpoints,
            project.pkg.resolve(`build/src/endpoints`),
            generator,
        );

        // Ensure each proxy bootstraps the platform
        function generator(file: TsFile) {
            file.addImport("@matter.js/main/platform");
        }
    });
}
