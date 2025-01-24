/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const ThermostatDt = DeviceType(
    {
        name: "Thermostat", id: 0x301, category: "HVAC", classification: "simple",
        details: "A Thermostat device is capable of having either built-in or separate sensors for temperature, " +
            "humidity or occupancy. It allows the desired temperature to be set either remotely or locally. The " +
            "thermostat is capable of sending heating and/or cooling requirement notifications to a " +
            "heating/cooling unit (for example, an indoor air handler) or is capable of including a mechanism to " +
            "control a heating or cooling unit directly.",
        xref: { document: "device", section: "9.1" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 769, revision: 4 } ], element: "attribute" })
    ),
    Requirement({
        name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "9.1.4" }
    }),
    Requirement({
        name: "Groups", id: 0x4, conformance: "Active", element: "serverCluster",
        xref: { document: "device", section: "9.1.4" }
    }),

    Requirement(
        {
            name: "Thermostat", id: 0x201, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "9.1.4" }
        },
        Requirement({ name: "SCHEDULECONFIGURATION", conformance: "X", element: "feature" }),
        Requirement({ name: "AlarmMask", conformance: "X", element: "attribute" }),
        Requirement({ name: "GetRelayStatusLog", conformance: "X", element: "command" }),
        Requirement({ name: "GetRelayStatusLogResponse", conformance: "X", element: "command" })
    ),

    Requirement({
        name: "ThermostatUserInterfaceConfiguration", id: 0x204, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "9.1.4" }
    }),
    Requirement({
        name: "EnergyPreference", id: 0x9b, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "9.1.4" }
    }),
    Requirement({
        name: "FanControl", id: 0x202, conformance: "O", element: "clientCluster",
        xref: { document: "device", section: "9.1.4" }
    }),
    Requirement({
        name: "TemperatureMeasurement", id: 0x402, conformance: "O", element: "clientCluster",
        xref: { document: "device", section: "9.1.4" }
    }),
    Requirement({
        name: "RelativeHumidityMeasurement", id: 0x405, conformance: "O", element: "clientCluster",
        xref: { document: "device", section: "9.1.4" }
    }),
    Requirement({
        name: "OccupancySensing", id: 0x406, conformance: "O", element: "clientCluster",
        xref: { document: "device", section: "9.1.4" }
    })
);

MatterDefinition.children.push(ThermostatDt);
