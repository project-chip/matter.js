/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { VendorId } from "../../datatype/VendorId.js";
import { CommissioningFlowType } from "../../schema/PairingCodeSchema.js";
import type { ByteArray } from "../../util/ByteArray.js";

/**
 * Configuration for initial node commissioning.
 */
export interface CommissioningOptions extends Partial<CommissioningOptions.Configuration> {}

export namespace CommissioningOptions {
    export const FORBIDDEN_PASSCODES = [
        0, 11111111, 22222222, 33333333, 44444444, 55555555, 66666666, 77777777, 88888888, 99999999, 12345678, 87654321,
    ];

    export interface ProductDescription {
        /**
         * The device name for commissioning announcements.
         */
        readonly name: string;

        /**
         * The device type for commissioning announcements.
         */
        readonly deviceType: number;

        /**
         * The vendor ID for commissioning announcements.
         */
        readonly vendorId: VendorId;

        /**
         * The product ID for commissioning announcements.
         */
        readonly productId: number;
    }

    export interface Configuration {
        /**
         * Product details included in commissioning advertisements.
         */
        readonly productDescription: CommissioningOptions.ProductDescription;

        /**
         * The commissioning passcode/pin.
         */
        readonly passcode: number;

        /**
         * The discriminator used during initial commissioning.
         */
        readonly discriminator: number;

        /**
         * The Flow type of commissioning used in announcements.
         */
        readonly flowType: CommissioningFlowType;

        /**
         * Vendor-specific BLE advertisement data.
         */
        readonly additionalBleAdvertisementData?: ByteArray;

        /**
         * Should availability be announced automatically or manually via announce()?
         */
        readonly automaticAnnouncement: boolean;

        /**
         * If true, enabled Bluetooth LE commissioning.  Default to true if
         * bluetooth is enabled on the platform.
         */
        readonly ble: boolean;
    }
}
