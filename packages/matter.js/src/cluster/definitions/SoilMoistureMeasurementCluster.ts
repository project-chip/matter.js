/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster as CreateCluster, Attribute, OptionalAttribute } from "../../cluster/Cluster.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";

export namespace SoilMoistureMeasurement {
    /**
     * This is a base cluster. The server cluster provides an interface to water content measurement functionality. The
     * measurement is reportable and may be configured for reporting. Water content measurements include, but are not
     * limited to, leaf wetness, relative humidity, and soil moisture.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.6
     */
    export const Cluster = CreateCluster({
        id: 0x408,
        name: "SoilMoistureMeasurement",
        revision: 3,

        attributes: {
            /**
             * MeasuredValue represents the water content in % as follows:
             *
             * MeasuredValue = 100 x water content
             *
             * Where 0% < = water content < = 100%, corresponding to a MeasuredValue in the range 0 to 10000. The
             * maximum resolution this format allows is 0.01%.
             *
             * MinMeasuredValue and MaxMeasuredValue define the range of the sensor.
             *
             * The null value indicates that the measurement is unknown, otherwise the range shall be as described in
             * Measured Value.
             *
             * MeasuredValue is updated continuously as new measurements are made.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.6.4.1
             */
            measuredValue: Attribute(0x0, TlvNullable(TlvUInt16.bound({ max: 10000 }))),

            /**
             * The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. The
             * null value means this attribute is not defined. See Measured Value for more details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.6.4.2
             */
            minMeasuredValue: Attribute(0x1, TlvNullable(TlvUInt16)),

            /**
             * The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. The
             * null value means this attribute is not defined. See Measured Value for more details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.6.4.3
             */
            maxMeasuredValue: Attribute(0x2, TlvNullable(TlvUInt16.bound({ max: 10000 }))),

            /**
             * See Measured Value.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.6.4.4
             */
            tolerance: OptionalAttribute(0x3, TlvUInt16.bound({ max: 2048 }))
        }
    })
}

export type SoilMoistureMeasurementCluster = typeof SoilMoistureMeasurement.Cluster;
export const SoilMoistureMeasurementCluster = SoilMoistureMeasurement.Cluster;
