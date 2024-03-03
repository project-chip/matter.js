/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";
import { TlvUInt32 } from "../tlv/TlvNumber.js";
import { TlvWrapper } from "../tlv/TlvWrapper.js";
import { Branded } from "../util/Type.js";
import { VendorId } from "./VendorId.js";

/**
 * A Cluster Identifier is a 32 bit number and SHALL reference a single cluster specification and
 * SHALL define conformance to that specification.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 7.10
 */
export type ClusterId<ID extends number = number> = Branded<ID, "ClusterId">;

export function ClusterId<const ID extends number>(id: ID) {
    return id as ClusterId<ID>;
}

export namespace ClusterId {
    export const isVendorSpecific = (clusterId: ClusterId): boolean => {
        return clusterId > 0xffff;
    };

    export const buildVendorSpecific = (vendorPrefix: VendorId, clusterSuffix: number) => {
        return ClusterId(((vendorPrefix << 16) + clusterSuffix) >>> 0);
    };
}

/** Tlv schema for a cluster Id. */
export const TlvClusterId = new TlvWrapper<ClusterId, number>(
    TlvUInt32,
    clusterId => clusterId,
    value => ClusterId(value),
);
