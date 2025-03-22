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

export const PowerSourceNs = SemanticNamespace(
    {
        name: "PowerSource", id: 0xf,
        details: "The tags contained in this namespace are restricted for use in the power source domain and shall NOT " +
            "be used in any other domain or context.",
        xref: { document: "namespace", section: "15" }
    },

    SemanticTag({
        name: "Unknown", id: 0x0,
        description: "The Power Source cluster is related to power provided from an unknown source"
    }),

    SemanticTag({
        name: "Grid", id: 0x1,
        description: "The Power Source cluster is related to power provided from the electrical grid",
        details: "Power Source clusters with this tag shall implement the WIRED feature.",
        xref: { document: "namespace", section: "15.1" }
    }),

    SemanticTag({
        name: "Solar", id: 0x2,
        description: "The Power Source cluster is related to power provided from a solar panel array",
        details: "Power Source clusters with this tag shall implement the WIRED feature.",
        xref: { document: "namespace", section: "15.2" }
    }),

    SemanticTag({
        name: "Battery", id: 0x3,
        description: "The Power Source cluster is related to power provided from a battery",
        details: "Power Source clusters with this tag shall implement the BAT feature.",
        xref: { document: "namespace", section: "15.3" }
    }),

    SemanticTag({
        name: "EV", id: 0x4,
        description: "The Power Source cluster is related to power provided from an electric vehicle",
        details: "Power Source clusters with this tag shall implement the BAT feature.",
        xref: { document: "namespace", section: "15.4" }
    })
);

MatterDefinition.children.push(PowerSourceNs);
