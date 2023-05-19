/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { FlowMeasurementCluster, ClusterInterface } from "../index.js";


export module FlowMeasurement {
    export type State = {
        readonly measuredValue: number | undefined;
        readonly minMeasuredValue: number | undefined;
        readonly maxMeasuredValue: number | undefined;
        readonly tolerance?: number;
    }

    export interface Common {
    }
}

export const FlowMeasurement: ClusterInterface<FlowMeasurement.State, FlowMeasurement.Common, FlowMeasurement.Common> = {
    definition: FlowMeasurementCluster
}
