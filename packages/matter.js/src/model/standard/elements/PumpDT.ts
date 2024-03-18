/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

Matter.children.push(DeviceType({
    name: "Pump", id: 0x303, classification: "simple",
    details: "A Pump device is a pump that may have variable speed. It may have optional built-in sensors and a " +
        "regulation mechanism. It is typically used for pumping fluids like water.",
    xref: { document: "device", section: "5.3" },

    children: [
        Requirement({
            name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [Requirement({ name: "DeviceTypeList", default: [ { deviceType: 771, revision: 2 } ], element: "attribute" })]
        }),
        Requirement({
            name: "OnOff", id: 0x6, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "5.3.4" }
        }),
        Requirement({
            name: "PumpConfigurationAndControl", id: 0x200, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "5.3.4" }
        }),
        Requirement({
            name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "5.3.4" },
            children: [Requirement({ name: "QUERY", conformance: "!Matter", element: "feature" })]
        }),
        Requirement({
            name: "LevelControl", id: 0x8, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "5.3.4" }
        }),
        Requirement({
            name: "Scenes", id: 0x5, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "5.3.4" }
        }),
        Requirement({
            name: "Groups", id: 0x4, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "5.3.4" }
        }),
        Requirement({
            name: "TemperatureMeasurement", id: 0x402, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "5.3.4" }
        }),
        Requirement({
            name: "PressureMeasurement", id: 0x403, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "5.3.4" }
        }),
        Requirement({
            name: "FlowMeasurement", id: 0x404, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "5.3.4" }
        }),
        Requirement({
            name: "TemperatureMeasurement", id: 0x402, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "5.3.4" }
        }),
        Requirement({
            name: "PressureMeasurement", id: 0x403, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "5.3.4" }
        }),
        Requirement({
            name: "FlowMeasurement", id: 0x404, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "5.3.4" }
        }),
        Requirement({
            name: "OccupancySensing", id: 0x406, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "5.3.4" }
        })
    ]
}));
