/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NoProviderError } from "@project-chip/matter.js/common";
import { Crypto } from "@project-chip/matter.js/crypto";
import { singleton } from "@project-chip/matter.js/util";
import { CryptoNode } from "./CryptoNode";

// Check if Crypto singleton is already registered and auto register if not
try {
    Crypto.get();
} catch (error) {
    if (error instanceof NoProviderError) {
        Crypto.get = singleton(() => new CryptoNode());
    } else {
        throw error;
    }
}
