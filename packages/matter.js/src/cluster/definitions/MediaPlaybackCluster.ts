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
import { Attribute, Command, OptionalCommand, Cluster as CreateCluster } from "../../cluster/Cluster.js";
import { TlvEnum, TlvUInt64, TlvEpochUs, TlvFloat } from "../../tlv/TlvNumber.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvByteString } from "../../tlv/TlvString.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";

export namespace MediaPlayback {
    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.5.1
     */
    export const enum PlaybackState {
        /**
         * Media is currently playing (includes FF and REW)
         */
        Playing = 0,

        /**
         * Media is currently paused
         */
        Paused = 1,

        /**
         * Media is not currently playing
         */
        NotPlaying = 2,

        /**
         * Media is not currently buffering and playback will start when buffer has been filled
         */
        Buffering = 3
    }

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.5.2
     */
    export const enum Status {
        /**
         * Command succeeded
         */
        Success = 0,

        /**
         * Command failed: Requested playback command is invalid in the current playback state.
         */
        InvalidStateForCommand = 1,

        /**
         * Command failed: Requested playback command is not allowed in the current playback state. For example,
         * attempting to fast-forward during a commercial might return NotAllowed.
         */
        NotAllowed = 2,

        /**
         * Command failed: This endpoint is not active for playback.
         */
        NotActive = 3,

        /**
         * Command failed: The FastForward or Rewind Command was issued but the media is already playing back at the
         * fastest speed supported by the server in the respective direction.
         */
        SpeedOutOfRange = 4,

        /**
         * Command failed: The Seek Command was issued with a value of position outside of the allowed seek range of
         * the media.
         */
        SeekOutOfRange = 5
    }

    /**
     * This command shall be generated in response to various Playback Commands.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.12
     */
    export const TlvPlaybackResponse = TlvObject({
        /**
         * This shall indicate the status of the command which resulted in this response.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.12.1
         */
        status: TlvField(0, TlvEnum<Status>()),

        /**
         * This shall indicate Optional app-specific data.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.12.2
         */
        data: TlvOptionalField(1, TlvByteString)
    });

    /**
     * Input to the MediaPlayback skipForward command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.9
     */
    export const TlvSkipForwardRequest = TlvObject({
        /**
         * This shall indicate the duration of the time span to skip forward in the media, in milliseconds. In case the
         * resulting position falls in the middle of a frame, the server shall set the position to the beginning of
         * that frame and set the SampledPosition attribute on the cluster accordingly. If the resultant position falls
         * beyond the furthest valid position in the media the client may seek forward to, the position should be set
         * to that furthest valid position. If the SampledPosition attribute is supported it shall be updated on the
         * cluster accordingly.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.9.1
         */
        deltaPositionMilliseconds: TlvField(0, TlvUInt64)
    });

    /**
     * Input to the MediaPlayback skipBackward command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.10
     */
    export const TlvSkipBackwardRequest = TlvObject({
        /**
         * This shall indicate the duration of the time span to skip backward in the media, in milliseconds. In case
         * the resulting position falls in the middle of a frame, the server shall set the position to the beginning of
         * that frame and set the SampledPosition attribute on the cluster accordingly. If the resultant position falls
         * before the earliest valid position to which a client may seek back to, the position should be set to that
         * earliest valid position. If the SampledPosition attribute is supported it shall be updated on the cluster
         * accordingly.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.10.1
         */
        deltaPositionMilliseconds: TlvField(0, TlvUInt64)
    });

    /**
     * This structure defines a playback position within a media stream being played.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.5.3
     */
    export const TlvPlaybackPositionStruct = TlvObject({
        /**
         * This shall indicate the time when the position was last updated.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.5.3.1
         */
        updatedAt: TlvField(0, TlvEpochUs),

        /**
         * This shall indicate the associated discrete position within the media stream, in milliseconds from the
         * beginning of the stream, being associated with the time indicated by the UpdatedAt field. The Position shall
         * not be greater than the duration of the media if duration is specified. The Position shall not be greater
         * than the time difference between current time and start time of the media when start time is specified.
         *
         * A value of null shall indicate that playback position is not applicable for the current state of the media
         * playback (For example : Live media with no known duration and where seek is not supported).
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.5.3.2
         */
        position: TlvField(1, TlvNullable(TlvUInt64))
    });

