/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Environment, Environmental } from "#general";
import type { Discovery } from "./Discovery.js";

/**
 * Ongoing node discoveries registered with the environment.
 */
export class ActiveDiscoveries extends Set<Discovery<any>> {
    static [Environmental.create](env: Environment) {
        const instance = new ActiveDiscoveries();
        env.set(ActiveDiscoveries, instance);
        return instance;
    }
}
