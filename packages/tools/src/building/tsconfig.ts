/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { relative, resolve } from "path";
import { Graph } from "./graph.js";

/**
 * Unfortunately typescript's "project references" are redundant with package.json dependencies.  We don't use them for
 * build but there are still some advantages to maintaining them so we just ensure they're in sync during workspace
 * builds.
 *
 * One discussion on the topic: https://github.com/microsoft/TypeScript/issues/25376
 */
export async function syncAllTsconfigs(graph: Graph) {
    const workspace = graph.nodes[0].pkg.workspace;
    const rootTsconfig = await workspace.readJson("tsconfig.json");

    const originalReferences = rootTsconfig.references;
    rootTsconfig.references = [];

    for (const node of graph.nodes) {
        await syncPackageTsconfigs(graph, node);
        rootTsconfig.references.push({ path: workspace.relative(node.pkg.path).replace(/\\/g, "/") });
    }

    if (referencesChanged(originalReferences, rootTsconfig.references)) {
        await workspace.writeJson("tsconfig.json", rootTsconfig);
    }
}

function referencesChanged(originalReferences: unknown, newReferences: unknown) {
    return JSON.stringify(originalReferences) !== JSON.stringify(newReferences);
}

export async function syncPackageTsconfigs(graph: Graph, node: Graph.Node) {
    await syncSubproject(node, "src");
    await syncSubproject(node, "test", node.pkg.resolve("src"), graph.get("@matter/tools").pkg.resolve("src"));
}

async function syncSubproject(node: Graph.Node, path: string, ...extraRefs: string[]) {
    path = node.pkg.resolve(path);

    const tsconfigPath = resolve(path, "tsconfig.json");
    if (!node.pkg.hasFile(tsconfigPath)) {
        return;
    }

    const tsconfig = await node.pkg.readJson(tsconfigPath);

    let refs = tsconfig.refs as undefined | { path: string }[];

    if (refs === undefined) {
        refs = [];
    }

    const deps = node.dependencies.map(dep => dep.pkg.resolve("src")).filter(p => !p.match(/packages\/tools/));

    const desired = [...new Set([...deps, ...extraRefs])];

    const newReferences = desired.map(ref => ({ path: relative(path, ref) }));

    if (referencesChanged(tsconfig.references, newReferences)) {
        tsconfig.references = newReferences;
        await node.pkg.writeJson(tsconfigPath, tsconfig);
    }
}
