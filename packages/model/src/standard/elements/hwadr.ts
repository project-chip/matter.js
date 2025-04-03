/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const hwadr = Datatype({
    name: "hwadr", type: "octstr", description: "Hardware Address", isSeed: true,
    details: "The Hardware Address data type shall be either a 48-bit IEEE MAC Address or a 64-bit IEEE MAC " +
        "Address (e.g. EUI-64). The order of bytes is Big-Endian or display mode, where the first byte in the " +
        "string is the left most or highest order byte.",
    xref: { document: "core", section: "7.19.2.41" }
});

MatterDefinition.children.push(hwadr);
