/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer as BaseIdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import { GroupsServer as BaseGroupsServer } from "../../../behavior/definitions/groups/GroupsServer.js";
import { OnOffServer as BaseOnOffServer } from "../../../behavior/definitions/on-off/OnOffServer.js";
import { ScenesServer as BaseScenesServer } from "../../../behavior/definitions/scenes/ScenesServer.js";
import {
    LevelControlServer as BaseLevelControlServer
} from "../../../behavior/definitions/level-control/LevelControlServer.js";
import { FanControlServer as BaseFanControlServer } from "../../../behavior/definitions/fan-control/FanControlServer.js";
import {
    ThermostatBehavior as BaseThermostatBehavior
} from "../../../behavior/definitions/thermostat/ThermostatBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";

/**
 * A Heating/Cooling Unit is a device capable of heating or cooling a space in a house. It is not mandatory to provide
 * both functionalities (for example, the device may just heat but not cool). It may be an indoor air handler.
 *
 * NOTE Heating/Cooling Unit device type is provisional.
 *
 * @see {@link MatterSpecification.v11.Device} § 9.1
 */
export interface HeatingCoolingUnitDevice extends Identity<typeof HeatingCoolingUnitDeviceDefinition> {}

export namespace HeatingCoolingUnitRequirements {
    /**
     * The Identify cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link IdentifyServer} for convenience.
     */
    export const IdentifyServer = BaseIdentifyServer;

    /**
     * The Groups cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link GroupsServer} for convenience.
     */
    export const GroupsServer = BaseGroupsServer;

    /**
     * The OnOff cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link OnOffServer} for convenience.
     */
    export const OnOffServer = BaseOnOffServer;

    /**
     * The Scenes cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link ScenesServer} for convenience.
     */
    export const ScenesServer = BaseScenesServer;

    /**
     * The LevelControl cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link LevelControlServer} for convenience.
     */
    export const LevelControlServer = BaseLevelControlServer;

    /**
     * The FanControl cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link FanControlServer} for convenience.
     */
    export const FanControlServer = BaseFanControlServer;

    /**
     * The Thermostat cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link ThermostatBehavior} for convenience.
     */
    export const ThermostatBehavior = BaseThermostatBehavior;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = {
        mandatory: { Identify: IdentifyServer, Groups: GroupsServer, OnOff: OnOffServer },
        optional: { Scenes: ScenesServer, LevelControl: LevelControlServer, FanControl: FanControlServer }
    };

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    export const client = { mandatory: { Thermostat: ThermostatBehavior } };
}

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

export const HeatingCoolingUnitDevice: HeatingCoolingUnitDevice = HeatingCoolingUnitDeviceDefinition;
