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

export const NumberNs = SemanticNamespace(
    {
        name: "Number", id: 0x7,
        details: "The tags contained in this namespace may be used in any domain or context, to indicate an " +
            "association with a certain numeric feature of a device (e.g. a numeric input button).",
        xref: { document: "namespace", section: "8" }
    },

    SemanticTag({ name: "Zero", id: 0x0 }),
    SemanticTag({ name: "One", id: 0x1 }),
    SemanticTag({ name: "Two", id: 0x2 }),
    SemanticTag({ name: "Three", id: 0x3 }),
    SemanticTag({ name: "Four", id: 0x4 }),
    SemanticTag({ name: "Five", id: 0x5 }),
    SemanticTag({ name: "Six", id: 0x6 }),
    SemanticTag({ name: "Seven", id: 0x7 }),
    SemanticTag({ name: "Eight", id: 0x8 }),
    SemanticTag({ name: "Nine", id: 0x9 }),
    SemanticTag({ name: "Ten", id: 0xa })
);

MatterDefinition.children.push(NumberNs);
