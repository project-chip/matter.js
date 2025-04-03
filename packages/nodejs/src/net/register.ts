/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Boot, Network, NoProviderError, singleton } from "#general";
import { NodeJsNetwork } from "./NodeJsNetwork.js";

let closeNetwork: undefined | (() => void);

Boot.init(() => {
    closeNetwork?.();

    // Check if Network singleton is already registered and auto register if not
    try {
        Network.get();
    } catch (error) {
        NoProviderError.accept(error);

        Network.get = singleton(() => new NodeJsNetwork());

        closeNetwork = () => {
            void Network.get().close();
            process.off("beforeExit", closeNetwork!);
        };

        // Ensure network gets cleaned up on exit
        process.on("beforeExit", closeNetwork);
    }
});
