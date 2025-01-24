/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const uint48 = Datatype({
    name: "uint48", byteSize: 6, description: "Unsigned 48-bit integer", isSeed: true,
    metatype: "integer",
    xref: { document: "core", section: "7.19.1" }
});
MatterDefinition.children.push(uint48);
