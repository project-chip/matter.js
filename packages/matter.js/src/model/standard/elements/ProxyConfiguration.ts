/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "ProxyConfiguration", id: 0x42, classification: "node",
    description: "Proxy Configuration",
    details: "This cluster provides a means for a proxy-capable device to be told the set of Nodes it shall proxy.",
    xref: { document: "core", section: "9.15.14" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 },

        {
            tag: "attribute", name: "ConfigurationList", id: 0x0, type: "list", access: "RW", conformance: "M",
            default: [], quality: "N",
            details: "List of proxy configurations. There shall NOT be multiple entries in this list for the same fabric.",
            xref: { document: "core", section: "9.15.14.5.1" },
            children: [{ tag: "datatype", name: "entry", type: "ConfigurationStruct" }]
        },

        {
            tag: "datatype", name: "ConfigurationStruct", type: "struct",

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
                {
                    tag: "datatype", name: "ProxyAllNodes", id: 0x1, type: "bool", access: "RW", conformance: "M",
                    constraint: "desc", default: true
                },
                {
                    tag: "datatype", name: "SourceList", id: 0x2, type: "list", access: "RW", conformance: "M",
                    constraint: "desc", default: [],
                    children: [{ tag: "datatype", name: "entry", type: "node-id" }]
                }
            ]
        }
    ]
});
