/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

Matter.children.push(DeviceType({
    name: "Thermostat", id: 0x301, classification: "simple",
    details: "A Thermostat device is capable of having either built-in or separate sensors for temperature, " +
        "humidity or occupancy. It allows the desired temperature to be set either remotely or locally. The " +
        "thermostat is capable of sending heating and/or cooling requirement notifications to a " +
        "heating/cooling unit (for example, an indoor air handler) or is capable of including a mechanism to " +
        "control a heating or cooling unit directly.",
    xref: { document: "device", section: "9.2" },

    children: [
        Requirement({
            name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [Requirement({ name: "DeviceTypeList", default: [ { deviceType: 769, revision: 2 } ], element: "attribute" })]
        }),
        Requirement({
            name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "9.2.4" },
            children: [Requirement({ name: "QUERY", conformance: "Zigbee", element: "feature" })]
        }),
        Requirement({
            name: "Groups", id: 0x4, conformance: "Awake", element: "serverCluster",
            xref: { document: "device", section: "9.2.4" }
        }),

        Requirement({
            name: "Thermostat", id: 0x201, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "9.2.4" },

            children: [
                Requirement({ name: "SCHEDULECONFIGURATION", conformance: "[Zigbee], P", element: "feature" }),
                Requirement({ name: "AlarmMask", conformance: "[Zigbee]", element: "attribute" }),
                Requirement({ name: "GetRelayStatusLog", conformance: "[Zigbee]", element: "command" }),
                Requirement({ name: "GetRelayStatusLogResponse", conformance: "[Zigbee]", element: "command" })
            ]
        }),

        Requirement({
            name: "Scenes", id: 0x5, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "9.2.4" }
        }),
        Requirement({
            name: "ThermostatUserInterfaceConfiguration", id: 0x204, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "9.2.4" }
        }),
        Requirement({
            name: "RelativeHumidityMeasurement", id: 0x405, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "9.2.4" }
        }),
        Requirement({
            name: "TimeSync", id: 0x38, conformance: "P, O", element: "serverCluster",
            xref: { document: "device", section: "9.2.4" }
        }),
        Requirement({
            name: "TimeSync", id: 0x38, conformance: "P, O", element: "clientCluster",
            xref: { document: "device", section: "9.2.4" }
        }),
        Requirement({
            name: "FanControl", id: 0x202, conformance: "P, O", element: "clientCluster",
            xref: { document: "device", section: "9.2.4" }
        }),
        Requirement({
            name: "TemperatureMeasurement", id: 0x402, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "9.2.4" }
        }),
        Requirement({
            name: "OccupancySensing", id: 0x406, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "9.2.4" }
        })
    ]
}));
