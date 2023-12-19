/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BasicInformationBehavior } from "../../behavior/definitions/basic-information/BasicInformationBehavior.js";
import { DescriptorBehavior } from "../../behavior/definitions/descriptor/DescriptorBehavior.js";
import { PartsBehavior } from "../../behavior/definitions/parts/PartsBehavior.js";
import { ImplementationError } from "../../common/MatterError.js";
import { DeviceTypeId } from "../../datatype/DeviceTypeId.js";
import type { VendorId } from "../../datatype/VendorId.js";
import { DeviceClasses } from "../../device/DeviceTypes.js";
import type { Part } from "../../endpoint/Part.js";
import { AggregatorEndpoint } from "../../endpoint/definitions/system/AggregatorEndpoint.js";
import { BridgedNodeEndpoint } from "../../endpoint/definitions/system/BridgedNodeEndpoint.js";
import { RootEndpoint } from "../../endpoint/definitions/system/RootEndpoint.js";
import { CommissioningFlowType } from "../../schema/PairingCodeSchema.js";
import { PaseClient } from "../../session/pase/PaseClient.js";
import type { ByteArray } from "../../util/ByteArray.js";

/**
 * Configuration for initial node commissioning.
 */
export interface CommissioningOptions {
    /**
     * Product details included in commissioning advertisements.
     */
    readonly productDescription?: Partial<CommissioningOptions.ProductDescription>;

    /**
     * The commissioning passcode/pin.
     */
    readonly passcode?: number;

    /**
     * The discriminator used during initial commissioning.
     */
    readonly discriminator?: number;

    /**
     * The Flow type of commissioning used in announcements.
     */
    readonly flowType?: CommissioningFlowType;

    /**
     * Vendor-specific BLE advertisement data.
     */
    readonly additionalBleAdvertisementData?: ByteArray;

    /**
     * Should availability be announced automatically or manually via announce()?
     */
    readonly automaticAnnouncement?: boolean;
}

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

    /**
     * Validate options and set defaults.
     *
     * @returns the resulting options
     */
    export function initialConfigurationFor(options?: CommissioningOptions) {
        options = {
            ...options,
        };

        if (options.passcode !== undefined && FORBIDDEN_PASSCODES.includes(options.passcode)) {
            throw new ImplementationError(`Passcode ${options.passcode} is not allowed`);
        }

        return {
            productDescription: options.productDescription ?? {},

            passcode: options.passcode,

            discriminator: options.discriminator,

            flowType: options.flowType ?? CommissioningFlowType.Standard,

            additionalBleAdvertisementData: options.additionalBleAdvertisementData,

            automaticAnnouncement: options.automaticAnnouncement ?? true,
        };
    }

    /**
     * Partial commissioning configuration.
     */
    export interface InitialConfiguration extends ReturnType<typeof initialConfigurationFor> {}

    /**
     * We do not finalize commissioning configuration until the server is
     * fully configured.  This is the second stage of configuration that occurs
     * on startup.
     */
    export function finalConfigurationFor(config: InitialConfiguration, root: Part<RootEndpoint>) {
        const bi = root.agent.get(BasicInformationBehavior).state;
        const pd = config.productDescription;

        let deviceType = pd.deviceType;
        if (deviceType === undefined) {
            deviceType = inferDeviceType(root);
            if (deviceType === undefined) {
                throw new ImplementationError(
                    "Cannot infer announcement device type because no device part is present; please set ProductDescription.deviceType",
                );
            }
        }

        return {
            ...config,

            productDescription: {
                name: pd.name ?? bi.productName,
                deviceType,
                vendorId: pd.vendorId ?? bi.vendorId,
                productId: pd.productId ?? bi.productId,
            },

            passcode: config.passcode ?? PaseClient.generateRandomPasscode(),
            discriminator: config.discriminator ?? PaseClient.generateRandomDiscriminator(),
        };
    }

    /**
     * Complete commissioning configuration.
     */
    export interface Configuration extends ReturnType<typeof finalConfigurationFor> {}
}

function inferDeviceType(part: Part): DeviceTypeId | undefined {
    const agent = part.agent;
    let recurse = false;
    for (const dt of agent.get(DescriptorBehavior).state.deviceTypeList) {
        switch (dt.deviceType) {
            case RootEndpoint.deviceType:
            case BridgedNodeEndpoint.deviceType:
            case AggregatorEndpoint.deviceType:
                recurse = true;
                break;

            default:
                if (part.type.deviceClass === DeviceClasses.Simple) {
                    return dt.deviceType;
                }
        }
    }

    if (!recurse) {
        return;
    }

    const parts = agent.get(PartsBehavior);
    for (const child of parts) {
        const deviceType = inferDeviceType(child);
        if (deviceType !== undefined) {
            return deviceType;
        }
    }
}
