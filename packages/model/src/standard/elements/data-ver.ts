/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const dataVer = Datatype({
    name: "data-ver", type: "uint32", description: "Data Version", isSeed: true,
    details: "An unsigned number that indicates a Data Version Type.",
    xref: { document: "core", section: "7.19.2.34" }
});
MatterDefinition.children.push(dataVer);
