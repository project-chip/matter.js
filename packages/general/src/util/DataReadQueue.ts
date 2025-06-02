/**
 * Promise-based blocking queue.
 *
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterFlowError } from "../MatterError.js";
import { Time, Timer } from "../time/Time.js";
import { createPromise } from "./Promises.js";
import { EndOfStreamError, NoResponseTimeoutError, Stream } from "./Stream.js";

export class DataReadQueue<T> implements Stream<T> {
    readonly #queue = new Array<T>();
    #pendingRead?: { resolver: (data: T) => void; rejecter: (reason: any) => void; timeoutTimer?: Timer };
    #closed = false;

    async read(timeoutMs = 60_000): Promise<T> {
        const { promise, resolver, rejecter } = createPromise<T>();
        if (this.#closed) throw new EndOfStreamError();
        const data = this.#queue.shift();
        if (data !== undefined) {
            return data;
        }
        if (this.#pendingRead !== undefined) throw new MatterFlowError("Only one pending read is supported");
        this.#pendingRead = {
            resolver,
            rejecter,
            timeoutTimer: Time.getTimer("Queue timeout", timeoutMs, () =>
                rejecter(new NoResponseTimeoutError(`Expected response data missing within timeout of ${timeoutMs}ms`)),
            ).start(),
        };
        return promise;
    }

    async write(data: T) {
        this.push(data);
    }

    get size() {
        return this.#queue.length;
    }

    /**
     * Same as write but doesn't require the await required to satisfy {@link Stream#write}.
     */
    push(data: T) {
        if (this.#closed) throw new EndOfStreamError();
        if (this.#pendingRead !== undefined) {
            this.#pendingRead.timeoutTimer?.stop();
            this.#pendingRead.resolver(data);
            this.#pendingRead = undefined;
            return;
        }
        this.#queue.push(data);
    }

    close() {
        if (this.#closed) return;
        this.#closed = true;
        if (this.#pendingRead === undefined) return;
        this.#pendingRead.timeoutTimer?.stop();
        this.#pendingRead.rejecter(new EndOfStreamError());
    }
}
