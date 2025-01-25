/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DescriptorServer } from "#behaviors/descriptor";
import { OtaSoftwareUpdateRequestorBehavior } from "./OtaSoftwareUpdateRequestorBehavior.js";

/**
 * This is the default server implementation of {@link OtaSoftwareUpdateRequestorBehavior}.
 */
export class OtaSoftwareUpdateRequestorServer extends OtaSoftwareUpdateRequestorBehavior {
    override async initialize() {
        (await this.agent.load(DescriptorServer)).addDeviceTypes("OtaRequestor");
    }
}
