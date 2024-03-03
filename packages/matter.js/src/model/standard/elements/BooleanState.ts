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
    EventElement as Event,
    FieldElement as Field
} from "../../elements/index.js";

Matter.children.push(Cluster({
    name: "BooleanState", id: 0x45, classification: "application", description: "Boolean State",
    details: "This cluster provides an interface to a boolean state called StateValue.",
    xref: { document: "cluster", section: "1.7" },

    children: [
        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
        Attribute({
            name: "StateValue", id: 0x0, type: "bool", access: "R V", conformance: "M", quality: "P",
            details: "This represents a Boolean state.",
            xref: { document: "cluster", section: "1.7.4.1" }
        }),

        Event({
            name: "StateChange", id: 0x0, access: "V", conformance: "O", priority: "info",
            details: "This event shall be generated when the StateValue attribute changes." +
                "\n" +
                "The StateValue field shall indicate the new value of the StateValue attribute.",
            xref: { document: "cluster", section: "1.7.5.1" },
            children: [Field({ name: "StateValue", id: 0x0, type: "bool", conformance: "M" })]
        })
    ]
}));
