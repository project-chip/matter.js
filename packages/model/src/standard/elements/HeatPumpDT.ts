/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const HeatPumpDt = DeviceType(
    {
        name: "HeatPump", id: 0x309, category: "Energy", classification: "simple",

        details: "A Heat Pump device is a device that uses electrical energy to heat either spaces or water tanks " +
            "using ground, water or air as the heat source. These typically can heat the air or can pump water " +
            "via central heating radiators or underfloor heating systems. It is typical to also heat hot water " +
            "and store the heat in a hot water tank." +
            "\n" +
            "Note that the Water Heater device type can also be heated by a heat pump and has similar " +
            "requirements, but that cannot be used for space heating.",

        xref: { document: "device", section: "14.5" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 777, revision: 1 } ], element: "attribute" })
    ),
    Requirement({
        name: "Identify", id: 0x3, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "14.5.6" }
    }),
    Requirement({
        name: "Thermostat", id: 0x201, conformance: "O", element: "clientCluster",
        xref: { document: "device", section: "14.5.6" }
    })
);

MatterDefinition.children.push(HeatPumpDt);
