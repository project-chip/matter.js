/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lifecycle } from "../common/Lifecycle.js";
import { Diagnostic } from "../log/Diagnostic.js";
import { Logger } from "../log/Logger.js";
import { AsyncConstruction } from "../util/AsyncConstruction.js";
import { Observable } from "../util/Observable.js";
import { MaybePromise } from "../util/Promises.js";
import type { Environment } from "./Environment.js";
import { Environmental } from "./Environmental.js";

const logger = Logger.get("Runtime");

/**
 * Handles execution and lifecycle management of other components.
 */
export class RuntimeService {
    #workers = new Set<RuntimeService.Worker>;
    #disposed = new Set<RuntimeService.Worker>;
    #workerDeleted = Observable<[]>();
    #canceled = false;
    #started = Observable<[]>();
    #stopped = Observable<[]>();

    constructor(environment: Environment) {
        environment.set(RuntimeService, this);
    }

    get started() {
        return this.#started;
    }

    get stopped() {
        return this.#stopped;
    }

    static [Environmental.create](environment: Environment) {
        return new this(environment);
    }

    addWorker(worker: RuntimeService.Worker) {
        if (this.#workers.has(worker)) {
            return;
        }

        this.#workers.add(worker);
        if (this.#workers.size === 1) {
            this.#started.emit();
        }

        if (worker.construction?.change) {
            worker.construction.change.on(status => {
                switch (status) {
                    case Lifecycle.Status.Incapacitated:
                        let error = worker.construction?.error;
                        if (!error) {
                            error = new Error("Unknown initialization error");
                        }
                        logger.error(error);
                        this.cancel();
                        break;

                    case Lifecycle.Status.Destroyed:
                        this.#deleteWorker(worker);
                        break;
                }
            })
        } else if (worker.construction?.then) {
            Promise.resolve
        }

        if (typeof worker.then === "function") {
            Promise.resolve(worker).finally(() => this.#disposeWorker(worker));
        }
    }

    /**
     * Cancel execution.
     */
    cancel() {
        if (this.#canceled) {
            return;
        }
        this.#canceled = true;
        logger.notice("Shutting down");

        for (const worker of this.#workers) {
            this.#disposeWorker(worker);
        }
    }

    async [Symbol.asyncDispose]() {
        this.cancel();
        await this.inactive;
    }

    async #disposeWorker(worker: RuntimeService.Worker) {
        if (this.#disposed.has(worker)) {
            return;
        }
        
        const dispose = () => {
            if (worker[Symbol.asyncDispose]) {
                this.#disposed.add(worker);
                return Promise.resolve(worker[Symbol.asyncDispose]?.()).finally(() => this.#deleteWorker(worker));
            }

            if (worker[Symbol.dispose]) {
                worker[Symbol.dispose]?.();
            }

            this.#deleteWorker(worker);
        }

        if (worker.construction) {
            return Promise.resolve(worker.construction).finally(dispose);
        }

        return dispose();
    }

    #deleteWorker(worker: RuntimeService.Worker) {
        if (this.#workers.has(worker)) {
            this.#workers.delete(worker);
            this.#disposed.delete(worker);
            this.#workerDeleted.emit();
            if (this.#workers.size === 0) {
                this.#stopped.emit();
            }
        }
    }

    /**
     * Resolves when no workers are active.
     */
    get inactive() {
        if (!this.#workers.size) {
            return Promise.resolve();
        }

        return new Promise<void>(resolve => {
            const listener = () => {
                if (!this.#workers.size) {
                    this.#workerDeleted.off(listener);
                    resolve();
                }
            }
            this.#workerDeleted.on(listener);
        });
    }

    get [Diagnostic.value]() {
        return "Runtime";
    }
}

export namespace RuntimeService {
    export interface Worker extends Partial<PromiseLike<any>> {
        helper?: boolean;
        construction?: AsyncConstruction<any>;
        [Symbol.asyncDispose]?: () => MaybePromise<void>;
        [Symbol.dispose]?: () => void;
    }
}
