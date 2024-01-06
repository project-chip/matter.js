/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OnOffBehavior } from "../../../behavior/definitions/on-off/OnOffBehavior.js";
import { MediaPlaybackBehavior } from "../../../behavior/definitions/media-playback/MediaPlaybackBehavior.js";
import { KeypadInputBehavior } from "../../../behavior/definitions/keypad-input/KeypadInputBehavior.js";
import { LevelControlBehavior } from "../../../behavior/definitions/level-control/LevelControlBehavior.js";
import { WakeOnLanBehavior } from "../../../behavior/definitions/wake-on-lan/WakeOnLanBehavior.js";
import { ChannelBehavior } from "../../../behavior/definitions/channel/ChannelBehavior.js";
import { TargetNavigatorBehavior } from "../../../behavior/definitions/target-navigator/TargetNavigatorBehavior.js";
import { MediaInputBehavior } from "../../../behavior/definitions/media-input/MediaInputBehavior.js";
import { LowPowerBehavior } from "../../../behavior/definitions/low-power/LowPowerBehavior.js";
import { ContentLauncherBehavior } from "../../../behavior/definitions/content-launcher/ContentLauncherBehavior.js";
import { AudioOutputBehavior } from "../../../behavior/definitions/audio-output/AudioOutputBehavior.js";
import {
    ApplicationLauncherBehavior
} from "../../../behavior/definitions/application-launcher/ApplicationLauncherBehavior.js";
import { AccountLoginBehavior } from "../../../behavior/definitions/account-login/AccountLoginBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const VideoRemoteControlRequirements = {
    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    client: {
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
    }
};

export const VideoRemoteControlDeviceDefinition = MutableEndpoint({
    name: "VideoRemoteControl",
    deviceType: 0x2a,
    deviceRevision: 1,
    requirements: VideoRemoteControlRequirements,
    behaviors: SupportedBehaviors()
});

/**
 * This defines conformance to the Video Remote Control device type.
 *
 * A Video Remote Control is a client that can control a Video Player, for example, a traditional universal remote
 * control.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 10.7
 */
export interface VideoRemoteControlDevice extends Identity<typeof VideoRemoteControlDeviceDefinition> {}

export const VideoRemoteControlDevice: VideoRemoteControlDevice = VideoRemoteControlDeviceDefinition;
