/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const powerMW = Datatype({
    name: "power-mW", type: "int64", description: "Power", isSeed: true,
    details: "This type represents power measured in milliwatts.",
    xref: { document: "core", section: "7.19.2.12" }
});
MatterDefinition.children.push(powerMW);
