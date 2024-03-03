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
    FieldElement as Field
} from "../../elements/index.js";

Matter.children.push(Cluster({
    name: "FixedLabel", id: 0x40, type: "Label", classification: "endpoint", description: "Fixed Label",

    details: "This cluster provides a feature for the device to tag an endpoint with zero or more read only " +
        "labels. Examples:" +
        "\n" +
        "  • A bridge can use this to indicate grouping of bridged devices. For example: All bridged devices " +
        "    whose endpoints have an entry in their LabelList \"room\":\"bedroom 2\" are in the same (bed)room." +
        "\n" +
        "  • A manufacturer can use this to identify a characteristic of an endpoint. For example to " +
        "    identify the endpoints of a luminaire, one pointing up, the other pointing down, one of the " +
        "    endpoints would have a LabelList entry \"orientation\":\"up\" while the other would have " +
        "    \"orientation\":\"down\". Using such indication, the user interface of a Node controlling this " +
        "    luminaire knows which of the endpoints is which of the lights.",

    xref: { document: "core", section: "9.8" },

    children: [
        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

        Attribute({
            name: "LabelList", id: 0x0, type: "list", access: "R V", conformance: "M", default: [],
            quality: "N",
            xref: { document: "core", section: "9.8.4" },
            children: [Field({ name: "entry", type: "LabelStruct" })]
        })
    ]
}));
