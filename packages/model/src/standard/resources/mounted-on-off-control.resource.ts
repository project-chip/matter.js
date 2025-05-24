/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "deviceType", name: "MountedOnOffControl", classification: "simple", xref: "device§5.3",
    details: "A Mounted On/Off Control is a fixed device that provides power to another device that is plugged " +
        "into it, and is capable of switching that provided power on or off.",

    children: [
        { tag: "requirement", name: "Identify", xref: "device§5.3.4" },
        { tag: "requirement", name: "Groups", xref: "device§5.3.4" },
        { tag: "requirement", name: "ScenesManagement", xref: "device§5.3.4" },
        { tag: "requirement", name: "OnOff", xref: "device§5.3.4" },
        { tag: "requirement", name: "LevelControl", xref: "device§5.3.4" },
        { tag: "requirement", name: "OccupancySensing", xref: "device§5.3.4" }
    ]
});
