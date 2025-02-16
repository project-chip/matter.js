/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Environment, MaybePromise, serialize } from "#general";
import { ActionTracer } from "#node";
import { FileHandle, open } from "node:fs/promises";
import { resolve } from "node:path";

export class NodeJsActionTracer extends ActionTracer {
    #path: string;
    #output?: FileHandle;
    #write?: MaybePromise<void>;

    constructor(path: string) {
        super();

        this.#path = path;
    }

    static configure(env: Environment) {
        env.vars.use(() => {
            if (env.has(ActionTracer)) {
                env.delete(env.get(ActionTracer).constructor as new () => ActionTracer);
            }

            if (!env.vars.boolean("trace.enable")) {
                return;
            }

            const path = resolve(env.vars.get("path.root", "."), env.vars.get("trace.path", "trace.jsonl"));

            const tracer = new NodeJsActionTracer(path);
            env.set(ActionTracer, tracer);
            env.runtime.add(tracer);
        });
    }

    [Symbol.asyncDispose]() {
        MaybePromise.then(this.#write, () => this.#output?.close());
    }

    override record(action: ActionTracer.Action) {
        const raw = {
            ...action,
            path: action.path?.toString(false),
            mutations: action.mutations
                ? action.mutations.map(m => ({ ...m, path: m.path.toString(false) }))
                : undefined,
        };
        this.#write = MaybePromise.then(this.#write, () => this.#record(raw));
    }

    async #record(action: object) {
        if (this.#output === undefined) {
            this.#output = await open(this.#path, "w");
        }
        await this.#output.write(JSON.stringify(action, replacer));
        await this.#output.write("\n");
    }
}

function replacer(_key: string, value: any) {
    if (typeof value === "bigint" || ArrayBuffer.isView(value)) {
        return serialize(value);
    }
    return value;
}
