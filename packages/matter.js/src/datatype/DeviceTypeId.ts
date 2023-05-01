/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvUInt32 } from "../tlv/TlvNumber.js";
import { TlvWrapper } from "../tlv/TlvWrapper.js";
import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";

/**
 * A Device type ID is a 32-bit number that defines the type of the device.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 7.15
 */
export class DeviceTypeId {
    constructor(
        readonly id: number
    ) { }
}

/** Tlv schema for a Device type ID. */
export const TlvDeviceTypeId = new TlvWrapper<DeviceTypeId, number>(
    TlvUInt32,
    deviceTypeId => deviceTypeId.id,
    value => new DeviceTypeId(value),
);
