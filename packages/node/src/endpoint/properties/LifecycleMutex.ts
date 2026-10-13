/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Duration, Logger, Mutex, Seconds, Time } from "@matter/general";

const logger = Logger.get("LifecycleMutex");

/**
 * A {@link Mutex} for lifecycle operations of a node and its endpoints.
 *
 * Code that runs while the mutex is held, such as a reset handler or the initialization or close of a behavior, must
 * not await an operation that waits for the same mutex: the two wait for each other forever.  The mutex cannot tell
 * such a call from a call made elsewhere while the mutex is held, so it does not refuse it.  Instead it logs a warning
 * that names both operations once an operation has waited {@link LifecycleMutex.STALL_WARNING}.
 *
 * @internal
 */
export class LifecycleMutex extends Mutex {
    #holder?: string;

    /**
     * Run {@link step} as {@link operation} while holding the mutex.
     *
     * @param operation describes the operation in the warning, for example "closing node0.part0"
     */
    async hold<T>(operation: string, step: () => Promise<T>): Promise<T> {
        const stalled = stallTimer(operation, () => this.#holder ?? "another lifecycle operation");
        try {
            return await this.produce(async () => {
                stalled.stop();
                this.#holder = operation;
                try {
                    return await step();
                } finally {
                    this.#holder = undefined;
                }
            });
        } finally {
            stalled.stop();
        }
    }

    /**
     * Await {@link promise}, the operation in progress that {@link joined} names, with the same warning as
     * {@link hold}.  {@link operation} names the caller.
     */
    static async join<T>(operation: string, joined: string, promise: PromiseLike<T>): Promise<T> {
        const stalled = stallTimer(operation, () => joined);
        try {
            return await promise;
        } finally {
            stalled.stop();
        }
    }
}

export namespace LifecycleMutex {
    /**
     * How long an operation waits before {@link LifecycleMutex} logs a warning.
     */
    export const STALL_WARNING = Seconds(10);
}

function stallTimer(operation: string, holder: () => string) {
    return Time.getTimer(`Lifecycle mutex wait: ${operation}`, LifecycleMutex.STALL_WARNING, () => {
        const awaited = holder();
        logger.warn(
            `${operation} has waited ${Duration.format(LifecycleMutex.STALL_WARNING)} for ${awaited};`,
            `possible deadlock: if code running inside ${awaited} awaits ${operation}, neither finishes`,
        );
    }).start();
}
