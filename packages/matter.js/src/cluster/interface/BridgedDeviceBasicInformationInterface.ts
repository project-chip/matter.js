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

export module BridgedDeviceBasicInformation {
    export type State = {
        readonly vendorName?: string;
        readonly vendorId?: number;
        readonly productName?: string;
        readonly nodeLabel?: string;
        readonly hardwareVersion?: number;
        readonly hardwareVersionString?: string;
        readonly softwareVersion?: number;
        readonly softwareVersionString?: string;
        readonly manufacturingDate?: string;
        readonly partNumber?: string;
        readonly productUrl?: string;
        readonly productLabel?: string;
        readonly serialNumber?: string;
        readonly reachable: boolean;
        readonly uniqueId?: string;
    }

    export interface Common {
    }

    export interface Client extends Common {
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

export const BridgedDeviceBasicInformation: ClusterInterface<BridgedDeviceBasicInformation.State, BridgedDeviceBasicInformation.Client, BridgedDeviceBasicInformation.Common> = {
    definition: BridgedDeviceBasicInformationCluster
}
