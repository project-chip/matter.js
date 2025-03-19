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

export const RelativePositionNs = SemanticNamespace(
    {
        name: "RelativePosition", id: 0x12,
        details: "The tags contained in this namespace may be used in any domain or context, to indicate an " +
            "association with a position relative to some reference, which must be specified by the user of these " +
            "tags. For example, the position may be relative to a household item, such as a dining table, and the " +
            "user of these tags must indicate that. Note the difference with Chapter 9, Common Position Semantic " +
            "Tag Namespace, which contains tags indicating the position relative to the device.",
        xref: { document: "namespace", section: "11" }
    },

    SemanticTag({ name: "Under", id: 0x0 }),
    SemanticTag({ name: "Next To", id: 0x1, description: "Area in proximity to the point of reference" }),
    SemanticTag({ name: "Around", id: 0x2, description: "The area surrounding the point the reference" }),
    SemanticTag({ name: "On", id: 0x3 }),
    SemanticTag({ name: "Above", id: 0x4 }),
    SemanticTag({ name: "Front Of", id: 0x5 }),
    SemanticTag({ name: "Behind", id: 0x6 })
);

MatterDefinition.children.push(RelativePositionNs);
