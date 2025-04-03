/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const energyMWh = Datatype({
    name: "energy-mWh", type: "int64", description: "Energy", isSeed: true,
    details: "This type represents energy measured in milliwatt-hours.",
    xref: { document: "core", section: "7.19.2.15" }
});
MatterDefinition.children.push(energyMWh);
