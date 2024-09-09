/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Package } from "@project-chip/matter.js-tools";
import { createHash } from "crypto";
import { mkdirSync, readdirSync, readFileSync, unlinkSync, writeFileSync } from "fs";
import { dirname, relative as nodeRelative, resolve } from "path";
import { fileURLToPath } from "url";
import { describeList } from "./string.js";

// Paths we read/write must be defined here
const DIR_MAPPING = {
    "#cache": Package.workspace.resolve("codegen/.cache"),
    "#intermediate": Package.workspace.resolve("models/src"),
    "#": Package.workspace.resolve("packages/matter.js/src"),
    "#model": Package.workspace.resolve("packages/model/src"),
    "#elements": Package.workspace.resolve("packages/model/src/standard/elements"),
    "#clusters": Package.workspace.resolve("packages/matter.js/src/cluster/definitions"),
    "#globals": Package.workspace.resolve("packages/matter.js/src/cluster/globals"),
    "#endpoints": Package.workspace.resolve("packages/matter.js/src/endpoint/definitions"),
    "#behaviors": Package.workspace.resolve("packages/matter.js/src/behavior/definitions"),
} as { [dirname: string]: string | undefined };

function resolveFromPackage(path: string) {
    const slashAt = path.indexOf("/");
    let dirId, file;
    if (slashAt == -1) {
        dirId = path;
        file = undefined;
    } else {
        dirId = path.substring(0, slashAt);
        file = path.substring(slashAt + 1);
    }
    const dir = DIR_MAPPING[dirId];
    if (!dir) {
        throw new Error(`Matter paths must be prefixed with ${describeList("or", ...Object.keys(DIR_MAPPING))}`);
    }
    if (file) {
        path = `${dir}/${file}`;
    } else {
        path = dir;
    }

    return resolve(dirname(fileURLToPath(import.meta.url)), path);
}

export function relative(from: string, to: string) {
    return nodeRelative(resolveFromPackage(from), resolveFromPackage(to));
}

export function readMatterFile(path: string, encoding: BufferEncoding = "utf-8") {
    return readFileSync(resolveFromPackage(path), { encoding: encoding });
}

export function writeMatterFile(path: string, body: any) {
    path = resolveFromPackage(path);
    mkdirSync(dirname(path), { recursive: true });

    let currentHash: string | undefined;

    try {
        currentHash = createHash("md5").update(readFileSync(path)).digest("hex");
    } catch (e) {
        if ((e as { code?: string }).code !== "ENOENT") {
            throw e;
        }
    }

    if (!(body instanceof Buffer && !ArrayBuffer.isView(body))) {
        body = body.toString();
    }

    // Compilation is slowest part of our toolchain so it's worth the expense to compare and old and new files so we can
    // avoid updating timestamps
    const newHash = createHash("md5").update(body).digest("hex");
    if (currentHash === newHash) {
        return;
    }

    writeFileSync(path, body);
}

export function clean(target: string, suffix = "") {
    const path = resolveFromPackage(target);
    try {
        readdirSync(path).forEach(f => {
            if (f.endsWith(`${suffix}.ts`)) {
                unlinkSync(resolve(path, f));
            }
        });
    } catch (e) {
        if ((e as { code?: string }).code === "ENOENT") {
            return;
        }
        throw e;
    }
}

export async function readFileWithCache(name: string, generator: (name: string) => Promise<string>) {
    name = `#cache/${name}`;
    try {
        return readMatterFile(name);
    } catch (e) {
        // Cache unavailable
    }

    const text = await generator(name);
    writeMatterFile(name, text);

    return text;
}
