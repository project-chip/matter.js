/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Fabric } from "../fabric/Fabric.js";
import { VendorId } from "../datatype/VendorId.js";

export type CommissioningModeInstanceData = {
    /** Device name for commissionable announcements. */
    deviceName: string,

    /** Device type for commissionable announcements. */
    deviceType: number,

    /** Vendor ID for commissionable announcements. */
    vendorId: VendorId,

    /** Product ID for commissionable announcements. */
    productId: number,

    /** Device discriminator for commissionable announcements. */
    discriminator: number,

    /** Sleep Idle Interval of the device for commissionable announcements. */
    sleepIdleInterval?: number,

    /** Sleep Active Interval of the device for commissionable announcements. */
    sleepActiveInterval?: number,

    /** Pairing Hint of the device for commissionable announcements. */
    pairingHint?: number,

    /** Pairing Instruction of the device for commissionable announcements. */
    pairingInstructions?: string
};

export type CommissionerInstanceData = {

    /** Device name for commissionable announcements. */
    deviceName: string,

    /** Device type for commissionable announcements. */
    vendorId: VendorId,

    /** Vendor ID for commissionable announcements. */
    productId: number,

    /** Device type for commissionable announcements. */
    deviceType?: number

    /** Sleep Idle Interval of the device for commissionable announcements. */
    sleepIdleInterval?: number,

    /** Sleep Active Interval of the device for commissionable announcements. */
    sleepActiveInterval?: number,
};

/** Interface for classes that allow to announce one Matter instance. */
export interface InstanceBroadcaster {

    /** Set a commissionable mode and details to announce a commissionable device. */
    setCommissionMode(mode: number, deviceData: CommissioningModeInstanceData): void;

    /** Set operational details to Announce an operational device which is already commissioned. */
    setFabrics(fabrics: Fabric[]): void;

    /** Set commissioner details to announce a commissioner service for User directed commissioning (UDC). */
    setCommissionerInfo(commissionerData: CommissionerInstanceData): void;

    /** Send out announcements for this instance. */
    announce(): void;

    /** Close this instance. */
    close(): void;
}
