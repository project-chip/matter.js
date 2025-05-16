/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "deviceType", name: "MountedDimmableLoadControl", classification: "simple", xref: "device§5.4",
    details: "A Mounted Dimmable Load Control is a fixed device that provides power to another device that is " +
        "plugged into it, and is capable of being switched on or off and have its level adjusted. The Mounted " +
        "Dimmable Load Control is typically used to control a conventional non-communicating light through " +
        "its mains connection using phase cutting.",

    children: [
        { tag: "requirement", name: "Identify", xref: "device§5.4.4" },
        { tag: "requirement", name: "Groups", xref: "device§5.4.4" },
        { tag: "requirement", name: "ScenesManagement", xref: "device§5.4.4" },
        { tag: "requirement", name: "OnOff", xref: "device§5.4.4" },
        { tag: "requirement", name: "LevelControl", xref: "device§5.4.4" },
        { tag: "requirement", name: "OccupancySensing", xref: "device§5.4.4" }
    ]
});
