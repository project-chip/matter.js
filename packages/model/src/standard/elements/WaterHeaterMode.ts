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

export const WaterHeaterMode = Cluster(
    {
        name: "WaterHeaterMode", id: 0x9e, type: "ModeBase", classification: "application", pics: "WHM",
        details: "This cluster is derived from the Mode Base cluster and defines additional mode tags and namespaced " +
            "enumerated values for water heater devices.",
        xref: { document: "cluster", section: "9.6" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "9.6.4" } },
        Field({
            name: "DEPONOFF", conformance: "X", constraint: "0", description: "OnOff",
            details: "Dependency with the OnOff cluster"
        })
    ),

    Attribute({
        name: "SupportedModes", id: 0x0,

        details: "At least one entry in the SupportedModes attribute shall include the Manual mode tag in the ModeTags " +
            "field list." +
            "\n" +
            "At least one entry in the SupportedModes attribute shall include the Off mode tag in the ModeTags " +
            "field list." +
            "\n" +
            "An entry in the SupportedModes attribute that includes one of an Off, Manual, or Timed tag shall NOT " +
            "also include an additional instance of any one of these tag types.",

        xref: { document: "cluster", section: "9.6.6.1" }
    }),

    Attribute({ name: "CurrentMode", id: 0x1, xref: { document: "cluster", section: "9.6.6" } }),
    Attribute({ name: "StartUpMode", id: 0x2, conformance: "X", xref: { document: "cluster", section: "9.6.6" } }),
    Attribute({ name: "OnMode", id: 0x3, conformance: "X", xref: { document: "cluster", section: "9.6.6" } }),

    Datatype({
        name: "ModeOptionStruct", type: "ModeOptionStruct",
        details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
            "ModeOptionStruct type. A blank field indicates no change.",
        xref: { document: "cluster", section: "9.6.5.1" }
    }),

    Datatype(
        { name: "ModeTag", type: "enum16" },
        Field({ name: "Auto", id: 0x0, xref: { document: "cluster", section: "9.6.7.1" } }),
        Field({ name: "Quick", id: 0x1, xref: { document: "cluster", section: "9.6.7.1" } }),
        Field({ name: "Quiet", id: 0x2, xref: { document: "cluster", section: "9.6.7.1" } }),
        Field({ name: "LowNoise", id: 0x3, xref: { document: "cluster", section: "9.6.7.1" } }),
        Field({ name: "LowEnergy", id: 0x4, xref: { document: "cluster", section: "9.6.7.1" } }),
        Field({ name: "Vacation", id: 0x5, xref: { document: "cluster", section: "9.6.7.1" } }),
        Field({ name: "Min", id: 0x6, xref: { document: "cluster", section: "9.6.7.1" } }),
        Field({ name: "Max", id: 0x7, xref: { document: "cluster", section: "9.6.7.1" } }),
        Field({ name: "Night", id: 0x8, xref: { document: "cluster", section: "9.6.7.1" } }),
        Field({ name: "Day", id: 0x9, xref: { document: "cluster", section: "9.6.7.1" } }),
        Field({
            name: "Off", id: 0x4000,
            details: "While in modes with this tag, the device will not attempt to keep the water warm.",
            xref: { document: "cluster", section: "9.6.7.1.1" }
        }),

        Field({
            name: "Manual", id: 0x4001,
            details: "While in modes with this tag, the device will attempt to keep the water warm based on the " +
                "OccupiedHeatingSetpoint attribute of the associated Thermostat cluster.",
            xref: { document: "cluster", section: "9.6.7.1.2" }
        }),

        Field({
            name: "Timed", id: 0x4002,
            details: "While in modes with this tag, the device will attempt to keep the water warm based on the Schedules " +
                "attribute of the associated Thermostat cluster.",
            xref: { document: "cluster", section: "9.6.7.1.3" }
        })
    )
);

MatterDefinition.children.push(WaterHeaterMode);
