/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IlluminanceMeasurementCluster, ClusterInterface } from "../index.js";


export interface Common {
    readonly measuredValue: number | undefined;
    readonly minMeasuredValue: number | undefined;
    readonly maxMeasuredValue: number | undefined;
    readonly tolerance?: number;
    readonly lightSensorType?: number | undefined;
}

export const IlluminanceMeasurement: ClusterInterface<Common, Common> = {
    definition: IlluminanceMeasurementCluster
}
