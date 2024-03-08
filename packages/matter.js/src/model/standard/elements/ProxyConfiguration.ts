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
    FieldElement as Field,
    DatatypeElement as Datatype
} from "../../elements/index.js";

Matter.children.push(Cluster({
    name: "ProxyConfiguration", id: 0x42, classification: "node", description: "Proxy Configuration",
    details: "This cluster provides a means for a proxy-capable device to be told the set of Nodes it shall proxy.",
    xref: { document: "core", section: "9.15.14" },

    children: [
        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

        Attribute({
            name: "ConfigurationList", id: 0x0, type: "list", access: "RW", conformance: "M", default: [],
            quality: "N",
            details: "List of proxy configurations. There shall NOT be multiple entries in this list for the same fabric.",
            xref: { document: "core", section: "9.15.14.5.1" },
            children: [Field({ name: "entry", type: "ConfigurationStruct" })]
        }),

        Datatype({
            name: "ConfigurationStruct", type: "struct",

            details: "ProxyAllNodes" +
                "\n" +
                "This field shall be set to to 'true' to indicate to the proxy that it shall proxy all nodes. When " +
                "'true', the SourceList attribute is ignored." +
                "\n" +
                "SourceList" +
                "\n" +
                "When ProxyAllNodes is 'false', this list contains the set of NodeIds of sources that this proxy " +
                "shall specifically proxy.",

            xref: { document: "core", section: "9.15.14.4.1" },

            children: [
                Field({
                    name: "ProxyAllNodes", id: 0x1, type: "bool", access: "RW", conformance: "M", constraint: "desc",
                    default: true
                }),
                Field({
                    name: "SourceList", id: 0x2, type: "list", access: "RW", conformance: "M", constraint: "desc",
                    default: [],
                    children: [Field({ name: "entry", type: "node-id" })]
                })
            ]
        })
    ]
}));
