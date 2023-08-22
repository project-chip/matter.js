/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "ContentLauncher", id: 0x50a, classification: "application",
    description: "Content Launcher",
    details: "This cluster provides an interface for launching content on a Video Player device such as a " +
        "Streaming Media Player, Smart TV or Smart Screen.",
    xref: { document: "cluster", section: "6.7" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 },

        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "cluster", section: "6.7.2" },

            children: [
                {
                    tag: "datatype", name: "CS", constraint: "0", description: "ContentSearch",
                    details: "Device supports content search (non-app specific)"
                },
                {
                    tag: "datatype", name: "UP", constraint: "1", description: "UrlPlayback",
                    details: "Device supports basic URL-based file playback"
                }
            ]
        },

        {
            tag: "attribute", name: "AcceptHeader", id: 0x0, type: "list", access: "R V", conformance: "UP",
            constraint: "max 100[max 1024]", default: [], quality: "N",
            details: "This list provides list of content types supported by the Video Player or Content App in the form " +
                "of entries in the HTTP \"Accept\" request header.",
            xref: { document: "cluster", section: "6.7.3.1" },
            children: [{ tag: "datatype", name: "entry", type: "string" }]
        },

        {
            tag: "attribute", name: "SupportedStreamingProtocols", id: 0x1, type: "map32", access: "R V",
            conformance: "UP", default: 0, quality: "N",
            xref: { document: "cluster", section: "6.7.3.2.1" },

            children: [
                {
                    tag: "datatype", name: "Dash", constraint: "0",
                    description: "Device supports Dynamic Adaptive Streaming over HTTP (DASH)"
                },
                {
                    tag: "datatype", name: "Hls", constraint: "1",
                    description: "Device supports HTTP Live Streaming (HLS)"
                }
            ]
        },

        {
            tag: "command", name: "LaunchContent", id: 0x0, access: "O", conformance: "CS",
            direction: "request", response: "LauncherResponse",
            details: "Upon receipt, this shall launch the specified content with optional search criteria. This command " +
                "returns a Launch Response.",
            xref: { document: "cluster", section: "6.7.4.1" },

            children: [
                {
                    tag: "datatype", name: "Search", id: 0x0, type: "ContentSearchStruct", conformance: "M",
                    constraint: "desc",
                    details: "This shall indicate the content to launch.",
                    xref: { document: "cluster", section: "6.7.4.1.1" }
                },

                {
                    tag: "datatype", name: "AutoPlay", id: 0x1, type: "bool", conformance: "M", constraint: "desc",
                    details: "This shall indicate whether to automatically start playing content, where: * TRUE means best match " +
                        "should start playing automatically. * FALSE means matches should be displayed on screen for user " +
                        "selection.",
                    xref: { document: "cluster", section: "6.7.4.1.2" }
                },

                {
                    tag: "datatype", name: "Data", id: 0x2, type: "octstr", conformance: "O",
                    details: "This shall indicate Optional app-specific data.",
                    xref: { document: "cluster", section: "6.7.4.1.3" }
                }
            ]
        },

        {
            tag: "command", name: "LaunchUrl", id: 0x1, access: "O", conformance: "UP", direction: "request",
            response: "LauncherResponse",

            details: "Upon receipt, this shall launch content from the specified URL." +
                "\n" +
                "The content types supported include those identified in the AcceptHeader and " +
                "SupportedStreamingProtocols attributes." +
                "\n" +
                "A check shall be made to ensure the URL is secure (uses HTTPS). This command returns a Launch " +
                "Response.",

            xref: { document: "cluster", section: "6.7.4.2" },

            children: [
                {
                    tag: "datatype", name: "ContentUrl", id: 0x0, type: "string", conformance: "M",
                    details: "This shall indicate the URL of content to launch.",
                    xref: { document: "cluster", section: "6.7.4.2.1" }
                },

                {
                    tag: "datatype", name: "DisplayString", id: 0x1, type: "string", conformance: "O",
                    details: "This field, if present, shall provide a string that may be used to describe the content being " +
                        "accessed at the given URL.",
                    xref: { document: "cluster", section: "6.7.4.2.2" }
                },

                {
                    tag: "datatype", name: "BrandingInformation", id: 0x2, type: "BrandingInformationStruct",
                    conformance: "O",
                    details: "This field, if present, shall indicate the branding information that may be displayed when playing " +
                        "back the given content.",
                    xref: { document: "cluster", section: "6.7.4.2.3" }
                }
            ]
        },

        {
            tag: "command", name: "LauncherResponse", id: 0x2, conformance: "CS | UP", direction: "response",
            details: "This command shall be generated in response to LaunchContent and LaunchURL commands." +
                "\n" +
                "WARNING TODO: Data in table above needs a max size",
            xref: { document: "cluster", section: "6.7.4.3" },

            children: [
                {
                    tag: "datatype", name: "Status", id: 0x0, type: "StatusEnum", conformance: "M",
                    details: "This shall indicate the status of the command which resulted in this response.",
                    xref: { document: "cluster", section: "6.7.4.3.1" }
                },
                {
                    tag: "datatype", name: "Data", id: 0x1, type: "octstr", conformance: "O",
                    details: "This shall indicate Optional app-specific data.",
                    xref: { document: "cluster", section: "6.7.4.3.2" }
                }
            ]
        },

        {
            tag: "datatype", name: "StatusEnum", type: "enum8", conformance: "M",
            xref: { document: "cluster", section: "6.7.5.1" },

            children: [
                { tag: "datatype", name: "Success", id: 0x0, conformance: "M", description: "Command succeeded" },
                {
                    tag: "datatype", name: "UrlNotAvailable", id: 0x1, conformance: "M",
                    description: "Requested URL could not be reached by device."
                },
                {
                    tag: "datatype", name: "AuthFailed", id: 0x2, conformance: "M",
                    description: "Requested URL returned 401 error code."
                }
            ]
        },

        {
            tag: "datatype", name: "ContentSearchStruct", type: "struct", conformance: "M",
            details: "This object defines inputs to a search for content for display or playback.",
            xref: { document: "cluster", section: "6.7.5.2" },

            children: [{
                tag: "datatype", name: "ParameterList", id: 0x0, type: "list", conformance: "M",
                details: "This shall indicate the list of parameters comprising the search. If multiple parameters are " +
                    "provided, the search parameters shall be joined with 'AND' logic. e.g. action movies with Tom " +
                    "Cruise will be represented as [{Actor: 'Tom Cruise'}, {Type: 'Movie'}, {Genre: 'Action'}]",
                xref: { document: "cluster", section: "6.7.5.2.1" },
                children: [{ tag: "datatype", name: "entry", type: "ParameterStruct" }]
            }]
        },

        {
            tag: "datatype", name: "ParameterStruct", type: "struct", conformance: "M",
            details: "This object defines inputs to a search for content for display or playback.",
            xref: { document: "cluster", section: "6.7.5.3" },

            children: [
                {
                    tag: "datatype", name: "Type", id: 0x0, type: "ParameterEnum", conformance: "M",
                    details: "This shall indicate the entity type.",
                    xref: { document: "cluster", section: "6.7.5.3.1" }
                },
                {
                    tag: "datatype", name: "Value", id: 0x1, type: "string", conformance: "M", constraint: "max 1024",
                    details: "This shall indicate the entity value, which is a search string, ex. “Manchester by the Sea”.",
                    xref: { document: "cluster", section: "6.7.5.3.2" }
                },

                {
                    tag: "datatype", name: "ExternalIdList", id: 0x2, type: "list", conformance: "O", default: [],
                    details: "This shall indicate the list of additional external content identifiers.",
                    xref: { document: "cluster", section: "6.7.5.3.3" },
                    children: [{ tag: "datatype", name: "entry", type: "AdditionalInfoStruct" }]
                }
            ]
        },

        {
            tag: "datatype", name: "ParameterEnum", type: "enum8", conformance: "M",
            xref: { document: "cluster", section: "6.7.5.4" },

            children: [
                {
                    tag: "datatype", name: "Actor", id: 0x0, conformance: "M",
                    description: "Actor represents an actor credited in video media content; for example, “Gaby sHoffman”"
                },
                {
                    tag: "datatype", name: "Channel", id: 0x1, conformance: "M",
                    description: "Channel represents the identifying data for a television channel; for example, \"PBS\""
                },
                {
                    tag: "datatype", name: "Character", id: 0x2, conformance: "M",
                    description: "A character represented in video media content; for example, “Snow White”"
                },
                {
                    tag: "datatype", name: "Director", id: 0x3, conformance: "M",
                    description: "A director of the video media content; for example, “Spike Lee”"
                },
                {
                    tag: "datatype", name: "Event", id: 0x4, conformance: "M",
                    description: "An event is a reference to a type of event; examples would include sports, music, or other types of events. For example, searching for \"Football games\" would search for a 'game' event entity and a 'football' sport entity."
                },
                {
                    tag: "datatype", name: "Franchise", id: 0x5, conformance: "M",
                    description: "A franchise is a video entity which can represent a number of video entities, like movies or TV shows. For example, take the fictional franchise \"Intergalactic Wars\" which represents a collection of movie trilogies, as well as animated and live action TV shows. This entity type was introduced to account for requests by customers such as \"Find Intergalactic Wars movies\", which would search for all 'Intergalactic Wars' programs of the MOVIE MediaType, rather than attempting to match to a single title."
                },
                {
                    tag: "datatype", name: "Genre", id: 0x6, conformance: "M",
                    description: "Genre represents the genre of video media content such as action, drama or comedy."
                },
                {
                    tag: "datatype", name: "League", id: 0x7, conformance: "M",
                    description: "League represents the categorical information for a sporting league; for example, \"NCAA\""
                },
                {
                    tag: "datatype", name: "Popularity", id: 0x8, conformance: "M",
                    description: "Popularity indicates whether the user asks for popular content."
                },
                {
                    tag: "datatype", name: "Provider", id: 0x9, conformance: "M",
                    description: "The provider (MSP) the user wants this media to be played on; for example, \"Netflix\"."
                },
                {
                    tag: "datatype", name: "Sport", id: 0xa, conformance: "M",
                    description: "Sport represents the categorical information of a sport; for example, football"
                },
                {
                    tag: "datatype", name: "SportsTeam", id: 0xb, conformance: "M",
                    description: "SportsTeam represents the categorical information of a professional sports team; for example, \"University of Washington Huskies\""
                },
                {
                    tag: "datatype", name: "Type", id: 0xc, conformance: "M",
                    description: "The type of content requested. Supported types are \"Movie\", \"MovieSeries\", \"TVSeries\", \"TVSeason\", \"TVEpisode\", \"SportsEvent\", and \"Video\""
                },
                {
                    tag: "datatype", name: "Video", id: 0xd, conformance: "M",
                    description: "Video represents the identifying data for a specific piece of video content; for example, \"Manchester by the Sea\"."
                }
            ]
        },

        {
            tag: "datatype", name: "AdditionalInfoStruct", type: "struct", conformance: "M",
            details: "This object defines additional name=value pairs that can be used for identifying content.",
            xref: { document: "cluster", section: "6.7.5.5" },

            children: [
                {
                    tag: "datatype", name: "Name", id: 0x0, type: "string", conformance: "M", constraint: "max 256",
                    details: "This shall indicate the name of external id, ex. \"musicbrainz\".",
                    xref: { document: "cluster", section: "6.7.5.5.1" }
                },
                {
                    tag: "datatype", name: "Value", id: 0x1, type: "string", conformance: "M", constraint: "max 8192",
                    details: "This shall indicate the value for external id, ex. \"ST0000000666661\".",
                    xref: { document: "cluster", section: "6.7.5.5.2" }
                }
            ]
        },

        {
            tag: "datatype", name: "BrandingInformationStruct", type: "struct", conformance: "M",
            details: "This object defines Branding Information which can be provided by the client in order to customize " +
                "the skin of the Video Player during playback.",
            xref: { document: "cluster", section: "6.7.5.6" },

            children: [
                {
                    tag: "datatype", name: "ProviderName", id: 0x0, type: "string", conformance: "M",
                    constraint: "max 256",
                    details: "This shall indicate name of of the provider for the given content.",
                    xref: { document: "cluster", section: "6.7.5.6.1" }
                },

                {
                    tag: "datatype", name: "Background", id: 0x1, type: "StyleInformationStruct", conformance: "O",
                    details: "This shall indicate background of the Video Player while content launch request is being processed " +
                        "by it. This background information may also be used by the Video Player when it is in idle state.",
                    xref: { document: "cluster", section: "6.7.5.6.2" }
                },

                {
                    tag: "datatype", name: "Logo", id: 0x2, type: "StyleInformationStruct", conformance: "O",
                    details: "This shall indicate the logo shown when the Video Player is launching. This is also used when the " +
                        "Video Player is in the idle state and Splash field is not available.",
                    xref: { document: "cluster", section: "6.7.5.6.3" }
                },

                {
                    tag: "datatype", name: "ProgressBar", id: 0x3, type: "StyleInformationStruct", conformance: "O",
                    details: "This shall indicate the style of progress bar for media playback.",
                    xref: { document: "cluster", section: "6.7.5.6.4" }
                },

                {
                    tag: "datatype", name: "Splash", id: 0x4, type: "StyleInformationStruct", conformance: "O",
                    details: "This shall indicate the screen shown when the Video Player is in an idle state. If this property is " +
                        "not populated, the Video Player shall default to logo or the provider name.",
                    xref: { document: "cluster", section: "6.7.5.6.5" }
                },

                {
                    tag: "datatype", name: "WaterMark", id: 0x5, type: "StyleInformationStruct", conformance: "O",
                    details: "This shall indicate watermark shown when the media is playing.",
                    xref: { document: "cluster", section: "6.7.5.6.6" }
                }
            ]
        },

        {
            tag: "datatype", name: "StyleInformationStruct", type: "struct", conformance: "M",
            details: "This object defines style information which can be used by content providers to change the Media " +
                "Player’s style related properties.",
            xref: { document: "cluster", section: "6.7.5.7" },

            children: [
                {
                    tag: "datatype", name: "ImageUrl", id: 0x0, type: "string", conformance: "O",
                    constraint: "max 8192",
                    details: "This shall indicate the URL of image used for Styling different Video Player sections like Logo, " +
                        "Watermark etc.",
                    xref: { document: "cluster", section: "6.7.5.7.1" }
                },

                {
                    tag: "datatype", name: "Color", id: 0x1, type: "string", conformance: "O", constraint: "7, 9",

                    details: "This shall indicate the color, in RGB or RGBA, used for styling different Video Player sections " +
                        "like Logo, Watermark, etc. The value shall conform to the 6-digit or 8-digit format defined for CSS " +
                        "sRGB hexadecimal color notation [https://www.w3.org/TR/css-color-4/#hex-notation]. Examples:" +
                        "\n" +
                        "  • #76DE19 for R=0x76, G=0xDE, B=0x19, A absent" +
                        "\n" +
                        "  • #76DE1980 for R=0x76, G=0xDE, B=0x19, A=0x80",

                    xref: { document: "cluster", section: "6.7.5.7.2" }
                },

                {
                    tag: "datatype", name: "Size", id: 0x2, type: "DimensionStruct", conformance: "O",
                    details: "This shall indicate the size of the image used for Styling different Video Player sections like " +
                        "Logo, Watermark etc.",
                    xref: { document: "cluster", section: "6.7.5.7.3" }
                }
            ]
        },

        {
            tag: "datatype", name: "DimensionStruct", type: "struct", conformance: "M",
            details: "This object defines dimension which can be used for defining Size of background images." +
                "\n" +
                "TODO : Evaluate if Dimension should be part of common data types. As of Apr 2021 adding it in " +
                "ContentLauncher because we don’t have any other usecases which require this datatype.",
            xref: { document: "cluster", section: "6.7.5.8" },

            children: [
                {
                    tag: "datatype", name: "Width", id: 0x0, type: "double", conformance: "M",
                    details: "This indicates the width using the metric defined in Metric",
                    xref: { document: "cluster", section: "6.7.5.8.1" }
                },
                {
                    tag: "datatype", name: "Height", id: 0x1, type: "double", conformance: "M",
                    details: "This indicates the height using the metric defined in Metric",
                    xref: { document: "cluster", section: "6.7.5.8.2" }
                },
                {
                    tag: "datatype", name: "Metric", id: 0x2, type: "MetricTypeEnum", conformance: "M",
                    details: "This shall indicate metric used for defining Height/Width.",
                    xref: { document: "cluster", section: "6.7.5.8.3" }
                }
            ]
        },

        {
            tag: "datatype", name: "MetricTypeEnum", type: "enum8", conformance: "M",
            xref: { document: "cluster", section: "6.7.5.9" },

            children: [
                {
                    tag: "datatype", name: "Pixels", id: 0x0, conformance: "M",
                    details: "This value is used for dimensions defined in a number of Pixels.",
                    xref: { document: "cluster", section: "6.7.5.9.1" }
                },

                {
                    tag: "datatype", name: "Percentage", id: 0x1, conformance: "M",
                    details: "This value is for dimensions defined as a percentage of the overall display dimensions. For " +
                        "example, if using a Percentage Metric type for a Width measurement of 50.0, against a display width " +
                        "of 1920 pixels, then the resulting value used would be 960 pixels (50.0% of 1920) for that " +
                        "dimension. Whenever a measurement uses this Metric type, the resulting values shall be rounded " +
                        "(\"floored\") towards 0 if the measurement requires an integer final value.",
                    xref: { document: "cluster", section: "6.7.5.9.2" }
                }
            ]
        }
    ]
});
