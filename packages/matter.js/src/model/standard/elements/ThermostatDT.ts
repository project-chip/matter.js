/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "Thermostat", id: 0x301, classification: "simple",

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",

            children: [{
                tag: "datatype", name: "DeviceTypeStruct", type: "struct",
                children: [
                    { tag: "datatype", name: "DeviceType", type: "devtype-id", default: 769 },
                    { tag: "datatype", name: "Revision", type: "uint16", default: 2 }
                ]
            }]
        },

        {
            tag: "requirement", name: "Identify", id: 0x3, element: "serverCluster",
            xref: { document: "device", section: "9.2.4" },
            children: [{ tag: "requirement", name: "Query", element: "feature" }]
        },
        {
            tag: "requirement", name: "Groups", id: 0x4, element: "serverCluster",
            xref: { document: "device", section: "9.2.4" }
        },

        {
            tag: "requirement", name: "Thermostat", id: 0x201, element: "serverCluster",
            xref: { document: "device", section: "9.2.4" },

            children: [
                { tag: "requirement", name: "ScheduleConfiguration", element: "feature" },
                { tag: "requirement", name: "AlarmMask", element: "attribute" },
                { tag: "requirement", name: "GetRelayStatusLog", element: "command" },
                { tag: "requirement", name: "GetRelayStatusLogResponse", element: "command" }
            ]
        },

        {
            tag: "requirement", name: "Scenes", id: 0x5, element: "serverCluster",
            xref: { document: "device", section: "9.2.4" }
        },
        {
            tag: "requirement", name: "Alarms", id: 0x9, element: "serverCluster",
            xref: { document: "device", section: "9.2.4" }
        },
        {
            tag: "requirement", name: "ThermostatUserInterfaceConfiguration", id: 0x204,
            element: "serverCluster",
            xref: { document: "device", section: "9.2.4" }
        },
        {
            tag: "requirement", name: "RelativeHumidityMeasurement", id: 0x405, element: "clientCluster",
            xref: { document: "device", section: "9.2.4" }
        },
        {
            tag: "requirement", name: "Time", id: 0xa, element: "clientCluster",
            xref: { document: "device", section: "9.2.4" }
        },
        {
            tag: "requirement", name: "TimeSync", id: 0x38, element: "clientCluster",
            xref: { document: "device", section: "9.2.4" }
        },
        {
            tag: "requirement", name: "FanControl", id: 0x202, element: "clientCluster",
            xref: { document: "device", section: "9.2.4" }
        },
        {
            tag: "requirement", name: "TemperatureMeasurement", id: 0x402, element: "clientCluster",
            xref: { document: "device", section: "9.2.4" }
        },
        {
            tag: "requirement", name: "OccupancySensing", id: 0x406, element: "clientCluster",
            xref: { document: "device", section: "9.2.4" }
        }
    ]
});
