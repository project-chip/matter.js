/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Attribute, OptionalAttribute, Cluster } from "./Cluster.js";
import { TlvNullable } from "../tlv/TlvNullable.js";
import { TlvUInt16 } from "../tlv/TlvNumber.js";
import { MatterApplicationClusterSpecificationV1_0 } from "../spec/Specifications.js";

/**
 * This cluster provides an interface to flow measurement functionality.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_0} § 2.5
 */
export const FlowMeasurementCluster = Cluster({
    id: 0x0404,
    name: "FlowMeasurement",
    revision: 3,

    /** @see {@link MatterApplicationClusterSpecificationV1_0} § 2.5.4 */
    attributes: {
        /** MeasuredValue represents the flow in m3 /h as follows: MeasuredValue = 10 x Flow  */
        measuredValue: Attribute(0, TlvNullable(TlvUInt16), { default: null }),

        /** Indicates the minimum value of MeasuredValue that can be measured.  */
        minMeasuredValue: Attribute(1, TlvNullable(TlvUInt16)),

        /** Indicates the maximum value of MeasuredValue that can be measured.  */
        maxMeasuredValue: Attribute(2, TlvNullable(TlvUInt16.bound({ max: 65534 }))),

        tolerance: OptionalAttribute(3, TlvUInt16.bound({ max: 2048 /* 0x0800 */ }), { default: 0 }),
    },
});
