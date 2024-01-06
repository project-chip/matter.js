/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OnOffBehavior } from "../../../behavior/definitions/on-off/OnOffBehavior.js";
import { KeypadInputBehavior } from "../../../behavior/definitions/keypad-input/KeypadInputBehavior.js";
import { ContentLauncherBehavior } from "../../../behavior/definitions/content-launcher/ContentLauncherBehavior.js";
import { ApplicationBasicBehavior } from "../../../behavior/definitions/application-basic/ApplicationBasicBehavior.js";
import { LevelControlBehavior } from "../../../behavior/definitions/level-control/LevelControlBehavior.js";
import { WakeOnLanBehavior } from "../../../behavior/definitions/wake-on-lan/WakeOnLanBehavior.js";
import { ChannelBehavior } from "../../../behavior/definitions/channel/ChannelBehavior.js";
import { TargetNavigatorBehavior } from "../../../behavior/definitions/target-navigator/TargetNavigatorBehavior.js";
import { MediaPlaybackBehavior } from "../../../behavior/definitions/media-playback/MediaPlaybackBehavior.js";
import { MediaInputBehavior } from "../../../behavior/definitions/media-input/MediaInputBehavior.js";
import { LowPowerBehavior } from "../../../behavior/definitions/low-power/LowPowerBehavior.js";
import { AudioOutputBehavior } from "../../../behavior/definitions/audio-output/AudioOutputBehavior.js";
import {
    ApplicationLauncherBehavior
} from "../../../behavior/definitions/application-launcher/ApplicationLauncherBehavior.js";
import { AccountLoginBehavior } from "../../../behavior/definitions/account-login/AccountLoginBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const CastingVideoClientRequirements = {
    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    client: {
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
    }
};

export const CastingVideoClientDeviceDefinition = MutableEndpoint({
    name: "CastingVideoClient",
    deviceType: 0x29,
    deviceRevision: 1,
    requirements: CastingVideoClientRequirements,
    behaviors: SupportedBehaviors()
});

/**
 * This defines conformance to the Casting Video Client device type.
 *
 * A Casting Video Client is a client that can launch content on a Casting Video Player, for example, a Smart Speaker
 * or a Content Provider phone app.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 10.6
 */
export interface CastingVideoClientDevice extends Identity<typeof CastingVideoClientDeviceDefinition> {}

export const CastingVideoClientDevice: CastingVideoClientDevice = CastingVideoClientDeviceDefinition;
