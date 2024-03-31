/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OnOffBehavior as BaseOnOffBehavior } from "../../../behavior/definitions/on-off/OnOffBehavior.js";
import {
    MediaPlaybackBehavior as BaseMediaPlaybackBehavior
} from "../../../behavior/definitions/media-playback/MediaPlaybackBehavior.js";
import {
    KeypadInputBehavior as BaseKeypadInputBehavior
} from "../../../behavior/definitions/keypad-input/KeypadInputBehavior.js";
import {
    LevelControlBehavior as BaseLevelControlBehavior
} from "../../../behavior/definitions/level-control/LevelControlBehavior.js";
import { WakeOnLanBehavior as BaseWakeOnLanBehavior } from "../../../behavior/definitions/wake-on-lan/WakeOnLanBehavior.js";
import { ChannelBehavior as BaseChannelBehavior } from "../../../behavior/definitions/channel/ChannelBehavior.js";
import {
    TargetNavigatorBehavior as BaseTargetNavigatorBehavior
} from "../../../behavior/definitions/target-navigator/TargetNavigatorBehavior.js";
import {
    MediaInputBehavior as BaseMediaInputBehavior
} from "../../../behavior/definitions/media-input/MediaInputBehavior.js";
import { LowPowerBehavior as BaseLowPowerBehavior } from "../../../behavior/definitions/low-power/LowPowerBehavior.js";
import {
    ContentLauncherBehavior as BaseContentLauncherBehavior
} from "../../../behavior/definitions/content-launcher/ContentLauncherBehavior.js";
import {
    AudioOutputBehavior as BaseAudioOutputBehavior
} from "../../../behavior/definitions/audio-output/AudioOutputBehavior.js";
import {
    ApplicationLauncherBehavior as BaseApplicationLauncherBehavior
} from "../../../behavior/definitions/application-launcher/ApplicationLauncherBehavior.js";
import {
    AccountLoginBehavior as BaseAccountLoginBehavior
} from "../../../behavior/definitions/account-login/AccountLoginBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";

/**
 * This defines conformance to the Video Remote Control device type.
 *
 * A Video Remote Control is a client that can control a Video Player, for example, a traditional universal remote
 * control.
 *
 * @see {@link MatterSpecification.v11.Device} § 10.7
 */
export interface VideoRemoteControlDevice extends Identity<typeof VideoRemoteControlDeviceDefinition> {}

export namespace VideoRemoteControlRequirements {
    /**
     * The OnOff cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link OnOffBehavior} for convenience.
     */
    export const OnOffBehavior = BaseOnOffBehavior;

    /**
     * The MediaPlayback cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link MediaPlaybackBehavior} for convenience.
     */
    export const MediaPlaybackBehavior = BaseMediaPlaybackBehavior;

    /**
     * The KeypadInput cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link KeypadInputBehavior} for convenience.
     */
    export const KeypadInputBehavior = BaseKeypadInputBehavior;

    /**
     * The LevelControl cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link LevelControlBehavior} for convenience.
     */
    export const LevelControlBehavior = BaseLevelControlBehavior;

    /**
     * The WakeOnLan cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link WakeOnLanBehavior} for convenience.
     */
    export const WakeOnLanBehavior = BaseWakeOnLanBehavior;

    /**
     * The Channel cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link ChannelBehavior} for convenience.
     */
    export const ChannelBehavior = BaseChannelBehavior;

    /**
     * The TargetNavigator cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link TargetNavigatorBehavior} for convenience.
     */
    export const TargetNavigatorBehavior = BaseTargetNavigatorBehavior;

    /**
     * The MediaInput cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link MediaInputBehavior} for convenience.
     */
    export const MediaInputBehavior = BaseMediaInputBehavior;

    /**
     * The LowPower cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link LowPowerBehavior} for convenience.
     */
    export const LowPowerBehavior = BaseLowPowerBehavior;

    /**
     * The ContentLauncher cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link ContentLauncherBehavior} for convenience.
     */
    export const ContentLauncherBehavior = BaseContentLauncherBehavior;

    /**
     * The AudioOutput cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link AudioOutputBehavior} for convenience.
     */
    export const AudioOutputBehavior = BaseAudioOutputBehavior;

    /**
     * The ApplicationLauncher cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link ApplicationLauncherBehavior} for convenience.
     */
    export const ApplicationLauncherBehavior = BaseApplicationLauncherBehavior;

    /**
     * The AccountLogin cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link AccountLoginBehavior} for convenience.
     */
    export const AccountLoginBehavior = BaseAccountLoginBehavior;

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    export const client = {
        mandatory: { OnOff: OnOffBehavior, MediaPlayback: MediaPlaybackBehavior, KeypadInput: KeypadInputBehavior },

        optional: {
            LevelControl: LevelControlBehavior,
            WakeOnLan: WakeOnLanBehavior,
            Channel: ChannelBehavior,
            TargetNavigator: TargetNavigatorBehavior,
            MediaInput: MediaInputBehavior,
            LowPower: LowPowerBehavior,
            ContentLauncher: ContentLauncherBehavior,
            AudioOutput: AudioOutputBehavior,
            ApplicationLauncher: ApplicationLauncherBehavior,
            AccountLogin: AccountLoginBehavior
        }
    };
}

export const VideoRemoteControlDeviceDefinition = MutableEndpoint({
    name: "VideoRemoteControl",
    deviceType: 0x2a,
    deviceRevision: 1,
    requirements: VideoRemoteControlRequirements,
    behaviors: SupportedBehaviors()
});

export const VideoRemoteControlDevice: VideoRemoteControlDevice = VideoRemoteControlDeviceDefinition;
