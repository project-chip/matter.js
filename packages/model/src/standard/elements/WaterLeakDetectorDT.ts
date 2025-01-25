/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const WaterLeakDetectorDt = DeviceType(
    {
        name: "WaterLeakDetector", id: 0x43, category: "Sensor", classification: "simple",
        details: "This defines conformance to the Water Leak Detector device type.",
        xref: { document: "device", section: "7.12" }
    },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 67, revision: 1 } ], element: "attribute" })
    ),
    Requirement({
        name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "7.12.4" }
    }),

    Requirement(
        {
            name: "BooleanState", id: 0x45, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "7.12.4" }
        },
        Requirement({ name: "StateChange", conformance: "M", element: "event" })
    ),

    Requirement({
        name: "BooleanStateConfiguration", id: 0x80, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "7.12.4" }
    })
);

MatterDefinition.children.push(WaterLeakDetectorDt);
