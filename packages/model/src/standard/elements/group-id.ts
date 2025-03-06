/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const groupId = Datatype({
    name: "group-id", type: "uint16", description: "Group ID", isSeed: true,
    details: "A 16-bit ID for a group scoped to a particular fabric as indicated by an accompanying fabric index " +
        "adjacent instantiation.",
    xref: { document: "core", section: "7.19.2.22" }
});

MatterDefinition.children.push(groupId);
