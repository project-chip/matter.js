/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BridgedDeviceBasicInformationCluster, ClusterInterface } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type StartUpEvent = TypeFromSchema<typeof BridgedDeviceBasicInformationCluster.eventmodels.startUp.schema>;
type ShutDownEvent = TypeFromSchema<typeof BridgedDeviceBasicInformationCluster.eventmodels.shutDown.schema>;
type LeaveEvent = TypeFromSchema<typeof BridgedDeviceBasicInformationCluster.eventmodels.leave.schema>;
type ReachableChangedEvent = TypeFromSchema<typeof BridgedDeviceBasicInformationCluster.eventmodels.reachableChanged.schema>;

namespace BridgedDeviceBasicInformation {
    export type State = {
        vendorName?: string;
        vendorId?: number;
        productName?: string;
        nodeLabel?: string;
        hardwareVersion?: number;
        hardwareVersionString?: string;
        softwareVersion?: number;
        softwareVersionString?: string;
        manufacturingDate?: string;
        partNumber?: string;
        productUrl?: string;
        productLabel?: string;
        serialNumber?: string;
        reachable: boolean;
        uniqueId?: string;
    }

    export interface Client {

        onVendorNameChange(): void;
        onVendorIdChange(): void;
        onProductNameChange(): void;
        onNodeLabelChange(): void;
        onHardwareVersionChange(): void;
        onHardwareVersionStringChange(): void;
        onSoftwareVersionChange(): void;
        onSoftwareVersionStringChange(): void;
        onManufacturingDateChange(): void;
        onPartNumberChange(): void;
        onProductUrlChange(): void;
        onProductLabelChange(): void;
        onSerialNumberChange(): void;
        onReachableChange(): void;
        onUniqueIdChange(): void;
        addStartUpListener(listener: (event: StartUpEvent) => void): void;
        removeStartUpListener(listener: (event: StartUpEvent) => void): void;
        triggerStartUp(): void;
        addShutDownListener(listener: (event: ShutDownEvent) => void): void;
        removeShutDownListener(listener: (event: ShutDownEvent) => void): void;
        triggerShutDown(): void;
        addLeaveListener(listener: (event: LeaveEvent) => void): void;
        removeLeaveListener(listener: (event: LeaveEvent) => void): void;
        triggerLeave(): void;
        addReachableChangedListener(listener: (event: ReachableChangedEvent) => void): void;
        removeReachableChangedListener(listener: (event: ReachableChangedEvent) => void): void;
        triggerReachableChanged(): void;
    }

    export interface Server {

        onVendorNameChange(): void;
        onVendorIdChange(): void;
        onProductNameChange(): void;
        onNodeLabelChange(): void;
        onHardwareVersionChange(): void;
        onHardwareVersionStringChange(): void;
        onSoftwareVersionChange(): void;
        onSoftwareVersionStringChange(): void;
        onManufacturingDateChange(): void;
        onPartNumberChange(): void;
        onProductUrlChange(): void;
        onProductLabelChange(): void;
        onSerialNumberChange(): void;
        onReachableChange(): void;
        onUniqueIdChange(): void;
    }
}

export const BridgedDeviceBasicInformation: ClusterInterface<BridgedDeviceBasicInformation.State, BridgedDeviceBasicInformation.Client, BridgedDeviceBasicInformation.Server> = {
    definition: BridgedDeviceBasicInformationCluster
}
