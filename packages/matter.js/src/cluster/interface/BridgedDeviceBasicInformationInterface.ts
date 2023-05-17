/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BridgedDeviceBasicInformationCluster, ClusterInterface } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type StartUpEvent = TypeFromSchema<typeof BridgedDeviceBasicInformationCluster.events.startUp.schema>;

type ShutDownEvent = TypeFromSchema<typeof BridgedDeviceBasicInformationCluster.events.shutDown.schema>;

type LeaveEvent = TypeFromSchema<typeof BridgedDeviceBasicInformationCluster.events.leave.schema>;

type ReachableChangedEvent = TypeFromSchema<typeof BridgedDeviceBasicInformationCluster.events.reachableChanged.schema>;

export interface BridgedDeviceBasicInformationInterface {
    vendorName?: string;
    addVendorNameListener(listener: (newValue: string, oldValue: string) => void): void;
    removeVendorNameListener(listener: (newValue: string, oldValue: string) => void): void;

    vendorId?: number;
    addVendorIdListener(listener: (newValue: number, oldValue: number) => void): void;
    removeVendorIdListener(listener: (newValue: number, oldValue: number) => void): void;

    productName?: string;
    addProductNameListener(listener: (newValue: string, oldValue: string) => void): void;
    removeProductNameListener(listener: (newValue: string, oldValue: string) => void): void;

    nodeLabel?: string;
    setNodeLabel(value: string): Promise<void>;
    addNodeLabelListener(listener: (newValue: string, oldValue: string) => void): void;
    removeNodeLabelListener(listener: (newValue: string, oldValue: string) => void): void;

    hardwareVersion?: number;
    addHardwareVersionListener(listener: (newValue: number, oldValue: number) => void): void;
    removeHardwareVersionListener(listener: (newValue: number, oldValue: number) => void): void;

    hardwareVersionString?: string;
    addHardwareVersionStringListener(listener: (newValue: string, oldValue: string) => void): void;
    removeHardwareVersionStringListener(listener: (newValue: string, oldValue: string) => void): void;

    softwareVersion?: number;
    addSoftwareVersionListener(listener: (newValue: number, oldValue: number) => void): void;
    removeSoftwareVersionListener(listener: (newValue: number, oldValue: number) => void): void;

    softwareVersionString?: string;
    addSoftwareVersionStringListener(listener: (newValue: string, oldValue: string) => void): void;
    removeSoftwareVersionStringListener(listener: (newValue: string, oldValue: string) => void): void;

    manufacturingDate?: string;
    addManufacturingDateListener(listener: (newValue: string, oldValue: string) => void): void;
    removeManufacturingDateListener(listener: (newValue: string, oldValue: string) => void): void;

    partNumber?: string;
    addPartNumberListener(listener: (newValue: string, oldValue: string) => void): void;
    removePartNumberListener(listener: (newValue: string, oldValue: string) => void): void;

    productUrl?: string;
    addProductUrlListener(listener: (newValue: string, oldValue: string) => void): void;
    removeProductUrlListener(listener: (newValue: string, oldValue: string) => void): void;

    productLabel?: string;
    addProductLabelListener(listener: (newValue: string, oldValue: string) => void): void;
    removeProductLabelListener(listener: (newValue: string, oldValue: string) => void): void;

    serialNumber?: string;
    addSerialNumberListener(listener: (newValue: string, oldValue: string) => void): void;
    removeSerialNumberListener(listener: (newValue: string, oldValue: string) => void): void;

    reachable: boolean;
    addReachableListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    removeReachableListener(listener: (newValue: boolean, oldValue: boolean) => void): void;

    uniqueId?: string;
    addUniqueIdListener(listener: (newValue: string, oldValue: string) => void): void;
    removeUniqueIdListener(listener: (newValue: string, oldValue: string) => void): void;

    addStartUpListener(listener: (event: StartUpEvent) => void): void;
    removeStartUpListener(listener: (event: StartUpEvent) => void): void;

    addShutDownListener(listener: (event: ShutDownEvent) => void): void;
    removeShutDownListener(listener: (event: ShutDownEvent) => void): void;

    addLeaveListener(listener: (event: LeaveEvent) => void): void;
    removeLeaveListener(listener: (event: LeaveEvent) => void): void;

    addReachableChangedListener(listener: (event: ReachableChangedEvent) => void): void;
    removeReachableChangedListener(listener: (event: ReachableChangedEvent) => void): void;
}

export const BridgedDeviceBasicInformation:
    ClusterInterface<BridgedDeviceBasicInformationInterface> =
{
    definition: BridgedDeviceBasicInformationCluster
};
