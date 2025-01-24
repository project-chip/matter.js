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
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const ValidProxies = Cluster(
    {
        name: "ValidProxies", id: 0x44, classification: "node", pics: "PXVALID",
        details: "This cluster provides a means for a device to be told of the valid set of possible proxies that can " +
            "proxy subscriptions on its behalf as per Section 9.15.7, “Proxy Discovery & Assignment Flow”.",
        xref: { document: "core", section: "9.15.14" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        {
            name: "ValidProxyList", id: 0x0, type: "list", access: "RW", conformance: "M", default: [],
            quality: "N F",
            details: "List of valid proxies that can proxy this Node. Each entry in this list is fabric-scoped.",
            xref: { document: "core", section: "9.15.14.5.1" }
        },

        Field({ name: "entry", type: "ValidProxyStruct" })
    ),

    Command({
        name: "GetValidProxiesRequest", id: 0x0, access: "O", conformance: "M", direction: "request",
        response: "GetValidProxiesResponse",
        details: "This command is used during proxy discovery, as specified in Section 9.15.7, “Proxy Discovery & " +
            "Assignment Flow”.",
        xref: { document: "core", section: "9.15.14.6.1" }
    }),

    Command(
        {
            name: "GetValidProxiesResponse", id: 0x1, conformance: "M", direction: "response",
            details: "This command is used during proxy discovery, as specified in Section 9.15.7, “Proxy Discovery & " +
                "Assignment Flow”.",
            xref: { document: "core", section: "9.15.14.6.2" }
        },

        Field(
            { name: "ProxyNodeIdList", id: 0x0, type: "list", conformance: "M" },
            Field({ name: "entry", type: "node-id" })
        )
    ),

    Datatype(
        {
            name: "ValidProxyStruct", type: "struct",
            details: "Encapsulates the Node ID of a Valid Proxy.",
            xref: { document: "core", section: "9.15.14.4.1" }
        },
        Field({ name: "NodeId", id: 0x1, type: "node-id", access: "RW", conformance: "M" })
    )
);

MatterDefinition.children.push(ValidProxies);
