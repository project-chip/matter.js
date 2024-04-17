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
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";

/**
 * An On/Off Plug-in Unit is a device that is capable of being switched on or off by means of a bound controller device
 * such as an On/Off Light Switch or a Dimmer Switch. The On/Off Plug-in Unit is typically used to control a
 * conventional non-communicating light by switching its mains connection. Other appliances can be controlled this way
 * as well.
 *
 * @see {@link MatterSpecification.v11.Device} § 5.1
 */
export interface OnOffPlugInUnitDevice extends Identity<typeof OnOffPlugInUnitDeviceDefinition> {}

export namespace OnOffPlugInUnitRequirements {
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
     * The LevelControl cluster is optional per the Matter specification
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
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = {
        mandatory: { Identify: IdentifyServer, Groups: GroupsServer, Scenes: ScenesServer, OnOff: OnOffServer },
        optional: { LevelControl: LevelControlServer }
    };
}

export const OnOffPlugInUnitDeviceDefinition = MutableEndpoint({
    name: "OnOffPlugInUnit",
    deviceType: 0x10a,
    deviceRevision: 2,
    requirements: OnOffPlugInUnitRequirements,

    behaviors: SupportedBehaviors(
        OnOffPlugInUnitRequirements.server.mandatory.Identify,
        OnOffPlugInUnitRequirements.server.mandatory.Groups,
        OnOffPlugInUnitRequirements.server.mandatory.Scenes,
        OnOffPlugInUnitRequirements.server.mandatory.OnOff
    )
});

export const OnOffPlugInUnitDevice: OnOffPlugInUnitDevice = OnOffPlugInUnitDeviceDefinition;
