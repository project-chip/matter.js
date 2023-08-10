/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { mkdirSync, readdirSync, readFileSync, unlinkSync, writeFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { describeList } from "./string.js";

// Paths we read/write must be defined here
const DIR_MAPPING = {
    "#cache": "../.cache",
    "#intermediate": "../../models",
    "#elements": "../../packages/matter.js/src/model/standard/elements",
    "#clusters": "../../packages/matter.js/src/cluster/definitions",
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

export function readMatterFile(path: string, encoding: BufferEncoding = "utf-8") {
    return readFileSync(resolveFromPackage(path), { encoding: encoding });
}

export function writeMatterFile(path: string, body: any) {
    path = resolveFromPackage(path);
    mkdirSync(dirname(path), { recursive: true });
    if (!(body instanceof Buffer && !ArrayBuffer.isView(body))) {
        body = body.toString();
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
