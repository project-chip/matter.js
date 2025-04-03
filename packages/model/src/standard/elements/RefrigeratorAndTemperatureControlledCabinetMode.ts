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

export const RefrigeratorAndTemperatureControlledCabinetMode = Cluster(
    {
        name: "RefrigeratorAndTemperatureControlledCabinetMode", id: 0x52, type: "ModeBase",
        classification: "application", pics: "TCCM",
        details: "This cluster is derived from the Mode Base cluster and defines additional mode tags and namespaced " +
            "enumerated values for refrigerator and temperature controlled cabinet devices.",
        xref: { document: "cluster", section: "8.7" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "8.7.4" } },
        Field({
            name: "DEPONOFF", conformance: "X", constraint: "0", description: "OnOff",
            details: "Dependency with the OnOff cluster"
        })
    ),

    Attribute({
        name: "SupportedModes", id: 0x0, conformance: "M",
        details: "At least one entry in the SupportedModes attribute shall include the Auto mode tag in the ModeTags " +
            "field list.",
        xref: { document: "cluster", section: "8.7.6.1" }
    }),

    Attribute({ name: "CurrentMode", id: 0x1, conformance: "M", xref: { document: "cluster", section: "8.7.6" } }),
    Attribute({ name: "StartUpMode", id: 0x2, conformance: "X", xref: { document: "cluster", section: "8.7.6" } }),
    Attribute({ name: "OnMode", id: 0x3, conformance: "X", xref: { document: "cluster", section: "8.7.6" } }),

    Datatype({
        name: "ModeOptionStruct", type: "ModeOptionStruct",
        details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
            "ModeOptionStruct type. A blank field indicates no change.",
        xref: { document: "cluster", section: "8.7.5.1" }
    }),

    Datatype(
        { name: "ModeTag", type: "enum16" },
        Field({ name: "Auto", id: 0x0, xref: { document: "cluster", section: "8.7.7.1" } }),
        Field({ name: "Quick", id: 0x1, xref: { document: "cluster", section: "8.7.7.1" } }),
        Field({ name: "Quiet", id: 0x2, xref: { document: "cluster", section: "8.7.7.1" } }),
        Field({ name: "LowNoise", id: 0x3, xref: { document: "cluster", section: "8.7.7.1" } }),
        Field({ name: "LowEnergy", id: 0x4, xref: { document: "cluster", section: "8.7.7.1" } }),
        Field({ name: "Vacation", id: 0x5, xref: { document: "cluster", section: "8.7.7.1" } }),
        Field({ name: "Min", id: 0x6, xref: { document: "cluster", section: "8.7.7.1" } }),
        Field({ name: "Max", id: 0x7, xref: { document: "cluster", section: "8.7.7.1" } }),
        Field({ name: "Night", id: 0x8, xref: { document: "cluster", section: "8.7.7.1" } }),
        Field({ name: "Day", id: 0x9, xref: { document: "cluster", section: "8.7.7.1" } }),
        Field({
            name: "RapidCool", id: 0x4000,
            details: "This mode reduces the temperature rapidly, typically above freezing grade.",
            xref: { document: "cluster", section: "8.7.7.1.1" }
        }),
        Field({
            name: "RapidFreeze", id: 0x4001,
            details: "This mode reduces the temperature rapidly, below freezing grade.",
            xref: { document: "cluster", section: "8.7.7.1.2" }
        })
    )
);

MatterDefinition.children.push(RefrigeratorAndTemperatureControlledCabinetMode);