    /**
     * Input to the MediaPlayback seek command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.11
     */
    export const TlvSeekRequest = TlvObject({
        /**
         * This shall indicate the position (in milliseconds) in the media to seek to. In case the position falls in
         * the middle of a frame, the server shall set the position to the beginning of that frame and set the
         * SampledPosition attribute on the cluster accordingly. If the position falls before the earliest valid
         * position or beyond the furthest valid position to which a client may seek back or forward to respectively,
         * the status of SEEK_OUT_OF_RANGE shall be returned and no change shall be made to the position of the
         * playback.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.11.1
         */
        position: TlvField(0, TlvUInt64)
    });

    /**
     * These are optional features supported by MediaPlaybackCluster.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.2
     */
    export enum Feature {
        /**
         * AdvancedSeek
         *
         * Enables clients to implement more advanced media seeking behavior in their user interface, such as for
         * example a "seek bar". Adds support for Attributes and Commands related to advanced seek support
         */
        AdvancedSeek = "AdvancedSeek",

        /**
         * VariableSpeed
         *
         * Support for commands to support variable speed playback on media that supports it.
         */
        VariableSpeed = "VariableSpeed"
    }

    /**
     * These elements and properties are present in all MediaPlayback clusters.
     */
    export const Base = BaseClusterComponent({
        id: 0x506,
        name: "MediaPlayback",
        revision: 1,

        features: {
            /**
             * AdvancedSeek
             *
             * Enables clients to implement more advanced media seeking behavior in their user interface, such as for
             * example a "seek bar". Adds support for Attributes and Commands related to advanced seek support
             */
            advancedSeek: BitFlag(0),

            /**
             * VariableSpeed
             *
             * Support for commands to support variable speed playback on media that supports it.
             */
            variableSpeed: BitFlag(1)
        },

        attributes: {
            /**
             * This shall indicate the current playback state of media.
             *
             * During fast-forward, rewind, and other seek operations; this attribute shall be set to PLAYING.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.3.1
             */
            currentState: Attribute(0x0, TlvEnum<PlaybackState>(), { default: PlaybackState.Playing })
        },

        commands: {
            /**
             * Upon receipt, this shall play media. If content is currently in a FastForward or Rewind state. Play
             * shall return media to normal playback speed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.1
             */
            play: Command(0x0, TlvNoArguments, 0xa, TlvPlaybackResponse),

            /**
             * Upon receipt, this shall pause playback of the media.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.2
             */
            pause: Command(0x1, TlvNoArguments, 0xa, TlvPlaybackResponse),

            /**
             * Upon receipt, this shall stop playback of the media. User-visible outcome is context-specific. This may
             * navigate the user back to the location from where the media was originally launched.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.3
             */
            stop: Command(0x2, TlvNoArguments, 0xa, TlvPlaybackResponse),

            /**
             * Upon receipt, this shall Start Over with the current media playback item.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.4
             */
            startOver: OptionalCommand(0x3, TlvNoArguments, 0xa, TlvPlaybackResponse),

            /**
             * Upon receipt, this shall cause the handler to be invoked for "Previous". User experience is
             * context-specific. This will often Go back to the previous media playback item.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.5
             */
            previous: OptionalCommand(0x4, TlvNoArguments, 0xa, TlvPlaybackResponse),

            /**
             * Upon receipt, this shall cause the handler to be invoked for "Next". User experience is context-
             * specific. This will often Go forward to the next media playback item.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.6
             */
            next: OptionalCommand(0x5, TlvNoArguments, 0xa, TlvPlaybackResponse),

            /**
             * Upon receipt, this shall Skip forward in the media by the given number of milliseconds.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.9
             */
            skipForward: OptionalCommand(0x8, TlvSkipForwardRequest, 0xa, TlvPlaybackResponse),

            /**
             * Upon receipt, this shall Skip backward in the media by the given number of milliseconds.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.10
             */
            skipBackward: OptionalCommand(0x9, TlvSkipBackwardRequest, 0xa, TlvPlaybackResponse)
        }
    });

