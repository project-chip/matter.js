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
    EventElement as Event,
    FieldElement as Field
} from "../../elements/index.js";

export const BooleanState = Cluster(
    {
        name: "BooleanState", id: 0x45, classification: "application", pics: "BOOL",
        details: "This cluster provides an interface to a boolean state.",
        xref: { document: "cluster", section: "1.7" }
    },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute({
        name: "StateValue", id: 0x0, type: "bool", access: "R V", conformance: "M", quality: "P",
        details: "This represents a boolean state." +
            "\n" +
            "The semantics of this boolean state are defined by the device type using this cluster." +
            "\n" +
            "For example, in a Contact Sensor device type, FALSE=open or no contact, TRUE=closed or contact.",
        xref: { document: "cluster", section: "1.7.4.1" }
    }),

    Event(
        {
            name: "StateChange", id: 0x0, access: "V", conformance: "O", priority: "info",
            details: "If this event is supported, it shall be generated when the StateValue attribute changes.",
            xref: { document: "cluster", section: "1.7.5.1" }
        },
        Field({
            name: "StateValue", id: 0x0, type: "bool", conformance: "M",
            details: "This field shall indicate the new value of the StateValue attribute.",
            xref: { document: "cluster", section: "1.7.5.1.1" }
        })
    )
);

MatterDefinition.children.push(BooleanState);
