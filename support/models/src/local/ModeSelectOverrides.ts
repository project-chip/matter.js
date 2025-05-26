/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "cluster",
    name: "ModeSelect",

    children: [
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
