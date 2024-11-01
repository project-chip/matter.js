/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { readdirSync, readFileSync, statSync } from "fs";
import { GLOBSTAR, Minimatch, ParseReturnFiltered } from "minimatch";
import { resolve } from "path";
import { ignoreErrorSync } from "./errors.js";

function isNotFoundError(e: unknown) {
    return typeof e === "object" && e !== null && "code" in e && (e.code === "ENOENT" || e.code === "ENOTDIR");
}

export function maybeStatSync(path: string) {
    try {
        return statSync(path);
    } catch (e) {
        if (isNotFoundError(e)) {
            return;
        }
        throw e;
    }
}

export function maybeReadJsonSync(path: string) {
    try {
        return JSON.parse(readFileSync(path, "utf-8"));
    } catch (e) {
        if (isNotFoundError(e)) {
            return;
        }
        if (e instanceof SyntaxError) {
            e.message = `Error parsing ${path}: ${e.message}`;
            throw e;
        }
        throw e;
    }
}

export function maybeReaddirSync(path: string) {
    try {
        return readdirSync(path);
    } catch (e) {
        if (isNotFoundError(e)) {
            return;
        }
    }
}

export class GlobError extends Error {}

export function globSync(pattern: string | string[]) {
    if (typeof pattern === "string") {
        return [...globOneSync(pattern)];
    }

    const result = Array<string>();
    for (const p of pattern) {
        result.push(...globOneSync(p));
    }

    return result;
}

function globOneSync(pattern: string) {
    // Parse the glob
    const mm = new Minimatch(pattern.replace(/\\/g, "/"), {});
    const results = new Set<string>();
    for (const part of mm.set) {
        for (const path of globOnePartSync(mm, part)) {
            results.add(path);
        }
    }
    return results;
}

function globOnePartSync(mm: Minimatch, segments: ParseReturnFiltered[]) {
    // Find the starting path
    let rootPath = "";
    let didOne = false;
    while (typeof segments[0] === "string") {
        if (didOne) {
            rootPath += "/";
        } else {
            didOne = true;
        }
        rootPath += segments.shift() as string;
    }

    // If we are out of segments, this is not a glob.  Just check for presence
    if (!segments.length) {
        const stat = maybeStatSync(rootPath);

        if (stat?.[rootPath.endsWith("/") ? "isDirectory" : "isFile"]()) {
            return [rootPath];
        }

        return [];
    }

    // Walk filesystem and apply glob
    const results = new Set<string>();

    function match(path: string, filter: ParseReturnFiltered[]) {
        // If the filter is empty then match current path
        if (!filter.length) {
            results.add(path);
            return;
        }

        // If filter starts without magic then just stat that one path
        if (typeof filter[0] === "string") {
            const subpath = resolve(path, filter[0]);
            if (maybeStatSync(resolve(path, filter[0]))) {
                match(subpath, filter.slice(1));
                return;
            }
        }

        // If filter is just GLOBSTAR then all paths match but search continues
        if (filter.length === 1 && filter[0] === GLOBSTAR) {
            results.add(path);
        }

        // Filter starts with magic so load directory entries to match
        const subnames = maybeReaddirSync(path);
        if (!subnames) {
            return;
        }

        // Test each directory entry
        for (const subname of subnames) {
            const subpath = resolve(path, subname);

            // Anything but GLOBSTAR is 1:1 subname/segment match
            if (segments[0] !== GLOBSTAR) {
                if (mm.matchOne([subname], segments, true)) {
                    match(subpath, segments.slice(1));
                }
                continue;
            }

            // GLOBSTAR matches nothing so test second segment
            if (segments.length > 1) {
                if (mm.matchOne([subname], segments.slice(1), true)) {
                    match(subpath, segments.slice(2));
                }
            }

            // GLOBSTAR matches everything
            match(subpath, segments);
        }
    }

    match(rootPath, segments);

    return results;
}

export function isDirectory(path: string) {
    return !!ignoreErrorSync("ENOENT", () => statSync(path).isDirectory());
}

export function isFile(path: string) {
    return !!ignoreErrorSync("ENOENT", () => statSync(path).isFile());
}
