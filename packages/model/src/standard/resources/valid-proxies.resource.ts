/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "cluster", name: "ValidProxies", classification: "node", pics: "PXVALID", xref: "core§9.15.14",
    details: "This cluster provides a means for a device to be told of the valid set of possible proxies that can " +
        "proxy subscriptions on its behalf as per Section 9.15.7, “Proxy Discovery & Assignment Flow”.",

    children: [
        {
            tag: "attribute", name: "ValidProxyList", xref: "core§9.15.14.5.1",
            details: "List of valid proxies that can proxy this Node. Each entry in this list is fabric-scoped."
        },
        {
            tag: "command", name: "GetValidProxiesRequest", xref: "core§9.15.14.6.1",
            details: "This command is used during proxy discovery, as specified in Section 9.15.7, “Proxy Discovery & " +
                "Assignment Flow”."
        },
        {
            tag: "command", name: "GetValidProxiesResponse", xref: "core§9.15.14.6.2",
            details: "This command is used during proxy discovery, as specified in Section 9.15.7, “Proxy Discovery & " +
                "Assignment Flow”."
        },
        {
            tag: "datatype", name: "ValidProxyStruct", xref: "core§9.15.14.4.1",
            details: "Encapsulates the Node ID of a Valid Proxy."
        }
    ]
});
