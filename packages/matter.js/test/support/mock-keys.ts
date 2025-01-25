/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PrivateKey } from "#general";

export const PRIVATE_KEY = new Uint8Array(32);
PRIVATE_KEY[31] = 1; // EC doesn't like all-zero private key
export const DUMMY_KEY = PrivateKey(PRIVATE_KEY);
