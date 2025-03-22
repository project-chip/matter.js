/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const ExtendedColorLightDt = DeviceType(
    {
        name: "ExtendedColorLight", id: 0x10d, type: "ColorTemperatureLight", category: "Lighting",
        classification: "simple",
        details: "An Extended Color Light is a lighting device that is capable of being switched on or off, the " +
            "intensity of its light adjusted, and its color adjusted by means of a bound controller device such " +
            "as a Color Dimmer Switch or Control Bridge. The device supports adjustment of color by means of " +
            "hue/saturation, enhanced hue, color looping, XY coordinates, and color temperature. In addition, the " +
            "extended color light is also capable of being switched by means of a bound occupancy sensor.",
        xref: { document: "device", section: "4.4" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 269, revision: 4 } ], element: "attribute" })
    ),

    Requirement(
        {
            name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "4.4.4" }
        },
        Requirement({ name: "TriggerEffect", conformance: "M", element: "command" })
    ),

    Requirement({
        name: "Groups", id: 0x4, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "4.4.4" }
    }),

    Requirement(
        {
            name: "ScenesManagement", id: 0x62, conformance: "P, M", element: "serverCluster",
            xref: { document: "device", section: "4.4.4" }
        },
        Requirement({ name: "CopyScene", conformance: "P, M", element: "command" })
    ),

    Requirement(
        {
            name: "OnOff", id: 0x6, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "4.4.4" }
        },
        Requirement({ name: "LIGHTING", conformance: "M", element: "feature" })
    ),

    Requirement(
        {
            name: "LevelControl", id: 0x8, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "4.4.4" }
        },
        Requirement({ name: "ONOFF", conformance: "M", element: "feature" }),
        Requirement({ name: "LIGHTING", conformance: "M", element: "feature" }),
        Requirement({ name: "CurrentLevel", constraint: "1 to 254", element: "attribute" }),
        Requirement({ name: "MinLevel", constraint: "1", element: "attribute" }),
        Requirement({ name: "MaxLevel", constraint: "254", element: "attribute" })
    ),

    Requirement(
        {
            name: "ColorControl", id: 0x300, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "4.4.4" }
        },
        Requirement({ name: "HUESATURATION", conformance: "O", element: "feature" }),
        Requirement({ name: "ENHANCEDHUE", conformance: "O", element: "feature" }),
        Requirement({ name: "COLORLOOP", conformance: "O", element: "feature" }),
        Requirement({ name: "XY", conformance: "M", element: "feature" }),
        Requirement({ name: "COLORTEMPERATURE", conformance: "M", element: "feature" }),
        Requirement({ name: "RemainingTime", conformance: "M", element: "attribute" })
    ),

    Requirement({
        name: "OccupancySensing", id: 0x406, conformance: "O", element: "clientCluster",
        xref: { document: "device", section: "4.4.4" }
    })
);

MatterDefinition.children.push(ExtendedColorLightDt);
