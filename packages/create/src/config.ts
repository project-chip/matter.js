/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { readFile } from "fs/promises";
import { resolve } from "path";

const CREATE_DIR = resolve(import.meta.dirname, "../..");
export const TEMPLATE_DIR = resolve(CREATE_DIR, "dist/templates");

export interface Template {
    name: string;
    description: string;
    entrypoint: string;
}

export interface Config {
    matterJsVersion: string;
    typescriptVersion: string;
    templates: Template[];
}

let config: Config | undefined;

export async function Config() {
    if (!config) {
        config = JSON.parse(await readFile(resolve(TEMPLATE_DIR, "index.json"), "utf-8")) as Config;
    }

    const packageJson = JSON.parse(await readFile(resolve(CREATE_DIR, "package.json"), "utf-8")) as { version: string };
    config.matterJsVersion = `^${packageJson.version}`;

    return config;
}
