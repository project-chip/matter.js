#!/usr/bin/env node
/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Environment, MaybePromise, Storage } from "@matter/main";
import { ValidationError } from "@matter/main/types";
import { BackchannelCommand, CommandPipe } from "@matter/testing";
import { NamedPipeCommandHandler } from "./NamedPipeCommandHandler.js";
import { StorageBackendAsyncJsonFile } from "./storage/StorageBackendAsyncJsonFile.js";
import { StorageBackendSyncJsonFile } from "./storage/StorageBackendSyncJsonFile.js";

// TODO - the get*Parameter calls are deprecated along with matter-node.js so copied here temporarily.  Replace with
// yargs ?
const commandArguments = process.argv.slice(2);

export function getParameter(name: string) {
    let markerIndex = commandArguments.indexOf(`-${name}`);
    if (markerIndex === -1) markerIndex = commandArguments.indexOf(`--${name}`);
    if (markerIndex === -1 || markerIndex + 1 === commandArguments.length) return undefined;
    return commandArguments[markerIndex + 1];
}

export function hasParameter(name: string) {
    let markerIncluded = commandArguments.includes(`-${name}`);
    if (!markerIncluded) markerIncluded = commandArguments.includes(`--${name}`);
    return markerIncluded;
}

export function getIntParameter(name: string) {
    const value = getParameter(name);
    if (value === undefined) return undefined;
    const intValue = parseInt(value, 10);
    if (isNaN(intValue)) throw new ValidationError(`Invalid value for parameter ${name}: ${value} is not a number`);
    return intValue;
}

const allocatedIds = new Set();

export abstract class TestInstance {
    static id = "test-node";
    #id: string;
    #commandPipe?: CommandPipe;

    get id() {
        return this.#id;
    }

    get baseAppName() {
        return this.constructor.name.replace(/TestInstance(?:Legacy)?/, "");
    }

    get appName() {
        if (this.constructor.name.endsWith("Legacy")) {
            return `${this.baseAppName}-Legacy`;
        }
        return this.baseAppName;
    }

    constructor(protected config: TestInstanceConfig) {
        this.#id = (this.constructor as { (): unknown; id: string }).id;
        if (config.domain !== undefined) {
            this.#id = `${this.#id}-${config.domain}`;
        }
        let nextId = 1;
        while (allocatedIds.has(this.#id)) {
            const qualifiedId = `${this.#id}-${nextId++}`;
            if (!allocatedIds.has(qualifiedId)) {
                this.#id = qualifiedId;
                allocatedIds.add(this.#id);
                break;
            }
        }
    }

    async activateCommandPipe(name: string) {
        if (this.#commandPipe === undefined) {
            if (this.config.commandPipeFactory === undefined) {
                throw new Error(`Cannot instantiate ${this.appName} without command pipe factory`);
            }
            const pipe = await this.config.commandPipeFactory(this, name);
            if (pipe) {
                this.#commandPipe = pipe;
            }
        }
    }

    abstract initialize(): Promise<void>;
    abstract start(): Promise<void>;

    async stop(): Promise<void> {
        await this.#commandPipe?.close();
    }

    abstract close(): Promise<void>;

    async backchannel(command: BackchannelCommand) {
        throw new Error(`Unhandled backchannel ${command.name}`);
    }
}

export namespace log {
    export function directive(...args: unknown[]) {
        console.log(...args);
    }

    export function error(...args: unknown[]) {
        console.log(args);
    }
}

export interface TestInstanceConfig {
    storage: Storage;
    discriminator?: number;
    passcode?: number;
    domain?: string;

    /**
     * Initializes a {@link CommandPipe} for the application.
     *
     * This function may optionally return the pipe object.  When running tests locally using GenericTestApp this is
     * necessary to close the pipe.  When running containerized this is unnecessary as the test harness manages pipes.
     */
    commandPipeFactory: (app: TestInstance, name: string) => Promise<void | CommandPipe>;
}

export interface TestInstanceConstructor<T extends TestInstance = TestInstance> {
    new (config: TestInstanceConfig): T;
}

export async function startTestApp(
    testInstanceClass: TestInstanceConstructor,
    storageType: typeof StorageBackendSyncJsonFile | typeof StorageBackendAsyncJsonFile = StorageBackendSyncJsonFile,
) {
    const storageName = `/tmp/chip_${getParameter("KVS") ?? "kvs"}`;

    const storage = new storageType(storageName);
    if (hasParameter("factoryreset")) {
        await storage.clear();
    }

    const testInstance = new testInstanceClass({
        storage,
        commandPipeFactory: async (app: TestInstance, name: string) => {
            const pipe = new NamedPipeCommandHandler(
                {
                    backchannel(command: BackchannelCommand): void | Promise<void> {
                        return app.backchannel(command);
                    },
                },
                name,
            );

            await pipe.initialize();

            return pipe;
        },
        discriminator: getIntParameter("discriminator"),
        passcode: getIntParameter("passcode"),
    });

    await testInstance.initialize();
    await testInstance.start();

    console.log(`======> Waiting for tests`);

    function exitHandler(signal: string) {
        console.log(`======> Closing test instance because of ${signal} ...`);
        testInstance
            .stop()
            .then(() => {
                const runtime = Environment.default.runtime;
                runtime.cancel();
                runtime.inactive
                    .then(() => {
                        MaybePromise.then(
                            storage?.close(),
                            () => {
                                console.log(`======> Test instance successfully closed.`);
                                process.exit(0);
                            },
                            error => {
                                console.log(error.stack);
                                process.exit(1);
                            },
                        );
                    })
                    .catch(error => {
                        console.log(error.stack);
                        process.exit(1);
                    });
            })
            .catch(error => {
                console.log(error.stack);
                process.exit(1);
            });
    }

    process.on("SIGTERM", () => exitHandler("SIGTERM"));
    process.on("SIGINT", () => exitHandler("SIGINT"));

    process.on("exit", code => console.log(`======> Exit Test instance with code ${code}`));
}
