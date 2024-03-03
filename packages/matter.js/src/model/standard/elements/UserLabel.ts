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
    name: "UserLabel", id: 0x41, type: "Label", classification: "endpoint", description: "User Label",
    details: "This cluster provides a feature to tag an endpoint with zero or more labels.",
    xref: { document: "core", section: "9.9" },

    children: [
        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

        Attribute({
            name: "LabelList", id: 0x0, type: "list", access: "RW VM", conformance: "M", constraint: "min 0",
            default: [], quality: "N",
            details: "An implementation shall support at least 4 list entries per node for all User Label cluster " +
                "instances on the node.",
            xref: { document: "core", section: "9.9.4.1" },
            children: [Field({ name: "entry", type: "LabelStruct" })]
        })
    ]
}));
