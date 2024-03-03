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
    DatatypeElement as Datatype
} from "../../elements/index.js";

Matter.children.push(Cluster({
    name: "TimeFormatLocalization", id: 0x2c, classification: "node",
    description: "Time Format Localization",

    details: "Nodes should be expected to be deployed to any and all regions of the world. These global regions " +
        "may have differing preferences for how dates and times are conveyed. As such, Nodes that visually " +
        "or audibly convey time information need a mechanism by which they can be configured to use a user’s " +
        "preferred format." +
        "\n" +
        "This cluster supports an interface to a Node. It provides attributes for determining and " +
        "configuring time and date formatting information that a Node shall utilize when conveying values to " +
        "a user.",

    xref: { document: "core", section: "11.4" },

    children: [
        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

        Attribute({
            name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "core", section: "11.4.4" },
            children: [Field({
                name: "CALFMT", constraint: "0", description: "CalendarFormat",
                details: "The Node can be configured to use different calendar formats when conveying values to a user."
            })]
        }),

        Attribute({
            name: "HourFormat", id: 0x0, type: "HourFormatEnum", access: "RW VM", conformance: "M",
            default: null, quality: "X N",
            details: "The HourFormat attribute shall represent the format that the Node is currently configured to use " +
                "when conveying the hour unit of time. If provided, this value shall take priority over any unit" +
                "\n" +
                "implied through the ActiveLocale Attribute.",
            xref: { document: "core", section: "11.4.6.1" }
        }),

        Attribute({
            name: "ActiveCalendarType", id: 0x1, type: "CalendarTypeEnum", access: "RW VM",
            conformance: "CALFMT", default: null, quality: "X N",
            details: "The ActiveCalendarType attribute shall represent the calendar format that the Node is currently " +
                "configured to use when conveying dates. If provided, this value shall take priority over any unit " +
                "implied through the ActiveLocale Attribute.",
            xref: { document: "core", section: "11.4.6.2" }
        }),

        Attribute({
            name: "SupportedCalendarTypes", id: 0x2, type: "list", access: "R V", conformance: "CALFMT",
            constraint: "desc", quality: "F",
            details: "The SupportedCalendarTypes attribute shall represent a list of CalendarTypeEnum values that are " +
                "supported by the Node. The list shall NOT contain any duplicate entries. The ordering of items " +
                "within the list SHOULD NOT express any meaning. The maximum length of the SupportedCalendarTypes " +
                "list shall be equivalent to the number of enumerations within CalendarTypeEnum.",
            xref: { document: "core", section: "11.4.6.3" },
            children: [Field({ name: "entry", type: "CalendarTypeEnum" })]
        }),

        Datatype({
            name: "HourFormatEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.4.5.1" },
            children: [
                Field({ name: "12Hr", id: 0x0, conformance: "M", description: "Time conveyed with a 12-hour clock" }),
                Field({ name: "24Hr", id: 0x1, conformance: "M", description: "Time conveyed with a 24-hour clock" })
            ]
        }),

        Datatype({
            name: "CalendarTypeEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.4.5.2" },

            children: [
                Field({
                    name: "Buddhist", id: 0x0, conformance: "M",
                    description: "Dates conveyed using the Buddhist calendar"
                }),
                Field({
                    name: "Chinese", id: 0x1, conformance: "M",
                    description: "Dates conveyed using the Chinese calendar"
                }),
                Field({
                    name: "Coptic", id: 0x2, conformance: "M", description: "Dates conveyed using the Coptic calendar"
                }),
                Field({
                    name: "Ethiopian", id: 0x3, conformance: "M",
                    description: "Dates conveyed using the Ethiopian calendar"
                }),
                Field({
                    name: "Gregorian", id: 0x4, conformance: "M",
                    description: "Dates conveyed using the Gregorian calendar"
                }),
                Field({
                    name: "Hebrew", id: 0x5, conformance: "M", description: "Dates conveyed using the Hebrew calendar"
                }),
                Field({
                    name: "Indian", id: 0x6, conformance: "M", description: "Dates conveyed using the Indian calendar"
                }),
                Field({
                    name: "Islamic", id: 0x7, conformance: "M",
                    description: "Dates conveyed using the Islamic calendar"
                }),
                Field({
                    name: "Japanese", id: 0x8, conformance: "M",
                    description: "Dates conveyed using the Japanese calendar"
                }),
                Field({
                    name: "Korean", id: 0x9, conformance: "M", description: "Dates conveyed using the Korean calendar"
                }),
                Field({
                    name: "Persian", id: 0xa, conformance: "M",
                    description: "Dates conveyed using the Persian calendar"
                }),
                Field({
                    name: "Taiwanese", id: 0xb, conformance: "M",
                    description: "Dates conveyed using the Taiwanese calendar"
                })
            ]
        })
    ]
}));
