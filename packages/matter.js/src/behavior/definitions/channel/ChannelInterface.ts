/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { Channel } from "../../../cluster/definitions/ChannelCluster.js";

/**
 * Change the channel to the channel with the given Number in the ChannelList attribute.
 *
 * @see {@link MatterSpecification.v11.Cluster} § 6.6.4.3
 */
export type ChangeChannelByNumberRequest = TypeFromSchema<typeof Channel.TlvChangeChannelByNumberRequest>;

/**
 * This command provides channel up and channel down functionality, but allows channel index jumps of size Count.
 *
 * When the value of the increase or decrease is larger than the number of channels remaining in the given direction,
 * then the behavior shall be to return to the beginning (or end) of the channel list and continue. For example, if the
 * current channel is at index 0 and count value of -1 is given, then the current channel should change to the last
 * channel.
 *
 * @see {@link MatterSpecification.v11.Cluster} § 6.6.4.4
 */
export type SkipChannelRequest = TypeFromSchema<typeof Channel.TlvSkipChannelRequest>;

/**
 * Change the channel to the channel case-insensitive exact matching the value passed as an argument.
 *
 * The match priority order shall be: AffiliateCallSign ("KCTS"), CallSign ("PBS"), Name ("Comedy Central"), Number
 * ("13.1")
 *
 * Upon receipt, this shall generate a ChangeChannelResponse command.
 *
 * Upon success, the CurrentChannel attribute, if supported, shall be updated to reflect the change.
 *
 * @see {@link MatterSpecification.v11.Cluster} § 6.6.4.1
 */
export type ChangeChannelRequest = TypeFromSchema<typeof Channel.TlvChangeChannelRequest>;

/**
 * This command shall be generated in response to a ChangeChannel command.
 *
 * @see {@link MatterSpecification.v11.Cluster} § 6.6.4.2
 */
export type ChangeChannelResponse = TypeFromSchema<typeof Channel.TlvChangeChannelResponse>;

export namespace ChannelInterface {
    export interface Base {
        /**
         * Change the channel to the channel with the given Number in the ChannelList attribute.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 6.6.4.3
         */
        changeChannelByNumber(request: ChangeChannelByNumberRequest): MaybePromise;

        /**
         * This command provides channel up and channel down functionality, but allows channel index jumps of size
         * Count.
         *
         * When the value of the increase or decrease is larger than the number of channels remaining in the given
         * direction, then the behavior shall be to return to the beginning (or end) of the channel list and continue.
         * For example, if the current channel is at index 0 and count value of -1 is given, then the current channel
         * should change to the last channel.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 6.6.4.4
         */
        skipChannel(request: SkipChannelRequest): MaybePromise;
    }

    export interface ChannelListOrLineupInfo {
        /**
         * Change the channel to the channel case-insensitive exact matching the value passed as an argument.
         *
         * The match priority order shall be: AffiliateCallSign ("KCTS"), CallSign ("PBS"), Name ("Comedy Central"),
         * Number ("13.1")
         *
         * Upon receipt, this shall generate a ChangeChannelResponse command.
         *
         * Upon success, the CurrentChannel attribute, if supported, shall be updated to reflect the change.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 6.6.4.1
         */
        changeChannel(request: ChangeChannelRequest): MaybePromise<ChangeChannelResponse>;
    }
}

export type ChannelInterface = {
    components: [
        { flags: {}, methods: ChannelInterface.Base },
        { flags: { channelList: true }, methods: ChannelInterface.ChannelListOrLineupInfo },
        { flags: { lineupInfo: true }, methods: ChannelInterface.ChannelListOrLineupInfo }
    ]
};