    /**
     * A MediaPlaybackCluster supports these elements if it supports feature AdvancedSeek.
     */
    export const AdvancedSeekComponent = ClusterComponent({
        attributes: {
            /**
             * This shall indicate the start time of the media, in case the media has a fixed start time (for example,
             * live stream or television broadcast), or null when start time does not apply to the current
             *
             * media (for example, video-on-demand). This time is a UTC time. The client needs to handle conversion to
             * local time, as required, taking in account time zone and possible local DST offset.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.3.2
             */
            startTime: Attribute(0x1, TlvNullable(TlvEpochUs), { default: null }),

            /**
             * This shall indicate the duration, in milliseconds, of the current media being played back or null when
             * duration is not applicable (for example, in live streaming content with no known duration). This
             * attribute shall never be 0.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.3.3
             */
            duration: Attribute(0x2, TlvNullable(TlvUInt64), { default: null }),

            /**
             * This shall indicate the position of playback (Position field) at the time (UpdateAt field) specified in
             * the attribute. The client may use the SampledPosition attribute to compute the current position within
             * the media stream based on the PlaybackSpeed, PlaybackPositionStruct.UpdatedAt and
             * PlaybackPositionStruct.Position fields. To enable this, the SampledPosition attribute shall be updated
             * whenever a change in either the playback speed or the playback position is triggered outside the normal
             * playback of the media. The events which may cause this to happen include:
             *
             *   • Starting or resumption of playback
             *
             *   • Seeking
             *
             *   • Skipping forward or backward
             *
             *   • Fast-forwarding or rewinding
             *
             *   • Updating of playback speed as a result of explicit request, or as a result of buffering events
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.3.4
             */
            sampledPosition: Attribute(0x3, TlvNullable(TlvPlaybackPositionStruct), { default: null }),

            /**
             * This shall indicate the speed at which the current media is being played. The new PlaybackSpeed
             *
             * shall be reflected in this attribute whenever any of the following occurs:
             *
             *   • Starting of playback
             *
             *   • Resuming of playback
             *
             *   • Fast-forwarding
             *
             *   • Rewinding
             *
             * The PlaybackSpeed shall reflect the ratio of time elapsed in the media to the actual time taken for the
             * playback assuming no changes to media playback (for example buffering events or requests to
             * pause/rewind/forward).
             *
             *   • A value for PlaybackSpeed of 1 shall indicate normal playback where, for example, playback for 1
             *     second causes the media to advance by 1 second within the duration of the media.
             *
             *   • A value for PlaybackSpeed which is greater than 0 shall indicate that as playback is happening the
             *     media is currently advancing in time within the duration of the media.
             *
             *   • A value for PlaybackSpeed which is less than 0 shall indicate that as playback is happening the
             *     media is currently going back in time within the duration of the media.
             *
             *   • A value for PlaybackSpeed of 0 shall indicate that the media is currently not playing back. When the
             *     CurrentState attribute has the value of PAUSED, NOT_PLAYING or BUFFERING, the Playback
             *
             * Speed shall be set to 0 to reflect that the media is not playing.
             *
             * Following examples illustrate the PlaybackSpeed attribute values in various conditions.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.3.5
             */
            playbackSpeed: Attribute(0x4, TlvFloat, { default: 0 }),

            /**
             * This shall indicate the furthest forward valid position to which a client may seek forward, in
             * milliseconds from the start of the media. When the media has an associated StartTime, a value of null
             * shall indicate that a seek forward is valid only until the current time within the media, using a
             * position computed from the difference between the current time offset and StartTime, in milliseconds
             * from start of the media, truncating fractional milliseconds towards 0. A value of Nas when StartTime is
             * not specified shall indicate that seeking forward is not allowed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.3.7
             */
            seekRangeEnd: Attribute(0x5, TlvNullable(TlvUInt64), { default: null }),

            /**
             * This shall indicate the earliest valid position to which a client may seek back, in milliseconds from
             * start of the media. A value of Nas shall indicate that seeking backwards is not allowed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.3.6
             */
            seekRangeStart: Attribute(0x6, TlvNullable(TlvUInt64), { default: null })
        },

        commands: {
            /**
             * Upon receipt, this shall change the playback position in the media to the given position.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.11
             */
            seek: Command(0xb, TlvSeekRequest, 0xa, TlvPlaybackResponse)
        }
    });

