/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { TemperatureMeasurementCluster, ClusterInterface } from "../index.js";


export module TemperatureMeasurement {
    export type State = {
        readonly measuredValue: number | undefined;
        readonly minMeasuredValue: number | undefined;
        readonly maxMeasuredValue: number | undefined;
        readonly tolerance?: number;
    }

    export interface Common {
    }
}

export const TemperatureMeasurement: ClusterInterface<TemperatureMeasurement.State, TemperatureMeasurement.Common, TemperatureMeasurement.Common> = {
    definition: TemperatureMeasurementCluster
}
