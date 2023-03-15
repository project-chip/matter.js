/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterCoreSpecificationV1_0, TlvUInt32, TlvWrapper } from "@project-chip/matter.js";

/**
 * A Cluster Identifier is a 32 bit number and SHALL reference a single cluster specification and
 * SHALL define conformance to that specification.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 7.10
 */
export class ClusterId {
    constructor(
        readonly id: number
    ) {}
}

/** Tlv schema for a cluster Id. */
export const TlvClusterId = new TlvWrapper<ClusterId, number>(
    TlvUInt32,
    clusterId => clusterId.id,
    value => new ClusterId(value),
);
