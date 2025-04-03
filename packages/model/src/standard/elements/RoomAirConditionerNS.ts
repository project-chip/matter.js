/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    SemanticNamespaceElement as SemanticNamespace,
    SemanticTagElement as SemanticTag
} from "../../elements/index.js";

export const RoomAirConditionerNs = SemanticNamespace(
    {
        name: "RoomAirConditioner", id: 0x42,
        details: "The tags contained in this namespace are restricted for use in the room air conditioner domain and " +
            "shall NOT be used in any other domain or context.",
        xref: { document: "namespace", section: "17" }
    },

    SemanticTag({ name: "Evaporator", id: 0x0 }),
    SemanticTag({ name: "Condenser", id: 0x1 })
);

MatterDefinition.children.push(RoomAirConditionerNs);
