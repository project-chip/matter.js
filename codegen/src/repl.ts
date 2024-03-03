/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Run a TypeScript REPL with key objects loaded

import { homedir } from "os";
import { join } from "path";
import repl from "repl";

import * as model from "@project-chip/matter.js/model";

export async function main() {
    (global as any).model = model;
    (global as any).matter = new model.MatterModel();

    const server = repl.start({ prompt: "matter.js > " });

    const historyPath = process.env.MATTER_REPL_HISTORY || join(homedir(), ".matter-repl-history");
    server.setupHistory(historyPath, error => {
        if (error) {
            console.error(error);
            process.exit(1);
        }
    });
}
