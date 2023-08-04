/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Channel<T> {
    name: string;
    send(data: T): Promise<void>;
    close(): Promise<void>;
}
