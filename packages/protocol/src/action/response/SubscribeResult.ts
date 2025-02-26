/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { SubscribeResponse } from "#types";
import { ReadResult } from "./ReadResult.js";

export interface SubscribeResult extends AsyncIterator<SubscribeResult.Chunk> {}

export namespace SubscribeResult {
    export type Chunk = ReadResult.Chunk | SubscribeResponse;
}
