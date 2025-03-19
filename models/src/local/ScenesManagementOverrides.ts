/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "cluster",
    name: "ScenesManagement",

    children: [
        // Field name for AddScene and ViewSceneResponse needs to be adjusted to match the 1.4 spec
        // ExtensionFieldSetStruct -> ExtensionFieldSets
        {
            tag: "command",
            id: 0x00,
            name: "AddScene",
            children: [{ tag: "field", id: 0x4, name: "ExtensionFieldSets" }],
        },
        {
            tag: "command",
            id: 0x01,
            name: "ViewSceneResponse",
            children: [{ tag: "field", id: 0x5, name: "ExtensionFieldSets" }],
        },
    ],
});
