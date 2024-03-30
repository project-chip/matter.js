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
    OccupancySensingBehavior as BaseOccupancySensingBehavior
} from "../../../behavior/definitions/occupancy-sensing/OccupancySensingBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";

/**
 * A Dimmable Light is a lighting device that is capable of being switched on or off and the intensity of its light
 * adjusted by means of a bound controller device such as a Dimmer Switch or a Color Dimmer Switch. In addition, a
 * Dimmable Light device is also capable of being switched by means of a bound occupancy sensor or other device(s).
 *
 * @see {@link MatterSpecification.v11.Device} § 4.2
 */
export interface DimmableLightDevice extends Identity<typeof DimmableLightDeviceDefinition> {}

export namespace DimmableLightRequirements {
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
     * The OccupancySensing cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link OccupancySensingBehavior} for convenience.
     */
    export const OccupancySensingBehavior = BaseOccupancySensingBehavior;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = {
        mandatory: {
            Identify: IdentifyServer,
            Groups: GroupsServer,
            Scenes: ScenesServer,
            OnOff: OnOffServer,
            LevelControl: LevelControlServer
        }
    };

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    export const client = { optional: { OccupancySensing: OccupancySensingBehavior }, mandatory: {} };
}

export const DimmableLightDeviceDefinition = MutableEndpoint({
    name: "DimmableLight",
    deviceType: 0x101,
    deviceRevision: 2,
    requirements: DimmableLightRequirements,

    behaviors: SupportedBehaviors(
        DimmableLightRequirements.server.mandatory.Identify,
        DimmableLightRequirements.server.mandatory.Groups,
        DimmableLightRequirements.server.mandatory.Scenes,
        DimmableLightRequirements.server.mandatory.OnOff,
        DimmableLightRequirements.server.mandatory.LevelControl
    )
});

export const DimmableLightDevice: DimmableLightDevice = DimmableLightDeviceDefinition;
