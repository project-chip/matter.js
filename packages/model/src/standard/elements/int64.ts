/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const int64 = Datatype({
    name: "int64", byteSize: 8, description: "Signed 64-bit integer", isSeed: true, metatype: "integer",
    xref: { document: "core", section: "7.19.1" }
});
MatterDefinition.children.push(int64);
