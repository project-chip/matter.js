/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { typescript } from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { multiEntry } from "@rollup/plugin-multi-entry";

export default {
    plugins: [
        typescript(),
        nodeResolve(),
        multiEntry()
    ],

    input: [
        "../**/*Test.ts"
    ]
}
