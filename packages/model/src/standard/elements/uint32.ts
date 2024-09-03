/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const uint32 = Datatype({
    name: "uint32", byteSize: 4, description: "Unsigned 32-bit integer", isSeed: true,
    metatype: "integer",
    xref: { document: "core", section: "7.18.1" }
});
Matter.children.push(uint32);
