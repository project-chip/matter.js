/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const SolarPowerDt = DeviceType(
    {
        name: "SolarPower", id: 0x17, category: "Energy", classification: "simple",
        details: "A Solar Power device is a device that allows a solar panel array, which can optionally be comprised " +
            "of a set parallel strings of solar panels, and its associated controller and, if appropriate, " +
            "inverter, to be monitored and controlled by an Energy Management System.",
        xref: { document: "device", section: "14.3" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 23, revision: 1 } ], element: "attribute" })
    ),
    Requirement({
        name: "Identify", id: 0x3, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "14.3.6" }
    })
);

MatterDefinition.children.push(SolarPowerDt);
