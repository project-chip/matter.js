/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const fabricIdx = Datatype({
    name: "fabric-idx", type: "uint8", description: "Fabric Index", isSeed: true,
    details: "This is an index that maps to a particular fabric on the node, see Fabric-Index. It is used for:" +
        "\n" +
        "  • the accessing fabric index of an interaction" +
        "\n" +
        "  • the FabricIndex global field in fabric-scoped data",
    xref: { document: "core", section: "7.19.2.20" }
});

MatterDefinition.children.push(fabricIdx);
