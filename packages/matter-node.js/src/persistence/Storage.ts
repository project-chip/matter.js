/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export abstract class Storage {
    abstract initialize(): Promise<void>;
    abstract close(): Promise<void>;
    abstract get(context: string, key: string): string | undefined;
    abstract set(context: string, key: string, value: string): void;
}
