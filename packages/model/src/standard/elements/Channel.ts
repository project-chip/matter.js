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
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const Channel = Cluster(
    {
        name: "Channel", id: 0x504, classification: "application", pics: "CHANNEL",

        details: "This cluster provides an interface for controlling the current Channel on a device or endpoint." +
            "\n" +
            "This cluster server would be supported on Video Player devices or endpoints that allow Channel " +
            "control such as a Content App. This cluster provides a list of available channels and provides " +
            "commands for absolute and relative channel changes. Some of these commands and/or their responses " +
            "may be large (see Large Message Quality under Data Model section in [MatterCore]), but they do not " +
            "have the Large quality indicator (L) because they can also be transferred over MRP (see Message " +
            "Reliability Protocol in [MatterCore]) in pages that fit within the MRP MTU limit. However, an " +
            "implementation may leverage a transport like TCP that allows large payloads, if available, to " +
            "minimize the number of messages required to transfer the corresponding payload." +
            "\n" +
            "The cluster server for Channel is implemented by an endpoint that controls the current Channel.",

        xref: { document: "cluster", section: "6.6" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "6.6.4" } },
        Field({ name: "CL", constraint: "0", description: "ChannelList", details: "Provides list of available channels." }),
        Field({
            name: "LI", constraint: "1", description: "LineupInfo",
            details: "Provides lineup info, which is a reference to an external source of lineup information."
        }),
        Field({
            name: "EG", constraint: "2", description: "ElectronicGuide",
            details: "Provides electronic program guide information."
        }),
        Field({ name: "RP", constraint: "3", description: "RecordProgram", details: "Provides ability to record program." })
    ),

    Attribute(
        {
            name: "ChannelList", id: 0x0, type: "list", access: "R V", conformance: "CL", default: [],
            details: "This attribute shall provide the list of supported channels.",
            xref: { document: "cluster", section: "6.6.6.1" }
        },
        Field({ name: "entry", type: "ChannelInfoStruct" })
    ),

    Attribute({
        name: "Lineup", id: 0x1, type: "LineupInfoStruct", access: "R V", conformance: "LI",
        constraint: "desc", default: null, quality: "X",
        details: "This attribute shall identify the channel lineup using external data sources.",
        xref: { document: "cluster", section: "6.6.6.2" }
    }),

    Attribute({
        name: "CurrentChannel", id: 0x2, type: "ChannelInfoStruct", access: "R V", conformance: "O",
        constraint: "desc", default: null, quality: "X",
        details: "This attribute shall contain the current channel. When supported but a channel is not currently " +
            "tuned to (if a content application is in foreground), the value of the field shall be null.",
        xref: { document: "cluster", section: "6.6.6.3" }
    }),

    Command(
        {
            name: "ChangeChannel", id: 0x0, access: "O", conformance: "CL | LI", direction: "request",
            response: "ChangeChannelResponse",

            details: "Change the channel to the channel case-insensitive exact matching the value passed as an argument." +
                "\n" +
                "The match priority order shall be: Identifier, AffiliateCallSign, CallSign, Name, Number. In the " +
                "match string, the Channel number should be presented in the \"Major.Minor\" format, such as \"13.1\"." +
                "\n" +
                "Upon receipt, this shall generate a ChangeChannelResponse command." +
                "\n" +
                "Upon success, the CurrentChannel attribute, if supported, shall be updated to reflect the change.",

            xref: { document: "cluster", section: "6.6.7.1" }
        },

        Field({
            name: "Match", id: 0x0, type: "string", conformance: "M",
            details: "This field shall contain a user-input string to match in order to identify the target channel.",
            xref: { document: "cluster", section: "6.6.7.1.1" }
        })
    ),

    Command(
        {
            name: "ChangeChannelResponse", id: 0x1, conformance: "CL | LI", direction: "response",
            details: "This command shall be generated in response to a ChangeChannel command.",
            xref: { document: "cluster", section: "6.6.7.2" }
        },
        Field({
            name: "Status", id: 0x0, type: "StatusEnum", conformance: "M", constraint: "desc",
            details: "This field shall indicate the status of the command which resulted in this response.",
            xref: { document: "cluster", section: "6.6.7.2.1" }
        }),
        Field({
            name: "Data", id: 0x1, type: "string", conformance: "O", constraint: "any",
            details: "This field shall indicate Optional app-specific data.",
            xref: { document: "cluster", section: "6.6.7.2.2" }
        })
    ),

    Command(
        {
            name: "ChangeChannelByNumber", id: 0x2, access: "O", conformance: "M", direction: "request",
            response: "status",
            details: "Change the channel to the channel with the given Number in the ChannelList attribute.",
            xref: { document: "cluster", section: "6.6.7.3" }
        },

        Field({
            name: "MajorNumber", id: 0x0, type: "uint16", conformance: "M",
            details: "This field shall indicate the channel major number value (ATSC format) to which the channel should " +
                "change.",
            xref: { document: "cluster", section: "6.6.7.3.1" }
        }),

        Field({
            name: "MinorNumber", id: 0x1, type: "uint16", conformance: "M",
            details: "This field shall indicate the channel minor number value (ATSC format) to which the channel should " +
                "change.",
            xref: { document: "cluster", section: "6.6.7.3.2" }
        })
    ),

    Command(
        {
            name: "SkipChannel", id: 0x3, access: "O", conformance: "M", direction: "request",
            response: "status",

            details: "This command provides channel up and channel down functionality, but allows channel index jumps of " +
                "size Count." +
                "\n" +
                "When the value of the increase or decrease is larger than the number of channels remaining in the " +
                "given direction, then the behavior shall be to return to the beginning (or end) of the channel list " +
                "and continue. For example, if the current channel is at index 0 and count value of -1 is given, then " +
                "the current channel should change to the last channel.",

            xref: { document: "cluster", section: "6.6.7.4" }
        },

        Field({
            name: "Count", id: 0x0, type: "int16", conformance: "M",
            details: "This field shall indicate the number of steps to increase (Count is positive) or decrease (Count is " +
                "negative) the current channel.",
            xref: { document: "cluster", section: "6.6.7.4.1" }
        })
    ),

    Command(
        {
            name: "GetProgramGuide", id: 0x4, access: "O", conformance: "EG", direction: "request",
            response: "ProgramGuideResponse",
            details: "This command retrieves the program guide. It accepts several filter parameters to return specific " +
                "schedule and program information from a content app. The command shall receive in response a " +
                "ProgramGuideResponse. Standard error codes shall be used when arguments provided are not valid. For " +
                "example, if StartTime is greater than EndTime, the status code INVALID_ACTION shall be returned.",
            xref: { document: "cluster", section: "6.6.7.5" }
        },

        Field({
            name: "StartTime", id: 0x0, type: "epoch-s", conformance: "M",
            details: "This field shall indicate the beginning of the time window for which program guide entries are to be " +
                "retrieved, as a UTC time. Entries with a start time on or after this value will be included in the " +
                "results.",
            xref: { document: "cluster", section: "6.6.7.5.1" }
        }),

        Field({
            name: "EndTime", id: 0x1, type: "epoch-s", conformance: "M",
            details: "This field shall indicate the end of the time window for which program guide entries are to be " +
                "retrieved, as a UTC time. Entries with an end time on or before this value will be included in the " +
                "results. This field can represent a past or future value but shall be greater than the StartTime.",
            xref: { document: "cluster", section: "6.6.7.5.2" }
        }),

        Field(
            {
                name: "ChannelList", id: 0x2, type: "list", conformance: "O", constraint: "max 255", default: [],
                details: "This field shall indicate the set of channels for which program guide entries should be fetched. By " +
                    "providing a list of channels in this field, the response will only include entries corresponding to " +
                    "the specified channels.",
                xref: { document: "cluster", section: "6.6.7.5.3" }
            },

            Field({ name: "entry", type: "ChannelInfoStruct" })
        ),

        Field({
            name: "PageToken", id: 0x3, type: "PageTokenStruct", conformance: "O", default: null, quality: "X",
            details: "This field shall indicate the pagination token used for managing pagination progression.",
            xref: { document: "cluster", section: "6.6.7.5.4" }
        }),

        Field({
            name: "RecordingFlag", id: 0x5, type: "RecordingFlagBitmap", conformance: "O", default: null,
            quality: "X",
            details: "This field shall indicate the flags of the programs for which entries should be fetched.",
            xref: { document: "cluster", section: "6.6.7.5.5" }
        }),

        Field(
            {
                name: "ExternalIdList", id: 0x6, type: "list", conformance: "O", constraint: "max 255", default: [],
                details: "This field shall indicate the list of additional external content identifiers.",
                xref: { document: "cluster", section: "6.6.7.5.6" }
            },
            Field({ name: "entry", type: "ContentLauncher.AdditionalInfoStruct" })
        ),

        Field({
            name: "Data", id: 0x7, type: "octstr", conformance: "O", constraint: "max 8092",
            details: "This field shall indicate Optional app-specific data.",
            xref: { document: "cluster", section: "6.6.7.5.7" }
        })
    ),

    Command(
        {
            name: "ProgramGuideResponse", id: 0x5, conformance: "EG", direction: "response",
            details: "This command is a response to the GetProgramGuide command.",
            xref: { document: "cluster", section: "6.6.7.6" }
        },

        Field({
            name: "Paging", id: 0x0, type: "ChannelPagingStruct", conformance: "M",
            details: "This field shall indicate the necessary pagination attributes that define information for both the " +
                "succeeding and preceding data pages.",
            xref: { document: "cluster", section: "6.6.7.6.1" }
        }),

        Field(
            {
                name: "ProgramList", id: 0x1, type: "list", conformance: "M", default: [],
                details: "This field shall indicate the list of programs.",
                xref: { document: "cluster", section: "6.6.7.6.2" }
            },
            Field({ name: "entry", type: "ProgramStruct" })
        )
    ),

    Command(
        {
            name: "RecordProgram", id: 0x6, access: "O", conformance: "RP & EG", direction: "request",
            response: "status",
            details: "Record a specific program or series when it goes live. This functionality enables DVR recording " +
                "features.",
            xref: { document: "cluster", section: "6.6.7.7" }
        },

        Field({
            name: "ProgramIdentifier", id: 0x0, type: "string", conformance: "M", constraint: "max 255",
            details: "This field shall indicate the program identifier for the program that should be recorded. This value " +
                "is provided by the identifier field in ProgramStruct.",
            xref: { document: "cluster", section: "6.6.7.7.1" }
        }),

        Field({
            name: "ShouldRecordSeries", id: 0x1, type: "bool", conformance: "M",
            details: "This field shall indicate whether the whole series associated to the program should be recorded. For " +
                "example, invoking record program on an episode with that flag set to true, the target should " +
                "schedule record the whole series.",
            xref: { document: "cluster", section: "6.6.7.7.2" }
        }),

        Field(
            {
                name: "ExternalIdList", id: 0x2, type: "list", conformance: "O", constraint: "max 255", default: [],
                details: "This field, if present, shall indicate the list of additional external content identifiers.",
                xref: { document: "cluster", section: "6.6.7.7.3" }
            },
            Field({ name: "entry", type: "ContentLauncher.AdditionalInfoStruct" })
        ),

        Field({
            name: "Data", id: 0x3, type: "octstr", conformance: "O", constraint: "max 8092",
            details: "This field, if present, shall indicate app-specific data.",
            xref: { document: "cluster", section: "6.6.7.7.4" }
        })
    ),

    Command(
        {
            name: "CancelRecordProgram", id: 0x7, access: "O", conformance: "RP & EG", direction: "request",
            response: "status",
            details: "Cancel recording for a specific program or series.",
            xref: { document: "cluster", section: "6.6.7.8" }
        },

        Field({
            name: "ProgramIdentifier", id: 0x0, type: "string", conformance: "M", constraint: "max 255",
            details: "This field shall indicate the program identifier for the program that should be cancelled from " +
                "recording. This value is provided by the identifier field in ProgramStruct.",
            xref: { document: "cluster", section: "6.6.7.8.1" }
        }),

        Field({
            name: "ShouldRecordSeries", id: 0x1, type: "bool", conformance: "M",
            details: "This field shall indicate whether the whole series associated to the program should be cancelled " +
                "from recording. For example, invoking record program on an episode with that flag set to true, the " +
                "target should schedule record the whole series.",
            xref: { document: "cluster", section: "6.6.7.8.2" }
        }),

        Field(
            {
                name: "ExternalIdList", id: 0x2, type: "list", conformance: "O", constraint: "max 255", default: [],
                details: "This field, if present, shall indicate the list of additional external content identifiers.",
                xref: { document: "cluster", section: "6.6.7.8.3" }
            },
            Field({ name: "entry", type: "ContentLauncher.AdditionalInfoStruct" })
        ),

        Field({
            name: "Data", id: 0x3, type: "octstr", conformance: "O", constraint: "max 8092",
            details: "This field, if present, shall indicate app-specific data.",
            xref: { document: "cluster", section: "6.6.7.8.4" }
        })
    ),

    Datatype(
        { name: "RecordingFlagBitmap", type: "map8", xref: { document: "cluster", section: "6.6.5.1" } },
        Field({ name: "Scheduled", constraint: "0", description: "The program is scheduled for recording." }),
        Field({ name: "RecordSeries", constraint: "1", description: "The program series is scheduled for recording." }),
        Field({ name: "Recorded", constraint: "2", description: "The program is recorded and available to be played." })
    ),

    Datatype(
        { name: "LineupInfoTypeEnum", type: "enum8", xref: { document: "cluster", section: "6.6.5.2" } },
        Field({ name: "Mso", id: 0x0, conformance: "M", description: "Multi System Operator" })
    ),

    Datatype(
        { name: "StatusEnum", type: "enum8", xref: { document: "cluster", section: "6.6.5.3" } },
        Field({ name: "Success", id: 0x0, conformance: "M", description: "Command succeeded" }),
        Field({
            name: "MultipleMatches", id: 0x1, conformance: "M",
            description: "More than one equal match for the ChannelInfoStruct passed in."
        }),
        Field({
            name: "NoMatches", id: 0x2, conformance: "M",
            description: "No matches for the ChannelInfoStruct passed in."
        })
    ),

    Datatype(
        { name: "ChannelTypeEnum", type: "enum8", xref: { document: "cluster", section: "6.6.5.4" } },
        Field({
            name: "Satellite", id: 0x0, conformance: "M",
            description: "The channel is sourced from a satellite provider."
        }),
        Field({ name: "Cable", id: 0x1, conformance: "M", description: "The channel is sourced from a cable provider." }),
        Field({
            name: "Terrestrial", id: 0x2, conformance: "M",
            description: "The channel is sourced from a terrestrial provider."
        }),
        Field({ name: "Ott", id: 0x3, conformance: "M", description: "The channel is sourced from an OTT provider." })
    ),

    Datatype(
        {
            name: "ChannelInfoStruct", type: "struct",
            details: "This indicates a channel in a channel lineup." +
                "\n" +
                "While the major and minor numbers in the ChannelInfoStruct support use of ATSC channel format, a " +
                "lineup may use other formats which can map into these numeric values.",
            xref: { document: "cluster", section: "6.6.5.5" }
        },

        Field({
            name: "MajorNumber", id: 0x0, type: "uint16", conformance: "M",
            details: "This field shall indicate the channel major number value (for example, using ATSC format). When the " +
                "channel number is expressed as a string, such as \"13.1\" or \"256\", the major number would be 13 or " +
                "256, respectively. This field is required but shall be set to 0 for channels such as over-the-top " +
                "channels that are not represented by a major or minor number.",
            xref: { document: "cluster", section: "6.6.5.5.1" }
        }),

        Field({
            name: "MinorNumber", id: 0x1, type: "uint16", conformance: "M",
            details: "This field shall indicate the channel minor number value (for example, using ATSC format). When the " +
                "channel number is expressed as a string, such as \"13.1\" or \"256\", the minor number would be 1 or 0, " +
                "respectively. This field is required but shall be set to 0 for channels such as over-the-top " +
                "channels that are not represented by a major or minor number.",
            xref: { document: "cluster", section: "6.6.5.5.2" }
        }),

        Field({
            name: "Name", id: 0x2, type: "string", conformance: "O",
            details: "This field shall indicate the marketing name for the channel, such as “The CW\" or \"Comedy Central\". " +
                "This field is optional, but SHOULD be provided when known.",
            xref: { document: "cluster", section: "6.6.5.5.3" }
        }),

        Field({
            name: "CallSign", id: 0x3, type: "string", conformance: "O",
            details: "This field shall indicate the call sign of the channel, such as \"PBS\". This field is optional, but " +
                "SHOULD be provided when known.",
            xref: { document: "cluster", section: "6.6.5.5.4" }
        }),

        Field({
            name: "AffiliateCallSign", id: 0x4, type: "string", conformance: "O",
            details: "This field shall indicate the local affiliate call sign, such as \"KCTS\". This field is optional, but " +
                "SHOULD be provided when known.",
            xref: { document: "cluster", section: "6.6.5.5.5" }
        }),

        Field({
            name: "Identifier", id: 0x5, type: "string", conformance: "O",
            details: "This shall indicate the unique identifier for a specific channel. This field is optional, but SHOULD " +
                "be provided when MajorNumber and MinorNumber are not available.",
            xref: { document: "cluster", section: "6.6.5.5.6" }
        }),

        Field({
            name: "Type", id: 0x6, type: "ChannelTypeEnum", conformance: "O",
            details: "This shall indicate the type or grouping of a specific channel. This field is optional, but SHOULD " +
                "be provided when known.",
            xref: { document: "cluster", section: "6.6.5.5.7" }
        })
    ),

    Datatype(
        {
            name: "LineupInfoStruct", type: "struct",
            details: "The Lineup Info allows references to external lineup sources like Gracenote. The combination of " +
                "OperatorName, LineupName, and PostalCode MUST uniquely identify a lineup.",
            xref: { document: "cluster", section: "6.6.5.6" }
        },

        Field({
            name: "OperatorName", id: 0x0, type: "string", conformance: "M",
            details: "This field shall indicate the name of the operator, for example “Comcast”.",
            xref: { document: "cluster", section: "6.6.5.6.1" }
        }),

        Field({
            name: "LineupName", id: 0x1, type: "string", conformance: "O",
            details: "This field shall indicate the name of the provider lineup, for example \"Comcast King County\". This " +
                "field is optional, but SHOULD be provided when known.",
            xref: { document: "cluster", section: "6.6.5.6.2" }
        }),

        Field({
            name: "PostalCode", id: 0x2, type: "string", conformance: "O",
            details: "This field shall indicate the postal code (zip code) for the location of the device, such as " +
                "\"98052\". This field is optional, but SHOULD be provided when known.",
            xref: { document: "cluster", section: "6.6.5.6.3" }
        }),

        Field({
            name: "LineupInfoType", id: 0x3, type: "LineupInfoTypeEnum", conformance: "M", constraint: "desc",
            details: "This field shall indicate the type of lineup. This field is optional, but SHOULD be provided when " +
                "known.",
            xref: { document: "cluster", section: "6.6.5.6.4" }
        })
    ),

    Datatype(
        {
            name: "ProgramStruct", type: "struct",
            details: "This indicates a program within an electronic program guide (EPG).",
            xref: { document: "cluster", section: "6.6.5.7" }
        },

        Field({
            name: "Identifier", id: 0x0, type: "string", conformance: "M", constraint: "max 255",
            details: "This field shall indicate a unique identifier for a program within an electronic program guide list. " +
                "The identifier shall be unique across multiple channels.",
            xref: { document: "cluster", section: "6.6.5.7.1" }
        }),

        Field({
            name: "Channel", id: 0x1, type: "ChannelInfoStruct", conformance: "M",
            details: "This field shall indicate the channel associated to the program.",
            xref: { document: "cluster", section: "6.6.5.7.2" }
        }),

        Field({
            name: "StartTime", id: 0x2, type: "epoch-s", conformance: "M",
            details: "This field shall indicate an epoch time in seconds indicating the start time of a program, as a UTC " +
                "time. This field can represent a past or future value.",
            xref: { document: "cluster", section: "6.6.5.7.3" }
        }),

        Field({
            name: "EndTime", id: 0x3, type: "epoch-s", conformance: "M",
            details: "This field shall indicate an epoch time in seconds indicating the end time of a program, as a UTC " +
                "time. This field can represent a past or future value but shall be greater than the StartTime.",
            xref: { document: "cluster", section: "6.6.5.7.4" }
        }),

        Field({
            name: "Title", id: 0x4, type: "string", conformance: "M", constraint: "max 255",
            details: "This field shall indicate the title or name for the specific program. For example, “MCIS: Los " +
                "Angeles”.",
            xref: { document: "cluster", section: "6.6.5.7.5" }
        }),

        Field({
            name: "Subtitle", id: 0x5, type: "string", conformance: "O", constraint: "max 255",
            details: "This field shall indicate the subtitle for the specific program. For example, “Maybe Today\" which is " +
                "an episode name for “MCIS: Los Angeles”. This field is optional but shall be provided if applicable " +
                "and known.",
            xref: { document: "cluster", section: "6.6.5.7.6" }
        }),

        Field({
            name: "Description", id: 0x6, type: "string", conformance: "O", constraint: "max 8192",
            details: "This field shall indicate the brief description for the specific program. For example, a description " +
                "of an episode. This field is optional but shall be provided if known.",
            xref: { document: "cluster", section: "6.6.5.7.7" }
        }),

        Field(
            {
                name: "AudioLanguages", id: 0x7, type: "list", conformance: "O", constraint: "max 10[max 50]",
                default: [],
                details: "This field shall indicate the audio language for the specific program. The value is a string " +
                    "containing one of the standard Tags for Identifying Languages RFC 5646. This field is optional but " +
                    "shall be provided if known.",
                xref: { document: "cluster", section: "6.6.5.7.8" }
            },

            Field({ name: "entry", type: "string" })
        ),

        Field(
            {
                name: "Ratings", id: 0x8, type: "list", conformance: "O", constraint: "max 255", default: [],
                details: "This field shall be used for indicating the level of parental guidance recommended for of a " +
                    "particular program. This can be any rating system used in the country or region where the program is " +
                    "broadcast. For example, in the United States “TV-PG” may contain material that parents can find not " +
                    "suitable for younger children but can be accepted in general for older children. This field is " +
                    "optional but shall be provided if known.",
                xref: { document: "cluster", section: "6.6.5.7.9" }
            },

            Field({ name: "entry", type: "string" })
        ),

        Field({
            name: "ThumbnailUrl", id: 0x9, type: "string", conformance: "O", constraint: "max 8192",
            details: "This field shall represent a URL of a thumbnail that clients can use to render an image for the " +
                "program. The syntax of this field shall follow the syntax as specified in RFC 1738 and shall use the " +
                "https scheme.",
            xref: { document: "cluster", section: "6.6.5.7.10" }
        }),

        Field({
            name: "PosterArtUrl", id: 0xa, type: "string", conformance: "O", constraint: "max 8192",
            details: "This field shall represent a URL of a poster that clients can use to render an image for the program " +
                "on the detail view. The syntax of this field shall follow the syntax as specified in RFC 1738 and " +
                "shall use the https scheme.",
            xref: { document: "cluster", section: "6.6.5.7.11" }
        }),

        Field({
            name: "DvbiUrl", id: 0xb, type: "string", conformance: "O", constraint: "max 8192",
            details: "This field shall represent the DVB-I URL associated to the program. The syntax of this field shall " +
                "follow the syntax as specified in RFC 1738 and shall use the https scheme.",
            xref: { document: "cluster", section: "6.6.5.7.12" }
        }),

        Field({
            name: "ReleaseDate", id: 0xc, type: "string", conformance: "O", constraint: "max 30",
            details: "This field shall be a string, in ISO 8601 format, representing the date on which the program was " +
                "released. This field is optional but when provided, the year shall be provided as part of the " +
                "string.",
            xref: { document: "cluster", section: "6.6.5.7.13" }
        }),

        Field({
            name: "ParentalGuidanceText", id: 0xd, type: "string", conformance: "O", constraint: "max 255",
            details: "This field shall represent a string providing additional information on the parental guidance. This " +
                "field is optional.",
            xref: { document: "cluster", section: "6.6.5.7.14" }
        }),

        Field({
            name: "RecordingFlag", id: 0xe, type: "RecordingFlagBitmap", conformance: "RP",
            details: "This field shall represent the recording status of the program. This field is required if the " +
                "RecordProgram feature is set.",
            xref: { document: "cluster", section: "6.6.5.7.15" }
        }),

        Field({
            name: "SeriesInfo", id: 0xf, type: "SeriesInfoStruct", conformance: "O", default: null,
            quality: "X",
            details: "This field shall represent the information of a series such as season and episode number. This field " +
                "is optional but SHOULD be provided if the program represents a series and this information is " +
                "available.",
            xref: { document: "cluster", section: "6.6.5.7.16" }
        }),

        Field(
            {
                name: "CategoryList", id: 0x10, type: "list", conformance: "O", constraint: "max 255", default: [],
                details: "This field shall represent the category of a particular program. This field is optional but shall be " +
                    "provided if known.",
                xref: { document: "cluster", section: "6.6.5.7.17" }
            },

            Field({ name: "entry", type: "ProgramCategoryStruct" })
        ),

        Field(
            {
                name: "CastList", id: 0x11, type: "list", conformance: "O", constraint: "max 255", default: [],
                details: "This field shall represent a list of the cast or the crew on the program. A single cast member may " +
                    "have more than one role. This field is optional but shall be provided if known.",
                xref: { document: "cluster", section: "6.6.5.7.18" }
            },

            Field({ name: "entry", type: "ProgramCastStruct" })
        ),

        Field(
            {
                name: "ExternalIdList", id: 0x12, type: "list", conformance: "O", constraint: "max 255",
                default: [],
                details: "This field shall indicate the list of additional external content identifiers.",
                xref: { document: "cluster", section: "6.6.5.7.19" }
            },

            Field({ name: "entry", type: "ContentLauncher.AdditionalInfoStruct" })
        )
    ),

    Datatype(
        {
            name: "ProgramCategoryStruct", type: "struct",
            details: "This object defines the category associated to a program.",
            xref: { document: "cluster", section: "6.6.5.8" }
        },
        Field({
            name: "Category", id: 0x0, type: "string", conformance: "M", constraint: "max 256",
            details: "This field shall represent the category or genre of the program. Ex. News.",
            xref: { document: "cluster", section: "6.6.5.8.1" }
        }),
        Field({
            name: "SubCategory", id: 0x1, type: "string", conformance: "O", constraint: "max 256",
            details: "This field shall represent the sub-category or sub-genre of the program. Ex. Local.",
            xref: { document: "cluster", section: "6.6.5.8.2" }
        })
    ),

    Datatype(
        {
            name: "SeriesInfoStruct", type: "struct",
            details: "This object provides the episode information related to a program.",
            xref: { document: "cluster", section: "6.6.5.9" }
        },
        Field({
            name: "Season", id: 0x0, type: "string", conformance: "M", constraint: "max 256",
            details: "This field shall represent the season of the series associated to the program.",
            xref: { document: "cluster", section: "6.6.5.9.1" }
        }),
        Field({
            name: "Episode", id: 0x1, type: "string", conformance: "M", constraint: "max 256",
            details: "This field shall represent the episode of the program.",
            xref: { document: "cluster", section: "6.6.5.9.2" }
        })
    ),

    Datatype(
        {
            name: "ProgramCastStruct", type: "struct",
            details: "This object provides the cast information related to a program.",
            xref: { document: "cluster", section: "6.6.5.10" }
        },
        Field({
            name: "Name", id: 0x0, type: "string", conformance: "M", constraint: "max 256",
            details: "This field shall represent the name of the cast member.",
            xref: { document: "cluster", section: "6.6.5.10.1" }
        }),
        Field({
            name: "Role", id: 0x1, type: "string", conformance: "M", constraint: "max 256",
            details: "This field shall represent the role of the cast member. Ex. Actor, Director.",
            xref: { document: "cluster", section: "6.6.5.10.2" }
        })
    ),

    Datatype(
        {
            name: "PageTokenStruct", type: "struct",
            details: "This object defines the pagination structure.",
            xref: { document: "cluster", section: "6.6.5.11" }
        },

        Field({
            name: "Limit", id: 0x0, type: "uint16", conformance: "O", default: 0,
            details: "This field shall indicate the maximum number of entries that should be retrieved from the program " +
                "guide in a single response. It allows clients to specify the size of the paginated result set based " +
                "on their needs.",
            xref: { document: "cluster", section: "6.6.5.11.1" }
        }),

        Field({
            name: "After", id: 0x1, type: "string", conformance: "O", constraint: "max 8192",
            details: "This field shall indicate the cursor that pinpoints the start of the upcoming data page. In a " +
                "Cursor- based pagination system, the field acts as a reference point, ensuring the set of results " +
                "corresponds directly to the data following the specified cursor. In a Offset-based pagination " +
                "system, the field, along with limit, indicate the offset from which entries in the program guide " +
                "will be retrieved.",
            xref: { document: "cluster", section: "6.6.5.11.2" }
        }),

        Field({
            name: "Before", id: 0x2, type: "string", conformance: "O", constraint: "max 8192",
            details: "This field shall indicate the cursor that pinpoints the end of the upcoming data page. In a Cursor- " +
                "based pagination system, the field acts as a reference point, ensuring the set of results " +
                "corresponds directly to the data preceding the specified cursor. In a Offset-based pagination " +
                "system, the field, along with limit, indicate the offset from which entries in the program guide " +
                "will be retrieved.",
            xref: { document: "cluster", section: "6.6.5.11.3" }
        })
    ),

    Datatype(
        {
            name: "ChannelPagingStruct", type: "struct",
            details: "This object defines the paging structure that includes the previous and next pagination tokens.",
            xref: { document: "cluster", section: "6.6.5.12" }
        },

        Field({
            name: "PreviousToken", id: 0x0, type: "PageTokenStruct", conformance: "O", default: null,
            quality: "X",
            details: "This field shall indicate the token to retrieve the preceding page. Absence of this field denotes " +
                "the response as the initial page.",
            xref: { document: "cluster", section: "6.6.5.12.1" }
        }),

        Field({
            name: "NextToken", id: 0x1, type: "PageTokenStruct", conformance: "O", default: null, quality: "X",
            details: "This field shall indicate the token to retrieve the next page. Absence of this field denotes the " +
                "response as the last page.",
            xref: { document: "cluster", section: "6.6.5.12.2" }
        })
    )
);

MatterDefinition.children.push(Channel);
