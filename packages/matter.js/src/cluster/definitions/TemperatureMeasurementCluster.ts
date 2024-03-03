/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../../cluster/mutation/MutableCluster.js";
import { Attribute, OptionalAttribute } from "../../cluster/Cluster.js";
import { TlvInt16, TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";

export namespace TemperatureMeasurement {
    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
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
            measuredValue: Attribute(0x0, TlvNullable(TlvInt16)),

            /**
             * The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that is capable of being
             * measured. See Measured Value for more details.
             *
             * The null value indicates that the value is not available.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.3.4.2
             */
            minMeasuredValue: Attribute(0x1, TlvNullable(TlvInt16.bound({ min: -27315 })), { default: -27315 }),

            /**
             * The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that is capable of being
             * measured. See Measured Value for more details.
             *
             * The null value indicates that the value is not available.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.3.4.3
             */
            maxMeasuredValue: Attribute(0x2, TlvNullable(TlvInt16), { default: 32767 }),

            /**
             * See Measured Value.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.3.4.4
             */
            tolerance: OptionalAttribute(0x3, TlvUInt16.bound({ max: 2048 }), { default: 0 })
        }
    })

    /**
     * Temperature Measurement
     *
     * This cluster provides an interface to temperature measurement functionality, including configuration and
     * provision of notifications of temperature measurements.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.3
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;

    export const Complete = Cluster;
}

export type TemperatureMeasurementCluster = TemperatureMeasurement.Cluster;
export const TemperatureMeasurementCluster = TemperatureMeasurement.Cluster;
ClusterRegistry.register(TemperatureMeasurement.Complete);
