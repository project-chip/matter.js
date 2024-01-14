/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { VendorId } from "../../../datatype/VendorId.js";
import { Diagnostic } from "../../../log/Diagnostic.js";
import { Logger } from "../../../log/Logger.js";
import { BasicInformationBehavior } from "./BasicInformationBehavior.js";

const logger = Logger.get("BasicInformationServer");

/**
 * This is the default server implementation of BasicInformationBehavior.
 */
export class BasicInformationServer extends BasicInformationBehavior {
    override initialize() {
        const state = this.state;

        const defaultsSet = {} as Record<string, any>;

        function setDefault<T extends keyof typeof state>(name: T, value: (typeof state)[T]) {
            if (state[name] === undefined) {
                state[name] = value;
                defaultsSet[name] = value;
            }
        }

        // These are development defaults, we log a warning when we set them
        setDefault("vendorId", VendorId(0xfff1));
        setDefault("vendorName", "Matter.js Test Vendor");
        setDefault("productId", 0x8000);
        setDefault("productName", "Matter.js Test Product");
        setDefault("hardwareVersion", 0);
        setDefault("softwareVersion", 0);

        // Warn if we used development defaults
        if (Object.keys(defaultsSet).length) {
            logger.warn("Using development values for some BasicInformation attributes:", Diagnostic.dict(defaultsSet));
        }

        // These defaults are appropriate for development or production so do not warn
        setDefault("productLabel", state.productName);
        setDefault("nodeLabel", state.productName);
        setDefault("dataModelRevision", 1);
        setDefault("hardwareVersionString", state.hardwareVersion.toString());
        setDefault("softwareVersionString", state.softwareVersion.toString());
    }
}
