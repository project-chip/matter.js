/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/** Merges two types into one. */
export type Merge<
    A extends { [key: string]: any },
    B extends { [key: string]: any }
> = { [K in keyof A as (K extends keyof B ? never : K)]: A[K] } & B;

export function Merge<
    A extends { [key: string]: any },
    B extends { [key: string]: any }
>(a: A, b: B): Merge<A, B> {
    return { ...a, ...b }
}

/** Type that represents a class constructor of a defined type or extend of it */
export type ClassExtends<C> = { new(...args: any[]): C };
