/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const RoomAirConditionerDt = DeviceType(
    {
        name: "RoomAirConditioner", id: 0x72, category: "Appliances", classification: "simple",
        details: "This defines conformance to the Room Air Conditioner device type." +
            "\n" +
            "A Room Air Conditioner is a device with the primary function of controlling the air temperature in a " +
            "single room.",
        xref: { document: "device", section: "13.3" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 114, revision: 2 } ], element: "attribute" })
    ),
    Requirement({
        name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "13.3.6" }
    }),
    Requirement({
        name: "Groups", id: 0x4, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "13.3.6" }
    }),
    Requirement({
        name: "ScenesManagement", id: 0x62, conformance: "P, O", element: "serverCluster",
        xref: { document: "device", section: "13.3.6" }
    }),

    Requirement(
        {
            name: "OnOff", id: 0x6, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "13.3.6" }
        },
        Requirement({ name: "DEADFRONTBEHAVIOR", conformance: "M", element: "feature" })
    ),

    Requirement({
        name: "Thermostat", id: 0x201, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "13.3.6" }
    }),
    Requirement({
        name: "FanControl", id: 0x202, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "13.3.6" }
    }),

    Requirement(
        {
            name: "ThermostatUserInterfaceConfiguration", id: 0x204, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "13.3.6" }
        },
        Requirement({ name: "KeypadLockout", conformance: "O", element: "attribute" })
    ),

    Requirement({
        name: "TemperatureMeasurement", id: 0x402, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "13.3.6" }
    }),
    Requirement({
        name: "RelativeHumidityMeasurement", id: 0x405, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "13.3.6" }
    })
);

MatterDefinition.children.push(RoomAirConditionerDt);
