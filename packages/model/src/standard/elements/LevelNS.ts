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

export const LevelNs = SemanticNamespace(
    {
        name: "Level", id: 0x5,
        details: "The tags contained in this namespace may be used in any domain or context, to indicate an " +
            "association with a certain level for a feature of a device (e.g. a button to set the speed of a " +
            "fan).",
        xref: { document: "namespace", section: "6" }
    },

    SemanticTag({ name: "Low", id: 0x0 }),
    SemanticTag({ name: "Medium", id: 0x1 }),
    SemanticTag({ name: "High", id: 0x2 })
);

MatterDefinition.children.push(LevelNs);
