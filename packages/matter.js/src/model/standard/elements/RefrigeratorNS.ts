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

export const RefrigeratorNs = SemanticNamespace({
    name: "Refrigerator", id: 0x41, mfgCode: undefined,
    details: "The tags contained in this namespace are restricted for use in the refrigerator domain and shall " +
        "NOT be used in any other domain or context.",
    xref: { document: "namespace", section: "13" },
    children: [SemanticTag({ name: "Refrigerator", id: 0x0 }), SemanticTag({ name: "Freezer", id: 0x1 })]
});

Matter.children.push(RefrigeratorNs);
