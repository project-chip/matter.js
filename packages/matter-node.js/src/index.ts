/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { singleton } from "@project-chip/matter.js/util";
import { Time } from "@project-chip/matter.js/time";
import { TimeNode } from "./time/TimeNode";

// Check if Time singleton is already registered and auto register if not
try {
    Time.get();
} catch {
    Time.get = singleton(() => new TimeNode());
}

import { Network } from "@project-chip/matter.js/net";
import { NetworkNode } from "./net/NetworkNode";

// Check if Network singleton is already registered and auto register if not
try {
    Network.get();
} catch {
    Network.get = singleton(() => new NetworkNode());
}

import { Crypto } from "@project-chip/matter.js/crypto";
import { CryptoNode } from "./crypto/CryptoNode";

// Check if Crypto singleton is already registered and auto register if not
try {
    Crypto.get();
} catch {
    Crypto.get = singleton(() => new CryptoNode());
}

export * from "@project-chip/matter.js";
