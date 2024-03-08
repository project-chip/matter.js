/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../../cluster/mutation/MutableCluster.js";
import { Attribute, Command, OptionalAttribute, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvUInt16, TlvEnum, TlvInt16 } from "../../tlv/TlvNumber.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { TlvString, TlvByteString } from "../../tlv/TlvString.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";

export namespace Channel {
    /**
     * This indicates a channel in a channel lineup.
     *
     * While the major and minor numbers in the ChannelInfoStruct support use of ATSC channel format, a lineup may use
     * other formats which can map into these numeric values.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.1
     */
    export const TlvChannelInfoStruct = TlvObject({
        /**
         * This shall indicate the channel major number value (for example, using ATSC format). When the channel number
         * is expressed as a string, such as "13.1" or "256", the major number would be 13 or 256, respectively.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.1.1
         */
        majorNumber: TlvField(0, TlvUInt16),

        /**
         * This shall indicate the channel minor number value (for example, using ATSC format). When the channel number
         * is expressed as a string, such as "13.1" or "256", the minor number would be 1 or 0, respectively.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.1.2
         */
        minorNumber: TlvField(1, TlvUInt16),

        /**
         * This shall indicate the marketing name for the channel, such as “The CW" or "Comedy Central". This field is
         * optional, but SHOULD be provided when known.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.1.3
         */
        name: TlvOptionalField(2, TlvString),

        /**
         * This shall indicate the call sign of the channel, such as "PBS". This field is optional, but SHOULD be
         * provided when known.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.1.4
         */
        callSign: TlvOptionalField(3, TlvString),

        /**
         * This shall indicate the local affiliate call sign, such as "KCTS". This field is optional, but SHOULD be
         * provided when known.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.1.5
         */
        affiliateCallSign: TlvOptionalField(4, TlvString)
    });

    /**
     * This indicates a channel in a channel lineup.
     *
     * While the major and minor numbers in the ChannelInfoStruct support use of ATSC channel format, a lineup may use
     * other formats which can map into these numeric values.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.1
     */
    export interface ChannelInfoStruct extends TypeFromSchema<typeof TlvChannelInfoStruct> {}

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.3
     */
    export enum LineupInfoType {
        /**
         * MultiSystemOperator
         */
        Mso = 0
    }

    /**
     * The Lineup Info allows references to external lineup sources like Gracenote. The combination of OperatorName,
     * LineupName, and PostalCode MUST uniquely identify a lineup.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.2
     */
    export const TlvLineupInfoStruct = TlvObject({
        /**
         * This shall indicate the name of the operator, for example “Comcast”.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.2.1
         */
        operatorName: TlvField(0, TlvString),

        lineupName: TlvOptionalField(1, TlvString),
        postalCode: TlvOptionalField(2, TlvString),

        /**
         * This shall indicate the type of lineup. This field is optional, but SHOULD be provided when known.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.2.4
         */
        lineupInfoType: TlvField(3, TlvEnum<LineupInfoType>())
    });

    /**
     * The Lineup Info allows references to external lineup sources like Gracenote. The combination of OperatorName,
     * LineupName, and PostalCode MUST uniquely identify a lineup.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.2
     */
    export interface LineupInfoStruct extends TypeFromSchema<typeof TlvLineupInfoStruct> {}

    /**
     * Input to the Channel changeChannel command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.1
     */
    export const TlvChangeChannelRequest = TlvObject({
        /**
         * This shall contain a user-input string to match in order to identify the target channel.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.1.1
         */
        match: TlvField(0, TlvString)
    });

    /**
     * Input to the Channel changeChannel command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.1
     */
    export interface ChangeChannelRequest extends TypeFromSchema<typeof TlvChangeChannelRequest> {}

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.4
     */
    export enum Status {
        /**
         * Command succeeded
         */
        Success = 0,

        /**
         * More than one equal match for the ChannelInfoStruct passed in.
         */
        MultipleMatches = 1,

        /**
         * No matches for the ChannelInfoStruct passed in.
         */
        NoMatches = 2
    }

    /**
     * This command shall be generated in response to a ChangeChannel command.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.2
     */
    export const TlvChangeChannelResponse = TlvObject({
        /**
         * This shall indicate the status of the command which resulted in this response.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.2.1
         */
        status: TlvField(0, TlvEnum<Status>()),

        /**
         * This shall indicate Optional app-specific data.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.2.2
         */
        data: TlvOptionalField(1, TlvByteString)
    });

    /**
     * This command shall be generated in response to a ChangeChannel command.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.2
     */
    export interface ChangeChannelResponse extends TypeFromSchema<typeof TlvChangeChannelResponse> {}

    /**
     * Input to the Channel changeChannelByNumber command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.3
     */
    export const TlvChangeChannelByNumberRequest = TlvObject({
        /**
         * This shall indicate the channel major number value (ATSC format) to which the channel should change.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.3.1
         */
        majorNumber: TlvField(0, TlvUInt16),

        /**
         * This shall indicate the channel minor number value (ATSC format) to which the channel should change.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.3.2
         */
        minorNumber: TlvField(1, TlvUInt16)
    });

    /**
     * Input to the Channel changeChannelByNumber command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.3
     */
    export interface ChangeChannelByNumberRequest extends TypeFromSchema<typeof TlvChangeChannelByNumberRequest> {}

    /**
     * Input to the Channel skipChannel command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.4
     */
    export const TlvSkipChannelRequest = TlvObject({
        /**
         * This shall indicate the number of steps to increase (Count is positive) or decrease (Count is negative) the
         * current channel.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.4.1
         */
        count: TlvField(0, TlvInt16)
    });

