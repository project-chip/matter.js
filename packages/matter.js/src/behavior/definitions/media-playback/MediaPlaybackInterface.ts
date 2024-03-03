/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { MediaPlayback } from "../../../cluster/definitions/MediaPlaybackCluster.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * This command shall be generated in response to various Playback Commands.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.12
 */
export type PlaybackResponse = TypeFromSchema<typeof MediaPlayback.TlvPlaybackResponse>;

/**
 * Upon receipt, this shall Skip forward in the media by the given number of milliseconds.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.9
 */
export type SkipForwardRequest = TypeFromSchema<typeof MediaPlayback.TlvSkipForwardRequest>;

/**
 * Upon receipt, this shall Skip backward in the media by the given number of milliseconds.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.10
 */
export type SkipBackwardRequest = TypeFromSchema<typeof MediaPlayback.TlvSkipBackwardRequest>;

/**
 * Upon receipt, this shall change the playback position in the media to the given position.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.11
 */
export type SeekRequest = TypeFromSchema<typeof MediaPlayback.TlvSeekRequest>;

export namespace MediaPlaybackInterface {
    export interface Base {
        /**
         * Upon receipt, this shall play media. If content is currently in a FastForward or Rewind state. Play shall
         * return media to normal playback speed.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.1
         */
        play(): MaybePromise<PlaybackResponse>;

        /**
         * Upon receipt, this shall pause playback of the media.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.2
         */
        pause(): MaybePromise<PlaybackResponse>;

        /**
         * Upon receipt, this shall stop playback of the media. User-visible outcome is context-specific. This may
         * navigate the user back to the location from where the media was originally launched.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.3
         */
        stop(): MaybePromise<PlaybackResponse>;

        /**
         * Upon receipt, this shall Start Over with the current media playback item.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.4
         */
        startOver(): MaybePromise<PlaybackResponse>;

        /**
         * Upon receipt, this shall cause the handler to be invoked for "Previous". User experience is
         * context-specific. This will often Go back to the previous media playback item.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.5
         */
        previous(): MaybePromise<PlaybackResponse>;

        /**
         * Upon receipt, this shall cause the handler to be invoked for "Next". User experience is context- specific.
         * This will often Go forward to the next media playback item.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.6
         */
        next(): MaybePromise<PlaybackResponse>;

        /**
         * Upon receipt, this shall Skip forward in the media by the given number of milliseconds.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.9
         */
        skipForward(request: SkipForwardRequest): MaybePromise<PlaybackResponse>;

        /**
         * Upon receipt, this shall Skip backward in the media by the given number of milliseconds.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.10
         */
        skipBackward(request: SkipBackwardRequest): MaybePromise<PlaybackResponse>;
    }

    export interface AdvancedSeek {
        /**
         * Upon receipt, this shall change the playback position in the media to the given position.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.11
         */
        seek(request: SeekRequest): MaybePromise<PlaybackResponse>;
    }

    export interface VariableSpeed {
        /**
         * Upon receipt, this shall start playback of the media backward in case the media is currently playing in the
         * forward direction or is not playing. If the playback is already happening in the backwards direction receipt
         * of this command shall increase the speed of the media playback back
         *
         * wards.
         *
         * Different "rewind" speeds may be be reflected on the media playback device based upon the number of
         * sequential calls to this function and the capability of the device. This is to avoid needing to define every
         * speed (multiple fast, slow motion, etc). If the PlaybackSpeed attribute is supported it shall be updated to
         * reflect the new speed of playback. If the playback speed cannot be changed for the media being played(for
         * example, in live streaming content not supporting seek), the status of NOT_ALLOWED shall be returned. If the
         * playback speed has reached the maximum supported speed for media playing backwards, the status of
         * SPEED_OUT_OF_RANGE shall be returned.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.7
         */
        rewind(): MaybePromise<PlaybackResponse>;

        /**
         * Upon receipt, this shall start playback of the media in the forward direction in case the media is currently
         * playing in the backward direction or is not playing. If the playback is already happening in the forward
         * direction receipt of this command shall increase the speed of the media playback.
         *
         * Different "fast-forward" speeds may be be reflected on the media playback device based upon the number of
         * sequential calls to this function and the capability of the device. This is to avoid needing to define every
         * speed (multiple fast, slow motion, etc). If the PlaybackSpeed attribute is supported it shall be updated to
         * reflect the new speed of playback. If the playback speed cannot be changed for the media being played(for
         * example, in live streaming content not supporting seek), the status of NOT_ALLOWED shall be returned. If the
         * playback speed has reached the maximum supported speed for media playing forward, the status of
         * SPEED_OUT_OF_RANGE shall be returned.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.8
         */
        fastForward(): MaybePromise<PlaybackResponse>;
    }
}

export type MediaPlaybackInterface = {
    components: [
        { flags: {}, methods: MediaPlaybackInterface.Base },
        { flags: { advancedSeek: true }, methods: MediaPlaybackInterface.AdvancedSeek },
        { flags: { variableSpeed: true }, methods: MediaPlaybackInterface.VariableSpeed }
    ]
};
