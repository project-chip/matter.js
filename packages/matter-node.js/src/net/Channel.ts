/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Channel<T> {
    send(data: T): Promise<void>;
    getName(): string;
}
