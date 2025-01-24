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

export const Label = Cluster(
    {
        name: "Label", classification: "endpoint", pics: "LABEL",
        details: "This cluster provides a feature to tag an endpoint with zero or more labels. This is a base cluster " +
            "that requires a derived cluster to create an instance.",
        xref: { document: "core", section: "9.7" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        {
            name: "LabelList", id: 0x0, type: "list", conformance: "M", constraint: "derived", default: [],
            details: "This is a list of string tuples. Each entry is a LabelStruct.",
            xref: { document: "core", section: "9.7.5.1" }
        },
        Field({ name: "entry", type: "LabelStruct" })
    ),

    Datatype(
        {
            name: "LabelStruct", type: "struct",
            details: "This is a string tuple with strings that are user defined.",
            xref: { document: "core", section: "9.7.4.1" }
        },

        Field({
            name: "Label", id: 0x0, type: "string", conformance: "M", constraint: "max 16",
            details: "The Label or Value semantic is not defined here. Label examples: \"room\", \"zone\", \"group\", " +
                "\"direction\".",
            xref: { document: "core", section: "9.7.4.1.1" }
        }),

        Field({
            name: "Value", id: 0x1, type: "string", conformance: "M", constraint: "max 16",
            details: "The Label or Value semantic is not defined here. The Value is a discriminator for a Label that may " +
                "have multiple instances. Label:Value examples: \"room\":\"bedroom 2\", \"orientation\":\"North\", " +
                "\"floor\":\"2\", \"direction\":\"up\"",
            xref: { document: "core", section: "9.7.4.1.2" }
        })
    )
);

MatterDefinition.children.push(Label);
