/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import { GroupsServer } from "../../../behavior/definitions/groups/GroupsServer.js";
import { ScenesServer } from "../../../behavior/definitions/scenes/ScenesServer.js";
import { OnOffServer } from "../../../behavior/definitions/on-off/OnOffServer.js";
import { LevelControlServer } from "../../../behavior/definitions/level-control/LevelControlServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const DimmablePlugInUnitRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: {
        mandatory: {
            Identify: IdentifyServer.alter({ commands: { triggerEffect: { optional: false } } }),
            Groups: GroupsServer,

            Scenes: ScenesServer
                .alter({
                    commands: {
                        enhancedAddScene: { optional: false },
                        enhancedViewScene: { optional: false },
                        copyScene: { optional: false }
                    }
                }),

            OnOff: OnOffServer.with("LevelControlForLighting"),

            LevelControl: LevelControlServer
                .with("OnOff", "Lighting")
                .alter({
                    attributes: {
                        currentLevel: { min: 1, max: 254 },
                        minLevel: { default: 1, min: 1, max: 2 },
                        maxLevel: { default: 254, min: 254, max: 255 }
                    }
                })
        }
    }
};

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

/**
 * A Dimmable Plug-In Unit is a device that is capable of being switched on or off and have its level adjusted by means
 * of a bound controller device such as a Dimmer Switch or a Color Dimmer Switch. The Dimmable Plug-in Unit is
 * typically used to control a conventional non-communicating light through its mains connection using phase cutting.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 5.2
 */
export interface DimmablePlugInUnitDevice extends Identity<typeof DimmablePlugInUnitDeviceDefinition> {}

export const DimmablePlugInUnitDevice: DimmablePlugInUnitDevice = DimmablePlugInUnitDeviceDefinition;
