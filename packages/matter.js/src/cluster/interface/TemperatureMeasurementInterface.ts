/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { TemperatureMeasurementCluster, ClusterInterface } from "../index.js";

export module TemperatureMeasurement {
    export type State = {
        measuredValue: number | undefined;
        minMeasuredValue: number | undefined;
        maxMeasuredValue: number | undefined;
        tolerance?: number;
    }

    export interface Client {
    }

    export interface Server {
    }
}

export const TemperatureMeasurement: ClusterInterface<TemperatureMeasurement.State, TemperatureMeasurement.Client, TemperatureMeasurement.Server> = {
    definition: TemperatureMeasurementCluster
}
