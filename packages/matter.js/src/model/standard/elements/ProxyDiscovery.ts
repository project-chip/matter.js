/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "ProxyDiscovery", id: 0x43, classification: "node",
    description: "Proxy Discovery",
    details: "This cluster contains commands needed to do proxy discovery as defined in the Section 9.15.7.3, " +
        "“Step 2: Proxy Discovery” and Section 9.15.7.4, “Step 3: Proxy Response” steps of the overall " +
        "Section 9.15.7, “Proxy Discovery & Assignment Flow”.",
    xref: { document: "core", section: "9.15.13" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 },
        {
            tag: "command", name: "ProxyDiscoverRequest", id: 0x0, access: "O", conformance: "M",
            direction: "request",
            xref: { document: "core", section: "9.15.13.5" }
        },
        {
            tag: "command", name: "ProxyDiscoverResponse", id: 0x1, conformance: "M", direction: "response",
            xref: { document: "core", section: "9.15.13.5" }
        }
    ]
});
