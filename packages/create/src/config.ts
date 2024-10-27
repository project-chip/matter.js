/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { readFile } from "fs/promises";
import { resolve } from "path";

export const TEMPLATE_DIR = resolve(import.meta.dirname, "../templates");

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

    return config;
}
