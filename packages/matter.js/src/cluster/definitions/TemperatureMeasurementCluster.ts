/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster as CreateCluster, Attribute, OptionalAttribute } from "../../cluster/Cluster.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { TlvInt16, TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";

export namespace TemperatureMeasurement {
    /**
     * Temperature Measurement
     *
     * This cluster provides an interface to temperature measurement functionality, including configuration and
     * provision of notifications of temperature measurements.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.3
     */
    export const Cluster = CreateCluster({
        id: 0x402,
        name: "TemperatureMeasurement",
        revision: 4,

        attributes: {
            /**
             * Represents the temperature in degrees Celsius as follows:
             *
             * MeasuredValue = 100 x temperature [°C]
             *
             * Where -273.15°C ≤ temperature ≤ 327.67°C, with a resolution of 0.01°C. The null value indicates that the
             * temperature is unknown.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.3.4.1
             */
            measuredValue: Attribute(0x0, TlvNullable(TlvInt16.bound({ min: -27315 }))),

            /**
             * The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that is capable of being
             * measured. See Measured Value for more details.
             *
             * The null value indicates that the value is not available.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.3.4.2
             */
            minMeasuredValue: Attribute(0x1, TlvNullable(TlvInt16.bound({ min: -27315 })), { default: 32768 }),

            /**
             * The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that is capable of being
             * measured. See Measured Value for more details.
             *
             * The null value indicates that the value is not available.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.3.4.3
             */
            maxMeasuredValue: Attribute(0x2, TlvNullable(TlvInt16), { default: 32768 }),

            /**
             * See Measured Value.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.3.4.4
             */
            tolerance: OptionalAttribute(0x3, TlvUInt16.bound({ max: 2048 }), { default: 0 })
        }
    })
}

export type TemperatureMeasurementCluster = typeof TemperatureMeasurement.Cluster;
export const TemperatureMeasurementCluster = TemperatureMeasurement.Cluster;
