/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "cluster",
    name: "ModeSelect",

    children: [
        // Change type from enum16 to uint16 for both Namespace values. The only reason for this is to get rid of the
        // CHILDLESS_ENUM validation error.  It's absolutely unclear where these enum values come from or if there even
        // is a standard definition for them. This doesn't affect the generated output so this should be safe.
        { tag: "attribute", id: 0x1, name: "StandardNamespace", type: "uint16" },
        {
            tag: "datatype",
            name: "SemanticTagStruct",
            type: "struct",
            children: [
                { tag: "field", name: "MfgCode", id: 0x0, type: "vendor-id" },
                { tag: "field", name: "Value", id: 0x1, type: "uint16" },
            ],
        },
    ],
});
