/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "cluster", name: "ProxyConfiguration", classification: "node", pics: "PXCFG",
    xref: "core§9.15.13",
    details: "This cluster provides a means for a proxy-capable device to be told the set of Nodes it shall proxy.",

    children: [
        {
            tag: "attribute", name: "ConfigurationList", xref: "core§9.15.13.5.1",
            details: "List of proxy configurations. There shall NOT be multiple entries in this list for the same fabric."
        },

        {
            tag: "datatype", name: "ConfigurationStruct", xref: "core§9.15.13.4.1",

            children: [
                {
                    tag: "field", name: "ProxyAllNodes", xref: "core§9.15.13.4.1.1",
                    details: "This field shall be set to true to indicate to the proxy that it shall proxy all nodes. When true, " +
                        "the SourceList attribute is ignored."
                },
                {
                    tag: "field", name: "SourceList", xref: "core§9.15.13.4.1.2",
                    details: "When ProxyAllNodes is false, this list contains the set of Node IDs of sources that this proxy shall " +
                        "specifically proxy."
                }
            ]
        }
    ]
});
