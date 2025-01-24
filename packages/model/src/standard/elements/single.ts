/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const single = Datatype({
    name: "single", byteSize: 4, description: "Single precision", isSeed: true, metatype: "float",
    xref: { document: "core", section: "7.19.1" }
});
MatterDefinition.children.push(single);
