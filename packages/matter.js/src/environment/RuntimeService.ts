/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic } from "../log/Diagnostic.js";
import { Logger } from "../log/Logger.js";
import { Observable } from "../util/Observable.js";
import { CancellablePromise, MaybePromise } from "../util/Promises.js";
import type { Environment } from "./Environment.js";
import { Environmental } from "./Environmental.js";
import { StorageService } from "./StorageService.js";

const logger = Logger.get("Runtime");

/**
 * Handles execution and lifecycle management of other components.
 */
export class RuntimeService {
    #environment: Environment;
    #workers?: Map<
        RuntimeService.Worker,
        { deleted?: boolean, started?: boolean, promise?: CancellablePromise }
    >;
    #started = Observable<[]>();
    #canceled = Observable<[]>();
    #stopped = Observable<[]>();
    #isCanceled = false;
    #completion?: Promise<void>;

    constructor(environment: Environment) {
        this.#environment = environment;
        environment.set(RuntimeService, this);
    }

    static [Environmental.create](environment: Environment) {
        return new this(environment);
    }

    /**
     * Add a runtime worker.  A worker:
     * 
     *   - Is started via {@link RuntimeService.Worker.run} if supported
     * 
     *   - Keeps the runtime active if it is an unresolved {@link PromiseLike} or returns an unresolved
     *     {@link PromiseLike} from {@link RuntimeService.Worker.run}.
     * 
     *   - Is canceled via {@link CancellablePromise.cancel} if supported
     * 
     *   - Is destroyed via {@link Symbol.asyncDispose} if supported]
     */
    add(worker: RuntimeService.Worker) {
        if (!this.#workers) {
            this.#workers = new Map;
        }

        this.#workers?.set(worker, {});

        if (this.#completion) {
            this.#startWorker(worker);
        }

        if (this.#isCanceled) {
            this.#cancelWorker(worker);
        }
    }

    /**
     * Remove a worker.
     * 
     * If the worker is active tracking will continue until the worker terminates.
     */
    delete(worker: RuntimeService.Worker) {
        const state = this.#workers?.get(worker);
        if (!state || state.deleted) {
            return;
        }

        if (state.promise) {
            state.deleted = true;
        } else {
            this.#workers?.delete(worker);
        }
    }

    /**
     * Starts any processes that are not yet executing and wait for non-utility processes to complete.
     */
    async run() {
        this.start();
        await this.#completion;
    }

    /**
     * Start any processes that are not yet executing.
     * 
     * If you use start to activate the runtime, you must still await {@link run}().
     */
    start() {
        if (this.#completion || !this.#workers) {
            return;
        }

        logger.notice(
            "Starting",
            Diagnostic.strong("Matter.js"),
            "environment",
            Diagnostic.strong(this.#environment.name),
            "in",
            this.#environment.get(StorageService).location,
        );

        for (const [ process, { started } ] of this.#workers.entries()) {
            if (!started) {
                this.#startWorker(process);
            }
        }
        this.#completion = new Promise(
            resolve => {
                const monitorProcesses = () => {
                    let ongoing = this.#ongoing;
                    if (!ongoing) {
                        // If we're canceled and there are no ongoing promises, our work is finished
                        if (this.#isCanceled) {
                            this.#isCanceled = false;
                            this.#workers = undefined;
                            resolve();
                            return;
                        }

                        // Cancel but then continue monitoring because cancelation may have result in additional work
                        this.cancel();
                        monitorProcesses();
                        return;
                    }
                }
                while (this.#workers?.size) {
                    const ongoing = this.#ongoing;
                    if (!ongoing) {
                        this.cancel();
                    }
                }
            }
        );
    }

    /**
     * Cancel execution.
     */
    cancel() {
        if (this.#isCanceled || !this.#completion) {
            return;
        }

        this.#isCanceled = true;

        if (!this.#workers) {
            return;
        }

        for (const process of this.#workers.keys()) {
            this.#cancelWorker(process);
        }
    }

    /**
     * Emits on start.
     */
    get started() {
        return this.#started;
    }

    /**
     * Emits on cancel.
     */
    get canceled() {
        return this.#canceled;
    }

    /**
     * Emits on completion.
     */
    get stopped() {
        return this.#stopped;
    }

    get [Diagnostic.value]() {
        return "Runtime";
    }

    #startWorker(worker: RuntimeService.Worker) {
        let promise = worker[RuntimeService.start]?.();
        if (promise) {
            promise = promise
                .catch(e => {
                    logger.error(e);
                    logger.error("Shutting down due to unhandled error");
                    this.cancel();
                })
                .finally(
                    // Once process is complete, dispose.  If disposal returns a promise then don't resolve until
                    // disposal completes
                    () => this.#disposeWorker(worker)
                );
        }
        this.#workers?.set(worker, {
            started: true,
            promise: promise ? CancellablePromise.resolve(promise) : undefined
        });
    }

    #cancelWorker(worker: RuntimeService.Worker) {
        if (!this.#workers) {
            return;
        }

        let detail = this.#workers.get(worker) ?? {};

        // If there's a promise, disposal is handled via #startProcess.  If there's not we must dispose now
        if (!detail.promise) {
            // Dispose, installing any disposal promise so the runtime doesn't exit until disposal completes
            const promise = this.#disposeWorker(worker);
            detail.promise = promise ? CancellablePromise.resolve(promise) : undefined;
        }
    }

    #disposeWorker(worker: RuntimeService.Worker) {
        return MaybePromise.then(
            () => worker[Symbol.asyncDispose]?.(),
            () => {
                this.#workers?.delete(worker)
            },
            e => {
                logger.error(`Error disposing of ${worker.constructor.name}:`, e);
                this.#workers?.delete(worker)
            }
        )
    }

    get #ongoing() {
        const details = this.#workers?.values?.();
        if (!details) {
            return;
        }

        let promises: undefined | Promise<void>[];
        for (const { promise } of details) {
            if (promise) {
                if (!promises) {
                    promises = [];
                }
                promises.push(Promise.resolve(promise));
            }
        }

        return promises;
    }
}

export namespace RuntimeService {
    export const start = Symbol("start");

    export interface Worker extends Partial<PromiseLike<any>> {
        /**
         * Obtain a promise that resolves when the worker completes.  If the worker does not support {@link start} or
         * {@link then} it is still tracked but will not prevent the runtime from exiting.
         */
        [start]?: () => Promise<void>;

        /**
         * Destruction logic.
         */
        [Symbol.asyncDispose]?: () => MaybePromise<void>;
    }
}
