/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import {
    PowerTopologyServer as BasePowerTopologyServer
} from "../../../behavior/definitions/power-topology/PowerTopologyServer.js";
import {
    ElectricalPowerMeasurementServer as BaseElectricalPowerMeasurementServer
} from "../../../behavior/definitions/electrical-power-measurement/ElectricalPowerMeasurementServer.js";
import {
    ElectricalEnergyMeasurementServer as BaseElectricalEnergyMeasurementServer
} from "../../../behavior/definitions/electrical-energy-measurement/ElectricalEnergyMeasurementServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { DeviceClasses } from "../../../device/DeviceTypes.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";

/**
 * An Electrical Sensor device measures the electrical power and/or energy being imported and/or exported.
 *
 * ElectricalSensorEndpoint requires PowerTopology cluster but PowerTopology is not added by default because you must
 * select the features your device supports. You can add manually using ElectricalSensorEndpoint.with().
 *
 * @see {@link MatterSpecification.v13.Device} § 2.6
 */
export interface ElectricalSensorEndpoint extends Identity<typeof ElectricalSensorEndpointDefinition> {}

export namespace ElectricalSensorRequirements {
    /**
     * The PowerTopology cluster is required by the Matter specification.
     *
     * We provide this alias to the default implementation {@link PowerTopologyServer} for convenience.
     */
    export const PowerTopologyServer = BasePowerTopologyServer;

    /**
     * The ElectricalPowerMeasurement cluster is optional per the Matter specification.
     *
     * We provide this alias to the default implementation {@link ElectricalPowerMeasurementServer} for convenience.
     */
    export const ElectricalPowerMeasurementServer = BaseElectricalPowerMeasurementServer;

    /**
     * The ElectricalEnergyMeasurement cluster is optional per the Matter specification.
     *
     * We provide this alias to the default implementation {@link ElectricalEnergyMeasurementServer} for convenience.
     */
    export const ElectricalEnergyMeasurementServer = BaseElectricalEnergyMeasurementServer;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = {
        mandatory: { PowerTopology: PowerTopologyServer },
        optional: {
            ElectricalPowerMeasurement: ElectricalPowerMeasurementServer,
            ElectricalEnergyMeasurement: ElectricalEnergyMeasurementServer
        }
    };
}

export const ElectricalSensorEndpointDefinition = MutableEndpoint({
    name: "ElectricalSensor",
    deviceType: 0x510,
    deviceRevision: 1,
    deviceClass: DeviceClasses.Utility,
    requirements: ElectricalSensorRequirements,
    behaviors: SupportedBehaviors()
});

export const ElectricalSensorEndpoint: ElectricalSensorEndpoint = ElectricalSensorEndpointDefinition;
