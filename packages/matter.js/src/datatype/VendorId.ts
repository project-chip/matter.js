/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";
import { TlvUInt16 } from "../tlv/TlvNumber.js";
import { TlvWrapper } from "../tlv/TlvWrapper.js";
import { Branded } from "../util/Type.js";

/**
 * A Vendor Identifier (Vendor ID or VID) is a 16-bit number that uniquely identifies a particular
 * product manufacturer, vendor, or group thereof. Each Vendor ID is statically allocated by the
 * Connectivity Standards Alliance (see [CSA Manufacturer Code Database]).
 *
 * @see {@link MatterCoreSpecificationV1_0} § 2.5.2
 */
export type VendorId = Branded<number, "VendorId">;

export function VendorId(v: number): VendorId {
    return v as VendorId;
}

/** Data model for a Vendor Identifier. */
export const TlvVendorId = new TlvWrapper<VendorId, number>(
    TlvUInt16,
    vendorId => vendorId,
    value => VendorId(value),
);
