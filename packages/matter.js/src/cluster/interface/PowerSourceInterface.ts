/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PowerSourceCluster, ClusterInterface } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type WiredFaultChangeEvent = TypeFromSchema<typeof PowerSourceCluster.events.wiredFaultChange.schema>;
type BatFaultChangeEvent = TypeFromSchema<typeof PowerSourceCluster.events.batFaultChange.schema>;
type BatChargeFaultChangeEvent = TypeFromSchema<typeof PowerSourceCluster.events.batChargeFaultChange.schema>;

export type State = {
    readonly status: number;
    readonly order: number;
    readonly description: string;
    readonly wiredAssessedInputVoltage?: number | undefined;
    readonly wiredAssessedInputFrequency?: number | undefined;
    readonly wiredCurrentType?: number;
    readonly wiredAssessedCurrent?: number | undefined;
    readonly wiredNominalVoltage?: number;
    readonly wiredMaximumCurrent?: number;
    readonly wiredPresent?: boolean;
    readonly activeWiredFaults?: number[];
    readonly batVoltage?: number | undefined;
    readonly batPercentRemaining?: number | undefined;
    readonly batTimeRemaining?: number | undefined;
    readonly batChargeLevel?: number;
    readonly batReplacementNeeded?: boolean;
    readonly batReplaceability?: number;
    readonly batPresent?: boolean;
    readonly activeBatFaults?: number[];
    readonly batReplacementDescription?: string;
    readonly batCommonDesignation?: number;
    readonly batAnsidesignation?: string;
    readonly batIecdesignation?: string;
    readonly batApprovedChemistry?: number;
    readonly batCapacity?: number;
    readonly batQuantity?: number;
    readonly batChargeState?: number;
    readonly batTimeToFullCharge?: number | undefined;
    readonly batFunctionalWhileCharging?: boolean;
    readonly batChargingCurrent?: number | undefined;
    readonly activeBatChargeFaults?: number[];
}

export interface Common {
}

export interface Client extends Common {
    addWiredFaultChangeListener(listener: (event: WiredFaultChangeEvent) => void): void;
    removeWiredFaultChangeListener(listener: (event: WiredFaultChangeEvent) => void): void;
    addBatFaultChangeListener(listener: (event: BatFaultChangeEvent) => void): void;
    removeBatFaultChangeListener(listener: (event: BatFaultChangeEvent) => void): void;
    addBatChargeFaultChangeListener(listener: (event: BatChargeFaultChangeEvent) => void): void;
    removeBatChargeFaultChangeListener(listener: (event: BatChargeFaultChangeEvent) => void): void;
}

export interface Server extends Common {
    triggerWiredFaultChange(): void;
    triggerBatFaultChange(): void;
    triggerBatChargeFaultChange(): void;
}

export const PowerSource: ClusterInterface<State, Client, Server> = {
    definition: PowerSourceCluster
}
