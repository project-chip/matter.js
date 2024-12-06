/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
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

export const OccupancySensing = Cluster(
    {
        name: "OccupancySensing", id: 0x406, classification: "application", pics: "OCC",
        details: "The server cluster provides an interface to occupancy sensing functionality, including " +
            "configuration and provision of notifications of occupancy status.",
        xref: { document: "cluster", section: "2.7" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 4 }),

    Attribute({
        name: "Occupancy", id: 0x0, type: "OccupancyBitmap", access: "R V", conformance: "M",
        constraint: "0 to 1", quality: "P",
        details: "This attribute indicates the sensed (processed) status of occupancy.",
        xref: { document: "cluster", section: "2.7.5.1" }
    }),

    Attribute({
        name: "OccupancySensorType", id: 0x1, type: "OccupancySensorTypeEnum", access: "R V",
        conformance: "M", constraint: "desc",
        details: "This attribute specifies the type of the occupancy sensor.",
        xref: { document: "cluster", section: "2.7.5.2" }
    }),

    Attribute({
        name: "OccupancySensorTypeBitmap", id: 0x2, type: "OccupancySensorTypeBitmap", access: "R V",
        conformance: "M", constraint: "0 to 7",
        details: "This attribute specifies the types of the occupancy sensor. Each bit position, if set, indicates " +
            "the corresponding sensing capability is implemented." +
            "\n" +
            "The value of the OccupancySensorType shall be aligned to the value of the OccupancySensorTypeBitmap " +
            "attribute as defined below.",
        xref: { document: "cluster", section: "2.7.5.3" }
    }),

    Attribute({
        name: "PirOccupiedToUnoccupiedDelay", id: 0x10, type: "uint16", access: "RW VM", conformance: "O",
        default: 0,
        details: "This attribute specifies the time delay, in seconds, before the PIR sensor changes to its " +
            "unoccupied state after the last detection of movement in the sensed area.",
        xref: { document: "cluster", section: "2.7.5.4" }
    }),

    Attribute({
        name: "PirUnoccupiedToOccupiedDelay", id: 0x11, type: "uint16", access: "RW VM",
        conformance: "PirUnoccupiedToOccupiedThreshold, O", default: 0,
        details: "This attribute specifies the time delay, in seconds, before the PIR sensor changes to its occupied " +
            "state after the detection of movement in the sensed area.",
        xref: { document: "cluster", section: "2.7.5.5" }
    }),

    Attribute({
        name: "PirUnoccupiedToOccupiedThreshold", id: 0x12, type: "uint8", access: "RW VM",
        conformance: "PirUnoccupiedToOccupiedDelay, O", constraint: "1 to 254", default: 1,
        details: "This attribute specifies the number of movement detection events that must occur in the period " +
            "PIRUnoccupiedToOccupiedDelay, before the PIR sensor changes to its occupied state.",
        xref: { document: "cluster", section: "2.7.5.6" }
    }),

    Attribute({
        name: "UltrasonicOccupiedToUnoccupiedDelay", id: 0x20, type: "uint16", access: "RW VM",
        conformance: "O", default: 0,
        details: "This attribute specifies the time delay, in seconds, before the Ultrasonic sensor changes to its " +
            "unoccupied state after the last detection of movement in the sensed area.",
        xref: { document: "cluster", section: "2.7.5.7" }
    }),

    Attribute({
        name: "UltrasonicUnoccupiedToOccupiedDelay", id: 0x21, type: "uint16", access: "RW VM",
        conformance: "UltrasonicUnoccupiedToOccupiedThreshold, O", default: 0,
        details: "This attribute specifies the time delay, in seconds, before the Ultrasonic sensor changes to its " +
            "occupied state after the detection of movement in the sensed area.",
        xref: { document: "cluster", section: "2.7.5.8" }
    }),

    Attribute({
        name: "UltrasonicUnoccupiedToOccupiedThreshold", id: 0x22, type: "uint8", access: "RW VM",
        conformance: "UltrasonicUnoccupiedToOccupiedDelay, O", constraint: "1 to 254", default: 1,
        details: "This attribute specifies the number of movement detection events that must occur in the period " +
            "UltrasonicUnoccupiedToOccupiedDelay, before the Ultrasonic sensor changes to its occupied state.",
        xref: { document: "cluster", section: "2.7.5.9" }
    }),

    Attribute({
        name: "PhysicalContactOccupiedToUnoccupiedDelay", id: 0x30, type: "uint16", access: "RW VM",
        conformance: "O", default: 0,
        details: "This attribute specifies the time delay, in seconds, before the physical contact occupancy sensor " +
            "changes to its unoccupied state after detecting the unoccupied event.",
        xref: { document: "cluster", section: "2.7.5.10" }
    }),

    Attribute({
        name: "PhysicalContactUnoccupiedToOccupiedDelay", id: 0x31, type: "uint16", access: "RW VM",
        conformance: "O", default: 0,
        details: "This attribute specifies the time delay, in seconds, before the physical contact sensor changes to " +
            "its occupied state after the detection of the occupied event.",
        xref: { document: "cluster", section: "2.7.5.11" }
    }),

    Attribute({
        name: "PhysicalContactUnoccupiedToOccupiedThreshold", id: 0x32, type: "uint8", access: "RW VM",
        conformance: "PhysicalContactUnoccupiedToOccupiedDelay, O", constraint: "1 to 254", default: 1,
        details: "This attribute specifies the number of movement detection events that must occur in the period " +
            "PhysicalContactUnoccupiedToOccupiedDelay, before the PhysicalContact sensor changes to its occupied " +
            "state.",
        xref: { document: "cluster", section: "2.7.5.12" }
    }),

    Datatype(
        { name: "OccupancyBitmap", type: "map8", xref: { document: "cluster", section: "2.7.4.1" } },

        Field({
            name: "Occupied", constraint: "0", description: "Indicates the sensed occupancy state",
            details: "If this bit is set, it shall indicate the occupied state else if the bit if not set, it shall " +
                "indicate the unoccupied state.",
            xref: { document: "cluster", section: "2.7.4.1.1" }
        })
    ),

    Datatype(
        { name: "OccupancySensorTypeBitmap", type: "map8", xref: { document: "cluster", section: "2.7.4.2" } },
        Field({ name: "Pir", constraint: "0", description: "Indicates a passive infrared sensor." }),
        Field({ name: "Ultrasonic", constraint: "1", description: "Indicates a ultrasonic sensor." }),
        Field({ name: "PhysicalContact", constraint: "2", description: "Indicates a physical contact sensor." })
    ),

    Datatype(
        { name: "OccupancySensorTypeEnum", type: "enum8", xref: { document: "cluster", section: "2.7.4.3" } },
        Field({ name: "Pir", id: 0x0, conformance: "M", description: "Indicates a passive infrared sensor." }),
        Field({ name: "Ultrasonic", id: 0x1, conformance: "M", description: "Indicates a ultrasonic sensor." }),
        Field({
            name: "PirAndUltrasonic", id: 0x2, conformance: "M",
            description: "Indicates a passive infrared and ultrasonic sensor."
        }),
        Field({ name: "PhysicalContact", id: 0x3, conformance: "M", description: "Indicates a physical contact sensor." })
    )
);

MatterDefinition.children.push(OccupancySensing);
