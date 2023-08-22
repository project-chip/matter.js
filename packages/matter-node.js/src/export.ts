/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NoProviderError } from "@project-chip/matter.js/common";
import { Time } from "@project-chip/matter.js/time";
import { singleton } from "@project-chip/matter.js/util";
import { TimeNode } from "./time/TimeNode";

// Check if Time singleton is already registered and has a getTimer logic (so not DefaultTime) and auto register if not
try {
    Time.get().getTimer(0, () => {
        /* Do nothing */
    });
} catch (error) {
    if (error instanceof NoProviderError) {
        Time.get = singleton(() => new TimeNode());
    } else {
        throw error;
    }
}

import { Network } from "@project-chip/matter.js/net";
import { NetworkNode } from "./net/NetworkNode";

// Check if Network singleton is already registered and auto register if not
try {
    Network.get();
} catch (error) {
    if (error instanceof NoProviderError) {
        Network.get = singleton(() => new NetworkNode());
        // When we initialize anything we also need to make st is closed correctly
        process.on("SIGINT", () => void Network.get().close());
    } else {
        throw error;
    }
}

import { Crypto } from "@project-chip/matter.js/crypto";
import { CryptoNode } from "./crypto/CryptoNode";

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

export * from "@project-chip/matter.js";
