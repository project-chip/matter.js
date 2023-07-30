/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import {
    BaseClusterComponent,
    ClusterComponent,
    ExtensibleCluster,
    validateFeatureSelection,
    extendCluster,
    ClusterForBaseCluster,
    AsConditional
} from "../../cluster/ClusterFactory.js";
import { BitFlag, BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { Attribute, Command, Cluster as CreateCluster } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvString, TlvByteString } from "../../tlv/TlvString.js";
import { TlvUInt32, TlvBitmap, TlvDouble, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";

export namespace ContentLauncher {
    /**
     * The value of the ContentLauncher supportedStreamingProtocols attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.3.2.1
     */
    export const SupportedStreamingProtocols = {
        /**
         * Device supports Dynamic Adaptive Streaming over HTTP (DASH)
         */
        dash: BitFlag(0),

        /**
         * Device supports HTTP Live Streaming (HLS)
         */
        hls: BitFlag(1)
    };

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.9
     */
    export const enum MetricType {
        /**
         * This value is used for dimensions defined in a number of Pixels.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.9.1
         */
        Pixels = 0,

        /**
         * This value is for dimensions defined as a percentage of the overall display dimensions. For example, if
         * using a Percentage Metric type for a Width measurement of 50.0, against a display width of 1920 pixels, then
         * the resulting value used would be 960 pixels (50.0% of 1920) for that dimension. Whenever a measurement uses
         * this Metric type, the resulting values shall be rounded ("floored") towards 0 if the measurement requires an
         * integer final value.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.9.2
         */
        Percentage = 1
    }

    /**
     * This object defines dimension which can be used for defining Size of background images.
     *
     * TODO : Evaluate if Dimension should be part of common data types. As of Apr 2021 adding it in ContentLauncher
     * because we don’t have any other usecases which require this datatype.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.8
     */
    export const TlvDimensionStruct = TlvObject({
        /**
         * This indicates the width using the metric defined in Metric
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.8.1
         */
        width: TlvField(0, TlvDouble),

        /**
         * This indicates the height using the metric defined in Metric
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.8.2
         */
        height: TlvField(1, TlvDouble),

        /**
         * This shall indicate metric used for defining Height/Width.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.8.3
         */
        metric: TlvField(2, TlvEnum<MetricType>())
    });

    /**
     * This object defines style information which can be used by content providers to change the Media Player’s style
     * related properties.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.7
     */
    export const TlvStyleInformationStruct = TlvObject({
        /**
         * This shall indicate the URL of image used for Styling different Video Player sections like Logo, Watermark
         * etc.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.7.1
         */
        imageUrl: TlvOptionalField(0, TlvString.bound({ maxLength: 8192 })),

        /**
         * This shall indicate the color, in RGB or RGBA, used for styling different Video Player sections like Logo,
         * Watermark, etc. The value shall conform to the 6-digit or 8-digit format defined for CSS sRGB hexadecimal
         * color notation [https://www.w3.org/TR/css-color-4/#hex-notation]. Examples:
         *
         *   • #76DE19 for R=0x76, G=0xDE, B=0x19, A absent
         *
         *   • #76DE1980 for R=0x76, G=0xDE, B=0x19, A=0x80
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.7.2
         */
        color: TlvOptionalField(1, TlvString),

        /**
         * This shall indicate the size of the image used for Styling different Video Player sections like Logo,
         * Watermark etc.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.7.3
         */
        size: TlvOptionalField(2, TlvDimensionStruct)
    });

    /**
     * This object defines Branding Information which can be provided by the client in order to customize the skin of
     * the Video Player during playback.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.6
     */
    export const TlvBrandingInformationStruct = TlvObject({
        /**
         * This shall indicate name of of the provider for the given content.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.6.1
         */
        providerName: TlvField(0, TlvString.bound({ maxLength: 256 })),

        /**
         * This shall indicate background of the Video Player while content launch request is being processed by it.
         * This background information may also be used by the Video Player when it is in idle state.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.6.2
         */
        background: TlvOptionalField(1, TlvStyleInformationStruct),

        /**
         * This shall indicate the logo shown when the Video Player is launching. This is also used when the Video
         * Player is in the idle state and Splash field is not available.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.6.3
         */
        logo: TlvOptionalField(2, TlvStyleInformationStruct),

        /**
         * This shall indicate the style of progress bar for media playback.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.6.4
         */
        progressBar: TlvOptionalField(3, TlvStyleInformationStruct),

        /**
         * This shall indicate the screen shown when the Video Player is in an idle state. If this property is not
         * populated, the Video Player shall default to logo or the provider name.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.6.5
         */
        splash: TlvOptionalField(4, TlvStyleInformationStruct),

        /**
         * This shall indicate watermark shown when the media is playing.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.6.6
         */
        waterMark: TlvOptionalField(5, TlvStyleInformationStruct)
    });

    /**
     * Input to the ContentLauncher launchUrl command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.2
     */
    export const TlvLaunchUrlRequest = TlvObject({
        /**
         * This shall indicate the URL of content to launch.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.2.1
         */
        contentUrl: TlvField(0, TlvString),

        /**
         * This field, if present, shall provide a string that may be used to describe the content being accessed at
         * the given URL.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.2.2
         */
        displayString: TlvOptionalField(1, TlvString),

        /**
         * This field, if present, shall indicate the branding information that may be displayed when playing back the
         * given content.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.2.3
         */
        brandingInformation: TlvOptionalField(2, TlvBrandingInformationStruct)
    });

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.1
     */
    export const enum Status {
        /**
         * Command succeeded
         */
        Success = 0,

        /**
         * Requested URL could not be reached by device.
         */
        UrlNotAvailable = 1,

        /**
         * Requested URL returned 401 error code.
         */
        AuthFailed = 2
    }

    /**
     * This command shall be generated in response to LaunchContent and LaunchURL commands.
     *
     * WARNING TODO: Data in table above needs a max size
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.3
     */
    export const TlvLauncherResponse = TlvObject({
        /**
         * This shall indicate the status of the command which resulted in this response.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.3.1
         */
        status: TlvField(0, TlvEnum<Status>()),

        /**
         * This shall indicate Optional app-specific data.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.3.2
         */
        data: TlvOptionalField(1, TlvByteString)
    });

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.4
     */
    export const enum Parameter {
        /**
         * Actor represents an actor credited in video media content; for example, “Gaby sHoffman”
         */
        Actor = 0,

        /**
         * Channel represents the identifying data for a television channel; for example, "PBS"
         */
        Channel = 1,

        /**
         * A character represented in video media content; for example, “Snow White”
         */
        Character = 2,

        /**
         * A director of the video media content; for example, “Spike Lee”
         */
        Director = 3,

        /**
         * An event is a reference to a type of event; examples would include sports, music, or other types of events.
         * For example, searching for "Football games" would search for a 'game' event entity and a 'football' sport
         * entity.
         */
        Event = 4,

        /**
         * A franchise is a video entity which can represent a number of video entities, like movies or TV shows. For
         * example, take the fictional franchise "Intergalactic Wars" which represents a collection of movie trilogies,
         * as well as animated and live action TV shows. This entity type was introduced to account for requests by
         * customers such as "Find Intergalactic Wars movies", which would search for all 'Intergalactic Wars' programs
         * of the MOVIE MediaType, rather than attempting to match to a single title.
         */
        Franchise = 5,

        /**
         * Genre represents the genre of video media content such as action, drama or comedy.
         */
        Genre = 6,

        /**
         * League represents the categorical information for a sporting league; for example, "NCAA"
         */
        League = 7,

        /**
         * Popularity indicates whether the user asks for popular content.
         */
        Popularity = 8,

        /**
         * The provider (MSP) the user wants this media to be played on; for example, "Netflix".
         */
        Provider = 9,

        /**
         * Sport represents the categorical information of a sport; for example, football
         */
        Sport = 10,

        /**
         * SportsTeam represents the categorical information of a professional sports team; for example, "University of
         * Washington Huskies"
         */
        SportsTeam = 11,

        /**
         * The type of content requested. Supported types are "Movie", "MovieSeries", "TVSeries", "TVSeason",
         * "TVEpisode", "SportsEvent", and "Video"
         */
        Type = 12,

        /**
         * Video represents the identifying data for a specific piece of video content; for example, "Manchester by the
         * Sea".
         */
        Video = 13
    }

    /**
     * This object defines additional name=value pairs that can be used for identifying content.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.5
     */
    export const TlvAdditionalInfoStruct = TlvObject({
        /**
         * This shall indicate the name of external id, ex. "musicbrainz".
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.5.1
         */
        name: TlvField(0, TlvString.bound({ maxLength: 256 })),

        /**
         * This shall indicate the value for external id, ex. "ST0000000666661".
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.5.2
         */
        value: TlvField(1, TlvString.bound({ maxLength: 8192 }))
    });

    /**
     * This object defines inputs to a search for content for display or playback.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.3
     */
    export const TlvParameterStruct = TlvObject({
        /**
         * This shall indicate the entity type.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.3.1
         */
        type: TlvField(0, TlvEnum<Parameter>()),

        /**
         * This shall indicate the entity value, which is a search string, ex. “Manchester by the Sea”.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.3.2
         */
        value: TlvField(1, TlvString.bound({ maxLength: 1024 })),

        /**
         * This shall indicate the list of additional external content identifiers.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.3.3
         */
        externalIdList: TlvOptionalField(2, TlvArray(TlvAdditionalInfoStruct))
    });

    /**
     * This object defines inputs to a search for content for display or playback.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.2
     */
    export const TlvContentSearchStruct = TlvObject({
        /**
         * This shall indicate the list of parameters comprising the search. If multiple parameters are provided, the
         * search parameters shall be joined with 'AND' logic. e.g. action movies with Tom Cruise will be represented
         * as [{Actor: 'Tom Cruise'}, {Type: 'Movie'}, {Genre: 'Action'}]
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.5.2.1
         */
        parameterList: TlvField(0, TlvArray(TlvParameterStruct))
    });

    /**
     * Input to the ContentLauncher launchContent command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.1
     */
    export const TlvLaunchContentRequest = TlvObject({
        /**
         * This shall indicate the content to launch.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.1.1
         */
        search: TlvField(0, TlvContentSearchStruct),

        /**
         * This shall indicate whether to automatically start playing content, where: * TRUE means best match should
         * start playing automatically. * FALSE means matches should be displayed on screen for user selection.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.1.2
         */
        autoPlay: TlvField(1, TlvBoolean),

        /**
         * This shall indicate Optional app-specific data.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.1.3
         */
        data: TlvOptionalField(2, TlvByteString)
    });

    /**
     * These are optional features supported by ContentLauncherCluster.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.2
     */
    export enum Feature {
        /**
         * ContentSearch
         *
         * Device supports content search (non-app specific)
         */
        ContentSearch = "ContentSearch",

        /**
         * UrlPlayback
         *
         * Device supports basic URL-based file playback
         */
        UrlPlayback = "UrlPlayback"
    }

    /**
     * These elements and properties are present in all ContentLauncher clusters.
     */
    export const Base = BaseClusterComponent({
        id: 0x50a,
        name: "ContentLauncher",
        revision: 1,

        features: {
            /**
             * ContentSearch
             *
             * Device supports content search (non-app specific)
             */
            contentSearch: BitFlag(0),

            /**
             * UrlPlayback
             *
             * Device supports basic URL-based file playback
             */
            urlPlayback: BitFlag(1)
        }
    });

    /**
     * A ContentLauncherCluster supports these elements if it supports feature UrlPlayback.
     */
    export const UrlPlaybackComponent = ClusterComponent({
        attributes: {
            /**
             * This list provides list of content types supported by the Video Player or Content App in the form of
             * entries in the HTTP "Accept" request header.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.3.1
             */
            acceptHeader: Attribute(0x0, TlvArray(TlvString, { maxLength: 100 }), { persistent: true, default: [] }),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.3.2.1
             */
            supportedStreamingProtocols: Attribute(
                0x1,
                TlvBitmap(TlvUInt32, SupportedStreamingProtocols),
                { persistent: true }
            )
        },

        commands: {
            /**
             * Upon receipt, this shall launch content from the specified URL.
             *
             * The content types supported include those identified in the AcceptHeader and SupportedStreamingProtocols
             * attributes.
             *
             * A check shall be made to ensure the URL is secure (uses HTTPS). This command returns a Launch Response.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.2
             */
            launchUrl: Command(0x1, TlvLaunchUrlRequest, 0x2, TlvLauncherResponse)
        }
    });

    /**
     * A ContentLauncherCluster supports these elements if it supports feature ContentSearch.
     */
    export const ContentSearchComponent = ClusterComponent({
        commands: {
            /**
             * Upon receipt, this shall launch the specified content with optional search criteria. This command
             * returns a Launch Response.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.1
             */
            launchContent: Command(0x0, TlvLaunchContentRequest, 0x2, TlvLauncherResponse)
        }
    });

    /**
     * A ContentLauncherCluster supports these elements if it supports features ContentSearch or UrlPlayback.
     */
    export const ContentSearchOrUrlPlaybackComponent = ClusterComponent({});

    /**
     * Content Launcher
     *
     * This cluster provides an interface for launching content on a Video Player device such as a Streaming Media
     * Player, Smart TV or Smart Screen.
     *
     * ContentLauncherCluster supports optional features that you can enable with the ContentLauncherCluster.with()
     * factory method.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7
     */
    export const Cluster = ExtensibleCluster({
        ...Base,

        /**
         * Use this factory method to create a ContentLauncher cluster with support for optional features. Include each
         * {@link Feature} you wish to support.
         *
         * @param features the optional features to support
         * @returns a ContentLauncher cluster with specified features enabled
         * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
         */
        factory: <T extends `${Feature}`[]>(...features: [...T]) => {
            validateFeatureSelection(features, Feature);
            const cluster = CreateCluster({ ...Base, supportedFeatures: BitFlags(Base.features, ...features) });
            extendCluster(cluster, UrlPlaybackComponent, { urlPlayback: true });
            extendCluster(cluster, ContentSearchComponent, { contentSearch: true });
            extendCluster(cluster, ContentSearchOrUrlPlaybackComponent, { contentSearch: true }, { urlPlayback: true });
            return cluster as unknown as Extension<BitFlags<typeof Base.features, T>>;
        }
    });

    export type Extension<SF extends TypeFromPartialBitSchema<typeof Base.features>> =
        ClusterForBaseCluster<typeof Base, SF>
        & { supportedFeatures: SF }
        & (SF extends { urlPlayback: true } ? typeof UrlPlaybackComponent : {})
        & (SF extends { contentSearch: true } ? typeof ContentSearchComponent : {})
        & (SF extends { contentSearch: true } | { urlPlayback: true } ? typeof ContentSearchOrUrlPlaybackComponent : {});

    const UP = { urlPlayback: true };
    const CS = { contentSearch: true };

    /**
     * This cluster supports all ContentLauncher features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export const Complete = CreateCluster({
        id: Cluster.id,
        name: Cluster.name,
        revision: Cluster.revision,
        features: Cluster.features,

        attributes: {
            acceptHeader: AsConditional(UrlPlaybackComponent.attributes.acceptHeader, { mandatoryIf: [UP] }),
            supportedStreamingProtocols: AsConditional(
                UrlPlaybackComponent.attributes.supportedStreamingProtocols,
                { mandatoryIf: [UP] }
            )
        },

        commands: {
            launchContent: AsConditional(ContentSearchComponent.commands.launchContent, { mandatoryIf: [CS] }),
            launchUrl: AsConditional(UrlPlaybackComponent.commands.launchUrl, { mandatoryIf: [UP] })
        }
    });
}

export type ContentLauncherCluster = typeof ContentLauncher.Cluster;
export const ContentLauncherCluster = ContentLauncher.Cluster;
