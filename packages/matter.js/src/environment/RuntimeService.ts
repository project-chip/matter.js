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
    #workers = new Set<RuntimeService.Worker>();
    #disposed = new Set<RuntimeService.Worker>();
    #workerDeleted = Observable<[]>();
    #canceled = false;
    #started = Observable<[]>();
    #stopped = Observable<[]>();

    constructor(environment: Environment) {
        environment.set(RuntimeService, this);
    }

    /**
     * Add a {@link Worker}.
     *
     * The runtime considers itself "active" if there are one or more workers installed.  Workers that complete are
     * removed and optionally destroyed.
     */
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
            });
        } else if (worker.then) {
            Promise.resolve(worker).finally(() => this.#disposeWorker(worker));
        }
    }

    /**
     * Emits when a worker is added when previously there were none.
     */
    get started() {
        return this.#started;
    }

    /**
     * Emits when the last worker departs.
     */
    get stopped() {
        return this.#stopped;
    }

    static [Environmental.create](environment: Environment) {
        return new this(environment);
    }

    /**
     * Cancel execution.
     *
     * On cancel the runtime destroys active workers.
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
            };
            this.#workerDeleted.on(listener);
        });
    }

    async [Symbol.asyncDispose]() {
        this.cancel();
        await this.inactive;
    }

    get [Diagnostic.value]() {
        return "Runtime";
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
        };

        if (worker.construction) {
            return Promise.resolve(worker.construction).finally(dispose);
        }

        return dispose();
    }

    #deleteWorker(worker: RuntimeService.Worker) {
        if (!this.#workers.has(worker)) {
            return;
        }

        // Remove the worker
        this.#workers.delete(worker);
        this.#disposed.delete(worker);
        this.#workerDeleted.emit();

        // If there are still non-helper workers, remain in active state
        for (const worker of this.#workers) {
            if (!worker.helper) {
                return;
            }
        }

        // No workers except helpers; cancel helpers and exit
        this.cancel();
        this.inactive.then(() => this.#stopped.emit());
    }
}

export namespace RuntimeService {
    /**
     * The runtime tracks individual discrete tasks as "workers".
     *
     * The state of the runtime is dependent on installed workers.  Any JS object may be a worker but the runtime's
     * interaction with workers varies as documented here.
     *
     * If a worker is a {@link PromiseLike} the runtime will delete and/or destroy it when it completes.
     */
    export interface Worker extends Partial<PromiseLike<any>> {
        /**
         * If this is true, the worker is considered a "helper".  When the last non-helper worker departs the runtime
         * cancels helpers and emits {@link RuntimeService.stopped}.
         */
        helper?: boolean;

        /**
         * If the worker supports {@link AsyncConstruction}, the runtime will monitor the worker's lifecycle:
         *
         *   - If the worker is incapacitated (e.g. experiences an error during initialization) the runtime will cancel
         *     all workers and exit
         *
         *   - If the worker is destroyed deletes it from the set of known workers
         */
        construction?: AsyncConstruction<any>;

        /**
         * If the worker supports {@link Symbol.asyncDispose} the runtime will invoke when the worker is no longer
         * needed.  This happens if:
         *
         *   - The worker is a {@link PromiseLike} that resolves
         *
         *   - The worker's {@link construction} status changed as noted above
         *
         *   - The runtime is canceled via {@link RuntimeService.cancel}
         */
        [Symbol.asyncDispose]?: () => MaybePromise<void>;

        /**
         * Workers may implement {@link Symbol.dispose} to handle disposal.  Works the same as the async equivalent.
         */
        [Symbol.dispose]?: () => void;
    }
}
