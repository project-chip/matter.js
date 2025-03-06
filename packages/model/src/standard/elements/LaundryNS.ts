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

export const LaundryNs = SemanticNamespace(
    {
        name: "Laundry", id: 0xe,
        details: "The tags contained in this namespace are restricted for use in the laundry domain and shall NOT be " +
            "used in any other domain or context.",
        xref: { document: "namespace", section: "14" }
    },

    SemanticTag({ name: "Normal", id: 0x0 }),
    SemanticTag({ name: "Light Dry", id: 0x1 }),
    SemanticTag({ name: "Extra Dry", id: 0x2 }),
    SemanticTag({ name: "No Dry", id: 0x3 })
);

MatterDefinition.children.push(LaundryNs);
