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

export module PowerSource {
    export type State = {
        status: number;
        order: number;
        description: string;
        wiredAssessedInputVoltage?: number | undefined;
        wiredAssessedInputFrequency?: number | undefined;
        wiredCurrentType?: number;
        wiredAssessedCurrent?: number | undefined;
        wiredNominalVoltage?: number;
        wiredMaximumCurrent?: number;
        wiredPresent?: boolean;
        activeWiredFaults?: number[];
        batVoltage?: number | undefined;
        batPercentRemaining?: number | undefined;
        batTimeRemaining?: number | undefined;
        batChargeLevel?: number;
        batReplacementNeeded?: boolean;
        batReplaceability?: number;
        batPresent?: boolean;
        activeBatFaults?: number[];
        batReplacementDescription?: string;
        batCommonDesignation?: number;
        batAnsidesignation?: string;
        batIecdesignation?: string;
        batApprovedChemistry?: number;
        batCapacity?: number;
        batQuantity?: number;
        batChargeState?: number;
        batTimeToFullCharge?: number | undefined;
        batFunctionalWhileCharging?: boolean;
        batChargingCurrent?: number | undefined;
        activeBatChargeFaults?: number[];
    }

    export interface Client {
        addWiredFaultChangeListener(listener: (event: WiredFaultChangeEvent) => void): void;
        removeWiredFaultChangeListener(listener: (event: WiredFaultChangeEvent) => void): void;
        triggerWiredFaultChange(): void;
        addBatFaultChangeListener(listener: (event: BatFaultChangeEvent) => void): void;
        removeBatFaultChangeListener(listener: (event: BatFaultChangeEvent) => void): void;
        triggerBatFaultChange(): void;
        addBatChargeFaultChangeListener(listener: (event: BatChargeFaultChangeEvent) => void): void;
        removeBatChargeFaultChangeListener(listener: (event: BatChargeFaultChangeEvent) => void): void;
        triggerBatChargeFaultChange(): void;
    }

    export interface Server {
    }
}

export const PowerSource: ClusterInterface<PowerSource.State, PowerSource.Client, PowerSource.Server> = {
    definition: PowerSourceCluster
}
