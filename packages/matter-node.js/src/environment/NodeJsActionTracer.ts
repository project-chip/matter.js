/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ActionTracer } from "@project-chip/matter.js/behavior/context";
import { Environment } from "@project-chip/matter.js/environment";
import { FileHandle, open } from "fs/promises";
import { resolve } from "path";

export class NodeJsActionTracer extends ActionTracer {
    #path: string;
    #output?: FileHandle;

    constructor(path: string) {
        super();

        this.#path = path;
    }

    static configure(env: Environment) {
        if (!env.vars.boolean("trace.enable")) {
            return;
        }
        const path = resolve(env.vars.get("path.root", "."), env.vars.get("trace.path", "trace.jsonl"));
        env.set(ActionTracer, new NodeJsActionTracer(path));
    }

    override async record(action: ActionTracer.Action) {
        if (this.#output === undefined) {
            this.#output = await open(this.#path, "w");
        }
        await this.#output.write(JSON.stringify(action));
        await this.#output.write("\n");
    }
}
