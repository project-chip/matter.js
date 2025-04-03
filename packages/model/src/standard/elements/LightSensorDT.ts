/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const LightSensorDt = DeviceType(
    {
        name: "LightSensor", id: 0x106, category: "Sensor", classification: "simple",
        details: "A Light Sensor device is a measurement and sensing device that is capable of measuring and reporting " +
            "the intensity of light (illuminance) to which the sensor is being subjected.",
        xref: { document: "device", section: "7.2" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 262, revision: 3 } ], element: "attribute" })
    ),
    Requirement({
        name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "7.2.4" }
    }),
    Requirement({
        name: "IlluminanceMeasurement", id: 0x400, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "7.2.4" }
    })
);

MatterDefinition.children.push(LightSensorDt);
