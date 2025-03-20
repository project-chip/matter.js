/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const OnOffSensorDt = DeviceType(
    {
        name: "OnOffSensor", id: 0x850, category: "Sensor", classification: "simple",
        details: "An On/Off Sensor is a measurement and sensing device that, when bound to a lighting device such as a " +
            "Dimmable Light, is capable of being used to switch the device on or off.",
        xref: { document: "device", section: "7.8" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 2128, revision: 3 } ], element: "attribute" })
    ),
    Requirement({
        name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "7.8.4" }
    }),
    Requirement({
        name: "Identify", id: 0x3, conformance: "M", element: "clientCluster",
        xref: { document: "device", section: "7.8.4" }
    }),
    Requirement({
        name: "Groups", id: 0x4, conformance: "O", element: "clientCluster",
        xref: { document: "device", section: "7.8.4" }
    }),
    Requirement({
        name: "ScenesManagement", id: 0x62, conformance: "P, O", element: "clientCluster",
        xref: { document: "device", section: "7.8.4" }
    }),
    Requirement({
        name: "OnOff", id: 0x6, conformance: "M", element: "clientCluster",
        xref: { document: "device", section: "7.8.4" }
    }),
    Requirement({
        name: "LevelControl", id: 0x8, conformance: "O", element: "clientCluster",
        xref: { document: "device", section: "7.8.4" }
    }),
    Requirement({
        name: "ColorControl", id: 0x300, conformance: "O", element: "clientCluster",
        xref: { document: "device", section: "7.8.4" }
    })
);

MatterDefinition.children.push(OnOffSensorDt);
