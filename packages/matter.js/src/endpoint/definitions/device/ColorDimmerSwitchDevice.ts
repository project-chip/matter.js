/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer as BaseIdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import { IdentifyBehavior as BaseIdentifyBehavior } from "../../../behavior/definitions/identify/IdentifyBehavior.js";
import { OnOffBehavior as BaseOnOffBehavior } from "../../../behavior/definitions/on-off/OnOffBehavior.js";
import {
    LevelControlBehavior as BaseLevelControlBehavior
} from "../../../behavior/definitions/level-control/LevelControlBehavior.js";
import {
    ColorControlBehavior as BaseColorControlBehavior
} from "../../../behavior/definitions/color-control/ColorControlBehavior.js";
import { GroupsBehavior as BaseGroupsBehavior } from "../../../behavior/definitions/groups/GroupsBehavior.js";
import { ScenesBehavior as BaseScenesBehavior } from "../../../behavior/definitions/scenes/ScenesBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * A Color Dimmer Switch is a controller device that, when bound to a lighting device such as an Extended Color Light,
 * is capable of being used to adjust the color of the light being emitted.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 6.3
 */
export interface ColorDimmerSwitchDevice extends Identity<typeof ColorDimmerSwitchDeviceDefinition> {}

export namespace ColorDimmerSwitchRequirements {
    /**
     * The {@link Identify} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const IdentifyServer = BaseIdentifyServer;

    /**
     * The {@link Identify} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const IdentifyBehavior = BaseIdentifyBehavior;

    /**
     * The {@link OnOff} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const OnOffBehavior = BaseOnOffBehavior;

    /**
     * The {@link LevelControl} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const LevelControlBehavior = BaseLevelControlBehavior;

    /**
     * The {@link ColorControl} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const ColorControlBehavior = BaseColorControlBehavior;

    /**
     * The {@link Groups} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const GroupsBehavior = BaseGroupsBehavior;

    /**
     * The {@link Scenes} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const ScenesBehavior = BaseScenesBehavior;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = { mandatory: { Identify: IdentifyServer } };

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    export const client = {
        mandatory: {
            Identify: IdentifyBehavior,
            OnOff: OnOffBehavior,
            LevelControl: LevelControlBehavior,
            ColorControl: ColorControlBehavior
        },

        optional: { Groups: GroupsBehavior, Scenes: ScenesBehavior }
    };
}

export const ColorDimmerSwitchDeviceDefinition = MutableEndpoint({
    name: "ColorDimmerSwitch",
    deviceType: 0x105,
    deviceRevision: 2,
    requirements: ColorDimmerSwitchRequirements,
    behaviors: SupportedBehaviors(ColorDimmerSwitchRequirements.server.mandatory.Identify)
});

export const ColorDimmerSwitchDevice: ColorDimmerSwitchDevice = ColorDimmerSwitchDeviceDefinition;
