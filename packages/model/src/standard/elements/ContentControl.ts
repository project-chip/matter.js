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

export const ContentControl = Cluster(
    {
        name: "ContentControl", id: 0x50f, classification: "application", pics: "CONCON",

        details: "This cluster is used for managing the content control (including \"parental control\") settings on a" +
            "\n" +
            "media device such as a TV, or Set-top Box." +
            "\n" +
            "This cluster allows to configure content control settings by clients with the Management privilege. " +
            "It is responsibility of the end product to enforce appropriate right access (for example, to prevent " +
            "a child from disabling this feature)." +
            "\n" +
            "NOTE Support for Content Control cluster is provisional.",

        xref: { document: "cluster", section: "6.13" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "6.13.4" } },
        Field({ name: "ST", constraint: "0", description: "ScreenTime", details: "Supports managing screen time limits." }),
        Field({
            name: "PM", constraint: "1", description: "PinManagement",
            details: "Supports managing a PIN code which is used for restricting access to configuration of this feature."
        }),
        Field({
            name: "BU", constraint: "2", description: "BlockUnrated",
            details: "Supports managing content controls for unrated content."
        }),
        Field({
            name: "OCR", constraint: "3", description: "OnDemandContentRating",
            details: "Supports managing content controls based upon rating threshold for on demand content."
        }),
        Field({
            name: "SCR", constraint: "4", description: "ScheduledContentRating",
            details: "Supports managing content controls based upon rating threshold for scheduled content."
        }),
        Field({
            name: "BC", constraint: "5", description: "BlockChannels",
            details: "Supports managing a set of channels that are prohibited."
        }),
        Field({
            name: "BA", constraint: "6", description: "BlockApplications",
            details: "Supports managing a set of applications that are prohibited."
        }),
        Field({
            name: "BTW", constraint: "7", description: "BlockContentTimeWindow",
            details: "Supports managing content controls based upon setting time window in which all contents and " +
                "applications SHALL be blocked."
        })
    ),

    Attribute({
        name: "Enabled", id: 0x0, type: "bool", access: "R V", conformance: "M",
        details: "Indicates whether the Content Control feature implemented on a media device is turned off (FALSE) or " +
            "turned on (TRUE).",
        xref: { document: "cluster", section: "6.13.7.1" }
    }),

    Attribute(
        {
            name: "OnDemandRatings", id: 0x1, type: "list", access: "R V", conformance: "OCR",

            details: "This attribute shall provide the collection of ratings that are currently valid for this media " +
                "device. The items should honor the metadata of the on-demand content (e.g. Movie) rating system for " +
                "one country or region where the media device has been provisioned. For example, for the MPAA system, " +
                "RatingName may be one value out of \"G\", \"PG\", \"PG-13\", \"R\", \"NC-17\"." +
                "\n" +
                "The media device shall have a way to determine which rating system applies for the on-demand content " +
                "and then populate this attribute. For example, it can do it through examining the Location attribute " +
                "in the Basic Information cluster, and then determining which rating system applies." +
                "\n" +
                "The ratings in this collection shall be in order from a rating for the youngest viewers to the one " +
                "for the oldest viewers. Each rating in the list shall be unique.",

            xref: { document: "cluster", section: "6.13.7.2" }
        },

        Field({ name: "entry", type: "RatingNameStruct" })
    ),

    Attribute({
        name: "OnDemandRatingThreshold", id: 0x2, type: "string", access: "R V", conformance: "OCR",
        constraint: "max 8",

        details: "Indicates a threshold rating as a content filter which is compared with the rating for on-demand " +
            "content. For example, if the on-demand content rating is greater than or equal to " +
            "OnDemandRatingThreshold, for a rating system that is ordered from lower viewer age to higher viewer " +
            "age, then on-demand content is not appropriate for the User and the Node shall prevent the playback " +
            "of content." +
            "\n" +
            "This attribute shall be set to one of the values present in the OnDemandRatings attribute." +
            "\n" +
            "When this attribute changes, the device SHOULD make the user aware of any limits of this feature. " +
            "For example, if the feature does not control content within apps, then the device should make this " +
            "clear to the user when the attribute changes.",

        xref: { document: "cluster", section: "6.13.7.3" }
    }),

    Attribute(
        {
            name: "ScheduledContentRatings", id: 0x3, type: "list", access: "R V", conformance: "SCR",

            details: "Indicates a collection of ratings which ScheduledContentRatingThreshold can be set to. The items " +
                "should honor metadata of the scheduled content rating system for the country or region where the " +
                "media device has been provisioned." +
                "\n" +
                "The media device shall have a way to determine which scheduled content rating system applies and " +
                "then populate this attribute. For example, this can be done by examining the Location attribute in " +
                "Basic Information cluster, and then determining which rating system applies." +
                "\n" +
                "The ratings in this collection shall be in order from a rating for the youngest viewers to the one " +
                "for the oldest viewers. Each rating in the list shall be unique.",

            xref: { document: "cluster", section: "6.13.7.4" }
        },

        Field({ name: "entry", type: "RatingNameStruct" })
    ),

    Attribute({
        name: "ScheduledContentRatingThreshold", id: 0x4, type: "string", access: "R V", conformance: "SCR",
        constraint: "max 8",

        details: "Indicates a threshold rating as a content filter which is used to compare with the rating for " +
            "scheduled content. For example, if the scheduled content rating is greater than or equal to " +
            "ScheduledContentRatingThreshold for a rating system that is ordered from lower viewer age to higher " +
            "viewer age, then the scheduled content is not appropriate for the User and shall be blocked." +
            "\n" +
            "This attribute shall be set to one of the values present in the ScheduledContentRatings attribute." +
            "\n" +
            "When this attribute changes, the device SHOULD make the user aware of any limits of this feature. " +
            "For example, if the feature does not control content within apps, then the device should make this " +
            "clear to the user when the attribute changes.",

        xref: { document: "cluster", section: "6.13.7.5" }
    }),

    Attribute({
        name: "ScreenDailyTime", id: 0x5, type: "elapsed-s", access: "R V", conformance: "ST",
        constraint: "max 86400",
        details: "Indicates the amount of time (in seconds) which the User is allowed to spend watching TV within one " +
            "day when the Content Control feature is activated.",
        xref: { document: "cluster", section: "6.13.7.6" }
    }),

    Attribute({
        name: "RemainingScreenTime", id: 0x6, type: "elapsed-s", access: "R V", conformance: "ST",
        constraint: "max 86400",

        details: "Indicates the remaining screen time (in seconds) which the User is allowed to spend watching TV for " +
            "the current day when the Content Control feature is activated. When this value equals 0, the media " +
            "device shall terminate the playback of content." +
            "\n" +
            "This attribute shall be updated when the AddBonusTime command is received and processed successfully " +
            "(with the correct PIN).",

        xref: { document: "cluster", section: "6.13.7.7" }
    }),

    Attribute({
        name: "BlockUnrated", id: 0x7, type: "bool", access: "R V", conformance: "BU",

        details: "Indicates whether the playback of unrated content is allowed when the Content Control feature is " +
            "activated. If this attribute equals FALSE, then playback of unrated content shall be permitted. " +
            "Otherwise, the media device shall prevent the playback of unrated content." +
            "\n" +
            "When this attribute changes, the device SHOULD make the user aware of any limits of this feature. " +
            "For example, if the feature does not control content within apps, then the device should make this " +
            "clear to the user when the attribute changes.",

        xref: { document: "cluster", section: "6.13.7.8" }
    }),

    Attribute(
        {
            name: "BlockChannelList", id: 0x8, type: "list", access: "R V", conformance: "BC",
            details: "Indicates a set of channels that shall be blocked when the Content Control feature is activated.",
            xref: { document: "cluster", section: "6.13.7.9" }
        },
        Field({ name: "entry", type: "BlockChannelStruct" })
    ),

    Attribute(
        {
            name: "BlockApplicationList", id: 0x9, type: "list", access: "R V", conformance: "BA",
            details: "Indicates a set of applications that shall be blocked when the Content Control feature is activated.",
            xref: { document: "cluster", section: "6.13.7.10" }
        },
        Field({ name: "entry", type: "AppInfoStruct" })
    ),

    Attribute(
        {
            name: "BlockContentTimeWindow", id: 0xa, type: "list", access: "R V", conformance: "BTW",
            constraint: "max 7",

            details: "Indicates a set of periods during which the playback of content on media device shall be blocked " +
                "when the Content Control feature is activated. The media device shall reject any request to play " +
                "content during one period of this attribute. If it is entering any one period of this attribute, the " +
                "media device shall block content which is playing and generate an event " +
                "EnteringBlockContentTimeWindow. There shall NOT be multiple entries in this attribute list for the " +
                "same day of week.",

            xref: { document: "cluster", section: "6.13.7.11" }
        },

        Field({ name: "entry", type: "TimeWindowStruct" })
    ),

    Event({
        name: "RemainingScreenTimeExpired", id: 0x0, access: "V", conformance: "ST", priority: "info",
        details: "This event shall be generated when the RemainingScreenTime equals 0.",
        xref: { document: "cluster", section: "6.13.9.1" }
    }),

    Event({
        name: "EnteringBlockContentTimeWindow", id: 0x1, access: "V", conformance: "BTW", priority: "info",
        details: "This event shall be generated when entering a period of blocked content as configured in the " +
            "BlockContentTimeWindow attribute.",
        xref: { document: "cluster", section: "6.13.9.2" }
    }),

    Command(
        {
            name: "UpdatePin", id: 0x0, access: "M T", conformance: "PM", direction: "request",
            response: "status",

            details: "The purpose of this command is to update the PIN used for protecting configuration of the content " +
                "control settings. Upon success, the old PIN shall no longer work." +
                "\n" +
                "The PIN is used to ensure that only the Node (or User) with the PIN code can make changes to the " +
                "Content Control settings, for example, turn off Content Controls or modify the ScreenDailyTime. The " +
                "PIN is composed of a numeric string of up to 6 human readable characters (displayable) ." +
                "\n" +
                "Upon receipt of this command, the media device shall check if the OldPIN field of this command is " +
                "the same as the current PIN. If the PINs are the same, then the PIN code shall be set to NewPIN. " +
                "Otherwise a response with InvalidPINCode error status shall be returned." +
                "\n" +
                "The media device may provide a default PIN to the User via an out of band mechanism. For security " +
                "reasons, it is recommended that a client encourage the user to update the PIN from its default value " +
                "when performing configuration of the Content Control settings exposed by this cluster. The ResetPIN " +
                "command can also be used to obtain the default PIN.",

            xref: { document: "cluster", section: "6.13.8.1" }
        },

        Field({
            name: "OldPin", id: 0x0, type: "string", conformance: "M", constraint: "max 6",
            details: "This field shall specify the original PIN. Once the UpdatePIN command is performed successfully, it " +
                "shall be invalid.",
            xref: { document: "cluster", section: "6.13.8.1.1" }
        }),

        Field({
            name: "NewPin", id: 0x1, type: "string", conformance: "M", constraint: "max 6",
            details: "This field shall indicate a new PIN for the Content Control feature.",
            xref: { document: "cluster", section: "6.13.8.1.2" }
        })
    ),

    Command({
        name: "ResetPin", id: 0x1, access: "A T", conformance: "PM", direction: "request",
        response: "ResetPinResponse",
        details: "The purpose of this command is to reset the PIN." +
            "\n" +
            "If this command is executed successfully, a ResetPINResponse command with a new PIN shall be " +
            "returned.",
        xref: { document: "cluster", section: "6.13.8.2" }
    }),

    Command(
        {
            name: "ResetPinResponse", id: 0x2, conformance: "PM", direction: "response",
            details: "This command shall be generated in response to a ResetPIN command.",
            xref: { document: "cluster", section: "6.13.8.3" }
        },
        Field({
            name: "PinCode", id: 0x0, type: "string", conformance: "M", constraint: "max 6",
            details: "This field shall indicate a new PIN of the Content Control feature.",
            xref: { document: "cluster", section: "6.13.8.3.1" }
        })
    ),

    Command({
        name: "Enable", id: 0x3, access: "M T", conformance: "M", direction: "request", response: "status",
        details: "The purpose of this command is to turn on the Content Control feature on a media device." +
            "\n" +
            "Upon receipt of the Enable command, the media device shall set the Enabled attribute to TRUE.",
        xref: { document: "cluster", section: "6.13.8.4" }
    }),

    Command({
        name: "Disable", id: 0x4, access: "M T", conformance: "M", direction: "request", response: "status",
        details: "The purpose of this command is to turn off the Content Control feature on a media device." +
            "\n" +
            "On receipt of the Disable command, the media device shall set the Enabled attribute to FALSE.",
        xref: { document: "cluster", section: "6.13.8.5" }
    }),

    Command(
        {
            name: "AddBonusTime", id: 0x5, access: "O", conformance: "ST", direction: "request",
            response: "status",

            details: "The purpose of this command is to add the extra screen time for the user." +
                "\n" +
                "If a client with Operate privilege invokes this command, the media device shall check whether the " +
                "PINCode passed in the command matches the current PINCode value. If these match, then the " +
                "RemainingScreenTime attribute shall be increased by the specified BonusTime value." +
                "\n" +
                "If the PINs do not match, then a response with InvalidPINCode error status shall be returned, and no " +
                "changes shall be made to RemainingScreenTime." +
                "\n" +
                "If a client with Manage privilege or greater invokes this command, the media device shall ignore the " +
                "PINCode field and directly increase the RemainingScreenTime attribute by the specified BonusTime " +
                "value." +
                "\n" +
                "A server that does not support the PM feature shall respond with InvalidPINCode to clients that only " +
                "have Operate privilege unless:" +
                "\n" +
                "  • It has been provided with the PIN value to expect via an out of band mechanism, and" +
                "\n" +
                "  • The client has provided a PINCode that matches the expected PIN value.",

            xref: { document: "cluster", section: "6.13.8.6" }
        },

        Field({
            name: "PinCode", id: 0x0, type: "string", conformance: "O", constraint: "max 6",

            details: "This field shall indicate the PIN." +
                "\n" +
                "This field shall be optional for clients with Manage or greater privilege but shall be mandatory for " +
                "clients with Operate privilege. The PIN provided in this field shall be used to guarantee that a " +
                "client with Operate permission is allowed to invoke this command only if the PIN passed in this " +
                "command is equal to the current PIN value.",

            xref: { document: "cluster", section: "6.13.8.6.1" }
        }),

        Field({
            name: "BonusTime", id: 0x1, type: "elapsed-s", conformance: "M", constraint: "desc", default: 300,
            details: "This field shall indicate the amount of extra time (in seconds) to increase RemainingScreenTime. " +
                "This field shall NOT exceed the remaining time of this day.",
            xref: { document: "cluster", section: "6.13.8.6.2" }
        })
    ),

    Command(
        {
            name: "SetScreenDailyTime", id: 0x6, access: "M", conformance: "ST", direction: "request",
            response: "status",
            details: "The purpose of this command is to set the ScreenDailyTime attribute." +
                "\n" +
                "Upon receipt of the SetScreenDailyTime command, the media device shall set the ScreenDailyTime " +
                "attribute to the ScreenTime value.",
            xref: { document: "cluster", section: "6.13.8.7" }
        },

        Field({
            name: "ScreenTime", id: 0x0, type: "elapsed-s", conformance: "M", constraint: "max 86400",
            details: "This field shall indicate the time (in seconds) which the User is allowed to spend watching TV on " +
                "this media device within one day.",
            xref: { document: "cluster", section: "6.13.8.7.1" }
        })
    ),

    Command({
        name: "BlockUnratedContent", id: 0x7, access: "M", conformance: "BU", direction: "request",
        response: "status",
        details: "The purpose of this command is to specify whether programs with no Content rating must be blocked by " +
            "this media device." +
            "\n" +
            "Upon receipt of the BlockUnratedContent command, the media device shall set the BlockUnrated " +
            "attribute to TRUE.",
        xref: { document: "cluster", section: "6.13.8.8" }
    }),

    Command({
        name: "UnblockUnratedContent", id: 0x8, access: "M", conformance: "BU", direction: "request",
        response: "status",
        details: "The purpose of this command is to specify whether programs with no Content rating must be blocked by " +
            "this media device." +
            "\n" +
            "Upon receipt of the UnblockUnratedContent command, the media device shall set the BlockUnrated " +
            "attribute to FALSE.",
        xref: { document: "cluster", section: "6.13.8.9" }
    }),

    Command(
        {
            name: "SetOnDemandRatingThreshold", id: 0x9, access: "M", conformance: "OCR", direction: "request",
            response: "status",
            details: "The purpose of this command is to set the OnDemandRatingThreshold attribute." +
                "\n" +
                "Upon receipt of the SetOnDemandRatingThreshold command, the media device shall check if the Rating " +
                "field is one of values present in the OnDemandRatings attribute. If not, then a response with " +
                "InvalidRating error status shall be returned.",
            xref: { document: "cluster", section: "6.13.8.10" }
        },

        Field({
            name: "Rating", id: 0x0, type: "string", conformance: "M", constraint: "max 8",
            details: "This field indicates a threshold rating for filtering on-demand content. This field shall be set to " +
                "one of the values present in the OnDemandRatings attribute",
            xref: { document: "cluster", section: "6.13.8.10.1" }
        })
    ),

    Command(
        {
            name: "SetScheduledContentRatingThreshold", id: 0xa, access: "M", conformance: "SCR",
            direction: "request", response: "status",
            details: "The purpose of this command is to set ScheduledContentRatingThreshold attribute." +
                "\n" +
                "Upon receipt of the SetScheduledContentRatingThreshold command, the media device shall check if the " +
                "Rating field is one of values present in the ScheduledContentRatings attribute. If not, then a " +
                "response with InvalidRating error status shall be returned.",
            xref: { document: "cluster", section: "6.13.8.11" }
        },

        Field({
            name: "Rating", id: 0x0, type: "string", conformance: "M", constraint: "max 8",
            details: "This field indicates a threshold rating for filtering scheduled content. This field shall be set to " +
                "one of the values present in the ScheduledContentRatings attribute.",
            xref: { document: "cluster", section: "6.13.8.11.1" }
        })
    ),

    Command(
        {
            name: "AddBlockChannels", id: 0xb, access: "M", conformance: "BC", direction: "request",
            response: "status",

            details: "The purpose of this command is to set BlockChannelList attribute." +
                "\n" +
                "Upon receipt of the AddBlockChannels command, the media device shall check if the channels" +
                "\n" +
                "passed in this command are valid. If the channel is invalid, then a response with InvalidChannel " +
                "error Status shall be returned." +
                "\n" +
                "If there is at least one channel in Channels field which is not in the BlockChannelList attribute, " +
                "the media device shall process the request by adding these new channels into the BlockChannelList " +
                "attribute and return a successful Status Response. During this process, the media device shall " +
                "assign one unique index to BlockChannelIndex field for every channel passed in this command." +
                "\n" +
                "If all channels in Channel field already exist in the BlockChannelList attribute, then a response " +
                "with ChannelAlreadyExist error Status shall be returned.",

            xref: { document: "cluster", section: "6.13.8.12" }
        },

        Field(
            {
                name: "Channels", id: 0x0, type: "list", conformance: "M",
                details: "This field indicates a set of channels that shall be blocked when the Content Control feature is " +
                    "activated. This field shall be set to values present in ChannelList attribute in the Channel " +
                    "cluster. The BlockChannelIndex field passed in this command shall be NULL.",
                xref: { document: "cluster", section: "6.13.8.12.1" }
            },

            Field({ name: "entry", type: "BlockChannelStruct" })
        )
    ),

    Command(
        {
            name: "RemoveBlockChannels", id: 0xc, access: "M", conformance: "BC", direction: "request",
            response: "status",

            details: "The purpose of this command is to remove channels from the BlockChannelList attribute." +
                "\n" +
                "Upon receipt of the RemoveBlockChannels command, the media device shall check if the channels " +
                "indicated by ChannelIndexes passed in this command are present in BlockChannelList attribute. If one " +
                "or more channels indicated by ChannelIndexes passed in this command field are not present in the " +
                "BlockChannelList attribute, then a response with ChannelNotExist error Status shall be returned.",

            xref: { document: "cluster", section: "6.13.8.13" }
        },

        Field(
            {
                name: "ChannelIndexes", id: 0x0, type: "list", conformance: "M",
                details: "This field shall specify a set of indexes indicating Which channels shall be removed from the " +
                    "BlockChannelList attribute.",
                xref: { document: "cluster", section: "6.13.8.13.1" }
            },

            Field({ name: "entry", type: "uint16" })
        )
    ),

    Command(
        {
            name: "AddBlockApplications", id: 0xd, access: "M", conformance: "BA", direction: "request",
            response: "status",

            details: "The purpose of this command is to set applications to the BlockApplicationList attribute." +
                "\n" +
                "Upon receipt of the AddBlockApplications command, the media device shall check if the Applications " +
                "passed in this command are installed. If there is an application in Applications field which is not " +
                "identified by media device, then a response with UnidentifiableApplication error Status may be" +
                "\n" +
                "returned." +
                "\n" +
                "If there is one or more applications which are not present in BlockApplicationList attribute, the " +
                "media device shall process the request by adding the new application to the BlockApplicationList " +
                "attribute and return a successful Status Response." +
                "\n" +
                "If all applications in Applications field are already present in BlockApplicationList attribute, " +
                "then a response with ApplicationAlreadyExist error Status shall be returned.",

            xref: { document: "cluster", section: "6.13.8.14" }
        },

        Field(
            {
                name: "Applications", id: 0x0, type: "list", conformance: "M",
                details: "This field indicates a set of applications that shall be blocked when the Content Control feature is " +
                    "activated.",
                xref: { document: "cluster", section: "6.13.8.14.1" }
            },

            Field({ name: "entry", type: "AppInfoStruct" })
        )
    ),

    Command(
        {
            name: "RemoveBlockApplications", id: 0xe, access: "M", conformance: "BA", direction: "request",
            response: "status",

            details: "The purpose of this command is to remove applications from the BlockApplicationList attribute." +
                "\n" +
                "Upon receipt of the RemoveBlockApplications command, the media device shall check if the " +
                "applications passed in this command present in the BlockApplicationList attribute. If one or more " +
                "applications in Applications field which are not present in the BlockApplicationList attribute, then " +
                "a response with ApplicationNotExist error Status shall be returned.",

            xref: { document: "cluster", section: "6.13.8.15" }
        },

        Field(
            {
                name: "Applications", id: 0x0, type: "list", conformance: "M",
                details: "This field indicates a set of applications which shall be removed from BlockApplicationList " +
                    "attribute.",
                xref: { document: "cluster", section: "6.13.8.15.1" }
            },

            Field({ name: "entry", type: "AppInfoStruct" })
        )
    ),

    Command(
        {
            name: "SetBlockContentTimeWindow", id: 0xf, access: "M", conformance: "BTW", direction: "request",
            response: "status",

            details: "The purpose of this command is to set the BlockContentTimeWindow attribute." +
                "\n" +
                "Upon receipt of the SetBlockContentTimeWindow command, the media device shall check if the " +
                "TimeWindowIndex field passed in this command is NULL. If the TimeWindowIndex field is NULL, the " +
                "media device shall check if there is an entry in the BlockContentTimeWindow attribute which matches " +
                "with the TimePeriod and DayOfWeek fields passed in this command. * If Yes, then a response with " +
                "TimeWindowAlreadyExist error status shall be returned. * If No, then the media device shall assign " +
                "one unique index for this time window and add it into the BlockContentTimeWindow list attribute." +
                "\n" +
                "If the TimeWindowIndex field is not NULL and presents in the BlockContentTimeWindow attribute, the " +
                "media device shall replace the original time window with the new time window passed in this command.",

            xref: { document: "cluster", section: "6.13.8.16" }
        },

        Field({
            name: "TimeWindow", id: 0x0, type: "TimeWindowStruct", conformance: "M",
            details: "This field shall indicate a time window requested to set to the BlockContentTimeWindow attribute.",
            xref: { document: "cluster", section: "6.13.8.16.1" }
        })
    ),

    Command(
        {
            name: "RemoveBlockContentTimeWindow", id: 0x10, access: "M", conformance: "BTW",
            direction: "request", response: "status",

            details: "The purpose of this command is to remove the selected time windows from the BlockContentTimeWindow " +
                "attribute." +
                "\n" +
                "Upon receipt of the RemoveBlockContentTimeWindow command, the media device shall check if the time " +
                "window index passed in this command presents in the BlockContentTimeWindow attribute." +
                "\n" +
                "If one or more time window indexes passed in this command are not present in BlockContentTimeWindow " +
                "attribute, then a response with TimeWindowNotExist error status shall be returned.",

            xref: { document: "cluster", section: "6.13.8.17" }
        },

        Field(
            {
                name: "TimeWindowIndexes", id: 0x0, type: "list", conformance: "M",
                details: "This field shall specify a set of time window indexes indicating which time windows will be removed " +
                    "from the BlockContentTimeWindow attribute.",
                xref: { document: "cluster", section: "6.13.8.17.1" }
            },

            Field({ name: "entry", type: "uint16" })
        )
    ),

    Datatype(
        { name: "DayOfWeekBitmap", type: "map8", xref: { document: "cluster", section: "6.13.5.1" } },
        Field({ name: "Sunday", constraint: "0", description: "Sunday" }),
        Field({ name: "Monday", constraint: "1", description: "Monday" }),
        Field({ name: "Tuesday", constraint: "2", description: "Tuesday" }),
        Field({ name: "Wednesday", constraint: "3", description: "Wednesday" }),
        Field({ name: "Thursday", constraint: "4", description: "Thursday" }),
        Field({ name: "Friday", constraint: "5", description: "Friday" }),
        Field({ name: "Saturday", constraint: "6", description: "Saturday" })
    ),

    Datatype(
        { name: "RatingNameStruct", type: "struct", xref: { document: "cluster", section: "6.13.5.2" } },

        Field({
            name: "RatingName", id: 0x0, type: "string", conformance: "M", constraint: "max 8",
            details: "This field shall indicate the name of the rating level of the applied rating system. The applied " +
                "rating system is dependent upon the region or country where the Node has been provisioned, and may " +
                "vary from one country to another.",
            xref: { document: "cluster", section: "6.13.5.2.1" }
        }),

        Field({
            name: "RatingNameDesc", id: 0x1, type: "string", conformance: "O", constraint: "max 64",
            details: "This field shall specify a human readable (displayable) description for RatingName.",
            xref: { document: "cluster", section: "6.13.5.2.2" }
        })
    ),

    Datatype(
        { name: "BlockChannelStruct", type: "struct", xref: { document: "cluster", section: "6.13.5.3" } },

        Field({
            name: "BlockChannelIndex", id: 0x0, type: "uint16", conformance: "M", quality: "X",
            details: "This field shall indicate a unique index value for a blocked channel. This value may be used to " +
                "indicate one selected channel which will be removed from BlockChannelList attribute.",
            xref: { document: "cluster", section: "6.13.5.3.1" }
        }),

        Field({
            name: "MajorNumber", id: 0x1, type: "uint16", conformance: "M",
            details: "This field shall indicate the channel major number value (for example, using ATSC format). When the " +
                "channel number is expressed as a string, such as \"13.1\" or \"256\", the major number would be 13 or " +
                "256, respectively. This field is required but shall be set to 0 for channels such as over-the-top " +
                "channels that are not represented by a major or minor number.",
            xref: { document: "cluster", section: "6.13.5.3.2" }
        }),

        Field({
            name: "MinorNumber", id: 0x2, type: "uint16", conformance: "M",
            details: "This field shall indicate the channel minor number value (for example, using ATSC format). When the " +
                "channel number is expressed as a string, such as \"13.1\" or \"256\", the minor number would be 1 or 0, " +
                "respectively. This field is required but shall be set to 0 for channels such as over-the-top " +
                "channels that are not represented by a major or minor number.",
            xref: { document: "cluster", section: "6.13.5.3.3" }
        }),

        Field({
            name: "Identifier", id: 0x3, type: "string", conformance: "O",
            details: "This field shall indicate the unique identifier for a specific channel. This field is optional, but " +
                "SHOULD be provided when MajorNumber and MinorNumber are not available.",
            xref: { document: "cluster", section: "6.13.5.3.4" }
        })
    ),

    Datatype(
        { name: "AppInfoStruct", type: "struct", xref: { document: "cluster", section: "6.13.5.4" } },

        Field({
            name: "CatalogVendorId", id: 0x0, type: "uint16", conformance: "M",
            details: "This field shall indicate the CSA-issued vendor ID for the catalog. The DIAL registry shall use " +
                "value 0x0000." +
                "\n" +
                "Content App Platform providers will have their own catalog vendor ID (set to their own Vendor ID) " +
                "and will assign an ApplicationID to each Content App.",
            xref: { document: "cluster", section: "6.13.5.4.1" }
        }),

        Field({
            name: "ApplicationId", id: 0x1, type: "string", conformance: "M",
            details: "This field shall indicate the application identifier, expressed as a string, such as \"PruneVideo\" or " +
                "\"Company X\". This field shall be unique within a catalog.",
            xref: { document: "cluster", section: "6.13.5.4.2" }
        })
    ),

    Datatype(
        { name: "TimeWindowStruct", type: "struct", xref: { document: "cluster", section: "6.13.5.5" } },

        Field({
            name: "TimeWindowIndex", id: 0x0, type: "uint16", conformance: "M", quality: "X",
            details: "This field shall indicate a unique index of a specific time window. This value may be used to " +
                "indicate a selected time window which will be removed from the BlockContentTimeWindow attribute.",
            xref: { document: "cluster", section: "6.13.5.5.1" }
        }),

        Field({
            name: "DayOfWeek", id: 0x1, type: "DayOfWeekBitmap", conformance: "M", constraint: "desc",
            details: "This field shall indicate a day of week.",
            xref: { document: "cluster", section: "6.13.5.5.2" }
        }),

        Field(
            {
                name: "TimePeriod", id: 0x2, type: "list", conformance: "M", constraint: "desc",
                details: "This field shall indicate one or more discrete time periods.",
                xref: { document: "cluster", section: "6.13.5.5.3" }
            },
            Field({ name: "entry", type: "TimePeriodStruct" })
        )
    ),

    Datatype(
        { name: "TimePeriodStruct", type: "struct", xref: { document: "cluster", section: "6.13.5.6" } },
        Field({
            name: "StartHour", id: 0x0, type: "uint8", conformance: "M", constraint: "0 to 23",
            details: "This field shall indicate the starting hour.",
            xref: { document: "cluster", section: "6.13.5.6.1" }
        }),
        Field({
            name: "StartMinute", id: 0x1, type: "uint8", conformance: "M", constraint: "0 to 59",
            details: "This field shall indicate the starting minute.",
            xref: { document: "cluster", section: "6.13.5.6.2" }
        }),
        Field({
            name: "EndHour", id: 0x2, type: "uint8", conformance: "M", constraint: "0 to 23",
            details: "This field shall indicate the ending hour. EndHour shall be equal to or greater than StartHour",
            xref: { document: "cluster", section: "6.13.5.6.3" }
        }),

        Field({
            name: "EndMinute", id: 0x3, type: "uint8", conformance: "M", constraint: "0 to 59",
            details: "This field shall indicate the ending minute. If EndHour is equal to StartHour then EndMinute shall " +
                "be greater than StartMinute. If the EndHour is equal to 23 and the EndMinute is equal to 59, all " +
                "contents shall be blocked until 23:59:59.",
            xref: { document: "cluster", section: "6.13.5.6.4" }
        })
    ),

    Datatype(
        { name: "StatusCodeEnum", type: "enum8", xref: { document: "cluster", section: "6.13.6.1" } },
        Field({ name: "InvalidPinCode", id: 0x2, description: "Provided PIN Code does not match the current PIN code." }),
        Field({
            name: "InvalidRating", id: 0x3,
            description: "Provided Rating is out of scope of the corresponding Rating list."
        }),
        Field({ name: "InvalidChannel", id: 0x4, description: "Provided Channel(s) is invalid." }),
        Field({ name: "ChannelAlreadyExist", id: 0x5, description: "Provided Channel(s) already exists." }),
        Field({
            name: "ChannelNotExist", id: 0x6,
            description: "Provided Channel(s) doesn’t exist in BlockChannelList attribute."
        }),
        Field({ name: "UnidentifiableApplication", id: 0x7, description: "Provided Application(s) is not identified." }),
        Field({ name: "ApplicationAlreadyExist", id: 0x8, description: "Provided Application(s) already exists." }),
        Field({
            name: "ApplicationNotExist", id: 0x9,
            description: "Provided Application(s) doesn’t exist in BlockApplicationList attribute."
        }),
        Field({
            name: "TimeWindowAlreadyExist", id: 0xa,
            description: "Provided time Window already exists in BlockContentTimeWindow attribute."
        }),
        Field({
            name: "TimeWindowNotExist", id: 0xb,
            description: "Provided time window doesn’t exist in BlockContentTimeWindow attribute."
        })
    )
);

MatterDefinition.children.push(ContentControl);
