/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { readFile, writeFile } from "fs/promises";
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
    for (const node of graph.nodes) {
        await syncPackageTsconfigs(graph, node);
    }
}

export async function syncPackageTsconfigs(graph: Graph, node: Graph.Node) {
    await syncSubproject(node, "src");
    await syncSubproject(node, "test", node.pkg.resolve("src"), graph.get("@matter.js/tools").pkg.resolve("src"));
}

async function syncSubproject(node: Graph.Node, path: string, ...extraRefs: string[]) {
    path = node.pkg.resolve(path);

    const tsconfigPath = resolve(path, "tsconfig.json");
    if (!node.pkg.hasFile(tsconfigPath)) {
        return;
    }

    let tsconfig;
    try {
        tsconfig = JSON.parse(await readFile(tsconfigPath, "utf-8"));
    } catch (e) {
        (e as Error).message = `Error loading ${tsconfigPath}: ${(e as Error).message}`;
        throw e;
    }

    let refs = tsconfig.refs as undefined | { path: string }[];
    let changed = false;

    if (refs === undefined) {
        refs = [];
    }

    const existing = refs.map(ref => resolve(path, ref.path));

    const deps = node.dependencies.map(dep => dep.pkg.resolve("src")).filter(p => !p.match(/packages\/tools/));

    const desired = [...new Set([...deps, ...extraRefs])];

    if (JSON.stringify(existing.sort()) !== JSON.stringify(desired.sort())) {
        changed = true;
        tsconfig.references = desired.map(ref => ({
            path: relative(path, ref),
        }));
    }

    if (changed) {
        await writeFile(tsconfigPath, JSON.stringify(tsconfig, undefined, 4));
    }
}
