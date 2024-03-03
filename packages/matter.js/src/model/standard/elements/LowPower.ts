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
    CommandElement as Command
} from "../../elements/index.js";

Matter.children.push(Cluster({
    name: "LowPower", id: 0x508, classification: "application", description: "Low Power",
    details: "This cluster provides an interface for managing low power mode on a device.",
    xref: { document: "cluster", section: "1.9" },

    children: [
        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
        Command({
            name: "Sleep", id: 0x0, access: "O", conformance: "M", direction: "request", response: "status",
            details: "This command shall put the device into low power mode.",
            xref: { document: "cluster", section: "1.9.3.1" }
        })
    ]
}));