    /**
     * A MediaPlaybackCluster supports these elements if it supports feature VariableSpeed.
     */
    export const VariableSpeedComponent = ClusterComponent({
        commands: {
            /**
             * Upon receipt, this shall start playback of the media backward in case the media is currently playing in
             * the forward direction or is not playing. If the playback is already happening in the backwards direction
             * receipt of this command shall increase the speed of the media playback back
             *
             * wards.
             *
             * Different "rewind" speeds may be be reflected on the media playback device based upon the number of
             * sequential calls to this function and the capability of the device. This is to avoid needing to define
             * every speed (multiple fast, slow motion, etc). If the PlaybackSpeed attribute is supported it shall be
             * updated to reflect the new speed of playback. If the playback speed cannot be changed for the media
             * being played(for example, in live streaming content not supporting seek), the status of NOT_ALLOWED
             * shall be returned. If the playback speed has reached the maximum supported speed for media playing
             * backwards, the status of SPEED_OUT_OF_RANGE shall be returned.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.7
             */
            rewind: Command(0x6, TlvNoArguments, 0xa, TlvPlaybackResponse),

            /**
             * Upon receipt, this shall start playback of the media in the forward direction in case the media is
             * currently playing in the backward direction or is not playing. If the playback is already happening in
             * the forward direction receipt of this command shall increase the speed of the media playback.
             *
             * Different "fast-forward" speeds may be be reflected on the media playback device based upon the number
             * of sequential calls to this function and the capability of the device. This is to avoid needing to
             * define every speed (multiple fast, slow motion, etc). If the PlaybackSpeed attribute is supported it
             * shall be updated to reflect the new speed of playback. If the playback speed cannot be changed for the
             * media being played(for example, in live streaming content not supporting seek), the status of
             * NOT_ALLOWED shall be returned. If the playback speed has reached the maximum supported speed for media
             * playing forward, the status of SPEED_OUT_OF_RANGE shall be returned.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.8
             */
            fastForward: Command(0x7, TlvNoArguments, 0xa, TlvPlaybackResponse)
        }
    });

    /**
     * Media Playback
     *
     * This cluster provides an interface for controlling Media Playback (PLAY, PAUSE, etc) on a media device such as a
     * TV, Set-top Box, or Smart Speaker.
     *
     * MediaPlaybackCluster supports optional features that you can enable with the MediaPlaybackCluster.with() factory
     * method.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10
     */
    export const Cluster = ExtensibleCluster({
        ...Base,

        /**
         * Use this factory method to create a MediaPlayback cluster with support for optional features. Include each
         * {@link Feature} you wish to support.
         *
         * @param features the optional features to support
         * @returns a MediaPlayback cluster with specified features enabled
         * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
         */
        factory: <T extends `${Feature}`[]>(...features: [...T]) => {
            validateFeatureSelection(features, Feature);
            const cluster = CreateCluster({ ...Base, supportedFeatures: BitFlags(Base.features, ...features) });
            extendCluster(cluster, AdvancedSeekComponent, { advancedSeek: true });
            extendCluster(cluster, VariableSpeedComponent, { variableSpeed: true });
            return cluster as unknown as Extension<BitFlags<typeof Base.features, T>>;
        }
    });

    export type Extension<SF extends TypeFromPartialBitSchema<typeof Base.features>> =
        ClusterForBaseCluster<typeof Base, SF>
        & { supportedFeatures: SF }
        & (SF extends { advancedSeek: true } ? typeof AdvancedSeekComponent : {})
        & (SF extends { variableSpeed: true } ? typeof VariableSpeedComponent : {});
    const AS = { advancedSeek: true };
    const VS = { variableSpeed: true };

    /**
     * This cluster supports all MediaPlayback features. It may support illegal feature combinations.
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
            ...Cluster.attributes,
            startTime: AsConditional(AdvancedSeekComponent.attributes.startTime, { mandatoryIf: [AS] }),
            duration: AsConditional(AdvancedSeekComponent.attributes.duration, { mandatoryIf: [AS] }),
            sampledPosition: AsConditional(AdvancedSeekComponent.attributes.sampledPosition, { mandatoryIf: [AS] }),
            playbackSpeed: AsConditional(AdvancedSeekComponent.attributes.playbackSpeed, { mandatoryIf: [AS] }),
            seekRangeEnd: AsConditional(AdvancedSeekComponent.attributes.seekRangeEnd, { mandatoryIf: [AS] }),
            seekRangeStart: AsConditional(AdvancedSeekComponent.attributes.seekRangeStart, { mandatoryIf: [AS] })
        },

        commands: {
            ...Cluster.commands,
            rewind: AsConditional(VariableSpeedComponent.commands.rewind, { mandatoryIf: [VS] }),
            fastForward: AsConditional(VariableSpeedComponent.commands.fastForward, { mandatoryIf: [VS] }),
            seek: AsConditional(AdvancedSeekComponent.commands.seek, { mandatoryIf: [AS] })
        }
    });
}

export type MediaPlaybackCluster = typeof MediaPlayback.Cluster;
export const MediaPlaybackCluster = MediaPlayback.Cluster;
