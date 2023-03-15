/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Attribute, OptionalAttribute, Cluster, Command } from "./Cluster";
import { MatterApplicationClusterSpecificationV1_0, TlvInt16, TlvUInt16, TlvNullable, TlvUInt8 } from "@project-chip/matter.js";

/**
 * This cluster provides an interface to temperature measurement functionality.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_0} § 2.3
 */
export const TemperatureMeasurementCluster = Cluster({
    id: 0x0402,
    name: "TemperatureMeasurement",
    revision: 4,

    /** @see {@link MatterApplicationClusterSpecificationV1_0} § 2.3.4 */
    attributes: {
       /** MeasuredValue = 100 x temperature [°C] **/
       measuredValue: Attribute(0, TlvNullable(TlvInt16)),

       /** Indicates the minimum value of MeasuredValue that can be measured. */
       minMeasuredValue: Attribute(1, TlvNullable(TlvInt16.bound({ min: -27315 }))),

       /** Indicates the maximum value of MeasuredValue that can be measured. */
       maxMeasuredValue: Attribute(2, TlvNullable(TlvInt16.bound({ max: 32767 }))),

       tolerance: OptionalAttribute(3, TlvUInt16.bound({ min: 0, max: 2048 }), { default: 0 }),
    },
});
