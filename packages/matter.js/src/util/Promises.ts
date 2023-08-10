/**
 * Utils for promises.
 *
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/** Dark magic to have access to the promise resolver outside the promise context. */
export async function getPromiseResolver<T>(): Promise<{
    promise: Promise<T>;
    resolver: (value: T) => void;
    rejecter: (reason?: any) => void;
}> {
    let promise: Promise<T>;
    return new Promise<{ resolver: (value: T) => void; rejecter: (reason?: any) => void }>(resolve => {
        promise = new Promise<T>((resolver, rejecter) => resolve({ resolver, rejecter }));
    }).then(({ resolver, rejecter }) => ({ promise, resolver, rejecter }));
}
