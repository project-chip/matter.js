/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { readdir } from "fs/promises";
import { Writable } from "stream";

import Dockerode from "dockerode";

/**
 * A high-level docker control API specialized for our purposes.
 */
export class Docker {
    #intf = new Dockerode();

    async *run(imageName: string, options?: Docker.RunOptions) {
        const { args, createOptions } = configureRun(options);

        let resolve: undefined | ((text?: string) => void);
        let reject: undefined | ((text?: string) => void);
        let signal: undefined | Promise<string | undefined>;

        function newSignal() {
            signal = new Promise((newResolve, newReject) => {
                resolve = text => {
                    newResolve(text);
                    newSignal();
                };
                reject = newReject;
            });
        }

        newSignal();

        const output = new Writable();
        output._write = (chunk, _encoding, done) => {
            resolve!(chunk.toString("utf-8"));
            newSignal();
            done();
        };

        this.#intf.run(imageName, args, output, createOptions).then(
            () => {
                resolve!(undefined);
            },
            error => reject!(error),
        );

        while (true) {
            const value = await signal;
            if (value === undefined) {
                break;
            }
            yield value;
        }
    }

    async readFileFromImage(imageName: string, pathInImage: string) {
        const output = Array<string>();

        for await (const chunk of this.run(imageName, {
            entrypoint: "/usr/bin/cat",
            args: [pathInImage],
        })) {
            output.push(chunk);
        }

        return output.join("").replace(/\r\n/g, "\n");
    }

    async resolveGlobFromImage(imageName: string, glob: string) {
        const output = Array<string>();

        for await (const chunk of this.run(imageName, {
            entrypoint: "ls",
            args: [glob],
        })) {
            output.push(chunk);
        }

        return output.join("").split(/\r?\n/);
    }

    async buildImage(name: string, path: string) {
        const files = await readdir(path);

        const stream = await this.#intf.buildImage(
            {
                context: path,
                src: files,
            },
            {
                t: name,
            },
        );

        await new Promise<void>((resolve, reject) => {
            this.#intf.modem.followProgress(stream, (error, result) => {
                if (error) {
                    reject(error);
                }

                const finalMessage = result[result.length - 1];
                const errorMessage = finalMessage?.error ?? finalMessage?.errorDetail?.message;
                if (errorMessage) {
                    reject(new Error(errorMessage));
                }

                resolve();
            });
        });
    }
}

namespace Docker {
    export interface RunOptions {
        entrypoint?: string | string[];
        args?: string | string[];
        env?: Record<string, string>;
        privileged?: boolean;
        binds?: Record<string, string>;
        network?: "host";
    }
}

function configureRun(options?: Docker.RunOptions) {
    if (options === undefined) {
        options = {};
    }

    let { args } = options;
    if (args === undefined) {
        args = [];
    } else if (typeof args === "string") {
        args = [args];
    }

    const createOptions = {
        HostConfig: {
            AutoRemove: true,
        },
    } as Dockerode.ContainerCreateOptions;

    const { entrypoint, env, binds, network } = options ?? {};

    if (entrypoint !== undefined) {
        createOptions.Entrypoint = entrypoint;
    }

    if (env) {
        createOptions.Env = Object.entries(env).map(([k, v]) => `${k}=${v}`);
    }

    if (binds) {
        createOptions.HostConfig!.Binds = Object.entries(binds).map(([k, v]) => `${k}:${v}`);
    }

    if (network) {
        createOptions.HostConfig!.NetworkMode = network;
    }

    return { args, createOptions };
}
