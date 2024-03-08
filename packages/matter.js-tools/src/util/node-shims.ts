/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { webcrypto } from "node:crypto";

// Required for Node < 19
if (globalThis.crypto === undefined) {
    Object.assign(globalThis, { crypto: webcrypto });
}
