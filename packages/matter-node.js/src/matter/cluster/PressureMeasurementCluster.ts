/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Attribute, OptionalAttribute, Cluster, Command, TlvNoArguments, TlvNoResponse } from "./Cluster";
import { BitFlag, MatterApplicationClusterSpecificationV1_0, TlvBitmap, TlvInt16, TlvUInt16, TlvEnum, TlvField, TlvNullable, TlvObject, TlvSchema, TlvUInt8 } from "@project-chip/matter.js";

/**
 * This cluster provides an interface to pressure measurement functionality.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_0} § 2.4
 */
export const PressureMeasurementCluster = Cluster({
    id: 0x0403,
    name: "PressureMeasurement",
    revision: 3,
    features: {
        /** The cluster is capable of extended range and resolution */
        extended: BitFlag(0) 
    },

    /** @see {@link MatterApplicationClusterSpecificationV1_0} § 2.4.5 */
    attributes: {
       /** Represents the pressure in kPa as follows: MeasuredValue = 10 x Pressure [kPa] */
       measuredValue: Attribute(0x0, TlvNullable(TlvInt16)),
       
       /** Indicates the minimum value of MeasuredValue that can be measured. */
       minMeasuredValue: Attribute(0x1, TlvNullable(TlvInt16.bound({ min: -32767}))),
       
       /** Indicates the maximum value of MeasuredValue that can be measured. */
       maxMeasuredValue: Attribute(0x2, TlvNullable(TlvInt16)),

       /** Indicates the magnitude of the possible error that is associated with ScaledValue */
       tolerance: OptionalAttribute(0x3, TlvUInt16.bound({ min: 0, max: 2048 }), { default: 0 }),

       /** Represents the pressure in Pascals as follows: ScaledValue = 10Scale x Pressure [Pa] */
       scaledValue: OptionalAttribute(0x10, TlvNullable(TlvInt16), { default: 0 }),

       /** Indicates the minimum value of ScaledValue that can be measured */
       minScaledValue: OptionalAttribute(0x11, TlvNullable(TlvInt16.bound({ min: -32767})), { default: 0 }),

       /** Indicates the maximum value of ScaledValue that can be measured. */
       maxScaledValue: OptionalAttribute(0x12, TlvNullable(TlvInt16), { default: 0 }),

       /** Indicates the magnitude of the possible error that is associated with ScaledValue */
       scaledTolerance: OptionalAttribute(0x13, TlvUInt16.bound({ min: 0, max: 2048 }), { default: 0 }),

       /** Indicates the base 10 exponent used to obtain ScaledValue */
       scale: OptionalAttribute(0x14, TlvUInt8.bound({ min: -127, max: 127 }), { default: 0 }),
    },
});
