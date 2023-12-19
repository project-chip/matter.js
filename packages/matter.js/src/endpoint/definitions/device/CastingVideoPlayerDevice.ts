/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OnOffServer } from "../../../behavior/definitions/on-off/OnOffServer.js";
import { MediaPlaybackServer } from "../../../behavior/definitions/media-playback/MediaPlaybackServer.js";
import { KeypadInputServer } from "../../../behavior/definitions/keypad-input/KeypadInputServer.js";
import { ContentLauncherServer } from "../../../behavior/definitions/content-launcher/ContentLauncherServer.js";
import { WakeOnLanServer } from "../../../behavior/definitions/wake-on-lan/WakeOnLanServer.js";
import { ChannelServer } from "../../../behavior/definitions/channel/ChannelServer.js";
import { TargetNavigatorServer } from "../../../behavior/definitions/target-navigator/TargetNavigatorServer.js";
import { MediaInputServer } from "../../../behavior/definitions/media-input/MediaInputServer.js";
import { LowPowerServer } from "../../../behavior/definitions/low-power/LowPowerServer.js";
import { AudioOutputServer } from "../../../behavior/definitions/audio-output/AudioOutputServer.js";
import { ApplicationLauncherServer } from "../../../behavior/definitions/application-launcher/ApplicationLauncherServer.js";
import { AccountLoginServer } from "../../../behavior/definitions/account-login/AccountLoginServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const CastingVideoPlayerRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: {
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
            ApplicationLauncher: ApplicationLauncherServer.with("ApplicationPlatform"),
            AccountLogin: AccountLoginServer
        }
    }
};

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

export const CastingVideoPlayerDevice: CastingVideoPlayerDevice = CastingVideoPlayerDeviceDefinition;
