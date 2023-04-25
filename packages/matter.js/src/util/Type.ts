/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/** Merges two types into one. */
export type Merge<A, B> = A & B extends infer AB ? { [K in keyof AB]: AB[K] } : never;
export const Merge = <A, B>(a: A, b: B) => ({ ...a, ...b } as unknown as Merge<A, B>);

/** Type that represents a class constructor of a defined type or extend of it */
export type ClassExtends<C> = { new(...args: any[]): C };
