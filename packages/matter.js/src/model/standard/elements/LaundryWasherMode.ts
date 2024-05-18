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

export const LaundryWasherMode = Cluster({
    name: "LaundryWasherMode", id: 0x51, type: "ModeBase", classification: "application",
    details: "This cluster is derived from the Mode Base cluster, defining additional mode tags and namespaced " +
        "enumerated values for laundry washer as well as laundry dryer devices.",
    xref: { document: "cluster", section: "8.5" },

    children: [
        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),
        Attribute({
            name: "SupportedModes", id: 0x0, conformance: "M",
            xref: { document: "cluster", section: "8.5.5" }
        }),
        Attribute({ name: "CurrentMode", id: 0x1, conformance: "M", xref: { document: "cluster", section: "8.5.5" } }),

        Attribute({
            name: "StartUpMode", id: 0x2, conformance: "P",
            details: "If this attribute is supported, the device SHOULD initially set this to one of the supported modes " +
                "that has the Normal tag associated with it. See the Mode Base cluster specification for full " +
                "details about the StartUpMode attribute.",
            xref: { document: "cluster", section: "8.5.5.1" }
        }),

        Attribute({ name: "OnMode", id: 0x3, conformance: "P", xref: { document: "cluster", section: "8.5.5" } }),

        Datatype({
            name: "ModeOptionStruct", type: "ModeOptionStruct",
            details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                "ModeOptionStruct type. A blank field indicates no change." +
                "\n" +
                "At least one entry in the SupportedModes attribute shall include the Normal mode tag in the " +
                "ModeTags field list.",
            xref: { document: "cluster", section: "8.5.4.1" }
        })
    ]
});

Matter.children.push(LaundryWasherMode);