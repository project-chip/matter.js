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

export const LocationNs = SemanticNamespace(
    {
        name: "Location", id: 0x6,
        details: "The tags contained in this namespace may be used in any domain or context, to indicate an " +
            "association with a location of a device (e.g. an outdoor temperature sensor).",
        xref: { document: "namespace", section: "7" }
    },

    SemanticTag({
        name: "Indoor", id: 0x0,
        description: "Element is indoors or related to indoor equipment/conditions (e.g. the \"indoor\" temperature)."
    }),
    SemanticTag({
        name: "Outdoor", id: 0x1,
        description: "Element is outdoors or related to outdoor equipment/conditions (e.g. the \"outdoor\" temperature)."
    }),
    SemanticTag({
        name: "Inside", id: 0x2,
        description: "Element is located inside the equipment (e.g. a sensor \"inside\" a cabinet)."
    }),
    SemanticTag({
        name: "Outside", id: 0x3,
        description: "Element is located outside the equipment (e.g. a sensor \"outside\" a cabinet)"
    })
);

MatterDefinition.children.push(LocationNs);
