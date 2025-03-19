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

export const ElectricalMeasurementNs = SemanticNamespace(
    {
        name: "ElectricalMeasurement", id: 0xa,
        details: "The tags contained in this namespace are restricted for use in the electrical measurement domain and " +
            "shall NOT be used in any other domain or context.",
        xref: { document: "namespace", section: "12" }
    },

    SemanticTag({ name: "DC", id: 0x0, description: "Indicates values measured for a DC load" }),
    SemanticTag({
        name: "AC", id: 0x1,
        description: "Indicates values measured for a single-phase AC load, or values measured for the collective load on a polyphase AC power supply"
    }),
    SemanticTag({
        name: "ACPhase1", id: 0x2,
        description: "Indicates values measured for an AC load on phase 1 of a polyphase power supply"
    }),
    SemanticTag({
        name: "ACPhase2", id: 0x3,
        description: "Indicates values measured for an AC load on phase 2 of a polyphase power supply"
    }),
    SemanticTag({
        name: "ACPhase3", id: 0x4,
        description: "Indicates values measured for an AC load on phase 3 of a polyphase power supply"
    })
);

MatterDefinition.children.push(ElectricalMeasurementNs);
