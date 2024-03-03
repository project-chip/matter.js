/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { ClusterElement as Cluster, AttributeElement as Attribute } from "../../elements/index.js";

Matter.children.push(Cluster({
    name: "BinaryInputBasic", id: 0xf, description: "Binary Input (Basic)",
    details: "An interface for reading the value of a binary measurement and accessing various characteristics of " +
        "that measurement.",

    children: [
        Attribute({
            name: "ActiveText", id: 0x4, type: "string", access: "RW", conformance: "O", constraint: "max 16",
            default: ""
        }),
        Attribute({
            name: "Description", id: 0x1c, type: "string", access: "RW", conformance: "O", constraint: "max 16",
            default: ""
        }),
        Attribute({
            name: "InactiveText", id: 0x2e, type: "string", access: "RW", conformance: "O",
            constraint: "max 16", default: ""
        }),
        Attribute({ name: "OutOfService", id: 0x51, type: "bool", access: "RW", conformance: "M", default: true }),
        Attribute({ name: "Polarity", id: 0x54, type: "enum8", conformance: "O", default: 0 }),
        Attribute({ name: "PresentValue", id: 0x55, type: "bool", access: "RW", conformance: "M", quality: "P" }),
        Attribute({ name: "Reliability", id: 0x67, type: "enum8", access: "RW", conformance: "O", default: 0 }),
        Attribute({ name: "StatusFlags", id: 0x6f, type: "map8", conformance: "M", default: 0, quality: "P" }),
        Attribute({ name: "ApplicationType", id: 0x100, type: "uint32", conformance: "O" })
    ]
}));
