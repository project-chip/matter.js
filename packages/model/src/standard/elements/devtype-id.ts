/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const devtypeId = Datatype({
    name: "devtype-id", type: "uint32", description: "Device Type ID", isSeed: true,
    details: "An identifier that indicates conformance to a device type." +
        "\n" +
        "Device Type IDs shall be a Manufacturer Extensible Identifier. The specifics of its representation " +
        "are described in Data Model Types.",
    xref: { document: "core", section: "7.19.2.25" }
});

MatterDefinition.children.push(devtypeId);
