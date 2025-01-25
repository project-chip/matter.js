/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * A "multiplex" tracks an extensible set of promises.
 */
export interface Multiplex {
    add(worker: Promise<unknown>): void;
    close(): Promise<void>;
    [Symbol.asyncDispose](): Promise<void>;
}
