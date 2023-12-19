/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import { ThermostatServer } from "../../../behavior/definitions/thermostat/ThermostatServer.js";
import { GroupsServer } from "../../../behavior/definitions/groups/GroupsServer.js";
import { ScenesServer } from "../../../behavior/definitions/scenes/ScenesServer.js";
import {
    ThermostatUserInterfaceConfigurationServer
} from "../../../behavior/definitions/thermostat-user-interface-configuration/ThermostatUserInterfaceConfigurationServer.js";
import {
    RelativeHumidityMeasurementBehavior
} from "../../../behavior/definitions/relative-humidity-measurement/RelativeHumidityMeasurementBehavior.js";
import { TimeSyncBehavior } from "../../../behavior/definitions/time-sync/TimeSyncBehavior.js";
import { FanControlBehavior } from "../../../behavior/definitions/fan-control/FanControlBehavior.js";
import {
    TemperatureMeasurementBehavior
} from "../../../behavior/definitions/temperature-measurement/TemperatureMeasurementBehavior.js";
import { OccupancySensingBehavior } from "../../../behavior/definitions/occupancy-sensing/OccupancySensingBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const ThermostatRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: {
        mandatory: { Identify: IdentifyServer, Thermostat: ThermostatServer },
        optional: {
            Groups: GroupsServer,
            Scenes: ScenesServer,
            ThermostatUserInterfaceConfiguration: ThermostatUserInterfaceConfigurationServer
        }
    },

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    client: {
        optional: {
            RelativeHumidityMeasurement: RelativeHumidityMeasurementBehavior,
            TimeSync: TimeSyncBehavior,
            FanControl: FanControlBehavior,
            TemperatureMeasurement: TemperatureMeasurementBehavior,
            OccupancySensing: OccupancySensingBehavior
        }
    }
};

export const ThermostatDeviceDefinition = MutableEndpoint({
    name: "Thermostat",
    deviceType: 0x301,
    deviceRevision: 2,
    requirements: ThermostatRequirements,
    behaviors: SupportedBehaviors(ThermostatRequirements.server.mandatory.Identify)
});

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

export const ThermostatDevice: ThermostatDevice = ThermostatDeviceDefinition;
