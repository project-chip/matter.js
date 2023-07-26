/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster as CreateCluster, Attribute, OptionalAttribute } from "../../cluster/Cluster.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { TlvUInt16, TlvUInt8 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";

export namespace IlluminanceMeasurement {
    /**
     * Illuminance Measurement
     *
     * Attributes and commands for configuring the measurement of illuminance, and reporting illuminance measurements.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.2
     */
    export const Cluster = CreateCluster({
        id: 0x400,
        name: "IlluminanceMeasurement",
        revision: 3,

        attributes: {
            /**
             * The MeasuredValue attribute represents the illuminance in Lux (symbol lx) as follows:
             *
             *   • MeasuredValue = 10,000 x log10(illuminance) + 1,
             *
             * where 1 lx ≤ illuminance ≤ 3.576 Mlx, corresponding to a MeasuredValue in the range 1 to 0xfffe. The
             * MeasuredValue attribute can take the following values:
             *
             *   • 0 indicates a value of illuminance that is too low to be measured,
             *
             *   • MinMeasuredValue ≤ MeasuredValue ≤ MaxMeasuredValue under normal circumstances,
             *
             *   • null indicates that the illuminance measurement is invalid.
             *
             * The MeasuredValue attribute is updated continuously as new measurements are made.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.2.5.1
             */
            measuredValue: Attribute(0x0, TlvNullable(TlvUInt16), { default: 0 }),

            /**
             * The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. A
             * value of null indicates that this attribute is not defined. See Measured Value for more details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.2.5.2
             */
            minMeasuredValue: Attribute(0x1, TlvNullable(TlvUInt16.bound({ min: 1 }))),

            /**
             * The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. A
             * value of null indicates that this attribute is not defined. See Measured Value for more details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.2.5.3
             */
            maxMeasuredValue: Attribute(0x2, TlvNullable(TlvUInt16.bound({ max: 65534 }))),

            /**
             * See Measured Value.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.2.5.4
             */
            tolerance: OptionalAttribute(0x3, TlvUInt16.bound({ max: 2048 })),

            /**
             * The LightSensorType attribute specifies the electronic type of the light sensor. This attribute shall be
             * set to one of the non-reserved values listed in Values of the LightSensorType Attribute.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.2.5.5
             */
            lightSensorType: OptionalAttribute(0x4, TlvNullable(TlvUInt8), { default: null })
        }
    })
}

export type IlluminanceMeasurementCluster = typeof IlluminanceMeasurement.Cluster;
export const IlluminanceMeasurementCluster = IlluminanceMeasurement.Cluster;
