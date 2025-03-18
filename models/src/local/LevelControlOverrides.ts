/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
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

        // These are temporary until we move to 1.4 where "Q" is dictated by the spec
        { tag: "attribute", id: 0, name: "CurrentLevel", quality: "Q X N S" },
        { tag: "attribute", id: 1, name: "RemainingTime", quality: "Q" },
        { tag: "attribute", id: 4, name: "CurrentFrequency", quality: "P S Q" },
    ],
});
