/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export abstract class Storage {
    abstract initialize(): Promise<void>;
    abstract close(): Promise<void>;
    abstract get<T>(context: string, key: string): T | undefined;
    abstract getAll(context: string): { key: string, value: any}[];
    abstract set<T>(context: string, key: string, value: T): void;
}
