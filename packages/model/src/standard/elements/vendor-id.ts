/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const vendorId = Datatype({
    name: "vendor-id", type: "uint16", description: "Vendor ID", isSeed: true,
    details: "A Vendor ID." +
        "\n" +
        "Vendor IDs may be used as a prefix in a Manufacturer Extensible Identifier format.",
    xref: { document: "core", section: "7.19.2.24" }
});

MatterDefinition.children.push(vendorId);
