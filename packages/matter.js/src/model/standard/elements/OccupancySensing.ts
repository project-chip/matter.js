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
    DatatypeElement as Datatype,
    FieldElement as Field
} from "../../elements/index.js";

Matter.children.push(Cluster({
    name: "OccupancySensing", id: 0x406, classification: "application",
    description: "Occupancy Sensing",
    details: "Attributes and commands for configuring occupancy sensing, and reporting occupancy status.",
    xref: { document: "cluster", section: "2.7" },

    children: [
        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 }),

        Attribute({
            name: "Occupancy", id: 0x0, type: "OccupancyBitmap", access: "R V", conformance: "M",
            constraint: "0", quality: "P",
            details: "The Occupancy attribute indicates the status of occupancy.",
            xref: { document: "cluster", section: "2.7.6.1" }
        }),

        Attribute({
            name: "OccupancySensorType", id: 0x1, type: "OccupancySensorTypeEnum", access: "R V",
            conformance: "M", constraint: "desc",
            details: "The OccupancySensorType attribute specifies the type of the occupancy sensor.",
            xref: { document: "cluster", section: "2.7.6.2" }
        }),

        Attribute({
            name: "OccupancySensorTypeBitmap", id: 0x2, type: "OccupancySensorTypeBitmap", access: "R V",
            conformance: "M", constraint: "0",

            details: "The OccupancySensorTypeBitmap attribute specifies the types of the occupancy sensor. A ‘1’ in each " +
                "bit position indicates the capability is implemented." +
                "\n" +
                "The value of the OccupancySensorTypeBitmap attribute and the OccupancySensorType attribute shall be " +
                "aligned as defined below." +
                "\n" +
                "Table 32. Mapping between OccupancySensorTypeBitmap and OccupancySensorType Attributes",

            xref: { document: "cluster", section: "2.7.6.3" }
        }),

        Attribute({
            name: "PirOccupiedToUnoccupiedDelay", id: 0x10, type: "uint16", access: "RW VM", conformance: "O",
            default: 0,
            details: "The PIROccupiedToUnoccupiedDelay attribute specifies the time delay, in seconds, before the PIR " +
                "sensor changes to its unoccupied state after the last detection of movement in the sensed area.",
            xref: { document: "cluster", section: "2.7.7.1" }
        }),

        Attribute({
            name: "PirUnoccupiedToOccupiedDelay", id: 0x11, type: "uint16", access: "RW VM", conformance: "O",
            default: 0,
            details: "The PIRUnoccupiedToOccupiedDelay attribute specifies the time delay, in seconds, before the PIR " +
                "sensor changes to its occupied state after the detection of movement in the sensed area. This " +
                "attribute is mandatory if the PIRUnoccupiedToOccupiedThreshold attribute is implemented.",
            xref: { document: "cluster", section: "2.7.7.2" }
        }),

        Attribute({
            name: "PirUnoccupiedToOccupiedThreshold", id: 0x12, type: "uint8", access: "RW VM",
            conformance: "O", constraint: "1 to 254", default: 1,
            details: "The PIRUnoccupiedToOccupiedThreshold attribute specifies the number of movement detection events " +
                "that must occur in the period PIRUnoccupiedToOccupiedDelay, before the PIR sensor changes to its " +
                "occupied state. This attribute is mandatory if the PIRUnoccupiedToOccupiedDelay attribute is " +
                "implemented.",
            xref: { document: "cluster", section: "2.7.7.3" }
        }),

        Attribute({
            name: "UltrasonicOccupiedToUnoccupiedDelay", id: 0x20, type: "uint16", access: "RW VM",
            conformance: "O", default: 0,
            details: "The UltrasonicOccupiedToUnoccupiedDelay attribute and specifies the time delay, in seconds, before " +
                "the Ultrasonic sensor changes to its unoccupied state after the last detection of movement in the " +
                "sensed area.",
            xref: { document: "cluster", section: "2.7.8.1" }
        }),

        Attribute({
            name: "UltrasonicUnoccupiedToOccupiedDelay", id: 0x21, type: "uint16", access: "RW VM",
            conformance: "O", default: 0,
            details: "The UltrasonicUnoccupiedToOccupiedDelay attribute and specifies the time delay, in seconds, before " +
                "the Ultrasonic sensor changes to its occupied state after the detection of movement in the sensed " +
                "area. This attribute is mandatory if the UltrasonicUnoccupiedToOccupiedThreshold attribute is " +
                "implemented.",
            xref: { document: "cluster", section: "2.7.8.2" }
        }),

        Attribute({
            name: "UltrasonicUnoccupiedToOccupiedThreshold", id: 0x22, type: "uint8", access: "RW VM",
            conformance: "O", constraint: "1 to 254", default: 1,
            details: "The UltrasonicUnoccupiedToOccupiedThreshold attribute specifies the number of movement detection " +
                "events that must occur in the period UltrasonicUnoccupiedToOccupiedDelay, before the Ultrasonic " +
                "sensor changes to its occupied state. This attribute is mandatory if the " +
                "UltrasonicUnoccupiedToOccupiedDelay attribute is implemented.",
            xref: { document: "cluster", section: "2.7.8.3" }
        }),

        Attribute({
            name: "PhysicalContactOccupiedToUnoccupiedDelay", id: 0x30, type: "uint16", access: "RW VM",
            conformance: "O", default: 0, quality: "X",
            details: "The PhysicalContactOccupiedToUnoccupiedDelay attribute specifies the time delay, in seconds, before " +
                "the physical contact occupancy sensor changes to its unoccupied state after detecting the " +
                "unoccupied event. The null value indicates that the sensor does not report occupied to unoccupied " +
                "transition.",
            xref: { document: "cluster", section: "2.7.9.1" }
        }),

        Attribute({
            name: "PhysicalContactUnoccupiedToOccupiedDelay", id: 0x31, type: "uint16", access: "RW VM",
            conformance: "O", default: 0, quality: "X",
            details: "The PhysicalContactUnoccupiedToOccupiedDelay attribute specifies the time delay, in seconds, before " +
                "the physical contact sensor changes to its occupied state after the detection of the occupied event." +
                "\n" +
                "The null value indicates that the sensor does not report unoccupied to occupied transition.",
            xref: { document: "cluster", section: "2.7.9.2" }
        }),

        Attribute({
            name: "PhysicalContactUnoccupiedToOccupiedThreshold", id: 0x32, type: "uint8", access: "RW VM",
            conformance: "O", constraint: "1 to 254", default: 1,
            details: "The PhysicalContactUnoccupiedToOccupiedThreshold attribute specifies the number of movement " +
                "detection events that must occur in the period PhysicalContactUnoccupiedToOccupiedDelay, before the " +
                "PIR sensor changes to its occupied state. This attribute is mandatory if the " +
                "PhysicalContactUnoccupiedToOccupiedDelay attribute is implemented.",
            xref: { document: "cluster", section: "2.7.9.3" }
        }),

        Datatype({
            name: "OccupancyBitmap", type: "map8", conformance: "M",
            details: "All other bits are reserved.",
            xref: { document: "cluster", section: "2.7.5.1" },

            children: [
                Field({
                    name: "Occupied", constraint: "0",
                    description: "Indicates the sensed occupancy state; 1 = occupied, 0 = unoccupied."
                })
            ]
        }),

        Datatype({
            name: "OccupancySensorTypeEnum", type: "enum8", conformance: "M",
            xref: { document: "cluster", section: "2.7.5.2" },

            children: [
                Field({ name: "Pir", id: 0x0, conformance: "M", description: "Indicates a passive infrared sensor." }),
                Field({ name: "Ultrasonic", id: 0x1, conformance: "M", description: "Indicates a ultrasonic sensor." }),
                Field({
                    name: "PirAndUltrasonic", id: 0x2, conformance: "M",
                    description: "Indicates a passive infrared and ultrasonic sensor."
                }),
                Field({
                    name: "PhysicalContact", id: 0x3, conformance: "M",
                    description: "Indicates a physical contact sensor."
                })
            ]
        }),

        Datatype({
            name: "OccupancySensorTypeBitmap", type: "map8", conformance: "M",
            xref: { document: "cluster", section: "2.7.5.3" },
            children: [
                Field({ name: "Pir", constraint: "0", description: "Indicates a passive infrared sensor." }),
                Field({ name: "Ultrasonic", constraint: "1", description: "Indicates a ultrasonic sensor." }),
                Field({ name: "PhysicalContact", constraint: "2", description: "Indicates a physical contact sensor." })
            ]
        })
    ]
}));
