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
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const MicrowaveOvenMode = Cluster(
    {
        name: "MicrowaveOvenMode", id: 0x5e, type: "ModeBase", classification: "application", pics: "MWOM",
        details: "This cluster is derived from the Mode Base cluster and defines additional mode tags and namespaced " +
            "enumerated values for microwave oven devices.",
        xref: { document: "cluster", section: "8.12" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "8.12.4" } },
        Field({
            name: "DEPONOFF", conformance: "X", constraint: "0", description: "OnOff",
            details: "Dependency with the OnOff cluster"
        })
    ),

    Attribute({
        name: "SupportedModes", id: 0x0,
        details: "Exactly one entry in the SupportedModes attribute shall include the Normal mode tag in the ModeTags " +
            "field." +
            "\n" +
            "The Normal and Defrost mode tags are mutually exclusive and shall NOT both be used together in a " +
            "mode’s ModeTags.",
        xref: { document: "cluster", section: "8.12.5.1" }
    }),

    Attribute({ name: "CurrentMode", id: 0x1, xref: { document: "cluster", section: "8.12.5" } }),
    Attribute({ name: "StartUpMode", id: 0x2, conformance: "X", xref: { document: "cluster", section: "8.12.5" } }),
    Attribute({ name: "OnMode", id: 0x3, conformance: "X", xref: { document: "cluster", section: "8.12.5" } }),
    Command({ name: "ChangeToMode", id: 0x0, conformance: "X", xref: { document: "cluster", section: "8.12.6" } }),
    Command({ name: "ChangeToModeResponse", id: 0x1, conformance: "X", xref: { document: "cluster", section: "8.12.6" } }),

    Datatype(
        { name: "ModeTag", type: "enum16" },
        Field({ name: "Auto", id: 0x0, xref: { document: "cluster", section: "8.12.7.1" } }),
        Field({ name: "Quick", id: 0x1, xref: { document: "cluster", section: "8.12.7.1" } }),
        Field({ name: "Quiet", id: 0x2, xref: { document: "cluster", section: "8.12.7.1" } }),
        Field({ name: "LowNoise", id: 0x3, xref: { document: "cluster", section: "8.12.7.1" } }),
        Field({ name: "LowEnergy", id: 0x4, xref: { document: "cluster", section: "8.12.7.1" } }),
        Field({ name: "Vacation", id: 0x5, xref: { document: "cluster", section: "8.12.7.1" } }),
        Field({ name: "Min", id: 0x6, xref: { document: "cluster", section: "8.12.7.1" } }),
        Field({ name: "Max", id: 0x7, xref: { document: "cluster", section: "8.12.7.1" } }),
        Field({ name: "Night", id: 0x8, xref: { document: "cluster", section: "8.12.7.1" } }),
        Field({ name: "Day", id: 0x9, xref: { document: "cluster", section: "8.12.7.1" } }),
        Field({
            name: "Normal", id: 0x4000,
            details: "This is the normal mode of operation for general cooking of food.",
            xref: { document: "cluster", section: "8.12.7.1.1" }
        }),
        Field({
            name: "Defrost", id: 0x4001,
            details: "This is a mode optimized for defrosting food.",
            xref: { document: "cluster", section: "8.12.7.1.2" }
        })
    )
);

MatterDefinition.children.push(MicrowaveOvenMode);
