/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";
import { TlvUInt32 } from "../tlv/TlvNumber.js";
import { TlvWrapper } from "../tlv/TlvWrapper.js";
import { Branded } from "../util/Type.js";

/**
 * A Cluster Identifier is a 32 bit number and SHALL reference a single cluster specification and
 * SHALL define conformance to that specification.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 7.10
 */
export type ClusterId = Branded<number, "ClusterId">;

export function ClusterId(v: number): ClusterId {
    return v as ClusterId;
}

/** Tlv schema for a cluster Id. */
export const TlvClusterId = new TlvWrapper<ClusterId, number>(
    TlvUInt32,
    clusterId => clusterId,
    value => ClusterId(value),
);
