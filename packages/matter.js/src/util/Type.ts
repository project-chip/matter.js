/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export type Properties = { [key: string]: any };

/** Merges two types into one. */
export type Merge<A extends Properties, B extends Properties> = {
    [K in keyof A as K extends keyof B ? never : K]: A[K];
} & B;

export function Merge<A extends Properties, B extends Properties>(a: A, b: B): Merge<A, B> {
    return { ...a, ...b };
}

/** Type that represents a class constructor of a defined type or extend of it */
export type ClassExtends<C> = { new (...args: any[]): C };

/** Merge an array of objects into one.  Currently assumes unique elements */
export type MergeAll<T> = T extends [infer O extends Properties | undefined, ...infer R]
    ? O extends undefined
        ? MergeAll<R>
        : O & MergeAll<R>
    : T extends []
    ? {}
    : never;

export function MergeAll<T extends (Properties | undefined)[]>(...objects: readonly [...T]): MergeAll<T> {
    return Object.assign({}, ...objects);
}

/** Pluck an item from an array of objects if present */
export type Pluck<K, T extends readonly [...any]> = T extends [infer O, ...infer R]
    ? K extends keyof O
        ? [O[K], ...Pluck<K, R>]
        : Pluck<K, R>
    : T extends []
    ? T
    : never;

export function Pluck<T extends Properties[], K extends keyof T[number]>(
    key: K,
    ...objects: readonly [...T]
): Pluck<K, T> {
    return objects.map(o => (o as any)[key]).filter(o => o !== undefined) as any;
}

/** Same as "a == undefined" but keeps the kids happy */
export function isNullish(a: any) {
    return a === undefined || a === null;
}

export type MakeMandatory<T> = Exclude<T, undefined>;

/** Create a branded type */
declare const __brand: unique symbol;
type Brand<B> = { [__brand]: B };
export type Branded<T, B> = T & Brand<B>;
