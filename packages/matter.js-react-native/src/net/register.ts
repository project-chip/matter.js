/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NoProviderError } from "@project-chip/matter.js/common";
import { Network } from "@project-chip/matter.js/net";
import { singleton } from "@project-chip/matter.js/util";
import { NetworkReactNative } from "./NetworkReactNative.js";

// Check if Network singleton is already registered and auto register if not
try {
    Network.get();
} catch (error) {
    if (error instanceof NoProviderError) {
        Network.get = singleton(() => new NetworkReactNative());
        // use net export closeNetwork() to close the network
    } else {
        throw error;
    }
}
