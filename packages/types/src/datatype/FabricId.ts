/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Branded, toBigInt } from "#general";
import { TlvUInt64 } from "../tlv/TlvNumber.js";
import { TlvWrapper } from "../tlv/TlvWrapper.js";

/**
 * A Fabric ID is a 64-bit number that uniquely identifies the Fabric within the scope of
 * a particular root CA.
 *
 * @see {@link MatterSpecification.v10.Core} § 2.5.1
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
