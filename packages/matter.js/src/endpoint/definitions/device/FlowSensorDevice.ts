/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { FlowMeasurementServer } from "../../../behavior/definitions/flow-measurement/FlowMeasurementServer.js";
import { IdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const FlowSensorRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: { mandatory: { FlowMeasurement: FlowMeasurementServer, Identify: IdentifyServer } }
};

export const FlowSensorDeviceDefinition = MutableEndpoint({
    name: "FlowSensor",
    deviceType: 0x306,
    deviceRevision: 2,
    requirements: FlowSensorRequirements,
    behaviors: SupportedBehaviors(
        FlowSensorRequirements.server.mandatory.FlowMeasurement,
        FlowSensorRequirements.server.mandatory.Identify
    )
});

/**
 * A Flow Sensor device measures and reports the flow rate of a fluid.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 7.6
 */
export interface FlowSensorDevice extends Identity<typeof FlowSensorDeviceDefinition> {}

export const FlowSensorDevice: FlowSensorDevice = FlowSensorDeviceDefinition;
