/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crypto, NoProviderError, singleton } from "#general";
import { NodeJsCrypto } from "./NodeJsCrypto.js";

// Check if Crypto singleton is already registered
let needCrypto = true;
try {
    const crypto = Crypto.get();

    if ((crypto as { mock?: boolean }).mock !== true) {
        needCrypto = false;
    }
} catch (error) {
    NoProviderError.accept(error);
}

// Register if necessary
if (needCrypto) {
    Crypto.get = singleton(() => new NodeJsCrypto());
}
