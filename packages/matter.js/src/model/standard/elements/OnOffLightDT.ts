/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

Matter.children.push(DeviceType({
    name: "OnOffLight", id: 0x100, classification: "simple",
    details: "The On/Off Light is a lighting device that is capable of being switched on or off by means of a " +
        "bound controller device such as an On/Off Light Switch or a Dimmer Switch. In addition, an on/off " +
        "light is also capable of being switched by means of a bound occupancy sensor.",
    xref: { document: "device", section: "4.1" },

    children: [
        Requirement({
            name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [Requirement({ name: "DeviceTypeList", default: [ { deviceType: 256, revision: 2 } ], element: "attribute" })]
        }),

        Requirement({
            name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "4.1.4" },
            children: [
                Requirement({ name: "QUERY", conformance: "!Matter", element: "feature" }),
                Requirement({ name: "TriggerEffect", conformance: "M", element: "command" })
            ]
        }),

        Requirement({
            name: "Groups", id: 0x4, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "4.1.4" }
        }),

        Requirement({
            name: "Scenes", id: 0x5, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "4.1.4" },
            children: [
                Requirement({ name: "EnhancedAddScene", conformance: "M", element: "command" }),
                Requirement({ name: "EnhancedViewScene", conformance: "M", element: "command" }),
                Requirement({ name: "CopyScene", conformance: "M", element: "command" })
            ]
        }),

        Requirement({
            name: "OnOff", id: 0x6, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "4.1.4" },
            children: [Requirement({ name: "LT", conformance: "M", element: "feature" })]
        }),

        Requirement({
            name: "LevelControl", id: 0x8, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "4.1.4" },

            children: [
                Requirement({ name: "OO", conformance: "M", element: "feature" }),
                Requirement({ name: "LT", conformance: "M", element: "feature" }),
                Requirement({ name: "CurrentLevel", constraint: "1 to 254", element: "attribute" }),
                Requirement({ name: "MinLevel", constraint: "1", element: "attribute" }),
                Requirement({ name: "MaxLevel", constraint: "254", element: "attribute" })
            ]
        }),

        Requirement({
            name: "OccupancySensing", id: 0x406, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "4.1.4" }
        })
    ]
}));
