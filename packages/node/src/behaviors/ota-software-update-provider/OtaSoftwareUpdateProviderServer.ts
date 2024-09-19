/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DescriptorServer } from "#behaviors/descriptor";
import { OtaSoftwareUpdateProviderBehavior } from "./OtaSoftwareUpdateProviderBehavior.js";

/**
 * This is the default server implementation of {@link OtaSoftwareUpdateProviderBehavior}.
 */
export class OtaSoftwareUpdateProviderServer extends OtaSoftwareUpdateProviderBehavior {
    override initialize() {
        this.agent.get(DescriptorServer).addDeviceTypes("OtaProvider");
    }
}
