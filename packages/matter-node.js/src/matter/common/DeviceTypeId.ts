/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterCoreSpecificationV1_0, TlvUInt32, TlvWrapper } from "@project-chip/matter.js";

/**
 * A Device type ID is a 32-bit number that defines the type of the device.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 7.15
 */
export class DeviceTypeId {
    constructor(
        readonly id: number
    ) {}
}

/** Tlv schema for a Device type ID. */
export const TlvDeviceTypeId = new TlvWrapper<DeviceTypeId, number>(
    TlvUInt32,
    deviceTypeId => deviceTypeId.id,
    value => new DeviceTypeId(value),
);
