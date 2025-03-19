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

export const ProxyConfiguration = Cluster(
    {
        name: "ProxyConfiguration", id: 0x42, classification: "node", pics: "PXCFG",
        details: "This cluster provides a means for a proxy-capable device to be told the set of Nodes it shall proxy.",
        xref: { document: "core", section: "9.15.13" }
    },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        {
            name: "ConfigurationList", id: 0x0, type: "list", access: "RW", conformance: "M", default: [],
            quality: "N",
            details: "List of proxy configurations. There shall NOT be multiple entries in this list for the same fabric.",
            xref: { document: "core", section: "9.15.13.5.1" }
        },

        Field({ name: "entry", type: "ConfigurationStruct" })
    ),

    Datatype(
        { name: "ConfigurationStruct", type: "struct", xref: { document: "core", section: "9.15.13.4.1" } },

        Field({
            name: "ProxyAllNodes", id: 0x1, type: "bool", access: "RW", conformance: "M", constraint: "desc",
            default: false,
            details: "This field shall be set to true to indicate to the proxy that it shall proxy all nodes. When true, " +
                "the SourceList attribute is ignored.",
            xref: { document: "core", section: "9.15.13.4.1.1" }
        }),

        Field(
            {
                name: "SourceList", id: 0x2, type: "list", access: "RW", conformance: "M", constraint: "desc",
                default: [],
                details: "When ProxyAllNodes is false, this list contains the set of Node IDs of sources that this proxy shall " +
                    "specifically proxy.",
                xref: { document: "core", section: "9.15.13.4.1.2" }
            },

            Field({ name: "entry", type: "node-id" })
        )
    )
);

MatterDefinition.children.push(ProxyConfiguration);
