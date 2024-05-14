/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const RvcRunMode = Cluster({
    name: "RvcRunMode", id: 0x54, type: "ModeBase", classification: "application",
    details: "This cluster is derived from the Mode Base cluster to define specifics for Robotic Vacuum Cleaner " +
        "devices. It also defines a namespace for the running modes of these devices.",
    xref: { document: "cluster", section: "7.2" },

    children: [
        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),
        Attribute({ name: "SupportedModes", id: 0x0, xref: { document: "cluster", section: "7.2.6" } }),
        Attribute({ name: "CurrentMode", id: 0x1, xref: { document: "cluster", section: "7.2.6" } }),
        Attribute({ name: "StartUpMode", id: 0x2, conformance: "X", xref: { document: "cluster", section: "7.2.6" } }),
        Attribute({ name: "OnMode", id: 0x3, conformance: "D", xref: { document: "cluster", section: "7.2.6" } }),

        Datatype({
            name: "ModeOptionStruct", type: "ModeOptionStruct",

            details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                "ModeOptionStruct type. A blank field indicates no change." +
                "\n" +
                "At least one entry in the SupportedModes attribute shall include the Idle mode tag in the ModeTags " +
                "field." +
                "\n" +
                "At least one entry in the SupportedModes attribute (different from the one above) shall include the " +
                "Cleaning mode tag in the ModeTags field." +
                "\n" +
                "The Mapping, Cleaning, and Idle mode tags are mutually exclusive and shall NOT be used together in " +
                "a mode’s ModeTags.",

            xref: { document: "cluster", section: "7.2.5.1" }
        })
    ]
});

Matter.children.push(RvcRunMode);
