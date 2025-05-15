/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Invoke } from "#action/request/Invoke.js";
import type { CommandData } from "#types";

export type InvokeResult<T extends Invoke> = T extends { suppressResponse: true }
    ? Promise<void>
    : AsyncIterable<InvokeResult.Chunk>;

export namespace InvokeResult {
    export type Chunk = CommandData[];
}
