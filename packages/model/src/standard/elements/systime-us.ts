/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const systimeUs = Datatype({
    name: "systime-us", type: "uint64", description: "System Time in microseconds", isSeed: true,
    details: "System time in microseconds is an unsigned 64-bit value representing the number of microseconds " +
        "since boot.",
    xref: { document: "core", section: "7.19.2.8" }
});

MatterDefinition.children.push(systimeUs);
