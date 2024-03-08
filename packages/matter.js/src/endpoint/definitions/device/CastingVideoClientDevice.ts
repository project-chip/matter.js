/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OnOffBehavior as BaseOnOffBehavior } from "../../../behavior/definitions/on-off/OnOffBehavior.js";
import {
    KeypadInputBehavior as BaseKeypadInputBehavior
} from "../../../behavior/definitions/keypad-input/KeypadInputBehavior.js";
import {
    ContentLauncherBehavior as BaseContentLauncherBehavior
} from "../../../behavior/definitions/content-launcher/ContentLauncherBehavior.js";
import {
    ApplicationBasicBehavior as BaseApplicationBasicBehavior
} from "../../../behavior/definitions/application-basic/ApplicationBasicBehavior.js";
import {
    LevelControlBehavior as BaseLevelControlBehavior
} from "../../../behavior/definitions/level-control/LevelControlBehavior.js";
import { WakeOnLanBehavior as BaseWakeOnLanBehavior } from "../../../behavior/definitions/wake-on-lan/WakeOnLanBehavior.js";
import { ChannelBehavior as BaseChannelBehavior } from "../../../behavior/definitions/channel/ChannelBehavior.js";
import {
    TargetNavigatorBehavior as BaseTargetNavigatorBehavior
} from "../../../behavior/definitions/target-navigator/TargetNavigatorBehavior.js";
import {
    MediaPlaybackBehavior as BaseMediaPlaybackBehavior
} from "../../../behavior/definitions/media-playback/MediaPlaybackBehavior.js";
import {
    MediaInputBehavior as BaseMediaInputBehavior
} from "../../../behavior/definitions/media-input/MediaInputBehavior.js";
import { LowPowerBehavior as BaseLowPowerBehavior } from "../../../behavior/definitions/low-power/LowPowerBehavior.js";
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
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * This defines conformance to the Casting Video Client device type.
 *
 * A Casting Video Client is a client that can launch content on a Casting Video Player, for example, a Smart Speaker
 * or a Content Provider phone app.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 10.6
 */
export interface CastingVideoClientDevice extends Identity<typeof CastingVideoClientDeviceDefinition> {}

export namespace CastingVideoClientRequirements {
    /**
     * The {@link OnOff} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const OnOffBehavior = BaseOnOffBehavior;

    /**
     * The {@link KeypadInput} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const KeypadInputBehavior = BaseKeypadInputBehavior;

    /**
     * The {@link ContentLauncher} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const ContentLauncherBehavior = BaseContentLauncherBehavior;

    /**
     * The {@link ApplicationBasic} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const ApplicationBasicBehavior = BaseApplicationBasicBehavior;

    /**
     * The {@link LevelControl} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const LevelControlBehavior = BaseLevelControlBehavior;

    /**
     * The {@link WakeOnLan} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const WakeOnLanBehavior = BaseWakeOnLanBehavior;

    /**
     * The {@link Channel} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const ChannelBehavior = BaseChannelBehavior;

    /**
     * The {@link TargetNavigator} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const TargetNavigatorBehavior = BaseTargetNavigatorBehavior;

    /**
     * The {@link MediaPlayback} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const MediaPlaybackBehavior = BaseMediaPlaybackBehavior;

    /**
     * The {@link MediaInput} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const MediaInputBehavior = BaseMediaInputBehavior;

    /**
     * The {@link LowPower} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const LowPowerBehavior = BaseLowPowerBehavior;

    /**
     * The {@link AudioOutput} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const AudioOutputBehavior = BaseAudioOutputBehavior;

    /**
     * The {@link ApplicationLauncher} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const ApplicationLauncherBehavior = BaseApplicationLauncherBehavior;

    /**
     * The {@link AccountLogin} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const AccountLoginBehavior = BaseAccountLoginBehavior;

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    export const client = {
        mandatory: {
            OnOff: OnOffBehavior,
            KeypadInput: KeypadInputBehavior,
            ContentLauncher: ContentLauncherBehavior,
            ApplicationBasic: ApplicationBasicBehavior
        },

        optional: {
            LevelControl: LevelControlBehavior,
            WakeOnLan: WakeOnLanBehavior,
            Channel: ChannelBehavior,
            TargetNavigator: TargetNavigatorBehavior,
            MediaPlayback: MediaPlaybackBehavior,
            MediaInput: MediaInputBehavior,
            LowPower: LowPowerBehavior,
            AudioOutput: AudioOutputBehavior,
            ApplicationLauncher: ApplicationLauncherBehavior,
            AccountLogin: AccountLoginBehavior
        }
    };
}

export const CastingVideoClientDeviceDefinition = MutableEndpoint({
    name: "CastingVideoClient",
    deviceType: 0x29,
    deviceRevision: 1,
    requirements: CastingVideoClientRequirements,
    behaviors: SupportedBehaviors()
});

export const CastingVideoClientDevice: CastingVideoClientDevice = CastingVideoClientDeviceDefinition;
