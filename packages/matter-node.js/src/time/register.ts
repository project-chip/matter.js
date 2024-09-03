/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { singleton, Time } from "@project-chip/matter.js-general";
import { NoProviderError } from "@project-chip/matter.js/common";
import { TimeNode } from "./TimeNode.js";

// Check if Time singleton is already registered and has a getTimer logic (so not DefaultTime) and auto register if not
try {
    Time.get().getTimer("Time installation test", 0, () => {
        /* Do nothing */
    });
} catch (error) {
    NoProviderError.accept(error);
    Time.get = singleton(() => new TimeNode());
}
