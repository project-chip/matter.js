/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvUInt32 } from "../tlv/TlvNumber.js";
import { TlvWrapper } from "../tlv/TlvWrapper.js";
import { Branded } from "../util/Type.js";

/**
 * A Device type ID is a 32-bit number that defines the type of the device.
 *
 * @see {@link MatterSpecification.v10.Core} § 7.15
 */
export type DeviceTypeId<ID extends number = number> = Branded<ID, "DeviceTypeId">;

export function DeviceTypeId<ID extends number>(v: ID) {
    return v as DeviceTypeId<ID>;
}

/** Tlv schema for a Device type ID. */
export const TlvDeviceTypeId = new TlvWrapper<DeviceTypeId, number>(
    TlvUInt32,
    deviceTypeId => deviceTypeId,
    value => DeviceTypeId(value),
);
