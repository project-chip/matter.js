/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OnOffServer } from "../../../behavior/definitions/on-off/OnOffServer.js";
import { MediaPlaybackServer } from "../../../behavior/definitions/media-playback/MediaPlaybackServer.js";
import { KeypadInputServer } from "../../../behavior/definitions/keypad-input/KeypadInputServer.js";
import { WakeOnLanServer } from "../../../behavior/definitions/wake-on-lan/WakeOnLanServer.js";
import { ChannelServer } from "../../../behavior/definitions/channel/ChannelServer.js";
import { TargetNavigatorServer } from "../../../behavior/definitions/target-navigator/TargetNavigatorServer.js";
import { MediaInputServer } from "../../../behavior/definitions/media-input/MediaInputServer.js";
import { LowPowerServer } from "../../../behavior/definitions/low-power/LowPowerServer.js";
import { AudioOutputServer } from "../../../behavior/definitions/audio-output/AudioOutputServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const BasicVideoPlayerRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: {
        mandatory: { OnOff: OnOffServer, MediaPlayback: MediaPlaybackServer, KeypadInput: KeypadInputServer },

        optional: {
            WakeOnLan: WakeOnLanServer,
            Channel: ChannelServer,
            TargetNavigator: TargetNavigatorServer,
            MediaInput: MediaInputServer,
            LowPower: LowPowerServer,
            AudioOutput: AudioOutputServer
        }
    }
};

export const BasicVideoPlayerDeviceDefinition = MutableEndpoint({
    name: "BasicVideoPlayer",
    deviceType: 0x28,
    deviceRevision: 1,
    requirements: BasicVideoPlayerRequirements,
    behaviors: SupportedBehaviors(
        BasicVideoPlayerRequirements.server.mandatory.OnOff,
        BasicVideoPlayerRequirements.server.mandatory.MediaPlayback,
        BasicVideoPlayerRequirements.server.mandatory.KeypadInput
    )
});

/**
 * This defines conformance to the Basic Video Player device type.
 *
 * A Video Player (either Basic or Casting) represents a device that is able to play media to a physical output or to a
 * display screen which is part of the device.
 *
 * A Basic Video Player has playback controls (play, pause, etc.) and keypad remote controls (up, down, number input),
 * but is not able to launch content and is not a content app platform (the Casting Video Player device type is used
 * for these functions).
 *
 * For example, a Basic Video Player can be a traditional TV device a physical media playback device such as a DVD
 * Player, or a device that provides input to another device like a TV or computer monitor.
 *
 * Please see Video Player Architecture for additional Basic Video Player requirements relating to Video Player device
 * endpoint composition, commissioning, feature representation in clusters, and UI context.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 10.2
 */
export interface BasicVideoPlayerDevice extends Identity<typeof BasicVideoPlayerDeviceDefinition> {}

export const BasicVideoPlayerDevice: BasicVideoPlayerDevice = BasicVideoPlayerDeviceDefinition;
