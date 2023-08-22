/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "UnitLocalization", id: 0x2d, classification: "node",
    description: "Unit Localization",

    details: "Nodes should be expected to be deployed to any and all regions of the world. These global regions " +
        "may have differing preferences for the units in which values are conveyed in communication to a " +
        "user. As such, Nodes that visually or audibly convey measurable values to the user need a mechanism " +
        "by which they can be configured to use a user’s preferred unit." +
        "\n" +
        "This cluster supports an interface to a Node. It provides attributes for determining and " +
        "configuring the units that a Node shall utilize when conveying values in communication to a user.",

    xref: { document: "core", section: "11.5" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 },

        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "core", section: "11.5.4" },
            children: [{
                tag: "datatype", name: "TEMP", constraint: "0", description: "TemperatureUnit",
                details: "The Node can be configured to use different units of temperature when conveying values to a user."
            }]
        },

        {
            tag: "attribute", name: "TemperatureUnit", id: 0x0, type: "TempUnitEnum", access: "RW VM",
            conformance: "TEMP", default: null, quality: "X N",
            details: "The TemperatureUnit attribute shall indicate the unit for the Node to use only when conveying " +
                "temperature in communication to the user. If provided, this value shall take priority over any unit " +
                "implied through the ActiveLocale Attribute.",
            xref: { document: "core", section: "11.5.6.1" }
        },

        {
            tag: "datatype", name: "TempUnitEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.5.5.1" },

            children: [
                {
                    tag: "datatype", name: "Fahrenheit", id: 0x0, conformance: "M",
                    description: "Temperature conveyed in Fahrenheit"
                },
                {
                    tag: "datatype", name: "Celsius", id: 0x1, conformance: "M",
                    description: "Temperature conveyed in Celsius"
                },
                {
                    tag: "datatype", name: "Kelvin", id: 0x2, conformance: "M",
                    description: "Temperature conveyed in Kelvin"
                }
            ]
        }
    ]
});
