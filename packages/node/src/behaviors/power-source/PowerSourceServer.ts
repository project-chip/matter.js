/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DescriptorServer } from "#behaviors/descriptor";
import { PowerSourceBehavior } from "./PowerSourceBehavior.js";

/**
 * This is the default server implementation of {@link PowerSourceBehavior}.
 */
export class PowerSourceServer extends PowerSourceBehavior {
    override async initialize() {
        (await this.agent.load(DescriptorServer)).addDeviceTypes("PowerSource");
    }
}
