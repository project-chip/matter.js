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

export const CompassLocationNs = SemanticNamespace(
    {
        name: "CompassLocation", id: 0x3,
        details: "The tags contained in this namespace may be used in any domain or context, to indicate an " +
            "association with a position in a certain compass direction (e.g. an outdoor sensor in the North " +
            "garden). Note the difference with Chapter 3, Common Compass Direction Semantic Tag Namespace.",
        xref: { document: "namespace", section: "4" }
    },

    SemanticTag({ name: "North", id: 0x0 }),
    SemanticTag({ name: "North-East", id: 0x1 }),
    SemanticTag({ name: "East", id: 0x2 }),
    SemanticTag({ name: "South-East", id: 0x3 }),
    SemanticTag({ name: "South", id: 0x4 }),
    SemanticTag({ name: "South-West", id: 0x5 }),
    SemanticTag({ name: "West", id: 0x6 }),
    SemanticTag({ name: "North-West", id: 0x7 })
);

MatterDefinition.children.push(CompassLocationNs);
