/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const percent = Datatype({
    name: "percent", type: "uint8", description: "Percentage units 1%", isSeed: true,
    xref: { document: "core", section: "7.19.2" }
});
MatterDefinition.children.push(percent);
