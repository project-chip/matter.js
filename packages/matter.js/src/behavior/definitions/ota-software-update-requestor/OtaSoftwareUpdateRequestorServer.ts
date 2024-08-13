/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DescriptorServer } from "../descriptor/DescriptorServer.js";
import { OtaSoftwareUpdateRequestorBehavior } from "./OtaSoftwareUpdateRequestorBehavior.js";

/**
 * This is the default server implementation of {@link OtaSoftwareUpdateRequestorBehavior}.
 */
export class OtaSoftwareUpdateRequestorServer extends OtaSoftwareUpdateRequestorBehavior {
    override initialize() {
        this.agent.get(DescriptorServer).addDeviceTypes("OtaRequestor");
    }
}
