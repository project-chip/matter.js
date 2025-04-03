/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const map16 = Datatype({
    name: "map16", byteSize: 2, description: "16-bit bitmap", isSeed: true, metatype: "bitmap",
    xref: { document: "core", section: "7.19.1" }
});
MatterDefinition.children.push(map16);
