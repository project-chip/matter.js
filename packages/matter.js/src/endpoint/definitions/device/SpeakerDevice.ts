/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OnOffServer as BaseOnOffServer } from "../../../behavior/definitions/on-off/OnOffServer.js";
import {
    LevelControlServer as BaseLevelControlServer
} from "../../../behavior/definitions/level-control/LevelControlServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * This defines conformance to the Speaker device type. This feature controls the speaker volume of the device.
 *
 * To control unmute/mute, the On/Off cluster shall be used. A value of TRUE for the OnOff attribute shall represent
 * the volume on (not muted) state, while a value of FALSE shall represent the volume off (muted) state. For volume
 * level control, the Level cluster shall be used.
 *
 * A dedicated endpoint is needed because the On/Off cluster can also be used for other purposes, such as for power
 * control.
 *
 * The decision to use Level and On/Off clusters for volume (rather than defining a new audio control cluster) was made
 * in order to treat volume in a fashion consistent with lighting which also uses these clusters and has matching
 * functional requirements.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 10.4
 */
export interface SpeakerDevice extends Identity<typeof SpeakerDeviceDefinition> {}

export namespace SpeakerRequirements {
    /**
     * The {@link OnOff} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const OnOffServer = BaseOnOffServer;

    /**
     * The {@link LevelControl} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const LevelControlServer = BaseLevelControlServer;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = { mandatory: { OnOff: OnOffServer, LevelControl: LevelControlServer } };
}

export const SpeakerDeviceDefinition = MutableEndpoint({
    name: "Speaker",
    deviceType: 0x22,
    deviceRevision: 1,
    requirements: SpeakerRequirements,
    behaviors: SupportedBehaviors(
        SpeakerRequirements.server.mandatory.OnOff,
        SpeakerRequirements.server.mandatory.LevelControl
    )
});

export const SpeakerDevice: SpeakerDevice = SpeakerDeviceDefinition;
