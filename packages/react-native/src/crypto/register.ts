/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Boot, Crypto, NoProviderError, singleton } from "@matter/general";
import { CryptoReactNative } from "./ReactNativeCrypto.js";

Boot.init(() => {
    // Check if Crypto singleton is already registered and auto register if not
    try {
        Crypto.get();
    } catch (error) {
        NoProviderError.accept(error);
        Crypto.get = singleton(() => new CryptoReactNative());
    }
});
