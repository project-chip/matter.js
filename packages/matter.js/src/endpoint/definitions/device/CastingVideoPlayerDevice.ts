/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OnOffServer as BaseOnOffServer } from "../../../behavior/definitions/on-off/OnOffServer.js";
import {
    MediaPlaybackServer as BaseMediaPlaybackServer
} from "../../../behavior/definitions/media-playback/MediaPlaybackServer.js";
import {
    KeypadInputServer as BaseKeypadInputServer
} from "../../../behavior/definitions/keypad-input/KeypadInputServer.js";
import {
    ContentLauncherServer as BaseContentLauncherServer
} from "../../../behavior/definitions/content-launcher/ContentLauncherServer.js";
import { WakeOnLanServer as BaseWakeOnLanServer } from "../../../behavior/definitions/wake-on-lan/WakeOnLanServer.js";
import { ChannelServer as BaseChannelServer } from "../../../behavior/definitions/channel/ChannelServer.js";
import {
    TargetNavigatorServer as BaseTargetNavigatorServer
} from "../../../behavior/definitions/target-navigator/TargetNavigatorServer.js";
import { MediaInputServer as BaseMediaInputServer } from "../../../behavior/definitions/media-input/MediaInputServer.js";
import { LowPowerServer as BaseLowPowerServer } from "../../../behavior/definitions/low-power/LowPowerServer.js";
import {
    AudioOutputServer as BaseAudioOutputServer
} from "../../../behavior/definitions/audio-output/AudioOutputServer.js";
import {
    ApplicationLauncherServer as BaseApplicationLauncherServer
} from "../../../behavior/definitions/application-launcher/ApplicationLauncherServer.js";
import {
    AccountLoginServer as BaseAccountLoginServer
} from "../../../behavior/definitions/account-login/AccountLoginServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * This defines conformance to the Casting Video Player device type.
 *
 * A Video Player (either Basic or Casting) represents a device that is able to play media to a physical output or to a
 * display screen which is part of the device.
 *
 * A Casting Video Player has basic controls for playback (play, pause, etc.) and keypad input (up, down, number
 * input), and is able to launch content.
 *
 * For example, a Casting Video Player can be a smart TV device, a TV Set Top Box, or a content streaming device that
 * provides input to another device like a TV or computer monitor.
 *
 * Please see Video Player Architecture for additional Casting Video Player requirements relating to Video Player
 * device endpoint composition, commissioning, feature representation in clusters, and UI context.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 10.3
 */
export interface CastingVideoPlayerDevice extends Identity<typeof CastingVideoPlayerDeviceDefinition> {}

export namespace CastingVideoPlayerRequirements {
    /**
     * The {@link OnOff} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const OnOffServer = BaseOnOffServer;

    /**
     * The {@link MediaPlayback} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const MediaPlaybackServer = BaseMediaPlaybackServer;

    /**
     * The {@link KeypadInput} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const KeypadInputServer = BaseKeypadInputServer;

    /**
     * The {@link ContentLauncher} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const ContentLauncherServer = BaseContentLauncherServer;

    /**
     * The {@link WakeOnLan} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const WakeOnLanServer = BaseWakeOnLanServer;

    /**
     * The {@link Channel} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const ChannelServer = BaseChannelServer;

    /**
     * The {@link TargetNavigator} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const TargetNavigatorServer = BaseTargetNavigatorServer;

    /**
     * The {@link MediaInput} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const MediaInputServer = BaseMediaInputServer;

    /**
     * The {@link LowPower} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const LowPowerServer = BaseLowPowerServer;

    /**
     * The {@link AudioOutput} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const AudioOutputServer = BaseAudioOutputServer;

    /**
     * The {@link ApplicationLauncher} cluster is optional per the Matter specification
     *
     * This version of {@link ApplicationLauncherServer} is specialized per the specification.
     */
    export const ApplicationLauncherServer = BaseApplicationLauncherServer.with("ApplicationPlatform");

    /**
     * The {@link AccountLogin} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const AccountLoginServer = BaseAccountLoginServer;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = {
        mandatory: {
            OnOff: OnOffServer,
            MediaPlayback: MediaPlaybackServer,
            KeypadInput: KeypadInputServer,
            ContentLauncher: ContentLauncherServer
        },

        optional: {
            WakeOnLan: WakeOnLanServer,
            Channel: ChannelServer,
            TargetNavigator: TargetNavigatorServer,
            MediaInput: MediaInputServer,
            LowPower: LowPowerServer,
            AudioOutput: AudioOutputServer,
            ApplicationLauncher: ApplicationLauncherServer,
            AccountLogin: AccountLoginServer
        }
    };
}

export const CastingVideoPlayerDeviceDefinition = MutableEndpoint({
    name: "CastingVideoPlayer",
    deviceType: 0x23,
    deviceRevision: 1,
    requirements: CastingVideoPlayerRequirements,

    behaviors: SupportedBehaviors(
        CastingVideoPlayerRequirements.server.mandatory.OnOff,
        CastingVideoPlayerRequirements.server.mandatory.MediaPlayback,
        CastingVideoPlayerRequirements.server.mandatory.KeypadInput,
        CastingVideoPlayerRequirements.server.mandatory.ContentLauncher
    )
});

export const CastingVideoPlayerDevice: CastingVideoPlayerDevice = CastingVideoPlayerDeviceDefinition;
