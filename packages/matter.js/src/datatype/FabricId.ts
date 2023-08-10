/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";
import { TlvUInt64 } from "../tlv/TlvNumber.js";
import { TlvWrapper } from "../tlv/TlvWrapper.js";
import { toBigInt } from "../util/Number.js";
import { Branded } from "../util/Type.js";

/**
 * A Fabric ID is a 64-bit number that uniquely identifies the Fabric within the scope of
 * a particular root CA.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 2.5.1
 */
export type FabricId = Branded<bigint, "FabricId">;

export function FabricId(value: bigint | number): FabricId {
    return toBigInt(value) as FabricId;
}

/** Tlv schema for a Node Identifier. */
export const TlvFabricId = new TlvWrapper<FabricId, number | bigint>(
    TlvUInt64,
    fabricId => fabricId,
    value => FabricId(value),
);
