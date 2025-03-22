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
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const TimeSynchronization = Cluster(
    {
        name: "TimeSynchronization", id: 0x38, classification: "node", pics: "TIMESYNC",

        details: "Accurate time is required for a number of reasons, including scheduling, display and validating " +
            "security materials." +
            "\n" +
            "This section describes a mechanism for Nodes to achieve and maintain time synchronization. The Time " +
            "Synchronization cluster provides attributes for reading a Node’s current time. It also allows " +
            "Administrators to set current time, time zone and daylight savings time (DST) settings." +
            "\n" +
            "The Time Synchronization cluster may be present on the root node endpoint, and shall NOT be present " +
            "on any other Endpoint of any Node.",

        xref: { document: "core", section: "11.17" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "core", section: "11.17.5" } },

        Field({
            name: "TZ", constraint: "0", description: "TimeZone",
            details: "Allows a server to translate a UTC time to a local time using the time zone and daylight savings " +
                "time (DST) offsets. If a server supports the TimeZone feature, it shall support the SetTimeZone and " +
                "SetDSTOffset commands, and TimeZone and DSTOffset attributes, and shall expose the local time " +
                "through the LocalTime attribute.",
            xref: { document: "core", section: "11.17.5.1" }
        }),

        Field({
            name: "NTPC", constraint: "1", description: "NtpClient",
            details: "Allows a node to use NTP/SNTP for time synchronization.",
            xref: { document: "core", section: "11.17.5.2" }
        }),

        Field({
            name: "NTPS", constraint: "2", description: "NtpServer",
            details: "Allows a Node to host an NTP server for the network so that other Nodes can achieve a high accuracy " +
                "time synchronization within the network. See Section 11.17.15, “Acting as an NTP Server”.",
            xref: { document: "core", section: "11.17.5.3" }
        }),

        Field({
            name: "TSC", constraint: "3", description: "TimeSyncClient",
            details: "This node also supports a time synchronization client and can connect to and read time from other " +
                "nodes.",
            xref: { document: "core", section: "11.17.5.4" }
        })
    ),

    Attribute({
        name: "UtcTime", id: 0x0, type: "epoch-us", access: "R V", conformance: "M", default: null,
        quality: "X C",
        details: "If the node has achieved time synchronization, this shall indicate the current time as a UTC " +
            "epoch-us (Epoch Time in Microseconds)." +
            "\n" +
            "If the node has not achieved time synchronization, this shall be null. This attribute may be set " +
            "when a SetUTCTime is received.",
        xref: { document: "core", section: "11.17.8.1" }
    }),

    Attribute({
        name: "Granularity", id: 0x1, type: "GranularityEnum", access: "R V", conformance: "M",
        constraint: "desc", default: 0,
        details: "The granularity of the error that the node is willing to guarantee on the time synchronization. It " +
            "is of type GranularityEnum." +
            "\n" +
            "This value shall be set to NoTimeGranularity if UTCTime is null and shall NOT be set to " +
            "NoTimeGranularity if UTCTime is non-null.",
        xref: { document: "core", section: "11.17.8.2" }
    }),

    Attribute({
        name: "TimeSource", id: 0x2, type: "TimeSourceEnum", access: "R V", conformance: "O",
        constraint: "desc", default: 0,

        details: "The node’s time source. This attribute indicates what method the node is using to sync, whether the " +
            "source uses NTS or not and whether the source is internal or external to the Matter network. This " +
            "attribute may be used by a client to determine its level of trust in the UTCTime. It is of type " +
            "TimeSourceEnum." +
            "\n" +
            "If a node is unsure if the selected NTP server is within the Matter network, it SHOULD select one of " +
            "the NonMatter* values." +
            "\n" +
            "This value shall be set to None if UTCTime is null and shall NOT be set to None if UTCTime is " +
            "non-null.",

        xref: { document: "core", section: "11.17.8.3" }
    }),

    Attribute({
        name: "TrustedTimeSource", id: 0x3, type: "TrustedTimeSourceStruct", access: "R V",
        conformance: "TSC", default: null, quality: "X N",
        details: "A Node ID, endpoint, and associated fabric index of a Node that may be used as trusted time source. " +
            "See Section 11.17.13, “Time source prioritization”. This attribute reflects the last value set by an " +
            "administrator using the SetTrustedTimeSource command. If the value is null, no trusted time source " +
            "has yet been set.",
        xref: { document: "core", section: "11.17.8.4" }
    }),

    Attribute({
        name: "DefaultNtp", id: 0x4, type: "string", access: "R V", conformance: "NTPC",
        constraint: "max 128", default: null, quality: "X N",

        details: "The default NTP server that this Node may use if other time sources are unavailable. This attribute " +
            "is settable by an Administrator using the SetDefaultNTP command. It SHOULD be set by the " +
            "Commissioner during commissioning. If no default NTP server is available, the Commissioner may set " +
            "this value to null. The default IANA assigned NTP port of 123 shall be used to access the NTP " +
            "server." +
            "\n" +
            "If set, the format of this attribute shall be a domain name or a static IPv6 address with no port, " +
            "in text format, as specified in RFC 5952. The address format shall follow the recommendations in " +
            "Section 4 and shall NOT contain a port number.",

        xref: { document: "core", section: "11.17.8.5" }
    }),

    Attribute(
        {
            name: "TimeZone", id: 0x5, type: "list", access: "R V", conformance: "TZ", constraint: "1 to 2",
            default: [ { type: "properties", properties: { offset: 0, validAt: 0 } } ], quality: "N",

            details: "A list of time zone offsets from UTC and when they shall take effect. This attribute uses a list of " +
                "time offset configurations to allow Nodes to handle scheduled regulatory time zone changes. This " +
                "attribute shall NOT be used to indicate daylight savings time changes (see DSTOffset attribute for " +
                "daylight savings time)." +
                "\n" +
                "The first entry shall have a ValidAt entry of 0. If there is a second entry, it shall have a " +
                "non-zero ValidAt time." +
                "\n" +
                "If a node supports a TimeZoneDatabase, and it has data for the given time zone Name and the given " +
                "Offset matches, the node may update its own DSTOffset attribute to add new DST change times as " +
                "required, based on the Name fields of the TimeZoneStruct. Administrators may add additional entries " +
                "to the DSTOffset of other Nodes with the same time zone, if required." +
                "\n" +
                "If a node does not support a TimeZoneDatabase, the Name field of the TimeZoneStruct is only " +
                "applicable for client-side localization. In particular:" +
                "\n" +
                "  • If the node does not support a TimeZoneDatabase, the Name field shall NOT be used to calculate " +
                "    the local time." +
                "\n" +
                "  • If the node does not support a TimeZoneDatabase, the Name field shall NOT be used to calculate " +
                "    DST start or end dates." +
                "\n" +
                "When time passes, the node SHOULD remove any entries which are no longer active and change the " +
                "ValidAt time for the currently used TimeZoneStruct list item to zero." +
                "\n" +
                "This attribute shall have at least one entry. If the node does not have a default time zone and no " +
                "time zone has been set, it may set this value to a list containing a single TimeZoneStruct with an " +
                "offset of 0 (UTC) and a ValidAt time of 0.",

            xref: { document: "core", section: "11.17.8.6" }
        },

        Field({ name: "entry", type: "TimeZoneStruct" })
    ),

    Attribute(
        {
            name: "DstOffset", id: 0x6, type: "list", access: "R V", conformance: "TZ", default: [],
            quality: "N",

            details: "A list of offsets to apply for daylight savings time, and their validity period. List entries shall " +
                "be sorted by ValidStarting time." +
                "\n" +
                "A list entry shall NOT have a ValidStarting time that is smaller than the ValidUntil time of the " +
                "previous entry. There shall be at most one list entry with a null ValidUntil time and, if such an " +
                "entry is present, it shall appear last in the list." +
                "\n" +
                "Over time, the node SHOULD remove any entries which are no longer active from the list." +
                "\n" +
                "Over time, if the node supports a TimeZoneDatabase and it has information available for the given " +
                "time zone name, it may update its own list to add additional entries." +
                "\n" +
                "If a time zone does not use DST, this shall be indicated by a single entry with a 0 offset and a " +
                "null ValidUntil field.",

            xref: { document: "core", section: "11.17.8.7" }
        },

        Field({ name: "entry", type: "DSTOffsetStruct" })
    ),

    Attribute({
        name: "LocalTime", id: 0x7, type: "epoch-us", access: "R V", conformance: "TZ", default: null,
        quality: "X C",

        details: "The computed current local time of the node as a epoch-us (Epoch Time in Microseconds). The value of " +
            "LocalTime shall be the sum of the UTCTime, the offset of the currently valid TimeZoneStruct from the " +
            "TimeZone attribute (converted to microseconds), and the offset of the currently valid " +
            "DSTOffsetStruct from the DSTOffset attribute (converted to microseconds), if such an entry exists." +
            "\n" +
            "If the node has not achieved time synchronization, this shall be null. If the node has an empty " +
            "DSTOffset, this shall be null.",

        xref: { document: "core", section: "11.17.8.8" }
    }),

    Attribute({
        name: "TimeZoneDatabase", id: 0x8, type: "TimeZoneDatabaseEnum", access: "R V", conformance: "TZ",
        default: 2, quality: "F",
        details: "Indicates whether the node has access to a time zone database. Nodes with a time zone database may " +
            "update their own DSTOffset attribute to add new entries and may push DSTOffset updates to other " +
            "Nodes in the same time zone as required.",
        xref: { document: "core", section: "11.17.8.9" }
    }),

    Attribute({
        name: "NtpServerAvailable", id: 0x9, type: "bool", access: "R V", conformance: "NTPS",
        default: false,
        details: "If the node is running an RFC 5905 NTPv4 compliant server on port 123, this value shall be True. If " +
            "the node is not currently running an NTP server, this value shall be False.",
        xref: { document: "core", section: "11.17.8.10" }
    }),

    Attribute({
        name: "TimeZoneListMaxSize", id: 0xa, type: "uint8", access: "R V", conformance: "TZ",
        constraint: "1 to 2", quality: "F",
        details: "Number of supported list entries in the TimeZone attribute. This attribute may take the value of 1 " +
            "or 2, where the optional second list entry may be used to handle scheduled regulatory time zone " +
            "changes.",
        xref: { document: "core", section: "11.17.8.11" }
    }),

    Attribute({
        name: "DstOffsetListMaxSize", id: 0xb, type: "uint8", access: "R V", conformance: "TZ",
        constraint: "min 1", quality: "F",
        details: "Number of supported list entries in DSTOffset attribute. This value must be at least 1.",
        xref: { document: "core", section: "11.17.8.12" }
    }),

    Attribute({
        name: "SupportsDnsResolve", id: 0xc, type: "bool", access: "R V", conformance: "NTPC",
        default: false, quality: "F",
        details: "This attribute is true if the node supports resolving a domain name. DefaultNTP Address values for " +
            "these nodes may include domain names. If this is False, the Address for a DefaultNTP shall be an " +
            "IPv6 address.",
        xref: { document: "core", section: "11.17.8.13" }
    }),

    Event({
        name: "DstTableEmpty", id: 0x0, access: "V", conformance: "TZ", priority: "info",

        details: "This event shall be generated when the node stops applying the current DSTOffset and there are no " +
            "entries in the list with a larger ValidStarting time, indicating the need to possibly get new DST " +
            "data. This event shall also be generated if the DSTOffset list is cleared either by a SetTimeZone " +
            "command, or by a SetDSTOffset command with an empty list." +
            "\n" +
            "The node shall generate this event if the node has not generated a DSTTableEmpty event in the last " +
            "hour, and the DSTOffset list is empty when the node attempts to update its time. DSTTableEmpty " +
            "events corresponding to a time update SHOULD NOT be generated more often than once per hour." +
            "\n" +
            "There is no data for this event.",

        xref: { document: "core", section: "11.17.10.1" }
    }),

    Event(
        {
            name: "DstStatus", id: 0x1, access: "V", conformance: "TZ", priority: "info",
            details: "This event shall be generated when the node starts or stops applying a DST offset.",
            xref: { document: "core", section: "11.17.10.2" }
        },

        Field({
            name: "DstOffsetActive", id: 0x0, type: "bool", conformance: "M",
            details: "Indicates whether the current DST offset is being applied (i.e, daylight savings time is applied, as " +
                "opposed to standard time).",
            xref: { document: "core", section: "11.17.10.2.1" }
        })
    ),

    Event(
        {
            name: "TimeZoneStatus", id: 0x2, access: "V", conformance: "TZ", priority: "info",
            details: "This event shall be generated when the node changes its time zone offset or name. It shall NOT be " +
                "sent for DST changes that are not accompanied by a time zone change.",
            xref: { document: "core", section: "11.17.10.3" }
        },

        Field({
            name: "Offset", id: 0x0, type: "int32", conformance: "M", constraint: "-43200 to 50400",
            details: "Current time zone offset from UTC in seconds.",
            xref: { document: "core", section: "11.17.10.3.1" }
        }),

        Field({
            name: "Name", id: 0x1, type: "string", conformance: "O", constraint: "0 to 64",
            details: "Current time zone name. This name SHOULD use the country/city format specified by the IANA Time Zone " +
                "Database.",
            xref: { document: "core", section: "11.17.10.3.2" }
        })
    ),

    Event({
        name: "TimeFailure", id: 0x3, access: "V", conformance: "M", priority: "info",
        details: "This event shall be generated if the node has not generated a TimeFailure event in the last hour, " +
            "and the node is unable to get a time from any source. This event SHOULD NOT be generated more often " +
            "than once per hour.",
        xref: { document: "core", section: "11.17.10.4" }
    }),

    Event({
        name: "MissingTrustedTimeSource", id: 0x4, access: "V", conformance: "TSC", priority: "info",

        details: "This event shall be generated if the TrustedTimeSource is set to null upon fabric removal or by a " +
            "SetTrustedTimeSource command." +
            "\n" +
            "This event shall also be generated if the node has not generated a MissingTrustedTimeSource event in " +
            "the last hour, and the node fails to update its time from the TrustedTimeSource because the " +
            "TrustedTimeSource is null or the specified peer cannot be reached. MissingTrustedTimeSource events " +
            "corresponding to a time update SHOULD NOT be generated more often than once per hour.",

        xref: { document: "core", section: "11.17.10.5" }
    }),

    Command(
        {
            name: "SetUtcTime", id: 0x0, access: "A", conformance: "M", direction: "request",
            response: "status",

            details: "This command may be issued by Administrator to set the time. If the Commissioner does not have a " +
                "valid time source, it may send a Granularity of NoTimeGranularity." +
                "\n" +
                "Upon receipt of this command, the node may update its UTCTime attribute to match the time specified " +
                "in the command, if the stated Granularity and TimeSource are acceptable. The node shall" +
                "\n" +
                "update its UTCTime attribute if its current Granularity is NoTimeGranularity." +
                "\n" +
                "If the time is updated, the node shall also update its Granularity attribute based on the " +
                "granularity specified in the command and the expected clock drift of the node. This SHOULD normally " +
                "be one level lower than the stated command Granularity. It shall also update its TimeSource " +
                "attribute to Admin. It shall also update its Last Known Good UTC Time as defined in Section 3.5.6.1, " +
                "“Last Known Good UTC Time”." +
                "\n" +
                "If the node updates its UTCTime attribute, it shall accept the command with a status code of " +
                "SUCCESS. If it opts to not update its time, it shall fail the command with a cluster specific Status " +
                "Code of TimeNotAccepted.",

            xref: { document: "core", section: "11.17.9.1" }
        },

        Field({
            name: "UtcTime", id: 0x0, type: "epoch-us", conformance: "M", default: 0,
            details: "This shall give the Client’s UTC Time.",
            xref: { document: "core", section: "11.17.9.1.1" }
        }),
        Field({
            name: "Granularity", id: 0x1, type: "GranularityEnum", conformance: "M", default: 0,
            details: "This shall give the Client’s Granularity, as described in Granularity.",
            xref: { document: "core", section: "11.17.9.1.2" }
        }),
        Field({
            name: "TimeSource", id: 0x2, type: "TimeSourceEnum", conformance: "O", default: 0,
            details: "This shall give the Client’s TimeSource, as described in TimeSource.",
            xref: { document: "core", section: "11.17.9.1.3" }
        })
    ),

    Command(
        {
            name: "SetTrustedTimeSource", id: 0x1, access: "F A", conformance: "TSC", direction: "request",
            response: "status",

            details: "This command shall set the TrustedTimeSource attribute. Upon receipt of this command:" +
                "\n" +
                "  • If the TrustedTimeSource field in the command is null, the node shall set the TrustedTimeSource " +
                "    attribute to null and shall generate a MissingTrustedTimeSource event." +
                "\n" +
                "  • Otherwise, the node shall set the TrustedTimeSource attribute to a struct which has NodeID and " +
                "    Endpoint fields matching those in the TrustedTimeSource field and has its FabricIndex field set " +
                "    to the command’s accessing fabric index.",

            xref: { document: "core", section: "11.17.9.2" }
        },

        Field({
            name: "TrustedTimeSource", id: 0x0, type: "FabricScopedTrustedTimeSourceStruct", access: "F",
            conformance: "M", quality: "X",
            details: "This field contains the Node ID and endpoint of a trusted time source on the accessing fabric.",
            xref: { document: "core", section: "11.17.9.2.1" }
        }),

        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Command(
        {
            name: "SetTimeZone", id: 0x2, access: "M", conformance: "TZ", direction: "request",
            response: "SetTimeZoneResponse",

            details: "This command is used to set the time zone of the node." +
                "\n" +
                "If the given list is larger than the TimeZoneListMaxSize, the node shall respond with " +
                "RESOURCE_EXHAUSTED and the TimeZone attribute shall NOT be updated." +
                "\n" +
                "If the given list does not conform to the list requirements in TimeZone attribute the node shall " +
                "respond with a CONSTRAINT_ERROR and the TimeZone attribute shall NOT be updated." +
                "\n" +
                "If there are no errors in the list, the TimeZone field shall be copied to the TimeZone attribute. A " +
                "TimeZoneStatus event shall be generated with the new time zone information." +
                "\n" +
                "If the node supports a time zone database and it has information available for the time zone that " +
                "will be applied, it may set its DSTOffset attribute, otherwise the DSTOffset attribute shall be set " +
                "to an empty list. A DSTTableEmpty event shall be generated if the DSTOffset attribute is empty. A " +
                "DSTStatus event shall be generated if the node was previously applying a DST offset.",

            xref: { document: "core", section: "11.17.9.3" }
        },

        Field(
            { name: "TimeZone", id: 0x0, type: "list", conformance: "M", constraint: "1 to 2" },
            Field({ name: "entry", type: "TimeZoneStruct" })
        )
    ),

    Command(
        {
            name: "SetTimeZoneResponse", id: 0x3, conformance: "TZ", direction: "response",
            details: "This command shall be generated in response to a SetTimeZone command.",
            xref: { document: "core", section: "11.17.9.4" }
        },

        Field({
            name: "DstOffsetsRequired", id: 0x0, type: "bool", conformance: "M", default: true,
            details: "If the node supports a time zone database with information for the time zone that will be applied, " +
                "it may use this information to set the DSTOffset attribute. If the node is setting its own DSTOffset " +
                "attribute, the DSTOffsetsRequired field shall be set to false, otherwise it shall be set to true.",
            xref: { document: "core", section: "11.17.9.4.1" }
        })
    ),

    Command(
        {
            name: "SetDstOffset", id: 0x4, access: "M", conformance: "TZ", direction: "request",
            response: "status",

            details: "This command is used to set the DST offsets for a node." +
                "\n" +
                "  • If the length of DSTOffset is larger than DSTOffsetListMaxSize, the node shall respond with" +
                "\n" +
                "RESOURCE_EXHAUSTED." +
                "\n" +
                "  • Else if the list entries do not conform to the list requirements for DSTOffset attribute, the " +
                "    node shall respond with CONSTRAINT_ERROR." +
                "\n" +
                "If there are no errors in the list, the DSTOffset field shall be copied to the DSTOffset attribute." +
                "\n" +
                "If the DSTOffset attribute change causes a corresponding change to the DST state, a DSTStatus event " +
                "shall be generated. If the list is empty, the node shall generate a DSTTableEmpty event.",

            xref: { document: "core", section: "11.17.9.5" }
        },

        Field(
            { name: "DstOffset", id: 0x0, type: "list", conformance: "M" },
            Field({ name: "entry", type: "DSTOffsetStruct" })
        )
    ),

    Command(
        {
            name: "SetDefaultNtp", id: 0x5, access: "A", conformance: "NTPC", direction: "request",
            response: "status",

            details: "This command is used to set the DefaultNTP attribute. If the DefaultNTP Address field does not " +
                "conform to the requirements in the DefaultNTP attribute description, the command shall fail with a " +
                "status code of INVALID_COMMAND. If the node does not support DNS resolution (as specified in " +
                "SupportsDNSResolve) and the provided Address is a domain name, the command shall fail with a status " +
                "code of INVALID_COMMAND. Otherwise, the node shall set the DefaultNTP attribute to match the " +
                "DefaultNTP provided in this command.",

            xref: { document: "core", section: "11.17.9.6" }
        },

        Field({
            name: "DefaultNtp", id: 0x0, type: "string", conformance: "M", constraint: "max 128", quality: "X",
            details: "This field contains the address of an NTP server than can be used as a fallback for time " +
                "synchronization. The format of this field shall follow the requirements in the DefaultNTP attribute " +
                "description.",
            xref: { document: "core", section: "11.17.9.6.1" }
        })
    ),

    Datatype(
        { name: "GranularityEnum", type: "enum8", xref: { document: "core", section: "11.17.6.1" } },
        Field({
            name: "NoTimeGranularity", id: 0x0, conformance: "M",
            description: "This indicates that the node is not currently synchronized with a UTC Time source and its clock is based on the Last Known Good UTC Time only."
        }),
        Field({
            name: "MinutesGranularity", id: 0x1, conformance: "M",
            description: "This indicates the node was synchronized to an upstream source in the past, but sufficient clock drift has occurred such that the clock error is now > 5 seconds."
        }),
        Field({
            name: "SecondsGranularity", id: 0x2, conformance: "M",
            description: "This indicates the node is synchronized to an upstream source using a low resolution protocol. UTC Time is accurate to ± 5 seconds."
        }),
        Field({
            name: "MillisecondsGranularity", id: 0x3, conformance: "M",
            description: "This indicates the node is synchronized to an upstream source using high resolution time- synchronization protocol such as NTP, or has built-in GNSS with some amount of jitter applying its GNSS timestamp. UTC Time is accurate to ± 50 ms."
        }),
        Field({
            name: "MicrosecondsGranularity", id: 0x4, conformance: "M",
            description: "This indicates the node is synchronized to an upstream source using a highly precise time- synchronization protocol such as PTP, or has built-in GNSS. UTC time is accurate to ± 10 μs."
        })
    ),

    Datatype(
        { name: "TimeSourceEnum", type: "enum8", xref: { document: "core", section: "11.17.6.2" } },
        Field({
            name: "None", id: 0x0, conformance: "M",
            description: "Node is not currently synchronized with a UTC Time source."
        }),
        Field({ name: "Unknown", id: 0x1, conformance: "M", description: "Node uses an unlisted time source." }),
        Field({
            name: "Admin", id: 0x2, conformance: "M",
            description: "Node received time from a client using the SetUTCTime Command."
        }),
        Field({
            name: "NodeTimeCluster", id: 0x3, conformance: "M",
            description: "Synchronized time by querying the Time Synchronization cluster of another Node."
        }),
        Field({
            name: "NonMatterSntp", id: 0x4, conformance: "M",
            description: "SNTP from a server not in the Matter network. NTS is not used."
        }),
        Field({
            name: "NonMatterNtp", id: 0x5, conformance: "M",
            description: "NTP from servers not in the Matter network. None of the servers used NTS."
        }),
        Field({
            name: "MatterSntp", id: 0x6, conformance: "M",
            description: "SNTP from a server within the Matter network. NTS is not used."
        }),
        Field({
            name: "MatterNtp", id: 0x7, conformance: "M",
            description: "NTP from servers within the Matter network. None of the servers used NTS."
        }),
        Field({
            name: "MixedNtp", id: 0x8, conformance: "M",
            description: "NTP from multiple servers in the Matter network and external. None of the servers used NTS."
        }),
        Field({
            name: "NonMatterSntpnts", id: 0x9, conformance: "M",
            description: "SNTP from a server not in the Matter network. NTS is used."
        }),
        Field({
            name: "NonMatterNtpnts", id: 0xa, conformance: "M",
            description: "NTP from servers not in the Matter network. NTS is used on at least one server."
        }),
        Field({
            name: "MatterSntpnts", id: 0xb, conformance: "M",
            description: "SNTP from a server within the Matter network. NTS is used."
        }),
        Field({
            name: "MatterNtpnts", id: 0xc, conformance: "M",
            description: "NTP from a server within the Matter network. NTS is used on at least one server."
        }),
        Field({
            name: "MixedNtpnts", id: 0xd, conformance: "M",
            description: "NTP from multiple servers in the Matter network and external. NTS is used on at least one server."
        }),
        Field({
            name: "CloudSource", id: 0xe, conformance: "M",
            description: "Time synchronization comes from a vendor cloud-based source (e.g. \"Date\" header in authenticated HTTPS connection)."
        }),
        Field({ name: "Ptp", id: 0xf, conformance: "M", description: "Time synchronization comes from PTP." }),
        Field({ name: "Gnss", id: 0x10, conformance: "M", description: "Time synchronization comes from a GNSS source." })
    ),

    Datatype(
        {
            name: "TimeZoneDatabaseEnum", type: "enum8",
            details: "It indicates what the device knows about the contents of the IANA Time Zone Database. Partial " +
                "support on a device may be used to omit historical data, less commonly used time zones, and/or time " +
                "zones not related to the region a product is sold in.",
            xref: { document: "core", section: "11.17.6.3" }
        },

        Field({ name: "Full", id: 0x0, conformance: "M", description: "Node has a full list of the available time zones" }),
        Field({
            name: "Partial", id: 0x1, conformance: "M",
            description: "Node has a partial list of the available time zones"
        }),
        Field({ name: "None", id: 0x2, conformance: "M", description: "Node does not have a time zone database" })
    ),

    Datatype(
        { name: "TrustedTimeSourceStruct", type: "struct", xref: { document: "core", section: "11.17.6.4" } },

        Field({
            name: "FabricIndex", id: 0x0, type: "fabric-idx", conformance: "M",
            details: "The Fabric Index associated with the Fabric of the client which last set the value of the trusted " +
                "time source node.",
            xref: { document: "core", section: "11.17.6.4.1" }
        }),

        Field({
            name: "NodeId", id: 0x1, type: "node-id", conformance: "M",
            details: "Node ID of the trusted time source node on the Fabric associated with the entry.",
            xref: { document: "core", section: "11.17.6.4.2" }
        }),
        Field({
            name: "Endpoint", id: 0x2, type: "endpoint-no", conformance: "M",
            details: "Endpoint on the trusted time source node that contains the Time Synchronization cluster server.",
            xref: { document: "core", section: "11.17.6.4.3" }
        })
    ),

    Datatype(
        {
            name: "FabricScopedTrustedTimeSourceStruct", type: "struct",
            xref: { document: "core", section: "11.17.6.5" }
        },
        Field({
            name: "NodeId", id: 0x0, type: "node-id", conformance: "M",
            details: "Node ID of the trusted time source node on the Fabric of the issuer.",
            xref: { document: "core", section: "11.17.6.5.1" }
        }),

        Field({
            name: "Endpoint", id: 0x1, type: "endpoint-no", conformance: "M",
            details: "Endpoint on the trusted time source node that contains the Time Synchronization cluster server. This " +
                "is provided to avoid having to do discovery of the location of that endpoint by walking over all " +
                "endpoints and checking their Descriptor Cluster.",
            xref: { document: "core", section: "11.17.6.5.2" }
        })
    ),

    Datatype(
        { name: "TimeZoneStruct", type: "struct", xref: { document: "core", section: "11.17.6.6" } },
        Field({
            name: "Offset", id: 0x0, type: "int32", conformance: "M", constraint: "-43200 to 50400",
            details: "The time zone offset from UTC in seconds.",
            xref: { document: "core", section: "11.17.6.6.1" }
        }),
        Field({
            name: "ValidAt", id: 0x1, type: "epoch-us", conformance: "M",
            details: "The UTC time when the offset shall be applied.",
            xref: { document: "core", section: "11.17.6.6.2" }
        }),

        Field({
            name: "Name", id: 0x2, type: "string", conformance: "O", constraint: "0 to 64",
            details: "The time zone name SHOULD provide a human-readable time zone name and it SHOULD use the country/city " +
                "format specified by the IANA Time Zone Database. The Name field may be used for display. If the node " +
                "supports a TimeZoneDatabase it may use the Name field to set its own DST offsets if it has database " +
                "information for the supplied time zone Name and the given Offset matches.",
            xref: { document: "core", section: "11.17.6.6.3" }
        })
    ),

    Datatype(
        { name: "DSTOffsetStruct", type: "struct", xref: { document: "core", section: "11.17.6.7" } },

        Field({
            name: "Offset", id: 0x0, type: "int32", conformance: "M", constraint: "desc",
            details: "The DST offset in seconds. Normally this is in the range of 0 to 3600 seconds (1 hour), but this " +
                "field will accept any values in the int32 range to accommodate potential future legislation that " +
                "does not fit with these assumptions.",
            xref: { document: "core", section: "11.17.6.7.1" }
        }),

        Field({
            name: "ValidStarting", id: 0x1, type: "epoch-us", conformance: "M",
            details: "The UTC time when the offset shall be applied.",
            xref: { document: "core", section: "11.17.6.7.2" }
        }),

        Field({
            name: "ValidUntil", id: 0x2, type: "epoch-us", conformance: "M", quality: "X",
            details: "The UTC time when the offset shall stop being applied. Providing a null value here indicates a " +
                "permanent DST change. If this value is non-null the value shall be larger than the ValidStarting " +
                "time.",
            xref: { document: "core", section: "11.17.6.7.3" }
        })
    ),

    Datatype(
        { name: "StatusCodeEnum", type: "enum8", xref: { document: "core", section: "11.17.7.1" } },
        Field({
            name: "TimeNotAccepted", id: 0x2, conformance: "M",
            description: "Node rejected the attempt to set the UTC time"
        })
    )
);

MatterDefinition.children.push(TimeSynchronization);
