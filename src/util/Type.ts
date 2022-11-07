/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/** Merges two types into one. */
export type Merge<A, B> = A & B extends infer AB ? { [K in keyof AB]: AB[K] } : never;
