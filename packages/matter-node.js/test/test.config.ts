/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crypto } from "@project-chip/matter.js/crypto";
import { CryptoNode } from "../src/crypto/CryptoNode";

const TheCrypto = new CryptoNode();
Crypto.get = () => TheCrypto;
