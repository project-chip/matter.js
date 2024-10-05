/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Network, NoProviderError, singleton } from "@matter/general";
import { NetworkReactNative } from "./NetworkReactNative.js";

// Check if Network singleton is already registered and auto register if not
try {
    Network.get();
} catch (error) {
    NoProviderError.accept(error);
    Network.get = singleton(() => new NetworkReactNative());
    // use net export closeNetwork() to close the network
}
