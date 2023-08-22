/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "TimeSync", id: 0x38, classification: "node",
    description: "Time Synchronization",

    details: "Accurate time is required for a number of reasons, including scheduling, display and validating " +
        "security materials." +
        "\n" +
        "This section describes a mechanism for Nodes to achieve and maintain time synchronization. The Time " +
        "Cluster provides attributes for reading a Node’s current time. It also allows Administrators to" +
        "\n" +
        "set current time, time zone and daylight savings time (DST) settings." +
        "\n" +
        "NOTE Support for Time Synchronization is provisional.",

    xref: { document: "core", section: "11.16" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 },

        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "core", section: "11.16.5" },

            children: [
                {
                    tag: "datatype", name: "TZ", constraint: "0", description: "TimeZone",
                    details: "Server supports time zone."
                },
                {
                    tag: "datatype", name: "NTPC", constraint: "1", description: "NtpClient",
                    details: "Server supports an NTP or SNTP client."
                },
                {
                    tag: "datatype", name: "NTPS", constraint: "2", description: "NtpServer",
                    details: "Server supports an NTP server role."
                }
            ]
        },

        {
            tag: "attribute", name: "UtcTime", id: 0x0, type: "epoch-us", access: "R V", conformance: "M",
            default: null, quality: "X C",
            details: "If the server has achieved time synchronization, this shall indicate the current time as a UTC " +
                "epoch-us (Epoch Time in Microseconds)." +
                "\n" +
                "If the server has not achieved time synchronization, this shall be null. This attribute may be set " +
                "when a Section 11.16.9.1, “SetUtcTime Command” is received.",
            xref: { document: "core", section: "11.16.8.1" }
        },

        {
            tag: "attribute", name: "Granularity", id: 0x1, type: "GranularityEnum", access: "R V",
            conformance: "M", constraint: "desc", default: 0,
            details: "The granularity of the error that the server is willing to guarantee on the time synchronization. " +
                "It is of type GranularityEnum.",
            xref: { document: "core", section: "11.16.8.2" }
        },

        {
            tag: "attribute", name: "TimeSource", id: 0x2, type: "TimeSourceEnum", access: "R V",
            conformance: "O", constraint: "desc", default: 0,

            details: "The server’s time source. This attribute indicates what method the server is using to sync, whether " +
                "the source uses NTS or not and whether the source is internal or external to the Fabric. This " +
                "attribute may be used by a client to determine its level of trust in the UTCTime. It is of type " +
                "TimeSourceEnum." +
                "\n" +
                "If a server is unsure if the selected NTP server is within the Fabric, it SHOULD indicate the " +
                "server is NonFabric.",

            xref: { document: "core", section: "11.16.8.3" }
        },

        {
            tag: "attribute", name: "TrustedTimeNodeId", id: 0x3, type: "node-id", access: "RW VA",
            conformance: "M", default: null, quality: "X",
            details: "The Node ID of a trusted Time Cluster. The TrustedTimeNodeId Node is used as a check on external " +
                "time sync sources and may be used as the primary time source if other time sources are unavailable. " +
                "See Section 11.16.13, “Time source prioritization”. This attribute is writeable only by an " +
                "Administrator. It SHOULD be set by the Commissioner during commissioning. If no appropriate " +
                "TrustedTimeNodeId is available, the commissioner may set this value to null.",
            xref: { document: "core", section: "11.16.8.5" }
        },

        {
            tag: "attribute", name: "DefaultNtp", id: 0x4, type: "string", access: "RW VA", conformance: "NTPC",
            constraint: "max 128", default: null, quality: "X",
            details: "The default NTP server the server’s Node may use if other time sources are unavailable. This " +
                "attribute may contain a domain name or a static IPv6 address in text format as specified in RFC " +
                "5952 [https://tools.ietf.org/html/rfc5952]. See Section 11.16.13, “Time source prioritization”. " +
                "This attribute is writeable only by an Administrator. It SHOULD be set by the Commissioner during " +
                "commissioning. If no default NTP is available, the Commissioner may set this value to null.",
            xref: { document: "core", section: "11.16.8.4" }
        },

        {
            tag: "attribute", name: "TimeZone", id: 0x5, type: "list", access: "RW VM", conformance: "TZ",
            constraint: "1 to 2",

            details: "A list of time zone offsets from UTC and when they shall take effect. This attribute uses a list of " +
                "time offset configurations to allow Nodes to handle scheduled regulatory time zone changes. This " +
                "attribute shall NOT be used to indicate daylight savings time changes (see Section 11.16.8.7, " +
                "“DSTOffset Attribute” for daylight savings time)." +
                "\n" +
                "The first entry shall have a ValidAt entry of 0. If there is a second entry, it shall have a " +
                "non-zero ValidAt time." +
                "\n" +
                "If a server supports a TimeZoneDatabase, the server may update its own DSTOffset list (Section " +
                "11.16.8.7, “DSTOffset Attribute”) to add new DST change times as required, based on the Name fields " +
                "of the TimeZoneStruct. Administrators may add additional entries to the DSTOffset of other Nodes " +
                "with the same time zone, if required." +
                "\n" +
                "If a server does not support a TimeZoneDatabase, the Name field of the TimeZoneStruct is only " +
                "applicable for client-side localization. In particular:" +
                "\n" +
                "  • If the server does not support a TimeZoneDatabase, the Name field shall NOT be used to " +
                "    calculate the local time." +
                "\n" +
                "  • If the server does not support a TimeZoneDatabase, the Name field shall NOT be used to " +
                "    calculate DST start or end dates." +
                "\n" +
                "Upon writing this attribute, the server shall recompute its LocalTime, taking into account the " +
                "Offset of the currently used TimeZoneStruct." +
                "\n" +
                "When time passes, the server SHOULD remove any entries which are no longer active and change the " +
                "ValidAt time for the currently used TimeZoneStruct list item to zero.",

            xref: { document: "core", section: "11.16.8.6" },
            children: [{ tag: "datatype", name: "entry", type: "TimeZoneStruct" }]
        },

        {
            tag: "attribute", name: "DstOffset", id: 0x6, type: "list", access: "RW VM", conformance: "TZ",
            constraint: "max 20", default: [],

            details: "A list of offsets to apply for daylight savings time, and their validity period. List entries shall " +
                "be sorted by ValidStarting time." +
                "\n" +
                "A list entry shall NOT have a ValidStarting time that is smaller than the ValidUntil time of the " +
                "previous entry." +
                "\n" +
                "Upon writing this attribute, the server shall recompute its LocalTime." +
                "\n" +
                "This list may hold up to 20 entries. If a server does not have sufficient storage for 20 entries, " +
                "it may truncate the list by removing entries with the largest ValidStarting times. The server shall " +
                "reserve sufficient storage for at least one entry." +
                "\n" +
                "Over time, the server SHOULD remove any entries which are no longer active from the list." +
                "\n" +
                "Over time, if the server supports a TimeZoneDatabase, it may update its own list to add additional " +
                "entries.",

            xref: { document: "core", section: "11.16.8.7" },
            children: [{ tag: "datatype", name: "entry", type: "DSTOffsetStruct" }]
        },

        {
            tag: "attribute", name: "LocalTime", id: 0x7, type: "epoch-us", access: "R V", conformance: "TZ",
            default: 0, quality: "X C",
            details: "The computed current local time of the server as a epoch-us (Epoch Time in Microseconds). The local " +
                "time offset of the value is the sum of the currently used TimeZoneEntry’s offset and the currently " +
                "used DST offset, if any." +
                "\n" +
                "If the server has not achieved time synchronization, this shall be null.",
            xref: { document: "core", section: "11.16.8.8" }
        },

        {
            tag: "attribute", name: "TimeZoneDatabase", id: 0x8, type: "bool", access: "R V", conformance: "TZ",
            default: true, quality: "F",
            details: "Indicates whether the server has access to a time zone database. Nodes with a time zone database " +
                "may update their own DSTOffset attribute to add new entries and may push DSTOffset updates to other " +
                "Nodes in the same time zone as required.",
            xref: { document: "core", section: "11.16.8.9" }
        },

        {
            tag: "attribute", name: "NtpServerPort", id: 0x9, type: "uint16", access: "R V",
            conformance: "NTPS", default: null, quality: "X",
            details: "If the server is running an NTP server, this value shall be the port number for the service. If the " +
                "server is not currently running an NTP server, this value shall be null." +
                "\n" +
                "This attribute shall be present if this server is capable of providing an NTP server instance. See " +
                "Section 11.16.15, “Acting as an NTP Server” for more information.",
            xref: { document: "core", section: "11.16.8.10" }
        },

        {
            tag: "event", name: "DstTableEmpty", id: 0x0, access: "V", conformance: "TZ", priority: "info",
            details: "This event shall be generated when the server stops applying the current DSTOffset and there are no " +
                "entries in the list with a larger ValidStarting time, indicating the need to possibly get new DST " +
                "data." +
                "\n" +
                "There is no data for this event.",
            xref: { document: "core", section: "11.16.10.1" }
        },

        {
            tag: "event", name: "DstStatus", id: 0x1, access: "V", conformance: "TZ", priority: "info",
            details: "This event shall be generated when the server starts or stops applying a DST offset." +
                "\n" +
                "This event contains a boolean predicate that indicates whether the server is applying the DST " +
                "offset. When the value is \"true\", the current DST offset is being applied (i.e, daylight savings " +
                "time is applied, as opposed to standard time).",
            xref: { document: "core", section: "11.16.10.2" }
        },

        {
            tag: "event", name: "TimeZoneStatus", id: 0x2, access: "V", conformance: "TZ", priority: "info",

            details: "This event shall be generated when the server changes its time zone offset or name. It shall NOT be " +
                "sent for DST changes that are not accompanied by a time zone change." +
                "\n" +
                "This event returns a structure as follows:" +
                "\n" +
                "Current time zone offset from UTC in seconds." +
                "\n" +
                "Current time zone name. This name SHOULD use the country/city format specified by the IANA time " +
                "zone database [https://www.iana.org/time-zones].",

            xref: { document: "core", section: "11.16.10.3" },

            children: [
                {
                    tag: "datatype", name: "Offset", id: 0x0, type: "int32", conformance: "M",
                    constraint: "-43200 to 50400"
                },
                { tag: "datatype", name: "Name", id: 0x1, type: "string", conformance: "O", constraint: "0 to 64" }
            ]
        },

        {
            tag: "command", name: "SetUtcTime", id: 0x0, access: "A", conformance: "M", direction: "request",
            response: "status",

            details: "This command may be issued by Administrator to set the time. If the Commissioner does not have a " +
                "valid time source, it may send a Granularity of NoTimeGranularity." +
                "\n" +
                "Upon receipt of this command, the server may update its UTCTime attribute to match the time " +
                "specified in the command, if the stated Granularity and TimeSource are acceptable. The server shall " +
                "update its UTCTime attribute if its current Granularity is NoTimeGranularity." +
                "\n" +
                "If the time is updated, the server shall also update its Granularity attribute as appropriate" +
                "\n" +
                "server does not plan to maintain time). It shall also update its TimeSource attribute to Admin. It " +
                "shall also update its last known good UTC time." +
                "\n" +
                "If the server updates its UTCTime attribute, it shall accept the command with a status code of " +
                "SUCCESS. If it opts to not update its time, it shall fail the command with a cluster specific " +
                "Status Code of TimeNotAccepted.",

            xref: { document: "core", section: "11.16.9.1" },

            children: [
                {
                    tag: "datatype", name: "UtcTime", id: 0x0, type: "epoch-us", conformance: "M", default: 0,
                    details: "This shall give the Client’s UTC Time.",
                    xref: { document: "core", section: "11.16.9.1.1" }
                },

                {
                    tag: "datatype", name: "Granularity", id: 0x1, type: "GranularityEnum", conformance: "M",
                    default: 0,
                    details: "This shall give the Client’s Granularity, as described in Section 11.16.8.2, “Granularity " +
                        "Attribute”.",
                    xref: { document: "core", section: "11.16.9.1.2" }
                },

                {
                    tag: "datatype", name: "TimeSource", id: 0x2, type: "TimeSourceEnum", conformance: "O", default: 0,
                    details: "This shall give the Client’s TimeSource, as described in Section 11.16.8.3, “TimeSource Attribute”.",
                    xref: { document: "core", section: "11.16.9.1.3" }
                }
            ]
        },

        {
            tag: "datatype", name: "StatusCode", type: "status",
            children: [{
                tag: "datatype", name: "TimeNotAccepted", id: 0x2,
                details: "Server rejected the attempt to set the UTC time",
                xref: { document: "core", section: "11.16.7" }
            }]
        },

        {
            tag: "datatype", name: "GranularityEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.16.6.1" },

            children: [
                {
                    tag: "datatype", name: "NoTimeGranularity", id: 0x0, conformance: "M",
                    description: "This indicates that the server is not currently synchronized with a UTC Time source and its clock is based on the Last Known Good UTC Time only."
                },
                {
                    tag: "datatype", name: "MinutesGranularity", id: 0x1, conformance: "M",
                    description: "This indicates the server was synchronized to an upstream source in the past, but sufficient clock drift has occurred such that the clock error is now > 5 seconds."
                },
                {
                    tag: "datatype", name: "SecondsGranularity", id: 0x2, conformance: "M",
                    description: "This indicates the server is synchronized to an upstream source using a low resolution protocol. UTC Time is accurate to ± 5 seconds."
                },
                {
                    tag: "datatype", name: "MillisecondsGranularity", id: 0x3, conformance: "M",
                    description: "This indicates the server is synchronized to an upstream source using high resolution time-synchronization protocol such as NTP, or has built-in GNSS with some amount of jitter applying its GNSS timestamp. UTC Time is accurate to ± 50ms."
                },
                {
                    tag: "datatype", name: "MicrosecondsGranularity", id: 0x4, conformance: "M",
                    description: "This indicates the server is synchronized to an upstream source using a highly precise time-synchronization protocol such as PTP, or has built-in GNSS. UTC time is accurate to ± 10 μs."
                }
            ]
        },

        {
            tag: "datatype", name: "TimeSourceEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.16.6.2" },

            children: [
                {
                    tag: "datatype", name: "None", id: 0x0, conformance: "M",
                    description: "Server is not currently synchronized with a UTC Time source."
                },
                {
                    tag: "datatype", name: "Unknown", id: 0x1, conformance: "M",
                    description: "Server uses an unlisted time source."
                },
                {
                    tag: "datatype", name: "Admin", id: 0x2, conformance: "M",
                    description: "Server received time from the Section 11.16.9.1, “SetUtcTime Command”."
                },
                {
                    tag: "datatype", name: "NodeTimeCluster", id: 0x3, conformance: "M",
                    description: "Synchronized time by querying the Time Cluster of another Node."
                },
                {
                    tag: "datatype", name: "NonFabricSntp", id: 0x4, conformance: "M",
                    description: "SNTP from a server not in the Fabric. NTS is not used."
                },
                {
                    tag: "datatype", name: "NonFabricNtp", id: 0x5, conformance: "M",
                    description: "NTP from servers not in the Fabric. None of the servers used NTS."
                },
                {
                    tag: "datatype", name: "FabricSntp", id: 0x6, conformance: "M",
                    description: "SNTP from a server within the Fabric. NTS is not used."
                },
                {
                    tag: "datatype", name: "FabricNtp", id: 0x7, conformance: "M",
                    description: "NTP from a servers within the Fabric. None of the servers used NTS."
                },
                {
                    tag: "datatype", name: "MixedNtp", id: 0x8, conformance: "M",
                    description: "NTP from multiple servers on Fabric and external. None of the servers used NTS."
                },
                {
                    tag: "datatype", name: "NonFabricSntpNts", id: 0x9, conformance: "M",
                    description: "SNTP from a server not in the Fabric. NTS is used."
                },
                {
                    tag: "datatype", name: "NonFabricNtpNts", id: 0xa, conformance: "M",
                    description: "NTP from servers not in the Fabric. NTS is used on at least one server."
                },
                {
                    tag: "datatype", name: "FabricSntpNts", id: 0xb, conformance: "M",
                    description: "SNTP from a server within the Fabric. NTS is used."
                },
                {
                    tag: "datatype", name: "FabricNtpNts", id: 0xc, conformance: "M",
                    description: "NTP from a server within the Fabric. NTS is used on at least one server."
                },
                {
                    tag: "datatype", name: "MixedNtpNts", id: 0xd, conformance: "M",
                    description: "NTP from multiple servers on the Fabric and external. NTS is used on at least one server."
                },
                {
                    tag: "datatype", name: "CloudSource", id: 0xe, conformance: "M",
                    description: "Time synchronization comes from a vendor cloud-based source (e.g. \"Date\" header in authenticated HTTPS connection)."
                },
                {
                    tag: "datatype", name: "Ptp", id: 0xf, conformance: "M",
                    description: "Time synchronization comes from PTP."
                },
                {
                    tag: "datatype", name: "Gnss", id: 0x10, conformance: "M",
                    description: "Time synchronization comes from a GNSS source."
                }
            ]
        },

        {
            tag: "datatype", name: "TimeZoneStruct", type: "struct", conformance: "M",
            xref: { document: "core", section: "11.16.6.3" },

            children: [
                {
                    tag: "datatype", name: "Offset", id: 0x0, type: "int32", conformance: "M",
                    constraint: "-43200 to 50400",
                    details: "The time zone offset from UTC in seconds.",
                    xref: { document: "core", section: "11.16.6.3.1" }
                },

                {
                    tag: "datatype", name: "ValidAt", id: 0x1, type: "epoch-us", conformance: "M",
                    details: "The UTC time when the offset shall be applied.",
                    xref: { document: "core", section: "11.16.6.3.2" }
                },

                {
                    tag: "datatype", name: "Name", id: 0x2, type: "string", conformance: "O", constraint: "0 to 64",
                    details: "The time zone name SHOULD provide a human-readable time zone name and it SHOULD use the " +
                        "country/city format specified by the IANA time zone database [https://www.iana.org/time-zones].",
                    xref: { document: "core", section: "11.16.6.3.3" }
                }
            ]
        },

        {
            tag: "datatype", name: "DSTOffsetStruct", type: "struct", conformance: "M",
            details: "The DST offset in seconds. Normally this is in the range of 0 to 3600 seconds (1 hour), but this " +
                "field will accept any values in the int32 range to accommodate potential future legislation that " +
                "does not fit with these assumptions.",
            xref: { document: "core", section: "11.16.6.4" },

            children: [
                { tag: "datatype", name: "Offset", id: 0x0, type: "int32", conformance: "M", constraint: "desc" },
                {
                    tag: "datatype", name: "ValidStarting", id: 0x1, type: "epoch-us", conformance: "M",
                    details: "The UTC time when the offset shall be applied.",
                    xref: { document: "core", section: "11.16.6.4.1" }
                },

                {
                    tag: "datatype", name: "ValidUntil", id: 0x2, type: "epoch-us", conformance: "M",
                    details: "The UTC time when the offset shall stop being applied. This value shall be larger than the " +
                        "ValidStarting time.",
                    xref: { document: "core", section: "11.16.6.4.2" }
                }
            ]
        }
    ]
});
