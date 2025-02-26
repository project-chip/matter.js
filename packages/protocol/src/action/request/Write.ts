/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { WriteRequest } from "#types";

export interface Write extends WriteRequest {
    timeout?: number;
}

// TODO - write DSL
