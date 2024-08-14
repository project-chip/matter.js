/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import {
    SemanticNamespaceElement as SemanticNamespace,
    SemanticTagElement as SemanticTag
} from "../../elements/index.js";

export const LaundryNs = SemanticNamespace({
    name: "Laundry", id: 0xe, mfgCode: undefined,
    details: "The tags contained in this namespace are restricted for use in the laundry domain and shall NOT be " +
        "used in any other domain or context.",
    xref: { document: "namespace", section: "11" },

    children: [
        SemanticTag({ name: "Normal", id: 0x0 }),
        SemanticTag({ name: "Light Dry", id: 0x1 }),
        SemanticTag({ name: "Extra Dry", id: 0x2 }),
        SemanticTag({ name: "No Dry", id: 0x3 })
    ]
});

Matter.children.push(LaundryNs);
