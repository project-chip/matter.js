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
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

Matter.children.push(Cluster({
    name: "ValidProxies", id: 0x44, classification: "node", description: "Proxy Valid",
    details: "This cluster provides a means for a device to be told of the valid set of possible proxies that can " +
        "proxy subscriptions on its behalf as per Section 9.15.7, “Proxy Discovery & Assignment Flow”.",
    xref: { document: "core", section: "9.15.15" },

    children: [
        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

        Attribute({
            name: "ValidProxyList", id: 0x0, type: "list", access: "RW", conformance: "M", default: [],
            quality: "N F",
            details: "List of valid proxies that can proxy this Node. Each entry in this list is fabric-scoped.",
            xref: { document: "core", section: "9.15.15.5.1" },
            children: [Field({ name: "entry", type: "ValidProxyStruct" })]
        }),

        Command({
            name: "GetValidProxiesRequest", id: 0x0, access: "O", conformance: "M", direction: "request",
            response: "GetValidProxiesResponse",
            xref: { document: "core", section: "9.15.15.6" }
        }),
        Command({
            name: "GetValidProxiesResponse", id: 0x1, conformance: "M", direction: "response",
            xref: { document: "core", section: "9.15.15.6" }
        }),

        Datatype({
            name: "ValidProxyStruct", type: "struct",
            details: "Encapsulates the Node ID of a Valid Proxy.",
            xref: { document: "core", section: "9.15.15.4.1" },
            children: [Field({ name: "NodeId", id: 0x1, type: "node-id", access: "RW", conformance: "M" })]
        })
    ]
}));
