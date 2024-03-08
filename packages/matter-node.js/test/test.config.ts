/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crypto } from "@project-chip/matter.js/crypto";
import { CryptoNode } from "../src/crypto/CryptoNode.js";

const TheCrypto = new CryptoNode();
Crypto.get = () => TheCrypto;
