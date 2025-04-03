/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const AirPurifierDt = DeviceType(
    {
        name: "AirPurifier", id: 0x2d, category: "HVAC", classification: "simple",
        details: "An Air Purifier is a standalone device that is designed to clean the air in a room." +
            "\n" +
            "It is a device that has a fan to control the air speed while it is operating. Optionally, it can " +
            "report on the condition of its filters.",
        xref: { document: "device", section: "9.3" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 45, revision: 2 } ], element: "attribute" })
    ),
    Requirement({
        name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "9.3.5" }
    }),
    Requirement({
        name: "Groups", id: 0x4, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "9.3.5" }
    }),
    Requirement({
        name: "OnOff", id: 0x6, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "9.3.5" }
    }),
    Requirement({
        name: "FanControl", id: 0x202, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "9.3.5" }
    }),
    Requirement({
        name: "HepaFilterMonitoring", id: 0x71, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "9.3.5" }
    }),
    Requirement({
        name: "ActivatedCarbonFilterMonitoring", id: 0x72, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "9.3.5" }
    })
);

MatterDefinition.children.push(AirPurifierDt);
