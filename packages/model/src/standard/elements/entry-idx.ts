/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const entryIdx = Datatype({
    name: "entry-idx", type: "uint16", description: "Entry Index", isSeed: true,
    details: "This is an index for a list data type.",
    xref: { document: "core", section: "7.19.2.33" }
});
MatterDefinition.children.push(entryIdx);
