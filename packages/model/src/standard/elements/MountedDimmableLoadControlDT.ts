/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const MountedDimmableLoadControlDt = DeviceType(
    {
        name: "MountedDimmableLoadControl", id: 0x110, category: "Smart Plugs/Outlets and other Actuators",
        classification: "simple",
        details: "A Mounted Dimmable Load Control is a fixed device that provides power to another device that is " +
            "plugged into it, and is capable of being switched on or off and have its level adjusted. The Mounted " +
            "Dimmable Load Control is typically used to control a conventional non-communicating light through " +
            "its mains connection using phase cutting.",
        xref: { document: "device", section: "5.4" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 272, revision: 1 } ], element: "attribute" })
    ),

    Requirement(
        {
            name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "5.4.4" }
        },
        Requirement({ name: "TriggerEffect", conformance: "M", element: "command" })
    ),

    Requirement({
        name: "Groups", id: 0x4, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "5.4.4" }
    }),

    Requirement(
        {
            name: "ScenesManagement", id: 0x62, conformance: "P, M", element: "serverCluster",
            xref: { document: "device", section: "5.4.4" }
        },
        Requirement({ name: "CopyScene", conformance: "P, M", element: "command" })
    ),

    Requirement(
        {
            name: "OnOff", id: 0x6, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "5.4.4" }
        },
        Requirement({ name: "LIGHTING", conformance: "M", element: "feature" })
    ),

    Requirement(
        {
            name: "LevelControl", id: 0x8, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "5.4.4" }
        },
        Requirement({ name: "ONOFF", conformance: "M", element: "feature" }),
        Requirement({ name: "LIGHTING", conformance: "M", element: "feature" }),
        Requirement({ name: "CurrentLevel", constraint: "1 to 254", element: "attribute" }),
        Requirement({ name: "MinLevel", constraint: "1", element: "attribute" }),
        Requirement({ name: "MaxLevel", constraint: "254", element: "attribute" })
    ),

    Requirement({
        name: "OccupancySensing", id: 0x406, conformance: "O", element: "clientCluster",
        xref: { document: "device", section: "5.4.4" }
    })
);

MatterDefinition.children.push(MountedDimmableLoadControlDt);
