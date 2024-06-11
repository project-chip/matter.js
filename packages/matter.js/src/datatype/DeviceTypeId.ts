/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { tryCatch } from "../common/TryCatchHandler.js";
import { ValidationError, ValidationOutOfBoundsError } from "../common/ValidationError.js";
import { TlvUInt32 } from "../tlv/TlvNumber.js";
import { TlvWrapper } from "../tlv/TlvWrapper.js";
import { Branded } from "../util/Type.js";
import { fromMEI } from "./ManufacturerExtensibleIdentifier.js";

/**
 * A Device type ID is a 32-bit number that defines the type of the device.
 *
 * @see {@link MatterSpecification.v10.Core} § 7.15
 */
export type DeviceTypeId = Branded<number, "DeviceTypeId">;

export function DeviceTypeId(deviceTypeId: number, validate = true): DeviceTypeId {
    if (!validate) {
        return deviceTypeId as DeviceTypeId;
    }
    const { typeSuffix } = fromMEI(deviceTypeId);
    if (typeSuffix >= 0x0000 && typeSuffix <= 0xbfff) {
        return deviceTypeId as DeviceTypeId;
    }
    throw new ValidationOutOfBoundsError(`Invalid device type ID: ${deviceTypeId}`);
}

export namespace DeviceTypeId {
    export const isValid = (deviceTypeId: number): deviceTypeId is DeviceTypeId => {
        return tryCatch(
            () => {
                DeviceTypeId(deviceTypeId);
                return true;
            },
            ValidationError,
            false,
        );
    };
}

/** Tlv schema for a Device type ID. */
export const TlvDeviceTypeId = new TlvWrapper<DeviceTypeId, number>(
    TlvUInt32,
    deviceTypeId => deviceTypeId,
    value => DeviceTypeId(value, false), // No automatic validation on decode
);
