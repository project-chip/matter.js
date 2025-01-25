/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const HumiditySensorDt = DeviceType(
    {
        name: "HumiditySensor", id: 0x307, category: "Sensor", classification: "simple",
        details: "A humidity sensor (in most cases a Relative humidity sensor) reports humidity measurements.",
        xref: { document: "device", section: "7.7" }
    },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 775, revision: 2 } ], element: "attribute" })
    ),
    Requirement({
        name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "7.7.4" }
    }),
    Requirement({
        name: "RelativeHumidityMeasurement", id: 0x405, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "7.7.4" }
    })
);

MatterDefinition.children.push(HumiditySensorDt);
