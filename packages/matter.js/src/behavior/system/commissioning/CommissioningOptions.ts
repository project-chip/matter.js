/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommissioningFlowType } from "../../../schema/PairingCodeSchema.js";
import type { ByteArray } from "../../../util/ByteArray.js";
import { ProductDescription } from "../product-description/ProductDescription.js";

/**
 * Configuration for initial node commissioning.
 */
export interface CommissioningOptions extends Partial<CommissioningOptions.Configuration> {}

export namespace CommissioningOptions {
    export const FORBIDDEN_PASSCODES = [
        0, 11111111, 22222222, 33333333, 44444444, 55555555, 66666666, 77777777, 88888888, 99999999, 12345678, 87654321,
    ];

    export interface Configuration {
        /**
         * Product details included in commissioning advertisements.
         */
        readonly productDescription: ProductDescription;

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
    }
}
