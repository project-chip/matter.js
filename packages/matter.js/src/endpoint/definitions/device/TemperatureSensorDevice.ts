/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import {
    TemperatureMeasurementServer
} from "../../../behavior/definitions/temperature-measurement/TemperatureMeasurementServer.js";
import { IdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const TemperatureSensorRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: { mandatory: { TemperatureMeasurement: TemperatureMeasurementServer, Identify: IdentifyServer } }
};

export const TemperatureSensorDeviceDefinition = MutableEndpoint({
    name: "TemperatureSensor",
    deviceType: 0x302,
    deviceRevision: 2,
    requirements: TemperatureSensorRequirements,
    behaviors: SupportedBehaviors(
        TemperatureSensorRequirements.server.mandatory.TemperatureMeasurement,
        TemperatureSensorRequirements.server.mandatory.Identify
    )
});

/**
 * A Temperature Sensor device reports measurements of temperature.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 7.4
 */
export interface TemperatureSensorDevice extends Identity<typeof TemperatureSensorDeviceDefinition> {}

export const TemperatureSensorDevice: TemperatureSensorDevice = TemperatureSensorDeviceDefinition;
