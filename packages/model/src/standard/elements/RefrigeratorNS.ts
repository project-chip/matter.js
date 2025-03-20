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

export const RefrigeratorNs = SemanticNamespace(
    {
        name: "Refrigerator", id: 0x41,
        details: "The tags contained in this namespace are restricted for use in the refrigerator domain and shall NOT " +
            "be used in any other domain or context.",
        xref: { document: "namespace", section: "16" }
    },

    SemanticTag({ name: "Refrigerator", id: 0x0 }),
    SemanticTag({ name: "Freezer", id: 0x1 })
);

MatterDefinition.children.push(RefrigeratorNs);
