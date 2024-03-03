/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

Matter.children.push(DeviceType({
    name: "PressureSensor", id: 0x305, classification: "simple",
    details: "A Pressure Sensor device measures and reports the pressure of a fluid.",
    xref: { document: "device", section: "7.5" },

    children: [
        Requirement({
            name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [Requirement({ name: "DeviceTypeList", default: [ { deviceType: 773, revision: 2 } ], element: "attribute" })]
        }),
        Requirement({
            name: "PressureMeasurement", id: 0x403, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "7.5.4" }
        }),
        Requirement({
            name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "7.5.4" },
            children: [Requirement({ name: "QUERY", conformance: "!Matter", element: "feature" })]
        })
    ]
}));
