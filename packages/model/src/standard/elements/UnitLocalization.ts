/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const UnitLocalization = Cluster(
    {
        name: "UnitLocalization", id: 0x2d, classification: "node", pics: "LUNIT",

        details: "Nodes should be expected to be deployed to any and all regions of the world. These global regions " +
            "may have differing preferences for the units in which values are conveyed in communication to a " +
            "user. As such, Nodes that visually or audibly convey measurable values to the user need a mechanism " +
            "by which they can be configured to use a user’s preferred unit." +
            "\n" +
            "This cluster supports an interface to a Node. It provides attributes for determining and configuring " +
            "the units that a Node shall utilize when conveying values in communication to a user.",

        xref: { document: "core", section: "11.5" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "core", section: "11.5.4" } },
        Field({
            name: "TEMP", constraint: "0", description: "TemperatureUnit",
            details: "The Node can be configured to use different units of temperature when conveying values to a user."
        })
    ),

    Attribute({
        name: "TemperatureUnit", id: 0x0, type: "TempUnitEnum", access: "RW VM", conformance: "TEMP",
        quality: "N",
        details: "The TemperatureUnit attribute shall indicate the unit for the Node to use only when conveying " +
            "temperature in communication to the user. If provided, this value shall take priority over any unit " +
            "implied through the ActiveLocale Attribute.",
        xref: { document: "core", section: "11.5.6.1" }
    }),

    Datatype(
        { name: "TempUnitEnum", type: "enum8", xref: { document: "core", section: "11.5.5.1" } },
        Field({ name: "Fahrenheit", id: 0x0, conformance: "M", description: "Temperature conveyed in Fahrenheit" }),
        Field({ name: "Celsius", id: 0x1, conformance: "M", description: "Temperature conveyed in Celsius" }),
        Field({ name: "Kelvin", id: 0x2, conformance: "M", description: "Temperature conveyed in Kelvin" })
    )
);

MatterDefinition.children.push(UnitLocalization);
