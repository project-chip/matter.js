/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

Matter.children.push(DeviceType({
    name: "LightSensor", id: 0x106, classification: "simple",
    details: "A Light Sensor device is a measurement and sensing device that is capable of measuring and " +
        "reporting the intensity of light (illuminance) to which the sensor is being subjected.",
    xref: { document: "device", section: "7.2" },

    children: [
        Requirement({
            name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [Requirement({ name: "DeviceTypeList", default: [ { deviceType: 262, revision: 2 } ], element: "attribute" })]
        }),
        Requirement({
            name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "7.2.4" },
            children: [Requirement({ name: "QUERY", conformance: "!Matter", element: "feature" })]
        }),
        Requirement({
            name: "Groups", id: 0x4, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "7.2.4" }
        }),
        Requirement({
            name: "IlluminanceMeasurement", id: 0x400, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "7.2.4" }
        })
    ]
}));
