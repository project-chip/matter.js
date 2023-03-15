/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export function singleton<T>(create: () => T) {
    let instance: T | undefined;
    return () => {
        if (instance === undefined) instance = create();
        return instance;
    };
}
