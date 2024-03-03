/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NoProviderError } from "@project-chip/matter.js/common";
import { Time } from "@project-chip/matter.js/time";
import { singleton } from "@project-chip/matter.js/util";
import { TimeNode } from "./TimeNode.js";

// Check if Time singleton is already registered and has a getTimer logic (so not DefaultTime) and auto register if not
try {
    Time.get().getTimer("Time installation test", 0, () => {
        /* Do nothing */
    });
} catch (error) {
    if (error instanceof NoProviderError) {
        Time.get = singleton(() => new TimeNode());
    } else {
        throw error;
    }
}
