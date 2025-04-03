/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const systimeMs = Datatype({
    name: "systime-ms", type: "uint64", description: "System Time in milliseconds", isSeed: true,
    details: "System time in milliseconds is an unsigned 64-bit value representing the number of milliseconds " +
        "since boot." +
        "\n" +
        "This type is employed for compatibility reasons.",
    xref: { document: "core", section: "7.19.2.9" }
});

MatterDefinition.children.push(systimeMs);
