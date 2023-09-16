/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "cluster",
    name: "GroupKeyManagement",

    children: [
        {
            tag: "command",
            id: 0x4,
            name: "KeySetReadAllIndices",

            children: [
                // The presence of this field is a CHIP bug in 1.1 branch.
                // They fixed in their main branch...  Remove via conformance
                { tag: "datatype", id: 0x1, name: "GroupKeySetIDs", conformance: "X" },
            ],
        },
    ],
});
