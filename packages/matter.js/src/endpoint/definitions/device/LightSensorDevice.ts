/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import {
    IlluminanceMeasurementServer
} from "../../../behavior/definitions/illuminance-measurement/IlluminanceMeasurementServer.js";
import { GroupsBehavior } from "../../../behavior/definitions/groups/GroupsBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const LightSensorRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: { mandatory: { Identify: IdentifyServer, IlluminanceMeasurement: IlluminanceMeasurementServer } },

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    client: { optional: { Groups: GroupsBehavior } }
};

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

/**
 * A Light Sensor device is a measurement and sensing device that is capable of measuring and reporting the intensity
 * of light (illuminance) to which the sensor is being subjected.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 7.2
 */
export interface LightSensorDevice extends Identity<typeof LightSensorDeviceDefinition> {}

export const LightSensorDevice: LightSensorDevice = LightSensorDeviceDefinition;
