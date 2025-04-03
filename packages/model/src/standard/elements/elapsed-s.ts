/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const elapsedS = Datatype({
    name: "elapsed-s", type: "uint32", description: "Elapsed Time in seconds", isSeed: true,
    details: "Elapsed time in seconds is an unsigned 32-bit value representing the time that has elapsed for an " +
        "operation or other activity, as determined by the definition of the attribute using this type.",
    xref: { document: "core", section: "7.19.2.10" }
});

MatterDefinition.children.push(elapsedS);
