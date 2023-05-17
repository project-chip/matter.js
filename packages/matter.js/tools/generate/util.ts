/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { readdirSync, unlinkSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { CodeModel } from "../../src/device/CodeModel.js";
export { CodeModel };

const HEADER =
    `/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/
`;

function targetPath(target: string) {
    return resolve(dirname(fileURLToPath(import.meta.url)), `../../src/${target}`);
}

export function clean(target: string, suffix: string) {
    const path = targetPath(target);
    readdirSync(targetPath(target)).forEach((f) => {
        if (f.endsWith(`${suffix}.ts`)) {
            unlinkSync(resolve(path, f));
        }
    });
}

export function writeTS(target: string, source: string) {
    console.log(`Write ${target}.ts`);
    source = `${HEADER}\n${source}`
    writeFileSync(targetPath(`${target}.ts`), source);
}
