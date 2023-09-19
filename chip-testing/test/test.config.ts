/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Time, TimeNode } from "@project-chip/matter-node.js/time";

const TheTime = new TimeNode();
Time.get = () => TheTime;

import { Crypto, CryptoNode } from "@project-chip/matter-node.js/crypto";

const TheCrypto = new CryptoNode();
Crypto.get = () => TheCrypto;

