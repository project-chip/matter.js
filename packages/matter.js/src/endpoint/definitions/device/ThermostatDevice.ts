/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer as BaseIdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import { ThermostatServer as BaseThermostatServer } from "../../../behavior/definitions/thermostat/ThermostatServer.js";
import { GroupsServer as BaseGroupsServer } from "../../../behavior/definitions/groups/GroupsServer.js";
import { ScenesServer as BaseScenesServer } from "../../../behavior/definitions/scenes/ScenesServer.js";
import {
    ThermostatUserInterfaceConfigurationServer as BaseThermostatUserInterfaceConfigurationServer
} from "../../../behavior/definitions/thermostat-user-interface-configuration/ThermostatUserInterfaceConfigurationServer.js";
import { TimeSyncServer as BaseTimeSyncServer } from "../../../behavior/definitions/time-sync/TimeSyncServer.js";
import {
    RelativeHumidityMeasurementBehavior as BaseRelativeHumidityMeasurementBehavior
} from "../../../behavior/definitions/relative-humidity-measurement/RelativeHumidityMeasurementBehavior.js";
import { TimeSyncBehavior as BaseTimeSyncBehavior } from "../../../behavior/definitions/time-sync/TimeSyncBehavior.js";
import {
    FanControlBehavior as BaseFanControlBehavior
} from "../../../behavior/definitions/fan-control/FanControlBehavior.js";
import {
    TemperatureMeasurementBehavior as BaseTemperatureMeasurementBehavior
} from "../../../behavior/definitions/temperature-measurement/TemperatureMeasurementBehavior.js";
import {
    OccupancySensingBehavior as BaseOccupancySensingBehavior
} from "../../../behavior/definitions/occupancy-sensing/OccupancySensingBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * A Thermostat device is capable of having either built-in or separate sensors for temperature, humidity or occupancy.
 * It allows the desired temperature to be set either remotely or locally. The thermostat is capable of sending heating
 * and/or cooling requirement notifications to a heating/cooling unit (for example, an indoor air handler) or is
 * capable of including a mechanism to control a heating or cooling unit directly.
 *
 * ThermostatDevice requires Thermostat cluster but Thermostat is not added by default because you must select the
 * features your device supports. You can add manually using ThermostatDevice.with().
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 9.2
 */
export interface ThermostatDevice extends Identity<typeof ThermostatDeviceDefinition> {}

export namespace ThermostatRequirements {
    /**
     * The {@link Identify} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const IdentifyServer = BaseIdentifyServer;

    /**
     * The {@link Thermostat} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const ThermostatServer = BaseThermostatServer;

    /**
     * The {@link Groups} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const GroupsServer = BaseGroupsServer;

    /**
     * The {@link Scenes} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const ScenesServer = BaseScenesServer;

    /**
     * The {@link ThermostatUserInterfaceConfiguration} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const ThermostatUserInterfaceConfigurationServer = BaseThermostatUserInterfaceConfigurationServer;

    /**
     * The {@link TimeSync} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const TimeSyncServer = BaseTimeSyncServer;

    /**
     * The {@link RelativeHumidityMeasurement} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const RelativeHumidityMeasurementBehavior = BaseRelativeHumidityMeasurementBehavior;

    /**
     * The {@link TimeSync} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const TimeSyncBehavior = BaseTimeSyncBehavior;

    /**
     * The {@link FanControl} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const FanControlBehavior = BaseFanControlBehavior;

    /**
     * The {@link TemperatureMeasurement} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const TemperatureMeasurementBehavior = BaseTemperatureMeasurementBehavior;

    /**
     * The {@link OccupancySensing} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const OccupancySensingBehavior = BaseOccupancySensingBehavior;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = {
        mandatory: { Identify: IdentifyServer, Thermostat: ThermostatServer },

        optional: {
            Groups: GroupsServer,
            Scenes: ScenesServer,
            ThermostatUserInterfaceConfiguration: ThermostatUserInterfaceConfigurationServer,
            TimeSync: TimeSyncServer
        }
    };

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    export const client = {
        optional: {
            RelativeHumidityMeasurement: RelativeHumidityMeasurementBehavior,
            TimeSync: TimeSyncBehavior,
            FanControl: FanControlBehavior,
            TemperatureMeasurement: TemperatureMeasurementBehavior,
            OccupancySensing: OccupancySensingBehavior
        },

        mandatory: {}
    };
}

export const ThermostatDeviceDefinition = MutableEndpoint({
    name: "Thermostat",
    deviceType: 0x301,
    deviceRevision: 2,
    requirements: ThermostatRequirements,
    behaviors: SupportedBehaviors(ThermostatRequirements.server.mandatory.Identify)
});

export const ThermostatDevice: ThermostatDevice = ThermostatDeviceDefinition;
