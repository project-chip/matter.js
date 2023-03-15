/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Attribute, OptionalAttribute, Cluster } from "./Cluster";
import { MatterApplicationClusterSpecificationV1_0, TlvInt16, TlvUInt16, TlvNullable, TlvUInt8 } from "@project-chip/matter.js";

/**
 * The Illuminance Measurement cluster provides an interface to illuminance measurement function­ality.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_0} § 2.2
 */
export const IlluminanceMeasurementCluster = Cluster({
    id: 0x0400,
    name: "IlluminanceMeasurement",
    revision: 3,

    /** @see {@link MatterApplicationClusterSpecificationV1_0} § 2.2.5 */
    attributes: {
       /** Represents the illuminance in Lux (symbol lx): MeasuredValue = 10,000 x log10(illuminance) + 1 */
       measuredValue: Attribute(0, TlvNullable(TlvUInt16), { default: 0 }),
       
       /** Indicates the minimum value of MeasuredValue that can be measured. */
       minMeasuredValue: Attribute(1, TlvNullable(TlvUInt16.bound({ min: 1 }))),
       
       /** Indicates the maximum value of MeasuredValue that can be measured. */
       maxMeasuredValue: Attribute(2, TlvNullable(TlvUInt16.bound({ max: 65534 }))),
       tolerance: OptionalAttribute(3, TlvUInt16.bound({ min: 0, max: 2048 })),
       
       /** Specifies the electronic type of the light sensor. */
       lightSensorType: OptionalAttribute(4, TlvNullable(TlvUInt8), { default: null }), // only values null, 0, 1 and 0x40 to 0xfe are allowed
    },
});
