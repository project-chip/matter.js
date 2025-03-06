/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { FieldElement as Field } from "../../elements/index.js";

export const FabricIndex = Field({
    name: "FabricIndex", id: 0xfe, type: "fabric-idx", access: "R F V", conformance: "M",
    constraint: "1 to 254", isSeed: true,

    details: "This field shall be present for fabric-scoped data. This field does not have to be defined " +
        "explicitly in the field table for fabric-scoped data." +
        "\n" +
        "This field shall NOT be present in a write interaction. For a write interaction, the server shall " +
        "provide the value of the accessing fabric-index as the FabricIndex field value to processing logic, " +
        "after receipt of the interaction. For a read interaction this field shall be included in all " +
        "reported data that is defined as fabric-scoped.",

    xref: { document: "core", section: "7.13.6" }
});

MatterDefinition.children.push(FabricIndex);
