/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import {
    RelativeHumidityMeasurementServer
} from "../../../behavior/definitions/relative-humidity-measurement/RelativeHumidityMeasurementServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const HumiditySensorRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: { mandatory: { Identify: IdentifyServer, RelativeHumidityMeasurement: RelativeHumidityMeasurementServer } }
};

export const HumiditySensorDeviceDefinition = MutableEndpoint({
    name: "HumiditySensor",
    deviceType: 0x307,
    deviceRevision: 2,
    requirements: HumiditySensorRequirements,
    behaviors: SupportedBehaviors(
        HumiditySensorRequirements.server.mandatory.Identify,
        HumiditySensorRequirements.server.mandatory.RelativeHumidityMeasurement
    )
});

/**
 * A humidity sensor (in most cases a Relative humidity sensor) reports humidity measurements.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 7.7
 */
export interface HumiditySensorDevice extends Identity<typeof HumiditySensorDeviceDefinition> {}

export const HumiditySensorDevice: HumiditySensorDevice = HumiditySensorDeviceDefinition;
