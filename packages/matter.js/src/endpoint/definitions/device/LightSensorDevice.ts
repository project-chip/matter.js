/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer as BaseIdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import {
    IlluminanceMeasurementServer as BaseIlluminanceMeasurementServer
} from "../../../behavior/definitions/illuminance-measurement/IlluminanceMeasurementServer.js";
import { GroupsBehavior as BaseGroupsBehavior } from "../../../behavior/definitions/groups/GroupsBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";

/**
 * A Light Sensor device is a measurement and sensing device that is capable of measuring and reporting the intensity
 * of light (illuminance) to which the sensor is being subjected.
 *
 * @see {@link MatterSpecification.v11.Device} § 7.2
 */
export interface LightSensorDevice extends Identity<typeof LightSensorDeviceDefinition> {}

export namespace LightSensorRequirements {
    /**
     * The Identify cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link IdentifyServer} for convenience.
     */
    export const IdentifyServer = BaseIdentifyServer;

    /**
     * The IlluminanceMeasurement cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link IlluminanceMeasurementServer} for convenience.
     */
    export const IlluminanceMeasurementServer = BaseIlluminanceMeasurementServer;

    /**
     * The Groups cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link GroupsBehavior} for convenience.
     */
    export const GroupsBehavior = BaseGroupsBehavior;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = { mandatory: { Identify: IdentifyServer, IlluminanceMeasurement: IlluminanceMeasurementServer } };

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    export const client = { optional: { Groups: GroupsBehavior }, mandatory: {} };
}

export const LightSensorDeviceDefinition = MutableEndpoint({
    name: "LightSensor",
    deviceType: 0x106,
    deviceRevision: 2,
    requirements: LightSensorRequirements,
    behaviors: SupportedBehaviors(
        LightSensorRequirements.server.mandatory.Identify,
        LightSensorRequirements.server.mandatory.IlluminanceMeasurement
    )
});

export const LightSensorDevice: LightSensorDevice = LightSensorDeviceDefinition;
