/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// This script scrapes specification information from a HTML version of the
// Matter specification.  Override the default location with
// MATTER_SPECIFICATION_PATH environment variable.
//
// I used Adobe Acrobat Pro v23.001.20174.0 to generate the HTML, choosing
// the option to save individual HTML based on headers.  We will probably parse
// output of the current Acrobat version.  Other means of HTML generation will
// likely require this code to be reworked.
//
// Reach out in Matter Integrators Discord server if you would like access to
// a Dropbox folder with the HTML version of the specification.

import { readdirSync, readFileSync } from "fs";
import { JSDOM } from "jsdom";
import { homedir } from "os";
import { resolve } from "path";

const SPECIFICATION_PATH = process.env.MATTER_SPECIFICATION_PATH ?? resolve(homedir(), "Dropbox", "iot", "matter-1.1");

export function loadHtml(...paths: string[]) {
    const path = resolve(SPECIFICATION_PATH, ...paths);
    const html = readFileSync(path);
    return new JSDOM(html).window.document;
}

export let paths: string[];

try {
    paths = readdirSync(SPECIFICATION_PATH).filter(filename => filename.endsWith(".html"));
} catch (e) {
    if ((e as { code?: string }).code === "ENOENT") {
        throw new Error(`Path ${SPECIFICATION_PATH} does not exist, do you need to set MATTER_SPECIFICATION_PATH?`);
    } else {
        throw e;
    }
}

if (!paths.length) {
    throw new Error(`No HTML files in ${SPECIFICATION_PATH}`);
}
