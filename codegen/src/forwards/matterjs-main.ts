/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TsFile } from "#util/TsFile.js";
import { Graph } from "@matter.js/tools";
import { generateForwards } from "./generate-forwards.js";

/**
 * Generate proxies to re-export key submodules of dependencies.
 */
export async function generateMatterjsMainForwards() {
    const graph = await Graph.load();

    const pkg = graph.get("@matter.js/main").pkg;

    const types = graph.get("@matter.js/types");
    const node = graph.get("@matter.js/node");

    // Cluster definitions
    const clusters = await types.pkg.glob("src/clusters/*.ts");
    generateForwards("@matter.js/types/clusters", clusters, pkg.resolve(`src/forwards/clusters`), generator);

    // Behaviors
    const behaviors = await node.pkg.glob("src/behaviors/*");
    generateForwards("@matter.js/node/behaviors", behaviors, pkg.resolve(`src/forwards/behaviors`), generator);

    // Device endpoint types
    const devices = await node.pkg.glob("src/devices/*");
    generateForwards("@matter.js/node/devices", devices, pkg.resolve(`src/forwards/devices`), generator);

    // System endpoint types
    const endpoints = await node.pkg.glob("src/endpoints/*");
    generateForwards("@matter.js/node/endpoints", endpoints, pkg.resolve(`src/forwards/endpoints`), generator);

    // Ensure each proxy bootstraps the platform
    function generator(file: TsFile) {
        file.addImport("@matter.js/main/platform");
    }
}
