/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PressureMeasurementCluster, ClusterInterface } from "../index.js";

namespace PressureMeasurement {
    export type State = {
        measuredValue: number | undefined;
        minMeasuredValue: number | undefined;
        maxMeasuredValue: number | undefined;
        tolerance?: number;
        scaledValue?: number | undefined;
        minScaledValue?: number | undefined;
        maxScaledValue?: number | undefined;
        scaledTolerance?: number;
        scale?: number;
    }

    export interface Client {

        onMeasuredValueChange(): void;
        onMinMeasuredValueChange(): void;
        onMaxMeasuredValueChange(): void;
        onToleranceChange(): void;
        onScaledValueChange(): void;
        onMinScaledValueChange(): void;
        onMaxScaledValueChange(): void;
        onScaledToleranceChange(): void;
        onScaleChange(): void;
    }

    export interface Server {

        onMeasuredValueChange(): void;
        onMinMeasuredValueChange(): void;
        onMaxMeasuredValueChange(): void;
        onToleranceChange(): void;
        onScaledValueChange(): void;
        onMinScaledValueChange(): void;
        onMaxScaledValueChange(): void;
        onScaledToleranceChange(): void;
        onScaleChange(): void;
    }
}

export const PressureMeasurement: ClusterInterface<PressureMeasurement.State, PressureMeasurement.Client, PressureMeasurement.Server> = {
    definition: PressureMeasurementCluster
}
