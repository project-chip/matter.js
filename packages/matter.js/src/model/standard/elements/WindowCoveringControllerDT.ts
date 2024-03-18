/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

Matter.children.push(DeviceType({
    name: "WindowCoveringController", id: 0x203, classification: "simple",
    details: "A Window Covering Controller is a device that controls an automatic window covering.",
    xref: { document: "device", section: "8.4" },

    children: [
        Requirement({
            name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [Requirement({ name: "DeviceTypeList", default: [ { deviceType: 515, revision: 2 } ], element: "attribute" })]
        }),
        Requirement({
            name: "Identify", id: 0x3, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "8.4.4" },
            children: [Requirement({ name: "QUERY", conformance: "!Matter", element: "feature" })]
        }),
        Requirement({
            name: "Identify", id: 0x3, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "8.4.4" },
            children: [Requirement({ name: "QUERY", conformance: "!Matter", element: "feature" })]
        }),
        Requirement({
            name: "Groups", id: 0x4, conformance: "Awake, O", element: "clientCluster",
            xref: { document: "device", section: "8.4.4" }
        }),
        Requirement({
            name: "Scenes", id: 0x5, conformance: "Awake, O", element: "clientCluster",
            xref: { document: "device", section: "8.4.4" }
        }),
        Requirement({
            name: "WindowCovering", id: 0x102, conformance: "M", element: "clientCluster",
            xref: { document: "device", section: "8.4.4" },
            children: [Requirement({ name: "ABSOLUTEPOSITION", conformance: "!Matter", element: "feature" })]
        })
    ]
}));
