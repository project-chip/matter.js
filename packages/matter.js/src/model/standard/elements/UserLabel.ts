/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "UserLabel", id: 0x41, type: "Label", classification: "endpoint",
    description: "User Label",
    details: "This cluster provides a feature to tag an endpoint with zero or more labels.",
    xref: { document: "core", section: "9.9" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 },

        {
            tag: "attribute", name: "LabelList", id: 0x0, type: "list", access: "RW VM", conformance: "M",
            constraint: "min 0", default: [], quality: "N",
            details: "An implementation shall support at least 4 list entries per node for all User Label cluster " +
                "instances on the node.",
            xref: { document: "core", section: "9.9.4.1" },
            children: [{ tag: "datatype", name: "entry", type: "LabelStruct" }]
        }
    ]
});
