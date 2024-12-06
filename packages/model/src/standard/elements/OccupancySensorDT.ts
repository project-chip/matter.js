/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const OccupancySensorDt = DeviceType(
    {
        name: "OccupancySensor", id: 0x107, category: "Sensor", classification: "simple",
        details: "An Occupancy Sensor is a measurement and sensing device that is capable of measuring and reporting " +
            "the occupancy state in a designated area.",
        xref: { document: "device", section: "7.3" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 263, revision: 3 } ], element: "attribute" })
    ),
    Requirement({
        name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "7.3.4" }
    }),
    Requirement({
        name: "OccupancySensing", id: 0x406, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "7.3.4" }
    })
);

MatterDefinition.children.push(OccupancySensorDt);
