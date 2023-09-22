/**
 * Utils for promises.
 *
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../common/MatterError.js";

/**
 * Obtain a promise with functions to resolve and reject.
 */
export function createPromise<T>(): {
    promise: Promise<T>;
    resolver: (value: T) => void;
    rejecter: (reason?: any) => void;
} {
    let resolver, rejecter;
    const promise = new Promise<T>((resolve, reject) => {
        resolver = resolve;
        rejecter = reject;
    });

    if (!resolver || !rejecter) {
        // This doesn't happen but asserts that resolver and rejecter are
        // defined.
        throw new InternalError("Failed to extract resolve/reject from Promise context");
    }

    return {
        promise,
        resolver,
        rejecter,
    };
}
