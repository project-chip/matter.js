/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const CREATE_DIR = resolve(import.meta.dirname, "../..");
export const TEMPLATE_DIR = resolve(CREATE_DIR, "dist/templates");

export interface Template {
    name: string;
    dependencies: Record<string, string>;
    description: string;
    entrypoint: string;
    matterJsPackages?: string[];
}

export interface Config {
    typescriptVersion: string;
    nodeTypesVersion: string;
    templates: Template[];
}

let config: Config | undefined;

export async function Config() {
    if (!config) {
        config = JSON.parse(await readFile(resolve(TEMPLATE_DIR, "index.json"), "utf-8")) as Config;
    }

    const packageJson = JSON.parse(await readFile(resolve(CREATE_DIR, "package.json"), "utf-8")) as { version: string };
    if (packageJson.version !== "0.0.0-git") {
        for (const template of config.templates) {
            for (const name in template.dependencies) {
                if (name.startsWith("@matter/") || name.startsWith("@project-chip/")) {
                    template.dependencies[name] = packageJson.version;
                }
            }
        }
    }

    return config;
}
