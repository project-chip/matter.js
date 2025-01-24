/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Boot, Crypto, NoProviderError, singleton } from "#general";
import { NodeJsCrypto } from "./NodeJsCrypto.js";

Boot.init(() => {
    // Check if a Crypto singleton is already registered
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
});
