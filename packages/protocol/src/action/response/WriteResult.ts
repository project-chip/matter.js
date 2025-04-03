/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Write } from "#action/request/Write.js";
import type { CancelablePromise } from "#general";
import type { WriteResponse } from "#types";

export type WriteResult<T extends Write> = CancelablePromise<
    T extends { suppressResponse: true } ? void : WriteResponse
>;
