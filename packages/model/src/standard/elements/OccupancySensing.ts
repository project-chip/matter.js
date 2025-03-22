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
    FieldElement as Field,
    EventElement as Event,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const OccupancySensing = Cluster(
    {
        name: "OccupancySensing", id: 0x406, classification: "application", pics: "OCC",
        details: "The server cluster provides an interface to occupancy sensing functionality based on one or more " +
            "sensing modalities, including configuration and provision of notifications of occupancy status.",
        xref: { document: "cluster", section: "2.7" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 5 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "2.7.4" } },
        Field({
            name: "OTHER", conformance: "O.a+", constraint: "0", description: "Other",
            details: "Supports sensing using a modality not listed in the other bits"
        }),
        Field({
            name: "PIR", conformance: "O.a+", constraint: "1", description: "PassiveInfrared",
            details: "Supports sensing using PIR (Passive InfraRed)"
        }),
        Field({
            name: "US", conformance: "O.a+", constraint: "2", description: "Ultrasonic",
            details: "Supports sensing using UltraSound"
        }),
        Field({
            name: "PHY", conformance: "O.a+", constraint: "3", description: "PhysicalContact",
            details: "Supports sensing using a physical contact"
        }),
        Field({
            name: "AIR", conformance: "O.a+", constraint: "4", description: "ActiveInfrared",
            details: "Supports sensing using Active InfraRed measurement (e.g. time-of- flight or transflective/reflective " +
                "IR sensing)"
        }),
        Field({
            name: "RAD", conformance: "O.a+", constraint: "5", description: "Radar",
            details: "Supports sensing using radar waves (microwave)"
        }),
        Field({
            name: "RFS", conformance: "O.a+", constraint: "6", description: "RfSensing",
            details: "Supports sensing based on RF signal analysis"
        }),
        Field({
            name: "VIS", conformance: "O.a+", constraint: "7", description: "Vision",
            details: "Supports sensing based on analyzing images"
        })
    ),

    Attribute({
        name: "Occupancy", id: 0x0, type: "OccupancyBitmap", access: "R V", conformance: "M",
        constraint: "0 to 1", quality: "P",
        details: "Indicates the sensed (processed) status of occupancy. For compatibility reasons this is expressed as " +
            "a bitmap where the status is indicated in bit 0: a value of 1 means occupied, and 0 means " +
            "unoccupied, with the other bits set to 0; this can be considered equivalent to a boolean.",
        xref: { document: "cluster", section: "2.7.6.1" }
    }),

    Attribute({
        name: "OccupancySensorType", id: 0x1, type: "OccupancySensorTypeEnum", access: "R V",
        conformance: "M, D", constraint: "desc", quality: "F",
        xref: { document: "cluster", section: "2.7.6" }
    }),
    Attribute({
        name: "OccupancySensorTypeBitmap", id: 0x2, type: "OccupancySensorTypeBitmap", access: "R V",
        conformance: "M, D", constraint: "0 to 7", quality: "F",
        xref: { document: "cluster", section: "2.7.6" }
    }),

    Attribute({
        name: "HoldTime", id: 0x3, type: "uint16", access: "RW VM", conformance: "O", constraint: "desc",
        quality: "N",

        details: "This attribute shall specify the time delay, in seconds, before the sensor changes to its unoccupied " +
            "state after the last detection of occupancy in the sensed area. This is equivalent to the legacy " +
            "*OccupiedToUnoccupiedDelay attributes." +
            "\n" +
            "The value of HoldTime shall be within the limits provided in the HoldTimeLimits attribute, i.e. " +
            "HoldTimeMin <= HoldTime <= HoldTimeMax" +
            "\n" +
            "Low values of HoldTime SHOULD be avoided since they could lead to many reporting messages. A value 0 " +
            "for HoldTime shall NOT be used." +
            "\n" +
            "The figure below illustrates this with an example of how this attribute is used for a PIR sensor. It " +
            "uses threshold detection to generate an \"internal detection\" signal, which needs post-processing to " +
            "become usable for transmission (traffic shaping). The bit in the Occupancy attribute will be set to " +
            "1 when the internal detection signal goes high, and will stay at 1 for HoldTime after the (last) " +
            "instance where the internal detection signal goes low." +
            "\n" +
            "The top half of the figure shows the case of a single trigger: the bit in the Occupancy attribute " +
            "will be 1 for the duration of the PIR signal exceeding the threshold plus HoldTime. The bottom half " +
            "of the figure shows the case of multiple triggers: the second trigger starts before the HoldTime of " +
            "the first trigger has expired; this results in a single period of the bit in the Occupancy attribute " +
            "being 1. The bit in the Occupancy attribute will be set to 1 from the start of the first period " +
            "where the PIR signal exceeds the threshold until HoldTime after the last moment where the PIR " +
            "exceeded the threshold." +
            "\n" +
            "Figure 13. Processing of PIR signal towards Occupancy attribute using HoldTime",

        xref: { document: "cluster", section: "2.7.6.3" }
    }),

    Attribute({
        name: "HoldTimeLimits", id: 0x4, type: "HoldTimeLimitsStruct", access: "R V",
        conformance: "HoldTime", quality: "F",
        details: "Indicates the server’s limits, and default value, for the HoldTime attribute.",
        xref: { document: "cluster", section: "2.7.6.4" }
    }),

    Attribute({
        name: "PirOccupiedToUnoccupiedDelay", id: 0x10, type: "uint16", access: "RW VM",
        conformance: "[HoldTime & (PIR | !PIR & !US & !PHY)], D", default: 0, quality: "N",
        details: "This attribute shall specify the time delay, in seconds, before the PIR sensor changes to its " +
            "unoccupied state after the last detection of occupancy in the sensed area.",
        xref: { document: "cluster", section: "2.7.6.6" }
    }),

    Attribute({
        name: "PirUnoccupiedToOccupiedDelay", id: 0x11, type: "uint16", access: "RW VM",
        conformance: "HoldTime & (PIR | !PIR & !US & !PHY) & PirUnoccupiedToOccupiedThreshold, [HoldTime & (PIR | !PIR & !US & !PHY)], D",
        default: 0, quality: "N",
        details: "This attribute shall specify the time delay, in seconds, before the PIR sensor changes to its " +
            "occupied state after the first detection of occupancy in the sensed area.",
        xref: { document: "cluster", section: "2.7.6.7" }
    }),

    Attribute({
        name: "PirUnoccupiedToOccupiedThreshold", id: 0x12, type: "uint8", access: "RW VM",
        conformance: "HoldTime & (PIR | !PIR & !US & !PHY) & PirUnoccupiedToOccupiedDelay, [HoldTime & (PIR | !PIR & !US & !PHY)], D",
        constraint: "1 to 254", default: 1, quality: "N",
        details: "This attribute shall specify the number of occupancy detection events that must occur in the period " +
            "PIRUnoccupiedToOccupiedDelay, before the PIR sensor changes to its occupied state.",
        xref: { document: "cluster", section: "2.7.6.8" }
    }),

    Attribute({
        name: "UltrasonicOccupiedToUnoccupiedDelay", id: 0x20, type: "uint16", access: "RW VM",
        conformance: "[HoldTime & US], D", default: 0, quality: "N",
        details: "This attribute shall specify the time delay, in seconds, before the Ultrasonic sensor changes to its " +
            "unoccupied state after the last detection of occupancy in the sensed area.",
        xref: { document: "cluster", section: "2.7.6.9" }
    }),

    Attribute({
        name: "UltrasonicUnoccupiedToOccupiedDelay", id: 0x21, type: "uint16", access: "RW VM",
        conformance: "HoldTime & US & UltrasonicUnoccupiedToOccupiedThreshold, [HoldTime & US], D",
        default: 0, quality: "N",
        details: "This attribute shall specify the time delay, in seconds, before the Ultrasonic sensor changes to its " +
            "occupied state after the first detection of occupancy in the sensed area.",
        xref: { document: "cluster", section: "2.7.6.10" }
    }),

    Attribute({
        name: "UltrasonicUnoccupiedToOccupiedThreshold", id: 0x22, type: "uint8", access: "RW VM",
        conformance: "HoldTime & US & UltrasonicUnoccupiedToOccupiedDelay, [HoldTime & US], D",
        constraint: "1 to 254", default: 1, quality: "N",
        details: "This attribute shall specify the number of occupancy detection events that must occur in the period " +
            "UltrasonicUnoccupiedToOccupiedDelay, before the Ultrasonic sensor changes to its occupied state.",
        xref: { document: "cluster", section: "2.7.6.11" }
    }),

    Attribute({
        name: "PhysicalContactOccupiedToUnoccupiedDelay", id: 0x30, type: "uint16", access: "RW VM",
        conformance: "[HoldTime & PHY], D", default: 0, quality: "N",
        details: "This attribute shall specify the time delay, in seconds, before the physical contact occupancy " +
            "sensor changes to its unoccupied state after detecting the unoccupied event.",
        xref: { document: "cluster", section: "2.7.6.12" }
    }),

    Attribute({
        name: "PhysicalContactUnoccupiedToOccupiedDelay", id: 0x31, type: "uint16", access: "RW VM",
        conformance: "HoldTime & PHY & PhysicalContactUnoccupiedToOccupiedThreshold, [HoldTime & PHY], D",
        default: 0, quality: "N",
        details: "This attribute shall specify the time delay, in seconds, before the physical contact sensor changes " +
            "to its occupied state after the first detection of the occupied event.",
        xref: { document: "cluster", section: "2.7.6.13" }
    }),

    Attribute({
        name: "PhysicalContactUnoccupiedToOccupiedThreshold", id: 0x32, type: "uint8", access: "RW VM",
        conformance: "HoldTime & PHY & PhysicalContactUnoccupiedToOccupiedDelay, [HoldTime & PHY], D",
        constraint: "1 to 254", default: 1, quality: "N",
        details: "This attribute shall specify the number of occupancy detection events that must occur in the period " +
            "PhysicalContactUnoccupiedToOccupiedDelay, before the PhysicalContact sensor changes to its occupied " +
            "state.",
        xref: { document: "cluster", section: "2.7.6.14" }
    }),

    Event(
        {
            name: "OccupancyChanged", id: 0x0, access: "V", conformance: "O", priority: "info",
            details: "If this event is supported, it shall be generated when the Occupancy attribute changes.",
            xref: { document: "cluster", section: "2.7.7.1" }
        },
        Field({
            name: "Occupancy", id: 0x0, type: "OccupancyBitmap", conformance: "M",
            details: "This field shall indicate the new value of the Occupancy attribute.",
            xref: { document: "cluster", section: "2.7.7.1.1" }
        })
    ),

    Datatype(
        { name: "OccupancyBitmap", type: "map8", xref: { document: "cluster", section: "2.7.5.1" } },

        Field({
            name: "Occupied", constraint: "0", description: "Indicates the sensed occupancy state",
            details: "If this bit is set, it shall indicate the occupied state else if the bit if not set, it shall " +
                "indicate the unoccupied state.",
            xref: { document: "cluster", section: "2.7.5.1.1" }
        })
    ),

    Datatype(
        {
            name: "OccupancySensorTypeBitmap", type: "map8",
            details: "NOTE" +
                "\n" +
                "This enum is as defined in ClusterRevision 4 and its definition shall NOT be extended; the feature " +
                "flags provide the sensor modality (or modalities) for later cluster revisions. See Backward " +
                "Compatibility section.",
            xref: { document: "cluster", section: "2.7.5.2" }
        },

        Field({ name: "Pir", constraint: "0", description: "Indicates a passive infrared sensor." }),
        Field({ name: "Ultrasonic", constraint: "1", description: "Indicates a ultrasonic sensor." }),
        Field({ name: "PhysicalContact", constraint: "2", description: "Indicates a physical contact sensor." })
    ),

    Datatype(
        {
            name: "OccupancySensorTypeEnum", type: "enum8",

            details: "NOTE" +
                "\n" +
                "This enum is as defined in ClusterRevision 4 and its definition shall NOT be" +
                "\n" +
                "extended; the feature flags provide the sensor modality (or modalities) for later cluster revisions. " +
                "See Backward Compatibility section.",

            xref: { document: "cluster", section: "2.7.5.3" }
        },

        Field({ name: "Pir", id: 0x0, conformance: "M", description: "Indicates a passive infrared sensor." }),
        Field({ name: "Ultrasonic", id: 0x1, conformance: "M", description: "Indicates a ultrasonic sensor." }),
        Field({
            name: "PirAndUltrasonic", id: 0x2, conformance: "M",
            description: "Indicates a passive infrared and ultrasonic sensor."
        }),
        Field({ name: "PhysicalContact", id: 0x3, conformance: "M", description: "Indicates a physical contact sensor." })
    ),

    Datatype(
        {
            name: "HoldTimeLimitsStruct", type: "struct",
            details: "This structure provides information on the server’s supported values for the HoldTime attribute.",
            xref: { document: "cluster", section: "2.7.5.4" }
        },

        Field({
            name: "HoldTimeMin", id: 0x0, type: "uint16", conformance: "M", constraint: "min 1",
            details: "This field shall specify the minimum value of the server’s supported value for the HoldTime " +
                "attribute, in seconds.",
            xref: { document: "cluster", section: "2.7.5.4.1" }
        }),

        Field({
            name: "HoldTimeMax", id: 0x1, type: "uint16", conformance: "M",
            constraint: "min holdTimeMin, min 10",
            details: "This field shall specify the maximum value of the server’s supported value for the HoldTime " +
                "attribute, in seconds.",
            xref: { document: "cluster", section: "2.7.5.4.2" }
        }),

        Field({
            name: "HoldTimeDefault", id: 0x2, type: "uint16", conformance: "M",
            constraint: "holdTimeMin to holdTimeMax",
            details: "This field shall specify the (manufacturer-determined) default value of the server’s HoldTime " +
                "attribute, in seconds. This is the value that a client who wants to reset the settings to a valid " +
                "default SHOULD use.",
            xref: { document: "cluster", section: "2.7.5.4.3" }
        })
    )
);

MatterDefinition.children.push(OccupancySensing);
