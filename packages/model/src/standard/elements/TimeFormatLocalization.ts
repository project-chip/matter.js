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
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const TimeFormatLocalization = Cluster(
    {
        name: "TimeFormatLocalization", id: 0x2c, classification: "node", pics: "LTIME",

        details: "Nodes should be expected to be deployed to any and all regions of the world. These global regions " +
            "may have differing preferences for how dates and times are conveyed. As such, Nodes that visually or " +
            "audibly convey time information need a mechanism by which they can be configured to use a user’s " +
            "preferred format." +
            "\n" +
            "This cluster supports an interface to a Node. It provides attributes for determining and configuring " +
            "time and date formatting information that a Node shall utilize when conveying values to a user.",

        xref: { document: "core", section: "11.4" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "core", section: "11.4.4" } },
        Field({
            name: "CALFMT", constraint: "0", description: "CalendarFormat",
            details: "The Node can be configured to use different calendar formats when conveying values to a user."
        })
    ),

    Attribute({
        name: "HourFormat", id: 0x0, type: "HourFormatEnum", access: "RW VM", conformance: "M",
        quality: "N",

        details: "Indicates the format that the Node is currently configured to use when conveying the hour unit of " +
            "time." +
            "\n" +
            "If not UseActiveLocale, this value shall take priority over any unit implied through the " +
            "ActiveLocale attribute." +
            "\n" +
            "If UseActiveLocale, any unit implied through the ActiveLocale attribute is used as the hour format, " +
            "and if ActiveLocale is not present, the hour format is unknown.",

        xref: { document: "core", section: "11.4.6.1" }
    }),

    Attribute({
        name: "ActiveCalendarType", id: 0x1, type: "CalendarTypeEnum", access: "RW VM",
        conformance: "CALFMT", constraint: "in SupportedCalendarTypes", quality: "N",

        details: "Indicates the calendar format that the Node is currently configured to use when conveying dates." +
            "\n" +
            "If not UseActiveLocale, this value shall take priority over any unit implied through the " +
            "ActiveLocale attribute." +
            "\n" +
            "If UseActiveLocale, any unit implied through the ActiveLocale attribute is used as the calendar " +
            "type, and if ActiveLocale is not present, the calendar type is unknown.",

        xref: { document: "core", section: "11.4.6.2" }
    }),

    Attribute(
        {
            name: "SupportedCalendarTypes", id: 0x2, type: "list", access: "R V", conformance: "CALFMT",
            constraint: "desc", quality: "F",
            details: "Indicates a list of CalendarTypeEnum values that are supported by the Node. The list shall NOT " +
                "contain any duplicate entries. The ordering of items within the list SHOULD NOT express any meaning. " +
                "The maximum length of the SupportedCalendarTypes list shall be equivalent to the number of " +
                "enumerations within CalendarTypeEnum.",
            xref: { document: "core", section: "11.4.6.3" }
        },

        Field({ name: "entry", type: "CalendarTypeEnum" })
    ),

    Datatype(
        { name: "HourFormatEnum", type: "enum8", xref: { document: "core", section: "11.4.5.1" } },
        Field({ name: "12Hr", id: 0x0, conformance: "M", description: "Time conveyed with a 12-hour clock" }),
        Field({ name: "24Hr", id: 0x1, conformance: "M", description: "Time conveyed with a 24-hour clock" }),
        Field({ name: "UseActiveLocale", id: 0xff, conformance: "M", description: "Use active locale clock" })
    ),

    Datatype(
        { name: "CalendarTypeEnum", type: "enum8", xref: { document: "core", section: "11.4.5.2" } },
        Field({ name: "Buddhist", id: 0x0, conformance: "O.a+", description: "Dates conveyed using the Buddhist calendar" }),
        Field({ name: "Chinese", id: 0x1, conformance: "O.a+", description: "Dates conveyed using the Chinese calendar" }),
        Field({ name: "Coptic", id: 0x2, conformance: "O.a+", description: "Dates conveyed using the Coptic calendar" }),
        Field({ name: "Ethiopian", id: 0x3, conformance: "O.a+", description: "Dates conveyed using the Ethiopian calendar" }),
        Field({ name: "Gregorian", id: 0x4, conformance: "O.a+", description: "Dates conveyed using the Gregorian calendar" }),
        Field({ name: "Hebrew", id: 0x5, conformance: "O.a+", description: "Dates conveyed using the Hebrew calendar" }),
        Field({ name: "Indian", id: 0x6, conformance: "O.a+", description: "Dates conveyed using the Indian calendar" }),
        Field({ name: "Islamic", id: 0x7, conformance: "O.a+", description: "Dates conveyed using the Islamic calendar" }),
        Field({ name: "Japanese", id: 0x8, conformance: "O.a+", description: "Dates conveyed using the Japanese calendar" }),
        Field({ name: "Korean", id: 0x9, conformance: "O.a+", description: "Dates conveyed using the Korean calendar" }),
        Field({ name: "Persian", id: 0xa, conformance: "O.a+", description: "Dates conveyed using the Persian calendar" }),
        Field({ name: "Taiwanese", id: 0xb, conformance: "O.a+", description: "Dates conveyed using the Taiwanese calendar" }),
        Field({ name: "UseActiveLocale", id: 0xff, conformance: "O.a+", description: "calendar implied from active locale" })
    )
);

MatterDefinition.children.push(TimeFormatLocalization);
