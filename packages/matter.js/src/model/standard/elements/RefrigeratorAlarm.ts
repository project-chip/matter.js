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

export const RefrigeratorAlarm = Cluster({
    name: "RefrigeratorAlarm", id: 0x57, type: "AlarmBase", classification: "application",
    details: "This cluster is a derived cluster of Alarm Base cluster.",
    xref: { document: "cluster", section: "8.8" },

    children: [
        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

        Attribute({
            name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "cluster", section: "8.8.4" },
            children: [Field({
                name: "RESET", conformance: "X", constraint: "0", description: "Reset",
                details: "Supports the ability to reset alarms"
            })]
        }),

        Command({
            name: "ModifyEnabledAlarms", id: 0x1, conformance: "X",
            xref: { document: "cluster", section: "8.8.7" }
        }),

        Datatype({
            name: "AlarmBitmap", type: "map32",
            xref: { document: "cluster", section: "8.8.5.1" },
            children: [Field({
                name: "DoorOpen", constraint: "0",
                description: "The cabinet’s door has been open for a vendor defined amount of time."
            })]
        })
    ]
});

Matter.children.push(RefrigeratorAlarm);
