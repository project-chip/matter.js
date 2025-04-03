/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DescriptorServer } from "#behaviors/descriptor";
import { OtaSoftwareUpdateProviderBehavior } from "./OtaSoftwareUpdateProviderBehavior.js";

/**
 * This is the default server implementation of {@link OtaSoftwareUpdateProviderBehavior}.
 */
export class OtaSoftwareUpdateProviderServer extends OtaSoftwareUpdateProviderBehavior {
    override async initialize() {
        (await this.agent.load(DescriptorServer)).addDeviceTypes("OtaProvider");
    }
}
