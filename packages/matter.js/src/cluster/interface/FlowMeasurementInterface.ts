/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { FlowMeasurementCluster, ClusterInterface } from "../index.js";

namespace FlowMeasurement {
    export type State = {
        measuredValue: number | undefined;
        minMeasuredValue: number | undefined;
        maxMeasuredValue: number | undefined;
        tolerance?: number;
    }

    export interface Client {

        onMeasuredValueChange(): void;
        onMinMeasuredValueChange(): void;
        onMaxMeasuredValueChange(): void;
        onToleranceChange(): void;
    }

    export interface Server {

        onMeasuredValueChange(): void;
        onMinMeasuredValueChange(): void;
        onMaxMeasuredValueChange(): void;
        onToleranceChange(): void;
    }
}

export const FlowMeasurement: ClusterInterface<FlowMeasurement.State, FlowMeasurement.Client, FlowMeasurement.Server> = {
    definition: FlowMeasurementCluster
}
