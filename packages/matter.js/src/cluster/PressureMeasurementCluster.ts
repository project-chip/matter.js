/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Attribute, OptionalAttribute, Cluster } from "./Cluster.js";
import { BitFlag } from "../schema/BitmapSchema.js";
import { TlvNullable } from "../tlv/TlvNullable.js";
import { TlvInt16, TlvInt8, TlvUInt16 } from "../tlv/TlvNumber.js";
import { MatterApplicationClusterSpecificationV1_0 } from "../spec/Specifications.js";

/**
 * This cluster provides an interface to pressure measurement functionality.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_0} § 2.4
 */
export const PressureMeasurementCluster = Cluster({
    // TODO create two cluster definitions ... One with set Extended Flag and one without to make
    //  Attributes correctly optional
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
        minMeasuredValue: Attribute(0x1, TlvNullable(TlvInt16.bound({ min: -32767 }))),

        /** Indicates the maximum value of MeasuredValue that can be measured. */
        maxMeasuredValue: Attribute(0x2, TlvNullable(TlvInt16)),

        /** Indicates the magnitude of the possible error that is associated with ScaledValue */
        tolerance: OptionalAttribute(0x3, TlvUInt16.bound({ max: 2048 /* 0x0800 */ }), { default: 0 }),

        /**
         * Mandatory Attribute when extended feature is used!
         * Represents the pressure in Pascals as follows: ScaledValue = 10Scale x Pressure [Pa]
         */
        scaledValue: OptionalAttribute(0x10, TlvNullable(TlvInt16), { default: 0 }),

        /**
         * Mandatory Attribute when extended feature is used!
         * Indicates the minimum value of ScaledValue that can be measured
         */
        minScaledValue: OptionalAttribute(0x11, TlvNullable(TlvInt16.bound({ min: -32767 })), { default: 0 }),

        /**
         * Mandatory Attribute when extended feature is used!
         * Indicates the maximum value of ScaledValue that can be measured.
         */
        maxScaledValue: OptionalAttribute(0x12, TlvNullable(TlvInt16), { default: 0 }),

        /**
         * Mandatory Attribute when extended feature is used!
         * Indicates the magnitude of the possible error that is associated with ScaledValue
         */
        scaledTolerance: OptionalAttribute(0x13, TlvUInt16.bound({ max: 2048 /* 0x0800 */ }), { default: 0 }),

        /**
         * Only relevant when extended feature is used!
         * Indicates the base 10 exponent used to obtain ScaledValue
         */
        scale: OptionalAttribute(0x14, TlvInt8, { default: 0 }),
    },
});
