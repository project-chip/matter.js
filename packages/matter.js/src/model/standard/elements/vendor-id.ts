/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const vendorId = Datatype({
    name: "vendor-id", type: "uint16", description: "Vendor ID", isSeed: true,
    details: "A Vendor ID." +
        "\n" +
        "Vendor IDs may be used as a prefix in a Manufacturer Extensible Identifier format.",
    xref: { document: "core", section: "7.18.2.24" }
});

Matter.children.push(vendorId);
