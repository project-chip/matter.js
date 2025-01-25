/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NodeJsCrypto } from "#crypto/NodeJsCrypto.js";
import { Crypto } from "#general";

const TheCrypto = new NodeJsCrypto();
Crypto.get = () => TheCrypto;