    /**
     * Input to the Channel skipChannel command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.4
     */
    export interface SkipChannelRequest extends TypeFromSchema<typeof TlvSkipChannelRequest> {}

    /**
     * A ChannelCluster supports these elements if it supports feature ChannelList.
     */
    export const ChannelListComponent = MutableCluster.Component({
        attributes: {
            /**
             * This optional list provides the channels supported.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.3.1
             */
            channelList: Attribute(0x0, TlvArray(TlvChannelInfoStruct), { default: [] })
        }
    });

    /**
     * A ChannelCluster supports these elements if it supports feature LineupInfo.
     */
    export const LineupInfoComponent = MutableCluster.Component({
        attributes: {
            /**
             * This optional field identifies the channel lineup using external data sources.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.3.2
             */
            lineup: Attribute(0x1, TlvNullable(TlvLineupInfoStruct), { default: null })
        }
    });

    /**
     * A ChannelCluster supports these elements if it supports features ChannelList or LineupInfo.
     */
    export const ChannelListOrLineupInfoComponent = MutableCluster.Component({
        commands: {
            /**
             * Change the channel to the channel case-insensitive exact matching the value passed as an argument.
             *
             * The match priority order shall be: AffiliateCallSign ("KCTS"), CallSign ("PBS"), Name ("Comedy
             * Central"), Number ("13.1")
             *
             * Upon receipt, this shall generate a ChangeChannelResponse command.
             *
             * Upon success, the CurrentChannel attribute, if supported, shall be updated to reflect the change.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.1
             */
            changeChannel: Command(0x0, TlvChangeChannelRequest, 0x1, TlvChangeChannelResponse)
        }
    });

    /**
     * These are optional features supported by ChannelCluster.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.2
     */
    export enum Feature {
        /**
         * ChannelList
         *
         * Provides list of available channels.
         */
        ChannelList = "ChannelList",

        /**
         * LineupInfo
         *
         * Provides lineup info, which is a reference to an external source of lineup information.
         */
        LineupInfo = "LineupInfo"
    }

    /**
     * These elements and properties are present in all Channel clusters.
     */
    export const Base = MutableCluster.Component({
        id: 0x504,
        name: "Channel",
        revision: 1,

        features: {
            /**
             * ChannelList
             *
             * Provides list of available channels.
             */
            channelList: BitFlag(0),

            /**
             * LineupInfo
             *
             * Provides lineup info, which is a reference to an external source of lineup information.
             */
            lineupInfo: BitFlag(1)
        },

        attributes: {
            /**
             * This optional field contains the current channel. When supported but a channel is not currently tuned to
             * (if a content application is in foreground), the value of the field shall be null.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.3.3
             */
            currentChannel: OptionalAttribute(0x2, TlvNullable(TlvChannelInfoStruct), { default: null })
        },

        commands: {
            /**
             * Change the channel to the channel with the given Number in the ChannelList attribute.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.3
             */
            changeChannelByNumber: Command(0x2, TlvChangeChannelByNumberRequest, 0x2, TlvNoResponse),

            /**
             * This command provides channel up and channel down functionality, but allows channel index jumps of size
             * Count.
             *
             * When the value of the increase or decrease is larger than the number of channels remaining in the given
             * direction, then the behavior shall be to return to the beginning (or end) of the channel list and
             * continue. For example, if the current channel is at index 0 and count value of -1 is given, then the
             * current channel should change to the last channel.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.4
             */
            skipChannel: Command(0x3, TlvSkipChannelRequest, 0x3, TlvNoResponse)
        },

        /**
         * This metadata controls which ChannelCluster elements matter.js activates for specific feature combinations.
         */
        extensions: MutableCluster.Extensions(
            { flags: { channelList: true }, component: ChannelListComponent },
            { flags: { lineupInfo: true }, component: LineupInfoComponent },
            { flags: { channelList: true }, component: ChannelListOrLineupInfoComponent },
            { flags: { lineupInfo: true }, component: ChannelListOrLineupInfoComponent }
        )
    });

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({ ...Base });

    /**
     * Channel
     *
     * This cluster provides an interface for controlling the current Channel on a device or endpoint.
     *
     * ChannelCluster supports optional features that you can enable with the ChannelCluster.with() factory method.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    const CL = { channelList: true };
    const LI = { lineupInfo: true };

    /**
     * @see {@link Complete}
     */
    export const CompleteInstance = MutableCluster({
        id: Cluster.id,
        name: Cluster.name,
        revision: Cluster.revision,
        features: Cluster.features,

        attributes: {
            ...Cluster.attributes,
            channelList: MutableCluster.AsConditional(
                ChannelListComponent.attributes.channelList,
                { mandatoryIf: [CL] }
            ),
            lineup: MutableCluster.AsConditional(LineupInfoComponent.attributes.lineup, { mandatoryIf: [LI] })
        },

        commands: {
            ...Cluster.commands,
            changeChannel: MutableCluster.AsConditional(
                ChannelListOrLineupInfoComponent.commands.changeChannel,
                { mandatoryIf: [CL, LI] }
            )
        }
    });

    /**
     * This cluster supports all Channel features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export interface Complete extends Identity<typeof CompleteInstance> {}

    export const Complete: Complete = CompleteInstance;
}

export type ChannelCluster = Channel.Cluster;
export const ChannelCluster = Channel.Cluster;
ClusterRegistry.register(Channel.Complete);
