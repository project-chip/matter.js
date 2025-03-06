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
    DatatypeElement as Datatype,
    FieldElement as Field
} from "../../elements/index.js";

export const DishwasherAlarm = Cluster(
    {
        name: "DishwasherAlarm", id: 0x5d, type: "AlarmBase", classification: "application",
        pics: "DISHALM",
        details: "This cluster is a derived cluster of the Alarm Base cluster and provides the alarm definition " +
            "related to dishwasher devices.",
        xref: { document: "cluster", section: "8.4" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Datatype(
        { name: "AlarmBitmap", type: "map32", xref: { document: "cluster", section: "8.4.4.1" } },
        Field({ name: "InflowError", constraint: "0", description: "Water inflow is abnormal" }),
        Field({ name: "DrainError", constraint: "1", description: "Water draining is abnormal" }),
        Field({ name: "DoorError", constraint: "2", description: "Door or door lock is abnormal" }),
        Field({ name: "TempTooLow", constraint: "3", description: "Unable to reach normal temperature" }),
        Field({ name: "TempTooHigh", constraint: "4", description: "Temperature is too high" }),
        Field({ name: "WaterLevelError", constraint: "5", description: "Water level is abnormal" })
    )
);

MatterDefinition.children.push(DishwasherAlarm);
