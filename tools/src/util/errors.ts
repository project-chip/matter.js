/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export async function ignoreError<T>(code: string, fn: () => Promise<T>): Promise<T | undefined> {
    try {
        
        return await fn();
    } catch (e) {
        if ((e as any).code !== code) {
            throw e;
        }
    }
}

export function ignoreErrorSync<T>(code: string, fn: () => T): T | undefined {
    try {
        return fn();
    } catch (e) {
        if ((e as any).code !== code) {
            throw e;
        }
    }
}
