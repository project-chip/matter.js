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

export const ContentLauncher = Cluster(
    {
        name: "ContentLauncher", id: 0x50a, classification: "application", pics: "CONTENTLAUNCHER",

        details: "This cluster provides an interface for launching content on a Video Player device such as a " +
            "Streaming Media Player, Smart TV or Smart Screen." +
            "\n" +
            "This cluster would be supported on a Video Player device or devices that can playback content, such " +
            "as a Streaming Media Player, Smart TV or Smart Screen. This cluster supports playing back content " +
            "referenced by URL. It supports finding content by type and global identifier, and either playing the " +
            "content or displaying the search results." +
            "\n" +
            "The cluster server for Content Launcher is implemented by an endpoint that can launch content, such " +
            "as a Video Player, or an endpoint representing a Content App on such a device." +
            "\n" +
            "When this cluster is implemented for an Content App Endpoint (Endpoint with type “Content App” and " +
            "having an Application Basic cluster), the Video Player device shall launch the application when a " +
            "client invokes the LaunchContent or LaunchURL commands.",

        xref: { document: "cluster", section: "6.7" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "6.7.4" } },
        Field({
            name: "CS", constraint: "0", description: "ContentSearch",
            details: "Device supports content search (non-app specific)"
        }),
        Field({
            name: "UP", constraint: "1", description: "UrlPlayback",
            details: "Device supports basic URL-based file playback"
        }),
        Field({
            name: "AS", constraint: "2", description: "AdvancedSeek",
            details: "Enables clients to implement more advanced media seeking behavior in their user interface, such as " +
                "for example a \"seek bar\"."
        }),
        Field({ name: "TT", constraint: "3", description: "TextTracks", details: "Device or app supports Text Tracks." }),
        Field({ name: "AT", constraint: "4", description: "AudioTracks", details: "Device or app supports Audio Tracks." })
    ),

    Attribute(
        {
            name: "AcceptHeader", id: 0x0, type: "list", access: "R V", conformance: "UP",
            constraint: "max 100[max 1024]", default: [], quality: "N",
            details: "This attribute shall provide a list of content types supported by the Video Player or Content App" +
                "\n" +
                "in the form of entries in the HTTP \"Accept\" request header.",
            xref: { document: "cluster", section: "6.7.6.1" }
        },

        Field({ name: "entry", type: "string" })
    ),

    Attribute({
        name: "SupportedStreamingProtocols", id: 0x1, type: "SupportedProtocolsBitmap", access: "R V",
        conformance: "UP", default: 0, quality: "N",
        details: "This attribute shall provide information about supported streaming protocols.",
        xref: { document: "cluster", section: "6.7.6.2" }
    }),

    Command(
        {
            name: "LaunchContent", id: 0x0, access: "O", conformance: "CS", direction: "request",
            response: "LauncherResponse",
            details: "Upon receipt, this shall launch the specified content with optional search criteria. This command " +
                "returns a Launch Response.",
            xref: { document: "cluster", section: "6.7.7.1" }
        },

        Field({
            name: "Search", id: 0x0, type: "ContentSearchStruct", conformance: "M", constraint: "desc",
            details: "This field shall indicate the content to launch.",
            xref: { document: "cluster", section: "6.7.7.1.1" }
        }),

        Field({
            name: "AutoPlay", id: 0x1, type: "bool", conformance: "M", constraint: "desc",
            details: "This field shall indicate whether to automatically start playing content, where:" +
                "\n" +
                "  • TRUE means best match should start playing automatically." +
                "\n" +
                "  • FALSE means matches should be displayed on screen for user selection.",
            xref: { document: "cluster", section: "6.7.7.1.2" }
        }),

        Field({
            name: "Data", id: 0x2, type: "string", conformance: "O",
            details: "This field, if present, shall indicate app-specific data.",
            xref: { document: "cluster", section: "6.7.7.1.3" }
        }),

        Field({
            name: "PlaybackPreferences", id: 0x3, type: "PlaybackPreferencesStruct", conformance: "O",

            details: "This field, if present, shall indicate the user’s preferred Text/AudioTracks and playbackPosition " +
                "for the media, sent from the client to the server. If the server does not find an available track " +
                "for the title being played exactly matching a Track requested here, in the list of available tracks, " +
                "it may default to picking another track that closely matches the requested track. Alternately, it " +
                "may go with user preferences set on the server side (it will use this option if these " +
                "PlaybackPreferences are not specified). In the case of text tracks, that may mean that the subtitle " +
                "text is not displayed at all. In the cases where the preferred Text/AudioTracks are not available, " +
                "the server shall return the TextTrackNotAvailable and/or AudioTrackNotAvailable Status(es) in the " +
                "LauncherResponse.",

            xref: { document: "cluster", section: "6.7.7.1.4" }
        }),

        Field({
            name: "UseCurrentContext", id: 0x4, type: "bool", conformance: "O", constraint: "desc",
            default: true,

            details: "This field, if present, shall indicate whether to consider the context of current ongoing activity " +
                "on the receiver to fulfill the request. For example if the request only includes data in " +
                "ContentSearch that specifies an Episode number, and UseCurrentContent is set to TRUE, if there is a " +
                "TV series on going, the request refers to the specific episode of the ongoing season of the TV " +
                "series. TRUE means current activity context may be considered FALSE means current activity context " +
                "shall NOT be considered",

            xref: { document: "cluster", section: "6.7.7.1.5" }
        })
    ),

    Command(
        {
            name: "LaunchUrl", id: 0x1, access: "O", conformance: "UP", direction: "request",
            response: "LauncherResponse",

            details: "Upon receipt, this shall launch content from the specified URL." +
                "\n" +
                "The content types supported include those identified in the AcceptHeader and " +
                "SupportedStreamingProtocols attributes." +
                "\n" +
                "A check shall be made to ensure the URL is secure (uses HTTPS)." +
                "\n" +
                "When playing a video stream in response to this command, an indication (ex. visual) of the identity " +
                "of the origin node of the video stream shall be provided. This could be in the form of a friendly " +
                "name label which uniquely identifies the node to the user. This friendly name label is typically " +
                "assigned by the Matter Admin (ex. TV) at the time of commissioning and, when it’s a device, is often " +
                "editable by the user. It might be a combination of a company name and friendly name, for example, " +
                "”Acme” or “Acme Streaming Service on Alice’s Phone”." +
                "\n" +
                "This command returns a Launch Response.",

            xref: { document: "cluster", section: "6.7.7.2" }
        },

        Field({
            name: "ContentUrl", id: 0x0, type: "string", conformance: "M", constraint: "any",
            details: "This field shall indicate the URL of content to launch. The syntax of this field shall follow the " +
                "syntax as specified in RFC 1738 and shall use the https scheme.",
            xref: { document: "cluster", section: "6.7.7.2.1" }
        }),

        Field({
            name: "DisplayString", id: 0x1, type: "string", conformance: "O", constraint: "any",
            details: "This field, if present, shall provide a string that may be used to describe the content being " +
                "accessed at the given URL.",
            xref: { document: "cluster", section: "6.7.7.2.2" }
        }),

        Field({
            name: "BrandingInformation", id: 0x2, type: "BrandingInformationStruct", conformance: "O",
            constraint: "any",
            details: "This field, if present, shall indicate the branding information that may be displayed when playing " +
                "back the given content.",
            xref: { document: "cluster", section: "6.7.7.2.3" }
        }),

        Field({
            name: "PlaybackPreferences", id: 0x3, type: "PlaybackPreferencesStruct", conformance: "O",
            constraint: "any",

            details: "This field, if present, shall indicate the user’s preferred Text/AudioTracks and playbackPosition " +
                "for the media, sent from the client to the server. If the server does not find an available track " +
                "for the title being played exactly matching a Track requested here, in the list of available tracks, " +
                "it may default to picking another track that closely matches the requested track. Alternately, it " +
                "may go with user preferences set on the server side (it will use this option if these " +
                "PlaybackPreferences are not specified). In the case of text tracks, that may mean that the subtitle " +
                "text is not displayed at all. In the cases where the preferred Text/AudioTracks are not available, " +
                "the server shall return the TextTrackNotAvailable and/or AudioTrackNotAvailable Status(es) in the " +
                "LauncherResponse.",

            xref: { document: "cluster", section: "6.7.7.2.4" }
        })
    ),

    Command(
        {
            name: "LauncherResponse", id: 0x2, conformance: "CS | UP", direction: "response",
            details: "This command shall be generated in response to LaunchContent and LaunchURL commands.",
            xref: { document: "cluster", section: "6.7.7.3" }
        },
        Field({
            name: "Status", id: 0x0, type: "StatusEnum", conformance: "M",
            details: "This field shall indicate the status of the command which resulted in this response.",
            xref: { document: "cluster", section: "6.7.7.3.1" }
        }),
        Field({
            name: "Data", id: 0x1, type: "string", conformance: "O",
            details: "This field shall indicate Optional app-specific data.",
            xref: { document: "cluster", section: "6.7.7.3.2" }
        })
    ),

    Datatype(
        { name: "SupportedProtocolsBitmap", type: "map32", xref: { document: "cluster", section: "6.7.5.1" } },
        Field({ name: "Dash", constraint: "0", description: "Device supports Dynamic Adaptive Streaming over HTTP (DASH)" }),
        Field({ name: "Hls", constraint: "1", description: "Device supports HTTP Live Streaming (HLS)" })
    ),

    Datatype(
        { name: "StatusEnum", type: "enum8", xref: { document: "cluster", section: "6.7.5.2" } },
        Field({ name: "Success", id: 0x0, conformance: "M", description: "Command succeeded" }),
        Field({
            name: "UrlNotAvailable", id: 0x1, conformance: "M",
            description: "Requested URL could not be reached by device."
        }),
        Field({ name: "AuthFailed", id: 0x2, conformance: "M", description: "Requested URL returned 401 error code." }),
        Field({
            name: "TextTrackNotAvailable", id: 0x3, conformance: "TT",
            description: "Requested Text Track (in PlaybackPreferences) not available"
        }),
        Field({
            name: "AudioTrackNotAvailable", id: 0x4, conformance: "AT",
            description: "Requested Audio Track (in PlaybackPreferences) not available"
        })
    ),

    Datatype(
        { name: "ParameterEnum", type: "enum8", xref: { document: "cluster", section: "6.7.5.3" } },
        Field({
            name: "Actor", id: 0x0, conformance: "M",
            description: "Actor represents an actor credited in video media content; for example, “Gaby Hoffman”"
        }),
        Field({
            name: "Channel", id: 0x1, conformance: "M",
            description: "Channel represents the identifying data for a television channel; for example, \"PBS\""
        }),
        Field({
            name: "Character", id: 0x2, conformance: "M",
            description: "A character represented in video media content; for example, “Snow White”"
        }),
        Field({
            name: "Director", id: 0x3, conformance: "M",
            description: "A director of the video media content; for example, “Spike Lee”"
        }),
        Field({
            name: "Event", id: 0x4, conformance: "M",
            description: "An event is a reference to a type of event; examples would include sports, music, or other types of events. For example, searching for \"Football games\" would search for a 'game' event entity and a 'football' sport entity."
        }),
        Field({
            name: "Franchise", id: 0x5, conformance: "M",
            description: "A franchise is a video entity which can represent a number of video entities, like movies or TV shows. For example, take the fictional franchise \"Intergalactic Wars\" which represents a collection of movie trilogies, as well as animated and live action TV shows. This entity type was introduced to account for requests by customers such as \"Find Intergalactic Wars movies\", which would search for all 'Intergalactic Wars' programs of the MOVIE MediaType, rather than attempting to match to a single title."
        }),
        Field({
            name: "Genre", id: 0x6, conformance: "M",
            description: "Genre represents the genre of video media content such as action, drama or comedy."
        }),
        Field({
            name: "League", id: 0x7, conformance: "M",
            description: "League represents the categorical information for a sporting league; for example, \"NCAA\""
        }),
        Field({
            name: "Popularity", id: 0x8, conformance: "M",
            description: "Popularity indicates whether the user asks for popular content."
        }),
        Field({
            name: "Provider", id: 0x9, conformance: "M",
            description: "The provider (MSP) the user wants this media to be played on; for example, \"Netflix\"."
        }),
        Field({
            name: "Sport", id: 0xa, conformance: "M",
            description: "Sport represents the categorical information of a sport; for example, football"
        }),
        Field({
            name: "SportsTeam", id: 0xb, conformance: "M",
            description: "SportsTeam represents the categorical information of a professional sports team; for example, \"University of Washington Huskies\""
        }),
        Field({
            name: "Type", id: 0xc, conformance: "M",
            description: "The type of content requested. Supported types are \"Movie\", \"MovieSeries\", \"TVSeries\", \"TVSeason\", \"TVEpisode\", \"Trailer\", \"SportsEvent\", \"LiveEvent\", and \"Video\""
        }),
        Field({
            name: "Video", id: 0xd, conformance: "M",
            description: "Video represents the identifying data for a specific piece of video content; for example, \"Manchester by the Sea\"."
        }),
        Field({
            name: "Season", id: 0xe, conformance: "O",
            description: "Season represents the specific season number within a TV series."
        }),
        Field({
            name: "Episode", id: 0xf, conformance: "O",
            description: "Episode represents a specific episode number within a Season in a TV series."
        }),
        Field({
            name: "Any", id: 0x10, conformance: "O",
            description: "Represents a search text input across many parameter types or even outside of the defined param types."
        })
    ),

    Datatype(
        { name: "MetricTypeEnum", type: "enum8", xref: { document: "cluster", section: "6.7.5.4" } },
        Field({
            name: "Pixels", id: 0x0, conformance: "M", description: "Dimensions defined in a number of Pixels",
            details: "This value is used for dimensions defined in a number of Pixels.",
            xref: { document: "cluster", section: "6.7.5.4.1" }
        }),

        Field({
            name: "Percentage", id: 0x1, conformance: "M", description: "Dimensions defined as a percentage",
            details: "This value is for dimensions defined as a percentage of the overall display dimensions. For example, " +
                "if using a Percentage Metric type for a Width measurement of 50.0, against a display width of 1920 " +
                "pixels, then the resulting value used would be 960 pixels (50.0% of 1920) for that dimension. " +
                "Whenever a measurement uses this Metric type, the resulting values shall be rounded (\"floored\") " +
                "towards 0 if the measurement requires an integer final value.",
            xref: { document: "cluster", section: "6.7.5.4.2" }
        })
    ),

    Datatype(
        {
            name: "AdditionalInfoStruct", type: "struct",
            details: "This object defines additional name=value pairs that can be used for identifying content.",
            xref: { document: "cluster", section: "6.7.5.5" }
        },
        Field({
            name: "Name", id: 0x0, type: "string", conformance: "M", constraint: "max 256",
            details: "This field shall indicate the name of external id, ex. \"musicbrainz\".",
            xref: { document: "cluster", section: "6.7.5.5.1" }
        }),
        Field({
            name: "Value", id: 0x1, type: "string", conformance: "M", constraint: "max 8192",
            details: "This field shall indicate the value for external id, ex. \"ST0000000666661\".",
            xref: { document: "cluster", section: "6.7.5.5.2" }
        })
    ),

    Datatype(
        {
            name: "ParameterStruct", type: "struct",
            details: "This object defines inputs to a search for content for display or playback.",
            xref: { document: "cluster", section: "6.7.5.6" }
        },
        Field({
            name: "Type", id: 0x0, type: "ParameterEnum", conformance: "M",
            details: "This field shall indicate the entity type.",
            xref: { document: "cluster", section: "6.7.5.6.1" }
        }),
        Field({
            name: "Value", id: 0x1, type: "string", conformance: "M", constraint: "max 1024",
            details: "This field shall indicate the entity value, which is a search string, ex. “Manchester by the Sea”.",
            xref: { document: "cluster", section: "6.7.5.6.2" }
        }),

        Field(
            {
                name: "ExternalIdList", id: 0x2, type: "list", conformance: "O", default: [],
                details: "This field shall indicate the list of additional external content identifiers.",
                xref: { document: "cluster", section: "6.7.5.6.3" }
            },
            Field({ name: "entry", type: "AdditionalInfoStruct" })
        )
    ),

    Datatype(
        {
            name: "ContentSearchStruct", type: "struct",
            details: "This object defines inputs to a search for content for display or playback.",
            xref: { document: "cluster", section: "6.7.5.7" }
        },

        Field(
            {
                name: "ParameterList", id: 0x0, type: "list", conformance: "M",
                details: "This field shall indicate the list of parameters comprising the search. If multiple parameters are " +
                    "provided, the search parameters shall be joined with 'AND' logic. e.g. action movies with Tom Cruise " +
                    "will be represented as [{Actor: 'Tom Cruise'}, {Type: 'Movie'}, {Genre: 'Action'}]",
                xref: { document: "cluster", section: "6.7.5.7.1" }
            },

            Field({ name: "entry", type: "ParameterStruct" })
        )
    ),

    Datatype(
        {
            name: "DimensionStruct", type: "struct",
            details: "This object defines dimension which can be used for defining Size of background images.",
            xref: { document: "cluster", section: "6.7.5.8" }
        },
        Field({
            name: "Width", id: 0x0, type: "double", conformance: "M",
            details: "This field shall indicate the width using the metric defined in Metric",
            xref: { document: "cluster", section: "6.7.5.8.1" }
        }),
        Field({
            name: "Height", id: 0x1, type: "double", conformance: "M",
            details: "This field shall indicate the height using the metric defined in Metric",
            xref: { document: "cluster", section: "6.7.5.8.2" }
        }),
        Field({
            name: "Metric", id: 0x2, type: "MetricTypeEnum", conformance: "M",
            details: "This field shall indicate metric used for defining Height/Width.",
            xref: { document: "cluster", section: "6.7.5.8.3" }
        })
    ),

    Datatype(
        {
            name: "StyleInformationStruct", type: "struct",
            details: "This object defines style information which can be used by content providers to change the Media " +
                "Player’s style related properties.",
            xref: { document: "cluster", section: "6.7.5.9" }
        },

        Field({
            name: "ImageUrl", id: 0x0, type: "string", conformance: "O", constraint: "max 8192",
            details: "This field shall indicate the URL of image used for Styling different Video Player sections like " +
                "Logo, Watermark etc. The syntax of this field shall follow the syntax as specified in RFC 1738 and " +
                "shall use the https scheme.",
            xref: { document: "cluster", section: "6.7.5.9.1" }
        }),

        Field(
            {
                name: "Color", id: 0x1, type: "string", conformance: "O", constraint: "7, 9",

                details: "This field shall indicate the color, in RGB or RGBA, used for styling different Video Player " +
                    "sections like Logo, Watermark, etc. The value shall conform to the 6-digit or 8-digit format defined " +
                    "for CSS sRGB hexadecimal color notation [https://www.w3.org/TR/css-color-4/#hex-notation]. Examples:" +
                    "\n" +
                    "  • #76DE19 for R=0x76, G=0xDE, B=0x19, A absent" +
                    "\n" +
                    "  • #76DE1980 for R=0x76, G=0xDE, B=0x19, A=0x80",

                xref: { document: "cluster", section: "6.7.5.9.2" }
            }
        ),

        Field({
            name: "Size", id: 0x2, type: "DimensionStruct", conformance: "O",
            details: "This field shall indicate the size of the image used for Styling different Video Player sections " +
                "like" +
                "\n" +
                "Logo, Watermark etc.",
            xref: { document: "cluster", section: "6.7.5.9.3" }
        })
    ),

    Datatype(
        {
            name: "BrandingInformationStruct", type: "struct",
            details: "This object defines Branding Information which can be provided by the client in order to customize " +
                "the skin of the Video Player during playback.",
            xref: { document: "cluster", section: "6.7.5.10" }
        },

        Field({
            name: "ProviderName", id: 0x0, type: "string", conformance: "M", constraint: "max 256",
            details: "This field shall indicate name of the provider for the given content.",
            xref: { document: "cluster", section: "6.7.5.10.1" }
        }),

        Field({
            name: "Background", id: 0x1, type: "StyleInformationStruct", conformance: "O",
            details: "This field shall indicate background of the Video Player while content launch request is being " +
                "processed by it. This background information may also be used by the Video Player when it is in idle " +
                "state.",
            xref: { document: "cluster", section: "6.7.5.10.2" }
        }),

        Field({
            name: "Logo", id: 0x2, type: "StyleInformationStruct", conformance: "O",
            details: "This field shall indicate the logo shown when the Video Player is launching. This is also used when " +
                "the Video Player is in the idle state and Splash field is not available.",
            xref: { document: "cluster", section: "6.7.5.10.3" }
        }),

        Field({
            name: "ProgressBar", id: 0x3, type: "StyleInformationStruct", conformance: "O",
            details: "This field shall indicate the style of progress bar for media playback.",
            xref: { document: "cluster", section: "6.7.5.10.4" }
        }),

        Field({
            name: "Splash", id: 0x4, type: "StyleInformationStruct", conformance: "O",
            details: "This field shall indicate the screen shown when the Video Player is in an idle state. If this " +
                "property is not populated, the Video Player shall default to logo or the provider name.",
            xref: { document: "cluster", section: "6.7.5.10.5" }
        }),

        Field({
            name: "WaterMark", id: 0x5, type: "StyleInformationStruct", conformance: "O",
            details: "This field shall indicate watermark shown when the media is playing.",
            xref: { document: "cluster", section: "6.7.5.10.6" }
        })
    ),

    Datatype(
        {
            name: "PlaybackPreferencesStruct", type: "struct",
            details: "PlaybackPreferencesStruct defines the preferences sent by the client to the receiver in the " +
                "ContentLauncher LaunchURL or LaunchContent commands.",
            xref: { document: "cluster", section: "6.7.5.11" }
        },

        Field({
            name: "PlaybackPosition", id: 0x0, type: "uint64", conformance: "AS", quality: "X",

            details: "This field shall indicate the preferred position (in milliseconds) in the media to launch playback " +
                "from. In case the position falls in the middle of a frame, the server shall set the position to the " +
                "beginning of that frame and set the SampledPosition attribute on the MediaPlayback cluster " +
                "accordingly. A value of null shall indicate that playback position is not applicable for the current " +
                "state of the media playback. (For example : Live media with no known duration and where seek is not " +
                "supported).",

            xref: { document: "cluster", section: "6.7.5.11.1" }
        }),

        Field({
            name: "TextTrack", id: 0x1, type: "TrackPreferenceStruct", conformance: "TT", quality: "X",
            details: "This field shall indicate the user’s preferred Text Track. A value of null shall indicate that the " +
                "user did not specify a preferred Text Track on the client. In such a case, the decision to display " +
                "and select a Text Track is up to the server.",
            xref: { document: "cluster", section: "6.7.5.11.2" }
        }),

        Field(
            {
                name: "AudioTracks", id: 0x2, type: "list", conformance: "AT", quality: "X",
                details: "This field shall indicate the list of the user’s preferred Audio Tracks. If the list contains " +
                    "multiple values, each AudioTrack must also specify a unique audioOutputIndex to play the track on. A " +
                    "value of null shall indicate that the user did not specify a preferred Audio Track on the client. In " +
                    "such a case, the decision to play and select an Audio Track is up to the server.",
                xref: { document: "cluster", section: "6.7.5.11.3" }
            },

            Field({ name: "entry", type: "TrackPreferenceStruct" })
        )
    ),

    Datatype(
        {
            name: "TrackPreferenceStruct", type: "struct",
            details: "This structure defines Text/Audio Track preferences.",
            xref: { document: "cluster", section: "6.7.5.12" }
        },

        Field({
            name: "LanguageCode", id: 0x0, type: "string", conformance: "M", constraint: "max 32",
            details: "This field shall contain one of the standard Tags for Identifying Languages RFC 5646, which " +
                "identifies the primary language used in the Track.",
            xref: { document: "cluster", section: "6.7.5.12.1" }
        }),

        Field(
            {
                name: "Characteristics", id: 0x1, type: "list", conformance: "O", default: null, quality: "X",
                details: "This field shall contain a list of enumerated CharacteristicEnum values that indicate a purpose, " +
                    "trait or feature associated with the Track. A value of null shall indicate that there are no " +
                    "Characteristics corresponding to the Track.",
                xref: { document: "cluster", section: "6.7.5.12.2" }
            },

            Field({ name: "entry", type: "MediaPlayback.CharacteristicEnum" })
        ),

        Field({
            name: "AudioOutputIndex", id: 0x2, type: "uint8", conformance: "AT", quality: "X",

            details: "This field if present shall indicate the index of the OutputInfoStruct from the OutputList attribute " +
                "(from the AudioOutput cluster) and indicates which audio output the Audio Track should be played on." +
                "\n" +
                "This field shall NOT be present if the track is not an audio track." +
                "\n" +
                "If the track is an audio track, this field MUST be present. A value of null shall indicate that the " +
                "server can choose the audio output(s) to play the Audio Track on.",

            xref: { document: "cluster", section: "6.7.5.12.3" }
        })
    )
);

MatterDefinition.children.push(ContentLauncher);
