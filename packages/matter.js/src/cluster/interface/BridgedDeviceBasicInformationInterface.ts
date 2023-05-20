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
}

export const BridgedDeviceBasicInformation: ClusterInterface<BridgedDeviceBasicInformation.State, BridgedDeviceBasicInformation.Client, {}> = {
    definition: BridgedDeviceBasicInformationCluster
}
