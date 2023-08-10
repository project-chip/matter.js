/**
 * Promise-based blocking queue.
 *
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { getPromiseResolver } from "./Promises.js";
import { EndOfStreamError, Stream } from "./Stream.js";

export class Queue<T> implements Stream<T> {
    private readonly queue = new Array<T>();
    private pendingRead?: { resolver: (data: T) => void; rejecter: (reason: any) => void };
    private closed = false;

    async read(): Promise<T> {
        const { promise, resolver, rejecter } = await getPromiseResolver<T>();
        if (this.closed) throw new EndOfStreamError();
        const data = this.queue.shift();
        if (data !== undefined) {
            return data;
        }
        this.pendingRead = { resolver, rejecter };
        return promise;
    }

    async write(data: T) {
        if (this.closed) throw new EndOfStreamError();
        if (this.pendingRead !== undefined) {
            this.pendingRead.resolver(data);
            this.pendingRead = undefined;
            return;
        }
        this.queue.push(data);
    }

    close() {
        if (this.closed) return;
        this.closed = true;
        if (this.pendingRead === undefined) return;
        this.pendingRead.rejecter(new EndOfStreamError());
    }
}
