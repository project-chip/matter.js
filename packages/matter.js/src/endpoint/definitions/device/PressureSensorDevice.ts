/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PressureMeasurementServer } from "../../../behavior/definitions/pressure-measurement/PressureMeasurementServer.js";
import { IdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const PressureSensorRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: { mandatory: { PressureMeasurement: PressureMeasurementServer, Identify: IdentifyServer } }
};

export const PressureSensorDeviceDefinition = MutableEndpoint({
    name: "PressureSensor",
    deviceType: 0x305,
    deviceRevision: 2,
    requirements: PressureSensorRequirements,
    behaviors: SupportedBehaviors(
        PressureSensorRequirements.server.mandatory.PressureMeasurement,
        PressureSensorRequirements.server.mandatory.Identify
    )
});

/**
 * A Pressure Sensor device measures and reports the pressure of a fluid.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 7.5
 */
export interface PressureSensorDevice extends Identity<typeof PressureSensorDeviceDefinition> {}

export const PressureSensorDevice: PressureSensorDevice = PressureSensorDeviceDefinition;
