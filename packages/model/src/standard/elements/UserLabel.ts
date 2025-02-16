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
    FieldElement as Field
} from "../../elements/index.js";

export const UserLabel = Cluster(
    {
        name: "UserLabel", id: 0x41, type: "Label", classification: "endpoint", pics: "ULABEL",
        details: "This cluster is derived from the Label cluster and provides a feature to tag an endpoint with zero " +
            "or more writable labels.",
        xref: { document: "core", section: "9.9" }
    },

    Attribute(
        {
            name: "LabelList", id: 0x0, type: "list", access: "RW VM", conformance: "M", constraint: "min 0",
            default: [], quality: "N",
            details: "An implementation shall support at least 4 list entries per node for all User Label cluster " +
                "instances on the node.",
            xref: { document: "core", section: "9.9.4.1" }
        },

        Field({ name: "entry", type: "LabelStruct" })
    )
);

MatterDefinition.children.push(UserLabel);
