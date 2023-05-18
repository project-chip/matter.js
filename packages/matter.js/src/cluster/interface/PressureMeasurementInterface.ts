/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PressureMeasurementCluster, ClusterInterface } from "../index.js";


export interface Common {
    readonly measuredValue: number | undefined;
    readonly minMeasuredValue: number | undefined;
    readonly maxMeasuredValue: number | undefined;
    readonly tolerance?: number;
    readonly scaledValue?: number | undefined;
    readonly minScaledValue?: number | undefined;
    readonly maxScaledValue?: number | undefined;
    readonly scaledTolerance?: number;
    readonly scale?: number;
}

export const PressureMeasurement: ClusterInterface<Common, Common> = {
    definition: PressureMeasurementCluster
}
