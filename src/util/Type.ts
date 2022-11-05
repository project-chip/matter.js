/**
 * @file Utils to manipulate types.
 * @copyright Project CHIP Authors 2022
 * @license Apache-2.0
 */

/** Merges two types into one. */
export type Merge<A, B> = A & B extends infer AB ? { [K in keyof AB]: AB[K] } : never;
