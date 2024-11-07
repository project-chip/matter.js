/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "cluster",
    name: "LevelControl",

    children: [
        // Documentation for "on/off" variants is in prose.  They have the same structure as non-on/off commands
        { tag: "command", id: 4, name: "MoveToLevelWithOnOff", type: "MoveToLevel" },
        { tag: "command", id: 5, name: "MoveWithOnOff", type: "Move" },
        { tag: "command", id: 6, name: "StepWithOnOff", type: "Step" },
        { tag: "command", id: 7, name: "StopWithOnOff", type: "Stop" },

        // Temporarily declare OptionsMask as optional fields because current Google Firmwares do not send them.
        // Will be adjusted back once fixed by Google
        {
            tag: "command",
            id: 0,
            name: "MoveToLevel",
            children: [
                { tag: "field", id: 2, name: "OptionsMask", conformance: "O" },
                { tag: "field", id: 3, name: "OptionsOverride", conformance: "O" },
            ],
        },
    ],
});
