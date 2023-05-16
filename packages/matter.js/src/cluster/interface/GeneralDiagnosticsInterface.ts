/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { GeneralDiagnosticsCluster } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type NetworkInterfaces = TypeFromSchema<typeof GeneralDiagnosticsCluster.attributes.networkInterfaces.schema>;

type TestEventTriggerRequest = TypeFromSchema<typeof GeneralDiagnosticsCluster.commands.testEventTrigger.requestSchema>;

type HardwareFaultChangeEvent = TypeFromSchema<typeof GeneralDiagnosticsCluster.events.hardwareFaultChange.schema>;

type RadioFaultChangeEvent = TypeFromSchema<typeof GeneralDiagnosticsCluster.events.radioFaultChange.schema>;

type NetworkFaultChangeEvent = TypeFromSchema<typeof GeneralDiagnosticsCluster.events.networkFaultChange.schema>;

type BootReasonEvent = TypeFromSchema<typeof GeneralDiagnosticsCluster.events.bootReason.schema>;

export interface GeneralDiagnosticsInterface {
    networkInterfaces: NetworkInterfaces[];
    addNetworkInterfacesListener(listener: (newValue: NetworkInterfaces[], oldValue: NetworkInterfaces[]) => void): void;
    removeNetworkInterfacesListener(listener: (newValue: NetworkInterfaces[], oldValue: NetworkInterfaces[]) => void): void;

    rebootCount: number;
    addRebootCountListener(listener: (newValue: number, oldValue: number) => void): void;
    removeRebootCountListener(listener: (newValue: number, oldValue: number) => void): void;

    upTime?: any;
    addUpTimeListener(listener: (newValue: any, oldValue: any) => void): void;
    removeUpTimeListener(listener: (newValue: any, oldValue: any) => void): void;

    totalOperationalHours?: number;
    addTotalOperationalHoursListener(listener: (newValue: number, oldValue: number) => void): void;
    removeTotalOperationalHoursListener(listener: (newValue: number, oldValue: number) => void): void;

    bootReason?: number;
    addBootReasonListener(listener: (newValue: number, oldValue: number) => void): void;
    removeBootReasonListener(listener: (newValue: number, oldValue: number) => void): void;

    activeHardwareFaults?: number[];
    addActiveHardwareFaultsListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removeActiveHardwareFaultsListener(listener: (newValue: number[], oldValue: number[]) => void): void;

    activeRadioFaults?: number[];
    addActiveRadioFaultsListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removeActiveRadioFaultsListener(listener: (newValue: number[], oldValue: number[]) => void): void;

    activeNetworkFaults?: number[];
    addActiveNetworkFaultsListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removeActiveNetworkFaultsListener(listener: (newValue: number[], oldValue: number[]) => void): void;

    testEventTriggersEnabled: boolean;
    addTestEventTriggersEnabledListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    removeTestEventTriggersEnabledListener(listener: (newValue: boolean, oldValue: boolean) => void): void;

    sendTestEventTrigger(request: TestEventTriggerRequest): Promise<void>;

    addHardwareFaultChangeListener(listener: (event: HardwareFaultChangeEvent) => void): void;
    removeHardwareFaultChangeListener(listener: (event: HardwareFaultChangeEvent) => void): void;

    addRadioFaultChangeListener(listener: (event: RadioFaultChangeEvent) => void): void;
    removeRadioFaultChangeListener(listener: (event: RadioFaultChangeEvent) => void): void;

    addNetworkFaultChangeListener(listener: (event: NetworkFaultChangeEvent) => void): void;
    removeNetworkFaultChangeListener(listener: (event: NetworkFaultChangeEvent) => void): void;

    addBootReasonEventListener(listener: (event: BootReasonEvent) => void): void;
    removeBootReasonEventListener(listener: (event: BootReasonEvent) => void): void;
}

export const GeneralDiagnosticsClientImpl = ClientIfaceImpl<GeneralDiagnosticsInterface>(GeneralDiagnosticsCluster);
export const GeneralDiagnosticsServerImpl = ServerIfaceImpl<GeneralDiagnosticsInterface>(GeneralDiagnosticsCluster);
