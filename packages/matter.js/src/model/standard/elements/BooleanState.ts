/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "BooleanState", id: 0x45, classification: "application",
    description: "Boolean State",
    details: "This cluster provides an interface to a boolean state called StateValue.",
    xref: { document: "cluster", section: "1.7" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 },

        {
            tag: "attribute", name: "StateValue", id: 0x0, type: "bool", access: "R V", conformance: "M",
            quality: "P",
            details: "This represents a Boolean state.",
            xref: { document: "cluster", section: "1.7.4.1" }
        },

        {
            tag: "event", name: "StateChange", id: 0x0, access: "V", conformance: "O", priority: "info",
            details: "This event shall be generated when the StateValue attribute changes." +
                "\n" +
                "The StateValue field shall indicate the new value of the StateValue attribute.",
            xref: { document: "cluster", section: "1.7.5.1" },
            children: [{ tag: "datatype", name: "StateValue", id: 0x0, type: "bool", conformance: "M" }]
        }
    ]
});
