/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const nodeId = Datatype({
    name: "node-id", type: "uint64", description: "Node ID", isSeed: true,
    details: "A 64-bit ID for a node scoped and unique to a particular fabric as indicated by an accompanying " +
        "fabric-index adjacent instantiation.",
    xref: { document: "core", section: "7.19.2.21" }
});

MatterDefinition.children.push(nodeId);
