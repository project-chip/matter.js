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
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * A Dimmable Plug-In Unit is a device that is capable of being switched on or off and have its level adjusted by means
 * of a bound controller device such as a Dimmer Switch or a Color Dimmer Switch. The Dimmable Plug-in Unit is
 * typically used to control a conventional non-communicating light through its mains connection using phase cutting.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 5.2
 */
export interface DimmablePlugInUnitDevice extends Identity<typeof DimmablePlugInUnitDeviceDefinition> {}

export namespace DimmablePlugInUnitRequirements {
    /**
     * The {@link Identify} cluster is required by the Matter specification
     *
     * This version of {@link IdentifyServer} is specialized per the specification.
     */
    export const IdentifyServer = BaseIdentifyServer.alter({ commands: { triggerEffect: { optional: false } } });

    /**
     * The {@link Groups} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const GroupsServer = BaseGroupsServer;

    /**
     * The {@link Scenes} cluster is required by the Matter specification
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
     * The {@link OnOff} cluster is required by the Matter specification
     *
     * This version of {@link OnOffServer} is specialized per the specification.
     */
    export const OnOffServer = BaseOnOffServer.with("LevelControlForLighting");

    /**
     * The {@link LevelControl} cluster is required by the Matter specification
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
        mandatory: {
            Identify: IdentifyServer,
            Groups: GroupsServer,
            Scenes: ScenesServer,
            OnOff: OnOffServer,
            LevelControl: LevelControlServer
        }
    };
}

export const DimmablePlugInUnitDeviceDefinition = MutableEndpoint({
    name: "DimmablePlugInUnit",
    deviceType: 0x10b,
    deviceRevision: 2,
    requirements: DimmablePlugInUnitRequirements,

    behaviors: SupportedBehaviors(
        DimmablePlugInUnitRequirements.server.mandatory.Identify,
        DimmablePlugInUnitRequirements.server.mandatory.Groups,
        DimmablePlugInUnitRequirements.server.mandatory.Scenes,
        DimmablePlugInUnitRequirements.server.mandatory.OnOff,
        DimmablePlugInUnitRequirements.server.mandatory.LevelControl
    )
});

export const DimmablePlugInUnitDevice: DimmablePlugInUnitDevice = DimmablePlugInUnitDeviceDefinition;
