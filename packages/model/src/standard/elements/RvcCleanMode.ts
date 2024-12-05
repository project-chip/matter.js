/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    DatatypeElement as Datatype,
    FieldElement as Field
} from "../../elements/index.js";

export const RvcCleanMode = Cluster(
    {
        name: "RvcCleanMode", id: 0x55, type: "ModeBase", classification: "application", pics: "RVCCLEANM",
        details: "This cluster is derived from the Mode Base cluster to define specifics for Robotic Vacuum Cleaner " +
            "devices. It also defines a namespace for the cleaning type for these devices.",
        xref: { document: "cluster", section: "7.3" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),
    Attribute({ name: "SupportedModes", id: 0x0, xref: { document: "cluster", section: "7.3.6" } }),
    Attribute({ name: "CurrentMode", id: 0x1, xref: { document: "cluster", section: "7.3.6" } }),
    Attribute({ name: "StartUpMode", id: 0x2, conformance: "X", xref: { document: "cluster", section: "7.3.6" } }),
    Attribute({ name: "OnMode", id: 0x3, conformance: "D", xref: { document: "cluster", section: "7.3.6" } }),

    Datatype({
        name: "ModeOptionStruct", type: "ModeOptionStruct",
        details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
            "ModeOptionStruct type. A blank field indicates no change." +
            "\n" +
            "At least one entry in the SupportedModes attribute shall include the Vacuum and/or the Mop mode tag " +
            "in the ModeTags field list.",
        xref: { document: "cluster", section: "7.3.5.1" }
    }),

    Datatype(
        { name: "ModeChangeStatus", type: "enum8" },
        Field({ name: "CleaningInProgress", id: 0x40, xref: { document: "cluster", section: "7.3.7.1" } })
    ),

    Datatype(
        { name: "ModeTag", type: "enum16" },
        Field({ name: "DeepClean", id: 0x4000, xref: { document: "cluster", section: "7.3.7.2" } }),
        Field({
            name: "Vacuum", id: 0x4001,
            details: "The device’s vacuuming feature is enabled in this mode.",
            xref: { document: "cluster", section: "7.3.7.2.2" }
        }),
        Field({
            name: "Mop", id: 0x4002,
            details: "The device’s mopping feature is enabled in this mode.",
            xref: { document: "cluster", section: "7.3.7.2.3" }
        })
    )
);

MatterDefinition.children.push(RvcCleanMode);
