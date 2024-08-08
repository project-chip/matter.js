/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NoProviderError } from "@project-chip/matter.js/common";
import { Network } from "@project-chip/matter.js/net";
import { singleton } from "@project-chip/matter.js/util";
import { NetworkNode } from "./NetworkNode.js";

// Check if Network singleton is already registered and auto register if not
try {
    Network.get();
} catch (error) {
    NoProviderError.accept(error);

    Network.get = singleton(() => new NetworkNode());

    // Ensure network gets cleaned up on exit
    process.on("beforeExit", () => void Network.get().close());
}
