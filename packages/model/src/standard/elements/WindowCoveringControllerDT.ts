/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const WindowCoveringControllerDt = DeviceType(
    {
        name: "WindowCoveringController", id: 0x203, category: "Closure", classification: "simple",
        details: "A Window Covering Controller is a device that controls an automatic window covering.",
        xref: { document: "device", section: "8.4" }
    },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 515, revision: 3 } ], element: "attribute" })
    ),
    Requirement({
        name: "Identify", id: 0x3, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "8.4.4" }
    }),
    Requirement({
        name: "Identify", id: 0x3, conformance: "O", element: "clientCluster",
        xref: { document: "device", section: "8.4.4" }
    }),
    Requirement({
        name: "Groups", id: 0x4, conformance: "Active, O", element: "clientCluster",
        xref: { document: "device", section: "8.4.4" }
    }),
    Requirement({
        name: "WindowCovering", id: 0x102, conformance: "M", element: "clientCluster",
        xref: { document: "device", section: "8.4.4" }
    })
);

MatterDefinition.children.push(WindowCoveringControllerDt);
