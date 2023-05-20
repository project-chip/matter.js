/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IlluminanceMeasurementCluster, ClusterInterface } from "../index.js";

export module IlluminanceMeasurement {
    export type State = {
        measuredValue: number | undefined;
        minMeasuredValue: number | undefined;
        maxMeasuredValue: number | undefined;
        tolerance?: number;
        lightSensorType?: number | undefined;
    }

    export interface Client {
    }

    export interface Server {
    }
}

export const IlluminanceMeasurement: ClusterInterface<IlluminanceMeasurement.State, IlluminanceMeasurement.Client, IlluminanceMeasurement.Server> = {
    definition: IlluminanceMeasurementCluster
}
