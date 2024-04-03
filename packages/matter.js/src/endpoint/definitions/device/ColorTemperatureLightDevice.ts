/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer as BaseIdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import { GroupsServer as BaseGroupsServer } from "../../../behavior/definitions/groups/GroupsServer.js";
import { ScenesServer as BaseScenesServer } from "../../../behavior/definitions/scenes/ScenesServer.js";
import { OnOffServer as BaseOnOffServer } from "../../../behavior/definitions/on-off/OnOffServer.js";
import {
    LevelControlServer as BaseLevelControlServer
} from "../../../behavior/definitions/level-control/LevelControlServer.js";
import {
    ColorControlServer as BaseColorControlServer
} from "../../../behavior/definitions/color-control/ColorControlServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";

/**
 * A Color Temperature Light is a lighting device that is capable of being switched on or off, the intensity of its
 * light adjusted, and its color temperature adjusted by means of a bound controller device such as a Color Dimmer
 * Switch.
 *
 * @see {@link MatterSpecification.v11.Device} § 4.3
 */
export interface ColorTemperatureLightDevice extends Identity<typeof ColorTemperatureLightDeviceDefinition> {}

export namespace ColorTemperatureLightRequirements {
    /**
     * The Identify cluster is required by the Matter specification
     *
     * This version of {@link IdentifyServer} is specialized per the specification.
     */
    export const IdentifyServer = BaseIdentifyServer.alter({ commands: { triggerEffect: { optional: false } } });

    /**
     * The Groups cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link GroupsServer} for convenience.
     */
    export const GroupsServer = BaseGroupsServer;

    /**
     * The Scenes cluster is required by the Matter specification
     *
     * This version of {@link ScenesServer} is specialized per the specification.
     */
    export const ScenesServer = BaseScenesServer
        .alter({
            commands: {
                enhancedAddScene: { optional: false },
                enhancedViewScene: { optional: false },
                copyScene: { optional: false }
            }
        });

    /**
     * The OnOff cluster is required by the Matter specification
     *
     * This version of {@link OnOffServer} is specialized per the specification.
     */
    export const OnOffServer = BaseOnOffServer.with("LevelControlForLighting");

    /**
     * The LevelControl cluster is required by the Matter specification
     *
     * This version of {@link LevelControlServer} is specialized per the specification.
     */
    export const LevelControlServer = BaseLevelControlServer
        .with("OnOff", "Lighting")
        .alter({
            attributes: {
                currentLevel: { min: 1, max: 254 },
                minLevel: { default: 1, min: 1, max: 2 },
                maxLevel: { default: 254, min: 254, max: 255 }
            }
        });

    /**
     * The ColorControl cluster is required by the Matter specification
     *
     * This version of {@link ColorControlServer} is specialized per the specification.
     */
    export const ColorControlServer = BaseColorControlServer
        .with("ColorTemperature")
        .alter({ attributes: { remainingTime: { optional: false } } });

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = {
        mandatory: {
            Identify: IdentifyServer,
            Groups: GroupsServer,
            Scenes: ScenesServer,
            OnOff: OnOffServer,
            LevelControl: LevelControlServer,
            ColorControl: ColorControlServer
        }
    };
}

export const ColorTemperatureLightDeviceDefinition = MutableEndpoint({
    name: "ColorTemperatureLight",
    deviceType: 0x10c,
    deviceRevision: 2,
    requirements: ColorTemperatureLightRequirements,

    behaviors: SupportedBehaviors(
        ColorTemperatureLightRequirements.server.mandatory.Identify,
        ColorTemperatureLightRequirements.server.mandatory.Groups,
        ColorTemperatureLightRequirements.server.mandatory.Scenes,
        ColorTemperatureLightRequirements.server.mandatory.OnOff,
        ColorTemperatureLightRequirements.server.mandatory.LevelControl,
        ColorTemperatureLightRequirements.server.mandatory.ColorControl
    )
});

export const ColorTemperatureLightDevice: ColorTemperatureLightDevice = ColorTemperatureLightDeviceDefinition;
