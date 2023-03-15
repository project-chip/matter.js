/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterCoreSpecificationV1_0, TlvUInt16, TlvWrapper } from "@project-chip/matter.js";

/**
 * A Vendor Identifier (Vendor ID or VID) is a 16-bit number that uniquely identifies a particular
 * product manufacturer, vendor, or group thereof. Each Vendor ID is statically allocated by the
 * Connectivity Standards Alliance (see [CSA Manufacturer Code Database]).
 *
 * @see {@link MatterCoreSpecificationV1_0} § 2.5.2
 */
export class VendorId {
    constructor(
        readonly id: number,
    ) {}
}

/** Data model for a Vendor Identifier. */
export const TlvVendorId = new TlvWrapper<VendorId, number>(
    TlvUInt16,
    vendorId => vendorId.id,
    value => new VendorId(value),
);
