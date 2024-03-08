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
    CommandElement as Command,
    FieldElement as Field
} from "../../elements/index.js";

Matter.children.push(Cluster({
    name: "BarrierControl", id: 0x103, description: "Barrier Control",
    details: "This cluster provides control of a barrier (garage door).",

    children: [
        Attribute({ name: "BarrierMovingState", id: 0x1, type: "enum8", conformance: "M" }),
        Attribute({ name: "BarrierSafetyStatus", id: 0x2, type: "map16", conformance: "M" }),
        Attribute({ name: "BarrierCapabilities", id: 0x3, type: "map8", conformance: "M" }),
        Attribute({
            name: "BarrierOpenEvents", id: 0x4, type: "uint16", access: "RW", conformance: "O",
            constraint: "max 65534", default: 0
        }),
        Attribute({
            name: "BarrierCloseEvents", id: 0x5, type: "uint16", access: "RW", conformance: "O",
            constraint: "max 65534", default: 0
        }),
        Attribute({
            name: "BarrierCommandOpenEvents", id: 0x6, type: "uint16", access: "RW", conformance: "O",
            constraint: "max 65534", default: 0
        }),
        Attribute({
            name: "BarrierCommandCloseEvents", id: 0x7, type: "uint16", access: "RW", conformance: "O",
            constraint: "max 65534", default: 0
        }),
        Attribute({
            name: "BarrierOpenPeriod", id: 0x8, type: "uint16", access: "RW", conformance: "O",
            constraint: "max 65534"
        }),
        Attribute({
            name: "BarrierClosePeriod", id: 0x9, type: "uint16", access: "RW", conformance: "O",
            constraint: "max 65534"
        }),
        Attribute({ name: "BarrierPosition", id: 0xa, type: "uint8", conformance: "M" }),
        Command({
            name: "BarrierControlGoToPercent", id: 0x0, conformance: "M", direction: "request",
            children: [Field({ name: "PercentOpen", type: "uint8", conformance: "M" })]
        }),
        Command({ name: "BarrierControlStop", id: 0x1, conformance: "M", direction: "request" })
    ]
}));
