/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { RelativeHumidityCluster, ClusterInterface } from "../index.js";

namespace RelativeHumidity {
    export type State = {
        measuredValue: number | undefined;
        minMeasuredValue: number | undefined;
        maxMeasuredValue: number | undefined;
        tolerance?: number;
    }
}

export const RelativeHumidity: ClusterInterface<RelativeHumidity.State, {}, {}> = {
    definition: RelativeHumidityCluster
}
