/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "cluster", name: "ProxyDiscovery", classification: "node", pics: "PXDSC", xref: "core§9.15.12",
    details: "This cluster contains commands needed to do proxy discovery as defined in the Section 9.15.7.3, " +
        "“Step 2: Proxy Discovery” and Section 9.15.7.4, “Step 3: Proxy Response” steps of the overall " +
        "Section 9.15.7, “Proxy Discovery & Assignment Flow”.",

    children: [
        {
            tag: "command", name: "ProxyDiscoverRequest", xref: "core§9.15.12.4.1",
            details: "This command is used during proxy discovery, as specified in Section 9.15.7, “Proxy Discovery & " +
                "Assignment Flow”.",

            children: [
                {
                    tag: "field", name: "SourceNodeId", xref: "core§9.15.12.4.1.1",
                    details: "This is the Node ID of the source for which a client seeks to find a Proxy."
                },
                {
                    tag: "field", name: "NumAttributePaths", xref: "core§9.15.12.4.1.2",
                    details: "The number of attribute paths the client will have in the subscription request. This is a " +
                        "heuristic/hint to allow a Proxy to better ascertain whether it can support the ensuing subscription."
                },
                {
                    tag: "field", name: "NumEventPaths", xref: "core§9.15.12.4.1.3",
                    details: "The number of event paths the client will have in the subscription request. This is a heuristic/hint " +
                        "to allow a Proxy to better ascertain whether it can support the ensuing subscription."
                }
            ]
        },

        {
            tag: "command", name: "ProxyDiscoverResponse", xref: "core§9.15.12.4.2",
            details: "This command is used during proxy discovery, as specified in Section 9.15.7, “Proxy Discovery & " +
                "Assignment Flow”.",

            children: [
                {
                    tag: "field", name: "SourceNodeId", xref: "core§9.15.12.4.2.1",
                    details: "This is the Node ID of the source the proxy can proxy for. This shall match the node id in the " +
                        "corresponding Proxy Discover Request Command message."
                },

                {
                    tag: "field", name: "NumHopsToSource", xref: "core§9.15.12.4.2.2",

                    details: "If the proxy currently subscribes to the source (either directly or indirectly), this indicates the " +
                        "number of hops to the source. Sensible values start at 1, with 1 being used for a proxy that " +
                        "subscribes directly to the source. If the proxy is not subscribed directly to the source, this value " +
                        "shall be one greater than the NumHopsToSource for the given Node ID of the proxy it is subscribed " +
                        "to." +
                        "\n" +
                        "0 indicates that the proxy currently does not have a subscription to the source."
                },

                {
                    tag: "field", name: "AvailableCapacity", xref: "core§9.15.12.4.2.3",
                    details: "A number indicating the number of Cluster Attribute Paths the proxy has space for support. This " +
                        "allows for an absolute comparison of different memory capacities of candidate proxies by the client " +
                        "in selecting the best possible candidate."
                }
            ]
        }
    ]
});
