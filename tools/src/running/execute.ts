/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { spawn } from "child_process";

export async function execute(bin: string, argv: string[]) {
    return new Promise<void>((resolve, reject) => {
        const proc = spawn(bin, argv, {
            stdio: "inherit",
        });
        proc.on("error", reject);
        proc.on("close", code => {
            if (code !== 0) {
                process.exit(code ?? -1);
            }
            resolve();
        });
    });
}

export async function executeNode(script: string, argv: string[]) {
    return execute("node", ["--enable-source-maps", script, ...argv]);
}
