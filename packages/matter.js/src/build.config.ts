/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { camelize } from "#general";
import { generateSubmoduleProxy } from "@matter.js/codegen";
import { Graph, Project } from "@matter.js/tools";

/**
 * Generate proxies to re-export key submodules of dependencies.
 */
export async function before({ project, progress }: Project.Context) {
    await progress.run(`Generate ${progress.emphasize(`compat proxies`)}`, async () => {
        const graph = await Graph.load(project.pkg);

        const node = graph.get("@matter.js/node");

        // Behaviors
        const behaviors = await node.pkg.glob("src/behaviors/*");
        generateSubmoduleProxy(
            "@matter.js/node/behaviors",
            behaviors,
            project.pkg.resolve(`build/src/compat/behaviors`),
        );

        // Tags
        const tags = await node.pkg.glob("src/tags/*");
        generateSubmoduleProxy(
            "@matter.js/node/tags",
            tags,
            project.pkg.resolve(`build/src/compat/tags`),
            (file, submodule) => {
                file.addReexport(`@matter.js/node`, submodule);
                return false;
            },
        );

        // Device endpoint types
        const devices = await createEndpointMap(node, "src/devices/*", "Device");
        generateSubmoduleProxy("@matter.js/node/devices", devices, project.pkg.resolve(`build/src/compat/devices`));

        // System endpoint types
        const endpoints = await createEndpointMap(node, "src/endpoints/*", "Endpoint");
        generateSubmoduleProxy(
            "@matter.js/node/endpoints",
            endpoints,
            project.pkg.resolve(`build/src/compat/endpoints`),
        );
    });
}

// Old naming convention was "OnOffDevice" rather than "on-off"; generate this mapping
async function createEndpointMap(node: Graph.Node, path: string, suffix: string) {
    const files = await node.pkg.glob(path);
    return Object.fromEntries(
        files.map(name => {
            name = name.replace(/\.ts$/, "").replace(/^.*\//, "");
            return [camelize(name, true) + suffix, name];
        }),
    );
}
