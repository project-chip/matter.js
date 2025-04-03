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

export const DishwasherMode = Cluster(
    {
        name: "DishwasherMode", id: 0x59, type: "ModeBase", classification: "application", pics: "DISHM",
        details: "This cluster is derived from the Mode Base cluster and defines additional mode tags and namespaced " +
            "enumerated values for dishwasher devices.",
        xref: { document: "cluster", section: "8.3" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "8.3.4" } },
        Field({
            name: "DEPONOFF", conformance: "X", constraint: "0", description: "OnOff",
            details: "Dependency with the OnOff cluster"
        })
    ),

    Attribute({
        name: "SupportedModes", id: 0x0, conformance: "M",
        details: "At least one entry in the SupportedModes attribute shall include the Normal mode tag in the ModeTags " +
            "field list.",
        xref: { document: "cluster", section: "8.3.6.1" }
    }),

    Attribute({ name: "CurrentMode", id: 0x1, conformance: "M", xref: { document: "cluster", section: "8.3.6" } }),
    Attribute({ name: "StartUpMode", id: 0x2, conformance: "X", xref: { document: "cluster", section: "8.3.6" } }),
    Attribute({ name: "OnMode", id: 0x3, conformance: "X", xref: { document: "cluster", section: "8.3.6" } }),

    Datatype({
        name: "ModeOptionStruct", type: "ModeOptionStruct",
        details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
            "ModeOptionStruct type. A blank field indicates no change.",
        xref: { document: "cluster", section: "8.3.5.1" }
    }),

    Datatype(
        { name: "ModeTag", type: "enum16" },
        Field({ name: "Auto", id: 0x0, xref: { document: "cluster", section: "8.3.7.1" } }),
        Field({ name: "Quick", id: 0x1, xref: { document: "cluster", section: "8.3.7.1" } }),
        Field({ name: "Quiet", id: 0x2, xref: { document: "cluster", section: "8.3.7.1" } }),
        Field({ name: "LowNoise", id: 0x3, xref: { document: "cluster", section: "8.3.7.1" } }),
        Field({ name: "LowEnergy", id: 0x4, xref: { document: "cluster", section: "8.3.7.1" } }),
        Field({ name: "Vacation", id: 0x5, xref: { document: "cluster", section: "8.3.7.1" } }),
        Field({ name: "Min", id: 0x6, xref: { document: "cluster", section: "8.3.7.1" } }),
        Field({ name: "Max", id: 0x7, xref: { document: "cluster", section: "8.3.7.1" } }),
        Field({ name: "Night", id: 0x8, xref: { document: "cluster", section: "8.3.7.1" } }),
        Field({ name: "Day", id: 0x9, xref: { document: "cluster", section: "8.3.7.1" } }),
        Field({
            name: "Normal", id: 0x4000,
            details: "The normal regime of operation.",
            xref: { document: "cluster", section: "8.3.7.1.1" }
        }),
        Field({
            name: "Heavy", id: 0x4001,
            details: "Mode optimized for washing heavily-soiled dishes.",
            xref: { document: "cluster", section: "8.3.7.1.2" }
        }),
        Field({
            name: "Light", id: 0x4002,
            details: "Mode optimized for light washing.",
            xref: { document: "cluster", section: "8.3.7.1.3" }
        })
    )
);

MatterDefinition.children.push(DishwasherMode);
