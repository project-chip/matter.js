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

export const ClosureNs = SemanticNamespace(
    {
        name: "Closure", id: 0x1,
        details: "The tags contained in this namespace may be used in any domain or context, to indicate an " +
            "association with a feature of a Closure, e.g. the button to activate opening a garage door.",
        xref: { document: "namespace", section: "2" }
    },

    SemanticTag({ name: "Opening", id: 0x0, description: "Move toward open position" }),
    SemanticTag({ name: "Closing", id: 0x1, description: "Move toward closed position" }),
    SemanticTag({ name: "Stop", id: 0x2, description: "Stop any movement" })
);

MatterDefinition.children.push(ClosureNs);
