/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import { GroupsServer } from "../../../behavior/definitions/groups/GroupsServer.js";
import { OnOffServer } from "../../../behavior/definitions/on-off/OnOffServer.js";
import { ScenesServer } from "../../../behavior/definitions/scenes/ScenesServer.js";
import { LevelControlServer } from "../../../behavior/definitions/level-control/LevelControlServer.js";
import { FanControlServer } from "../../../behavior/definitions/fan-control/FanControlServer.js";
import { ThermostatBehavior } from "../../../behavior/definitions/thermostat/ThermostatBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const HeatingCoolingUnitRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: {
        mandatory: { Identify: IdentifyServer, Groups: GroupsServer, OnOff: OnOffServer },
        optional: { Scenes: ScenesServer, LevelControl: LevelControlServer, FanControl: FanControlServer }
    },

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    client: { mandatory: { Thermostat: ThermostatBehavior } }
};

export const HeatingCoolingUnitDeviceDefinition = MutableEndpoint({
    name: "HeatingCoolingUnit",
    deviceType: 0x300,
    deviceRevision: 2,
    requirements: HeatingCoolingUnitRequirements,
    behaviors: SupportedBehaviors(
        HeatingCoolingUnitRequirements.server.mandatory.Identify,
        HeatingCoolingUnitRequirements.server.mandatory.Groups,
        HeatingCoolingUnitRequirements.server.mandatory.OnOff
    )
});

/**
 * A Heating/Cooling Unit is a device capable of heating or cooling a space in a house. It is not mandatory to provide
 * both functionalities (for example, the device may just heat but not cool). It may be an indoor air handler.
 *
 * NOTE Heating/Cooling Unit device type is provisional.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 9.1
 */
export interface HeatingCoolingUnitDevice extends Identity<typeof HeatingCoolingUnitDeviceDefinition> {}

export const HeatingCoolingUnitDevice: HeatingCoolingUnitDevice = HeatingCoolingUnitDeviceDefinition;
