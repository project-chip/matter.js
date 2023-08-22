/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "BinaryInputBasic", id: 0xf, description: "Binary Input (Basic)",
    details: "An interface for reading the value of a binary measurement and accessing various characteristics of " +
        "that measurement.",

    children: [
        {
            tag: "attribute", name: "ActiveText", id: 0x4, type: "string", access: "RW", conformance: "O",
            constraint: "max 16", default: ""
        },
        {
            tag: "attribute", name: "Description", id: 0x1c, type: "string", access: "RW", conformance: "O",
            constraint: "max 16", default: ""
        },
        {
            tag: "attribute", name: "InactiveText", id: 0x2e, type: "string", access: "RW", conformance: "O",
            constraint: "max 16", default: ""
        },
        {
            tag: "attribute", name: "OutOfService", id: 0x51, type: "bool", access: "RW", conformance: "M",
            default: true
        },
        { tag: "attribute", name: "Polarity", id: 0x54, type: "enum8", conformance: "O", default: 0 },
        {
            tag: "attribute", name: "PresentValue", id: 0x55, type: "bool", access: "RW", conformance: "M",
            quality: "P"
        },
        { tag: "attribute", name: "Reliability", id: 0x67, type: "enum8", access: "RW", conformance: "O", default: 0 },
        { tag: "attribute", name: "StatusFlags", id: 0x6f, type: "map8", conformance: "M", default: 0, quality: "P" },
        { tag: "attribute", name: "ApplicationType", id: 0x100, type: "uint32", conformance: "O" }
    ]
});
