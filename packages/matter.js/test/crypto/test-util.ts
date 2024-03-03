/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PrivateKey } from "../../src/crypto/Key.js";
import { ByteArray } from "../../src/util/ByteArray.js";

export const PRIVATE_KEY = new ByteArray(32);
PRIVATE_KEY[31] = 1; // EC doesn't like all-zero private key
export const DUMMY_KEY = PrivateKey(PRIVATE_KEY);
