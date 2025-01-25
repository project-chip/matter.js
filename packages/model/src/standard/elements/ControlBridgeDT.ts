/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const ControlBridgeDt = DeviceType(
    {
        name: "ControlBridge", id: 0x840, category: "Switches and Controls", classification: "simple",
        details: "A Control Bridge is a controller device that, when bound to a lighting device such as an Extended " +
            "Color Light, is capable of being used to switch the device on or off, adjust the intensity of the " +
            "light being emitted and adjust the color of the light being emitted. In addition, a Control Bridge " +
            "device is capable of being used for setting scenes.",
        xref: { document: "device", section: "6.4" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 2112, revision: 3 } ], element: "attribute" })
    ),
    Requirement({
        name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "6.4.4" }
    }),
    Requirement({
        name: "Identify", id: 0x3, conformance: "M", element: "clientCluster",
        xref: { document: "device", section: "6.4.4" }
    }),
    Requirement({
        name: "Groups", id: 0x4, conformance: "M", element: "clientCluster",
        xref: { document: "device", section: "6.4.4" }
    }),
    Requirement({
        name: "ScenesManagement", id: 0x62, conformance: "P, M", element: "clientCluster",
        xref: { document: "device", section: "6.4.4" }
    }),
    Requirement({
        name: "OnOff", id: 0x6, conformance: "M", element: "clientCluster",
        xref: { document: "device", section: "6.4.4" }
    }),
    Requirement({
        name: "LevelControl", id: 0x8, conformance: "M", element: "clientCluster",
        xref: { document: "device", section: "6.4.4" }
    }),
    Requirement({
        name: "ColorControl", id: 0x300, conformance: "M", element: "clientCluster",
        xref: { document: "device", section: "6.4.4" }
    }),
    Requirement({
        name: "IlluminanceMeasurement", id: 0x400, conformance: "O", element: "clientCluster",
        xref: { document: "device", section: "6.4.4" }
    }),
    Requirement({
        name: "OccupancySensing", id: 0x406, conformance: "O", element: "clientCluster",
        xref: { document: "device", section: "6.4.4" }
    })
);

MatterDefinition.children.push(ControlBridgeDt);
