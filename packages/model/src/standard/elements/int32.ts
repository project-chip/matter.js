/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const int32 = Datatype({
    name: "int32", byteSize: 4, description: "Signed 32-bit integer", isSeed: true, metatype: "integer",
    xref: { document: "core", section: "7.18.1" }
});
MatterDefinition.children.push(int32);
