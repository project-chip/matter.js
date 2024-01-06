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
import { OccupancySensingBehavior } from "../../../behavior/definitions/occupancy-sensing/OccupancySensingBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const OnOffLightRequirements = {
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

            OnOff: OnOffServer.with("LevelControlForLighting")
        },

        optional: {
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
    },

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    client: { optional: { OccupancySensing: OccupancySensingBehavior } }
};

export const OnOffLightDeviceDefinition = MutableEndpoint({
    name: "OnOffLight",
    deviceType: 0x100,
    deviceRevision: 2,
    requirements: OnOffLightRequirements,

    behaviors: SupportedBehaviors(
        OnOffLightRequirements.server.mandatory.Identify,
        OnOffLightRequirements.server.mandatory.Groups,
        OnOffLightRequirements.server.mandatory.Scenes,
        OnOffLightRequirements.server.mandatory.OnOff
    )
});

/**
 * The On/Off Light is a lighting device that is capable of being switched on or off by means of a bound controller
 * device such as an On/Off Light Switch or a Dimmer Switch. In addition, an on/off light is also capable of being
 * switched by means of a bound occupancy sensor.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 4.1
 */
export interface OnOffLightDevice extends Identity<typeof OnOffLightDeviceDefinition> {}

export const OnOffLightDevice: OnOffLightDevice = OnOffLightDeviceDefinition;
