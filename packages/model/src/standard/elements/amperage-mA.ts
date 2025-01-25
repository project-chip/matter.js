/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const amperageMA = Datatype({
    name: "amperage-mA", type: "int64", description: "Amperage", isSeed: true,
    details: "This type represents amperage measured in milliamps.",
    xref: { document: "core", section: "7.18.2.13" }
});
MatterDefinition.children.push(amperageMA);
